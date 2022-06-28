module.exports = function(window, document) {var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window.HTMLIFrameElement = function(){};window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/omio/dist/omi.esm.js
var omi_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/game/_index.css
var _index = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/game/index.js



Object(omi_esm["a" /* define */])('my-game', _ => Object(omi_esm["b" /* h */])(
  'div',
  { 'class': 'game' },
  _.store.data.map.map(row => {
    return Object(omi_esm["b" /* h */])(
      'p',
      null,
      row.map(col => {
        if (col) {
          return Object(omi_esm["b" /* h */])('b', { 'class': 's' });
        }
        return Object(omi_esm["b" /* h */])('b', null);
      })
    );
  })
), {
  use: ['map'],
  css: "undefined" != typeof wx && wx.getSystemInfoSync ? '' : Object(omi_esm["d" /* rpx */])(__webpack_require__(1))
});
// EXTERNAL MODULE: ./src/components/index/_index.css
var index_index = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/index/index.js




Object(omi_esm["a" /* define */])('my-index', ({ store }) => Object(omi_esm["b" /* h */])(
  'div',
  { 'class': 'container' },
  Object(omi_esm["b" /* h */])(
    'h1',
    null,
    'OMI SNAKE'
  ),
  Object(omi_esm["b" /* h */])('my-game', null),
  Object(omi_esm["b" /* h */])(
    'div',
    { 'class': 'ctrl' },
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn cm-btn cm-btn-dir up', onClick: store.turnUp },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])('em', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        'Up'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn cm-btn cm-btn-dir down', onClick: store.turnDown },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])('em', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        'Down'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn cm-btn cm-btn-dir left', onClick: store.turnLeft },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])('em', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        'Left'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn cm-btn cm-btn-dir right', onClick: store.turnRight },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])('em', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        'Right'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn cm-btn space', onClick: store.toggleSpeed },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        '\u52A0\u901F/\u51CF\u901F'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn reset small', onClick: store.reset },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        'Reset'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'btn pp small', onClick: store.pauseOrPlay },
      Object(omi_esm["b" /* h */])('i', null),
      Object(omi_esm["b" /* h */])(
        'span',
        null,
        store.data.paused ? 'Play' : 'Pause'
      )
    )
  )
), {
  useSelf: ['paused'],
  css: "undefined" != typeof wx && wx.getSystemInfoSync ? '' : Object(omi_esm["d" /* rpx */])(__webpack_require__(2))
});
// CONCATENATED MODULE: ./src/models/snake.js
let Snake = class Snake {
  constructor() {
    this.body = [3, 1, 2, 1, 1, 1];
    this.dir = 'right';
  }

  move(eating) {
    const b = this.body;
    if (!eating) {
      b.pop();
      b.pop();
    }

    switch (this.dir) {
      case 'up':
        b.unshift(b[0], b[1] - 1);
        break;
      case 'right':
        b.unshift(b[0] + 1, b[1]);
        break;
      case 'down':
        b.unshift(b[0], b[1] + 1);
        break;
      case 'left':
        b.unshift(b[0] - 1, b[1]);
        break;
    }
  }

  turnUp() {
    if (this.dir !== 'down') this.dir = 'up';
  }
  turnRight() {
    if (this.dir !== 'left') this.dir = 'right';
  }
  turnDown() {
    if (this.dir !== 'up') this.dir = 'down';
  }
  turnLeft() {
    if (this.dir !== 'right') this.dir = 'left';
  }
};


/* harmony default export */ var snake = (Snake);
// CONCATENATED MODULE: ./src/models/game.js


let game_Game = class Game {
  constructor() {
    this.map = [];
    this.size = 16;
    this.loop = null;
    this.interval = 500;
    this.paused = false;
    this._preDate = Date.now();
    this.init();
  }

  init() {

    this.snake = new snake();

    for (let i = 0; i < this.size; i++) {
      const row = [];
      for (let j = 0; j < this.size; j++) {
        row.push(0);
      }
      this.map.push(row);
    }
  }

  tick() {

    this.makeFood();
    const eating = this.eat();
    this.snake.move(eating);
    this.mark();
  }

  mark() {
    const map = this.map;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        map[i][j] = 0;
      }
    }

    for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
      this.snake.body[k + 1] %= this.size;
      this.snake.body[k] %= this.size;

      if (this.snake.body[k + 1] < 0) this.snake.body[k + 1] += this.size;
      if (this.snake.body[k] < 0) this.snake.body[k] += this.size;
      map[this.snake.body[k + 1]][this.snake.body[k]] = 1;
    }
    if (this.food) {
      map[this.food[1]][this.food[0]] = 1;
    }
  }

  start() {
    this.loop = setInterval(() => {
      if (Date.now() - this._preDate > this.interval) {
        this._preDate = Date.now();
        if (!this.paused) {
          this.tick();
        }
      }
    }, 16);
  }

  stop() {
    clearInterval(this.loop);
  }

  pause() {
    this.paused = true;
  }

  play() {
    this.paused = false;
  }

  reset() {
    this.paused = false;
    this.interval = 500;
    this.snake.body = [3, 1, 2, 1, 1, 1];
    this.food = null;
    this.snake.dir = 'right';
  }

  toggleSpeed() {
    this.interval === 500 ? this.interval = 150 : this.interval = 500;
  }

  makeFood() {
    if (!this.food) {
      this.food = [this._rd(0, this.size - 1), this._rd(0, this.size - 1)];
      for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
        if (this.snake.body[k + 1] === this.food[1] && this.snake.body[k] === this.food[0]) {
          this.food = null;
          this.makeFood();
          break;
        }
      }
    }
  }

  eat() {
    for (let k = 0, len = this.snake.body.length; k < len; k += 2) {
      if (this.snake.body[k + 1] === this.food[1] && this.snake.body[k] === this.food[0]) {
        this.food = null;
        return true;
      }
    }
  }

  _rd(from, to) {
    return from + Math.floor(Math.random() * (to + 1));
  }
};


/* harmony default export */ var game = (game_Game);
// CONCATENATED MODULE: ./src/stores/index.js


const stores_game = new game();
const { snake: stores_snake, map } = stores_game;

stores_game.start();

let Store = class Store {
  constructor() {
    this.data = {
      map,
      paused: false
    };

    this.pauseOrPlay = () => {
      if (stores_game.paused) {
        stores_game.play();
        this.data.paused = false;
      } else {
        stores_game.pause();
        this.data.paused = true;
      }
    };
  }

  turnUp() {
    stores_snake.turnUp();
  }
  turnRight() {
    stores_snake.turnRight();
  }
  turnDown() {
    stores_snake.turnDown();
  }
  turnLeft() {
    stores_snake.turnLeft();
  }

  reset() {
    stores_game.reset();
  }
  toggleSpeed() {
    stores_game.toggleSpeed();
  }
};


/* harmony default export */ var stores = (new Store());
// EXTERNAL MODULE: ./src/assets/index.css
var assets = __webpack_require__(4);

// CONCATENATED MODULE: ./src/main.mp.js





function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  Object(omi_esm["c" /* render */])(Object(omi_esm["b" /* h */])('my-index', null), '#app', stores);
}

//web
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })
/******/ ])["default"];}