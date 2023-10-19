import { createHomeTab } from './module/homeTab.js';
import { createContactTab } from './module/contactTab.js';
import { createMenuTab } from './module/menuTab.js';
import './style.css';

const mainContentTitle = document.createElement('div');
mainContentTitle.classList.add('mainContentTitle');

function createHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = "SushiSashimi!"

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    const allContent = document.createElement('div');
    allContent.classList.add('allContent');

    const homeTabButton = createTabButton("Home", createHomeTab);
    const contactTabButton = createTabButton("Contact", createContactTab);
    const menuTabButton = createTabButton("Menu", createMenuTab);

    const container = document.querySelector('#container');

    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(buttonContainer);
    
    buttonContainer.appendChild(homeTabButton);    
    buttonContainer.appendChild(contactTabButton);
    buttonContainer.appendChild(menuTabButton);
    
    container.appendChild(headerContainer);
    container.appendChild(allContent);

    const mainContentTitle = document.createElement('div');
    mainContentTitle.classList.add('mainContentTitle');
    mainContentTitle.textContent = "main content title"

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    mainContent.textContent = "SushiSashimi content"

    allContent.appendChild(mainContentTitle);
    allContent.appendChild(mainContent);

    return headerContainer;
}

createHeader();

function createTabButton(tabName, clickHandler) {
    const tabButton = document.createElement('button');
    tabButton.classList.add('tab');
    tabButton.textContent = tabName;
    tabButton.addEventListener('click', clickHandler);
    return tabButton;
}