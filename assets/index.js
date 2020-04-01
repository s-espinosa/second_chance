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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --background: #DAD2D8;\n  --current-shape: #A8201A;\n  --normal-shape: #143642;\n  --used-shape: #0F8B8D;\n  --highlight: #EC9A29;\n}\n\nh1, h2 {\n  font-family: azo-sans-uber, sans-serif;\n  font-weight: 400;\n  font-size: 8em;\n  font-style: normal;\n  color: var(--highlight);\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nh1 {\n  font-size: 8em;\n}\n\nh2 {\n  font-size: 3em;\n  margin-top: 0px;\n}\n\nhr {\n  border-top: 10px solid var(--highlight);\n}\n\nbody {\n  background-color: var(--background);\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.shape-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#admin {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#current {\n  width: 50%;\n}\n\n.small-cell {\n  width: 10px;\n  height: 10px;\n  border-radius: 1 px;\n  padding: 1px;\n  margin: 1px;\n}\n\n.medium-cell {\n  width: 30px;\n  height: 30px;\n  border-radius: 3px;\n  padding: 3px;\n  margin: 3px;\n}\n\n.large-cell {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  padding: 6px;\n  margin: 6px;\n}\n.occupied {\n  border: 1px solid var(--normal-shape);\n  background-color: var(--normal-shape);\n}\n\n.empty {\n  border: 1px solid white;\n}\n\n.used {\n  border: 1px solid var(--used-shape);\n  background-color: var(--used-shape);\n}\n\n.active {\n  border: 1px solid var(--current-shape);\n  background-color: var(--current-shape);\n}\n\n.large-shape {\n  margin: 20px;\n  margin-top: 5%;\n}\n\n.medium-shape {\n  margin: 20px;\n  margin-top: 5%;\n}\n\n.small-shape {\n  margin: 15px;\n  width: 80px;\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/patterns */ "./src/modules/patterns.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);



const starterDiv = document.querySelector('#starter');
const piecesDiv = document.querySelector('#pieces');


if (starterDiv != null) {
  addRandomStarter(_modules_patterns__WEBPACK_IMPORTED_MODULE_0__["patterns"]['startingPatterns'])
} else {
  addNormalShapes()
  addListeners()
}

function addListeners() {
  addSmallPieceListeners()
  addRemover()
}

function addSmallPieceListeners() {
  piecesDiv.onclick = function(event) {
    let target = event.target.closest('.small-shape')
    if (!target) return
    markShapeAsUsed(target)
    let large = createMediumShape(target)
    addShape(large)
  }
}

function addRemover() {
  const currentDiv = document.querySelector('#current');
  currentDiv.onclick = function(event) {
    const mediumShapes = document.getElementsByClassName("medium-shape");
    Array.from(mediumShapes).forEach((shape) => {
      shape.remove()
    })
  }
}

function createMediumShape(target) {
  let medium = target.cloneNode(true)
  medium.classList.remove('small-shape')
  medium.classList.add('medium-shape')
  medium.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      cell.classList.remove('small-cell')
      cell.classList.remove('used')
      cell.classList.add('medium-cell')
      if (cell.classList.contains('occupied')) {
        cell.classList.add('active')
      }
    })
  })
  return medium
}

function addShape(large) {
  const currentDiv = document.querySelector('#current');
  currentDiv.appendChild(large)
}


// ADD STARTING SHAPE
function addRandomStarter(patterns) {
  const startingShape = randomStarter(patterns)
  starterDiv.appendChild(startingShape)
}

function randomStarter(patterns) {
  const startingPattern = shufflePop(patterns)
  let shape = largeShape(startingPattern)
  return shape
}

function shufflePop(array) {
  return array[Math.floor(Math.random() * array.length)]
}


// ADD NORMAL SHAPES
function addNormalShapes() {
  const normalPatterns = _modules_patterns__WEBPACK_IMPORTED_MODULE_0__["patterns"]['normalPatterns']
  const normalShapes = shapeCollection(normalPatterns)
  addShapes(normalShapes)
}

function shapeCollection(shapePatterns) {
  let shapeCollection = []
  shapePatterns.forEach((pattern) => {
    let quantity = pattern['count']
    let cells = pattern['cells']
    for(var i=0; i < quantity; i++){
      let shape = smallShape(pattern)
      shapeCollection.push(shape)
    }
  })
  return shapeCollection
}

function addShapes(shapes) {
  let i = 1
  let shapeRow = emptyShapeRow()
  shapes.forEach((shape) => {
    shapeRow.appendChild(shape)
    if(i % 6 == 0) {
      piecesDiv.appendChild(shapeRow)
      shapeRow = emptyShapeRow()
    }
    i = i + 1
  })
}


