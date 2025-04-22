// Funzione per far scorrere le immagini automaticamente
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function moveSlider() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}

// Imposta il movimento automatico ogni 3 secondi
setInterval(moveSlider, 3000);
