import '../style.css';

export function createContactTab() {
  const mainContentTitle = document.querySelector(".mainContentTitle")
  mainContentTitle.textContent = "Contact Us!"

  const contactTabContent = document.querySelector('.mainContent');
  contactTabContent.textContent = 'You can reach us at';
 
  switchTab();
  
  const contactTabContent2 = document.querySelector('.mainContent2');
  contactTabContent2.textContent = 'https://github.com/tangwait'
  contactTabContent2.style.backgroundImage = 'none';
};

function switchTab () {
  const contactTabContent2 = document.querySelector('.mainContent2');
  while (contactTabContent2.firstChild) {
    contactTabContent2.removeChild(contactTabContent2.firstChild);
  };
};