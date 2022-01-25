(() => {
    window.onload = () => {
        const navs = document.querySelectorAll(".navlink");
        const langElem = document.querySelector("#lng");
        const navBtn = document.querySelector(".nav-btn-wrap");
        if (navBtn) {
            navBtn.addEventListener("click", function() {
                this.classList.toggle("nav-btn-wrap-active");
            })
        }
    }
})();

