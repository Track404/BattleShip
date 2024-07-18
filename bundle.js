/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  margin: 0;
  display: grid;

  grid-template-rows: 100px 1fr;
}
/*header styling*/
#logo {
  width: 80px;
  height: 80px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding-right: 10px;
}
.header h1 {
  border-left: 4px solid rgb(175, 175, 175);
  border-radius: 2px;
  padding-left: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
}

#headerLeft {
  display: flex;
  gap: 5px;
}

/*content styling*/
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 300px;
  justify-items: center;
  gap: 10px;
  background-color: rgb(241, 241, 241);
}

.content h1 {
  text-align: center;
}

#playerGrid,
#computerGrid {
  display: flex;
  flex-direction: column;
}
.rowgrid {
  display: flex;
}

.pixel,
.pixelComputer {
  background-color: rgb(179, 197, 247);
  border-radius: 4px;
  height: 40px;
  width: 40px;
  margin: 1.5px;
}

.pixel:hover,
.pixelComputer:hover {
  background-color: rgb(187, 187, 187);
}

#computerTitle {
  background-color: rgb(247, 82, 82);
}

#PlayerTitle {
  background-color: rgb(83, 83, 250);
}

#PlayerTitle,
#computerTitle {
  width: 430px;
  color: white;
  font-size: 25px;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 30px;
  border-radius: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#createGame,
button {
  background: #8e8efc;
  border-radius: 999px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji',
    NotoColorEmoji, 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji',
    EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',
    'Noto Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}

#contentCreation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  grid-column: 1/-1;
}

#messageTurn {
  padding: 0;
  width: 30vw;
}

/*dialog styling*/
dialog {
  background-color: rgb(240, 240, 240);
  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

dialog::backdrop {
  background-color: black;
  opacity: 0.5;
}
dialog button {
  margin-right: 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 18px;
  font-weight: bold;
}

#allInput {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin-bottom: 20px;
}

#allInput > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

input[type='number'] {
  width: 30px;
}

select,
label {
  height: 21px;
}

p {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border: 2px solid black;
  border-radius: 4px;
  margin: 0;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;EACT,aAAa;;EAEb,6BAA6B;AAC/B;AACA,iBAAiB;AACjB;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B;+EAC6E;EAC7E,mBAAmB;AACrB;AACA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,qCAAqC;EACrC,6BAA6B;EAC7B,qBAAqB;EACrB,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;AAEA;;EAEE,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;;EAEE,mBAAmB;EACnB,oBAAoB;EACpB,qCAAqC;EACrC,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf;;;2BAGyB;EACzB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,4BAA4B;EAC5B,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB;qCACmC;AACrC;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;AACX","sourcesContent":["body {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n\n  grid-template-rows: 100px 1fr;\n}\n/*header styling*/\n#logo {\n  width: 80px;\n  height: 80px;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,\n    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n  padding-right: 10px;\n}\n.header h1 {\n  border-left: 4px solid rgb(175, 175, 175);\n  border-radius: 2px;\n  padding-left: 10px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n#headerLeft {\n  display: flex;\n  gap: 5px;\n}\n\n/*content styling*/\n.content {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr 300px;\n  justify-items: center;\n  gap: 10px;\n  background-color: rgb(241, 241, 241);\n}\n\n.content h1 {\n  text-align: center;\n}\n\n#playerGrid,\n#computerGrid {\n  display: flex;\n  flex-direction: column;\n}\n.rowgrid {\n  display: flex;\n}\n\n.pixel,\n.pixelComputer {\n  background-color: rgb(179, 197, 247);\n  border-radius: 4px;\n  height: 40px;\n  width: 40px;\n  margin: 1.5px;\n}\n\n.pixel:hover,\n.pixelComputer:hover {\n  background-color: rgb(187, 187, 187);\n}\n\n#computerTitle {\n  background-color: rgb(247, 82, 82);\n}\n\n#PlayerTitle {\n  background-color: rgb(83, 83, 250);\n}\n\n#PlayerTitle,\n#computerTitle {\n  width: 430px;\n  color: white;\n  font-size: 25px;\n  margin: 0;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  border-radius: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n#createGame,\nbutton {\n  background: #8e8efc;\n  border-radius: 999px;\n  box-shadow: #5e5df0 0 10px 20px -10px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  font-family: Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji',\n    NotoColorEmoji, 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji',\n    EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',\n    'Noto Sans', sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 24px;\n  opacity: 1;\n  outline: 0 solid transparent;\n  padding: 8px 18px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: fit-content;\n  word-break: break-word;\n  border: 0;\n}\n\n#contentCreation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n\n  grid-column: 1/-1;\n}\n\n#messageTurn {\n  padding: 0;\n  width: 30vw;\n}\n\n/*dialog styling*/\ndialog {\n  background-color: rgb(240, 240, 240);\n  border: none;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\ndialog::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\ndialog button {\n  margin-right: 10px;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nlabel {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#allInput {\n  display: flex;\n  justify-content: space-around;\n  gap: 30px;\n  margin-bottom: 20px;\n}\n\n#allInput > div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n}\n\ninput[type='number'] {\n  width: 30px;\n}\n\nselect,\nlabel {\n  height: 21px;\n}\n\np {\n  font-weight: bold;\n  font-size: 30px;\n  text-align: center;\n  border: 2px solid black;\n  border-radius: 4px;\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-else-return */
/* eslint-disable comma-dangle */


/* eslint-disable consistent-return */
class Gameboard {
  constructor() {
    this.grid = Array.from({
      length: 10,
    }).map(() => Array(10).fill(null));
    this.allHit = 0;
  }

  placeShip(ship, positionX, positionY, axis) {
    if (axis === 'vertical') {
      const maxIndex = positionX + ship.shipLength;
      if (maxIndex >= 0 && maxIndex < 9) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship.shipLength; i++) {
          this.grid[positionX + i].splice(positionY, 1, ship);
        }
        this.allHit += ship.shipLength;
        return true;
      }
      return false;
    }

    if (axis === 'horizontal') {
      const maxIndex = positionY + ship.shipLength;
      if (maxIndex >= 0 && maxIndex < 9) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship.shipLength; i++) {
          this.grid[positionX].splice(positionY + i, 1, ship);
        }
        this.allHit += ship.shipLength;
        return true;
      }
      return false;
    }
  }

  receiveAttack(positionX, positionY) {
    if (this.grid[positionX][positionY] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      this.grid[positionX][positionY].hit();
      this.grid[positionX][positionY].sunk(
        this.grid[positionX][positionY].numberOfHit
      );
      this.allHit -= 1;
      return true;
    } else this.grid[positionX].splice(positionY, 1, 'Miss');
    if (this.allHit === 0) {
      return false;
    }
  }
}


