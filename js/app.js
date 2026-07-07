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

document.querySelectorAll("img").forEach(img=>{
  img.setAttribute("loading","lazy")
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  });
});

navLinks.addEventListener('click', (e) => {
  if (e.target === navLinks) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  }
});

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
