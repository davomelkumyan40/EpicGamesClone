(() => {
    window.onload = () => {
        const sliderElem = document.getElementById("slider");
        const navs = document.querySelectorAll(".navlink");
        const langElem = document.querySelector("#lng");
        const navBtn = document.querySelector(".nav-btn-wrap");
        if (navBtn) {
            navBtn.addEventListener("click", function () {
                this.classList.toggle("nav-btn-wrap-active");
            })
        }
        //slider

        if (sliderElem) {
            const slider = new CaruselSlider(sliderElem, "./assets/slider", "jpg", 7);
            //slider.runAfter(2000);
        }
    }

    class CaruselSlider {
        constructor(container, path, format, count) {
            this.container = container;
            this.btnNext = document.createElement("div");
            this.btnNext.classList.add("slider-btn");
            this.btnNext.id = "b1";
            this.btnNext.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 0 24 24" width="38px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg>`;
            this.btnPrev = document.createElement("div");
            this.btnPrev.classList.add("slider-btn");
            this.btnPrev.id = "b2";
            this.btnPrev.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 0 24 24" width="38px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>`;

            this.container.appendChild(this.btnNext);
            this.container.appendChild(this.btnPrev);

            this.wrapper = document.createElement("div");
            this.wrapper.classList.add("wrapper");
            this.container.appendChild(this.wrapper);
            let style = window.getComputedStyle(this.container);
            this.slideHeight = parseFloat(style.height.split("px")[0]);
            this.slideWidth = parseFloat(style.width.split("px")[0]);
            this.images = [];
            this.slides = [];
            this.paths = [];
            this.multiplayer = 1;
            if (this.slideWidth < 960) {
                this.multiplayer = 1;
            }
            else if (this.slideWidth < 1300) {
                this.multiplayer = 2;
            }
            else {
                this.multiplayer = 3;
            }
            this.wrapper.style.width = `${this.slideWidth / this.multiplayer * count}px`;
            for (let i = 0; i < count; i++) {
                let img = `${path}/${i + 1}.${format}`;
                this.paths.push(img);
                let imgElem = document.createElement("div");
                imgElem.id = i;
                imgElem.style.backgroundImage = `url(${img})`;
                imgElem.classList.add("slide-img");
                this.images.push(imgElem);
                let slide = document.createElement("div");
                slide.appendChild(imgElem);
                slide.classList.add("slide");
                slide.style.height = `${this.slideHeight}px`;
                slide.style.width = `${this.slideWidth / this.multiplayer}px`;
                this.slides.push(slide);
                let content = document.createElement("div");
                content.classList.add("slide-content");
                content.innerHTML = `<h1>Some Header ${i}</h1>`; //TODO
                slide.appendChild(content);
                this.wrapper.appendChild(slide);
            }

            window.addEventListener("resize", (e) => {
                this.wrapper.classList.add("no-transition");
                this.slideHeight = e.target.innerHeight;
                this.slideWidth = e.target.innerWidth;
                this.currentPos = this.slideWidth / this.multiplayer;

                if (this.slideWidth < 960)
                    this.multiplayer = 1;
                else if (this.slideWidth < 1300)
                    this.multiplayer = 2;
                else
                    this.multiplayer = 3;
                this.wrapper.style.width = `${this.slideWidth / this.multiplayer * count}px`;

                this.slides.forEach((v, i) => {
                    v.style.width = `${this.slideWidth / this.multiplayer}px`;
                });
                this.wrapper.classList.remove("no-transition");
                this.wrapper.offsetHeight;
            });

            this.slides.forEach((v, i) => {
                v.addEventListener("click", (e) => {
                    this.wrapper.style.width = `${((this.slideWidth / this.multiplayer) * (count - 1)) + this.slideWidth}px`;
                    v.style.width = `${this.slideWidth}px`;
                    let closeBtn = document.createElement("div");
                    closeBtn.classList.add("slider-close-btn");
                    this.container.appendChild(closeBtn);
                    closeBtn.addEventListener("click", () => {
                        v.style.width = `${this.slideWidth / this.multiplayer}px`;
                        this.wrapper.style.width = `${(this.slideWidth / this.multiplayer) * count}px`;
                        closeBtn.classList.remove("slider-close-btn");
                    });
                });
            });
            this.currentPos = this.slideWidth / this.multiplayer;
            this.next = false;

            this.btnNext.addEventListener("click", () => {
                this.next = true;
                this.wrapper.style.transform = `translateX(-${this.currentPos}px)`;
            });

            this.btnPrev.addEventListener("click", () => {
                this.next = false;
                this.wrapper.style.transform = `translateX(${this.currentPos}px)`;
            });

            this.current = 1; //TODO test
            this.clicked = 0;
            this.wrapper.addEventListener("transitionend", () => {
                console.log("again");
                this.wrapper.classList.add("no-transition");
                this.wrapper.style.transform = `translateX(0px)`;
                this.wrapper.offsetHeight;
                this.wrapper.classList.remove("no-transition");

                this.clicked++;
                if (this.clicked > count - 1)
                    this.clicked = 0;
                //TODO finish
                if (this.next) {
                    let i = 0;
                    let f = this.current; //1
                    let g = this.current + this.clicked; //2
                    while (i < count) {
                        i++;
                        if (f > count - 1)
                            f = 0;
                        if (g > count - 1) {
                            let t = g;
                            g = 0;
                            g += t - count;
                        }
                        this.images[f].style.backgroundImage = `url(${this.paths[g]})`;
                        f++;
                        g++;
                    }
                    this.current++;
                    this.current = this.current > count - 1 ? 0 : this.current;

                } else {
                    let i = 0;
                    let f = this.current; //1
                    let g = this.current - this.clicked; //2
                    while (i < count) {
                        i++;
                        if (f > count - 1)
                            f = 0;
                        if (g > count - 1) {
                            let t = g;
                            g = 0;
                            g += t - count;
                        }
                        this.images[f].style.backgroundImage = `url(${this.paths[g]})`;
                        f++;
                        g++;
                    }
                    this.current--;
                    this.current = this.current < 0 ? count - 1 : this.current;
                }
            });
        }

        runAfter(ms) {
            setTimeout(() => {
                this.wrapper.style.transform = "translateX(-100%)";
            }, ms);
        }
    }
})();

