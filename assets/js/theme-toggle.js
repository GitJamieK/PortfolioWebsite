(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("site-nav-mobile");

  /* ============= THEME LOGIC ============= */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    if (!toggleButton) return;

    const icon = toggleButton.querySelector(".theme-toggle-icon");
    const label = toggleButton.querySelector(".theme-toggle-label");

    if (theme === "light") {
      if (icon) icon.textContent = "☀️";
      if (label) label.textContent = "Light";
    } else {
      if (icon) icon.textContent = "🌙";
      if (label) label.textContent = "Dark";
    }
  }

  // Default to DARK if nothing is saved
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  const initialTheme = storedTheme === "light" ? "light" : "dark";
  applyTheme(initialTheme);

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      window.localStorage.setItem(STORAGE_KEY, next);
    });
  }

  /* ============= MENU TOGGLE LOGIC ============= */
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = root.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after clicking a link
    mobileNav.querySelectorAll(".page-link").forEach(function (link) {
      link.addEventListener("click", function () {
        root.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
