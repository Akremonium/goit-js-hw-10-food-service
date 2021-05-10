export function themeChanger() {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const body = document.querySelector('body');
  const themeToggle = document.querySelector('#theme-switch-toggle');

  themeToggle.addEventListener('change', onThemeChange);

  function onThemeChange() {
    if (themeToggle.checked) {
      body.classList.replace(Theme.LIGHT, Theme.DARK);

      localStorage.setItem('theme', Theme.DARK);
    } else {
      body.classList.replace(Theme.DARK, Theme.LIGHT);

      localStorage.setItem('theme', Theme.LIGHT);
    }
  }

  function setTheme() {
    body.classList.add(Theme.LIGHT);

    if (localStorage.getItem('theme')) {
      body.classList.add(localStorage.getItem('theme'));
    }

    if (body.classList.contains(Theme.DARK)) {
      themeToggle.checked = true;
    }
  }
  setTheme();
}