/***/ }),

/***/ "./src/gameboardCreation.js":
/*!**********************************!*\
  !*** ./src/gameboardCreation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerGameboard: () => (/* binding */ computerGameboard),
/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-plusplus */


function playerGameboard(game) {
  const playerGrid = document.querySelector('#playerGrid');
  playerGrid.innerHTML = '';
  for (let i = 0; i < game.player.grid.length; i++) {
    const div = document.createElement('div');
    div.classList.add('rowgrid');
    for (let j = 0; j < game.player.grid[i].length; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.setAttribute('row', i);
      pixel.setAttribute('column', j);
      div.appendChild(pixel);
      if (game.player.grid[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        pixel.style.backgroundColor = 'blue';
        if (game.player.grid[i][j].sunkShip === true) {
          pixel.style.backgroundColor = 'yellow';
        }
      } else if (game.player.grid[i][j] === 'Miss') {
        pixel.style.backgroundColor = 'grey';
      }
    }
    playerGrid.appendChild(div);
  }
}
function computerGameboard(game) {
  const computerGrid = document.querySelector('#computerGrid');
  computerGrid.innerHTML = '';
  for (let i = 0; i < game.computer.grid.length; i++) {
    const div = document.createElement('div');
    div.classList.add('rowgrid');

    for (let j = 0; j < game.computer.grid[i].length; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixelComputer');
      pixel.setAttribute('row', i);
      pixel.setAttribute('column', j);

      div.appendChild(pixel);
      if (game.computer.grid[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        if (game.computer.grid[i][j].sunkShip === true) {
          pixel.style.backgroundColor = 'yellow';
        }
      } else if (game.computer.grid[i][j] === 'Miss') {
        pixel.style.backgroundColor = 'grey';
      }
    }
    computerGrid.appendChild(div);
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  constructor() {
    this.player = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.computer = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.numberOfHit = 0;
    this.sunkShip = false;
  }

  hit() {
    this.numberOfHit += 1;
    return this.numberOfHit;
  }

  sunk(hit) {
    if (hit >= this.shipLength) {
      this.sunkShip = true;
    }
    return this.sunkShip;
  }
}


/***/ }),

/***/ "./src/images/battleshipLogo.jpg":
/*!***************************************!*\
  !*** ./src/images/battleshipLogo.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "270599f879b71b0f1e68.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/GameInterface.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_battleshipLogo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/battleshipLogo.jpg */ "./src/images/battleshipLogo.jpg");
/* harmony import */ var _gameboardCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboardCreation */ "./src/gameboardCreation.js");
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */






