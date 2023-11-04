document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.clientHeight; 
    let isNavbarFixed = false;

   
    window.addEventListener("scroll", function () {
        if (window.scrollY > navbarHeight) {
            if (!isNavbarFixed) {
                navbar.classList.add("navbar-fixed");
                isNavbarFixed = true;
            }
        } else {
            if (isNavbarFixed) {
                navbar.classList.remove("navbar-fixed");
                isNavbarFixed = false;
            }
        }
    });

});