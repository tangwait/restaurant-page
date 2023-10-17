//so tab creation won't duplicate
export function createTabButton(tabName) {
    const tabButton = document.createElement('div');
    tabButton.id = tabName;
    tabButton.classList.add('tab');
    tabButton.textContent = tabName;
    return tabButton;
}