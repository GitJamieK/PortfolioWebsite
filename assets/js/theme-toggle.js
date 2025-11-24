(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const toggleButton = document.getElementById("theme-toggle");

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

  // Default to DARK if nothing saved
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  const initialTheme = storedTheme === "light" ? "light" : "dark";
  applyTheme(initialTheme);

  if (!toggleButton) return;

  toggleButton.addEventListener("click", function () {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  });
})();
