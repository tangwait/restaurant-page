import '../util.js';
import './menuTab.css';

export function createMenuTab() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Menu tab content';
    const menuButton = document.getElementById('Menu');
    menuButton.addEventListener('click', () => {
      displayMenuContent(createMenuTab);
    });

    tabContent.appendChild(menuButton);
    return tabContent;
};