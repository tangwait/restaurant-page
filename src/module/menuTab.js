import '../style.css';
import menu from '../menu.jpg'

export function createMenuTab() {
const mainContentTitle = document.querySelector(".mainContentTitle")
mainContentTitle.textContent = "Our menu is made by amazing sushi chefs!"

const menuTabContent = document.querySelector('.mainContent');
menuTabContent.textContent = '';

switchTab();

const menuTabContent2 = document.querySelector('.mainContent2');
menuTabContent2.textContent = ''
menuTabContent2.style.backgroundImage = `url(${menu})`;

};
  
function switchTab () {
    const menuTabContent2 = document.querySelector('.mainContent2');
    while (menuTabContent2.firstChild) {
      menuTabContent2.removeChild(menuTabContent2.firstChild);
    };
  };