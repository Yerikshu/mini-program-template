(function(){/* eslint-disable */ /* 通用方法 */ var __SEND__ = function(pageId, data) { worker.postMessage({ type: 'message', pageId: pageId, data: data }) }; /* 处理 worker */ var onmessage, __PAGE_ID__, navigator, location; var postMessage = function(data) { if (__PAGE_ID__) { __SEND__(__PAGE_ID__, data) } }; /* 处理 sharedWorker */ var onconnect; var __PORTS__ = {}; var MessagePort = function(options) { this.pageId = options.pageId; this._handlers = {}; this.onmessage = null; }; MessagePort.prototype = { postMessage: function(data) { __SEND__(this.pageId, data); }, start: function() {}, _trigger: function(evt) { if (typeof this.onmessage === 'function') { this.onmessage(evt) } if (this._handlers[evt.type]) { this._handlers[evt.type].forEach(function(handler) { handler.call(this, evt); }); } }, addEventListener: function(name, handler) { this._handlers[name] = this._handlers[name] || []; this._handlers[name].push(handler); }, removeEventListener: function(name, handler) { if (this._handlers[name]) { this._handlers[name].splice(this._handlers[name].indexOf(handler), 1); } } }; /* 监听 message */ worker.onMessage(function(res) { if (!res.pageId) { return; } if (res.type === 'connect') { if (typeof onconnect === 'function') { /* sharedWorker */ var port = new MessagePort(res); __PORTS__[res.pageId] = port; onconnect({ports: [port]}); } else { /* worker */ __PAGE_ID__ = res.pageId; navigator = res.navigator; location = res.location; } } else if (res.type === 'message') { if (!__PAGE_ID__) { /* sharedWorker */ var port = __PORTS__[res.pageId]; if (port) { port._trigger({type: 'message', data: res.data}); } } else { /* worker */ if (typeof onmessage === 'function' && res.pageId === __PAGE_ID__) { onmessage({type: 'message', data: res.data}); } } } }); /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

let count = 0;

onconnect = evt => {
    const port = evt.ports[0];

    port.addEventListener('message', evt => {
        count++;
        console.log(`sharedWorker receive message(${count}): `, evt, evt.data);
        port.postMessage({ from: 'sharedWorker', to: evt.data.from, count });
    });

    port.start();
};

/***/ })
/******/ ]);})()