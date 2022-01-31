"use strict";
import CaruselSlider from "./modules/slider.js";


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


})();

