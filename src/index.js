import { createHomeTab } from './module/homeTab.js';
import { createContactTab } from './module/contactTab.js';
import { createMenuTab } from './module/menuTab.js';
import { createTabs } from './util.js';
import './style.css';

const container = document.querySelector('#container');

function createHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('headerContainer');
  console.log("headerTitle is here")

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
  console.log("createButtonsContainer is here")
  return buttonContainer;
}


function createSushiContent() {
  const sushiContentContainer = document.createElement('div');
  sushiContentContainer.classList.add('sushiContentContainer');
  sushiContentContainer.textContent = "Welcome to SushiSashimi!"
  console.log("sushiContentContainer is here");
  return sushiContentContainer
}

const headerContainer = createHeader();
const buttonsContainer = createButtonsContainer();
const sushiContainer = createSushiContent();

container.appendChild(headerContainer);
headerContainer.appendChild(buttonsContainer);
container.appendChild(sushiContainer);

  console.log("checking 1 2 3")
  createTabs();

function displayTabContent(tabContent) {
    container.innerHTML = '';
    container.appendChild(tabContent);
    console.log("displayTabContent hahaha")
}

console.log("homebutton hu hu huh")
const homeButton = document.getElementById('Home');
homeButton.addEventListener('click', () => {
  const tabContent = createHomeTab();
  displayTabContent(tabContent);
});

console.log("contactbutton")
const contactButton = document.getElementById('Contact');
contactButton.addEventListener('click', () => {
  const tabContent = createContactTab();
  displayTabContent(tabContent);
});

const menuButton = document.getElementById('Menu');
menuButton.addEventListener('click', () => {
  const tabContent = createMenuTab();
  displayTabContent(tabContent);
});


// const homeTabButton = createTabButton('Home', () => {
//   displayTabContent(createHomeTab);
// });

// const contactTabButton = createTabButton('Contact', () => {
//   displayTabContent(createContactTab);
// });

// const menuTabButton = createTabButton('Menu', () => {
//   displayTabContent(createMenuTab);
// });