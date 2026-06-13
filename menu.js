const menu = document.querySelector('.linkes');
const menuButton = document.querySelector('.menu-icon');

if (menu && menuButton) {
  const closeMenu = () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}