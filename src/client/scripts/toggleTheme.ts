document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) {
    return;
  }

  const storedTheme = localStorage.getItem('theme');

  if (storedTheme) {
    html.classList.add(storedTheme);
  } else {
    html.classList.add('light');
  }

  themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});