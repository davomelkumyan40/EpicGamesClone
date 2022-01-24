(() => {
    const navs = document.querySelectorAll(".navlink");
    const langElem = document.querySelector("#lng");

    const setNavBarActiveToggle = function (navs) {
        if (navs) {
            for (let i = 0; i < navs.length; i++) {
                navs[i].addEventListener("click", function () {
                    navs.forEach(c => c.classList.remove("nav-active"));
                    this.classList.add("nav-active");
                });
            }
        }
    }

    const updateLanguageList = function (lngElem) {
        if (lngElem) {
            fetch(); // TODO finish
        }
    }

    window.onload = () => {
        setNavBarActiveToggle(navs);
    }
})();

