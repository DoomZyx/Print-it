const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
console.log("Tableau slides:", slides);

// Sélectionner les éléments DOM : image, texte, et les dots
const bannerImg = document.querySelector('.banner-img');
console.log("Image sélectionnée:", bannerImg);

const bannerText = document.querySelector('.tagline');
console.log("Texte sélectionné:", bannerText);

const dots = document.querySelectorAll('.dot');
console.log("Dots sélectionnés:", dots);

const arrowleft = document.querySelector('.arrow_left');
console.log("Flèche gauche sélectionnée:", arrowleft);

const arrowright = document.querySelector('.arrow_right');
console.log("Flèche droite sélectionnée:", arrowright);

// Initialisation de l'index pour suivre le slide actif
let currentIndex = 0;

// Ajout de l'évenement click sur la flèche gauche
arrowleft.addEventListener('click', () => {
    console.log("Flèche gauche cliquée");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});

// Ajout de l'événement click sur la flèche droite
arrowright.addEventListener('click', () => {
    console.log("Flèche droite cliquée");
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

// Fonction pour afficher l'image et le texte correspondant au slide
function showSlide(index) {
    console.log("Afficher le slide:", index);
    console.log("Image:", slides[index].image);
    console.log("TagLine:", slides[index].tagLine);

    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;

    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}


// Ajouter un événement `click` sur chaque dot pour naviguer
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        console.log("Dot cliqué:", index);
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Afficher le premier slide au chargement de la page
showSlide(currentIndex);
