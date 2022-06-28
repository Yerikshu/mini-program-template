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
/******/ 	deferredModules.push([9,1]);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=template&id=7884caa2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"cnt"},[_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-match-media")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-match-media',{attrs:{"min-width":"300","max-width":"500"}},[_c('div',[_vm._v("当页面宽度在 300 ~ 500 px 之间时展示这里")])]),_vm._v(" "),_c('wx-match-media',{attrs:{"min-height":"300","orientation":"landscape"}},[_c('div',[_vm._v("当页面高度不小于 200 px 且屏幕方向为横向时展示这里")])])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-movable-area/wx-movable-view")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt wx-movable-cnt"},[_c('wx-movable-area',{staticClass:"wx-movable-area"},[_c('wx-movable-view',{ref:"wx-movable-view",staticClass:"wx-movable-view",attrs:{"inertia":_vm.wxMovableView.inertia,"out-of-bounds":_vm.wxMovableView.outOfBounds,"disabled":_vm.wxMovableView.disabled,"animation":_vm.wxMovableView.animation,"scale-area":_vm.wxMovableView.scaleArea,"damping":_vm.wxMovableView.damping,"friction":_vm.wxMovableView.friction,"scale":_vm.wxMovableView.scale,"scale-min":_vm.wxMovableView.scaleMin,"scale-max":_vm.wxMovableView.scaleMax,"direction":"all"},on:{"change":function($event){return _vm.log('[wx-movable-view change]', $event.detail)},"scale":function($event){return _vm.log('[wx-movable-view scale]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view vtouchmove]', $event)}}},[_vm._v("text")]),_vm._v(" "),_vm._l((_vm.wxMovableView.count),function(item){return _c('wx-movable-view',{key:item,staticClass:"wx-movable-view",attrs:{"inertia":true,"out-of-bounds":true,"animation":true,"direction":"all"},on:{"change":function($event){return _vm.log('[wx-movable-view change]', $event.detail)},"scale":function($event){return _vm.log('[wx-movable-view scale]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view vtouchmove]', $event)}}},[_vm._v("text")])}),_vm._v(" "),(_vm.wxMovableView.addDirection)?[_c('wx-movable-view',{staticClass:"wx-movable-view",attrs:{"inertia":true,"out-of-bounds":true,"animation":true,"direction":"all"},on:{"change":function($event){return _vm.log('[wx-movable-view all change]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view all htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view all vtouchmove]', $event)}}},[_vm._v("all")]),_vm._v(" "),_c('wx-movable-view',{staticClass:"wx-movable-view",attrs:{"x":"250","inertia":true,"out-of-bounds":true,"animation":true,"direction":"vertical"},on:{"change":function($event){return _vm.log('[wx-movable-view vertical change]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view vertical htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view vertical vtouchmove]', $event)}}},[_vm._v("v")]),_vm._v(" "),_c('wx-movable-view',{staticClass:"wx-movable-view",attrs:{"y":"250","inertia":true,"out-of-bounds":true,"animation":true,"direction":"horizontal"},on:{"change":function($event){return _vm.log('[wx-movable-view horizontal change]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view horizontal htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view horizontal vtouchmove]', $event)}}},[_vm._v("h")]),_vm._v(" "),_c('wx-movable-view',{staticClass:"wx-movable-view",attrs:{"x":"250","y":"250","inertia":true,"out-of-bounds":true,"animation":true,"direction":"none"},on:{"change":function($event){return _vm.log('[wx-movable-view none change]', $event.detail)},"htouchmove":function($event){return _vm.log('[wx-movable-view none htouchmove]', $event)},"vtouchmove":function($event){return _vm.log('[wx-movable-view none vtouchmove]', $event)}}},[_vm._v("none")])]:_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button move-1",on:{"click":function($event){return _vm.moveWxMovableView()}}},[_vm._v("移动（随机）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button move-2",on:{"click":function($event){return _vm.moveWxMovableView(_vm.wxMovableView.x - 100, _vm.wxMovableView.y - 100)}}},[_vm._v("移动（-100, -100）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button move-3",on:{"click":function($event){return _vm.moveWxMovableView(_vm.wxMovableView.x + 100, _vm.wxMovableView.y + 100)}}},[_vm._v("移动（+100, +100）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button move-4",on:{"click":function($event){return _vm.moveWxMovableView(0, 0)}}},[_vm._v("移动（0, 0）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button scale-1",on:{"click":function($event){return _vm.scaleWxMovableView()}}},[_vm._v("放缩（随机）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button scale-2",on:{"click":function($event){return _vm.scaleWxMovableView(_vm.wxMovableView.scaleValue * 0.8)}}},[_vm._v("放缩（0.8）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button scale-3",on:{"click":function($event){return _vm.scaleWxMovableView(_vm.wxMovableView.scaleValue * 1.2)}}},[_vm._v("放缩（1.2）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button scale-4",on:{"click":function($event){return _vm.scaleWxMovableView(1)}}},[_vm._v("放缩（1）")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button add-view",on:{"click":function($event){_vm.wxMovableView.count++}}},[_vm._v("增加滑块")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button reduce-view",on:{"click":function($event){_vm.wxMovableView.count = Math.max(_vm.wxMovableView.count - 1, 0)}}},[_vm._v("删除滑块")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button clear-view",on:{"click":function($event){_vm.wxMovableView.count = 0}}},[_vm._v("清空滑块")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button add-view",on:{"click":function($event){_vm.wxMovableView.addDirection = true}}},[_vm._v("增加四个不同方向滑块")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button add-view",on:{"click":function($event){_vm.wxMovableView.addDirection = false}}},[_vm._v("删除四个不同方向滑块")])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("惯性")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxMovableView.inertia = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("允许超过可移动区域")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxMovableView.outOfBounds = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("禁用")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxMovableView.disabled = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("动画")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxMovableView.animation = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("放缩区域为整个 area")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxMovableView.scaleArea = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("阻尼系数")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1","max":"100","step":"2","value":"20","show-value":true},on:{"change":function($event){_vm.wxMovableView.damping = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("摩擦系数")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1","max":"10","step":"1","value":"2","show-value":true},on:{"change":function($event){_vm.wxMovableView.friction = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("放缩")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxMovableView.scale = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("放缩最小值")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"0.5","max":"1","step":"0.1","value":"0.5","show-value":true},on:{"change":function($event){_vm.wxMovableView.scaleMin = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("放缩最大值")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1","max":"10","step":"1","value":"10","show-value":true},on:{"change":function($event){_vm.wxMovableView.scaleMax = $event.detail.value}}})],1)])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-scroll-view")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt wx-scroll-view-cnt"},[_c('wx-scroll-view',{ref:"wx-scroll-view-y",staticClass:"wx-scroll-view-y",attrs:{"scroll-y":true,"scroll-with-animation":_vm.wxScrollView.y.scrollWithAnimation,"refresher-enabled":_vm.wxScrollView.y.refresherEnabled,"refresher-default-style":_vm.wxScrollView.y.refresherCustom ? 'none' : 'black'},on:{"scroll":function($event){return _vm.log('[wx-scroll-view scroll]', $event.detail)},"scrolltoupper":function($event){return _vm.log('[wx-scroll-view scrolltoupper]', $event.detail)},"scrolltolower":function($event){return _vm.log('[wx-scroll-view scrolltolower]', $event.detail)},"refresherpulling":_vm.onScrollViewYRefresherPulling,"refresherrefresh":_vm.onScrollViewYRefresherRefresh,"refresherrestore":function($event){return _vm.log('[wx-scroll-view refresherrestore]', $event.detail)},"refresherabort":function($event){return _vm.log('[wx-scroll-view refresherabort]', $event.detail)}}},[_c('div',{staticClass:"inner2-y"},[_c('div',{staticClass:"block block1",attrs:{"id":"yblock1"}}),_vm._v(" "),_c('div',{staticClass:"block block2",attrs:{"id":"yblock2"}}),_vm._v(" "),_c('div',{staticClass:"block block3",attrs:{"id":"yblock3"}}),_vm._v(" "),_c('div',{staticClass:"block block4",attrs:{"id":"yblock4"}}),_vm._v(" "),_c('div',{staticClass:"block block5",attrs:{"id":"yblock5"}})]),_vm._v(" "),(_vm.wxScrollView.y.refresherCustom)?_c('div',{ref:"refresh-container",staticClass:"refresh-container",attrs:{"slot":"refresher"},slot:"refresher"},[_c('div',{staticClass:"refresh-container-text"},[_vm._v("下拉刷新")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"opr-cnt opr-cnt-y"},[_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-scroll-view-y', 'scroll-into-view', 'yblock3')}}},[_vm._v("滑动到第三个")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-scroll-view-y', 'scroll-top', 120)}}},[_vm._v("滚动到 120px 处")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-scroll-view-y', 'refresher-triggered', true)}}},[_vm._v("触发下拉")])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt opr-cnt-y"},[_c('div',{staticClass:"opr-label"},[_vm._v("动画")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxScrollView.y.scrollWithAnimation = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt opr-cnt-y"},[_c('div',{staticClass:"opr-label"},[_vm._v("下拉刷新")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxScrollView.y.refresherEnabled = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt opr-cnt-y"},[_c('div',{staticClass:"opr-label"},[_vm._v("自定义下拉刷新")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxScrollView.y.refresherCustom = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('wx-scroll-view',{ref:"wx-scroll-view-x",staticClass:"wx-scroll-view-x",attrs:{"scroll-x":true,"scroll-with-animation":_vm.wxScrollView.x.scrollWithAnimation},on:{"scroll":function($event){_vm.wxScrollView.x.scrollIntoView = ''; _vm.wxScrollView.x.scrollLeft = $event.detail.scrollLeft; _vm.log('[wx-scroll-view scroll]', $event.detail)},"scrolltoupper":function($event){return _vm.log('[wx-scroll-view scrolltoupper]', $event.detail)},"scrolltolower":function($event){return _vm.log('[wx-scroll-view scrolltolower]', $event.detail)}}},[_c('div',{staticClass:"inner2-x"},[_c('div',{staticClass:"block block1",attrs:{"id":"xblock1"}}),_vm._v(" "),_c('div',{staticClass:"block block2",attrs:{"id":"xblock2"}}),_vm._v(" "),_c('div',{staticClass:"block block3",attrs:{"id":"xblock3"}}),_vm._v(" "),_c('div',{staticClass:"block block4",attrs:{"id":"xblock4"}}),_vm._v(" "),_c('div',{staticClass:"block block5",attrs:{"id":"xblock5"}})])]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-scroll-view-x', 'scroll-into-view', 'xblock3')}}},[_vm._v("滑动到第二个")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-scroll-view-x', 'scroll-left', 120)}}},[_vm._v("滚动到 120px 处")])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("动画")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxScrollView.x.scrollWithAnimation = $event.detail.value.toString()}}})],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-swiper/wx-swiper-item")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt wx-swiper-cnt"},[_c('wx-swiper',{ref:"wx-swiper",staticClass:"wx-swiper",attrs:{"indicator-dots":_vm.wxSwiper.indicatorDots,"autoplay":_vm.wxSwiper.autoplay,"circular":_vm.wxSwiper.circular,"vertical":_vm.wxSwiper.vertical,"previous-margin":_vm.wxSwiper.margin === 'true' ? '20px' : '',"next-margin":_vm.wxSwiper.margin === 'true' ? '20px' : '',"snap-to-edge":_vm.wxSwiper.snapToEdge,"skip-hidden-item-layout":_vm.wxSwiper.skipHiddenItemLayout,"kbone-enable-wheel":_vm.wxSwiper.kboneEnableWheel,"indicator-color":_vm.wxSwiper.indicatorColor === 'true' ? 'white' : '',"indicator-active-color":_vm.wxSwiper.indicatorColor === 'true' ? 'red' : '',"interval":_vm.wxSwiper.interval,"duration":_vm.wxSwiper.duration,"display-multiple-items":_vm.wxSwiper.displayMultipleItems,"easing-function":_vm.wxSwiper.easingFunction},on:{"change":function($event){return _vm.log('[wx-swiper change]', $event.detail)},"transition":function($event){return _vm.log('[wx-swiper transition]', $event.detail)},"animationfinish":function($event){return _vm.log('[wx-swiper animationfinish]', $event.detail)}}},_vm._l((_vm.wxSwiper.totalItems),function(item){return _c('wx-swiper-item',{key:item},[_c('div',{class:("wx-swiper-item-view wx-swiper-item-view-" + item)},[_vm._v(_vm._s(_vm.wxSwiper.charString[item - 1]))])])}),1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("指示点")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxSwiper.indicatorDots = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("自动播放")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.autoplay = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("循环播放")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.circular = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("纵向")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.vertical = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("设置边距")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.margin = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("snap-to-edge")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.snapToEdge = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("隐藏不显示的滑块")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxSwiper.skipHiddenItemLayout = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("开启 wheel 事件（kbone-ui 特有）")]),_vm._v(" "),_c('wx-switch',{attrs:{"checked":true},on:{"change":function($event){_vm.wxSwiper.kboneEnableWheel = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("指示点（默认）")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxSwiper.indicatorColor = $event.detail.value.toString()}}}),_vm._v(" "),_c('div',{staticClass:"opr-label"},[_vm._v("指示点（红）")])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("时间间隔")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1000","max":"5000","step":"500","value":"3000","show-value":true},on:{"change":function($event){_vm.wxSwiper.interval = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("滑动时长")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"100","max":"1000","step":"100","value":"500","show-value":true},on:{"change":function($event){_vm.wxSwiper.duration = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("总滑块数量")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1","max":"6","step":"1","value":_vm.wxSwiper.totalItems,"show-value":true},on:{"change":function($event){_vm.wxSwiper.totalItems = $event.detail.value}}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("展示滑块数量")]),_vm._v(" "),_c('div',{staticClass:"opr-box"},[_c('wx-slider',{attrs:{"min":"1","max":"3","step":"1","value":"1","show-value":true},on:{"change":_vm.onUpdateWxSwiperShowItems}})],1)]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":function($event){return _vm.setAttribute('wx-swiper', 'current', 1)}}},[_vm._v("跳转到第二个")])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("动画类型")]),_vm._v(" "),_c('select',{on:{"change":_vm.onUpdateWxSwiperEasingFunction}},[_c('option',{attrs:{"value":"default","selected":""}},[_vm._v("default")]),_vm._v(" "),_c('option',{attrs:{"value":"linear"}},[_vm._v("linear")]),_vm._v(" "),_c('option',{attrs:{"value":"easeInCubic"}},[_vm._v("easeInCubic")]),_vm._v(" "),_c('option',{attrs:{"value":"easeOutCubic"}},[_vm._v("easeOutCubic")]),_vm._v(" "),_c('option',{attrs:{"value":"easeInOutCubic"}},[_vm._v("easeInOutCubic")])])])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-view")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-view',{staticClass:"wx-view"},[_c('div',[_vm._v("普通 view")])]),_vm._v(" "),_c('wx-view',{staticClass:"wx-view",attrs:{"hover-class":_vm.wxView.hoverClass}},[_c('div',[_vm._v("带 hover 的 view")])]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"click":_vm.onUpdateView}},[_vm._v("更新 hover 颜色")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-icon")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_c('wx-icon',{attrs:{"type":"success","size":"20"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"30"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"50"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"60"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"70"}})],1),_vm._v(" "),_c('div',[_c('wx-icon',{attrs:{"type":"success","size":"40","color":"red"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"orange"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"yellow"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"green"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"rgb(0, 255, 255)"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"blue"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success","size":"40","color":"purple"}})],1),_vm._v(" "),_c('div',[_c('wx-icon',{attrs:{"type":"success","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"success_no_circle","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"info","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"warn","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"waiting","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"cancel","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"download","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"search","size":"40"}}),_vm._v(" "),_c('wx-icon',{attrs:{"type":"clear","size":"40"}})],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-progress")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-progress',{ref:"wx-progress-update",staticClass:"wx-progress",attrs:{"percent":_vm.wxProgress.percent1,"show-info":true,"stroke-width":"3"},on:{"activeend":function($event){return _vm.log('[wx-progress]', $event.detail)}}}),_vm._v(" "),_c('wx-progress',{ref:"wx-progress-update",staticClass:"wx-progress",attrs:{"percent":_vm.wxProgress.percent2,"active":true,"stroke-width":"6"},on:{"activeend":function($event){return _vm.log('[wx-progress]', $event.detail)}}}),_vm._v(" "),_c('wx-progress',{ref:"wx-progress-update",staticClass:"wx-progress",attrs:{"percent":_vm.wxProgress.percent3,"active":true,"stroke-width":"6","active-mode":"forwards"},on:{"activeend":function($event){return _vm.log('[wx-progress]', $event.detail)}}}),_vm._v(" "),_c('wx-progress',{staticClass:"wx-progress",attrs:{"percent":"60","active":true,"stroke-width":"10","border-radius":"5"},on:{"activeend":function($event){return _vm.log('[wx-progress]', $event.detail)}}}),_vm._v(" "),_c('wx-progress',{staticClass:"wx-progress",attrs:{"percent":"80","color":"#10AEFF","active":true,"stroke-width":"14","duration":"10"},on:{"activeend":function($event){return _vm.log('[wx-progress]', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"click":_vm.onUpdateWxProgress}},[_vm._v("更新进度")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-rich-text")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-rich-text',{staticClass:"wx-rich-text",attrs:{"space":"emsp","nodes":_vm.wxRichText.nodes1}}),_vm._v(" "),_c('wx-rich-text',{staticClass:"wx-rich-text",attrs:{"nodes":_vm.wxRichText.nodes2}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-text")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_c('wx-text',{staticClass:"wx-text"},[_vm._v("今天天气不错")])],1),_vm._v(" "),_c('div',[_c('wx-text',{ref:"wx-text1",attrs:{"user-select":true,"decode":true}})],1),_vm._v(" "),_c('div',{ref:"wx-text2"}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"click":_vm.onUpdateWxText}},[_vm._v("更新内容")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-button")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt wx-button-cnt"},[_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("页面主操作 Normal")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary","loading":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("页面主操作 Loading")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary","disabled":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("页面主操作 Disabled")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("页面次要操作 Normal")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default","disabled":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("页面次要操作 Disabled")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"warn"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("警告类操作 Normal")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"warn","disabled":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("警告类操作 Disabled")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary","plain":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary","disabled":true,"plain":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("不可点击的按钮")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default","plain":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default","disabled":true,"plain":true},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")]),_vm._v(" "),_c('div',[_c('wx-button',{staticClass:"wx-button mini-btn",attrs:{"type":"primary","size":"mini"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button mini-btn",attrs:{"type":"default","size":"mini"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button mini-btn",attrs:{"type":"warn","size":"mini"},on:{"tap":function($event){return _vm.log('[wx-button] tap', $event)},"longpress":function($event){return _vm.log('[wx-button] longpress', $event)}}},[_vm._v("按钮")])],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-checkbox-group/wx-checkbox")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_c('wx-checkbox'),_c('span',[_vm._v("未选中")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"checked":true}}),_c('span',[_vm._v("选中")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"disabled":true}}),_c('span',[_vm._v("禁用 1")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"checked":true,"disabled":true}}),_c('span',[_vm._v("禁用 2")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"checked":true,"color":"#FF0000"}}),_c('span',[_vm._v("颜色 - 红")])],1),_vm._v(" "),_c('wx-checkbox-group',{staticClass:"wx-checkbox-group",on:{"change":function($event){return _vm.log('[wx-checkbox] change', $event.detail)}}},[_c('div',[_c('wx-checkbox',{attrs:{"checked":true,"value":"中"}}),_c('span',[_vm._v("中国")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"checked":true,"value":"俄"}}),_c('span',[_vm._v("俄罗斯")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"value":"美"}}),_c('span',[_vm._v("美国")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"value":"英"}}),_c('span',[_vm._v("英国")])],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"value":"法"}}),_c('span',[_vm._v("法国")])],1)])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-form")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-form',{on:{"submit":function($event){return _vm.log('[wx-form] submit', $event.detail)},"reset":function($event){_vm.wxForm.wxPicker.showText = '美国'; _vm.log('[wx-form] reset')}}},[_c('div',[_c('wx-input',{staticClass:"wx-input",attrs:{"name":"wx-input","value":"wx-input","placeholder":"请输入内容"}})],1),_vm._v(" "),_c('div',[_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"name":"wx-textarea","value":"wx-textarea","placeholder":"请输入内容"}})],1),_vm._v(" "),_c('div',[_c('wx-switch',{attrs:{"name":"wx-switch","checked":true}}),_vm._v("wx-switch")],1),_vm._v(" "),_c('div',[_c('wx-slider',{attrs:{"name":"wx-slider","value":"77","show-value":true}})],1),_vm._v(" "),_c('wx-checkbox-group',{staticClass:"wx-checkbox-group"},[_c('div',[_c('wx-checkbox',{attrs:{"name":"wx-checkbox","checked":true,"value":"中国"}}),_vm._v("中国")],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"name":"wx-checkbox","value":"美国"}}),_vm._v("美国")],1)]),_vm._v(" "),_c('wx-radio-group',{staticClass:"wx-radio-group"},[_c('div',[_c('wx-radio',{attrs:{"name":"wx-radio","checked":true,"value":"男"}}),_vm._v("男")],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"name":"wx-radio","value":"女"}}),_vm._v("女")],1)]),_vm._v(" "),_c('div',[_c('wx-picker',{staticClass:"wx-picker",attrs:{"name":"wx-picker","range":_vm.wxForm.wxPicker.range,"value":_vm.wxForm.wxPicker.value},on:{"change":function($event){_vm.wxForm.wxPicker.showText = _vm.wxForm.wxPicker.range[+$event.detail.value]}}},[_c('div',[_vm._v(_vm._s(_vm.wxForm.wxPicker.showText))])])],1),_vm._v(" "),_c('div',[_c('wx-picker-view',{staticClass:"wx-picker-view",attrs:{"name":"wx-picker-view","indicator-style":"height: 50px;","value":_vm.wxForm.wxPickerView.value}},[_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxForm.wxPickerView.year),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"年")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxForm.wxPickerView.month),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"月")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxForm.wxPickerView.date),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"日")])}),0)],1)],1),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"form-type":"submit"}},[_vm._v("submit")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"form-type":"reset"}},[_vm._v("reset")])],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-input")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-input',{staticClass:"wx-input",attrs:{"value":"默认 value 值"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)},"focus":function($event){return _vm.log('[wx-input] focus', $event.detail)},"blur":function($event){return _vm.log('[wx-input] blur', $event.detail)},"confirm":function($event){return _vm.log('[wx-input] confirm', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"文本输入框","type":"text"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"整数输入框","type":"number"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"小数输入框","type":"digit"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"身份证输入框","type":"idcard"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"密码输入框","password":true},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"占位文本样式1","placeholder-style":"color: red;"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"占位文本样式2","placeholder-class":"green"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"禁用","disabled":true},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":("最大输入长度为 " + (_vm.wxInput.maxlength > 0 ? _vm.wxInput.maxlength : '无限')),"maxlength":_vm.wxInput.maxlength},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){_vm.wxInput.maxlength = _vm.wxInput.maxlength > 0 ? -1 : 10}}},[_vm._v("修改上面输入框的 maxlength")]),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"focus":_vm.wxInput.focus,"placeholder":"自动聚焦"},on:{"blur":function($event){_vm.wxInput.focus = false},"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){_vm.wxInput.focus = true}}},[_vm._v("聚焦上面输入框")]),_vm._v(" "),_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"点击确认不失焦","confirm-hold":true},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-input',{ref:"wx-input-cursor",staticClass:"wx-input",attrs:{"value":"焦点位置 -><- 在这里","cursor":"7"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){return _vm.setAttribute('wx-input-cursor', 'focus', true)}}},[_vm._v("聚焦上面输入框")]),_vm._v(" "),_c('wx-input',{ref:"wx-input-select",staticClass:"wx-input",attrs:{"value":"后面这些文字：这些要被选中，到此就结束了","selection-start":"7","selection-end":"13"},on:{"input":function($event){return _vm.log('[wx-input] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){return _vm.setAttribute('wx-input-select', 'focus', true)}}},[_vm._v("聚焦上面输入框")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-label")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-checkbox-group',{on:{"change":function($event){return _vm.log('[wx-label] checkbox change', $event.detail)}}},[_c('div',[_vm._v("表单组件在 wx-label 内")]),_vm._v(" "),_c('div',[_c('wx-label',[_c('wx-checkbox',{attrs:{"checked":true,"value":"中国"}}),_vm._v("中国")],1)],1),_vm._v(" "),_c('div',[_c('wx-label',[_c('wx-checkbox',{attrs:{"value":"美国"}}),_vm._v("美国")],1)],1)]),_vm._v(" "),_c('wx-radio-group',{on:{"change":function($event){return _vm.log('[wx-label] radio change', $event.detail)}}},[_c('div',[_vm._v("wx-label 用 for 标识表单组件")]),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"id":"label-radio-1","checked":true,"value":"中国"}}),_c('wx-label',{attrs:{"for":"label-radio-1"}},[_vm._v("中国")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"id":"label-radio-2","value":"美国"}}),_c('wx-label',{attrs:{"for":"label-radio-2"}},[_vm._v("美国")])],1)]),_vm._v(" "),_c('wx-checkbox-group',{on:{"change":function($event){return _vm.log('[wx-label] checkbox change', $event.detail)}}},[_c('div',[_vm._v("wx-label 内有多个时选中第一个")]),_vm._v(" "),_c('wx-label',[_c('div',[_c('wx-checkbox',{attrs:{"value":"中国"}}),_vm._v("中国")],1),_vm._v(" "),_c('div',[_c('wx-checkbox',{attrs:{"value":"美国"}}),_vm._v("美国")],1),_vm._v(" "),_c('div',[_vm._v("点击该 wx-label 下的文字默认选中第一个 wx-checkbox")])])],1),_vm._v(" "),_c('div',{staticClass:"add-margin-top"},[_c('wx-label',[_c('wx-switch',{on:{"change":function($event){return _vm.log('[wx-label] switch change', $event.detail)}}}),_vm._v("wx-switch")],1)],1),_vm._v(" "),_c('div',{staticClass:"add-margin-top"},[_c('wx-label',[_c('wx-switch',{attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.log('[wx-label] switch change', $event.detail)}}}),_vm._v("wx-switch")],1)],1),_vm._v(" "),_c('div',{staticClass:"add-margin-top"},[_c('wx-label',[_c('wx-button',{staticClass:"wx-button",on:{"tap":function($event){return _vm.log('[wx-label] button tap')}}},[_vm._v("按钮")]),_vm._v("wx-button")],1)],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-picker")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-picker',{staticClass:"wx-picker",attrs:{"range":_vm.wxPicker.range1,"value":_vm.wxPicker.value1},on:{"change":function($event){_vm.wxPicker.showText1 = _vm.wxPicker.range1[+$event.detail.value]},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("普通选择器："+_vm._s(_vm.wxPicker.showText1))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"header-text":"selector","range-key":"name","range":_vm.wxPicker.range2,"value":_vm.wxPicker.value2},on:{"change":function($event){_vm.wxPicker.showText2 = _vm.wxPicker.range2[+$event.detail.value].name},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("普通选择器2："+_vm._s(_vm.wxPicker.showText2))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"multiSelector","range":_vm.wxPicker.range3,"value":_vm.wxPicker.value3},on:{"change":function($event){_vm.wxPicker.showText3 = (_vm.wxPicker.range3[0][+$event.detail.value[0]]) + " - " + (_vm.wxPicker.range3[1][+$event.detail.value[1]]) + " - " + (_vm.wxPicker.range3[2][+$event.detail.value[2]])},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)},"columnchange":_vm.onWxpicker3ColumnChange}},[_c('div',[_vm._v("多列选择器："+_vm._s(_vm.wxPicker.showText3))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"multiSelector","range-key":"name","header-text":"multiSelector","range":_vm.wxPicker.range4,"value":_vm.wxPicker.value4},on:{"change":function($event){_vm.wxPicker.showText4 = (_vm.wxPicker.range4[0][+$event.detail.value[0]].name) + " - " + (_vm.wxPicker.range4[1][+$event.detail.value[1]].name)},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)},"columnchange":_vm.onWxpicker4ColumnChange}},[_c('div',[_vm._v("多列选择器2："+_vm._s(_vm.wxPicker.showText4))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"time","start":"09:01","end":"21:01","value":_vm.wxPicker.value5},on:{"change":function($event){_vm.wxPicker.value5 = $event.detail.value},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("时间选择器："+_vm._s(_vm.wxPicker.value5))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"date","start":"2015-09-01","end":"2020-09-01","value":_vm.wxPicker.value6},on:{"change":function($event){_vm.wxPicker.value6 = $event.detail.value},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("日期选择器："+_vm._s(_vm.wxPicker.value6))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"date","start":"2015-09-01","end":"2020-09-01","fields":"month","value":_vm.wxPicker.value7},on:{"change":function($event){_vm.wxPicker.value7 = $event.detail.value},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("日期选择器2："+_vm._s(_vm.wxPicker.value7))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"date","start":"2015-09-01","end":"2020-09-01","fields":"year","value":_vm.wxPicker.value8},on:{"change":function($event){_vm.wxPicker.value8 = $event.detail.value},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("日期选择器2："+_vm._s(_vm.wxPicker.value8))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"region","value":_vm.wxPicker.value9},on:{"change":function($event){_vm.wxPicker.showText9 = $event.detail.value.join('-')},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("省市选择器："+_vm._s(_vm.wxPicker.showText9))])]),_vm._v(" "),_c('wx-picker',{staticClass:"wx-picker",attrs:{"mode":"region","custom-item":"全部","value":_vm.wxPicker.value10},on:{"change":function($event){_vm.wxPicker.showText10 = $event.detail.value.join('-')},"cancel":function($event){return _vm.log('[wx-picker] cancel', $event)}}},[_c('div',[_vm._v("省市选择器2："+_vm._s(_vm.wxPicker.showText10))])])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-radio-group/wx-radio")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_c('wx-radio'),_c('span',[_vm._v("未选中")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"checked":true}}),_c('span',[_vm._v("选中")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"disabled":true}}),_c('span',[_vm._v("禁用 1")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"checked":true,"disabled":true}}),_c('span',[_vm._v("禁用 2")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"checked":true,"color":"#FF0000"}}),_c('span',[_vm._v("颜色 - 红")])],1),_vm._v(" "),_c('wx-radio-group',{staticClass:"wx-radio-group",on:{"change":function($event){return _vm.log('[wx-radio] change', $event.detail)}}},[_c('div',[_c('wx-radio',{attrs:{"checked":true,"value":"中"}}),_c('span',[_vm._v("中国")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"value":"俄"}}),_c('span',[_vm._v("俄罗斯")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"value":"美"}}),_c('span',[_vm._v("美国")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"value":"英"}}),_c('span',[_vm._v("英国")])],1),_vm._v(" "),_c('div',[_c('wx-radio',{attrs:{"value":"法"}}),_c('span',[_vm._v("法国")])],1)])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-picker-view/wx-picker-view-column")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt wx-picker-view-cnt"},[_c('wx-picker-view',{staticClass:"wx-picker-view",attrs:{"indicator-style":"height: 50px;","value":_vm.wxPickerView.value},on:{"change":function($event){return _vm.log('[wx-picker-view] change', $event.detail)},"pickstart":function($event){return _vm.log('[wx-picker-view] pickstart', $event)},"pickend":function($event){return _vm.log('[wx-picker-view] pickend', $event)}}},[_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxPickerView.year),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"年")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxPickerView.month),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"月")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},_vm._l((_vm.wxPickerView.date),function(item){return _c('div',{key:item,staticClass:"item"},[_vm._v(_vm._s(item)+"日")])}),0),_vm._v(" "),_c('wx-picker-view-column',{staticClass:"wx-picker-view-column"},[_c('div',{staticClass:"icon-cnt"},[_c('img',{staticClass:"icon",attrs:{"src":"data:image/png;base64,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"}})]),_vm._v(" "),_c('div',{staticClass:"icon-cnt"},[_c('img',{staticClass:"icon",attrs:{"src":"data:image/png;base64,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"}})])])],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button",on:{"click":_vm.onUpdateWxPickerView}},[_vm._v("更新值（随机）")])],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-slider")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-slider',{staticClass:"wx-slider",on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"1","max":"21","step":"2","value":"15"},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"12.3","max":"27.5","step":"0.2","value":"15","show-value":true},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"50","max":"200","value":"100","show-value":true},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"50","max":"200","value":"110","disabled":true},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"50","max":"200","value":"100","selected-color":"red","color":"#000"},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"50","max":"200","value":"100","active-color":"red","background-color":"#000"},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}}),_vm._v(" "),_c('wx-slider',{staticClass:"wx-slider",attrs:{"min":"50","max":"200","value":"100","block-size":"15","block-color":"red"},on:{"change":function($event){return _vm.log('[wx-slider] change', $event.detail)},"changing":function($event){return _vm.log('[wx-slider] changing', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-switch")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-switch',{staticClass:"wx-switch",attrs:{"checked":true},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{staticClass:"wx-switch",attrs:{"checked":true,"disabled":true},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{staticClass:"wx-switch",attrs:{"checked":true,"color":"red"},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{staticClass:"wx-switch",attrs:{"type":"checkbox"},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{staticClass:"wx-switch",attrs:{"type":"checkbox","disabled":true},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}}),_vm._v(" "),_c('wx-switch',{staticClass:"wx-switch",attrs:{"type":"checkbox","color":"red"},on:{"change":function($event){return _vm.log('[wx-switch]', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-textarea")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"value":"默认 value 值"},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)},"focus":function($event){return _vm.log('[wx-textarea] focus', $event.detail)},"blur":function($event){return _vm.log('[wx-textarea] blur', $event.detail)},"confirm":function($event){return _vm.log('[wx-textarea] confirm', $event.detail)},"linechange":function($event){return _vm.log('[wx-textarea] linechange', $event.detail)}}}),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":"占位文本样式1","placeholder-style":"color: red;"},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":"占位文本样式2","placeholder-class":"green"},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":"禁用","disabled":true},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":("最大输入长度为 " + (_vm.wxTextarea.maxlength > 0 ? _vm.wxTextarea.maxlength : '无限')),"maxlength":_vm.wxTextarea.maxlength},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){_vm.wxTextarea.maxlength = _vm.wxTextarea.maxlength > 0 ? -1 : 10}}},[_vm._v("修改上面 textarea 的 maxlength")]),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"focus":_vm.wxTextarea.focus,"placeholder":"默认不聚焦"},on:{"blur":function($event){_vm.wxTextarea.focus = false},"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){_vm.wxTextarea.focus = true}}},[_vm._v("聚焦上面 textarea")]),_vm._v(" "),_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":"自动增高","auto-height":true},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){_vm.wxTextarea.showFixedDialog = true}}},[_vm._v("显示 fixed textarea")]),_vm._v(" "),(_vm.wxTextarea.showFixedDialog)?_c('div',{staticClass:"fixed-dialog"},[_c('div',{staticClass:"fixed-dialog-mask",on:{"click":function($event){_vm.wxTextarea.showFixedDialog = false}}}),_vm._v(" "),_c('div',{staticClass:"fixed-dialog-cnt"},[_c('wx-textarea',{staticClass:"wx-textarea",attrs:{"placeholder":"点击灰色蒙层可关闭","fixed":true},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}})],1)]):_vm._e(),_vm._v(" "),_c('wx-textarea',{ref:"wx-textarea-cursor",staticClass:"wx-textarea",attrs:{"value":"焦点位置 -><- 在这里","cursor":"7"},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){return _vm.setAttribute('wx-textarea-cursor', 'focus', true)}}},[_vm._v("聚焦上面输入框")]),_vm._v(" "),_c('wx-textarea',{ref:"wx-textarea-select",staticClass:"wx-textarea",attrs:{"value":"后面这些文字：这些要被选中，到此就结束了","selection-start":"7","selection-end":"13"},on:{"input":function($event){return _vm.log('[wx-textarea] input', $event.detail)}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":function($event){return _vm.setAttribute('wx-textarea-select', 'focus', true)}}},[_vm._v("聚焦上面输入框")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-image")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_vm._v("缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 wx-image 元素")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"scaleToFill","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"aspectFit","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"aspectFill","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("缩放模式，宽度不变，高度自动变化，保持原图宽高比不变")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"widthFix","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("缩放模式，高度不变，宽度自动变化，保持原图宽高比不变")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"heightFix","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的顶部区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"top","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的底部区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"bottom","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的中间区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"center","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的左边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"left","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的右边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"right","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的左上边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"top left","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的右上边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"top right","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的左下边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"bottom left","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("裁剪模式，不缩放图片，只显示图片的右下边区域")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"mode":"bottom right","src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("默认")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("长按报错")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"show-menu-by-longpress":true,"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("error")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"src":"https://june.haha/123456.jpg"},on:{"load":function($event){return _vm.log('[wx-image] load', $event.detail)},"error":function($event){return _vm.log('[wx-image] error', $event.detail)}}}),_vm._v(" "),_c('div',[_vm._v("lazy-load")]),_vm._v(" "),_c('wx-image',{staticClass:"wx-image",staticStyle:{"width":"200px","height":"200px","background-color":"#eee"},attrs:{"lazy-load":true,"src":"https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"},on:{"load":function($event){return _vm.log('[wx-image] lazy-load load', $event.detail)},"error":function($event){return _vm.log('[wx-image] lazy-load error', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-canvas")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',[_vm._v("2d Canvas")]),_vm._v(" "),_c('wx-canvas',{ref:"wx-canvas",staticClass:"wx-canvas",attrs:{"type":"2d","disable-scroll":_vm.wxCanvas.disableScroll},on:{"canvastouchstart":function($event){return _vm.log('[wx-canvas] touchstart', $event)},"canvastouchmove":function($event){return _vm.log('[wx-canvas] touchmove', $event)},"canvastouchend":function($event){return _vm.log('[wx-canvas] touchend', $event)},"canvastouchcancel":function($event){return _vm.log('[wx-canvas] touchcancel', $event)},"longtap":function($event){return _vm.log('[wx-canvas] longtap', $event)},"error":function($event){return _vm.log('[wx-canvas] error', $event)}}},[_c('Inner',{staticStyle:{"margin-top":"100px"}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("禁止滚动")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.wxCanvas.disableScroll = $event.detail.value.toString()}}})],1),_vm._v(" "),_c('div',[_vm._v("2d Canvas 动画")]),_vm._v(" "),_c('wx-canvas',{ref:"wx-canvas-animation",staticClass:"wx-canvas-2",attrs:{"type":"2d"}}),_vm._v(" "),_c('wx-canvas',{ref:"wx-canvas-webgl",staticClass:"wx-canvas-2",attrs:{"type":"webgl"}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-capture")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{on:{"touchstart":function($event){return _vm.log('root touchstart')},"touchend":function($event){return _vm.log('root touchend')},"click":function($event){return _vm.log('root click')}}},[_c('div',[_vm._v("touchstart -> root touchstart -> touchend -> root touchend -> click -> root click")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"touchstart":function($event){return _vm.log('touchstart')},"touchend":function($event){return _vm.log('touchend')},"click":function($event){return _vm.log('click')}}},[_vm._v("normal event")]),_vm._v(" "),_c('div',[_vm._v("parent touchstart -> touchstart -> root touchstart -> parent touchend -> touchend -> root touchend -> parent click -> click -> root click")]),_vm._v(" "),_c('wx-capture',{on:{"touchstart":function($event){return _vm.log('parent touchstart')},"touchend":function($event){return _vm.log('parent touchend')},"click":function($event){return _vm.log('parent click')}}},[_c('wx-button',{staticClass:"wx-button",on:{"touchstart":function($event){return _vm.log('touchstart')},"touchend":function($event){return _vm.log('touchend')},"click":function($event){_vm.wxCapture.eventCount++; _vm.log('click')}}},[_vm._v("capture-inner("+_vm._s(_vm.wxCapture.eventCount)+")")])],1)],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-catch")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{on:{"touchstart":function($event){return _vm.log('root touchstart')},"touchend":function($event){return _vm.log('root touchend')},"click":function($event){return _vm.log('root click')}}},[_c('div',[_vm._v("touchstart -> parent touchstart -> touchend -> parent touchend")]),_vm._v(" "),_c('wx-catch',{on:{"touchstart":function($event){return _vm.log('parent touchstart')},"touchend":function($event){return _vm.log('parent touchend')},"click":function($event){return _vm.log('parent click')}}},[_c('wx-button',{staticClass:"wx-button",on:{"touchstart":function($event){return _vm.log('touchstart')},"touchend":function($event){return _vm.log('touchend')},"click":function($event){_vm.wxCatch.eventCount++; _vm.log('click')}}},[_vm._v("catch-inner1("+_vm._s(_vm.wxCatch.eventCount)+")")])],1),_vm._v(" "),_c('div',[_vm._v("touchstart -> touchend -> click -> parent click")]),_vm._v(" "),_c('wx-catch',{on:{"click":function($event){return _vm.log('parent click')}}},[_c('wx-button',{staticClass:"wx-button",on:{"touchstart":function($event){return _vm.log('touchstart')},"touchend":function($event){return _vm.log('touchend')},"click":function($event){_vm.wxCatch.eventCount++; _vm.log('click')}}},[_vm._v("catch-inner2("+_vm._s(_vm.wxCatch.eventCount)+")")])],1),_vm._v(" "),_c('wx-catch',[_vm._v("catch-inner3("+_vm._s(_vm.wxCatch.eventCount)+")")])],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("wx-animation")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{staticClass:"event-cnt"},[_c('div',[_vm._v("transition end")]),_vm._v(" "),_c('wx-animation',{class:['event-t', _vm.wxAnimation.transition ? 'event-t-s' : 'event-t-e'],on:{"transitionend":function($event){return _vm.log('transition end')}}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"click":function($event){_vm.wxAnimation.transition = !_vm.wxAnimation.transition}}},[_vm._v("transition")])],1),_vm._v(" "),_c('div',{staticClass:"event-cnt"},[_c('div',[_vm._v("animation start -> animation iteration -> animation end")]),_vm._v(" "),_c('wx-animation',{staticClass:"event-a",on:{"animationstart":function($event){return _vm.log('animation start')},"animationiteration":function($event){return _vm.log('animation iteration')},"animationend":function($event){return _vm.log('animation end')}}})],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("kbone-attribute-map")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-input',{staticClass:"wx-input",attrs:{"kbone-attribute-map":_vm.kboneAttributeMap}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneAttributeMap1}},[_vm._v("操作1")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneAttributeMap2}},[_vm._v("操作2")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneAttributeMap3}},[_vm._v("reset")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("kbone-event-map")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-input',{staticClass:"wx-input",attrs:{"placeholder":"这是一个输入框","kbone-event-map":_vm.kboneEventMap}}),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneEventMap1}},[_vm._v("操作1")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneEventMap2}},[_vm._v("操作2")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.onSetKboneEventMap3}},[_vm._v("reset")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("操作")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-button',{staticClass:"wx-button",on:{"click":_vm.do$$getBoundingClientRect}},[_vm._v("$$getBoundingClientRect")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",on:{"click":_vm.do$$getComputedStyle}},[_vm._v("$$getComputedStyle")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary"},on:{"click":_vm.onRemoveAll}},[_vm._v("删除全部")])],1)])],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/App.vue?vue&type=template&id=7884caa2&

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
var Innervue_type_style_index_0_lang_css_ = __webpack_require__(4);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Inner: Inner
  },

  data() {
    const now = new Date(); // wx-picker-view

    const wxPickerViewYear = [];
    const wxPickerViewMonth = [];
    const wxPickerViewDate = [];

    for (let i = 1990; i <= now.getFullYear(); i++) wxPickerViewYear.push(i);

    for (let i = 1; i <= 12; i++) wxPickerViewMonth.push(i);

    for (let i = 1; i <= 31; i++) wxPickerViewDate.push(i);

    return {
      show: true,
      wxMovableView: {
        x: 0,
        y: 0,
        inertia: true,
        outOfBounds: true,
        disabled: undefined,
        animation: undefined,
        scaleArea: undefined,
        damping: undefined,
        friction: undefined,
        scale: true,
        scaleValue: 1,
        scaleMin: undefined,
        scaleMax: undefined,
        count: 0,
        addDirection: false
      },
      wxScrollView: {
        y: {
          scrollWithAnimation: true,
          refresherEnabled: undefined,
          refresherCustom: false
        },
        x: {
          scrollWithAnimation: true
        }
      },
      wxSwiper: {
        indicatorDots: true,
        autoplay: undefined,
        circular: undefined,
        vertical: undefined,
        margin: undefined,
        snapToEdge: undefined,
        skipHiddenItemLayout: undefined,
        kboneEnableWheel: undefined,
        indicatorColor: undefined,
        interval: undefined,
        duration: undefined,
        totalItems: 3,
        charString: 'ABCDEF',
        displayMultipleItems: undefined,
        easingFunction: undefined
      },
      wxView: {
        hoverClass: 'red'
      },
      wxProgress: {
        percent1: 20,
        percent2: 40,
        percent3: 40
      },
      wxRichText: {
        nodes1: `<div class="div_class">
          <h1>Title</h1>
          <p class="p">
              Life is&nbsp;<i>like</i>&nbsp;a box of
              <b>&nbsp;chocolates</b>.
          </p>
        </div>`,
        nodes2: [{
          name: 'div',
          attrs: {
            class: 'div_class',
            style: 'line-height: 60px; color: #1AAD19;'
          },
          children: [{
            type: 'text',
            text: 'You never know what you\'re gonna get.'
          }]
        }]
      },
      wxForm: {
        wxPicker: {
          range: ['美国', '中国', '巴西', '日本'],
          value: 1,
          showText: '中国'
        },
        wxPickerView: {
          value: [9999, 1, 1],
          year: wxPickerViewYear,
          month: wxPickerViewMonth,
          date: wxPickerViewDate
        }
      },
      wxInput: {
        focus: true,
        maxlength: 10
      },
      wxTextarea: {
        focus: false,
        maxlength: 10,
        showFixedDialog: false
      },
      wxPicker: {
        range1: ['美国', '中国', '巴西', '日本'],
        value1: 1,
        showText1: '中国',
        range2: [{
          name: '美国'
        }, {
          name: '中国'
        }, {
          name: '巴西'
        }, {
          name: '日本'
        }],
        value2: 1,
        showText2: '中国',
        range3: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        value3: [0, 0, 0],
        showText3: '无脊柱动物 - 扁性动物 - 猪肉绦虫',
        range4: [[{
          name: '国家'
        }, {
          name: '城市'
        }], [{
          name: '中国'
        }, {
          name: '日本'
        }]],
        value4: [0, 0],
        showText4: '国家 - 中国',
        value5: '12:01',
        value6: '2016-09-01',
        value7: '2016-09',
        value8: '2016',
        value9: ['广东省', '广州市', '海珠区'],
        showText9: '广东省-广州市-海珠区',
        value10: ['广东省', '广州市', '海珠区'],
        showText10: '广东省-广州市-海珠区'
      },
      wxPickerView: {
        value: [9999, 1, 1],
        year: wxPickerViewYear,
        month: wxPickerViewMonth,
        date: wxPickerViewDate
      },
      wxCanvas: {
        disableScroll: undefined
      },
      wxCapture: {
        eventCount: 0
      },
      wxCatch: {
        eventCount: 0
      },
      wxAnimation: {
        transition: false
      },
      kboneAttributeMap: {
        placeholder: '这是一个输入框'
      },
      kboneEventMap: {
        input: this.log.bind(this, '[kbone-event-map] input')
      }
    };
  },

  mounted() {
    // wx-text
    this.$refs['wx-text1'].innerText = '&gt; this is first line\n&gt; this is second line'; // wx-canvas

    this.$refs['wx-canvas'].$$prepare().then(domNode => {
      domNode.width = 300;
      domNode.height = 200;
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
    this.$refs['wx-canvas-animation'].$$prepare().then(domNode => {
      const context = domNode.getContext('2d');
      const dpr = window.devicePixelRatio;
      domNode.width = 305 * dpr;
      domNode.height = 305 * dpr;
      context.scale(dpr, dpr);
      const p = {
        x: 150,
        y: 150,
        vx: 2,
        vy: 2
      };

      const renderLoop = () => {
        context.clearRect(0, 0, 305, 305); // 球

        p.x += p.vx;
        p.y += p.vy;
        if (p.x >= 300) p.vx = -2;
        if (p.x <= 7) p.vx = 2;
        if (p.y >= 300) p.vy = -2;
        if (p.y <= 7) p.vy = 2;

        function ball(x, y) {
          context.beginPath();
          context.arc(x, y, 5, 0, Math.PI * 2);
          context.fillStyle = '#1aad19';
          context.strokeStyle = 'rgba(1,1,1,0)';
          context.fill();
          context.stroke();
        }

        ball(p.x, 150);
        ball(150, p.y);
        ball(300 - p.x, 150);
        ball(150, 300 - p.y);
        ball(p.x, p.y);
        ball(300 - p.x, 300 - p.y);
        ball(p.x, 300 - p.y);
        ball(300 - p.x, p.y);
        domNode.requestAnimationFrame(renderLoop);
      };

      domNode.requestAnimationFrame(renderLoop);
    });
    this.$refs['wx-canvas-webgl'].$$prepare().then(domNode => {
      const vs = `
        precision mediump float;

        attribute vec2 vertPosition;
        attribute vec3 vertColor;
        varying vec3 fragColor;

        void main() {
          gl_Position = vec4(vertPosition, 0.0, 1.0);
          fragColor = vertColor;
        }
      `;
      const fs = `
        precision mediump float;

        varying vec3 fragColor;
        void main() {
          gl_FragColor = vec4(fragColor, 1.0);
        }
      `;
      const triangleVertices = [0.0, 0.5, 1.0, 1.0, 0.0, -0.5, -0.5, 0.7, 0.0, 1.0, 0.5, -0.5, 0.1, 1.0, 0.6];
      domNode.width = 305;
      domNode.height = 305;
      const gl = domNode.getContext('webgl');

      if (!gl) {
        console.error('gl init failed', gl);
        return;
      }

      gl.viewport(0, 0, 305, 305);
      const vertShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertShader, vs);
      gl.compileShader(vertShader);
      const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragShader, fs);
      gl.compileShader(fragShader);
      const prog = gl.createProgram();
      gl.attachShader(prog, vertShader);
      gl.attachShader(prog, fragShader);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const draw = () => {
        const triangleVertexBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
        const positionAttribLocation = gl.getAttribLocation(prog, 'vertPosition');
        const colorAttribLocation = gl.getAttribLocation(prog, 'vertColor');
        gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(positionAttribLocation);
        gl.enableVertexAttribArray(colorAttribLocation);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        domNode.requestAnimationFrame(draw);
      };

      domNode.requestAnimationFrame(draw);
    });
  },

  methods: {
    log(...args) {
      console.log.apply(console, args);
    },

    setAttribute(ref, name, value) {
      this.$refs[ref].setAttribute(name, value);
    },

    moveWxMovableView(x, y) {
      if (x === undefined && y === undefined) {
        x = ~~(Math.random() * 300);
        y = ~~(Math.random() * 300);
      }

      x = Math.min(Math.max(x, 0), 300);
      y = Math.min(Math.max(y, 0), 300);
      this.wxMovableView.x = x;
      this.wxMovableView.y = y;
      this.$refs['wx-movable-view'].setAttribute('x', x);
      this.$refs['wx-movable-view'].setAttribute('y', y);
    },

    scaleWxMovableView(scale) {
      if (scale === undefined) {
        scale = Math.random() * 2.5 + 0.5;
      }

      scale = Math.min(Math.max(scale, 0.5), 3);
      this.wxMovableView.scaleValue = scale;
      this.$refs['wx-movable-view'].setAttribute('scale-value', scale);
    },

    onScrollViewYRefresherPulling(evt) {
      this.log('[wx-scroll-view refresherpulling]', evt.detail);
      const refreshContainer = this.$refs['refresh-container'];

      if (refreshContainer) {
        const p = Math.min(evt.detail.dy / 80, 1);
        refreshContainer.style.opacity = p;
        refreshContainer.style.transform = `scale(${p})`;
        window.$$forceRender();
      }
    },

    onScrollViewYRefresherRefresh(evt) {
      this.log('[wx-scroll-view refresherrefresh]', evt.detail);
      setTimeout(() => this.setAttribute('wx-scroll-view-y', 'refresher-triggered', false), 1000);
    },

    onUpdateWxSwiperShowItems(evt) {
      this.wxSwiper.displayMultipleItems = evt.detail.value;
      if (evt.detail.value === 2) this.wxSwiper.totalItems = 5;
      if (evt.detail.value === 3) this.wxSwiper.totalItems = 6;
    },

    onUpdateWxSwiperEasingFunction(evt) {
      let value = 'default';
      evt.target.querySelectorAll('option').forEach(option => {
        if (option.selected) value = option.value;
      });
      this.wxSwiper.easingFunction = value;
    },

    onUpdateView() {
      this.wxView.hoverClass = this.wxView.hoverClass === 'red' ? 'green' : 'red';
    },

    onUpdateWxProgress() {
      this.wxProgress.percent1 = 80;
      this.wxProgress.percent2 = 80;
      this.wxProgress.percent3 = 80;
    },

    onUpdateWxText() {
      this.$refs['wx-text2'].innerHTML = '<wx-text id="wx-text-decode-1" decode="true"></wx-text><wx-text id="wx-text-decode-2"></wx-text>';
      this.$nextTick(() => {
        document.getElementById('wx-text-decode-1').innerText = '&gt; insert 1';
        document.getElementById('wx-text-decode-2').innerText = '&gt; insert 2';
      });
    },

    onWxpicker3ColumnChange(evt) {
      const value = JSON.parse(JSON.stringify(this.wxPicker.value3)); // 深拷贝

      const range = JSON.parse(JSON.stringify(this.wxPicker.range3)); // 深拷贝

      value[evt.detail.column] = +evt.detail.value;

      switch (evt.detail.column) {
        case 0:
          switch (value[0]) {
            case 0:
              range[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
              range[2] = ['猪肉绦虫', '吸血虫'];
              break;

            case 1:
              range[1] = ['鱼', '两栖动物', '爬行动物'];
              range[2] = ['鲫鱼', '带鱼'];
              break;
          }

          value[1] = 0;
          value[2] = 0;
          break;

        case 1:
          switch (value[0]) {
            case 0:
              switch (value[1]) {
                case 0:
                  range[2] = ['猪肉绦虫', '吸血虫'];
                  break;

                case 1:
                  range[2] = ['蛔虫'];
                  break;

                case 2:
                  range[2] = ['蚂蚁', '蚂蟥'];
                  break;

                case 3:
                  range[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;

                case 4:
                  range[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;
              }

              break;

            case 1:
              switch (value[1]) {
                case 0:
                  range[2] = ['鲫鱼', '带鱼'];
                  break;

                case 1:
                  range[2] = ['青蛙', '娃娃鱼'];
                  break;

                case 2:
                  range[2] = ['蜥蜴', '龟', '壁虎'];
                  break;
              }

              break;
          }

          value[2] = 0;
          break;
      }

      this.wxPicker.value3 = value;
      this.wxPicker.range3 = range;
    },

    onWxpicker4ColumnChange(evt) {
      const value = JSON.parse(JSON.stringify(this.wxPicker.value4)); // 深拷贝

      const range = JSON.parse(JSON.stringify(this.wxPicker.range4)); // 深拷贝

      value[evt.detail.column] = +evt.detail.value;

      if (evt.detail.column === 0) {
        if (value[0] === 0) {
          range[1] = [{
            name: '中国'
          }, {
            name: '日本'
          }];
        } else if (value[0] === 1) {
          range[1] = [{
            name: '北京'
          }, {
            name: '东京'
          }];
        }

        value[1] = 0;
      }

      this.wxPicker.value4 = value;
      this.wxPicker.range4 = range;
    },

    onUpdateWxPickerView() {
      const now = new Date();
      const year = Math.floor(Math.random() * (now.getFullYear() + 1 - 1990));
      const month = Math.floor(Math.random() * 12);
      const date = Math.floor(Math.random() * 31);
      const daytime = Math.random() >= 0.5 ? 1 : 0;
      console.log('[wx-picker-view] will update value ->', [year, month, date, daytime]);
      this.wxPickerView.value = [year, month, date, daytime];
    },

    onSetKboneAttributeMap1() {
      this.kboneAttributeMap = {
        value: '焦点位置 -><- 在这里',
        cursor: 7,
        focus: true
      };
    },

    onSetKboneAttributeMap2() {
      this.kboneAttributeMap = {
        value: '后面这些文字：这些要被选中，到此就结束了',
        'selection-start': 7,
        'selection-end': 13,
        focus: true
      };
    },

    onSetKboneAttributeMap3() {
      this.kboneAttributeMap = {
        placeholder: '这是一个输入框'
      };
    },

    onSetKboneEventMap1() {
      this.kboneEventMap = {
        focus: this.log.bind(this, '[kbone-event-map] focus'),
        blur: this.log.bind(this, '[kbone-event-map] blur')
      };
    },

    onSetKboneEventMap2() {
      this.kboneEventMap = {
        focus: this.log.bind(this, '[kbone-event-map] focus'),
        change: this.log.bind(this, '[kbone-event-map] change')
      };
    },

    onSetKboneEventMap3() {
      this.kboneEventMap = {
        input: this.log.bind(this, '[kbone-event-map] input')
      };
    },

    do$$getBoundingClientRect(evt) {
      evt.target.$$getBoundingClientRect().then(console.log);
    },

    do$$getComputedStyle(evt) {
      window.$$getComputedStyle(evt.target, ['backgroundColor', 'fontSize']).then(console.log);
    },

    onRemoveAll() {
      this.show = false;
    }

  }
});
// CONCATENATED MODULE: ./src/index/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(5);

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