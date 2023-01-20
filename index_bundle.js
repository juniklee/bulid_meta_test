/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _matterport_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @matterport/sdk */ \"./node_modules/@matterport/sdk/dist/mp-sdk.js\");\n/* harmony import */ var _matterport_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_matterport_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst main = async () => {\r\n  // Initialize SDK here\r\n  const mpSdk = await (0,_matterport_sdk__WEBPACK_IMPORTED_MODULE_0__.setupSdk)('81xpebgwyayrr1ft1frr5eskc')\r\n  await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)\r\n  mpSdk.Camera.rotate(360, 0)\r\n\r\n  \r\n}\r\nmain().catch(err => console.error('Error:', err))\n\n//# sourceURL=webpack://mp-sdk/./index.js?");

/***/ }),

/***/ "./node_modules/@matterport/sdk/dist/mp-sdk.js":
/*!*****************************************************!*\
  !*** ./node_modules/@matterport/sdk/dist/mp-sdk.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("! function(e, t) {\r\n     true ? module.exports = t() : 0\r\n}(self, (function() {\r\n    return (() => {\r\n        \"use strict\";\r\n        var e = {\r\n                d: (t, o) => {\r\n                    for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, {\r\n                        enumerable: !0,\r\n                        get: o[r]\r\n                    })\r\n                },\r\n                o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),\r\n                r: e => {\r\n                    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\r\n                        value: \"Module\"\r\n                    }), Object.defineProperty(e, \"__esModule\", {\r\n                        value: !0\r\n                    })\r\n                }\r\n            },\r\n            t = {};\r\n        e.r(t), e.d(t, {\r\n            default: () => n,\r\n            setupSdk: () => r\r\n        });\r\n        const o = e => \"string\" == typeof e ? document.querySelector(e) : e,\r\n            r = async (e, t = {}) => {\r\n                var r, n, a, i, s;\r\n                const {\r\n                    connectOptions: c = [],\r\n                    container: d,\r\n                    domain: l = \"my.matterport.com\",\r\n                    iframe: u,\r\n                    iframeAttributes: m = {},\r\n                    iframeQueryParams: p = new URLSearchParams,\r\n                    space: f = \"LL4Nmkd6q57\" //공간ID설정 \r\n                } = t;\r\n                let y = o(u);\r\n                if (!e) throw new Error(\"sdkKey required to use the SDK.\");\r\n                for (await new Promise(((e, t) => {\r\n                        const o = document.createElement(\"script\");\r\n                        o.onload = e, o.onerror = t, o.setAttribute(\"src\", \"https://static.matterport.com/showcase-sdk/latest.js\"), document.head.append(o)\r\n                    })); !window.MP_SDK;) await new Promise(requestAnimationFrame);\r\n                if (!y) {\r\n                    y = document.createElement(\"iframe\");\r\n                    var y2 = document.createElement(\"div\");\r\n                    var yt = document.createElement(\"p\");\r\n                    yt.style.backgroundColor = \"red\"\r\n                    yt.classList.add(\"class1\");\r\n                    y2.appendChild(yt);\r\n                    console.log(y, y2)\r\n\r\n                    const t = {\r\n                            frameborder: \"10\",\r\n                            allow: \"fullscreen; xr-spatial-tracking\",\r\n                            id: \"mp-showcase\",\r\n                            width: d ? \"100%\" : \"800px\",\r\n                            height: d ? \"100%\" : \"500px\"\r\n                        },\r\n                        n = Object.assign(Object.assign({}, t), m);\r\n             \r\n\r\n   \r\n                    for (const e in n) y.setAttribute(e, n[e]);\r\n                    const a = {\r\n                            m: f,\r\n                            play: \"1\",\r\n                            applicationKey: e\r\n                        },\r\n                        i = p instanceof URLSearchParams ? p : new URLSearchParams(Object.entries(p).map((([e, t]) => [e, t.toString()])));\r\n                    Object.keys(a).forEach((e => {\r\n                        i.has(e) || i.set(e, a[e])\r\n                    }));\r\n                    const s = l.replace(/^(?:[^:]*\\:\\/\\/|\\/\\/)/gm, \"\");\r\n                    console.log(s)\r\n                    y.setAttribute(\"src\", `//${s}/show?${i.toString()}`);\r\n                    \r\n                    \r\n                    (null !== (r = o(d)) && void 0 !== r ? r : document.body).appendChild(y)\r\n                    \r\n                }\r\n                const h = null !== (n = null == c ? void 0 : c[0]) && void 0 !== n ? n : y;\r\n                try {\r\n                    return await window.MP_SDK.connect(h, e, \"\")\r\n                } catch (e) {\r\n                    throw (null === (s = null === (a = e.toString) || void 0 === a ? void 0 : (i = a.call(e)).includes) || void 0 === s ? void 0 : s.call(i, \"key/referrer mismatch\")) && (e = `Incorrect SDK key. Did you:\\n\\t(a) set up your key using the instructions at https://matterport.github.io/showcase-sdk/sdk_home.html#installation and\\n\\t(b) add ${window.location.host} to the allowed domains?\\n\\n${e}`), new Error(e)\r\n                }\r\n            }, n = r;\r\n        return t\r\n    })()\r\n}));\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://mp-sdk/./node_modules/@matterport/sdk/dist/mp-sdk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;