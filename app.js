// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
