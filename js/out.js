/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function() {\n\n    const submit = document.querySelector(\"form\");\n    const inputName = document.querySelector(\"input\");\n    const body = document.querySelector('body');\n    const name = document.querySelector(\"h3:nth-of-type(2)\");\n    const region = document.querySelector(\"h3:nth-of-type(3)\");\n    const subregion = document.querySelector(\"h3:nth-of-type(4)\");\n    const nativeName = document.querySelector(\"h3:nth-of-type(5)\");\n    const capital = document.querySelector(\"h3:nth-of-type(6)\");\n    const language = document.querySelector(\"h3:nth-of-type(7\");\n    const currency = document.querySelector(\"h3:nth-of-type(8)\");\n    const population = document.querySelector(\"h3:nth-of-type(9)\");\n    const img = document.querySelector(\".info img\");\n    const infos = document.querySelectorAll('.infos');\n\n\n    setTimeout(function() {\n        const land = body.querySelectorAll('.land');\n        const event = document.createEvent(\"Event\");\n        event.initEvent(\"click\", true, true);\n\n        function markingCountry() {\n            [...land].forEach(function(item) {\n                item.addEventListener('click', function(e) {\n                    inputName.value = \"Write country name:\";\n                    inputName.style = \"color: black\";\n                    land.forEach(function(item) {\n                        item.style.fill = \"#ac9d93\"\n                    });\n                    this.style.fill = \"gray\";\n                    let value = this.getAttribute(\"title\");\n                    if (value === \"South Korea\") {\n                        value = \"Korea (Republic of)\";\n                    } else if (value === \"North Korea\") {\n                        value = \"Korea (Democratic People's Republic of)\";\n                    } else if (value === \"Republic of Congo\") {\n                        value = \"Congo\";\n                    } else if (value === \"Democratic Republic of Congo\") {\n                        value = \"Congo (Democratic Republic of the)\"\n                    }\n                    fetch(`https://restcountries.eu/rest/v2/name/` + value)\n                        .then(resp => {\n                            return resp.json()\n                        })\n                        .then(data => {\n                            let country = data[0];\n                            if (value === \"India\") {\n                                country = data[1];\n                            }\n                            name.textContent = \"Name: \" + country.name;\n                            region.textContent = \"Region: \" + country.region;\n                            subregion.textContent = \"Subregion: \" + country.subregion;\n                            nativeName.textContent = \"Native name: \" + country.nativeName;\n                            capital.textContent = \"Capital: \" + country.capital;\n                            language.textContent = \"Language: \" + country.languages[0].name;\n                            currency.textContent = \"Currency: \" + country.currencies[0].code;\n                            population.textContent = \"Population: \" + country.population.toLocaleString();\n                            img.setAttribute(\"src\", country.flag);\n                            img.style.boxShadow = '0 0 3px 3px gray';\n\n                        })\n                }, false);\n            })\n        }\n\n        function byInput() {\n            inputName.value = \"\";\n            inputName.style = \"color: black\";\n            infos.forEach(item => {\n                item.textContent = \"\";\n            });\n            land.forEach(function(item) {\n                item.style.fill = \"#ac9d93\"\n            });\n            img.setAttribute(\"src\", \"\");\n            img.style.boxShadow = '0 0 0 0';\n        }\n\n        function clickSubmit(e) {\n            e.preventDefault();\n            console.log('click');\n            toTitleCase = str => {\n                return str.replace(/\\w\\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });\n            };\n            const value = toTitleCase(inputName.value);\n            const selection = document.querySelector(`.map path[title=\"${value}\"]`) !== null;\n            if (!selection) {\n                inputName.value = \"Invalid country name\";\n                inputName.style = \"color: red\";\n            } else {\n                inputName.value = \"Write country name:\";\n                document.querySelector(`.map path[title=\"${value}\"]`).dispatchEvent(event);\n            }\n        }\n\n        markingCountry()\n        inputName.addEventListener('click', byInput);\n        submit.addEventListener('submit', clickSubmit);\n\n    }, 500);\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxrRUFBa0UsRUFBRTtBQUNoSTtBQUNBO0FBQ0EseUVBQXlFLE1BQU07QUFDL0U7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMkRBQTJELE1BQU07QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDIpXCIpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSgzKVwiKTtcbiAgICBjb25zdCBzdWJyZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoNClcIik7XG4gICAgY29uc3QgbmF0aXZlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg1KVwiKTtcbiAgICBjb25zdCBjYXBpdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDYpXCIpO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzOm50aC1vZi10eXBlKDdcIik7XG4gICAgY29uc3QgY3VycmVuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDM6bnRoLW9mLXR5cGUoOClcIik7XG4gICAgY29uc3QgcG9wdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMzpudGgtb2YtdHlwZSg5KVwiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8gaW1nXCIpO1xuICAgIGNvbnN0IGluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9zJyk7XG5cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGxhbmQgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kJyk7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KFwiY2xpY2tcIiwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gbWFya2luZ0NvdW50cnkoKSB7XG4gICAgICAgICAgICBbLi4ubGFuZF0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJXcml0ZSBjb3VudHJ5IG5hbWU6XCI7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zdHlsZSA9IFwiY29sb3I6IGJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIGxhbmQuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBcIiNhYzlkOTNcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5maWxsID0gXCJncmF5XCI7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJTb3V0aCBLb3JlYVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiS29yZWEgKFJlcHVibGljIG9mKVwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIk5vcnRoIEtvcmVhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJLb3JlYSAoRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJSZXB1YmxpYyBvZiBDb25nb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiQ29uZ29cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIENvbmdvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJDb25nbyAoRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmV1L3Jlc3QvdjIvbmFtZS9gICsgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIkluZGlhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IGRhdGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiICsgY291bnRyeS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbi50ZXh0Q29udGVudCA9IFwiUmVnaW9uOiBcIiArIGNvdW50cnkucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnJlZ2lvbi50ZXh0Q29udGVudCA9IFwiU3VicmVnaW9uOiBcIiArIGNvdW50cnkuc3VicmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU5hbWUudGV4dENvbnRlbnQgPSBcIk5hdGl2ZSBuYW1lOiBcIiArIGNvdW50cnkubmF0aXZlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXBpdGFsLnRleHRDb250ZW50ID0gXCJDYXBpdGFsOiBcIiArIGNvdW50cnkuY2FwaXRhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZS50ZXh0Q29udGVudCA9IFwiTGFuZ3VhZ2U6IFwiICsgY291bnRyeS5sYW5ndWFnZXNbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeS50ZXh0Q29udGVudCA9IFwiQ3VycmVuY3k6IFwiICsgY291bnRyeS5jdXJyZW5jaWVzWzBdLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvbi50ZXh0Q29udGVudCA9IFwiUG9wdWxhdGlvbjogXCIgKyBjb3VudHJ5LnBvcHVsYXRpb24udG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGNvdW50cnkuZmxhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgM3B4IDNweCBncmF5JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYnlJbnB1dCgpIHtcbiAgICAgICAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBpbnB1dE5hbWUuc3R5bGUgPSBcImNvbG9yOiBibGFja1wiO1xuICAgICAgICAgICAgaW5mb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFuZC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmZpbGwgPSBcIiNhYzlkOTNcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiXCIpO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMCAwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrU3VibWl0KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgdG9UaXRsZUNhc2UgPSBzdHIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbih0eHQpIHsgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0b1RpdGxlQ2FzZShpbnB1dE5hbWUudmFsdWUpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1hcCBwYXRoW3RpdGxlPVwiJHt2YWx1ZX1cIl1gKSAhPT0gbnVsbDtcbiAgICAgICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJJbnZhbGlkIGNvdW50cnkgbmFtZVwiO1xuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5zdHlsZSA9IFwiY29sb3I6IHJlZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIldyaXRlIGNvdW50cnkgbmFtZTpcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFwIHBhdGhbdGl0bGU9XCIke3ZhbHVlfVwiXWApLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFya2luZ0NvdW50cnkoKVxuICAgICAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBieUlucHV0KTtcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNsaWNrU3VibWl0KTtcblxuICAgIH0sIDUwMCk7XG5cbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);