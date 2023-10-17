import { createTabButton } from '../util.js';
import './homeTab.css';

export function createHomeTab() {
    const homeContent = document.createElement('div');
    homeContent.textContent = 'Contact home content';
    const homeButton = createTabButton('Home', () => {
      displayHomeContent(createHomeTab);
    });

    homeContent.appendChild(homeButton);
    return homeContent;
};