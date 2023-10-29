const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Função para mostrar a imagem correspondente ao índice
function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

// Event listeners para os indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    updateIndicators();
  });
});

// Event listeners para os botões anterior e próximo
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  updateIndicators();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  updateIndicators();
});

// Função para atualizar os indicadores
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
  updateIndicators();
}, 5000);


// Iniciar o carrossel com a primeira imagem visível
showImage(currentIndex);
updateIndicators();