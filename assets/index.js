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
exports.push([module.i, ":root {\n  --background: #DAD2D8;\n  --current-shape: #A8201A;\n  --normal-shape: #143642;\n  --used-shape: #0F8B8D;\n  --highlight: #EC9A29;\n}\n\nh1, h2 {\n  font-family: azo-sans-uber, sans-serif;\n  font-weight: 400;\n  font-size: 8em;\n  font-style: normal;\n  color: var(--highlight);\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nh1 {\n  font-size: 8em;\n}\n\nh2 {\n  font-size: 3em;\n  margin-top: 0px;\n}\n\nbody {\n  background-color: var(--background);\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.shape-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#admin {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#current {\n  width: 50%;\n}\n\n.small-cell {\n  width: 10px;\n  height: 10px;\n  border-radius: 1 px;\n  padding: 1px;\n  margin: 1px;\n}\n\n.large-cell {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  padding: 6px;\n  margin: 6px;\n}\n\n.occupied {\n  border: 1px solid var(--normal-shape);\n  background-color: var(--normal-shape);\n}\n\n.empty {\n  border: 1px solid white;\n}\n\n.used {\n  border: 1px solid var(--used-shape);\n  background-color: var(--used-shape);\n}\n\n.active {\n  border: 1px solid var(--used-shape);\n  background-color: var(--current-shape);\n}\n\n.large-shape {\n  margin: 20px;\n  margin-top: 5%;\n}\n\n.small-shape {\n  margin: 15px;\n  width: 80px;\n}\n\n\n", ""]);
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
}

