const DARK_MODE = 'dark-mode';
const DARK_MODE_TRUE = 'true';
const DARK_MODE_FALSE = 'false';
const darkModeButton = document.querySelector('.dark-mode__button');
const body = document.body;

if (localStorage.getItem(DARK_MODE) === null || localStorage.getItem(DARK_MODE) === DARK_MODE_TRUE) {
  darkModeHandler(DARK_MODE_FALSE);
} else {
  darkModeHandler(DARK_MODE_TRUE);
}

function darkModeHandler(mode) {
  if (mode === DARK_MODE_TRUE) {
    body.classList.remove(DARK_MODE);
    localStorage.setItem(DARK_MODE, DARK_MODE_FALSE);
    darkModeButton.textContent = '🌞';
  } else if (mode === DARK_MODE_FALSE) {
    body.classList.add(DARK_MODE);
    localStorage.setItem(DARK_MODE, DARK_MODE_TRUE);
    darkModeButton.textContent = '🌙';
  }
}

darkModeButton.addEventListener('click', () => {
  darkModeHandler(localStorage.getItem(DARK_MODE));
});
