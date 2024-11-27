// Text Replacement Effect
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}

// Smooth Scroll to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const toTopButton = document.getElementById("to-top");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTopButton.style.opacity = "1";
      toTopButton.style.pointerEvents = "auto";
    } else {
      toTopButton.style.opacity = "0";
      toTopButton.style.pointerEvents = "none";
    }
  });

  // Smooth scroll to top when the button is clicked
  toTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Close Navbar on Outside Click
document.addEventListener('click', (event) => {
  const navbar = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
    const bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false
    });
    bsCollapse.hide();
  }
});
