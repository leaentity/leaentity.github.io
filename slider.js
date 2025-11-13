document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.photo-section .slide');
  const prevBtn = document.querySelector('.photo-section .prev');
  const nextBtn = document.querySelector('.photo-section .next');

  let currentIndex = 0;

  function goToSlide(newIndex) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (newIndex + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
  });
});
