// Fonction pour initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');
  const galleryContent = document.getElementById('nav-content');
  const pageSections = document.querySelectorAll('main > .fade-in > .cont-1, main > .fade-in > .cont-2, main > .fade-in > .cont-3');

  // Fonction pour créer le menu dynamiquement
  function createMenu() {
    const menuItems = menuContainer.querySelectorAll('h2'); // Sélectionne tous les éléments h2 dans le menu
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const galleryId = item.getAttribute('data-gallery');
        console.log(`Clicked menu item: ${item.textContent}, Gallery ID: ${galleryId}`);

        // Créer et montrer la galerie dynamique
        const gallery = createGallery(galleryId);

        // Cacher les sections de la page qui sont statiques
        pageSections.forEach(section => {
          section.style.display = 'none';
        });

        // Montrer la galerie et ses sections dynamiques
        galleryContent.style.display = 'block';
        galleryContent.innerHTML = ''; // Efface le contenu existant de la galerie
        galleryContent.appendChild(gallery); // Ajoute la galerie créée au contenu de la galerie
      });
    });
  }

  // Fonction pour créer la galerie dynamiquement
  function createGallery(galleryId) {
    console.log(`Creating gallery for ID: ${galleryId}`);
    const galleryWrapper = document.createElement('div');
    galleryWrapper.classList.add('gallery-wrapper');

    const galleryTitles = {
      gallery1: ' < Maquettes & Sites Web > ',
      gallery2: ' < Mon CV > ',
    };

    // Ajoute les titres des galeries
    const title = document.createElement('h3');
    title.textContent = galleryTitles[galleryId] || 'Galerie non disponible';
    title.classList.add('gallery-title');
    galleryWrapper.appendChild(title);

    // Créer les éléments de la galerie
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');

    // Créer les images de la galerie
    const imageSources = getImageSourcesForGallery(galleryId);
    imageSources.forEach((item, index) => {
      const figure = document.createElement('figure');
      figure.classList.add('gallery-item-container');

      if (item.carouselImages) {
        const carouselContainer = createCarousel(item.carouselImages, index, item.text);
        figure.appendChild(carouselContainer);
      } else {
        const imgLink = createImageLink(item);
        figure.appendChild(imgLink.link);
        figure.appendChild(imgLink.caption);
      }

      gallery.appendChild(figure);
    });

    galleryWrapper.appendChild(gallery);

    // Ajout contenu gallery2
        if (galleryId === 'gallery2') {
          // Première section : Mon Parcours
          const textDiv1 = document.createElement('div');
          textDiv1.innerHTML = `
            <h2>Mon Parcours</h2>
            <p>Je suis actuellement en formation Développeur Web et Web Mobile (DWWM) à l'AFPA d'Albi, et je nourris une véritable passion pour le 
            design ainsi que pour le développement front-end. Mon objectif est de me spécialiser dans ce domaine en constante 
            évolution. Titulaire d’une licence d’anglais LLCER, je possède un bon niveau en anglais, ce qui me permet de comprendre facilement le 
            code et de travailler sur des projets internationaux. Par ailleurs, je maîtrise parfaitement des outils de conception tels que Figma,
            Photoshop, Illustrator, ainsi que Git, ce qui me permet de travailler efficacement en équipe et de créer des interfaces attrayantes 
            et fonctionnelles.</p>
          `;
          textDiv1.classList.add('gallery1-text');
          galleryWrapper.appendChild(textDiv1);
        
          // Deuxième section : Compétences
          const textDiv2 = document.createElement('div');
          textDiv2.innerHTML = `
            <h2>Competences</h2>
            <i class="fa-brands fa-figma"></i>
            <i class="fa fa-html5" aria-hidden="true"></i>
            <i class="fa fa-css3" aria-hidden="true"></i>
            <i class="fas fa-sass"></i>
            <i class="fa-brands fa-bootstrap"></i>
            <i class="fa-brands fa-js"></i>
          `;
          textDiv2.classList.add('gallery2-text');
          galleryWrapper.appendChild(textDiv2);
    
          // Troisième section : Mes Projets
          const textDiv3 = document.createElement('div');
          textDiv3.innerHTML = `
            <h2>Savoir-Etre</h2>
            <ul>
            <li>Autonomie</li>
            <li>Organisation</li>
            <li>Curiosité</li>
            <li>Créativité</li>
            </ul>
            <!-- Ajoutez des détails de projets ici -->
          `;
          textDiv3.classList.add('gallery3-text');
          galleryWrapper.appendChild(textDiv3);

          // Troisième section : Expériences
          const textDiv4 = document.createElement('div');
          textDiv4.innerHTML = `
            <h2>Experiences</h2>
            <p>2022 - SERVEUSE/BARISTA
            </p>
            <p class="job1">2023 - AGENT D’ENTRETIEN PARTICULIERS
            </p>
            <p class="job2">2020 - 2023 FREELANCE ARTS ET DESIGN
            </p>
            <a href>Telecharger mon CV</a>
          `;
          textDiv4.classList.add('gallery4-text');
          galleryWrapper.appendChild(textDiv4);
        }

    // Ajouter une description pour la galerie 1
    if (galleryId === 'gallery1') {
      const description = document.createElement('div');
      description.textContent = 'Maquettes réalisées au cours de la formation sur Figma et Illustrator.';
      description.classList.add('gallery-text');
      galleryWrapper.appendChild(description);

      const carousel = createKarousel();
      galleryWrapper.appendChild(carousel);
    }
    return galleryWrapper;
  }

  // Initialisation du menu
  createMenu();
});

