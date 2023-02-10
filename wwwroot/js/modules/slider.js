"use strict";

export default class CaruselSlider {
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
        this.sliderHeight = parseFloat(style.height.split("px")[0]);
        this.sliderWidth = parseFloat(style.width.split("px")[0]);
        this.images = [];
        this.slides = [];
        this.paths = [];
        this.next = false;
        this.multiplayer = 1;
        this.navigated = false;
        this.multiplayer = this.sliderWidth < 960 ? 1 : this.sliderWidth < 1367 ? 2 : 3;
        this.currentPos = this.sliderWidth / this.multiplayer;
        this.wrapper.style.width = `${this.sliderWidth / this.multiplayer * count}px`;
        this.wrapper.style.left = `-${this.sliderWidth / this.multiplayer}px`;

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
            slide.style.height = `${this.sliderHeight}px`;
            slide.style.width = `${this.sliderWidth / this.multiplayer}px`;
            this.slides.push(slide);
            let content = document.createElement("div");
            content.classList.add("slide-content");
            content.innerHTML = `<h1>Some Header ${i}</h1>`; //TODO finish
            slide.appendChild(content);
            this.wrapper.appendChild(slide);
        }

        const nextHandler = () => {
            this.next = true;
            this.navigated = true;
            this.wrapper.style.transform = `translateX(-${this.currentPos}px)`;

        };
        const prevHandler = () => {
            this.next = false;
            this.navigated = true;
            this.wrapper.style.transform = `translateX(${this.currentPos}px)`;
        };

        const addBtnsHandler = () => {
            this.btnNext.addEventListener("click", nextHandler);
            this.btnPrev.addEventListener("click", prevHandler);
        }

        const removeBtnsHandler = () => {
            this.btnNext.removeEventListener("click", nextHandler);
            this.btnPrev.removeEventListener("click", prevHandler);
        }

        const resetWrapperPosition = () => {
            this.wrapper.classList.add("no-transition");
            this.wrapper.style.transform = `translateX(0px)`;
            this.wrapper.offsetHeight;
            this.wrapper.classList.remove("no-transition");
        }

        addBtnsHandler();

        window.addEventListener("resize", (e) => {
            this.sliderHeight = e.target.innerHeight;
            this.sliderWidth = e.target.innerWidth;
            this.multiplayer = this.sliderWidth < 960 ? 1 : this.sliderWidth < 1367 ? 2 : 3;
            this.currentPos = this.sliderWidth / this.multiplayer;
            this.wrapper.classList.add("no-transition");
            this.wrapper.style.width = `${this.sliderWidth / this.multiplayer * count}px`;
            this.wrapper.style.left = `-${this.sliderWidth / this.multiplayer}px`;
            this.wrapper.style.height = `${this.sliderHeight}px`;
            this.wrapper.classList.remove("no-transition");
            this.wrapper.offsetHeight;
            this.slides.forEach((v, i) => {
                v.style.width = `${this.sliderWidth / this.multiplayer}px`;
                v.style.height = `${this.sliderHeight}px`;
            });

        });

        //TODO finish
        this.slides.forEach((v, i) => {
            v.addEventListener("click", (e) => {
                this.wrapper.style.width = `${((this.sliderWidth / this.multiplayer) * (count - 1)) + this.sliderWidth}px`;
                this.slides.forEach((v1) => v1.classList.add("slide-transition"));
                v.style.width = `${this.sliderWidth}px`;
                let closeBtn = document.createElement("div");
                closeBtn.classList.add("slider-close-btn");
                this.container.appendChild(closeBtn);
                closeBtn.addEventListener("click", () => {
                    this.slides.forEach((v1) => v1.classList.remove("slide-transition"));
                    v.style.width = `${this.sliderWidth / this.multiplayer}px`;
                    this.wrapper.style.width = `${(this.sliderWidth / this.multiplayer) * count}px`;
                    closeBtn.classList.remove("slider-close-btn");
                });
            });
        });



        this.wrapper.addEventListener("transitionend", () => {
            if (!this.navigated)
                return;
            this.navigated = false;
            removeBtnsHandler();
            resetWrapperPosition();
            let m = 0;
            if (this.next) {
                let i = 0;
                this.images[count - 1].style.backgroundImage = this.images[0].style.backgroundImage;
                while (i < count - 1) {
                    m = i + 1;
                    this.images[i++].style.backgroundImage = this.images[m].style.backgroundImage;
                }
            }
            else {
                let i = count - 1;
                while (i >= 0) {
                    m = i === 0 ? count - 1 : i - 1;
                    this.images[i--].style.backgroundImage = this.images[m].style.backgroundImage;
                }
            }
            addBtnsHandler();
        });
    }

    runAfter(ms) {
        setTimeout(() => {

        }, ms);
    }
}