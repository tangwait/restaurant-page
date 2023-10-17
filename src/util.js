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
    
    console.log("create tabs!")
    
    const contactTabButton = document.createElement('button');
    contactTabButton.classList.add('tab');
    contactTabButton.id = "Contact";
    contactTabButton.textContent = "Contact";
    
    console.log("create tabs!1")

    const menuTabButton = document.createElement('button');
    menuTabButton.classList.add('tab');
    menuTabButton.id = "Menu";
    menuTabButton.textContent = "Menu";

    console.log("create tabs!2")

    const buttonContainer = document.querySelector('#container');
    buttonContainer.textContent = "hello";
    buttonContainer.appendChild(contactTabButton);
    buttonContainer.appendChild(menuTabButton);
}
