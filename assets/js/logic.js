// Access theme toggle HTML element
const themeToggle = document.getElementById('theme-toggle');

//Access container element
const container = document.getElementById('container');

// Set dark mode to false by default
let darkMode = false;

// Listen for click event on theme toggle
themeToggle.addEventListener('click', function () {
  darkMode = !darkMode;
  container.classList.toggle('dark');

  // Set theme toggle contents according to dark mode value
  if (darkMode) {
    themeToggle.textContent = '🌒';
  } else {
    themeToggle.textContent = '☀️';
  }
});
