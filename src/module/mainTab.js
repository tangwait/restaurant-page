import { createHomeTab } from './homeTab.js';
import { createContactTab } from './contactTab.js';
import { createMenuTab } from './menuTab.js';
import { createTabButton } from '../index.js'
import '../style.css';

export function createMainTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "Welcome to SushiSashimi!"

  const mainContent = document.querySelector('.mainContent');
  mainContent.textContent = "Find out more information about"
  
  const mainContent2 = document.querySelector('.mainContent2');
  mainContent2.style.backgroundImage = 'none';
  mainContent2.textContent = '';

  const mainHomeButton = createTabButton("Home", createHomeTab, 'mainContentTab');
  const mainContactButton = createTabButton("Contact", createContactTab, 'mainContentTab');
  const mainMenuButton = createTabButton("Menu", createMenuTab, 'mainContentTab');

  mainContent2.appendChild(mainHomeButton);
  mainContent2.appendChild(mainContactButton);
  mainContent2.appendChild(mainMenuButton);
};