import { createHomeTab } from './module/homeTab.js';
import { createContactTab } from './module/contactTab.js';
import { createMenuTab } from './module/menuTab.js';
import { createTabButton } from './util.js';
import './style.css';

const container = document.querySelector('#container');

function createHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('headerTitle');
  headerTitle.textContent = "SushiSashimi!"
  headerTitle.addEventListener('click', () => {
    displayTabContent(createHomeTab);
  });

  headerContainer.appendChild(headerTitle);

  return headerContainer;
}

function createButtonsContainer() {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  return buttonContainer;
}

function createSushiContent() {
  const sushiContentContainer = document.createElement('div');
  sushiContentContainer.classList.add('sushiContentContainer');
  sushiContentContainer.textContent = "Welcome to SushiSashimi!"
  return sushiContentContainer
}

const homeTabButton = createTabButton('Home', () => {
  displayTabContent(createHomeTab);
});

const contactTabButton = createTabButton('Contact', () => {
  displayTabContent(createContactTab);
});

const menuTabButton = createTabButton('Menu', () => {
  displayTabContent(createMenuTab);
});

const buttonsContainer = createButtonsContainer();
const headerContainer = createHeader();
const sushiContainer = createSushiContent();

container.appendChild(headerContainer);
headerContainer.appendChild(buttonsContainer);
container.appendChild(sushiContainer);
buttonsContainer.appendChild(homeTabButton);
buttonsContainer.appendChild(contactTabButton);
buttonsContainer.appendChild(menuTabButton);

container.appendChild(sushiContainer);

function displayTabContent(tabContentFunction) {
    container.innerHTML = '';
    const tabContent = tabContentFunction();
    container.appendChild(tabContent);
  }

  const homeButton = document.getElementById('Home');
  homeButton.addEventListener('click', () => {
    displayTabContent(createHomeTab);
  });
  
  const contactButton = document.getElementById('Contact');
  contactButton.addEventListener('click', () => {
    displayTabContent(createContactTab);
  });
  
  const menuButton = document.getElementById('Menu');
  menuButton.addEventListener('click', () => {
    displayTabContent(createMenuTab);
  });