// creation of the game
const templateGame = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
/*
game.player.placeShip(destroyer, 6, 4, 'horizontal');
game.player.placeShip(carrier, 0, 2, 'vertical');
game.computer.placeShip(destroyerComputer, 0, 0, 'vertical');
game.computer.placeShip(carrierComputer, 0, 2, 'vertical');
*/
// header log placement
const messageTurn = document.querySelector('#messageTurn');
const logo = document.querySelector('#logo');
logo.src = _images_battleshipLogo_jpg__WEBPACK_IMPORTED_MODULE_3__;
const showButtonProject = document.querySelector('#createGame');
const projectDialog = document.querySelector('dialog');
const ConfirmGame = document.querySelector('#confirmGame');
showButtonProject.addEventListener('click', () => {
  projectDialog.showModal();
});

// creation of players grid
(0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.playerGameboard)(templateGame);
(0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.computerGameboard)(templateGame);
// make player play the game
let players = [];

function PlayerTurn(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function getRndInteger(max, min) {
  return Math.floor(Math.random() * (max - min));
}

// eslint-disable-next-line consistent-return
function attackPlayerUI(game) {
  const row = getRndInteger(10, 0);
  const column = getRndInteger(10, 0);
  const pixel = document.querySelector(`[row='${row}'][column='${column}']`);
  if (
    pixel.style.backgroundColor === 'red' ||
    pixel.style.backgroundColor === 'grey' ||
    pixel.style.backgroundColor === 'yellow' ||
    players[0].allHit === 0
  ) {
    return setTimeout(() => {
      attackPlayerUI(game);
    }, '100');
  }
  if (players[0].receiveAttack(row, column) === true) {
    pixel.style.backgroundColor = 'red';
    if (players[0].grid[row][column].sunkShip === true) {
      (0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.playerGameboard)(game);
    }
    attackPlayerUI(game);
  } else {
    PlayerTurn(players, 0, 1);
    pixel.style.backgroundColor = 'grey';
    messageTurn.innerHTML = '<p>Computer Attack<p>';
  }
  if (players[0].allHit === 0) {
    alert('computer win the game');
  }
}

function attackComputerUI(game) {
  const gridSquareComputer = document.querySelectorAll('.pixelComputer');

  gridSquareComputer.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      const row = pixel.getAttribute('row');
      const column = pixel.getAttribute('column');

      if (
        pixel.style.backgroundColor === 'red' ||
        pixel.style.backgroundColor === 'grey' ||
        pixel.style.backgroundColor === 'yellow' ||
        players[0].allHit === 0 ||
        players[0] === game.player
      ) {
        return;
      }

      if (players[0].receiveAttack(row, column) === true) {
        pixel.style.backgroundColor = 'red';
        if (players[0].grid[row][column].sunkShip === true) {
          (0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.computerGameboard)(game);
          attackComputerUI(game);
        }
      } else {
        pixel.style.backgroundColor = 'grey';
        PlayerTurn(players, 0, 1);
        attackPlayerUI(game);
        messageTurn.innerHTML = '<p>Player Attack<p>';
      }

      if (players[0].allHit === 0) {
        alert('player win the game');
      }
    });
  });
}

