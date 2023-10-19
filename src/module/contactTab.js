import './contactTab.css';

export function createContactTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "The contact tab title"

  const contactTabContent = document.querySelector('.mainContent');
  contactTabContent.textContent = 'This is the contact tab content';
 
  return contactTabContent;
};

