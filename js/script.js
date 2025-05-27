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
}

// On load, set theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggleBtn.addEventListener("click", function () {
  const currentTheme = document.body.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
