import menu from './menu.json';
// import menuItemsTemplates from './templates/menu-items.hbs';
import menuItemsTemplates from './templates/menu-items.hbs';
console.log(menuItemsTemplates);

const menuItemsMarkup = menuItemsTemplates(menu);
const menuListRef = document.querySelector('.js-menu');

menuListRef.insertAdjacentHTML('beforeend', menuItemsMarkup);
