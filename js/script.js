// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
}

// Portfolio filter logic
const filters = document.querySelectorAll(".portfolio-filter");
const grids = {
  posters: document.querySelector(".posters-grid"),
  logos: document.querySelector(".logos-grid"),
  thumbnails: document.querySelector(".thumbnails-grid"),
};

function showGrid(type) {
  Object.keys(grids).forEach((key) => {
    const grid = grids[key];
    if (grid) {
      if (type === "all" || key === type) {
        grid.style.display = "";
      } else {
        grid.style.display = "none";
      }
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

// Set default filter to 'all' only if filters exist
if (filters.length > 0) {
  showGrid("all");
  if (filters[0]) filters[0].classList.add("bg-purple-600", "text-white");
}

// Set current year in footer
if (document.getElementById("year")) {
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Back to Top Button logic
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
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
}

// Theme toggle logic
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;
const themeLabel = themeToggleBtn ? themeToggleBtn.querySelector("span") : null;

// Navbar logo switching logic
const logoDark = document.getElementById("navbar-logo-dark");
const logoLight = document.getElementById("navbar-logo-light");
const footerLogo = document.getElementById("footer-logo");

function updateNavbarLogo(theme) {
  if (theme === "dark") {
    if (logoDark) logoDark.style.display = "inline-block";
    if (logoLight) logoLight.style.display = "none";
    if (footerLogo) footerLogo.src = "assets/logo/SYMBOL-DARK.png";
  } else {
    if (logoDark) logoDark.style.display = "none";
    if (logoLight) logoLight.style.display = "inline-block";
    if (footerLogo) footerLogo.src = "assets/logo/SYMBOL-LIGHT.png";
  }
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeIcon && themeLabel) {
    if (theme === "dark") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      themeLabel.textContent = "Light Mode";
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      themeLabel.textContent = "Dark Mode";
    }
  }
  updateNavbarLogo(theme);
}

// On load, set theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

// Animate theme toggle button on load
window.addEventListener("DOMContentLoaded", function () {
  if (themeToggleBtn) {
    setTimeout(function () {
      themeToggleBtn.classList.add("visible");
    }, 200);
  }
});

// Also ensure visibility after a longer delay as backup
window.addEventListener("load", function () {
  if (themeToggleBtn) {
    setTimeout(function () {
      if (!themeToggleBtn.classList.contains("visible")) {
        themeToggleBtn.classList.add("visible");
      }
    }, 500);
  }
});

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    const currentTheme = document.body.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

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

// Smooth scroll for navbar links and all anchor links
const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
allAnchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Web Development Portfolio Cards Animation
const webdevCards = document.querySelectorAll('.webdev-card');
const webdevObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

function animateWebdevCards(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay for multiple cards
      setTimeout(() => {
        entry.target.classList.add("animate-in");
      }, index * 100); // 100ms delay between cards
    } else {
      entry.target.classList.remove("animate-in");
    }
  });
}

const webdevObserver = new IntersectionObserver(animateWebdevCards, webdevObserverOptions);
webdevCards.forEach((card) => {
  webdevObserver.observe(card);
});

// Interactive card effects
webdevCards.forEach(card => {
  // Add tilt effect on mouse move
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
  });
  
  // Reset transform on mouse leave
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
  
  // Add click ripple effect
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.height, rect.width);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(168, 85, 247, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 10;
    `;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Contact Form Functionality for Google Forms
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const loadingSpinner = document.getElementById('loading-spinner');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    // Basic form validation
    function validateForm() {
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
        } else {
          field.classList.remove('border-red-500');
        }
      });
      
      // Email validation
      const emailField = document.getElementById('email');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.classList.add('border-red-500');
        } else {
          emailField.classList.remove('border-red-500');
        }
      }
      
      return isValid;
    }

    // Form submission
    contactForm.addEventListener('submit', function(e) {
      if (!validateForm()) {
        e.preventDefault();
        showMessage('Please fill in all required fields correctly.', 'error');
        return;
      }
      
      // Show loading state
      setLoadingState(true);
    });

    function setLoadingState(isLoading) {
      if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        loadingSpinner.classList.remove('hidden');
      } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        loadingSpinner.classList.add('hidden');
      }
    }

    function showMessage(message, type) {
      formMessage.className = `p-4 rounded-lg text-center font-medium ${
        type === 'success' 
          ? 'bg-green-100 text-green-800 border border-green-300' 
          : 'bg-red-100 text-red-800 border border-red-300'
      }`;
      formMessage.textContent = message;
      formMessage.classList.remove('hidden');
      
      // Auto hide success messages after 8 seconds
      if (type === 'success') {
        setTimeout(() => {
          formMessage.classList.add('hidden');
        }, 8000);
      }
      
      // Scroll to message
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Make functions available globally for iframe callback
    window.showMessage = showMessage;
    window.setLoadingState = setLoadingState;
    window.contactForm = contactForm;
  }
});

// Function called when Google Form iframe loads (form submitted)
function formSubmitted() {
  // Reset loading state
  window.setLoadingState(false);
  
  // Show success message
  window.showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
  
  // Reset the form
  window.contactForm.reset();
  
  // Remove any validation error styles
  const allFields = window.contactForm.querySelectorAll('input, textarea, select');
  allFields.forEach(field => {
    field.classList.remove('border-red-500');
  });
  
  // Reset current date field
  const currentDateField = document.getElementById('CurrentDate');
  if (currentDateField) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = year + '-' + month + '-' + day;
    currentDateField.value = currentDate;
  }
}