piecesDiv.onclick = function(event) {
  let target = event.target.closest('.small-shape')
  if (!target) return
  target.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      if (cell.classList.contains('occupied')) {
        cell.classList.add('used')
      }
    })
  })
  let large = target.cloneNode(true)
  large.classList.remove('small-shape')
  large.classList.add('large-shape')
  large.childNodes.forEach((row) => {
    row.childNodes.forEach((cell) => {
      cell.classList.remove('small-cell')
      cell.classList.remove('used')
      cell.classList.add('large-cell')
      if (cell.classList.contains('occupied')) {
        cell.classList.add('active')
      }
    })
  })

  const currentDiv = document.querySelector('#current');
  console.log(currentDiv.children[0])
  if (currentDiv.children[1]) {
    currentDiv.replaceChild(large, currentDiv.children[1])
  } else {
    currentDiv.appendChild(large)
  }
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
  // add script to each shape that makes it current shape and turns it off when it's clicked
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXR0ZXJucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxrQkFBa0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICNEQUQyRDg7XFxuICAtLWN1cnJlbnQtc2hhcGU6ICNBODIwMUE7XFxuICAtLW5vcm1hbC1zaGFwZTogIzE0MzY0MjtcXG4gIC0tdXNlZC1zaGFwZTogIzBGOEI4RDtcXG4gIC0taGlnaGxpZ2h0OiAjRUM5QTI5O1xcbn1cXG5cXG5oMSwgaDIge1xcbiAgZm9udC1mYW1pbHk6IGF6by1zYW5zLXViZXIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBjb2xvcjogdmFyKC0taGlnaGxpZ2h0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA4ZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGFwZS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2FkbWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5zbWFsbC1jZWxsIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMSBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIG1hcmdpbjogMXB4O1xcbn1cXG5cXG4ubGFyZ2UtY2VsbCB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4ub2NjdXBpZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbm9ybWFsLXNoYXBlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1zaGFwZSk7XFxufVxcblxcbi5lbXB0eSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnVzZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdXNlZC1zaGFwZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11c2VkLXNoYXBlKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11c2VkLXNoYXBlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnJlbnQtc2hhcGUpO1xcbn1cXG5cXG4ubGFyZ2Utc2hhcGUge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNSU7XFxufVxcblxcbi5zbWFsbC1zaGFwZSB7XFxuICBtYXJnaW46IDE1cHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IHBhdHRlcm5zIH0gZnJvbSBcIi4vbW9kdWxlcy9wYXR0ZXJuc1wiO1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5jb25zdCBzdGFydGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0ZXInKTtcbmNvbnN0IHBpZWNlc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaWVjZXMnKTtcblxuXG5pZiAoc3RhcnRlckRpdiAhPSBudWxsKSB7XG4gIGFkZFJhbmRvbVN0YXJ0ZXIocGF0dGVybnNbJ3N0YXJ0aW5nUGF0dGVybnMnXSlcbn0gZWxzZSB7XG4gIGFkZE5vcm1hbFNoYXBlcygpXG59XG5cbnBpZWNlc0Rpdi5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc21hbGwtc2hhcGUnKVxuICBpZiAoIXRhcmdldCkgcmV0dXJuXG4gIHRhcmdldC5jaGlsZE5vZGVzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIHJvdy5jaGlsZE5vZGVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnb2NjdXBpZWQnKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIGxldCBsYXJnZSA9IHRhcmdldC5jbG9uZU5vZGUodHJ1ZSlcbiAgbGFyZ2UuY2xhc3NMaXN0LnJlbW92ZSgnc21hbGwtc2hhcGUnKVxuICBsYXJnZS5jbGFzc0xpc3QuYWRkKCdsYXJnZS1zaGFwZScpXG4gIGxhcmdlLmNoaWxkTm9kZXMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgcm93LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzbWFsbC1jZWxsJylcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndXNlZCcpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2xhcmdlLWNlbGwnKVxuICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvY2N1cGllZCcpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudCcpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50RGl2LmNoaWxkcmVuWzBdKVxuICBpZiAoY3VycmVudERpdi5jaGlsZHJlblsxXSkge1xuICAgIGN1cnJlbnREaXYucmVwbGFjZUNoaWxkKGxhcmdlLCBjdXJyZW50RGl2LmNoaWxkcmVuWzFdKVxuICB9IGVsc2Uge1xuICAgIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQobGFyZ2UpXG4gIH1cbn1cblxuXG4vLyBBREQgU1RBUlRJTkcgU0hBUEVcbmZ1bmN0aW9uIGFkZFJhbmRvbVN0YXJ0ZXIocGF0dGVybnMpIHtcbiAgY29uc3Qgc3RhcnRpbmdTaGFwZSA9IHJhbmRvbVN0YXJ0ZXIocGF0dGVybnMpXG4gIHN0YXJ0ZXJEaXYuYXBwZW5kQ2hpbGQoc3RhcnRpbmdTaGFwZSlcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RhcnRlcihwYXR0ZXJucykge1xuICBjb25zdCBzdGFydGluZ1BhdHRlcm4gPSBzaHVmZmxlUG9wKHBhdHRlcm5zKVxuICBsZXQgc2hhcGUgPSBsYXJnZVNoYXBlKHN0YXJ0aW5nUGF0dGVybilcbiAgcmV0dXJuIHNoYXBlXG59XG5cbmZ1bmN0aW9uIHNodWZmbGVQb3AoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldXG59XG5cblxuLy8gQUREIE5PUk1BTCBTSEFQRVNcbmZ1bmN0aW9uIGFkZE5vcm1hbFNoYXBlcygpIHtcbiAgY29uc3Qgbm9ybWFsUGF0dGVybnMgPSBwYXR0ZXJuc1snbm9ybWFsUGF0dGVybnMnXVxuICBjb25zdCBub3JtYWxTaGFwZXMgPSBzaGFwZUNvbGxlY3Rpb24obm9ybWFsUGF0dGVybnMpXG4gIGFkZFNoYXBlcyhub3JtYWxTaGFwZXMpXG4gIC8vIGFkZCBzY3JpcHQgdG8gZWFjaCBzaGFwZSB0aGF0IG1ha2VzIGl0IGN1cnJlbnQgc2hhcGUgYW5kIHR1cm5zIGl0IG9mZiB3aGVuIGl0J3MgY2xpY2tlZFxufVxuXG5mdW5jdGlvbiBzaGFwZUNvbGxlY3Rpb24oc2hhcGVQYXR0ZXJucykge1xuICBsZXQgc2hhcGVDb2xsZWN0aW9uID0gW11cbiAgc2hhcGVQYXR0ZXJucy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgbGV0IHF1YW50aXR5ID0gcGF0dGVyblsnY291bnQnXVxuICAgIGxldCBjZWxscyA9IHBhdHRlcm5bJ2NlbGxzJ11cbiAgICBmb3IodmFyIGk9MDsgaSA8IHF1YW50aXR5OyBpKyspe1xuICAgICAgbGV0IHNoYXBlID0gc21hbGxTaGFwZShwYXR0ZXJuKVxuICAgICAgc2hhcGVDb2xsZWN0aW9uLnB1c2goc2hhcGUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gc2hhcGVDb2xsZWN0aW9uXG59XG5cbmZ1bmN0aW9uIGFkZFNoYXBlcyhzaGFwZXMpIHtcbiAgbGV0IGkgPSAxXG4gIGxldCBzaGFwZVJvdyA9IGVtcHR5U2hhcGVSb3coKVxuICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICBzaGFwZVJvdy5hcHBlbmRDaGlsZChzaGFwZSlcbiAgICBpZihpICUgNiA9PSAwKSB7XG4gICAgICBwaWVjZXNEaXYuYXBwZW5kQ2hpbGQoc2hhcGVSb3cpXG4gICAgICBzaGFwZVJvdyA9IGVtcHR5U2hhcGVSb3coKVxuICAgIH1cbiAgICBpID0gaSArIDFcbiAgfSlcbn1cblxuXG4vLyBIRUxQRVJTXG5mdW5jdGlvbiBsYXJnZVNoYXBlKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHNoYXBlKCdsYXJnZScsIHBhdHRlcm4pXG59XG5cbmZ1bmN0aW9uIHNtYWxsU2hhcGUocGF0dGVybikge1xuICByZXR1cm4gc2hhcGUoJ3NtYWxsJywgcGF0dGVybilcbn1cblxuZnVuY3Rpb24gc2hhcGUoc2l6ZSwgcGF0dGVybikge1xuICBsZXQgc2hhcGUgPSBlbXB0eVNoYXBlKHNpemUpXG4gIHBhdHRlcm4uY2VsbHMuZm9yRWFjaCgocm93UGF0dGVybikgPT4ge1xuICAgIGxldCByb3dFbGVtZW50ID0gcG9wdWxhdGVkUm93KHJvd1BhdHRlcm4sIHNpemUpXG4gICAgc2hhcGUuYXBwZW5kQ2hpbGQocm93RWxlbWVudClcbiAgfSlcbiAgcmV0dXJuIHNoYXBlXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlZFJvdyhyb3dQYXR0ZXJuLCBzaXplKSB7XG4gIGxldCByb3dFbGVtZW50ID0gZW1wdHlSb3coKVxuICByb3dQYXR0ZXJuLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZihjZWxsID09PSAxKSB7XG4gICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KGBvY2N1cGllZCAke3NpemV9LWNlbGxgKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudChgZW1wdHkgJHtzaXplfS1jZWxsYCkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcm93RWxlbWVudFxufVxuXG5mdW5jdGlvbiBlbXB0eVNoYXBlKHNpemUpIHtcbiAgbGV0IHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2hhcGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke3NpemV9LXNoYXBlYClcbiAgcmV0dXJuIHNoYXBlXG59XG5cblxuLy8gQ0VMTCBIRUxQRVJTXG5mdW5jdGlvbiBjZWxsRWxlbWVudChjbGFzc2VzKSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzKVxuICByZXR1cm4gY2VsbFxufVxuXG4vLyBST1cgSEVMUEVSU1xuZnVuY3Rpb24gZW1wdHlSb3coKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdycpXG4gIHJldHVybiByb3dcbn1cblxuZnVuY3Rpb24gZW1wdHlTaGFwZVJvdygpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2hhcGUtcm93JylcbiAgcmV0dXJuIHJvd1xufVxuXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibGV0IG5vcm1hbFBhdHRlcm5zID0gW1xuICB7XG4gICAgY291bnQ6IDMsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAzLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMixcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzFdLFxuICAgICAgWzFdLFxuICAgICAgWzFdLFxuICAgICAgWzFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFsxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMV0sXG4gICAgICBbMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAwLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwXVxuICAgIF1cbiAgfVxuXVxuXG5sZXQgc3RhcnRpbmdQYXR0ZXJucyA9IFtcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAwLCAwLCAxXSxcbiAgICAgIFswLCAwLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwICwwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHBhdHRlcm5zID0ge3N0YXJ0aW5nUGF0dGVybnM6IHN0YXJ0aW5nUGF0dGVybnMsIG5vcm1hbFBhdHRlcm5zOiBub3JtYWxQYXR0ZXJuc31cbiJdLCJzb3VyY2VSb290IjoiIn0=