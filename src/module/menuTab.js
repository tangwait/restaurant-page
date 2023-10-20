import './menuTab.css';

export function createMenuTab() {
    const mainContentTitle = document.querySelector(".mainContentTitle")
    mainContentTitle.textContent = "this is the menu tab title"
  
    const menuTabContent = document.querySelector('.mainContent');
    menuTabContent.textContent = 'This is the menutab content';
    
    const menuTabContent2 = document.querySelector('.mainContent2');
    menuTabContent2 = 'Our menu is made by amazing sushi chefs!'
  };
  
  