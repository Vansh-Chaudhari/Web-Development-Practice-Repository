const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("iconId");

function setTheme(themeName) {
  if (themeName === "dark") {
    icon.innerText = "🌙\u00A0";
  } else {
    icon.innerText = "☀️\u00A0";
  }
  document.querySelector("html").setAttribute("data-theme", themeName);
}

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (preferDarkMode) {
    themeToggle.checked = true;
    setTheme("dark");
  } else {
    themeToggle.checked = false;
    setTheme("light");
  }
}

function showInitialTheme() {
  setInitialTheme();

  themeToggle.addEventListener("change", toggleTheme);
}

document.addEventListener("DOMContentLoaded", showInitialTheme);
