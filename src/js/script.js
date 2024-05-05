// Slider for .Projects section using swiper.js

const projectsSwiper1 = new Swiper('.projectsMain1', {
    slidesPerView: 'auto', // Adjust this value to control how many slides are visible at a time
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

const projectsSwiper2 = new Swiper('.projectsMain2', {
    slidesPerView: 'auto', // Adjust this value to control how many slides are visible at a time
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});