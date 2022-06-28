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
/******/ 		1: 0
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
/******/ 	deferredModules.push([20,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABCNJREFUaAXtWEtoE0EYnlmbksZioVSoolgE36Aggq82aj1IbA8V9OLRi4jgSQTBg56EqhdBDz0IgihSwR5s04LVGrUWBKH4qA8QrIKCRVBqGpp0x/9LOyFuZ3Y3s6unHZjO7P/4/v/7Z3Z2UsaiFlUgqkBUgagCUQXMK8DNXdWeqUxqMePZA4yJdibYWsHYElhSoK80H+Oc9zKRuJtOpr+rEcykoRFJjaQW8fzv04KJE0KwhFs6nLMsZ/yyiC08n96W/uVm61cXCpG2Z8l1dkH0EIHVfgPDjgi9t6p4R+/2zFglfirbwERSmb3rBcsP01aqUwXwlvGfnMV2pJODb7xt9RaWXuWtOTS8r55I9JqTQAxRBwxgeUfUWwQiMmlnz1IiTXp4vxrRNIvl136+nfHW2v+0dYVt5z/QyRSbD2sg4SxvWbFVfTsffDLwZsYrIuzCQTcSdCp9sbh1OJFgS9Exh0ybJBWkiKk1cFdUuav1WvomtOm0SLi2qmZT946BH2U2t+g9GJgsTI3SEb2sTF6azmFeKgkqmBivCGdipS4OffROOUgUTSGDTuvngqnzkXJjIkzwRgniHOM19pBTJp/ddG6Y0l83GhOhbZDTgZrKg2AaE6HjblyXcG7K2m2ic8PU4Um5MRG6BT6XIM5RCNGp+sAVP6Ckc9qXnl0wSzaaifGpRTelHvoYHlHh4lTC6bT/8a5T8p3AKpGsU3dizeIA06wZE1les6b/c/btBCXWoAqNhGllbmazUmvLiXKkI3sCmIw9Uuq9hMZbq2tLV15wdtsrgF89sIDp195pZ0wEQAuq2BW6iruX2hlR8QwMYClUvkWBiMz+juA3fEfTGvIbQX+TBCKCvCxWfY5OMOMtAd8ihpakP0VgIr0t9z/Si3rVX7j5VvAFxnxNZZLARBCutt46Q/t8vLLQxZ+64/Ct1E9lHwqR7g1Dk4LzY6oAbjL4wNfNxq8uFCII1t+c6aNtct1vYNjCx6+9l11oRBCooS5+nF7ed15BYVO09TT0b0D3tNBaEav98Z6NBTEzQteXuBqZ0605trU/OfhyTk+X3uAtrBWRBeH3Wh6+EgV2VJcadETiNelLPjrbSuRhEEFC6MDC3S020Jq5Y0/bF2j+V4MMOhLiHxawhY/0p6l5C4MIoiOZBdSRXDX1+HDH6AV7yi7dxTCHDLo5G9jCB76BW1AQ6Y+E0FFpEClWPN4YjzVf23yRntmTIy9O5r7lcAMoUMc4PTfO0IiOZvy+yERmYSr/K/2VRAiuvOJIEgn/EyJY3iANyYEMRnTchJEoGubyHcCz1Esy0Es/qcdo1IISkUGRkNwekowkIVdNJg297PCBPHCTQYICSRyMzl6OLcmUj9AHJiMTKA9mOldhOWWqhFUy0xwiv6gCUQWiCkQV+L8V+AOE/kcwLNvaswAAAABJRU5ErkJggg=="

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABr0lEQVRYR+2VgTEEQRBF/0WACMgAESACRHBEQAaIgAyQgQwQgZMBESAC6lX135odO1u7e662VG1XXd3uzkz379+/e2Ya2WYjx9cEYGLgXzOwLulC0o6kT0mn8Z83ltffmjpuKAPnERwQtgNJTw1BvgMY64t8vS+AfUnXkXXuqwTgTtI8gu8OBUCmBD5pGVwGwF4C3kfmvMPMtqQrSZepj5wBNrMRew0HR5JuJaV0N+EwAECyn6B8w2DuMfxttAF4kHQYG0DL+0vHcZ0ygODWQpiUAKP+JFcrVc4AqPcSADyi9C6WOjYLBHXdbySd5WVYFQAAo37MMQwKbVRaWiUAZgNloOY8WwfP8VxDZ4r/qgQI9mNMBkx3mu0gDUAd/d/FLMKt6BxYOI5O4jydsRmirCZirgFGLAG/Qigc6tuGTWLzt3dJAKysyyhmENHLCKrN0jZEcL4XYIIkCMyF5bnQKMJSAJwwQunjkpXuAgubycrNWLMuDKQHyAwxeVynayUA6Iifr+WlAPgwWoGRtCwlAFBvEL/Y68tA6sBlcWYIjUC9bBkAvQKVNk8AJgYmBn4AHGhrIRKTDAEAAAAASUVORK5CYII="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCallout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCallout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomCallout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Component_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=template&id=634e4402&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"tab"},[_c('li',{staticClass:"tab-item",class:{selected: _vm.wxPrefix === 0},on:{"click":function($event){_vm.wxPrefix = 0}}},[_vm._v("wx-component 用法")]),_vm._v(" "),_c('li',{staticClass:"tab-item",class:{selected: _vm.wxPrefix === 1},on:{"click":function($event){_vm.wxPrefix = 1}}},[_vm._v("wx- 前缀用法")])]),_vm._v(" "),_c('div',{staticClass:"btns"},[_c('button',{on:{"click":_vm.doPageScroll}},[_vm._v("滚动到 50px 处")])]),_vm._v(" "),_c('Comp',{attrs:{"wxPrefix":_vm.wxPrefix}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/App.vue?vue&type=template&id=634e4402&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Component.vue?vue&type=template&id=39c18c95&
var Componentvue_type_template_id_39c18c95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"className":"cnt2"}},_vm._l((_vm.list),function(item){return _c('div',{key:item,staticClass:"group"},[_c('div',{staticClass:"label"},[_vm._v(_vm._s(item))]),_vm._v(" "),_c('wx-view',{staticClass:"comp"},[(item === 'normal')?_c('div',[_c('div',[_c('div',{staticClass:"inline"},[_vm._v("hello ")]),_vm._v(" "),_c('div',{staticClass:"inline"},[_vm._v("world!")])]),_vm._v(" "),_c('div',[_c('a',{staticClass:"margin-left-10 block",attrs:{"href":"javascript: void(0)"}},[_vm._v("fake jump")])])]):_vm._e(),_vm._v(" "),(item === 'event')?_c('div',[_c('div',{on:{"click":function($event){return _vm.log('root click')},"longpress":function($event){return _vm.log('root longpress')}}},[_c('div',[_vm._v("touchstart -> touchend -> click -> root click")]),_vm._v(" "),_c('button',{on:{"touchstart":function($event){return _vm.log('touchstart')},"touchmove":function($event){return _vm.log('touchmove')},"touchend":function($event){return _vm.log('touchend')},"touchcancel":function($event){return _vm.log('touchcancel')},"click":function($event){return _vm.log('click')},"longpress":function($event){return _vm.log('longpress')}}},[_vm._v("normal event")]),_vm._v(" "),_c('div',[_vm._v("parent touchstart -> parent touchend -> parent click -> click -> root click")]),_vm._v(" "),_c('wx-capture',{on:{"touchstart":function($event){return _vm.log('parent touchstart')},"touchend":function($event){return _vm.log('parent touchend')},"click":function($event){return _vm.log('parent click')},"longpress":function($event){return _vm.log('parent longpress')}}},[_c('button',{on:{"click":_vm.onClick,"longpress":function($event){return _vm.log('longpress')}}},[_vm._v("capture-inner("+_vm._s(_vm.eventCount)+")")])]),_vm._v(" "),_c('div',[_vm._v("parent touchstart -> parent touchend")]),_vm._v(" "),_c('wx-catch',{on:{"touchstart":function($event){return _vm.log('parent touchstart')},"touchend":function($event){return _vm.log('parent touchend')},"click":function($event){return _vm.log('parent click')},"longpress":function($event){return _vm.log('parent longpress')}}},[_c('button',{on:{"click":_vm.onClick,"longpress":function($event){return _vm.log('longpress')}}},[_vm._v("catch-inner1("+_vm._s(_vm.eventCount)+")")])]),_vm._v(" "),_c('div',[_vm._v("click -> parent click")]),_vm._v(" "),_c('wx-catch',{on:{"click":function($event){return _vm.log('parent click')}}},[_c('button',{on:{"click":_vm.onClick,"longpress":function($event){return _vm.log('longpress')}}},[_vm._v("catch-inner2("+_vm._s(_vm.eventCount)+")")])]),_vm._v(" "),_c('wx-catch',[_vm._v(_vm._s(_vm.eventCountComputed))]),_vm._v(" "),_c('div',{staticClass:"event-cnt"},[_c('wx-animation',{class:['event-t', _vm.transition ? 'event-t-s' : 'event-t-e'],on:{"transitionend":function($event){return _vm.log('transition end')}}}),_vm._v(" "),_c('button',{on:{"click":_vm.startTranstion}},[_vm._v("transition")])],1),_vm._v(" "),_c('div',{staticClass:"event-cnt"},[_c('wx-animation',{staticClass:"event-a",on:{"animationstart":function($event){return _vm.log('animation start')},"animationiteration":function($event){return _vm.log('animation iteration')},"animationend":function($event){return _vm.log('animation end')}}})],1)],1)]):(item === 'img')?_c('div',[_c('img',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg","width":"50","height":"50"},on:{"load":function($event){return _vm.log('onImgLoad', $event)}}}),_vm._v(" "),_c('img',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg","mode":"top","width":"50","height":"50"},on:{"load":function($event){return _vm.log('onImgLoad', $event)}}})]):(item === 'input')?_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input.inputText),expression:"input.inputText"}],attrs:{"type":"text","placeholder":"请输入文本内容"},domProps:{"value":(_vm.input.inputText)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.input, "inputText", $event.target.value)},function($event){return _vm.log('onInput', $event.target.value, $event)}],"change":function($event){return _vm.log('onInputChange', $event.target.value, $event)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input.inputNumber),expression:"input.inputNumber"}],attrs:{"type":"number","placeholder":"请输入数字内容","kbone-event-map":{input: function (evt) { return _vm.log('onInput', evt.target.value, evt); }},"data-is-number":"yes"},domProps:{"value":(_vm.input.inputNumber)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.input, "inputNumber", $event.target.value)}}}),_vm._v(" "),_c('input',{attrs:{"type":"radio"}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input.inputRadio),expression:"input.inputRadio"}],attrs:{"type":"radio","name":"radio","value":"radio1"},domProps:{"checked":_vm._q(_vm.input.inputRadio,"radio1")},on:{"input":function($event){return _vm.log('onInput', $event.target.value, $event)},"change":function($event){return _vm.$set(_vm.input, "inputRadio", "radio1")}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input.inputRadio),expression:"input.inputRadio"}],attrs:{"type":"radio","name":"radio","value":"radio2"},domProps:{"checked":_vm._q(_vm.input.inputRadio,"radio2")},on:{"input":function($event){return _vm.log('onInput', $event.target.value, $event)},"change":function($event){return _vm.$set(_vm.input, "inputRadio", "radio2")}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.input.inputCheckbox),expression:"input.inputCheckbox"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.input.inputCheckbox)?_vm._i(_vm.input.inputCheckbox,null)>-1:(_vm.input.inputCheckbox)},on:{"input":function($event){return _vm.log('onInput', $event.target.value, $event)},"change":function($event){var $$a=_vm.input.inputCheckbox,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.input, "inputCheckbox", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.input, "inputCheckbox", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.input, "inputCheckbox", $$c)}}}}),_vm._v(" "),_c('input',{attrs:{"type":"hidden","value":"I am Hidden"}})]):(item === 'textarea')?_c('textarea',{staticClass:"textarea-node",staticStyle:{"height":"30px"},attrs:{"placeholder":"请输入内容","maxlength":"50","auto-height":true,"adjust-position":"","value":"我是 textarea"},on:{"input":_vm.onTextareaInput}}):(item === 'label')?_c('div',[_c('label',[_c('div',[_vm._v("输入框1")]),_vm._v(" "),_c('input',{attrs:{"placeholder":"输入框1"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}})]),_vm._v(" "),_c('label',{attrs:{"for":"input2"}},[_c('div',[_vm._v("输入框2")])]),_vm._v(" "),_c('input',{attrs:{"id":"input2","placeholder":"输入框2"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}}),_vm._v(" "),_c('label',[_c('div',[_vm._v("radio1")]),_vm._v(" "),_c('input',{attrs:{"name":"label-radio","type":"radio","checked":"checked"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}})]),_vm._v(" "),_c('label',{attrs:{"for":"input3"}},[_c('div',[_vm._v("radio2")])]),_vm._v(" "),_c('input',{attrs:{"name":"label-radio","type":"radio","id":"input3"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}}),_vm._v(" "),_c('label',[_c('div',[_vm._v("checkbox1")]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}})]),_vm._v(" "),_c('label',{attrs:{"for":"input4"}},[_c('div',[_vm._v("checkbox2")])]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox","id":"input4"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}}),_vm._v(" "),_c('label',[_c('div',[_vm._v("switch1")]),_vm._v(" "),[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":"switch"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}}):_c('wx-switch',{staticClass:"switch-node",on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}})]],2),_vm._v(" "),_c('label',{attrs:{"for":"switch2"}},[_c('div',[_vm._v("switch2")])]),_vm._v(" "),[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":"switch","id":"switch2"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}}):_c('wx-switch',{attrs:{"id":"switch2"},on:{"change":function($event){return _vm.log('onLabelChange', $event.detail)}}})]],2):(item === 'video')?_c('video',{staticClass:"video",attrs:{"src":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400","show-mute-btn":true,"kbone-attribute-map":{controls: false}},domProps:{"muted":true}},[_c('Inner')],1):(item === 'canvas')?_c('canvas',{ref:"canvas",refInFor:true,staticClass:"canvas",attrs:{"type":"2d","width":"300","height":"200"},on:{"touchstart":function($event){return _vm.onCanvasTouchStart('normal', $event)},"canvastouchstart":function($event){return _vm.onCanvasTouchStart('canvas', $event)},"longtap":function($event){return _vm.log('onCanvasLongTap', $event)}}},[_c('Inner',{staticStyle:{"margin-top":"100px"}})],1):(item === 'select')?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.select.selected),expression:"select.selected"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.select, "selected", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.log('onSelectChange', $event)}]}},[_c('option',{attrs:{"disabled":"","value":""}},[_vm._v("请选择")]),_vm._v(" "),_c('option',[_vm._v("A")]),_vm._v(" "),_c('option',[_vm._v("B")]),_vm._v(" "),_c('option',[_vm._v("C")])]),_vm._v(" "),_c('span',[_vm._v("Selected: "+_vm._s(_vm.select.selected))])]):(item === 'view')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item}},[_vm._v("我是视图")]):(_vm.wxPrefix === 1)?_c('wx-view',[_vm._v("我是视图")]):(_vm.wxPrefix === 2)?_c('view',[_vm._v("我是视图")]):_vm._e(),_vm._v(" "),(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"hidden":true}},[_vm._v("我是 hidden 视图")]):(_vm.wxPrefix === 1)?_c('wx-view',{attrs:{"hidden":true}},[_vm._v("我是 hidden 视图")]):(_vm.wxPrefix === 2)?_c('view',{attrs:{"hidden":true}},[_vm._v("我是 hidden 视图")]):_vm._e()]:(item === 'text')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"selectable":true}},[_vm._v(_vm._s('this is first line\nthis is second line'))]):(_vm.wxPrefix === 1)?_c('wx-text',{attrs:{"selectable":true}},[_vm._v(_vm._s('this is first line\nthis is second line'))]):(_vm.wxPrefix === 2)?_c('text',{attrs:{"selectable":true}},[_vm._v(_vm._s('this is first line\nthis is second line'))]):_vm._e()]:(item === 'match-media')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"min-width":"300","max-width":"600"}},[_c('div',[_vm._v("当页面宽度在 300 ~ 500 px 之间时展示这里")])]):(_vm.wxPrefix === 1)?_c('wx-match-media',{attrs:{"min-width":"300","max-width":"600"}},[_c('div',[_vm._v("当页面宽度在 300 ~ 500 px 之间时展示这里")])]):(_vm.wxPrefix === 2)?_c('match-media',{attrs:{"min-width":"300","max-width":"600"}},[_c('div',[_vm._v("当页面宽度在 300 ~ 500 px 之间时展示这里")])]):_vm._e()]:(item === 'page-container')?[_c('wx-button',{on:{"click":_vm.goPageContainer}},[_vm._v("进入 page-container 页面")])]:(item === 'rich-text')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"nodes":_vm.richText.nodes}}):(_vm.wxPrefix === 1)?_c('wx-rich-text',{attrs:{"nodes":_vm.richText.nodes}}):(_vm.wxPrefix === 2)?_c('rich-text',{attrs:{"nodes":_vm.richText.nodes}}):_vm._e()]:(item === 'swiper')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"indicator-dots":_vm.swiper.indicatorDots,"autoplay":_vm.swiper.autoplay,"interval":5000,"duration":500},on:{"change":function($event){return _vm.log('onSwiperChange', $event.detail)}}},[_c('wx-component',{staticClass:"swiper-item-1",attrs:{"behavior":"swiper-item","item-id":"1"}},[_c('span',[_vm._v("A")])]),_vm._v(" "),_c('wx-component',{staticClass:"swiper-item-2",attrs:{"behavior":"swiper-item","item-id":"2"}},[_c('span',[_vm._v("B")])]),_vm._v(" "),_c('wx-component',{staticClass:"swiper-item-3",attrs:{"behavior":"swiper-item","item-id":"3"}},[_c('span',[_vm._v("C")])]),_vm._v(" "),_c('div',[_vm._v("不会被渲染")])],1):(_vm.wxPrefix === 1)?_c('wx-swiper',{class:item,attrs:{"indicator-dots":_vm.swiper.indicatorDots,"autoplay":_vm.swiper.autoplay,"interval":5000,"duration":500},on:{"change":function($event){return _vm.log('onSwiperChange', $event.detail)}}},[_c('wx-swiper-item',{staticClass:"swiper-item-1",attrs:{"item-id":"1"}},[_c('span',[_vm._v("A")])]),_vm._v(" "),_c('wx-swiper-item',{staticClass:"swiper-item-2",attrs:{"item-id":"2"}},[_c('span',[_vm._v("B")])]),_vm._v(" "),_c('wx-swiper-item',{staticClass:"swiper-item-3",attrs:{"item-id":"3"}},[_c('span',[_vm._v("C")])]),_vm._v(" "),_c('div',[_vm._v("不会被渲染")])],1):(_vm.wxPrefix === 2)?_c('swiper',{class:item,attrs:{"indicator-dots":_vm.swiper.indicatorDots,"autoplay":_vm.swiper.autoplay,"interval":5000,"duration":500},on:{"change":function($event){return _vm.log('onSwiperChange', $event.detail)}}},[_c('swiper-item',{staticClass:"swiper-item-1",attrs:{"item-id":"1"}},[_c('span',[_vm._v("A")])]),_vm._v(" "),_c('swiper-item',{staticClass:"swiper-item-2",attrs:{"item-id":"2"}},[_c('span',[_vm._v("B")])]),_vm._v(" "),_c('swiper-item',{staticClass:"swiper-item-3",attrs:{"item-id":"3"}},[_c('span',[_vm._v("C")])]),_vm._v(" "),_c('div',[_vm._v("不会被渲染")])],1):_vm._e(),_vm._v(" "),_c('div',[_c('wx-switch',{attrs:{"name":"switch-a","checked":_vm.swiper.indicatorDots},on:{"change":function($event){_vm.swiper.indicatorDots = !_vm.swiper.indicatorDots}}}),_vm._v(" 指示点\n        ")],1),_vm._v(" "),_c('div',[_c('wx-switch',{attrs:{"name":"switch-a","checked":_vm.swiper.autoplay},on:{"change":function($event){_vm.swiper.autoplay = !_vm.swiper.autoplay}}}),_vm._v(" 自动播放\n        ")],1)]:(item === 'movable')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"scale-area":true}},[_c('wx-component',{ref:"movable-view",refInFor:true,staticClass:"movable-view",attrs:{"behavior":"movable-view","direction":"all","inertia":true,"out-of-bounds":true,"x":_vm.movable.x,"y":_vm.movable.y,"scale-value":_vm.movable.scaleValue,"scale":true},on:{"change":function($event){return _vm.log('onMovableChange', $event.detail)},"scale":function($event){return _vm.log('onMovableScale', $event.detail)}}},[_c('span',[_vm._v("text")])]),_vm._v(" "),_c('wx-component',{staticClass:"movable-view",attrs:{"behavior":"movable-view","direction":"all","x":0,"y":0}},[_vm._v("plaintext")])],1):(_vm.wxPrefix === 1)?_c('wx-movable-area',{class:item,attrs:{"scale-area":true}},[_c('wx-movable-view',{ref:"movable-view",refInFor:true,staticClass:"movable-view",attrs:{"direction":"all","inertia":true,"out-of-bounds":true,"x":_vm.movable.x,"y":_vm.movable.y,"scale-value":_vm.movable.scaleValue,"scale":true},on:{"change":function($event){return _vm.log('onMovableChange', $event.detail)},"scale":function($event){return _vm.log('onMovableScale', $event.detail)}}},[_c('span',[_vm._v("text")])]),_vm._v(" "),_c('wx-movable-view',{staticClass:"movable-view",attrs:{"direction":"all","x":0,"y":0}},[_vm._v("plaintext")])],1):(_vm.wxPrefix === 2)?_c('movable-area',{class:item,attrs:{"scale-area":true}},[_c('movable-view',{ref:"movable-view",refInFor:true,staticClass:"movable-view",attrs:{"direction":"all","inertia":true,"out-of-bounds":true,"x":_vm.movable.x,"y":_vm.movable.y,"scale-value":_vm.movable.scaleValue,"scale":true},on:{"change":function($event){return _vm.log('onMovableChange', $event.detail)},"scale":function($event){return _vm.log('onMovableScale', $event.detail)}}},[_c('span',[_vm._v("text")])]),_vm._v(" "),_c('movable-view',{staticClass:"movable-view",attrs:{"direction":"all","x":0,"y":0}},[_vm._v("plaintext")])],1):_vm._e(),_vm._v(" "),_c('wx-button',{on:{"click":_vm.onClickMovableMove}},[_vm._v("move to (30px, 30px)")]),_vm._v(" "),_c('wx-button',{on:{"click":_vm.onClickMovableScale}},[_vm._v("scale to 3.0")])]:(item === 'form')?[_c('wx-form',{attrs:{"report-submit":true},on:{"submit":_vm.onFormSubmit,"reset":_vm.onFormReset}},[_c('div',[_c('div',[_vm._v("form 组件")]),_vm._v(" "),_c('input',{attrs:{"type":"text","name":"text-a","value":"text value"}}),_vm._v(" "),_c('input',{attrs:{"type":"text","value":"text value2"}}),_vm._v(" "),_c('input',{attrs:{"type":"number","name":"number-a","value":"123"}}),_vm._v(" "),_c('textarea',{attrs:{"name":"textare-a","value":"textare value"}}),_vm._v(" "),_c('wx-switch',{attrs:{"name":"switch-a","checked":true}}),_vm._v(" "),_c('wx-slider',{attrs:{"name":"slider-a","min":"50","max":"200","show-value":true}}),_vm._v(" "),_c('wx-picker',{attrs:{"name":"picker-a","value":1,"range":_vm.pickerRange}},[_vm._v("点击  选择国家")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"radio","name":"radio-a","value":"radio1"},domProps:{"checked":true}}),_vm._v("radio1")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"radio","name":"radio-a","value":"radio2"}}),_vm._v("radio2")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-a","value":"checkbox1"},domProps:{"checked":true}}),_vm._v("checkbox1")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-a","value":"checkbox2"},domProps:{"checked":true}}),_vm._v("checkbox2")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-a","value":"checkbox3"}}),_vm._v("checkbox3")]),_vm._v(" "),_c('input',{attrs:{"type":"hidden","name":"hidden-a","value":"hidden value"}}),_vm._v(" "),_c('button',{attrs:{"type":"submit"}},[_vm._v("submit（普通标签）")]),_vm._v(" "),_c('button',{attrs:{"type":"reset"}},[_vm._v("reset（普通标签）")]),_vm._v(" "),_c('button',[_vm._v("什么也不做（普通标签）")]),_vm._v(" "),_c('wx-button',{attrs:{"form-type":"submit"}},[_vm._v("submit（内置组件）")]),_vm._v(" "),_c('wx-button',{attrs:{"form-type":"reset"}},[_vm._v("reset（内置组件）")]),_vm._v(" "),_c('wx-button',[_vm._v("什么也不做（内置组件）")])],1)]),_vm._v(" "),_c('form',{on:{"submit":_vm.onFormSubmit,"reset":_vm.onFormReset}},[_c('div',[_c('div',[_vm._v("form 标签")]),_vm._v(" "),_c('input',{attrs:{"type":"text","name":"text-b","value":"text value"}}),_vm._v(" "),_c('input',{attrs:{"type":"text","value":"text value2"}}),_vm._v(" "),_c('input',{attrs:{"type":"number","name":"number-b","value":"123"}}),_vm._v(" "),_c('textarea',{attrs:{"name":"textare-b","value":"textare value"}}),_vm._v(" "),_c('wx-switch',{attrs:{"name":"switch-b","checked":true}}),_vm._v(" "),_c('wx-slider',{attrs:{"name":"slider-b","min":"50","max":"200","show-value":true}}),_vm._v(" "),_c('wx-picker',{attrs:{"name":"picker-a","value":1,"range":_vm.pickerRange}},[_vm._v("点击  选择国家")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"radio","name":"radio-b","value":"radio1"},domProps:{"checked":true}}),_vm._v("radio1")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"radio","name":"radio-b","value":"radio2"}}),_vm._v("radio2")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-b","value":"checkbox1"},domProps:{"checked":true}}),_vm._v("checkbox1")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-b","value":"checkbox2"},domProps:{"checked":true}}),_vm._v("checkbox2")]),_vm._v(" "),_c('div',{staticClass:"ipt-group"},[_c('input',{attrs:{"type":"checkbox","name":"checkbox-b","value":"checkbox3"}}),_vm._v("checkbox3")]),_vm._v(" "),_c('input',{attrs:{"type":"hidden","name":"hidden-b","value":"hidden value"}}),_vm._v(" "),_c('button',{attrs:{"type":"submit"}},[_vm._v("submit（普通标签）")]),_vm._v(" "),_c('button',{attrs:{"type":"reset"}},[_vm._v("reset（普通标签）")]),_vm._v(" "),_c('button',[_vm._v("什么也不做（普通标签）")]),_vm._v(" "),_c('wx-button',{attrs:{"form-type":"submit"}},[_vm._v("submit（内置组件）")]),_vm._v(" "),_c('wx-button',{attrs:{"form-type":"reset"}},[_vm._v("reset（内置组件）")]),_vm._v(" "),_c('wx-button',[_vm._v("什么也不做（内置组件）")])],1)])]:(item === 'button')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"className":"wx-button-custom","open-type":"share"}},[_vm._v("分享")]):(_vm.wxPrefix === 1)?_c('wx-button',{attrs:{"className":"wx-button-custom","open-type":"share"}},[_vm._v("分享")]):(_vm.wxPrefix === 2)?_c('button',{attrs:{"className":"wx-button-custom","open-type":"share"}},[_vm._v("分享")]):_vm._e(),_vm._v(" "),(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"open-type":"getPhoneNumber"},on:{"getphonenumber":function($event){return _vm.log('onGetPhoneNumber', $event.detail)}}},[_vm._v("获取手机号")]):(_vm.wxPrefix === 1)?_c('wx-button',{attrs:{"open-type":"getPhoneNumber"},on:{"getphonenumber":function($event){return _vm.log('onGetPhoneNumber', $event.detail)}}},[_vm._v("获取手机号")]):(_vm.wxPrefix === 2)?_c('button',{attrs:{"open-type":"getPhoneNumber"},on:{"getphonenumber":function($event){return _vm.log('onGetPhoneNumber', $event.detail)}}},[_vm._v("获取手机号")]):_vm._e(),_vm._v(" "),(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"open-type":"chooseAvatar"},on:{"chooseavatar":function($event){return _vm.log('onChooseAvatar', $event.detail)}}},[_vm._v("获取用户头像")]):(_vm.wxPrefix === 1)?_c('wx-button',{attrs:{"open-type":"chooseAvatar"},on:{"chooseavatar":function($event){return _vm.log('onChooseAvatar', $event.detail)}}},[_vm._v("获取用户头像")]):(_vm.wxPrefix === 2)?_c('button',{attrs:{"open-type":"chooseAvatar"},on:{"chooseavatar":function($event){return _vm.log('onChooseAvatar', $event.detail)}}},[_vm._v("获取用户头像")]):_vm._e(),_vm._v(" "),(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item}},[_c('span',[_vm._v("span1")]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',[_vm._v("span2")])]):(_vm.wxPrefix === 1)?_c('wx-button',[_c('span',[_vm._v("span1")]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',[_vm._v("span2")])]):(_vm.wxPrefix === 2)?_c('button',[_c('span',[_vm._v("span1")]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',[_vm._v("span2")])]):_vm._e()]:(item === 'image')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}}):(_vm.wxPrefix === 1)?_c('wx-image',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}}):(_vm.wxPrefix === 2)?_c('image',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}}):_vm._e()]:(item === 'icon')?[(!_vm.wxPrefix)?_c('div',[_c('div',_vm._l((_vm.icon.size),function(subItem){return _c('wx-component',{key:subItem,attrs:{"behavior":item,"type":"success","size":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.color),function(subItem){return _c('wx-component',{key:subItem,attrs:{"behavior":item,"type":"success","size":"40","color":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.type),function(subItem){return _c('wx-component',{key:subItem,attrs:{"behavior":item,"type":subItem,"size":"40"}})}),1)]):(_vm.wxPrefix === 1)?_c('div',[_c('div',_vm._l((_vm.icon.size),function(subItem){return _c('wx-icon',{key:subItem,attrs:{"type":"success","size":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.color),function(subItem){return _c('wx-icon',{key:subItem,attrs:{"type":"success","size":"40","color":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.type),function(subItem){return _c('wx-icon',{key:subItem,attrs:{"type":subItem,"size":"40"}})}),1)]):(_vm.wxPrefix === 2)?_c('div',[_c('div',_vm._l((_vm.icon.size),function(subItem){return _c('icon',{key:subItem,attrs:{"type":"success","size":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.color),function(subItem){return _c('icon',{key:subItem,attrs:{"type":"success","size":"40","color":subItem}})}),1),_vm._v(" "),_c('div',_vm._l((_vm.icon.type),function(subItem){return _c('icon',{key:subItem,attrs:{"type":subItem,"size":"40"}})}),1)]):_vm._e()]:(item === 'progress')?[(!_vm.wxPrefix)?_c('div',[_c('wx-component',{attrs:{"behavior":item,"percent":"20","show-info":true}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"percent":"40","stroke-width":"12"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"percent":"60","color":"pink"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"percent":"80","active":true}})],1):(_vm.wxPrefix === 1)?_c('div',[_c('wx-progress',{attrs:{"percent":"20","show-info":true}}),_vm._v(" "),_c('wx-progress',{attrs:{"percent":"40","stroke-width":"12"}}),_vm._v(" "),_c('wx-progress',{attrs:{"percent":"60","color":"pink"}}),_vm._v(" "),_c('wx-progress',{attrs:{"percent":"80","active":true}})],1):(_vm.wxPrefix === 2)?_c('div',[_c('progress',{attrs:{"percent":"20","show-info":true}}),_vm._v(" "),_c('progress',{attrs:{"percent":"40","stroke-width":"12"}}),_vm._v(" "),_c('progress',{attrs:{"percent":"60","color":"pink"}}),_vm._v(" "),_c('progress',{attrs:{"percent":"80","active":true}})]):_vm._e()]:(item === 'navigator')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"target":"miniProgram","open-type":"exit"}},[_vm._v("退出小程序")]):(_vm.wxPrefix === 1)?_c('wx-navigator',{attrs:{"target":"miniProgram","open-type":"exit"}},[_vm._v("退出小程序")]):(_vm.wxPrefix === 2)?_c('navigator',{attrs:{"target":"miniProgram","open-type":"exit"}},[_vm._v("退出小程序")]):_vm._e()]:(item === 'open-data')?[(!_vm.wxPrefix)?_c('div',[_c('wx-component',{attrs:{"behavior":item,"type":"userNickName"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userAvatarUrl"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userGender"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userGender","lang":"zh_CN"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userCity"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userProvince"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userCountry"}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"userLanguage"}})],1):(_vm.wxPrefix === 1)?_c('div',[_c('wx-open-data',{attrs:{"type":"userNickName"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userAvatarUrl"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userGender"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userGender","lang":"zh_CN"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userCity"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userProvince"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userCountry"}}),_vm._v(" "),_c('wx-open-data',{attrs:{"type":"userLanguage"}})],1):(_vm.wxPrefix === 2)?_c('div',[_c('open-data',{attrs:{"type":"userNickName"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userAvatarUrl"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userGender"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userGender","lang":"zh_CN"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userCity"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userProvince"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userCountry"}}),_vm._v(" "),_c('open-data',{attrs:{"type":"userLanguage"}})],1):_vm._e()]:(item === 'picker')?[(!_vm.wxPrefix)?_c('div',[_c('wx-component',{attrs:{"behavior":item,"value":1,"range":_vm.pickerRange}},[_vm._v("点击  选择国家")]),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"mode":"region"},on:{"change":function($event){return _vm.log('onPickerChange', $event.detail)}}},[_c('span',[_vm._v("点击  ")]),_vm._v(" "),_c('span',[_vm._v("选择城市")])])],1):(_vm.wxPrefix === 1)?_c('div',[_c('wx-picker',{attrs:{"value":1,"range":_vm.pickerRange}},[_vm._v("点击  选择国家")]),_vm._v(" "),_c('wx-picker',{attrs:{"mode":"region"},on:{"change":function($event){return _vm.log('onPickerChange', $event.detail)}}},[_c('span',[_vm._v("点击  ")]),_vm._v(" "),_c('span',[_vm._v("选择城市")])])],1):(_vm.wxPrefix === 2)?_c('div',[_c('picker',{attrs:{"value":1,"range":_vm.pickerRange}},[_vm._v("点击  选择国家")]),_vm._v(" "),_c('picker',{attrs:{"mode":"region"},on:{"change":function($event){return _vm.log('onPickerChange', $event.detail)}}},[_c('span',[_vm._v("点击  ")]),_vm._v(" "),_c('span',[_vm._v("选择城市")])])],1):_vm._e()]:(item === 'picker-view')?[_c('div',[_vm._v(_vm._s(_vm.pickerView.year)+"年"+_vm._s(_vm.pickerView.month)+"月"+_vm._s(_vm.pickerView.day)+"日")]),_vm._v(" "),(!_vm.wxPrefix)?_c('div',[_c('wx-component',{staticStyle:{"width":"100%","height":"300px"},attrs:{"behavior":item,"indicator-style":"height: 50px;","value":_vm.pickerView.value},on:{"change":_vm.onPickerViewChange}},[_c('wx-component',{staticStyle:{"line-height":"50px"},attrs:{"behavior":"picker-view-column"}},_vm._l((_vm.pickerView.years),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"年")])}),0),_vm._v(" "),_c('wx-component',{staticStyle:{"line-height":"50px"},attrs:{"behavior":"picker-view-column"}},_vm._l((_vm.pickerView.months),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"月")])}),0),_vm._v(" "),_c('wx-component',{staticStyle:{"line-height":"50px"},attrs:{"behavior":"picker-view-column"}},_vm._l((_vm.pickerView.days),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"日")])}),0)],1)],1):(_vm.wxPrefix === 1)?_c('div',[_c('wx-picker-view',{staticStyle:{"width":"100%","height":"300px"},attrs:{"indicator-style":"height: 50px;","value":_vm.pickerView.value},on:{"change":_vm.onPickerViewChange}},[_c('wx-picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.years),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"年")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.months),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"月")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.days),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"日")])}),0)],1)],1):(_vm.wxPrefix === 2)?_c('div',[_c('picker-view',{staticStyle:{"width":"100%","height":"300px"},attrs:{"indicator-style":"height: 50px;","value":_vm.pickerView.value},on:{"change":_vm.onPickerViewChange}},[_c('picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.years),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"年")])}),0),_vm._v(" "),_c('picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.months),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"月")])}),0),_vm._v(" "),_c('picker-view-column',{staticStyle:{"line-height":"50px"}},_vm._l((_vm.pickerView.days),function(item){return _c('div',{key:item},[_vm._v(_vm._s(item)+"日")])}),0)],1)],1):_vm._e()]:(item === 'switch')?[(!_vm.wxPrefix)?_c('div',[_c('wx-component',{attrs:{"behavior":item,"type":"switch","checked":true},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}}),_vm._v(" "),_c('wx-component',{attrs:{"behavior":item,"type":"checkbox"},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}})],1):(_vm.wxPrefix === 1)?_c('div',[_c('wx-switch',{attrs:{"type":"switch","checked":true},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}})],1):(_vm.wxPrefix === 2)?_c('div',[_c('switch',{attrs:{"type":"switch","checked":true},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}}),_vm._v(" "),_c('switch',{attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.log('onSwitchChange', $event.detail)}}})]):_vm._e()]:(item === 'slider')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item,"min":"50","max":"200","show-value":true},on:{"change":function($event){return _vm.log('onSliderChange', $event.detail)}}}):(_vm.wxPrefix === 1)?_c('wx-slider',{attrs:{"min":"50","max":"200","show-value":true},on:{"change":function($event){return _vm.log('onSliderChange', $event.detail)}}}):(_vm.wxPrefix === 2)?_c('slider',{attrs:{"min":"50","max":"200","show-value":true},on:{"change":function($event){return _vm.log('onSliderChange', $event.detail)}}}):_vm._e()]:(item === 'map')?[(!_vm.wxPrefix)?_c('wx-component',{ref:"map",refInFor:true,class:item,attrs:{"behavior":item,"longitude":_vm.map.longitude,"latitude":_vm.map.latitude,"scale":_vm.map.scale,"controls":_vm.map.controls,"markers":_vm.map.markers,"polyline":_vm.map.polyline,"show-location":true},on:{"markertap":function($event){return _vm.log('onMapMarkerTap', $event.detail)},"regionchange":function($event){return _vm.log('onMapRegionChange', $event.detail)},"controltap":function($event){return _vm.log('onMapControlTap', $event.detail)}}},[_c('Inner'),_vm._v(" "),_c('CustomCallout')],1):(_vm.wxPrefix === 1)?_c('wx-map',{ref:"map",refInFor:true,class:item,attrs:{"longitude":_vm.map.longitude,"latitude":_vm.map.latitude,"scale":_vm.map.scale,"controls":_vm.map.controls,"markers":_vm.map.markers,"polyline":_vm.map.polyline,"show-location":true},on:{"markertap":function($event){return _vm.log('onMapMarkerTap', $event.detail)},"regionchange":function($event){return _vm.log('onMapRegionChange', $event.detail)},"controltap":function($event){return _vm.log('onMapControlTap', $event.detail)}}},[_c('Inner'),_vm._v(" "),_c('CustomCallout')],1):(_vm.wxPrefix === 2)?_c('map',{ref:"map",refInFor:true,class:item,attrs:{"longitude":_vm.map.longitude,"latitude":_vm.map.latitude,"scale":_vm.map.scale,"controls":_vm.map.controls,"markers":_vm.map.markers,"polyline":_vm.map.polyline,"show-location":true},on:{"markertap":function($event){return _vm.log('onMapMarkerTap', $event.detail)},"regionchange":function($event){return _vm.log('onMapRegionChange', $event.detail)},"controltap":function($event){return _vm.log('onMapControlTap', $event.detail)}}},[_c('Inner'),_vm._v(" "),_c('CustomCallout')],1):_vm._e(),_vm._v(" "),_c('button',{on:{"click":_vm.resetMap}},[_vm._v("reset")])]:(item === 'cover-view')?[(!_vm.wxPrefix)?_c('wx-compoennt',{attrs:{"behavior":item}},[_vm._v("测试 cover-view")]):(_vm.wxPrefix === 1)?_c('wx-cover-view',[_vm._v("测试 cover-view")]):(_vm.wxPrefix === 2)?_c('cover-view',[_vm._v("测试 cover-view")]):_vm._e()]:(item === 'cover-image')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":"cover-view"}},[_c('wx-component',{attrs:{"behavior":item,"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}})],1):(_vm.wxPrefix === 1)?_c('wx-cover-view',[_c('wx-cover-image',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}})],1):(_vm.wxPrefix === 2)?_c('cover-view',[_c('wx-cover-image',{attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"}})],1):_vm._e()]:(item === 'live-player')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"mode":"live","autoplay":true,"src":"rtmp://live.hkstv.hk.lxdns.com/live/hks"},on:{"statechange":function($event){return _vm.log('onLivePlayerStateChange', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 1)?_c('wx-live-player',{class:item,attrs:{"mode":"live","autoplay":true,"src":"rtmp://live.hkstv.hk.lxdns.com/live/hks"},on:{"statechange":function($event){return _vm.log('onLivePlayerStateChange', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 2)?_c('live-player',{class:item,attrs:{"mode":"live","autoplay":true,"src":"rtmp://live.hkstv.hk.lxdns.com/live/hks"},on:{"statechange":function($event){return _vm.log('onLivePlayerStateChange', $event.detail)}}},[_c('Inner')],1):_vm._e()]:(item === 'live-pusher')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"mode":"RTC","autopush":true,"url":"https://domain/push_stream"},on:{"statechange":function($event){return _vm.log('onLivePusherStateChange', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 1)?_c('wx-live-pusher',{class:item,attrs:{"mode":"RTC","autopush":true,"url":"https://domain/push_stream"},on:{"statechange":function($event){return _vm.log('onLivePusherStateChange', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 2)?_c('live-pusher',{class:item,attrs:{"mode":"RTC","autopush":true,"url":"https://domain/push_stream"},on:{"statechange":function($event){return _vm.log('onLivePusherStateChange', $event.detail)}}},[_c('Inner')],1):_vm._e()]:(item === 'editor')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"placeholder":"请输入内容","show-img-size":true,"show-img-toolbar":true,"show-img-resize":true},on:{"statuschange":function($event){return _vm.log('onEditorStatusChange', $event.detail)},"ready":function($event){return _vm.log('onEditorReady', $event.detail)},"input":function($event){return _vm.log('onEditorInput', $event.detail)}}}):(_vm.wxPrefix === 1)?_c('wx-editor',{class:item,attrs:{"placeholder":"请输入内容","show-img-size":true,"show-img-toolbar":true,"show-img-resize":true},on:{"statuschange":function($event){return _vm.log('onEditorStatusChange', $event.detail)},"ready":function($event){return _vm.log('onEditorReady', $event.detail)},"input":function($event){return _vm.log('onEditorInput', $event.detail)}}}):(_vm.wxPrefix === 2)?_c('editor',{class:item,attrs:{"placeholder":"请输入内容","show-img-size":true,"show-img-toolbar":true,"show-img-resize":true},on:{"statuschange":function($event){return _vm.log('onEditorStatusChange', $event.detail)},"ready":function($event){return _vm.log('onEditorReady', $event.detail)},"input":function($event){return _vm.log('onEditorInput', $event.detail)}}}):_vm._e()]:(item === 'camera')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item}},[_c('Inner')],1):(_vm.wxPrefix === 1)?_c('wx-camera',{class:item},[_c('Inner')],1):(_vm.wxPrefix === 2)?_c('camera',{class:item},[_c('Inner')],1):_vm._e()]:(item === 'ad')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdError', $event.detail)}}}):(_vm.wxPrefix === 1)?_c('wx-ad',{class:item,attrs:{"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdError', $event.detail)}}}):(_vm.wxPrefix === 2)?_c('ad',{class:item,attrs:{"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdError', $event.detail)}}}):_vm._e()]:(item === 'ad-custom')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdCustomError', $event.detail)}}}):(_vm.wxPrefix === 1)?_c('wx-ad-custom',{class:item,attrs:{"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdCustomError', $event.detail)}}}):(_vm.wxPrefix === 2)?_c('ad-custom',{class:item,attrs:{"unit-id":"123"},on:{"error":function($event){return _vm.log('onAdCustomError', $event.detail)}}}):_vm._e()]:(item === 'official-account')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item},on:{"error":function($event){return _vm.log('onOfficialAccountError', $event.detail)}}}):(_vm.wxPrefix === 1)?_c('wx-official-account',{class:item,on:{"error":function($event){return _vm.log('onOfficialAccountError', $event.detail)}}}):(_vm.wxPrefix === 2)?_c('official-account',{class:item,on:{"error":function($event){return _vm.log('onOfficialAccountError', $event.detail)}}}):_vm._e()]:(item === 'voip-room')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item},on:{"error":function($event){return _vm.log('onVoipRoomError', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 1)?_c('wx-voip-room',{class:item,on:{"error":function($event){return _vm.log('onVoipRoomError', $event.detail)}}},[_c('Inner')],1):(_vm.wxPrefix === 2)?_c('voip-room',{class:item,on:{"error":function($event){return _vm.log('onVoipRoomError', $event.detail)}}},[_c('Inner')],1):_vm._e()]:(item === 'web-view')?[(!_vm.wxPrefix)?_c('wx-component',{class:item,attrs:{"behavior":item,"src":"https://www.qq.com/"}}):(_vm.wxPrefix === 1)?_c('wx-web-view',{class:item,attrs:{"src":"https://www.qq.com/"}}):(_vm.wxPrefix === 2)?_c('web-view',{class:item,attrs:{"src":"https://www.qq.com/"}}):_vm._e()]:(item === 'scroll-view')?[_c('div',[(!_vm.wxPrefix)?_c('wx-component',{ref:"scroll-view",refInFor:true,class:item + '-y',attrs:{"behavior":item,"scroll-into-view":'y1' + _vm.scrollView.yDest,"scroll-top":_vm.scrollView.scrollTop,"scroll-y":true,"scroll-with-animation":_vm.scrollView.yAnimation},on:{"scroll":_vm.onScrollViewScroll}},[_c('Inner2',{class:("scroll-num-" + (_vm.scrollView.count)),attrs:{"type":"y1"}})],1):(_vm.wxPrefix === 1)?_c('wx-scroll-view',{ref:"scroll-view",refInFor:true,class:item + '-y',attrs:{"scroll-into-view":'y2' + _vm.scrollView.yDest,"scroll-top":_vm.scrollView.scrollTop,"scroll-y":true,"scroll-with-animation":_vm.scrollView.yAnimation},on:{"scroll":_vm.onScrollViewScroll}},[_c('Inner2',{class:("scroll-num-" + (_vm.scrollView.count)),attrs:{"type":"y2"}})],1):(_vm.wxPrefix === 2)?_c('scroll-view',{ref:"scroll-view",refInFor:true,class:item + '-y',attrs:{"scroll-into-view":'y3' + _vm.scrollView.yDest,"scroll-top":_vm.scrollView.scrollTop,"scroll-y":true,"scroll-with-animation":_vm.scrollView.yAnimation},on:{"scroll":_vm.onScrollViewScroll}},[_c('Inner2',{class:("scroll-num-" + (_vm.scrollView.count)),attrs:{"type":"y3"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"scroll-view-btn",on:{"click":_vm.onClickScrollViewYBtn}},[_vm._v("滚动到第三个滑块")]),_vm._v(" "),_c('div',{staticClass:"scroll-view-btn",on:{"click":_vm.onClickScrollViewYTopBtn}},[_vm._v("滚动到 120px 处")]),_vm._v(" "),_c('div',{staticClass:"scroll-view-btn",on:{"click":_vm.onClickScrollViewYAnimBtn}},[_vm._v(_vm._s(_vm.scrollView.yAnimation ? '关闭' : '打开')+"动画")])],1),_vm._v(" "),_c('div',[(!_vm.wxPrefix)?_c('wx-component',{ref:"scroll-view",refInFor:true,class:item + '-x',attrs:{"behavior":item,"scroll-into-view":'x1' + _vm.scrollView.xDest,"scroll-x":true,"scroll-with-animation":true},on:{"scroll":function($event){return _vm.log('onScrollViewScroll', $event.detail)}}},[_c('Inner2',{attrs:{"type":"x1"}})],1):(_vm.wxPrefix === 1)?_c('wx-scroll-view',{ref:"scroll-view",refInFor:true,class:item + '-x',attrs:{"scroll-into-view":'x2' + _vm.scrollView.xDest,"scroll-x":true,"scroll-with-animation":true},on:{"scroll":function($event){return _vm.log('onScrollViewScroll', $event.detail)}}},[_c('Inner2',{attrs:{"type":"x2"}})],1):(_vm.wxPrefix === 2)?_c('scroll-view',{ref:"scroll-view",refInFor:true,class:item + '-x',attrs:{"scroll-into-view":'x3' + _vm.scrollView.xDest,"scroll-x":true,"scroll-with-animation":true},on:{"scroll":function($event){return _vm.log('onScrollViewScroll', $event.detail)}}},[_c('Inner2',{attrs:{"type":"x3"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"scroll-view-btn",on:{"click":_vm.onClickScrollViewXBtn}},[_vm._v("滚动到第二个滑块")])],1)]:(item === 'xxxx')?[(!_vm.wxPrefix)?_c('wx-component',{attrs:{"behavior":item}},[_vm._v("会作为普通标签渲染")]):(_vm.wxPrefix === 1)?_c('wx-xxxx',[_vm._v("会作为普通标签渲染")]):_vm._e()]:(item === 'iframe')?_c('iframe'):(item === 'intersection')?_c('div',[_c('div',[_vm._v(_vm._s(_vm.intersection.appear ? '小球出现' : '小球消失'))]),_vm._v(" "),_c('wx-scroll-view',{staticClass:"intersection-scroll-view",attrs:{"scroll-y":true}},[_c('div',{staticClass:"intersection-scroll-area",style:(_vm.intersection.appear ? 'background: #ccc' : '')},[_c('div',{staticClass:"intersection-ball"})])])],1):_vm._e()],2)],1)}),0)}
var Componentvue_type_template_id_39c18c95_staticRenderFns = []


// CONCATENATED MODULE: ./src/index/Component.vue?vue&type=template&id=39c18c95&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Inner.vue?vue&type=template&id=6ba2fa0c&
var Innervue_type_template_id_6ba2fa0c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"cover-cnt",on:{"click":_vm.onClick}},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',[_vm._v("this is cover")])]),_vm._v(" "),_c('div',{staticClass:"btn-cnt"},[_c('wx-button',{staticClass:"cover-btn",attrs:{"open-type":"share"}},[_vm._v("分享")])],1)])}
var Innervue_type_template_id_6ba2fa0c_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n            img1:\n            "),_c('img',{staticClass:"cover-img",attrs:{"src":"https://i.loli.net/2019/07/27/5d3c141367f2784840.jpg"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n            img2:\n            "),_c('img',{staticClass:"cover-img",attrs:{"src":"https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg"}})])}]


// CONCATENATED MODULE: ./src/index/Inner.vue?vue&type=template&id=6ba2fa0c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Inner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Innervue_type_script_lang_js_ = ({
    name: 'Inner',
    methods: {
        onClick(evt) {
            console.log('onClick');
        }
    }
});
// CONCATENATED MODULE: ./src/index/Inner.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Innervue_type_script_lang_js_ = (Innervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/Inner.vue?vue&type=style&index=0&lang=css&
var Innervue_type_style_index_0_lang_css_ = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index/Inner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_Innervue_type_script_lang_js_,
  Innervue_type_template_id_6ba2fa0c_render,
  Innervue_type_template_id_6ba2fa0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Inner = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Inner2.vue?vue&type=template&id=67136508&
