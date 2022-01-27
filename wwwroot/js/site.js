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
            let slideHeight = style.height;
            let slideWidth = style.width;
            let sw = parseFloat(slideWidth.split("px")[0]);
            this.wrapper.style.width = `${sw * count + 18}px`;
            console.log(parseFloat(slideWidth.split("px")[0]));
            this.images = [];
            this.slides = [];
            this.contentList = [];
            this.proportion = 100 / 3;
            let f = 0;
            let multiplayer = 1;
            if (sw < 960) {
                multiplayer = 1;
                this.proportion = 100;
            }
            else if (sw < 1300) {
                multiplayer = 1;
                this.proportion = 100 / 2;
            }
            else {
                multiplayer = 2;
                this.proportion = 100 / 3;
            }
            for (let i = 0; i < count; i++) {
                let img = `${path}/${i + 1}.${format}`;
                this.images.push(img);
                let imgElem = document.createElement("img");
                imgElem.src = img;
                imgElem.alt = "IMG";
                let slide = document.createElement("div");
                slide.appendChild(imgElem);
                slide.style.height = slideHeight;
                slide.style.width = slideWidth;
                if (sw > 959)
                    slide.style.transform = `translateX(-${f}%)`;
                console.log(f);
                f += this.proportion * multiplayer;
                slide.classList.add("slide");
                this.slides.push(slide);
                let content = document.createElement("div");
                content.classList.add("slide-content");
                this.contentList.push(content);
                content.innerHTML = "<h1>Some Header</h1>"; //TODO
                slide.appendChild(content);
                this.wrapper.appendChild(slide);
            }

            window.addEventListener("resize", (e) => {
                let multiplayer = 1;
                if (e.target.innerWidth < 960) {
                    multiplayer = 1;
                    this.proportion = 100;
                }
                else if (e.target.innerWidth < 1300) {
                    multiplayer = 1;
                    this.proportion = 100 / 2;
                }
                else {
                    multiplayer = 2;
                    this.proportion = 100 / 3;
                }
                this.wrapper.style.width = `${e.target.innerWidth * count + 18}px`;
                let f = 0;
                this.slides.forEach((v, i) => {
                    v.style.width = `${e.target.innerWidth}px`;
                    if (e.target.innerWidth > 959)
                        v.style.transform = `translateX(-${f}%)`;
                    else v.style.transform = `translateX(0)`;
                    console.log(f);
                    f += this.proportion * multiplayer;
                });
            });
        }

        runAfter(ms) {
            setTimeout(() => {
                this.wrapper.style.transform = "translateX(-100%)";
            }, ms);
        }
    }
})();

