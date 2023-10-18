import '../util.js';
import './menuTab.css';

export function createMenuTab() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Menu tab content';
    
    const menuButton = document.getElementById('Menu');
    menuButton.addEventListener('click', () => {
      displayTabContent(createMenuTab);
    });
    
    menuContent.appendChild(menuButton);
    return menuContent;
};