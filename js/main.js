// burger
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});


// swiper

// feedback section
const swiperOne = new Swiper('.feedback-slider', {

  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});


// certificates section
const swiperTwo = new Swiper('.certificates-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

// accordion

const accordion = document.querySelector('.accordion');
const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {

    const currentText = accordionTitle.parentElement.querySelector('.accordion__text');

    accordionTitle.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible');

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }

  });
});
