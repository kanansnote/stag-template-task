const projectsSwiper1 = new Swiper('.projectsMain1', {
    slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

const projectsSwiper2 = new Swiper('.projectsMain2', {
    slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

const testimonialSwiper = new Swiper('.Testimonial', {
    slidesPerView: 'auto', // Adjust this value to control how many slides are visible at a time
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
});

const gallerySwiper = new Swiper('.Gallery', {
  slidesPerView: 'auto',
  loop: true, // Enable loop for endless scrolling
  speed: 1500,
  autoplay: {
    delay: 0, // Set delay to 0 for immediate transition between slides
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});
