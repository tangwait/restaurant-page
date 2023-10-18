/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButtonsContainer: () => (/* binding */ createButtonsContainer),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createTabs: () => (/* binding */ createTabs)\n/* harmony export */ });\n\n\nfunction createHeader() {\n    const headerContainer = document.createElement('div');\n    headerContainer.classList.add('headerContainer');\n    console.log(\"headerTitle is here\")\n\n    const headerTitle = document.createElement('div');\n    headerTitle.classList.add('headerTitle');\n    headerTitle.textContent = \"SushiSashimi!\"\n\n    const container = document.querySelector('#container');\n    container.appendChild(headerContainer);\n    headerContainer.appendChild(headerTitle);\n\n    return headerContainer;\n}\n\nfunction createButtonsContainer() {\n    const buttonContainer = document.createElement('div');\n    buttonContainer.classList.add('buttonContainer');\n    console.log(\"createButtonsContainer is here\")\n\n    const headerContainer = document.querySelector('.headerContainer')\n    headerContainer.appendChild(buttonContainer);\n\n    return buttonContainer;\n}\n\nfunction createTabs() {\n    const homeTabButton = document.createElement('button');\n    homeTabButton.classList.add('tab');\n    homeTabButton.id = \"Home\";\n    homeTabButton.textContent = \"Home\";\n\n    console.log(\"create home tabs!\")\n\n    const contactTabButton = document.createElement('button');\n    contactTabButton.classList.add('tab');\n    contactTabButton.id = \"Contact\";\n    contactTabButton.textContent = \"Contact\";\n\n    console.log(\"create contact tabs!1\")\n\n    const menuTabButton = document.createElement('button');\n    menuTabButton.classList.add('tab');\n    menuTabButton.id = \"Menu\";\n    menuTabButton.textContent = \"Menu\"; \n    \n    console.log(\"create menu tabs!2\")\n\n    const buttonContainer = document.querySelector('#container');\n    buttonContainer.appendChild(homeTabButton);\n    buttonContainer.appendChild(contactTabButton);\n    buttonContainer.appendChild(menuTabButton);\n}\n\n\n\n\n// //so tab creation won't duplicate\n// export function createTabButton(tabName) {\n//     const tabButton = document.createElement('div');\n//     tabButton.id = tabName;\n//     tabButton.classList.add('tab');\n//     tabButton.textContent = tabName;\n//     return tabButton;\n// }\n\n//# sourceURL=webpack://restaurant-page/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/util.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;