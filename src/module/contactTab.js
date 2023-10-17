import { createTabButton } from '../util.js';
import './contactTab.css';

export function createContactTab() {
    const tabContent = document.createElement('div');
    tabContent.textContent = 'Contact tab content';
    const contactButton = createTabButton('Contact', () => {
      displayTabContent(createContactTab);
    });

    tabContent.appendChild(contactButton);
    return tabContent;
};
