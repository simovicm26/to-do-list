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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\n      width: 100vw;\\n      height: 100vh;\\n      margin: 0;\\n      font-family: 'Roboto', sans-serif;\\n  }\\n\\n  .container{\\n      display: grid;\\n      grid-template-columns: minmax(400px,1fr) 4fr;\\n      grid-template-rows: minmax(60px,4vw) 1fr;\\n      grid-template-areas: \\n      \\\"nav nav\\\"\\n      \\\"sidebar main\\\";\\n      width: 100%;\\n      height: 100%;\\n  }\\n\\n  .nav{\\n      background-color: rgb(0, 132, 255);\\n      grid-area: nav;\\n  }\\n\\n  .main-content{\\n      background-color: rgb(255, 255, 255);\\n      grid-area: main;\\n      background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n      background-size: cover;\\n      background-position: center;\\n      display: grid;\\n      grid-template-rows: min-content 1fr;\\n      padding: 70px 100px;\\n      gap:20px;\\n  }\\n\\n  .sidebar{\\n      background-color: rgb(255, 255, 255);\\n      grid-area: sidebar;\\n      font-family: 'Roboto';\\n      display: flex;\\n      align-items: flex-start;\\n      justify-content: flex-start;\\n      flex-direction: column;\\n      padding: 50px 50px;\\n      -webkit-box-shadow: inset -5px 0px 32px -21px rgba(0,0,0,0.36);\\n      -moz-box-shadow: inset -5px 0px 32px -21px rgba(0,0,0,0.36);\\n      box-shadow: inset -5px 0px 32px -21px rgba(0,0,0,0.36);\\n  }\\n\\n  h1{\\n      color:rgb(41, 41, 41);\\n      font-weight: 400;\\n      font-size: max(2vw,25px);\\n      margin: 0;\\n      padding: 0;\\n  }\\n\\n  .sidebar-title{\\n      display: flex;\\n      justify-content: space-between;\\n      width: 100%;\\n      padding: 20px 0;\\n      border-bottom: 1px solid rgb(192, 192, 192);\\n      align-items: center;\\n  }\\n\\n  h2{\\n    color:rgb(41, 41, 41);\\n    font-weight: 300;\\n    font-size: max(1.5vw,25px);\\n    margin: 0;\\n    padding: 20px 0;\\n  }\\n\\n  .sidebar-container h2:hover{\\n      text-decoration: underline;\\n  }\\n\\n  .pop-up-wrapper{\\n\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(0, 132, 255, 0.322);\\n    left: 0;\\n    bottom: 0;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  .pop-up-container{\\n    background-color: white;\\n    padding:30px;\\n    border-radius: 50px;\\n    text-align: center;\\n  }\\n\\n  input{\\n\\n    width: 400px;\\n    border-radius: 50px;\\n    background-color: rgb(243, 243, 243);\\n    font-size: 25px;\\n    padding: 15px;\\n    margin: 15px;\\n    border:none;\\n  }\\n  \\n  input:focus{\\n    outline: none;\\n    border: 2px solid rgb(0, 132, 255);\\n  }\\n\\n  #create-list-button{\\n\\n    font-size: 25px;\\n    color:rgb(0, 132, 255);\\n    padding: 10px;\\n  }\\n\\n  #cancel-list-button{\\n\\n    font-size: 25px;\\n    color:red;\\n    padding: 10px;  \\n\\n  }\\n\\n  .main-list-container{\\n\\n    width: 500px;\\n    height: 500px;\\n    background-color: white;\\n    border-radius: 50px;\\n    padding: 50px;\\n    padding-bottom: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    position: relative;\\n  }\\n\\n  .main-list-container h1{\\n\\n    margin-bottom: 30px;\\n\\n  }\\n\\n  h3{\\n\\n    font-size: 18px;\\n    font-weight: 400;\\n    color:rgb(0, 132, 255);\\n  }\\n\\n  .delete-task{\\n      color: red;\\n      font-size: 25px;\\n      margin-top:auto;\\n      width: 100%;\\n      padding: 10px;\\n      text-align: center;\\n      border-radius: 50px;\\n  }\\n\\n  .delete-task:hover{\\n\\n    background-color:rgba(245, 245, 245, 0.979);\\n\\n  }\\n\\n  #create-task-button{\\n\\n    font-size: 25px;\\n    color:rgb(0, 132, 255);\\n    padding: 10px;\\n\\n  }\\n\\n  .task-wrapper{\\n\\n    width: 100%;\\n    display: flex;\\n    justify-content:space-between;\\n\\n    align-items: center;\\n    padding:10px;\\n  }\\n\\n  .task-wrapper:hover{\\n\\n    background-color: rgba(245, 245, 245, 0.979);\\n    border-radius: 10px;\\n  }\\n\\n  p{\\n    margin:0;\\n    padding: 0;\\n  }\\n\\n .sidebar-task-container h2:hover{\\n\\n    text-decoration: underline;\\n\\n  }\\n\\n.close-icon{\\n\\n  width: 50px;\\n  position: absolute;\\n  top:50px;\\n  right: 50px;\\n\\n}\\n\\n#bin{\\n\\n  z-index: 10;\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/form-list.js":
/*!**************************!*\
  !*** ./src/form-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listPopUp\": () => (/* binding */ listPopUp)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n\n\nconst listPopUp = function(){\n\n    const renderPopUp = function(parent){\n\n        let popUpWrapper = document.createElement('div');\n\n        popUpWrapper.classList.add('pop-up-wrapper');\n\n        let popUpContainer = document.createElement('div');\n\n        popUpContainer.classList.add('pop-up-container');\n\n        popUpWrapper.append(popUpContainer);\n\n        parent.append(popUpWrapper);\n\n        let popUpInputList = document.createElement('input');\n\n        let popUpText = document.createElement('h2');\n\n        popUpText.textContent = 'Enter list name:'\n \n        popUpContainer.append(popUpText);\n\n        popUpContainer.append(popUpInputList);\n\n        let cancelListButton = document.createElement('div');\n\n        cancelListButton.id = 'cancel-list-button';\n\n        cancelListButton.textContent = 'Cancel';\n\n        let createListButton = document.createElement('div');\n\n        createListButton.id = 'create-list-button';\n\n        createListButton.textContent = 'Create';\n\n        popUpContainer.append(createListButton);\n\n        popUpContainer.append(cancelListButton);\n\n        document.addEventListener('click',function(e){\n        if(e.target.matches('#cancel-list-button')|| e.target.matches('div.pop-up-wrapper')){\n\n            clearPopUp(popUpWrapper);\n\n        }})\n\n        \n        // document.addEventListener('click',function(e){\n        //     if(e.target.matches('#create-list-button') && popUpInputList.value !== ''){\n    \n        //         listStorage.listAdded(popUpInputList.value);\n\n        //         clearPopUp(popUpWrapper);\n                \n        //     }})\n\n        createListButton.addEventListener('click',function(){\n            if(popUpInputList.value !== ''){\n            _lists__WEBPACK_IMPORTED_MODULE_0__.listStorage.listAdded(popUpInputList.value);\n\n            clearPopUp(popUpWrapper);\n            }else return;\n\n        })\n\n    }\n\n    const clearPopUp = function(content){   \n\n        content.innerHTML = '';\n\n        content.remove();\n\n    }\n\n    return{renderPopUp};\n\n}();\n\n//# sourceURL=webpack://to-do-list/./src/form-list.js?");

/***/ }),

