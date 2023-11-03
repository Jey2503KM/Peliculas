document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.clientHeight; 

    const previousPage = document.getElementById("previousPage");
    const nextPage = document.getElementById("nextPage");
    const pageNumbers = document.querySelectorAll(".pagination a[aria-label^='Page']");

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
    previousPage.addEventListener("click", function (e) {
        e.preventDefault();

      });
    nextPage.addEventListener("click", function (e) {
      e.preventDefault();
 
    });
    pageNumbers.forEach(function (pageNumber) {
        pageNumber.addEventListener("click", function (e) {
          e.preventDefault();
       
        });
      });

});