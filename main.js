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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nconst container = document.querySelector('#container');\n\nconst headerContainer = document.createElement('div');\nheaderContainer.classList.add('headerContainer');\n\ncontainer.appendChild(headerContainer);\n\nconst headerTitle = document.createElement('div');\nheaderTitle.classList.add('headerTitle');\nheaderTitle.textContent = 'Sushi Sashimi!';\n\nheaderContainer.appendChild(headerTitle);\n\nconst headerLinks = document.createElement('div');\nheaderLinks.classList.add('headerLinks');\nheaderLinks.textContent = 'placeholder link'\n\nheaderContainer.appendChild(headerLinks);\n\nconst homeTab = document.createElement('div');\nhomeTab.id = 'homeTabButton';\n\nconst contactTab = document.createElement('div');\ncontactTab.id = 'contactTabButton';\n\nconst menuTab = document.createElement('div');\nmenuTab.id = 'menuTabButton';\n\n\n\nfunction displayTabContent(tabContentFunction) {\n    container.innerHTML = '';\n    const tabContent = tabContentFunction();\n    container.appendChild(tabContent);\n  }\n  \n  const homeTabButton = document.querySelector('#homeTabButton');\n  homeTabButton.addEventListener('click', () => {\n    displayTabContent(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  });\n  \n  const contactTabButton = document.querySelector('#contactTabButton');\n  contactTabButton.addEventListener('click', () => {\n    displayTabContent(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  });\n  \n  const menuTabButton = document.querySelector('#menuTabButton');\n  menuTabButton.addEventListener('click', () => {\n    displayTabContent(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  });\n// const homeLink = document.createElement('a');\n// homeLink.href = '';\n// homeLink.textContent = 'Home';\n\n// headerLinks.appendChild(homeLink);\n\n// const menuLink = document.createElement('a');\n// menuLink.href = '';\n// menuLink.textContent = 'Menu';\n\n// headerLinks.appendChild(menuLink);\n\n// const homeLink = document.createElement('a');\n// locationsLink.href = '';\n// locationsLink.textContent = 'Locations';\n\n// headerLinks.appendChild(locationsLink);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;