// Access theme toggle HTML element
const themeToggle = document.getElementById('theme-toggle');

// Set theme to dark by default
let theme = 'dark';

// Listen for click event on theme toggle
themeToggle.addEventListener('click', function () {
  if (theme === 'light') {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  storeTheme();
});

function storeTheme() {
  localStorage.setItem('theme', theme);
}

// Obtain theme from localStorage if it exists
function initTheme() {
  theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setDarkTheme() {
  document.body.classList.add('dark');
  themeToggle.textContent = '🌒';
  theme = 'dark';
}

function setLightTheme() {
  document.body.classList.remove('dark');
  themeToggle.textContent = '☀️';
  theme = 'light';
}

initTheme();
