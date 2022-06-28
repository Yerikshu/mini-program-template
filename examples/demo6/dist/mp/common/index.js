module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;window["createApp"] =
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
/******/ 	deferredModules.push([4,1]);
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
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/omio/dist/omi.esm.js
var omi_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/todo/_index.css
var _index = __webpack_require__(1);
var _index_default = /*#__PURE__*/__webpack_require__.n(_index);

// EXTERNAL MODULE: ./src/components/todo-footer/index.css
var todo_footer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/todo-footer/index.js



Object(omi_esm["a" /* define */])('todo-footer', _ => {

  const { data, filter, clear } = _.store;

  const { left, type, done } = data;

  return Object(omi_esm["b" /* h */])(
    'div',
    { 'class': 'footer' },
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'todo-count' },
      Object(omi_esm["b" /* h */])(
        'text',
        { 'class': 'strong' },
        left + ' ',
        'items left'
      ),
      ' '
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'filters' },
      Object(omi_esm["b" /* h */])(
        'div',
        { 'class': 'ib', 'data-filter': 'all', onClick: filter },
        Object(omi_esm["b" /* h */])(
          'text',
          { 'class': type === 'all' ? 'selected' : '' },
          'All'
        )
      ),
      Object(omi_esm["b" /* h */])(
        'div',
        { 'class': 'ib', 'data-filter': 'active', onClick: filter },
        Object(omi_esm["b" /* h */])(
          'text',
          { 'class': type === 'active' ? 'selected' : '' },
          'Active'
        )
      ),
      Object(omi_esm["b" /* h */])(
        'div',
        { 'class': 'ib', 'data-filter': 'done', onClick: filter },
        Object(omi_esm["b" /* h */])(
          'text',
          { 'class': type === 'done' ? 'selected' : '' },
          'Done'
        )
      )
    ),
    done > 0 && Object(omi_esm["b" /* h */])(
      'button',
      { 'class': 'clear-completed', onClick: clear },
      'Clear done'
    )
  );
}, {
  css: typeof wx !== undefined ? '' : css,
  use: ['left', 'type', 'done']
});
// CONCATENATED MODULE: ./src/components/todo/index.js




Object(omi_esm["a" /* define */])('todo-app', _ => {
  const { textInput, data, newTodo, done, toggle, deleteItem } = _.store;
  const { todo, type, inputText } = data;
  return Object(omi_esm["b" /* h */])(
    'div',
    { 'class': 'container' },
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'title' },
      'todos'
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'form' },
      Object(omi_esm["b" /* h */])('input', { 'class': 'new-todo', onInput: textInput, value: inputText, placeholder: '\u4E0B\u4E00\u6B65\u884C\u52A8\u8BA1\u5212\u662F\uFF1F', autofocus: '' }),
      Object(omi_esm["b" /* h */])(
        'button',
        { 'class': 'add-btn', onClick: newTodo },
        '\u786E\u5B9A'
      )
    ),
    Object(omi_esm["b" /* h */])(
      'div',
      { 'class': 'todo-list' },
      todo.map(item => (type === 'all' || type === 'active' && !item.done || type === 'done' && item.done) && Object(omi_esm["b" /* h */])(
        'div',
        { 'class': `todo-item${item.done ? ' done' : ''}` },
        Object(omi_esm["b" /* h */])('div', { 'class': 'toggle', 'data-id': item.id, onClick: toggle }),
        Object(omi_esm["b" /* h */])(
          'text',
          null,
          item.text,
          ' '
        ),
        Object(omi_esm["b" /* h */])('div', { 'class': 'delete', 'data-id': item.id, onClick: deleteItem })
      ))
    ),
    Object(omi_esm["b" /* h */])('todo-footer', null)
  );
}, {
  css: typeof wx !== undefined ? '' : _index_default.a,
  useSelf: ['todo', 'type', 'inputText']
});
// CONCATENATED MODULE: ./src/store.js
let Store = class Store {
  constructor() {
    this.id = 1;
    this.data = {
      todo: [{ text: '学习 Kbone', id: 0, done: false }, { text: '学习 Omi', id: 1, done: false }],
      left: 2,
      type: 'all',
      done: 0,
      inputText: ''
    };

    this.textInput = evt => {
      this.data.inputText = evt.currentTarget.value;
    };

    this.toggle = evt => {
      for (let i = 0, len = this.data.todo.length; i < len; i++) {
        const item = this.data.todo[i];
        if (item.id === Number(evt.currentTarget.dataset.id)) {
          item.done = !item.done;
          this.computeCount();
          break;
        }
      }
    };

    this.computeCount = () => {
      this.data.left = 0;
      this.data.done = 0;
      for (let i = 0, len = this.data.todo.length; i < len; i++) {
        this.data.todo[i].done ? this.data.done++ : this.data.left++;
      }
    };

    this.deleteItem = evt => {
      for (let i = 0, len = this.data.todo.length; i < len; i++) {
        const item = this.data.todo[i];
        if (item.id === Number(evt.currentTarget.dataset.id)) {
          this.data.todo.splice(i, 1);
          this.computeCount();
          break;
        }
      }
    };

    this.newTodo = () => {
      if (this.data.inputText.trim() === '') {
        wx.showToast({
          title: '内容不能为空',
          icon: 'none',
          duration: 2000
        });

        return;
      }

      this.data.todo.unshift({
        text: this.data.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      });
      this.computeCount();
      this.data.inputText = '';
    };

    this.filter = evt => {
      this.data.type = evt.currentTarget.dataset.filter;
    };

    this.clear = () => {
      //因为是自定义事件
      //注意这里的 this 指向

      wx.showModal({
        title: '提示',
        content: '确定清空已完成任务？',
        success: res => {
          if (res.confirm) {
            for (let i = 0, len = this.data.todo.length; i < len; i++) {
              const item = this.data.todo[i];
              if (item.done) {
                this.data.todo.splice(i, 1);
                len--;
                i--;
              }
            }
            this.data.done = 0;
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    };
  }

  gotoAbout() {
    wx.navigateTo({
      url: '../about/index'
    });
  }

  installed() {}

  gotoAbout() {
    wx.navigateTo({
      url: '../about/index'
    });
  }

  clickHandle() {
    if ("undefined" != typeof wx && wx.getSystemInfoSync) {
      wx.navigateTo({
        url: '../log/index?id=1'
      });
    } else {
      location.href = 'log.html';
    }
  }
};


/* harmony default export */ var store = (Store);
// CONCATENATED MODULE: ./src/main.mp.js




function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  Object(omi_esm["c" /* render */])(Object(omi_esm["b" /* h */])('todo-app', null), '#app', new store());
}

/***/ })
/******/ ])["default"];}