import '../style.css';
import backgroundImage from '../homeBackground.jpg';

export function createHomeTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle");
  mainContentTitle.textContent = "Welcome to SushiSashimi!";

  const homeTabContent = document.querySelector('.mainContent');
  homeTabContent.textContent = 'At SushiSashimi, we provide the best dining experience with high-quality sushi created by world-class sushi chefs';

  const homeTabContent2 = document.querySelector('.mainContent2');
  homeTabContent2.style.backgroundImage = `url(${backgroundImage})`;

  switchTab();
}

function switchTab () {
  const homeTabContent2 = document.querySelector('.mainContent2');
  while (homeTabContent2.firstChild) {
    homeTabContent2.removeChild(homeTabContent2.firstChild);
  };
};