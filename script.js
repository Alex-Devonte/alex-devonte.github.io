document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#menu");

  function toggleMenu() {
    const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", !isMenuOpen);
    menuToggle.setAttribute("aria-label", isMenuOpen ? "Open menu" : "Close menu");
    menuToggle.classList.toggle("menu-active", !isMenuOpen);
  }

  menuToggle.addEventListener("click", toggleMenu);
});