// Fonction pour créer un carousel selon les images fournies
function createCarousel(images, index, text) {
  const carouselContainer = document.createElement('div');
  const carouselId = `carousel${index}`;
  carouselContainer.id = carouselId;
  carouselContainer.classList.add('carousel', 'slide');
  carouselContainer.setAttribute('data-bs-ride', 'carousel');

  const carouselInner = document.createElement('div');
  carouselInner.classList.add('carousel-inner');

  images.forEach((src, imgIndex) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (imgIndex === 0) carouselItem.classList.add('active');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${imgIndex + 1} for ${text}`;
    img.classList.add('d-block', 'w-100');
    img.loading = 'lazy';

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });

  // Controle carousel
  const controls = createCarouselControls(carouselId);
  carouselContainer.appendChild(carouselInner);
  carouselContainer.appendChild(controls.prev);
  carouselContainer.appendChild(controls.next);

  return carouselContainer;
}

// Fonction pour créer carousel Site (gallery1)
function createKarousel() {
  const carouselWrapper = document.createElement('div');
  carouselWrapper.classList.add('carousel-wrapper');

  const carouselHTML = `
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/images/afpa.png" class="d-block w-100" alt="Slide 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Refonte site AFPA</h5>
            <p>Site conçu en cours afin d'apprendre les bases HTML et CSS.</p>
            <a href='assets/sites/AFPA/index.html'>Voir le site</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/shoesplash.png" class="d-block w-100" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block">
            <h5 class='fw-bold'>Site Shoesplash</h5>
            <p>Simulation site vitrine pour apprendre les media queries et approfondir les connaissances en CSS.</p>
            <a href='assets/sites/SHOESPLASH/index.html'>Voir le site</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="assets/images/preECF.png" class="d-block w-100" alt="Slide 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Site Librairie ECF</h5>
            <p>Site conçu pendant la pré-évaluation ECF1 bloc Front-End.</p>
            <a href='assets/sites/PreECF/html/index.html'>Voir le site</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  carouselWrapper.innerHTML = carouselHTML;
  return carouselWrapper;
}

// Fonction pour créer les contrôles du carousel
function createCarouselControls(carouselId) {
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-control-prev');
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('data-bs-target', `#${carouselId}`);
  prevButton.setAttribute('data-bs-slide', 'prev');
  prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-control-next');
  nextButton.setAttribute('type', 'button');
  nextButton.setAttribute('data-bs-target', `#${carouselId}`);
  nextButton.setAttribute('data-bs-slide', 'next');
  nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

  return { prev: prevButton, next: nextButton };
}

// Fonction pour créer un lien vers une image
function createImageLink(item) {
  const link = document.createElement('a');
  link.href = item.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  const img = document.createElement('img');
  img.src = item.src;
  img.alt = item.text;
  img.classList.add('gallery-item');
  img.loading = 'lazy';

  link.appendChild(img);

  const caption = document.createElement('figcaption');
  caption.textContent = item.text;
  caption.classList.add('gallery-caption');

  return { link, caption };
}

// Fonction pour récupérer les sources d'images pour la galerie
function getImageSourcesForGallery(galleryId) {
  const imageSets = {
    gallery1: [
      {
        text: 'Maquette conçue pour un projet personnel',
        src: 'assets/maquettes/cafe_Doux_Temp.jpg',
        link: 'assets/maquettes/cafe_Doux_Temp.jpg',
      },
      {
        text: 'Maquette Moderne réalisée pour un projet en formation',
        src: 'assets/maquettes/modern_Temp.jpg',
        link: 'assets/maquettes/modern_Temp.jpg',
      },
      {
        text: "Maquette Fictive d'un site de cours en ligne réalisée pour un projet personnel",
        src: 'assets/maquettes/educSTars_Tempprevieew.png',
        link: 'assets/maquettes/EducStars_Temp.pdf',
      },
      {
        text: 'Maquette de refonte AFPA',
        link: 'https://example.com/afpa-project',
        carouselImages: [
          './assets/maquettes/afpa/Afpa_Temp1.jpg',
          './assets/maquettes/afpa/Afpa_Temp2.jpg',
          './assets/maquettes/afpa/Afpa_Temp3.jpg',
          './assets/maquettes/afpa/Afpa_Temp4.jpg',
        ],
      },
    ],
  };

  return imageSets[galleryId] || []; // Retourne les sources d'images pour la galerie spécifiée, ou un tableau vide si la galerie n'existe pas
}


// Fonction pout initialiser la galerie quand la page est chargée
document.addEventListener('DOMContentLoaded', () => {
  const galleryContent = document.getElementById('galleryContent');
  if (galleryContent) {
    galleryContent.style.display = 'none'; // Masquer le contenu de la galerie
  }
  createMenu(); // Appelez la fonction pour créer le menu
});

// Fonction pour créer le menu dynamiquement
function createMenu() {
  const menuContainer = document.getElementById('menu');
  const menuItems = menuContainer.querySelectorAll('h2'); // Sélectionne tous les éléments h2 dans le menu
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const galleryId = item.getAttribute('data-gallery');
      console.log(`Clicked menu item: ${item.textContent}, Gallery ID: ${galleryId}`);
      // Ajoutez ici le code pour créer et afficher la galerie en fonction de `galleryId`
    });
  });
}

// Intersection Observer pour ajouter une classe 'in-view' aux éléments visibles
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');// Ajoute une classe 'in-view' aux éléments visibles
    } else {
      entry.target.classList.remove('in-view');// Ajoute une classe 'in-view' aux éléments visibles
    }
  });
}, { threshold: 0.1 });// Seuil d'intersection à 10%

// Elements à observer
const elements = document.querySelectorAll('.slide-element');
elements.forEach((element) => { //Ajoute un gestionnaire d'événement pour chaque élément
  observer.observe(element);
});
