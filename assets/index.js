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
exports.push([module.i, ":root {\n  --dark-purple: #331832;\n  --light-purple: #91448E;\n  --dark-blue: #000055;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.shape-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#admin {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#current {\n  width: 50%;\n}\n\n.small-cell {\n  width: 10px;\n  height: 10px;\n  border-radius: 1 px;\n  padding: 1px;\n  margin: 1px;\n}\n\n.large-cell {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  padding: 6px;\n  margin: 6px;\n}\n\n.occupied {\n  border: 1px solid var(--dark-purple);\n  background-color: var(--light-purple);\n}\n\n.empty {\n  border: 1px solid white;\n}\n\n.large-shape {\n  margin: 20px;\n  margin-top: 10%;\n}\n\n.small-shape {\n  margin: 20px;\n  width: 80px;\n}\n\n\n", ""]);
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
  const startingShapes = shapeCollection(normalPatterns)
  let i = 1
  let shapeRow = emptyShapeRow()
  startingShapes.forEach((shape) => {
    shapeRow.appendChild(shape)
    if(i % 6 == 0) {
      piecesDiv.appendChild(shapeRow)
      shapeRow = emptyRow()
    }
    i = i + 1
  })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9wYXR0ZXJucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxV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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLGtCQUFrQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1wdXJwbGU6ICMzMzE4MzI7XFxuICAtLWxpZ2h0LXB1cnBsZTogIzkxNDQ4RTtcXG4gIC0tZGFyay1ibHVlOiAjMDAwMDU1O1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGFwZS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2FkbWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjdXJyZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5zbWFsbC1jZWxsIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMSBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIG1hcmdpbjogMXB4O1xcbn1cXG5cXG4ubGFyZ2UtY2VsbCB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4ub2NjdXBpZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHVycGxlKTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ubGFyZ2Utc2hhcGUge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbn1cXG5cXG4uc21hbGwtc2hhcGUge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBwYXR0ZXJucyB9IGZyb20gXCIuL21vZHVsZXMvcGF0dGVybnNcIjtcbmltcG9ydCBcIi4vbWFpbi5jc3NcIjtcblxuY29uc3Qgc3RhcnRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydGVyJyk7XG5jb25zdCBwaWVjZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGllY2VzJyk7XG5cbmlmIChzdGFydGVyRGl2ICE9IG51bGwpIHtcbiAgYWRkUmFuZG9tU3RhcnRlcihwYXR0ZXJuc1snc3RhcnRpbmdQYXR0ZXJucyddKVxufSBlbHNlIHtcbiAgYWRkTm9ybWFsU2hhcGVzKClcbn1cblxuXG4vLyBBREQgU1RBUlRJTkcgU0hBUEVcbmZ1bmN0aW9uIGFkZFJhbmRvbVN0YXJ0ZXIocGF0dGVybnMpIHtcbiAgY29uc3Qgc3RhcnRpbmdTaGFwZSA9IHJhbmRvbVN0YXJ0ZXIocGF0dGVybnMpXG4gIHN0YXJ0ZXJEaXYuYXBwZW5kQ2hpbGQoc3RhcnRpbmdTaGFwZSlcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RhcnRlcihwYXR0ZXJucykge1xuICBjb25zdCBzdGFydGluZ1BhdHRlcm4gPSBzaHVmZmxlUG9wKHBhdHRlcm5zKVxuICBsZXQgc2hhcGUgPSBsYXJnZVNoYXBlKHN0YXJ0aW5nUGF0dGVybilcbiAgcmV0dXJuIHNoYXBlXG59XG5cbmZ1bmN0aW9uIHNodWZmbGVQb3AoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldXG59XG5cblxuLy8gQUREIE5PUk1BTCBTSEFQRVNcbmZ1bmN0aW9uIGFkZE5vcm1hbFNoYXBlcygpIHtcbiAgY29uc3Qgbm9ybWFsUGF0dGVybnMgPSBwYXR0ZXJuc1snbm9ybWFsUGF0dGVybnMnXVxuICBjb25zdCBzdGFydGluZ1NoYXBlcyA9IHNoYXBlQ29sbGVjdGlvbihub3JtYWxQYXR0ZXJucylcbiAgbGV0IGkgPSAxXG4gIGxldCBzaGFwZVJvdyA9IGVtcHR5U2hhcGVSb3coKVxuICBzdGFydGluZ1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xuICAgIHNoYXBlUm93LmFwcGVuZENoaWxkKHNoYXBlKVxuICAgIGlmKGkgJSA2ID09IDApIHtcbiAgICAgIHBpZWNlc0Rpdi5hcHBlbmRDaGlsZChzaGFwZVJvdylcbiAgICAgIHNoYXBlUm93ID0gZW1wdHlSb3coKVxuICAgIH1cbiAgICBpID0gaSArIDFcbiAgfSlcbiAgLy8gYWRkIHNjcmlwdCB0byBlYWNoIHNoYXBlIHRoYXQgbWFrZXMgaXQgY3VycmVudCBzaGFwZSBhbmQgdHVybnMgaXQgb2ZmIHdoZW4gaXQncyBjbGlja2VkXG59XG5cbmZ1bmN0aW9uIHNoYXBlQ29sbGVjdGlvbihzaGFwZVBhdHRlcm5zKSB7XG4gIGxldCBzaGFwZUNvbGxlY3Rpb24gPSBbXVxuICBzaGFwZVBhdHRlcm5zLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICBsZXQgcXVhbnRpdHkgPSBwYXR0ZXJuWydjb3VudCddXG4gICAgbGV0IGNlbGxzID0gcGF0dGVyblsnY2VsbHMnXVxuICAgIGZvcih2YXIgaT0wOyBpIDwgcXVhbnRpdHk7IGkrKyl7XG4gICAgICBsZXQgc2hhcGUgPSBzbWFsbFNoYXBlKHBhdHRlcm4pXG4gICAgICBzaGFwZUNvbGxlY3Rpb24ucHVzaChzaGFwZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBzaGFwZUNvbGxlY3Rpb25cbn1cblxuLy8gSEVMUEVSU1xuZnVuY3Rpb24gbGFyZ2VTaGFwZShwYXR0ZXJuKSB7XG4gIHJldHVybiBzaGFwZSgnbGFyZ2UnLCBwYXR0ZXJuKVxufVxuXG5mdW5jdGlvbiBzbWFsbFNoYXBlKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHNoYXBlKCdzbWFsbCcsIHBhdHRlcm4pXG59XG5cbmZ1bmN0aW9uIHNoYXBlKHNpemUsIHBhdHRlcm4pIHtcbiAgbGV0IHNoYXBlID0gZW1wdHlTaGFwZShzaXplKVxuICBwYXR0ZXJuLmNlbGxzLmZvckVhY2goKHJvd1BhdHRlcm4pID0+IHtcbiAgICBsZXQgcm93RWxlbWVudCA9IHBvcHVsYXRlZFJvdyhyb3dQYXR0ZXJuLCBzaXplKVxuICAgIHNoYXBlLmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpXG4gIH0pXG4gIHJldHVybiBzaGFwZVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZWRSb3cocm93UGF0dGVybiwgc2l6ZSkge1xuICBsZXQgcm93RWxlbWVudCA9IGVtcHR5Um93KClcbiAgcm93UGF0dGVybi5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYoY2VsbCA9PT0gMSkge1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudChgb2NjdXBpZWQgJHtzaXplfS1jZWxsYCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQoYGVtcHR5ICR7c2l6ZX0tY2VsbGApKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJvd0VsZW1lbnRcbn1cblxuZnVuY3Rpb24gZW1wdHlTaGFwZShzaXplKSB7XG4gIGxldCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNoYXBlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtzaXplfS1zaGFwZWApXG4gIHJldHVybiBzaGFwZVxufVxuXG5cbi8vIENFTEwgSEVMUEVSU1xuZnVuY3Rpb24gY2VsbEVsZW1lbnQoY2xhc3Nlcykge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NlcylcbiAgcmV0dXJuIGNlbGxcbn1cblxuLy8gUk9XIEhFTFBFUlNcbmZ1bmN0aW9uIGVtcHR5Um93KCkge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyb3cnKVxuICByZXR1cm4gcm93XG59XG5cbmZ1bmN0aW9uIGVtcHR5U2hhcGVSb3coKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NoYXBlLXJvdycpXG4gIHJldHVybiByb3dcbn1cblxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImxldCBub3JtYWxQYXR0ZXJucyA9IFtcbiAge1xuICAgIGNvdW50OiAzLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMyxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAyLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxXSxcbiAgICAgIFsxXSxcbiAgICAgIFsxXSxcbiAgICAgIFsxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMV0sXG4gICAgICBbMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFsxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMCwgMV0sXG4gICAgICBbMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxXSxcbiAgICAgIFsxLCAxXSxcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAwLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMF1cbiAgICBdXG4gIH1cbl1cblxubGV0IHN0YXJ0aW5nUGF0dGVybnMgPSBbXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAwLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMCwgMF0sXG4gICAgICBbMSwgMCwgMCAsMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFsxLCAxXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFsxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY291bnQ6IDEsXG4gICAgY2VsbHM6IFtcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNvdW50OiAxLFxuICAgIGNlbGxzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICBjZWxsczogW1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwYXR0ZXJucyA9IHtzdGFydGluZ1BhdHRlcm5zOiBzdGFydGluZ1BhdHRlcm5zLCBub3JtYWxQYXR0ZXJuczogbm9ybWFsUGF0dGVybnN9XG4iXSwic291cmNlUm9vdCI6IiJ9