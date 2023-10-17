import { createTabButton } from '../util.js';
import './menuTab.css';

export function createMenuTab() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Menu tab content';
    const menuButton = createTabButton('Contact', () => {
      displayMenuContent(createMenuTab);
    });

    tabContent.appendChild(menuButton);
    return tabContent;
};