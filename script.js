// script.js
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const totalImages = images.length;

// Clona la prima immagine e la aggiunge alla fine
const firstClone = images[0].cloneNode(true);
slider.appendChild(firstClone);

// Indice corrente (parte da 0)
let currentIndex = 0;

// Funzione che sposta lo slider
function moveSlider() {
  currentIndex++;
  slider.style.transition = 'transform 1s ease';
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Quando finisce la transizione, controlla se siamo sul clone
slider.addEventListener('transitionend', () => {
  if (currentIndex === totalImages) {
    // disabilita transizione, riporta a inizio, reset indice
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    currentIndex = 0;
    // forzatura di reflow per applicare il "none" prima di riattivare
    // eslint-disable-next-line no-unused-expressions
    slider.offsetHeight;
    slider.style.transition = 'transform 1s ease';
  }
});

// Avvia lo slider ogni 3 secondi
setInterval(moveSlider, 3000);