function newGame() {
  const game = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2);
  const submarine = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3);
  const cruiser = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3);
  const battleship = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4);
  const carrier = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5);
  const carrierComputer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](5);
  const battleshipComputer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4);
  const submarineComputer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3);
  const cruiserComputer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3);
  const destroyerComputer = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2);

  players = [game.computer, game.player];

  const inputCarrierX = document.querySelector('#carrierX');
  const inputCarrierY = document.querySelector('#carrierY');
  const inputCarrierAxis = document.querySelector('#carrierAxis');

  const inputBattleShipX = document.querySelector('#battleShipX');
  const inputBattleShipY = document.querySelector('#battleShipY');
  const inputBattleShipAxis = document.querySelector('#battleShipAxis');

  const inputCruiserX = document.querySelector('#cruiserX');
  const inputCruiserY = document.querySelector('#cruiserY');
  const inputCruiserAxis = document.querySelector('#cruiserAxis');

  const inputSubmarineX = document.querySelector('#submarineX');
  const inputSubmarineY = document.querySelector('#submarineY');
  const inputSubmarineAxis = document.querySelector('#submarineAxis');

  const inputDestroyerX = document.querySelector('#destroyerX');
  const inputDestroyerY = document.querySelector('#destroyerY');
  const inputDestoyerAxis = document.querySelector('#destroyerAxis');

  game.player.placeShip(
    carrier,
    Number(inputCarrierX.value),
    Number(inputCarrierY.value),
    inputCarrierAxis.value
  );
  game.player.placeShip(
    battleship,
    Number(inputBattleShipX.value),
    Number(inputBattleShipY.value),
    inputBattleShipAxis.value
  );
  game.player.placeShip(
    cruiser,
    Number(inputCruiserX.value),
    Number(inputCruiserY.value),
    inputCruiserAxis.value
  );
  game.player.placeShip(
    submarine,
    Number(inputSubmarineX.value),
    Number(inputSubmarineY.value),
    inputSubmarineAxis.value
  );
  game.player.placeShip(
    destroyer,
    Number(inputDestroyerX.value),
    Number(inputDestroyerY.value),
    inputDestoyerAxis.value
  );
  // ship placement for computer
  game.computer.placeShip(
    carrierComputer,
    getRndInteger(10, 0),
    getRndInteger(4, 0),
    'horizontal'
  );
  game.computer.placeShip(
    battleshipComputer,
    getRndInteger(5, 0),
    getRndInteger(10, 0),
    'vertical'
  );
  game.computer.placeShip(
    cruiserComputer,
    getRndInteger(10, 0),
    getRndInteger(6, 0),
    'horizontal'
  );
  game.computer.placeShip(
    submarineComputer,
    getRndInteger(6, 0),
    getRndInteger(10, 0),
    'vertical'
  );
  game.computer.placeShip(
    destroyerComputer,
    getRndInteger(10, 0),
    getRndInteger(7, 0),
    'horizontal'
  );
  (0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.playerGameboard)(game);
  (0,_gameboardCreation__WEBPACK_IMPORTED_MODULE_4__.computerGameboard)(game);
  attackComputerUI(game);

  messageTurn.innerHTML = '<p>Player Attack<p>';
}
ConfirmGame.addEventListener('click', (event) => {
  const form = document.querySelector('form');
  event.preventDefault();
  newGame();
  projectDialog.close();
  form.reset();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsK0JBQStCLGtCQUFrQixjQUFjLGtCQUFr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STtBQUNyQyxnQ0FBZ0MsNkNBQUk7QUFDcEMsOEJBQThCLDZDQUFJO0FBQ2xDLGdDQUFnQyw2Q0FBSTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUVBQWU7QUFDakIsRUFBRSxxRUFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkQ3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZUludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcblxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cbi8qaGVhZGVyIHN0eWxpbmcqL1xuI2xvZ28ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCA0cHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCA3cHggMTNweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0zcHggMHB4IGluc2V0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlciBoMSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuI2hlYWRlckxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbn1cblxuLypjb250ZW50IHN0eWxpbmcqL1xuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzMDBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbn1cblxuLmNvbnRlbnQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwbGF5ZXJHcmlkLFxuI2NvbXB1dGVyR3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93Z3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waXhlbCxcbi5waXhlbENvbXB1dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTk3LCAyNDcpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMS41cHg7XG59XG5cbi5waXhlbDpob3Zlcixcbi5waXhlbENvbXB1dGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xufVxuXG4jY29tcHV0ZXJUaXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDgyLCA4Mik7XG59XG5cbiNQbGF5ZXJUaXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDI1MCk7XG59XG5cbiNQbGF5ZXJUaXRsZSxcbiNjb21wdXRlclRpdGxlIHtcbiAgd2lkdGg6IDQzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4jY3JlYXRlR2FtZSxcbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM4ZThlZmM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3gtc2hhZG93OiAjNWU1ZGYwIDAgMTBweCAyMHB4IC0xMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogSW50ZXIsIEhlbHZldGljYSwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICBOb3RvQ29sb3JFbW9qaSwgJ05vdG8gQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ0FuZHJvaWQgRW1vamknLFxuICAgIEVtb2ppU3ltYm9scywgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG91dGxpbmU6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgYm9yZGVyOiAwO1xufVxuXG4jY29udGVudENyZWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xufVxuXG4jbWVzc2FnZVR1cm4ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzB2dztcbn1cblxuLypkaWFsb2cgc3R5bGluZyovXG5kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxNXB4IDEycHg7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC41O1xufVxuZGlhbG9nIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2FsbElucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI2FsbElucHV0ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG5zZWxlY3QsXG5sYWJlbCB7XG4gIGhlaWdodDogMjFweDtcbn1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxhQUFhOztFQUViLDZCQUE2QjtBQUMvQjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QjsrRUFDNkU7RUFDN0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZjs7OzJCQUd5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQjtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxufVxcbi8qaGVhZGVyIHN0eWxpbmcqL1xcbiNsb2dvIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggNHB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTNweCAwcHggaW5zZXQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbiNoZWFkZXJMZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLypjb250ZW50IHN0eWxpbmcqL1xcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMzAwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxufVxcblxcbi5jb250ZW50IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckdyaWQsXFxuI2NvbXB1dGVyR3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnJvd2dyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBpeGVsLFxcbi5waXhlbENvbXB1dGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDE5NywgMjQ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgbWFyZ2luOiAxLjVweDtcXG59XFxuXFxuLnBpeGVsOmhvdmVyLFxcbi5waXhlbENvbXB1dGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG59XFxuXFxuI2NvbXB1dGVyVGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgODIsIDgyKTtcXG59XFxuXFxuI1BsYXllclRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODMsIDI1MCk7XFxufVxcblxcbiNQbGF5ZXJUaXRsZSxcXG4jY29tcHV0ZXJUaXRsZSB7XFxuICB3aWR0aDogNDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4jY3JlYXRlR2FtZSxcXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzhlOGVmYztcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgYm94LXNoYWRvdzogIzVlNWRmMCAwIDEwcHggMjBweCAtMTBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgSGVsdmV0aWNhLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLFxcbiAgICBOb3RvQ29sb3JFbW9qaSwgJ05vdG8gQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ0FuZHJvaWQgRW1vamknLFxcbiAgICBFbW9qaVN5bWJvbHMsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBvdXRsaW5lOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogOHB4IDE4cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiNjb250ZW50Q3JlYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcblxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxufVxcblxcbiNtZXNzYWdlVHVybiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDMwdnc7XFxufVxcblxcbi8qZGlhbG9nIHN0eWxpbmcqL1xcbmRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNhbGxJbnB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWxsSW5wdXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuc2VsZWN0LFxcbmxhYmVsIHtcXG4gIGhlaWdodDogMjFweDtcXG59XFxuXFxucCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWVsc2UtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdyaWQgPSBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogMTAsXG4gICAgfSkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICB0aGlzLmFsbEhpdCA9IDA7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgcG9zaXRpb25YLCBwb3NpdGlvblksIGF4aXMpIHtcbiAgICBpZiAoYXhpcyA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgbWF4SW5kZXggPSBwb3NpdGlvblggKyBzaGlwLnNoaXBMZW5ndGg7XG4gICAgICBpZiAobWF4SW5kZXggPj0gMCAmJiBtYXhJbmRleCA8IDkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmdyaWRbcG9zaXRpb25YICsgaV0uc3BsaWNlKHBvc2l0aW9uWSwgMSwgc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGxIaXQgKz0gc2hpcC5zaGlwTGVuZ3RoO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBtYXhJbmRleCA9IHBvc2l0aW9uWSArIHNoaXAuc2hpcExlbmd0aDtcbiAgICAgIGlmIChtYXhJbmRleCA+PSAwICYmIG1heEluZGV4IDwgOSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZ3JpZFtwb3NpdGlvblhdLnNwbGljZShwb3NpdGlvblkgKyBpLCAxLCBzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbEhpdCArPSBzaGlwLnNoaXBMZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socG9zaXRpb25YLCBwb3NpdGlvblkpIHtcbiAgICBpZiAodGhpcy5ncmlkW3Bvc2l0aW9uWF1bcG9zaXRpb25ZXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuZ3JpZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0uaGl0KCk7XG4gICAgICB0aGlzLmdyaWRbcG9zaXRpb25YXVtwb3NpdGlvblldLnN1bmsoXG4gICAgICAgIHRoaXMuZ3JpZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV0ubnVtYmVyT2ZIaXRcbiAgICAgICk7XG4gICAgICB0aGlzLmFsbEhpdCAtPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHRoaXMuZ3JpZFtwb3NpdGlvblhdLnNwbGljZShwb3NpdGlvblksIDEsICdNaXNzJyk7XG4gICAgaWYgKHRoaXMuYWxsSGl0ID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckdhbWVib2FyZChnYW1lKSB7XG4gIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZCcpO1xuICBwbGF5ZXJHcmlkLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUucGxheWVyLmdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgncm93Z3JpZCcpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZS5wbGF5ZXIuZ3JpZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcGl4ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBpeGVsLmNsYXNzTGlzdC5hZGQoJ3BpeGVsJyk7XG4gICAgICBwaXhlbC5zZXRBdHRyaWJ1dGUoJ3JvdycsIGkpO1xuICAgICAgcGl4ZWwuc2V0QXR0cmlidXRlKCdjb2x1bW4nLCBqKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChwaXhlbCk7XG4gICAgICBpZiAoZ2FtZS5wbGF5ZXIuZ3JpZFtpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIuZ3JpZFtpXVtqXS5zdW5rU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGdhbWUucGxheWVyLmdyaWRbaV1bal0gPT09ICdNaXNzJykge1xuICAgICAgICBwaXhlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICB9XG4gICAgfVxuICAgIHBsYXllckdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyR2FtZWJvYXJkKGdhbWUpIHtcbiAgY29uc3QgY29tcHV0ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyR3JpZCcpO1xuICBjb21wdXRlckdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5jb21wdXRlci5ncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Jvd2dyaWQnKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZS5jb21wdXRlci5ncmlkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBwaXhlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGl4ZWwuY2xhc3NMaXN0LmFkZCgncGl4ZWxDb21wdXRlcicpO1xuICAgICAgcGl4ZWwuc2V0QXR0cmlidXRlKCdyb3cnLCBpKTtcbiAgICAgIHBpeGVsLnNldEF0dHJpYnV0ZSgnY29sdW1uJywgaik7XG5cbiAgICAgIGRpdi5hcHBlbmRDaGlsZChwaXhlbCk7XG4gICAgICBpZiAoZ2FtZS5jb21wdXRlci5ncmlkW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBpZiAoZ2FtZS5jb21wdXRlci5ncmlkW2ldW2pdLnN1bmtTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2FtZS5jb21wdXRlci5ncmlkW2ldW2pdID09PSAnTWlzcycpIHtcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihzaGlwTGVuZ3RoKSB7XG4gICAgdGhpcy5zaGlwTGVuZ3RoID0gc2hpcExlbmd0aDtcbiAgICB0aGlzLm51bWJlck9mSGl0ID0gMDtcbiAgICB0aGlzLnN1bmtTaGlwID0gZmFsc2U7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5udW1iZXJPZkhpdCArPSAxO1xuICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0O1xuICB9XG5cbiAgc3VuayhoaXQpIHtcbiAgICBpZiAoaGl0ID49IHRoaXMuc2hpcExlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rU2hpcCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN1bmtTaGlwO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcExvZ28uanBnJztcbmltcG9ydCB7IHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZENyZWF0aW9uJztcblxuLy8gY3JlYXRpb24gb2YgdGhlIGdhbWVcbmNvbnN0IHRlbXBsYXRlR2FtZSA9IG5ldyBQbGF5ZXIoKTtcbi8qXG5nYW1lLnBsYXllci5wbGFjZVNoaXAoZGVzdHJveWVyLCA2LCA0LCAnaG9yaXpvbnRhbCcpO1xuZ2FtZS5wbGF5ZXIucGxhY2VTaGlwKGNhcnJpZXIsIDAsIDIsICd2ZXJ0aWNhbCcpO1xuZ2FtZS5jb21wdXRlci5wbGFjZVNoaXAoZGVzdHJveWVyQ29tcHV0ZXIsIDAsIDAsICd2ZXJ0aWNhbCcpO1xuZ2FtZS5jb21wdXRlci5wbGFjZVNoaXAoY2FycmllckNvbXB1dGVyLCAwLCAyLCAndmVydGljYWwnKTtcbiovXG4vLyBoZWFkZXIgbG9nIHBsYWNlbWVudFxuY29uc3QgbWVzc2FnZVR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZVR1cm4nKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xubG9nby5zcmMgPSBJY29uO1xuY29uc3Qgc2hvd0J1dHRvblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlR2FtZScpO1xuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuY29uc3QgQ29uZmlybUdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybUdhbWUnKTtcbnNob3dCdXR0b25Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cbi8vIGNyZWF0aW9uIG9mIHBsYXllcnMgZ3JpZFxucGxheWVyR2FtZWJvYXJkKHRlbXBsYXRlR2FtZSk7XG5jb21wdXRlckdhbWVib2FyZCh0ZW1wbGF0ZUdhbWUpO1xuLy8gbWFrZSBwbGF5ZXIgcGxheSB0aGUgZ2FtZVxubGV0IHBsYXllcnMgPSBbXTtcblxuZnVuY3Rpb24gUGxheWVyVHVybihhcnJheSwgaW5kZXgxLCBpbmRleDIpIHtcbiAgW2FycmF5W2luZGV4MV0sIGFycmF5W2luZGV4Ml1dID0gW2FycmF5W2luZGV4Ml0sIGFycmF5W2luZGV4MV1dO1xufVxuXG5mdW5jdGlvbiBnZXRSbmRJbnRlZ2VyKG1heCwgbWluKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuZnVuY3Rpb24gYXR0YWNrUGxheWVyVUkoZ2FtZSkge1xuICBjb25zdCByb3cgPSBnZXRSbmRJbnRlZ2VyKDEwLCAwKTtcbiAgY29uc3QgY29sdW1uID0gZ2V0Um5kSW50ZWdlcigxMCwgMCk7XG4gIGNvbnN0IHBpeGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3Jvdz0nJHtyb3d9J11bY29sdW1uPScke2NvbHVtbn0nXWApO1xuICBpZiAoXG4gICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAncmVkJyB8fFxuICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ2dyZXknIHx8XG4gICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAneWVsbG93JyB8fFxuICAgIHBsYXllcnNbMF0uYWxsSGl0ID09PSAwXG4gICkge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGF0dGFja1BsYXllclVJKGdhbWUpO1xuICAgIH0sICcxMDAnKTtcbiAgfVxuICBpZiAocGxheWVyc1swXS5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSA9PT0gdHJ1ZSkge1xuICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIGlmIChwbGF5ZXJzWzBdLmdyaWRbcm93XVtjb2x1bW5dLnN1bmtTaGlwID09PSB0cnVlKSB7XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQoZ2FtZSk7XG4gICAgfVxuICAgIGF0dGFja1BsYXllclVJKGdhbWUpO1xuICB9IGVsc2Uge1xuICAgIFBsYXllclR1cm4ocGxheWVycywgMCwgMSk7XG4gICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgIG1lc3NhZ2VUdXJuLmlubmVySFRNTCA9ICc8cD5Db21wdXRlciBBdHRhY2s8cD4nO1xuICB9XG4gIGlmIChwbGF5ZXJzWzBdLmFsbEhpdCA9PT0gMCkge1xuICAgIGFsZXJ0KCdjb21wdXRlciB3aW4gdGhlIGdhbWUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2tDb21wdXRlclVJKGdhbWUpIHtcbiAgY29uc3QgZ3JpZFNxdWFyZUNvbXB1dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpeGVsQ29tcHV0ZXInKTtcblxuICBncmlkU3F1YXJlQ29tcHV0ZXIuZm9yRWFjaCgocGl4ZWwpID0+IHtcbiAgICBwaXhlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHBpeGVsLmdldEF0dHJpYnV0ZSgncm93Jyk7XG4gICAgICBjb25zdCBjb2x1bW4gPSBwaXhlbC5nZXRBdHRyaWJ1dGUoJ2NvbHVtbicpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gJ3JlZCcgfHxcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAnZ3JleScgfHxcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSAneWVsbG93JyB8fFxuICAgICAgICBwbGF5ZXJzWzBdLmFsbEhpdCA9PT0gMCB8fFxuICAgICAgICBwbGF5ZXJzWzBdID09PSBnYW1lLnBsYXllclxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcnNbMF0ucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbikgPT09IHRydWUpIHtcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIGlmIChwbGF5ZXJzWzBdLmdyaWRbcm93XVtjb2x1bW5dLnN1bmtTaGlwID09PSB0cnVlKSB7XG4gICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQoZ2FtZSk7XG4gICAgICAgICAgYXR0YWNrQ29tcHV0ZXJVSShnYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICBQbGF5ZXJUdXJuKHBsYXllcnMsIDAsIDEpO1xuICAgICAgICBhdHRhY2tQbGF5ZXJVSShnYW1lKTtcbiAgICAgICAgbWVzc2FnZVR1cm4uaW5uZXJIVE1MID0gJzxwPlBsYXllciBBdHRhY2s8cD4nO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVyc1swXS5hbGxIaXQgPT09IDApIHtcbiAgICAgICAgYWxlcnQoJ3BsYXllciB3aW4gdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgUGxheWVyKCk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3QgY3J1aXNlciA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgY2FycmllckNvbXB1dGVyID0gbmV3IFNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXBDb21wdXRlciA9IG5ldyBTaGlwKDQpO1xuICBjb25zdCBzdWJtYXJpbmVDb21wdXRlciA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBjcnVpc2VyQ29tcHV0ZXIgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3QgZGVzdHJveWVyQ29tcHV0ZXIgPSBuZXcgU2hpcCgyKTtcblxuICBwbGF5ZXJzID0gW2dhbWUuY29tcHV0ZXIsIGdhbWUucGxheWVyXTtcblxuICBjb25zdCBpbnB1dENhcnJpZXJYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXJYJyk7XG4gIGNvbnN0IGlucHV0Q2FycmllclkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllclknKTtcbiAgY29uc3QgaW5wdXRDYXJyaWVyQXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJyaWVyQXhpcycpO1xuXG4gIGNvbnN0IGlucHV0QmF0dGxlU2hpcFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlU2hpcFgnKTtcbiAgY29uc3QgaW5wdXRCYXR0bGVTaGlwWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVTaGlwWScpO1xuICBjb25zdCBpbnB1dEJhdHRsZVNoaXBBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZVNoaXBBeGlzJyk7XG5cbiAgY29uc3QgaW5wdXRDcnVpc2VyWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcnVpc2VyWCcpO1xuICBjb25zdCBpbnB1dENydWlzZXJZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NydWlzZXJZJyk7XG4gIGNvbnN0IGlucHV0Q3J1aXNlckF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlckF4aXMnKTtcblxuICBjb25zdCBpbnB1dFN1Ym1hcmluZVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lWCcpO1xuICBjb25zdCBpbnB1dFN1Ym1hcmluZVkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lWScpO1xuICBjb25zdCBpbnB1dFN1Ym1hcmluZUF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lQXhpcycpO1xuXG4gIGNvbnN0IGlucHV0RGVzdHJveWVyWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXJYJyk7XG4gIGNvbnN0IGlucHV0RGVzdHJveWVyWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXJZJyk7XG4gIGNvbnN0IGlucHV0RGVzdG95ZXJBeGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llckF4aXMnKTtcblxuICBnYW1lLnBsYXllci5wbGFjZVNoaXAoXG4gICAgY2FycmllcixcbiAgICBOdW1iZXIoaW5wdXRDYXJyaWVyWC52YWx1ZSksXG4gICAgTnVtYmVyKGlucHV0Q2FycmllclkudmFsdWUpLFxuICAgIGlucHV0Q2FycmllckF4aXMudmFsdWVcbiAgKTtcbiAgZ2FtZS5wbGF5ZXIucGxhY2VTaGlwKFxuICAgIGJhdHRsZXNoaXAsXG4gICAgTnVtYmVyKGlucHV0QmF0dGxlU2hpcFgudmFsdWUpLFxuICAgIE51bWJlcihpbnB1dEJhdHRsZVNoaXBZLnZhbHVlKSxcbiAgICBpbnB1dEJhdHRsZVNoaXBBeGlzLnZhbHVlXG4gICk7XG4gIGdhbWUucGxheWVyLnBsYWNlU2hpcChcbiAgICBjcnVpc2VyLFxuICAgIE51bWJlcihpbnB1dENydWlzZXJYLnZhbHVlKSxcbiAgICBOdW1iZXIoaW5wdXRDcnVpc2VyWS52YWx1ZSksXG4gICAgaW5wdXRDcnVpc2VyQXhpcy52YWx1ZVxuICApO1xuICBnYW1lLnBsYXllci5wbGFjZVNoaXAoXG4gICAgc3VibWFyaW5lLFxuICAgIE51bWJlcihpbnB1dFN1Ym1hcmluZVgudmFsdWUpLFxuICAgIE51bWJlcihpbnB1dFN1Ym1hcmluZVkudmFsdWUpLFxuICAgIGlucHV0U3VibWFyaW5lQXhpcy52YWx1ZVxuICApO1xuICBnYW1lLnBsYXllci5wbGFjZVNoaXAoXG4gICAgZGVzdHJveWVyLFxuICAgIE51bWJlcihpbnB1dERlc3Ryb3llclgudmFsdWUpLFxuICAgIE51bWJlcihpbnB1dERlc3Ryb3llclkudmFsdWUpLFxuICAgIGlucHV0RGVzdG95ZXJBeGlzLnZhbHVlXG4gICk7XG4gIC8vIHNoaXAgcGxhY2VtZW50IGZvciBjb21wdXRlclxuICBnYW1lLmNvbXB1dGVyLnBsYWNlU2hpcChcbiAgICBjYXJyaWVyQ29tcHV0ZXIsXG4gICAgZ2V0Um5kSW50ZWdlcigxMCwgMCksXG4gICAgZ2V0Um5kSW50ZWdlcig0LCAwKSxcbiAgICAnaG9yaXpvbnRhbCdcbiAgKTtcbiAgZ2FtZS5jb21wdXRlci5wbGFjZVNoaXAoXG4gICAgYmF0dGxlc2hpcENvbXB1dGVyLFxuICAgIGdldFJuZEludGVnZXIoNSwgMCksXG4gICAgZ2V0Um5kSW50ZWdlcigxMCwgMCksXG4gICAgJ3ZlcnRpY2FsJ1xuICApO1xuICBnYW1lLmNvbXB1dGVyLnBsYWNlU2hpcChcbiAgICBjcnVpc2VyQ29tcHV0ZXIsXG4gICAgZ2V0Um5kSW50ZWdlcigxMCwgMCksXG4gICAgZ2V0Um5kSW50ZWdlcig2LCAwKSxcbiAgICAnaG9yaXpvbnRhbCdcbiAgKTtcbiAgZ2FtZS5jb21wdXRlci5wbGFjZVNoaXAoXG4gICAgc3VibWFyaW5lQ29tcHV0ZXIsXG4gICAgZ2V0Um5kSW50ZWdlcig2LCAwKSxcbiAgICBnZXRSbmRJbnRlZ2VyKDEwLCAwKSxcbiAgICAndmVydGljYWwnXG4gICk7XG4gIGdhbWUuY29tcHV0ZXIucGxhY2VTaGlwKFxuICAgIGRlc3Ryb3llckNvbXB1dGVyLFxuICAgIGdldFJuZEludGVnZXIoMTAsIDApLFxuICAgIGdldFJuZEludGVnZXIoNywgMCksXG4gICAgJ2hvcml6b250YWwnXG4gICk7XG4gIHBsYXllckdhbWVib2FyZChnYW1lKTtcbiAgY29tcHV0ZXJHYW1lYm9hcmQoZ2FtZSk7XG4gIGF0dGFja0NvbXB1dGVyVUkoZ2FtZSk7XG5cbiAgbWVzc2FnZVR1cm4uaW5uZXJIVE1MID0gJzxwPlBsYXllciBBdHRhY2s8cD4nO1xufVxuQ29uZmlybUdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbmV3R2FtZSgpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gIGZvcm0ucmVzZXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9