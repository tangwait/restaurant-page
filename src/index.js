import { createHomeTab } from './module/homeTab.js';
import { createContactTab } from './module/contactTab.js';
import { createMenuTab } from './module/menuTab.js';
import './style.css';
import { createMainTab } from './module/mainTab.js';
import icon from './logo-icon.jpg';

const mainContentTitle = document.createElement('div');
mainContentTitle.classList.add('mainContentTitle');

function createHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = "SushiSashimi!"
    headerTitle.addEventListener('click', () => {
      createMainTab();
    })

    const logoIcon = new Image();
    logoIcon.src = icon;

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

    headerTitle.appendChild(logoIcon);
    
    buttonContainer.appendChild(homeTabButton);    
    buttonContainer.appendChild(contactTabButton);
    buttonContainer.appendChild(menuTabButton);
    
    container.appendChild(headerContainer);
    container.appendChild(allContent);

    const mainContentTitle = document.createElement('div');
    mainContentTitle.classList.add('mainContentTitle');
    mainContentTitle.textContent = "Welcome to SushiSashimi!"

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    mainContent.textContent = "Find out more information about"

    const mainHomeButton = createTabButton("Home", createHomeTab);
    const mainContactButton = createTabButton("Contact", createContactTab);
    const mainMenuButton = createTabButton("Menu", createMenuTab);

    const mainContent2 = document.createElement('div');
    mainContent2.classList.add('mainContent2');
    mainContent2.textContent = "Join us for the best sushi experience today!"

    mainContent2.appendChild(mainHomeButton);
    mainContent2.appendChild(mainContactButton);
    mainContent2.appendChild(mainMenuButton);

    allContent.appendChild(mainContentTitle);
    allContent.appendChild(mainContent);
    allContent.appendChild(mainContent2);

}

createHeader();

function createTabButton(tabName, clickHandler) {
    const tabButton = document.createElement('button');
    tabButton.classList.add('tab');
    tabButton.textContent = tabName;
    tabButton.addEventListener('click', clickHandler);
    return tabButton;
}