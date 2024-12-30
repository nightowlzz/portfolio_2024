const careerSwiper = new Swiper('.career-section .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.career-section .swiper-button-next',
    prevEl: '.career-section .swiper-button-prev',
  },
});

const portfolioSwiper = new Swiper('.portfolio-section .swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.portfolio-section .swiper-button-next',
    prevEl: '.portfolio-section .swiper-button-prev',
  },
});
