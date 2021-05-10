export function renderer(menuData, menuTemplate) {
  const ulEl = document.querySelector('.js-menu');

  const menu = renderMenu(menuData);

  function renderMenu(menuItems) {
    return menuItems.map(menuTemplate).join(' ');
  }

  ulEl.insertAdjacentHTML('beforeend', menu);
}
