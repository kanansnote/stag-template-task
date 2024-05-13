// Container sliders

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

// Color change on scrolling

document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const targetElements = document.querySelectorAll('body, a, i, button');

  const pageThresholds = {
    homePage: 1700,
    projectsPage: 1000,
    aboutPage: 1000,
    galleryPage: 1000,
    contactPage: 200,
    blogPage: 600,
  };

  // Loop through page names (object keys)
  for (const pageName in pageThresholds) {
    const element = document.getElementById(pageName);
    const threshold = pageThresholds[pageName];

    if (scrollPosition > threshold && element) {
      targetElements.forEach(target => {
        target.style.color = 'black';
        target.style.transition = '0.5s ease-in-out';
      });
      break; // Only change color once per page
    } else {
      targetElements.forEach(target => {
        target.style.color = '#f9f9f9';
        target.style.transition = '0.5s ease-in-out';
      });
    }
  }
});

// Scroll to Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";  /* Show button when scrolled down */
  } else {
    topBtn.style.display = "none";   /* Hide button when scrolled up */
  }
}

topBtn.addEventListener("click", function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',  // Enables smooth scrolling animation
    block: 'start'       // Scrolls to the top of the page
  });
});

// Live time implementation

const updateHours = String(new Date().getHours()).padStart(2, '0');
const updateMinutes = String(new Date().getMinutes()).padStart(2, '0');
const updateTime = updateHours + ':' + updateMinutes;
const copyrightElement = document.getElementById("currentTime");

copyrightElement.innerHTML = updateTime;
