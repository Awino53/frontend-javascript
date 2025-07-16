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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\nvar student1 = {\n    firstName: \"Esther\",\n    lastName: \"Ojul\",\n    age: 21,\n    location: \"Eldoret\",\n};\nvar student2 = {\n    firstName: \"Brian\",\n    lastName: \"Otieno\",\n    age: 23,\n    location: \"Nairobi\",\n};\nvar studentsList = [student1, student2];\nvar table = document.createElement(\"table\");\nvar thead = document.createElement(\"thead\");\nvar tbody = document.createElement(\"tbody\");\nvar headerRow = document.createElement(\"tr\");\nvar headers = [\"First Name\", \"Last Name\", \"Age\", \"Location\"];\nheaders.forEach(function (text) {\n    var th = document.createElement(\"th\");\n    th.textContent = text;\n    headerRow.appendChild(th);\n});\nthead.appendChild(headerRow);\nstudentsList.forEach(function (student) {\n    var row = document.createElement(\"tr\");\n    var firstNameCell = document.createElement(\"td\");\n    firstNameCell.textContent = student.firstName;\n    var lastNameCell = document.createElement(\"td\");\n    lastNameCell.textContent = student.lastName;\n    var ageCell = document.createElement(\"td\");\n    ageCell.textContent = student.age.toString();\n    var locationCell = document.createElement(\"td\");\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(lastNameCell);\n    row.appendChild(ageCell);\n    row.appendChild(locationCell);\n    tbody.appendChild(row);\n});\ntable.appendChild(thead);\ntable.appendChild(tbody);\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;