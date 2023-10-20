import './contactTab.css';

export function createContactTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "The contact tab title"

  const contactTabContent = document.querySelector('.mainContent');
  contactTabContent.textContent = 'This is the contact tab content';
 
  const contactTabContent2 = document.querySelector('.mainContent2');
  contactTabContent2.textContent = 'Feel free to ask any questions!'
};

