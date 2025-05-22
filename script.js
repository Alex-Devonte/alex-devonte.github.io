document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#menu");

  const themeToggle = document.querySelector(".theme-toggle");

  function toggleMenu() {
    const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", !isMenuOpen);
    menuToggle.setAttribute("aria-label", isMenuOpen ? "Open menu" : "Close menu");
    menuToggle.classList.toggle("menu-active", !isMenuOpen);
  }

  function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    themeToggle.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
  }

  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", () => {
      //Close menu when link is clicked
      nav.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      menuToggle.classList.remove("menu-active");
    });
  });

  menuToggle.addEventListener("click", toggleMenu);
  themeToggle.addEventListener("click", toggleTheme);
});
