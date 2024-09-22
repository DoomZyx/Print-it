const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const flecheGauche = document.querySelector(".arrow_left");
const flecheDroite = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagline = document.querySelector(".tagline");

let dots = document.querySelectorAll(".dot");

let indexActuel = 0;

// @ts-ignore
bannerImg.src = slides[indexActuel].image;
// @ts-ignore
tagline.innerHTML = slides[indexActuel].tagLine;

function nextImg() {
  indexActuel++;
  if (indexActuel >= slides.length) {
    indexActuel = 0;
  }
  dots.forEach(function (dot, position) {
    if (position === indexActuel) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

  // @ts-ignore
  bannerImg.src = slides[indexActuel].image;
  // @ts-ignore
  tagline.innerHTML = slides[indexActuel].tagLine;
  console.log(nextImg);
}

function prevImg() {
  indexActuel--;
  if (indexActuel < 0) {
    indexActuel = slides.length - 1;
  }

  dots.forEach(function (dot, position) {
    if (position === indexActuel) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
  // @ts-ignore
  bannerImg.src = slides[indexActuel].image;
  // @ts-ignore
  tagline.innerHTML = slides[indexActuel].tagLine;
  console.log(prevImg);
}

// @ts-ignore
flecheGauche.addEventListener("click", prevImg);
// @ts-ignore
flecheDroite.addEventListener("click", nextImg);
