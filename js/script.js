// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("active");
});

// Portfolio filter logic
const filters = document.querySelectorAll(".portfolio-filter");
const grids = {
  posters: document.querySelector(".posters-grid"),
  logos: document.querySelector(".logos-grid"),
  thumbnails: document.querySelector(".thumbnails-grid"),
};

function showGrid(type) {
  Object.keys(grids).forEach((key) => {
    if (type === "all" || key === type) {
      grids[key].style.display = "";
    } else {
      grids[key].style.display = "none";
    }
  });
}

filters.forEach((btn) => {
  btn.addEventListener("click", function () {
    filters.forEach((b) => b.classList.remove("bg-purple-600", "text-white"));
    this.classList.add("bg-purple-600", "text-white");
    showGrid(this.dataset.filter);
  });
});

// Set default filter to 'all'
showGrid("all");
if (filters[0]) filters[0].classList.add("bg-purple-600", "text-white");

// Contact form logic (demo only)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-status").classList.remove("hidden");
    this.reset();
  });

// Set current year in footer
if (document.getElementById("year")) {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Back to Top Button logic
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle logic
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn.querySelector("i");
const themeLabel = themeToggleBtn.querySelector("span");

// Navbar logo switching logic
const logoDark = document.getElementById("navbar-logo-dark");
const logoLight = document.getElementById("navbar-logo-light");
function updateNavbarLogo(theme) {
  if (theme === "dark") {
    if (logoDark) logoDark.style.display = "inline-block";
    if (logoLight) logoLight.style.display = "none";
  } else {
    if (logoDark) logoDark.style.display = "none";
    if (logoLight) logoLight.style.display = "inline-block";
  }
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (theme === "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeLabel.textContent = "Light Mode";
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeLabel.textContent = "Dark Mode";
  }
  updateNavbarLogo(theme);
}

// On load, set theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

// Animate theme toggle button on load
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    themeToggleBtn.classList.add("visible");
  }, 200); // slight delay for smoothness
});

themeToggleBtn.addEventListener("click", function () {
  const currentTheme = document.body.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Intersection Observer for About Us cards animation
const aboutCards = document.querySelectorAll("#about .about-card");
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

function animateAboutCards(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for multiple cards
      setTimeout(() => {
        entry.target.classList.add("about-card-visible");
      }, index * 200); // 200ms delay between cards
    } else {
      entry.target.classList.remove("about-card-visible");
    }
  });
}

const aboutObserver = new IntersectionObserver(animateAboutCards, observerOptions);
aboutCards.forEach((card) => {
  card.classList.add("about-card-init");
  aboutObserver.observe(card);
});

// Intersection Observer for Our Expertise cards animation
const expertiseCards = document.querySelectorAll("#expertise .card-hover");
const expertiseObserverOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -30px 0px'
};

function animateExpertise(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for multiple cards
      setTimeout(() => {
        entry.target.classList.add("expertise-card-visible");
      }, index * 150); // 150ms delay between cards
    } else {
      entry.target.classList.remove("expertise-card-visible");
    }
  });
}

const expertiseObserver = new IntersectionObserver(animateExpertise, expertiseObserverOptions);
expertiseCards.forEach((card) => {
  card.classList.add("expertise-card-init");
  expertiseObserver.observe(card);
});

// Intersection Observer for Our Services cards animation
const servicesCards = document.querySelectorAll("#services .card-hover");
function animateServices(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("services-card-visible");
    } else {
      entry.target.classList.remove("services-card-visible");
    }
  });
}
const servicesObserver = new IntersectionObserver(animateServices, observerOptions);
servicesCards.forEach((card) => {
  card.classList.add("services-card-init");
  servicesObserver.observe(card);
});

// Intersection Observer for Thumbnails cards animation
const thumbnailsCards = document.querySelectorAll('.thumbnails-card-init');
function animateThumbnails(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('thumbnails-card-visible');
    } else {
      entry.target.classList.remove('thumbnails-card-visible');
    }
  });
}
const thumbnailsObserver = new IntersectionObserver(animateThumbnails, observerOptions);
thumbnailsCards.forEach((card) => {
  card.classList.add('thumbnails-card-init');
  thumbnailsObserver.observe(card);
});

// Load More Posters logic
const loadMoreBtn = document.getElementById("load-more-posters");
const posterItems = document.querySelectorAll(".portfolio-item.posters");
let postersToShow = 3; // Show 3 posters initially

function updatePosterVisibility() {
  let visibleCount = 0;
  posterItems.forEach((item, idx) => {
    if (idx < postersToShow) {
      item.style.display = "";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });
  // Hide button if all posters are shown or there are less than or equal to 3 posters
  if (postersToShow >= posterItems.length || visibleCount === posterItems.length) {
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
  } else {
    if (loadMoreBtn) loadMoreBtn.style.display = "inline-block";
  }
}

if (loadMoreBtn && posterItems.length > 0) {
  updatePosterVisibility();
  loadMoreBtn.addEventListener("click", function () {
    postersToShow += 3; // Show 3 more posters per click
    updatePosterVisibility();
  });
} else if (loadMoreBtn) {
  // If there are no posters, hide the button
  loadMoreBtn.style.display = "none";
}

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
