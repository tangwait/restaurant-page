// import * as util from '../util.js';
import './homeTab.css';

// util.createHeader();
// util.createButtonsContainer();
// util.createTabs();

export function createHomeTab() {
    const homeContent = document.createElement('div');
    homeContent.classList.add("homeContent")
    homeContent.textContent = 'Contact home content';

    const homeButton = document.getElementById('Home');
    homeContent.appendChild(homeButton);
    
  
    // const contactButton = document.getElementById('Contact');
    // contactContent.appendChild(contactButton);
    
    // const menuButton = document.getElementById('Menu');
    // menuContent.appendChild(menuButton);

    return homeContent;
};
