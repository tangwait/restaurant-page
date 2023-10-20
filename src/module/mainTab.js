import './mainTab.css';

export function createMainTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "Welcome to SushiSashimi!"

  const mainContent = document.querySelector('.mainContent');
  mainContent.textContent = "Find out more information about"
  
  const mainContent2 = document.querySelector('.mainContent2');
  mainContent2.textContent = "Join us for the best sushi experience today!"
};