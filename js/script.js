document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  const buttons = document.querySelectorAll(".movie-filter button");
  const cards = document.querySelectorAll(".col");
  const filterButtons = document.querySelectorAll(".movie-filter button");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const cardTitles = document.querySelectorAll('.card-title');
  const card = document.querySelectorAll('.card');
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
  card.forEach(card => {
    card.addEventListener('click', function() {
      const titulo = this.querySelector('.card-title').textContent;
      const sinopsis = obtenerSinopsis(titulo);
      const actores = obtenerActores(titulo); 
      const imagen = this.querySelector('.card-img-top').src;
      document.getElementById('detallesPelicula').style.display = 'block';
      document.getElementById('tituloPelicula').innerText = titulo;
      document.getElementById('sinopsisPelicula').innerText = `Sinopsis: ${sinopsis}`;
      document.getElementById('actoresPelicula').innerText = `Actores: ${actores}`;
      document.getElementById('imagenPelicula').src = imagen;
      document.getElementById('seccionComentarios').style.display = 'block';
    });
  });
  function agregarComentario() {
    const nuevoComentario = document.getElementById('nuevoComentario').value;
    const listaComentarios = document.getElementById('listaComentarios');
    const comentario = document.createElement('p');
    comentario.innerText = nuevoComentario;
    listaComentarios.appendChild(comentario);
    document.getElementById('nuevoComentario').value = ''; 
  }

 
  function obtenerSinopsis(titulo) {
    if (titulo === 'Five Night at Freddy\'s') {
      return 'Sinopsis de Five Night at Freddy\'s';
    } else if (titulo === 'Saw X') {
      return 'Sinopsis de Saw X';
    }
  }

  function obtenerActores(titulo) {
    
    if (titulo === 'Five Night at Freddy\'s') {
      return 'Actores de Five Night at Freddy\'s';
    } else if (titulo === 'Saw X') {
      return 'Actores de Saw X';
    }
  }
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
