import './homeTab.css';

export function createHomeTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "Welcome to SushiSashimi!"

  const homeTabContent = document.querySelector('.mainContent');
  homeTabContent.textContent = 'At SushiSashimi, we provide the best dining experience with high quality sushi created by worldclass sushi chefs';
  
  const homeTabContent2 = document.querySelector('.mainContent2');
  homeTabContent2.textContent = 'ha'
};

