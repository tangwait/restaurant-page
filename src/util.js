// //so tab creation won't duplicate
// export function createTabButton(tabName) {
//     const tabButton = document.createElement('div');
//     tabButton.id = tabName;
//     tabButton.classList.add('tab');
//     tabButton.textContent = tabName;
//     return tabButton;
// }
export function createTabs() {
    const homeTabButton = document.createElement('button');
    homeTabButton.classList.add('tab');
    homeTabButton.id = "Home";
    homeTabButton.textContent = "Home";
    
    const contactTabButton = document.createElement('button');
    contactTabButton.classList.add('tab');
    contactTabButton.id = "Contact";
    contactTabButton.textContent = "Contact";
    
    const menuTabButton = document.createElement('button');
    menuTabButton.classList.add('tab');
    menuTabButton.id = "Menu";
    menuTabButton.textContent = "Menu";
    
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(homeTabButton);
    buttonContainer.appendChild(contactTabButton);
    buttonContainer.appendChild(menuTabButton);
};