import '../util.js';
import './contactTab.css';

export function createContactTab() {
    const contactContent = document.createElement('div');
    contactContent.textContent = 'Contact tab content';
    
    const contactButton = document.getElementById('Contact');
    contactButton.addEventListener('click', () => {
      displayTabContent(createContactTab);
    });
    
    contactContent.appendChild(contactButton);
    return tabContent;
};
