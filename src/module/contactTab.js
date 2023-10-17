import '../util.js';
import './contactTab.css';

export function createContactTab() {
    const tabContent = document.createElement('div');
    tabContent.textContent = 'Contact tab content';
    const contactButton = document.getElementById('Contact');
    contactButton.addEventListener('click', () => {
      displayContactContent(createContactTab);
    });
    
    tabContent.appendChild(contactButton);
    return tabContent;
};