var Inner2vue_type_template_id_67136508_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.type[0] === 'x' ? 'inner2-x' : 'inner2-y'},[_c('div',{staticClass:"block block1",attrs:{"id":_vm.type + 'block1'}}),_vm._v(" "),_c('div',{staticClass:"block block2",attrs:{"id":_vm.type + 'block2'}}),_vm._v(" "),_c('div',{staticClass:"block block3",attrs:{"id":_vm.type + 'block3'}}),_vm._v(" "),_c('div',{staticClass:"block block4",attrs:{"id":_vm.type + 'block4'}}),_vm._v(" "),_c('div',{staticClass:"block block5",attrs:{"id":_vm.type + 'block5'}})])}
var Inner2vue_type_template_id_67136508_staticRenderFns = []


// CONCATENATED MODULE: ./src/index/Inner2.vue?vue&type=template&id=67136508&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Inner2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Inner2vue_type_script_lang_js_ = ({
    name: 'Inner2',
    props: ['type']
});
// CONCATENATED MODULE: ./src/index/Inner2.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Inner2vue_type_script_lang_js_ = (Inner2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/Inner2.vue?vue&type=style&index=0&lang=css&
var Inner2vue_type_style_index_0_lang_css_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/index/Inner2.vue






/* normalize component */

var Inner2_component = Object(componentNormalizer["a" /* default */])(
  index_Inner2vue_type_script_lang_js_,
  Inner2vue_type_template_id_67136508_render,
  Inner2vue_type_template_id_67136508_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Inner2 = (Inner2_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/CustomCallout.vue?vue&type=template&id=82ab9d52&
var CustomCalloutvue_type_template_id_82ab9d52_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"slot":"callout"},slot:"callout"},[_c('wx-cover-view',{staticClass:"custom-callout",attrs:{"marker-id":"2"}},[_c('img',{staticClass:"callout-icon",attrs:{"src":__webpack_require__(6)}}),_c('div',{staticClass:"callout-content"},[_vm._v("callout 1")])]),_vm._v(" "),_c('wx-cover-view',{staticClass:"custom-callout",attrs:{"marker-id":"3"}},[_c('img',{staticClass:"callout-icon",attrs:{"src":__webpack_require__(6)}}),_c('div',{staticClass:"callout-content"},[_vm._v("callout 2")])])],1)}
var CustomCalloutvue_type_template_id_82ab9d52_staticRenderFns = []