// HELPERS
function largeShape(pattern) {
  return shape('large', pattern)
}

function smallShape(pattern) {
  return shape('small', pattern)
}

function shape(size, pattern) {
  let shape = emptyShape(size)
  pattern.cells.forEach((rowPattern) => {
    let rowElement = populatedRow(rowPattern, size)
    shape.appendChild(rowElement)
  })
  return shape
}

function populatedRow(rowPattern, size) {
  let rowElement = emptyRow()
  rowPattern.forEach((cell) => {
    if(cell === 1) {
      rowElement.appendChild(cellElement(`occupied ${size}-cell`))
    } else {
      rowElement.appendChild(cellElement(`empty ${size}-cell`))
    }
  })
  return rowElement
}

function emptyShape(size) {
  let shape = document.createElement('div')
  shape.setAttribute('class', `${size}-shape`)
  return shape
}


// CELL HELPERS
function cellElement(classes) {
  const cell = document.createElement("div");
  cell.setAttribute('class', classes)
  return cell
}

// ROW HELPERS
function emptyRow() {
  const row = document.createElement("div");
  row.setAttribute('class', 'row')
  return row
}

function emptyShapeRow() {
  const row = document.createElement("div");
  row.setAttribute('class', 'shape-row')
  return row
}

function markShapeAsUsed(target) {
  target.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      if (cell.classList.contains('occupied')) {
        cell.classList.add('used')
      }
    })
  })
}


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/modules/patterns.js":
/*!*********************************!*\
  !*** ./src/modules/patterns.js ***!
  \*********************************/
