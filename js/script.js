document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const buttons = document.querySelectorAll(".movie-filter button");
  const cards = document.querySelectorAll(".col");
  const filterButtons = document.querySelectorAll(".movie-filter button");
  const searchInput = document.querySelector("input[type='search']");
  const searchButton = document.querySelector("button[type='submit']");
  const cardTitles = document.querySelectorAll('.card-title');
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

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("btn-green"));
      filterButtons.forEach((btn) => btn.classList.add("btn-transparent"));

      this.classList.remove("btn-transparent");
      this.classList.add("btn-green");
    });
  });

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cards.forEach(function (card, index) {
      const cardTitle = cardTitles[index].textContent.toLowerCase();
      const cardContainer = card.closest('.col');

      if (cardTitle.includes(searchTerm)) {
        cardContainer.style.display = "block";
      } else {
        cardContainer.style.display = "none";
      }
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
