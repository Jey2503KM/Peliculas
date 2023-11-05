document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const buttons = document.querySelectorAll(".movie-filter button");
  const cards = document.querySelectorAll(".col");
  const filterButtons = document.querySelectorAll(".movie-filter button");
  const searchInput = document.querySelector("input[type='search']");
  const searchButton = document.querySelector("button[type='submit']");
  const cardTitles = document.querySelectorAll('.card-title');
  const modal = new bootstrap.Modal(document.getElementById('movieModal'));
  const openButtons = document.querySelectorAll('.open-movie-details');
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
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const movieId = button.getAttribute('data-movie-id'); // Obtiene el ID de la película
  
      // Aquí debes cargar los detalles de la película con el ID correspondiente
      // Puedes usar una función o un objeto que contenga los detalles de todas las películas.
  
      // Luego, actualiza el contenido del modal con los detalles de la película seleccionada
      const modalTitle = document.querySelector('.modal-title');
      const modalBody = document.querySelector('.modal-body');
  
      // Aquí debes llenar modalTitle y modalBody con los detalles de la película correspondiente
  
      // Abre el modal
      const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
      movieModal.show();
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
