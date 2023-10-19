import './homeTab.css';

export function createHomeTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "The best sushi!"

  const homeTabContent = document.querySelector('.mainContent');
  homeTabContent.textContent = 'This is the Hometab content';
 
  return homeTabContent
};

