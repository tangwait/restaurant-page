import { createHomeTab } from './module/homeTab.js';
import { createContactTab } from './module/contactTab.js';
import { createMenuTab } from './module/menuTab.js';
import { createMainTab } from './module/mainTab.js';
import './style.css';

document.title = "SushiSashimi Restaurant";
const mainContentTitle = document.createElement('div');
mainContentTitle.classList.add('mainContentTitle');

function createHeader() {
  const container = document.createElement('div');
  container.id = "container";

  document.body.appendChild(container);

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  
  const headerTitle = document.createElement('div');
  headerTitle.classList.add('headerTitle');
  headerTitle.addEventListener('click', () => {
    createMainTab();
  })
  
  
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  
  const allContent = document.createElement('div');
  allContent.classList.add('allContent');
  
  const homeTabButton = createTabButton("Home", createHomeTab, 'headerTab');
  const contactTabButton = createTabButton("Contact", createContactTab, 'headerTab');
  const menuTabButton = createTabButton("Menu", createMenuTab, 'headerTab');

  
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(buttonContainer);
  
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
  
  const mainHomeButton = createTabButton("Home", createHomeTab, 'mainContentTab');
  const mainContactButton = createTabButton("Contact", createContactTab, 'mainContentTab');
  const mainMenuButton = createTabButton("Menu", createMenuTab, 'mainContentTab');
 
  const mainContent2 = document.createElement('div');
  mainContent2.classList.add('mainContent2');
  
  mainContent2.appendChild(mainHomeButton);
  mainContent2.appendChild(mainContactButton);
  mainContent2.appendChild(mainMenuButton);
  
  allContent.appendChild(mainContentTitle);
  allContent.appendChild(mainContent);
  allContent.appendChild(mainContent2);
}

createHeader();

export function createTabButton(tabName, clickHandler, buttonClass) {
  const tabButton = document.createElement('button');
  tabButton.classList.add(buttonClass);
  tabButton.id = tabName;
  tabButton.textContent = tabName;
  tabButton.addEventListener('click', clickHandler);
  return tabButton;
}