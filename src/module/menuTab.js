import { createTabs } from '../util.js';
import './menuTab.css';


export function createMenuTab() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Menu tab content';

    menuContent.appendChild(menuButton);
    return menuContent;
};

createTabs();