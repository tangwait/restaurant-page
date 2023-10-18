

export function createHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    console.log("headerTitle is here")

    const headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle');
    headerTitle.textContent = "SushiSashimi!"

    const container = document.querySelector('#container');
    container.appendChild(headerContainer);
    headerContainer.appendChild(headerTitle);

    return headerContainer;
}

export function createButtonsContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    console.log("createButtonsContainer is here")

    const headerContainer = document.querySelector('.headerContainer')
    headerContainer.appendChild(buttonContainer);

    return buttonContainer;
}

export function createTabs() {
    const homeTabButton = document.createElement('button');
    homeTabButton.classList.add('tab');
    homeTabButton.id = "Home";
    homeTabButton.textContent = "Home";

    console.log("create home tabs!")

    const contactTabButton = document.createElement('button');
    contactTabButton.classList.add('tab');
    contactTabButton.id = "Contact";
    contactTabButton.textContent = "Contact";

    console.log("create contact tabs!1")

    const menuTabButton = document.createElement('button');
    menuTabButton.classList.add('tab');
    menuTabButton.id = "Menu";
    menuTabButton.textContent = "Menu"; 
    
    console.log("create menu tabs!2")

    const buttonContainer = document.querySelector('#container');
    buttonContainer.appendChild(homeTabButton);
    buttonContainer.appendChild(contactTabButton);
    buttonContainer.appendChild(menuTabButton);
}




// //so tab creation won't duplicate
// export function createTabButton(tabName) {
//     const tabButton = document.createElement('div');
//     tabButton.id = tabName;
//     tabButton.classList.add('tab');
//     tabButton.textContent = tabName;
//     return tabButton;
// }