/***/ "./src/form-task.js":
/*!**************************!*\
  !*** ./src/form-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskPopUp\": () => (/* binding */ taskPopUp)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nconst taskPopUp = function(){\n\n    const renderPopUp = function(parent){\n\n        let popUpWrapper = document.createElement('div');\n\n        popUpWrapper.classList.add('pop-up-wrapper');\n\n        let popUpContainer = document.createElement('div');\n\n        popUpContainer.classList.add('pop-up-container');\n\n        popUpWrapper.append(popUpContainer);\n\n        parent.append(popUpWrapper);\n\n        let popUpInputTitle = document.createElement('input');\n\n        let popUpText = document.createElement('h2');\n\n        let popUpDescription = document.createElement('h2');\n\n        let popUpDescriptionInput = document.createElement('input');\n\n        popUpDescription.textContent ='Description:'\n\n        popUpText.textContent = 'Enter task name:'\n \n        popUpContainer.append(popUpText,popUpInputTitle,popUpDescription,popUpDescriptionInput);\n\n        let cancelTaskButton = document.createElement('div');\n\n        cancelTaskButton.id = 'cancel-list-button';\n\n        cancelTaskButton.textContent = 'Cancel';\n\n        let createTaskButton = document.createElement('div');\n\n        createTaskButton.id = 'create-task-button';\n\n        createTaskButton.textContent = 'Add';\n\n        popUpContainer.append(createTaskButton);\n        console.log('lol');\n        popUpContainer.append(cancelTaskButton);\n\n        document.addEventListener('click',function(e){\n        if(e.target.matches('#cancel-list-button')|| e.target.matches('div.pop-up-wrapper')){\n\n            clearPopUpTask(popUpWrapper);\n\n        }})\n\n        \n        // document.addEventListener('click',function(e){\n        //     if(e.target.matches('#create-list-button') && popUpInputList.value !== ''){\n    \n        //         listStorage.listAdded(popUpInputList.value);\n\n        //         clearPopUp(popUpWrapper);\n                \n        //     }})\n\n        createTaskButton.addEventListener('click',function(){\n            if(popUpInputTitle.value !== '' && popUpDescriptionInput.value){\n\n                let taskName = document.querySelector('.main-list-container').querySelector('h1').textContent;\n\n                _tasks__WEBPACK_IMPORTED_MODULE_0__.taskStorage.taskAdded(popUpInputTitle.value,popUpDescriptionInput.value,taskName);\n\n\n                clearPopUpTask(popUpWrapper);\n\n            }else return;\n\n        })\n\n    }\n\n    const clearPopUpTask = function(content){   \n\n        content.innerHTML = '';\n\n        content.remove();\n\n    }\n\n    return{renderPopUp};\n\n}();\n\n//# sourceURL=webpack://to-do-list/./src/form-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _form_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-list */ \"./src/form-list.js\");\n\n\n\n\n\nconst body = document.querySelector('body');\n\ndocument.addEventListener('click',function(e){\n\n    if(e.target.matches('#tag-one')){\n\n        _form_list__WEBPACK_IMPORTED_MODULE_1__.listPopUp.renderPopUp(body);\n\n    }\n\n})\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listStorage\": () => (/* binding */ listStorage)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n  \n\n  \n  \n  const listStorage = function(){\n\n    let lists = [];\n\n    let sidebar = document.querySelector('#lists');\n\n    const listCreator = function(name){\n        \n        return{name};\n\n    }\n\n    const listAdded = function(inputValue){\n\n        let newList = listCreator(inputValue);\n\n        lists.push(newList);\n        \n        _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarContent.renderListSidebar(sidebar,lists);\n\n\n    }\n\n    const listRemoved = function(listName){\n\n        lists = lists.filter(list => list.name !== listName);\n\n\n        _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarContent.renderListSidebar(sidebar,lists);\n       \n        _tasks__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskListRemoved(listName);\n\n        console.log(lists);\n\n    }\n\n    return{listAdded,listRemoved};\n}();\n\n//# sourceURL=webpack://to-do-list/./src/lists.js?");

/***/ }),

