document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const buttons = document.querySelectorAll(".movie-filter button");
  const cards = document.querySelectorAll(".col");
  let isNavbarFixed = false;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("title");

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "popular" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

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