// CONCATENATED MODULE: ./src/index/CustomCallout.vue?vue&type=template&id=82ab9d52&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/CustomCallout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CustomCalloutvue_type_script_lang_js_ = ({
    name: 'Inner',
    methods: {
        onVideoControlsClick(evt) {
            console.log('onVideoControlsClick');
        }
    }
});
// CONCATENATED MODULE: ./src/index/CustomCallout.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_CustomCalloutvue_type_script_lang_js_ = (CustomCalloutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/CustomCallout.vue?vue&type=style&index=0&lang=css&
var CustomCalloutvue_type_style_index_0_lang_css_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/index/CustomCallout.vue






/* normalize component */

var CustomCallout_component = Object(componentNormalizer["a" /* default */])(
  index_CustomCalloutvue_type_script_lang_js_,
  CustomCalloutvue_type_template_id_82ab9d52_render,
  CustomCalloutvue_type_template_id_82ab9d52_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomCallout = (CustomCallout_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/Component.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Componentvue_type_script_lang_js_ = ({
  name: 'Component',
  components: {
    Inner: Inner,
    Inner2: Inner2,
    CustomCallout: CustomCallout
  },
  props: ['wxPrefix'],
  data() {
    const date = new Date();
    const years = [];
    const months = [];
    const days = [];

    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }

    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }

    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }

    return {
      list: ['normal', 'event', 'page-container', 'img', 'input', 'textarea', 'select', 'label', 'video', 'canvas', 'view', 'text', 'match-media', 'rich-text', 'swiper', 'movable', 'picker-view', 'form', 'button', 'icon', 'progress', 'open-data', 'navigator', 'picker', 'picker-view', 'switch', 'slider', 'image', 'map', 'cover-view', 'cover-image', 'live-player', 'live-pusher', 'camera', 'editor', 'ad', 'ad-custom', 'official-account', 'voip-room', 'scroll-view',
      // 'web-view',
      'xxxx', 'iframe', 'intersection'],
      eventCount: 0,
      transition: false,
      icon: {
        size: [20, 30, 40, 50, 60, 70],
        color: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
        type: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
      },
      select: {
        selected: 'A'
      },
      input: {
        inputText: '',
        inputNumber: '',
        inputRadio: 'radio2',
        inputCheckbox: true
      },
      pickerRange: ['美国', '中国', '巴西', '日本'],
      map: {
        markers: [{
          id: 1,
          latitude: 23.098994,
          longitude: 113.322520,
          iconPath: __webpack_require__(2),
          callout: {
            content: '文本内容',
            color: '#ff0000',
            fontSize: 14,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#000000',
            bgColor: '#fff',
            padding: 5,
            display: 'ALWAYS',
            textAlign: 'center'
          }
        }, {
          id: 2,
          latitude: 23.097994,
          longitude: 113.323520,
          iconPath: __webpack_require__(2),
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS'
          }
        }, {
          id: 3,
          latitude: 23.096994,
          longitude: 113.324520,
          iconPath: __webpack_require__(2),
          customCallout: {
            anchorY: 10,
            anchorX: 0,
            display: 'ALWAYS'
          }
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color: '#FF0000DD',
          width: 2,
          dottedLine: true
        }],
        controls: [{
          id: 1,
          iconPath: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }],
        longitude: 113.324520,
        latitude: 23.099994,
        scale: 14

      },
      scrollView: {
        yDest: '',
        xDest: '',
        scrollTop: 0,
        yAnimation: true,
        count: 0
      },
      pickerView: {
        years: years,
        year: date.getFullYear(),
        months: months,
        month: 2,
        days: days,
        day: 2,
        value: [9999, 1, 1]
      },
      movable: {
        x: 10,
        y: 10,
        scaleValue: 1.2
      },
      swiper: {
        indicatorDots: true,
        autoplay: false
      },
      richText: {
        nodes: [{
          name: 'div',
          attrs: {
            class: 'rich-text-div',
            style: 'line-height: 60px; color: red;'
          },
          children: [{
            type: 'text',
            text: 'Hello&nbsp;World!'
          }]
        }]
      },
      intersection: {
        appear: false
      }
    };
  },
  computed: {
    eventCountComputed() {
      return `catch-inner3(${this.eventCount})`;
    }
  },
  watch: {
    'input.inputText'(value) {
      console.log('input.inputText', value);
    },
    'input.inputNumber'(value) {
      console.log('input.inputNumber', value);
    },
    'input.inputRadio'(value) {
      console.log('input.inputRadio', value);
    },
    'input.inputCheckbox'(value) {
      console.log('input.inputCheckbox', value);
    }
  },
  created() {
    window.onDealWithNotSupportDom = dom => {
      dom.textContent = `标签 ${dom.tagName.toLowerCase()} 暂不支持`;
    };
  },
  mounted() {
    wx.login({
      success(res) {
        console.log('login success', res);
      }
    });

    const canvas = this.$refs.canvas[0];
    canvas.$$prepare().then(domNode => {
      const context = domNode.getContext('2d');

      context.strokeStyle = '#00ff00';
      context.lineWidth = 5;
      context.rect(0, 0, 200, 200);
      context.stroke();
      context.strokeStyle = '#ff0000';
      context.lineWidth = 2;
      context.moveTo(160, 100);
      context.arc(100, 100, 60, 0, 2 * Math.PI, true);
      context.moveTo(140, 100);
      context.arc(100, 100, 40, 0, Math.PI, false);
      context.moveTo(85, 80);
      context.arc(80, 80, 5, 0, 2 * Math.PI, true);
      context.moveTo(125, 80);
      context.arc(120, 80, 5, 0, 2 * Math.PI, true);
      context.stroke();
    }).catch(console.error);

    canvas.$$getNodesRef().then(nodesRef => {
      nodesRef.boundingClientRect(res => {
        console.log('test $$getNodesRef', res);
      }).exec();
    });

    this.observer = window.$$createIntersectionObserver();
    this.observer.relativeTo('.h5-body >>> .intersection-scroll-view').observe('.h5-body >>> .intersection-ball', res => {
      console.log(res);
      this.intersection.appear = res.intersectionRatio > 0;
    });
  },
  methods: {
    log(text, arg) {
      console.log(text, arg);
    },

    onClick() {
      this.eventCount++;
      console.log('click');
    },

    startTranstion() {
      this.transition = !this.transition;
    },

    onInput(evt) {
      console.log('onInput', evt.target.value, evt);
    },

    onTextareaInput(evt) {
      console.log('onTextareaInput', evt.target.value);
    },

    onClickScrollViewYBtn() {
      const domNodes = this.$refs['scroll-view'] || [];
      if (domNodes[0]) {
        const wxPrefix = this.wxPrefix;
        const prefix = wxPrefix === 1 ? 'y2' : wxPrefix === 2 ? 'y3' : 'y1';
        // 会被 vue 给 diff 掉，得走 setAttribute
        domNodes[0].setAttribute('scroll-into-view', prefix + 'block3');
      }
      this.scrollView.yDest = 'block3';
    },

    onClickScrollViewYTopBtn() {
      const domNodes = this.$refs['scroll-view'] || [];
      if (domNodes[0]) {
        // 会被 vue 给 diff 掉，得走 setAttribute
        domNodes[0].setAttribute('scroll-top', 120);
      }
      this.scrollView.scrollTop = 120;
    },

    onClickScrollViewYAnimBtn() {
      this.scrollView.yAnimation = !this.scrollView.yAnimation;
    },

    onClickScrollViewXBtn() {
      const domNodes = this.$refs['scroll-view'] || [];
      if (domNodes[1]) {
        const wxPrefix = this.wxPrefix;
        const prefix = wxPrefix === 1 ? 'x2' : wxPrefix === 2 ? 'x3' : 'x1';
        domNodes[1].setAttribute('scroll-into-view', prefix + 'block2');
      }
      this.scrollView.xDest = 'block2';
    },

    onFormSubmit(evt) {
      console.log('form submit', evt.$$from, evt.detail);
    },

    onFormReset(evt) {
      console.log('form reset', evt.$$from);
    },

    onPickerViewChange(evt) {
      this.pickerView.year = this.pickerView.years[evt.detail.value[0]];
      this.pickerView.month = this.pickerView.months[evt.detail.value[1]];
      this.pickerView.day = this.pickerView.days[evt.detail.value[2]];
      this.pickerView.value = evt.detail.value;
      console.log('onPickerViewChange', evt.detail);
    },

    onClickMovableMove() {
      const domNodes = this.$refs['movable-view'] || [];
      if (domNodes[0]) {
        domNodes[0].setAttribute('x', 30);
        domNodes[0].setAttribute('y', 30);
      }
      this.movable.x = this.movable.y = 30;
    },

    onClickMovableScale() {
      const domNodes = this.$refs['movable-view'] || [];
      if (domNodes[0]) {
        domNodes[0].setAttribute('scale-value', 3);
      }
      this.movable.scaleValue = 3;
    },

    onCanvasTouchStart(type, evt) {
      console.log(`onCanvasTouchStart[${type}]`, evt);
    },

    resetMap() {
      const domNodes = this.$refs['map'] || [];
      if (domNodes[0]) {
        domNodes[0].setAttribute('longitude', 113.324520);
        domNodes[0].setAttribute('latitude', 23.099994);
        domNodes[0].setAttribute('scale', 14);
      }
      this.map.longitude = 113.324520;
      this.map.latitude = 23.099994;
      this.map.scale = 14;
    },

    onScrollViewScroll(evt) {
      this.log('onScrollViewScroll', evt.detail);
      this.scrollView.count++;
    },

    goPageContainer() {
      window.open('/page-container');
    }
  }
});
// CONCATENATED MODULE: ./src/index/Component.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Componentvue_type_script_lang_js_ = (Componentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/Component.vue?vue&type=style&index=0&lang=css&
var Componentvue_type_style_index_0_lang_css_ = __webpack_require__(14);

// CONCATENATED MODULE: ./src/index/Component.vue






/* normalize component */

var Component_component = Object(componentNormalizer["a" /* default */])(
  index_Componentvue_type_script_lang_js_,
  Componentvue_type_template_id_39c18c95_render,
  Componentvue_type_template_id_39c18c95_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Component = (Component_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    Comp: Component
  },
  data() {
    return {
      wxPrefix: 1 // 0 - wx-component 用法，1 - wx- 前缀用法，2 - 无前缀用法(需要配置 runtime.wxComponent 字段)
    };
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener('scroll', () => {
      console.log(`[window scroll]`, document.documentElement.scrollTop);
    });
  },
  methods: {
    doPageScroll() {
      document.documentElement.scrollTop = 50;
    }
  }
});
// CONCATENATED MODULE: ./src/index/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(15);

// CONCATENATED MODULE: ./src/index/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  index_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./src/index/main.mp.js



function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  return new vue_runtime_esm["a" /* default */]({
    el: '#app',
    render: h => h(App)
  });
}

/***/ })
/******/ ])["default"];}