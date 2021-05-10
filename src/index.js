import menuTemplate from './templates/menu-template.hbs';
import menuData from './js/menu.json';
import { renderer } from './js/renderer.js';
import { themeChanger } from './js/themeChanger.js';
import './sass/main.scss';

renderer(menuData, menuTemplate);
themeChanger();
