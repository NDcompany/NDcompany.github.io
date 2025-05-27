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
document.getElementById("year").textContent = new Date().getFullYear();