/*! exports provided: patterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patterns", function() { return patterns; });
let normalPatterns = [
  {
    count: 3,
    cells: [
      [1]
    ]
  },
  {
    count: 3,
    cells: [
      [1, 1]
    ]
  },
  {
    count: 2,
    cells: [
      [1, 1],
      [0, 1]
    ]
  },
  {
    count: 2,
    cells: [
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1],
      [1, 1],
      [1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1],
      [1],
      [1],
      [1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1],
      [0, 1],
      [0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1],
      [1, 1],
      [0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1],
      [1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1],
      [0, 1],
      [1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1],
      [1, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 0, 0, 1],
      [1, 1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1],
      [1, 1],
      [1, 1],
      [0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 1],
      [0, 1, 0],
      [1, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1, 0],
      [0, 0, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [1, 0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1],
      [1, 1],
      [1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1, 1],
      [0, 1, 0, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 0, 0],
      [0, 1, 1, 1],
      [1, 1, 0, 0]
    ]
  }
]

let startingPatterns = [
  {
    count: 1,
    cells: [
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [1, 0, 0 ,0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1],
      [0, 1],
      [1, 1],
      [0, 1],
      [1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1],
      [0, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 0],
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 1, 1],
      [1, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [0, 1, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1]
    ]
  },
  {
    count: 1,
    cells: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  }
]

const patterns = {startingPatterns: startingPatterns, normalPatterns: normalPatterns}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXR0ZXJucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxV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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sa0JBQWtCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiAjREFEMkQ4O1xcbiAgLS1jdXJyZW50LXNoYXBlOiAjQTgyMDFBO1xcbiAgLS1ub3JtYWwtc2hhcGU6ICMxNDM2NDI7XFxuICAtLXVzZWQtc2hhcGU6ICMwRjhCOEQ7XFxuICAtLWhpZ2hsaWdodDogI0VDOUEyOTtcXG59XFxuXFxuaDEsIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBhem8tc2Fucy11YmVyLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgY29sb3I6IHZhcigtLWhpZ2hsaWdodCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1oaWdobGlnaHQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGFwZS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2FkbWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5zbWFsbC1jZWxsIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMSBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIG1hcmdpbjogMXB4O1xcbn1cXG5cXG4ubWVkaXVtLWNlbGwge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuLmxhcmdlLWNlbGwge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBtYXJnaW46IDZweDtcXG59XFxuLm9jY3VwaWVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5vcm1hbC1zaGFwZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtc2hhcGUpO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi51c2VkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVzZWQtc2hhcGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXNlZC1zaGFwZSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY3VycmVudC1zaGFwZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJyZW50LXNoYXBlKTtcXG59XFxuXFxuLmxhcmdlLXNoYXBlIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4ubWVkaXVtLXNoYXBlIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG4uc21hbGwtc2hhcGUge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBwYXR0ZXJucyB9IGZyb20gXCIuL21vZHVsZXMvcGF0dGVybnNcIjtcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcblxuY29uc3Qgc3RhcnRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydGVyJyk7XG5jb25zdCBwaWVjZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGllY2VzJyk7XG5cblxuaWYgKHN0YXJ0ZXJEaXYgIT0gbnVsbCkge1xuICBhZGRSYW5kb21TdGFydGVyKHBhdHRlcm5zWydzdGFydGluZ1BhdHRlcm5zJ10pXG59IGVsc2Uge1xuICBhZGROb3JtYWxTaGFwZXMoKVxuICBhZGRMaXN0ZW5lcnMoKVxufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gIGFkZFNtYWxsUGllY2VMaXN0ZW5lcnMoKVxuICBhZGRSZW1vdmVyKClcbn1cblxuZnVuY3Rpb24gYWRkU21hbGxQaWVjZUxpc3RlbmVycygpIHtcbiAgcGllY2VzRGl2Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNtYWxsLXNoYXBlJylcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuXG4gICAgbWFya1NoYXBlQXNVc2VkKHRhcmdldClcbiAgICBsZXQgbGFyZ2UgPSBjcmVhdGVNZWRpdW1TaGFwZSh0YXJnZXQpXG4gICAgYWRkU2hhcGUobGFyZ2UpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUmVtb3ZlcigpIHtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50Jyk7XG4gIGN1cnJlbnREaXYub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbWVkaXVtU2hhcGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1lZGl1bS1zaGFwZVwiKTtcbiAgICBBcnJheS5mcm9tKG1lZGl1bVNoYXBlcykuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgIHNoYXBlLnJlbW92ZSgpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZWRpdW1TaGFwZSh0YXJnZXQpIHtcbiAgbGV0IG1lZGl1bSA9IHRhcmdldC5jbG9uZU5vZGUodHJ1ZSlcbiAgbWVkaXVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NtYWxsLXNoYXBlJylcbiAgbWVkaXVtLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1zaGFwZScpXG4gIG1lZGl1bS5jaGlsZE5vZGVzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jaGlsZE5vZGVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc21hbGwtY2VsbCcpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3VzZWQnKVxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tY2VsbCcpXG4gICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ29jY3VwaWVkJykpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBtZWRpdW1cbn1cblxuZnVuY3Rpb24gYWRkU2hhcGUobGFyZ2UpIHtcbiAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50Jyk7XG4gIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQobGFyZ2UpXG59XG5cblxuLy8gQUREIFNUQVJUSU5HIFNIQVBFXG5mdW5jdGlvbiBhZGRSYW5kb21TdGFydGVyKHBhdHRlcm5zKSB7XG4gIGNvbnN0IHN0YXJ0aW5nU2hhcGUgPSByYW5kb21TdGFydGVyKHBhdHRlcm5zKVxuICBzdGFydGVyRGl2LmFwcGVuZENoaWxkKHN0YXJ0aW5nU2hhcGUpXG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0YXJ0ZXIocGF0dGVybnMpIHtcbiAgY29uc3Qgc3RhcnRpbmdQYXR0ZXJuID0gc2h1ZmZsZVBvcChwYXR0ZXJucylcbiAgbGV0IHNoYXBlID0gbGFyZ2VTaGFwZShzdGFydGluZ1BhdHRlcm4pXG4gIHJldHVybiBzaGFwZVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlUG9wKGFycmF5KSB7XG4gIHJldHVybiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXVxufVxuXG5cbi8vIEFERCBOT1JNQUwgU0hBUEVTXG5mdW5jdGlvbiBhZGROb3JtYWxTaGFwZXMoKSB7XG4gIGNvbnN0IG5vcm1hbFBhdHRlcm5zID0gcGF0dGVybnNbJ25vcm1hbFBhdHRlcm5zJ11cbiAgY29uc3Qgbm9ybWFsU2hhcGVzID0gc2hhcGVDb2xsZWN0aW9uKG5vcm1hbFBhdHRlcm5zKVxuICBhZGRTaGFwZXMobm9ybWFsU2hhcGVzKVxufVxuXG5mdW5jdGlvbiBzaGFwZUNvbGxlY3Rpb24oc2hhcGVQYXR0ZXJucykge1xuICBsZXQgc2hhcGVDb2xsZWN0aW9uID0gW11cbiAgc2hhcGVQYXR0ZXJucy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgbGV0IHF1YW50aXR5ID0gcGF0dGVyblsnY291bnQnXVxuICAgIGxldCBjZWxscyA9IHBhdHRlcm5bJ2NlbGxzJ11cbiAgICBmb3IodmFyIGk9MDsgaSA8IHF1YW50aXR5OyBpKyspe1xuICAgICAgbGV0IHNoYXBlID0gc21hbGxTaGFwZShwYXR0ZXJuKVxuICAgICAgc2hhcGVDb2xsZWN0aW9uLnB1c2goc2hhcGUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gc2hhcGVDb2xsZWN0aW9uXG59XG5cbmZ1bmN0aW9uIGFkZFNoYXBlcyhzaGFwZXMpIHtcbiAgbGV0IGkgPSAxXG4gIGxldCBzaGFwZVJvdyA9IGVtcHR5U2hhcGVSb3coKVxuICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICBzaGFwZVJvdy5hcHBlbmRDaGlsZChzaGFwZSlcbiAgICBpZihpICUgNiA9PSAwKSB7XG4gICAgICBwaWVjZXNEaXYuYXBwZW5kQ2hpbGQoc2hhcGVSb3cpXG4gICAgICBzaGFwZVJvdyA9IGVtcHR5U2hhcGVSb3coKVxuICAgIH1cbiAgICBpID0gaSArIDFcbiAgfSlcbn1cblxuXG4vLyBIRUxQRVJTXG5mdW5jdGlvbiBsYXJnZVNoYXBlKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHNoYXBlKCdsYXJnZScsIHBhdHRlcm4pXG59XG5cbmZ1bmN0aW9uIHNtYWxsU2hhcGUocGF0dGVybikge1xuICByZXR1cm4gc2hhcGUoJ3NtYWxsJywgcGF0dGVybilcbn1cblxuZnVuY3Rpb24gc2hhcGUoc2l6ZSwgcGF0dGVybikge1xuICBsZXQgc2hhcGUgPSBlbXB0eVNoYXBlKHNpemUpXG4gIHBhdHRlcm4uY2VsbHMuZm9yRWFjaCgocm93UGF0dGVybikgPT4ge1xuICAgIGxldCByb3dFbGVtZW50ID0gcG9wdWxhdGVkUm93KHJvd1BhdHRlcm4sIHNpemUpXG4gICAgc2hhcGUuYXBwZW5kQ2hpbGQocm93RWxlbWVudClcbiAgfSlcbiAgcmV0dXJuIHNoYXBlXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlZFJvdyhyb3dQYXR0ZXJuLCBzaXplKSB7XG4gIGxldCByb3dFbGVtZW50ID0gZW1wdHlSb3coKVxuICByb3dQYXR0ZXJuLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZihjZWxsID09PSAxKSB7XG4gICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KGBvY2N1cGllZCAke3NpemV9LWNlbGxgKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudChgZW1wdHkgJHtzaXplfS1jZWxsYCkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcm93RWxlbWVudFxufVxuXG5mdW5jdGlvbiBlbXB0eVNoYXBlKHNpemUpIHtcbiAgbGV0IHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2hhcGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3NpemV9LXNoYXBlYClcbiAgcmV0dXJuIHNoYXBlXG59XG5cblxuLy8gQ0VMTCBIRUxQRVJTXG5mdW5jdGlvbiBjZWxsRWxlbWVudChjbGFzc2VzKSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzKVxuICByZXR1cm4gY2VsbFxufVxuXG4vLyBST1cgSEVMUEVSU1xuZnVuY3Rpb24gZW1wdHlSb3coKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdycpXG4gIHJldHVybiByb3dcbn1cblxuZnVuY3Rpb24gZW1wdHlTaGFwZVJvdygpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2hhcGUtcm93JylcbiAgcmV0dXJuIHJvd1xufVxuXG5mdW5jdGlvbiBtYXJrU2hhcGVBc1VzZWQodGFyZ2V0KSB7XG4gIHRhcmdldC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jaGlsZE5vZGVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQnKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibGV0IG5vcm1hbFBhdHRlcm5zID0gW1xuICB7XG4gICAgY291bnQ6IDMsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAzLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMixcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzFdLFxuICAgICAgWzFdLFxuICAgICAgWzFdLFxuICAgICAgWzFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFsxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAwLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwXVxuICAgIF1cbiAgfVxuXVxuXG5sZXQgc3RhcnRpbmdQYXR0ZXJucyA9IFtcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAwLCAwLCAxXSxcbiAgICAgIFswLCAwLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwICwwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5zID0ge3N0YXJ0aW5nUGF0dGVybnM6IHN0YXJ0aW5nUGF0dGVybnMsIG5vcm1hbFBhdHRlcm5zOiBub3JtYWxQYXR0ZXJuc31cbiJdLCJzb3VyY2VSb290IjoiIn0=