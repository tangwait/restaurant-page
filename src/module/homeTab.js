import '../util.js';
import './homeTab.css';

export function createHomeTab() {
    const homeContent = document.createElement('div');
    homeContent.textContent = 'Contact home content';
    const homeButton = document.getElementById('Home');
    homeButton.addEventListener('click', () => {
      displayHomeContent(createHomeTab);
    });
    
    homeContent.appendChild(homeButton);
    return homeContent;
};