/***/ "./src/maincontent.js":
/*!****************************!*\
  !*** ./src/maincontent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainContent\": () => (/* binding */ mainContent)\n/* harmony export */ });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n/* harmony import */ var _form_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-task */ \"./src/form-task.js\");\n/* harmony import */ var _close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close.svg */ \"./src/close.svg\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\n\n\n\n\n\n\n\nconst mainContent = function(){\n\n    let mainWrapper = document.querySelector('.main-content');\n\n    const renderTaskMain = function(title){\n\n        let body = document.querySelector('body');\n\n        mainWrapper.innerHTML = '';\n\n        let paragraf = document.createElement('p');\n\n        paragraf.textContent='LIST';\n\n        paragraf.style.color='rgb(0, 132, 255)';\n\n        let taskContainer = document.createElement('div');\n\n        taskContainer.id='task-container';\n\n        let mainContainer = document.createElement('div');\n\n        mainContainer.classList.add('main-list-container');\n\n        let listTitle = document.createElement('h1');\n\n        listTitle.textContent = `${title}`;\n\n        const close = document.createElement('img');\n\n        close.src = _close_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n        close.classList.add('close-icon');\n\n        let addTask = document.createElement('h3');\n\n        addTask.id='add-task';\n\n        addTask.textContent = '+  Add New Task';\n\n        mainWrapper.append(mainContainer);\n\n        mainContainer.append(close,paragraf,listTitle,taskContainer,addTask);\n\n        let deleteTaskButton = document.createElement('div');\n\n        deleteTaskButton.classList.add('delete-task');\n\n        deleteTaskButton.textContent='Delete';\n\n        mainContainer.append(deleteTaskButton);\n\n        _tasks__WEBPACK_IMPORTED_MODULE_3__.taskStorage.renderListTasks(title,taskContainer);\n\n        deleteTaskButton.addEventListener('click',function(){\n\n                let listTag = mainContainer.querySelector('h1').textContent;\n                \n                _lists__WEBPACK_IMPORTED_MODULE_0__.listStorage.listRemoved(listTag);\n\n                mainWrapper.innerHTML='';\n\n        })\n\n\n        addTask.addEventListener('click',()=>_form_task__WEBPACK_IMPORTED_MODULE_1__.taskPopUp.renderPopUp(body));\n\n\n\n    }\n\n    const renderTaskContent = function(title,description){\n\n        let body = document.querySelector('body');\n\n        let taskDescription = document.createElement('h2');\n\n        let paragrafDes = document.createElement('p');\n\n        taskDescription.textContent = `${description}`;\n\n        mainWrapper.innerHTML = '';\n\n        const close = document.createElement('img');\n\n        close.src = _close_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n        close.classList.add('close-icon');\n\n        let paragraf = document.createElement('p');\n\n        paragraf.textContent='TASK';\n\n        paragrafDes.textContent='DESCRIPTION';\n\n        paragrafDes.style.color='rgb(0, 132, 255)';\n\n        paragraf.style.color='rgb(0, 132, 255)';\n\n        let taskContainer = document.createElement('div');\n\n        taskContainer.id='task-container';\n\n        let mainContainer = document.createElement('div');\n\n        mainContainer.classList.add('main-list-container');\n\n        let listTitle = document.createElement('h1');\n\n        listTitle.textContent = `${title}`;\n\n        mainWrapper.append(mainContainer);\n\n        mainContainer.append(close,paragraf,listTitle,paragrafDes,taskDescription);\n\n    }\n\n    document.addEventListener('click',function(e){\n\n        if(e.target.matches('.close-icon')){\n\n            mainWrapper.innerHTML='';\n \n        }\n\n    })\n\n\n    return {renderTaskMain,renderTaskContent};\n\n}();\n\n//# sourceURL=webpack://to-do-list/./src/maincontent.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebarContent\": () => (/* binding */ sidebarContent)\n/* harmony export */ });\n/* harmony import */ var _maincontent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maincontent */ \"./src/maincontent.js\");\n\n\nconst sidebarContent = function(){\n\n    const renderListSidebar = function(container,lists){\n\n        container.innerHTML ='';\n\n        lists.forEach(function(list){\n\n            let taskName = document.createElement('h2');\n\n            taskName.id='sidebar-list';\n\n            taskName.textContent = `${list.name}`;\n            console.log('mare');\n            container.append(taskName);\n    \n            taskName.addEventListener('click', ()=> _maincontent__WEBPACK_IMPORTED_MODULE_0__.mainContent.renderTaskMain(list.name));\n\n            // document.addEventListener('click',function(e){\n\n            //     if(e.target.matches('#sidebar-list')){\n                    \n            //         mainContent.renderTaskMain(e.target.textContent);\n\n            //     }\n\n            // })\n\n        })\n\n       \n\n    }\n\n    const renderTaskSidebar = function(container,tasks){\n\n        container.innerHTML ='';\n\n        tasks.forEach(function(task){\n\n            let taskName = document.createElement('h2');\n\n            taskName.textContent = `${task.name}`;\n    \n            container.append(taskName);\n    \n            taskName.addEventListener('click', ()=>_maincontent__WEBPACK_IMPORTED_MODULE_0__.mainContent.renderTaskContent(task.name,task.description));\n\n        })\n\n       \n\n    }\n\n    return{renderTaskSidebar,renderListSidebar};\n\n}();\n\n//# sourceURL=webpack://to-do-list/./src/sidebar.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskStorage\": () => (/* binding */ taskStorage)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _bin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bin.svg */ \"./src/bin.svg\");\n/* harmony import */ var _maincontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maincontent */ \"./src/maincontent.js\");\n\n\n\n\n\n\nconst taskStorage = function(){\n\n    let tasks = [];\n\n    let sidebar = document.querySelector('#tasks');\n\n    const taskCreator = function(name,description,list){\n\n        return{name,description,list};\n\n    }\n\n    const taskAdded = function(inputValue,descriptionValue,taskList){\n\n        let newTask = taskCreator(inputValue,descriptionValue,taskList);\n\n        let mainContainer = document.querySelector('#task-container');\n\n        tasks.push(newTask);\n\n        renderListTasks(taskList,mainContainer);\n\n        _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarContent.renderTaskSidebar(sidebar,tasks);\n\n    }\n\n    const taskRemoved = function(taskName){\n\n        tasks = tasks.filter(task => task.name !== taskName);\n\n\n        _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarContent.renderTaskSidebar(sidebar,tasks);\n       \n\n        console.log(lists);\n\n    }\n\n    const taskListRemoved = function(listName){\n\n        tasks = tasks.filter(task => task.list !== listName);\n\n\n        _sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarContent.renderTaskSidebar(sidebar,tasks);\n       \n\n        console.log(lists);\n\n    }\n\n    const renderListTasks = function(listTitle,container){\n\n        container.innerHTML = '';\n\n        let tasksFiltered = tasks.filter(task => task.list === listTitle);\n\n        tasksFiltered.forEach(function(task){\n\n            let taskWrapper = document.createElement('div');\n\n            taskWrapper.classList.add('task-wrapper');\n\n            let taskTitle = document.createElement('p');\n\n            const myIcon = document.createElement('img');\n\n            myIcon.src = _bin_svg__WEBPACK_IMPORTED_MODULE_1__;\n\n            myIcon.id='bin';\n\n            taskTitle.textContent = `- ${task.name}`;\n            \n            taskWrapper.append(taskTitle);\n\n            taskWrapper.append(myIcon);\n\n            container.append(taskWrapper);\n\n            myIcon.addEventListener('click',function(e){\n\n                taskRemoved(task.name);\n                taskWrapper.remove();\n\n            })\n\n            taskWrapper.addEventListener('click',function(e){\n                if(!(e.target.matches('#bin'))){\n                _maincontent__WEBPACK_IMPORTED_MODULE_2__.mainContent.renderTaskContent(task.name , task.description);\n                } else return;\n\n        })\n\n        })\n\n    }\n\n    return{taskAdded,taskRemoved,renderListTasks,taskListRemoved};\n}();\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8fc80d0a6d761cf02c2.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/background.jpg?");

/***/ }),

/***/ "./src/bin.svg":
/*!*********************!*\
  !*** ./src/bin.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1dee45c34b9414fd9ac8.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/bin.svg?");

/***/ }),

/***/ "./src/close.svg":
/*!***********************!*\
  !*** ./src/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cd3645cf868e38fd4b5.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/close.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;