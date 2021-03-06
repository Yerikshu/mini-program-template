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
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=template&id=2f5a8db4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('mp-navigation-bar',{attrs:{"loading":_vm.mpNavigationBar.loading,"show":_vm.mpNavigationBar.show.toString(),"animated":_vm.mpNavigationBar.animated.toString(),"color":_vm.mpNavigationBar.color,"background":_vm.mpNavigationBar.background,"back":true}},[_c('span',{attrs:{"slot":"center"},slot:"center"},[_vm._v("????????????")])]),_vm._v(" "),_c('div',{staticClass:"cnt"},[_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-badge")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-cells',{attrs:{"title":"?????????????????????????????????????????????????????????"}},[_c('mp-cell',{attrs:{"title":"????????????","link":true}},[_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticStyle:{"display":"inline-block","vertical-align":"middle","font-size":"17px"}},[_vm._v("????????????")]),_vm._v(" "),_c('mp-badge',{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{"ext-class":"blue"}})],1)])],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"????????????????????????????????????????????????????????????"}},[_c('mp-cell',[_c('div',{staticStyle:{"position":"relative","margin-right":"10px"},attrs:{"slot":"title"},slot:"title"},[_c('img',{staticStyle:{"width":"50px","height":"50px","display":"block"},attrs:{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAIAAAAErfB6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUU3QzMwMDU3NEZGMTFFNkIwQzZDNTI2QjgwMzcwMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU3QzMwMDY3NEZGMTFFNkIwQzZDNTI2QjgwMzcwMzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRTdDMzAwMzc0RkYxMUU2QjBDNkM1MjZCODAzNzAzNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRTdDMzAwNDc0RkYxMUU2QjBDNkM1MjZCODAzNzAzNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjSJHvsAAAU3SURBVHja7J3rThs7FEYphDshEBJAvP+jVREoCrdwv+l8hy19dcczJk2BFLLWr8ngeNJZ3tvbnpH6YzgcLsD3ZZFbgGBAMCAYEAwIBgQDghEMCAYEA4IBwYBgQDCCAcGAYEAwIBgQDAgGBCMYEAwIBgQDggHBgGAEA4IBwYBgQDAgGBCMYEAwIBgQDAgGBAOCAcEIBgQDggHBgGBAMCAYwYBgQDAgGBAMCAYEIxgQDAgGBMMsaH3alV5eXn4Nq8XFWTV+304K33qXX/WVBN/d3Z2ensbxwcHB8vJyU8vHx8eTkxPfmqOjo0K39/f3/j+u+/3+6urqdD9PF3U/5Z+Xon+R/l06WFtb6/V66Z8Gg0EcdDqddrv9/VN0est0N8v3Oo0DKSw0fnh4qL0EzECwM1VqJefm5qZJYW0Ex4FiaIaZEMH/s7Ky4nQ9YVCmCsuNp07OCH43NjY24uDp6SmtQSr5Of6kiPRoeLNx2h5mJjh10BTEPq/R4PZNc7bPKzkzAc9esDS0Wq3yzJrOqc66t7e35dnayT9fxmgQqFka66yDPzaIr66umiJYDuK8xoFGw5tztkeJk78Zj8fX19eaCypX16JlrmL9swXbWUzDlbrXKTeSsyJYDdSsqbGDsrIGG41GFbUeKOJvlsuk6D+YhvOZ1anY46AQxP66wt2CY5PEdiNkRXrd4XBYrsyJ4L+dhkOAEmwlkmzRPpR746Tm0Uoe9gScylPs+mS323XQt9tthbs3nuR48u0qInjKIK6EUaTiypaFG+dFmcPUUS7lcVJjqNfrVVK6PuqkqzzN0KToT93u8Mc0rF14Rz2cjwYPAp05Pz+PM7u7u01X39vbqyQABH/gNJwGcdOaJ93xyEdD1Ns6eH5+jppLHws1lNKyR8w8OG7NYEw1TMORhHM99q3R4Mcyztj5Zoh6KNdQvrrGBII/djVsZ17z5FsW5QheX1+PA9uSPD/4KzMPgmfz+MVWHIjpDmUe8ZW6LJ2AXQlPsfKpXSsv/P6sfroe5j2CbSVKJ31Mdyjz9kraMQIipaerKZfKLo91sLm5OcnPWFpaSofRFJHtoeCrI7g6DUuwbnSEsiumPEtfXFw4pdc+InRuVydTvEGRroknFPzySm1hOO8purLAzR8R5nc/xMejQ0dwelttaOq06SicMNun4yBNBgj+bRqWLUekT5ZXz6GwUm/7FuuvZUPHx8c/X6kskyxYl5jEcSSVPAEguBpw3lQq3Ca7vLy8rM2K8t3pdOL47OysqR9lC4+PSkGXfiz04CivLQUQXFMb5zuUhZTuDJzX26qtoge1UZjmxXD66mT+dZ3Z2tryVdRDUxyPx+N0JdbtdqmiFwq1cV4xNe1ApfNrPmHL7s7OTrycq5aDwSDeGlD21nyZxpy62t7ezq+ik8rbMTJiPa0e1Hjplejk6ZXU7r/8st8sBTdtSb65PVKotxWFMjEajUJSPADOi6n9/f3ar+tkv9/X5OpvFd4PjPGUZwIE1xQmk7xUpRLMggujQSF7eHioqdrlWEVJeS7Qz+j1eopU5eGCXSVzhfu//6Lujwl39b4osZGi1KqwTl/M/tOvB+pEWedrveDXWvjWlJ8sffTX57qKBgQDggHBCAYEA4IBwYBgQDAgGBCMYEAwIBgQDAgGBAOCEQwIBgQDggHBgGBAMCAYwYBgQDAgGBAMCAYEIxgQDAgGBAOCAcGAYAQDggHBgGBAMCAYEAwIRjAgGBAMCAYEA4IBwQgGBAOCAcGAYEAwIBjBgGBAMCAYPp//BBgAStflVPGsRa8AAAAASUVORK5CYII="}}),_vm._v(" "),_c('mp-badge',{staticStyle:{"position":"absolute","top":"-.4em","right":"-.4em"},attrs:{"content":"99+"}})],1),_vm._v(" "),_c('div',[_vm._v("???????????????")]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","color":"#888888"}},[_vm._v("????????????")])]),_vm._v(" "),_c('mp-cell',{attrs:{"link":true}},[_c('div',{staticStyle:{"display":"inline-block","vertical-align":"middle"}},[_vm._v("????????????")]),_vm._v(" "),_c('mp-badge',{staticStyle:{"margin-left":"5px"},attrs:{"content":"8"}})],1),_vm._v(" "),_c('mp-cell',{attrs:{"link":true}},[_c('div',{staticStyle:{"display":"inline-block","vertical-align":"middle"}},[_vm._v("????????????")]),_vm._v(" "),_c('mp-badge',{staticStyle:{"margin-left":"5px"},attrs:{"content":"New"}})],1)],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-gallery")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"click":function($event){_vm.mpGallery.show = true}}},[_vm._v("?????? mp-gallery")]),_vm._v(" "),_c('mp-gallery',{attrs:{"show":_vm.mpGallery.show.toString(),"img-urls":_vm.mpGallery.imgUrls,"delete":"true","hide-on-click":"true","current":"1"},on:{"change":function($event){return _vm.log('[mp-gallery] change', $event.detail)},"delete":function($event){return _vm.log('[mp-gallery] delete', $event.detail)},"hide":function($event){_vm.mpGallery.show = false}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-loading")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-loading',{attrs:{"type":"circle"}}),_vm._v(" "),_c('mp-loading',{attrs:{"duration":"900","ext-class":"demo0","type":"dot-gray","show":_vm.mpLoading.show,"animated":_vm.mpLoading.animated}}),_vm._v(" "),_c('mp-loading',{attrs:{"type":"dot-white","ext-class":"demo1"}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-icon")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{staticClass:"weui-grids"},_vm._l((_vm.mpIcon.list),function(item){return _c('div',{key:item.icon,staticClass:"weui-grid mp-icon-cnt"},[_c('mp-icon',{attrs:{"type":_vm.mpIcon.filled ? 'filled' : 'outline',"icon":item.icon,"color":item.color,"size":item.size}}),_vm._v(" "),_c('div',{staticClass:"weui-grid__label"},[_vm._v(_vm._s(item.icon))])],1)}),0),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("??????????????????")]),_vm._v(" "),_c('wx-switch',{on:{"change":_vm.onMpIconModeChange}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("??????????????????")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.mpIcon.filled = $event.detail.value}}})],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-cells/mp-cell")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-cells',{attrs:{"title":"?????????????????????"}},[_c('mp-cell',{attrs:{"value":"????????????","footer":"????????????"}}),_vm._v(" "),_c('mp-cell',[_c('div',[_vm._v("????????????????????? slot???")]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_vm._v("????????????")])]),_vm._v(" "),_c('mp-slideview',{attrs:{"show":"true","buttons":_vm.mpSlideView.buttons},on:{"buttontap":function($event){return _vm.log('[mp-slideview] buttontap', $event.detail)}}},[_c('mp-cell',{attrs:{"value":"??????????????????","footer":"????????????"}})],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"??????????????????????????????","footer":"??????????????????"}},[_c('mp-cell',{attrs:{"value":"????????????","footer":"????????????"}},[_c('img',{staticStyle:{"margin-right":"16px","vertical-align":"middle","width":"20px","height":"20px"},attrs:{"slot":"icon","src":_vm.mpCells.icon},slot:"icon"})]),_vm._v(" "),_c('mp-cell',{attrs:{"value":"????????????","footer":"????????????"}},[_c('img',{staticStyle:{"margin-right":"16px","vertical-align":"middle","width":"20px","height":"20px"},attrs:{"slot":"icon","src":_vm.mpCells.icon},slot:"icon"})])],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"?????????????????????"}},[_c('mp-cell',{attrs:{"hover":"true","value":"??? hover ?????????????????? URL","footer":"????????????"}},[_c('img',{staticStyle:{"margin-right":"16px","vertical-align":"middle","width":"20px","height":"20px"},attrs:{"slot":"title","src":_vm.mpCells.icon},slot:"title"})])],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-form/mp-form-page/mp-checkbox-group/mp-checkbox")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt form-cnt"},[_c('mp-toptips',{attrs:{"msg":_vm.mpForm.error,"type":"error","show":!!_vm.mpForm.error},on:{"hide":function($event){_vm.mpForm.error = ''}}}),_vm._v(" "),_c('mp-form-page',{attrs:{"title":"????????????","subtitle":"???????????????????????????????????????, ?????????????????????/????????????/????????????/??????????????????????????????????????????"}},[_c('mp-form',{attrs:{"id":"form","rules":_vm.mpForm.rules,"models":_vm.mpForm.formData}},[_c('mp-cells',{attrs:{"title":"???????????????"}},[_c('mp-checkbox-group',{attrs:{"prop":"radio","multi":"false"},on:{"change":_vm.onFomrRadioChange}},_vm._l((_vm.mpForm.radioItems),function(item,index){return _c('mp-checkbox',{key:index,attrs:{"label":item.name,"value":item.value,"checked":item.checked.toString()}})}),1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"???????????????"}},[_c('mp-checkbox-group',{attrs:{"prop":"checkbox","multi":"true"},on:{"change":_vm.onFormCheckBoxChange}},_vm._l((_vm.mpForm.checkboxItems),function(item,index){return _c('mp-checkbox',{key:index,attrs:{"label":item.name,"value":item.value,"checked":item.checked.toString()}})}),1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"??????","footer":"????????????????????????????????????"}},[_c('mp-cell',{attrs:{"prop":"name","title":"??????"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"data-field":"name","placeholder":"???????????????"},on:{"input":_vm.onFormInputChange}})],1),_vm._v(" "),_c('mp-cell',{attrs:{"prop":"qq","title":"qq"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"data-field":"qq","placeholder":"?????????qq"},on:{"input":_vm.onFormInputChange}})],1),_vm._v(" "),_c('mp-cell',{attrs:{"prop":"mobile","title":"?????????","ext-class":"weui-cell_vcode"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"data-field":"mobile","placeholder":"??????????????????"},on:{"input":_vm.onFormInputChange}}),_vm._v(" "),_c('wx-button',{staticClass:"weui-vcode-btn",attrs:{"slot":"footer","type":"default"},slot:"footer"},[_vm._v("???????????????")])],1),_vm._v(" "),_c('mp-cell',{attrs:{"prop":"date","title":"??????"}},[_c('wx-picker',{attrs:{"data-field":"date","mode":"date","value":_vm.mpForm.date,"start":"2015-09-01","end":"2017-09-01"},on:{"change":_vm.onFormDateChange}},[_c('div',{staticClass:"weui-input"},[_vm._v(_vm._s(_vm.mpForm.date))])])],1),_vm._v(" "),_c('mp-cell',{attrs:{"prop":"vcode","title":"?????????","ext-class":"weui-cell_vcode"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"data-field":"vcode","placeholder":"??????????????????"},on:{"input":_vm.onFormInputChange}}),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('wx-image',{staticClass:"weui-vcode-img",staticStyle:{"width":"108px"},attrs:{"src":"data:image/jpeg;base64,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"}})],1)],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"????????????????????????"}},[_c('mp-cell',{attrs:{"show-error":"true","prop":"idcard","title":"??????"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"data-field":"idcard","placeholder":"???????????????"},on:{"input":_vm.onFormInputChange}})],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"??????"}},[_c('mp-cell',{attrs:{"title":"????????????"}},[_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('wx-switch',{attrs:{"checked":"true"}})],1)])],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"?????????"}},[_c('mp-cell',{attrs:{"title":"????????????"}},[_c('wx-input',{staticClass:"weui-input",attrs:{"placeholder":"???????????????"}})],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"?????????"}},[_c('mp-cell',{attrs:{"has-header":"false","has-footer":"false"}},[_c('wx-textarea',{staticClass:"weui-textarea",staticStyle:{"height":"3.3em"},attrs:{"placeholder":"???????????????"}}),_vm._v(" "),_c('div',{staticClass:"weui-textarea-counter"},[_vm._v("0/200")])],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"??????"}},[_c('mp-cell',{attrs:{"ext-class":"weui-cell_select weui-cell_select-before"}},[_c('div',{staticStyle:{"width":"105px"},attrs:{"slot":"title"},slot:"title"},[_c('wx-picker',{attrs:{"value":_vm.mpForm.countryCodeIndex,"range":_vm.mpForm.countryCodes},on:{"change":function($event){_vm.mpForm.countryCodeIndex = $event.detail.value}}},[_c('div',{staticClass:"weui-select"},[_vm._v(_vm._s(_vm.mpForm.countryCodes[_vm.mpForm.countryCodeIndex]))])])],1),_vm._v(" "),_c('wx-input',{staticClass:"weui-input",attrs:{"placeholder":"???????????????"}})],1)],1),_vm._v(" "),_c('mp-cells',{attrs:{"title":"??????"}},[_c('mp-cell',{attrs:{"has-header":"false","ext-class":"weui-cell_select"}},[_c('wx-picker',{attrs:{"value":_vm.mpForm.accountIndex,"range":_vm.mpForm.accounts},on:{"change":function($event){_vm.mpForm.accountIndex = $event.detail.value}}},[_c('div',{staticClass:"weui-select"},[_vm._v(_vm._s(_vm.mpForm.accounts[_vm.mpForm.accountIndex]))])])],1),_vm._v(" "),_c('mp-cell',{attrs:{"ext-class":"weui-cell_select weui-cell_select-after"}},[_c('div',{staticClass:"weui-label",attrs:{"slot":"title"},slot:"title"},[_vm._v("??????/??????")]),_vm._v(" "),_c('wx-picker',{attrs:{"value":_vm.mpForm.countryIndex,"range":_vm.mpForm.countries},on:{"change":function($event){_vm.mpForm.countryIndex = $event.detail.value}}},[_c('div',{staticClass:"weui-select"},[_vm._v(_vm._s(_vm.mpForm.countries[_vm.mpForm.countryIndex]))])])],1)],1)],1),_vm._v(" "),_c('div',{attrs:{"slot":"tips"},slot:"tips"},[_c('label',{staticClass:"weui-agree"},[_c('input',{staticClass:"weui-agree__checkbox-check",attrs:{"type":"checkbox","name":"agree"},on:{"change":function($event){_vm.mpForm.isAgree = !!$event.currentTarget.checked}}}),_vm._v(" "),_c('wx-text',{staticClass:"weui-agree__checkbox",class:_vm.mpForm.isAgree ? 'checked' : ''}),_vm._v(" "),_c('div',{staticClass:"weui-agree__text"},[_vm._v("???????????????"),_c('a',{attrs:{"href":""}},[_vm._v("??????????????????")])])],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"button"},slot:"button"},[_c('wx-button',{staticClass:"weui-btn",attrs:{"type":"primary"},on:{"tap":_vm.doSubmitForm}},[_vm._v("??????")])],1)],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-slideview")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt mp-sliderview-cnt"},[_c('div',{staticClass:"mp-slideview-1"},[_c('mp-slideview',{attrs:{"show":"true","buttons":_vm.mpSlideView.buttons},on:{"buttontap":function($event){return _vm.log('[mp-slideview] buttontap', $event.detail)}}},[_c('mp-cell',{attrs:{"value":"??????????????????","footer":"????????????"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"mp-slideview-2"},[_c('mp-slideview',{attrs:{"buttons":_vm.mpSlideView.buttons,"icon":"true"},on:{"buttontap":function($event){return _vm.log('[mp-slideview] buttontap', $event.detail)}}},[_c('div',{staticClass:"weui-slidecell"},[_vm._v("\n              ???????????????????????????Button??? \n            ")])])],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-uploader")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-uploader',{attrs:{"select":_vm.onSelectFile,"upload":_vm.onUplaodFile,"files":_vm.mpUploader.files,"max-count":"6","title":"????????????","tips":"??????????????????"},on:{"select":function($event){return _vm.log('[mp-uploader] select', $event.detail)},"delete":function($event){return _vm.log('[mp-uploader] delete', $event.detail)},"success":function($event){return _vm.log('[mp-uploader] success', $event.detail)},"fail":function($event){return _vm.log('[mp-uploader] fail', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-dialog")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"click":function($event){_vm.mpDialog.dialogShow = true}}},[_vm._v("??????????????????")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"click":function($event){_vm.mpDialog.showOneButtonDialog = true}}},[_vm._v("??????????????????")]),_vm._v(" "),_c('mp-dialog',{attrs:{"title":"test","show":_vm.mpDialog.dialogShow,"buttons":_vm.mpDialog.buttons},on:{"buttontap":function($event){_vm.mpDialog.dialogShow = false}}},[_c('view',[_vm._v("test content")])]),_vm._v(" "),_c('mp-dialog',{attrs:{"title":"test1","show":_vm.mpDialog.showOneButtonDialog,"buttons":_vm.mpDialog.oneButton},on:{"buttontap":function($event){_vm.mpDialog.showOneButtonDialog = false}}},[_c('view',[_vm._v("test content1")])])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-msg")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-msg',{attrs:{"type":"success","title":"????????????"}},[_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_vm._v("????????????????????????????????????????????????????????????????????????????????????????????????")]),_vm._v(" "),_c('div',{attrs:{"slot":"extend"},slot:"extend"},[_c('div',[_vm._v("1. ??????1")]),_vm._v(" "),_c('div',[_vm._v("2. ??????2")])]),_vm._v(" "),_c('div',{attrs:{"slot":"handle"},slot:"handle"},[_c('wx-button',{staticClass:"wx-button",attrs:{"type":"primary"}},[_vm._v("????????????")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"}},[_vm._v("????????????")])],1),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"weui-footer__links"},[_c('a',{staticClass:"weui-footer__link",attrs:{"href":""}},[_vm._v("??????????????????")])])])])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-toptips")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-toptips',{attrs:{"msg":_vm.mpToptips.message,"type":_vm.mpToptips.type,"show":_vm.mpToptips.showTopTips,"delay":"3000"},on:{"hide":function($event){_vm.mpToptips.showTopTips = false}}}),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mpToptips.value),expression:"mpToptips.value"}],staticClass:"weui-input",attrs:{"placeholder":"????????????"},domProps:{"value":(_vm.mpToptips.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.mpToptips, "value", $event.target.value)}}})]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button",attrs:{"type":"default"},on:{"tap":_vm.showMpToptips}},[_vm._v("??????")])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-half-screen-dialog")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{staticClass:"opr-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button",attrs:{"type":"primary"},on:{"tap":function($event){_vm.mpHalfScreenDialog.typeF = true}}},[_vm._v("?????????")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",attrs:{"type":"primary"},on:{"tap":function($event){_vm.mpHalfScreenDialog.typeS = true}}},[_vm._v("?????????")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",attrs:{"type":"primary"},on:{"tap":function($event){_vm.mpHalfScreenDialog.typeT = true}}},[_vm._v("?????????")])],1),_vm._v(" "),_c('mp-half-screen-dialog',{attrs:{"show":_vm.mpHalfScreenDialog.typeF},on:{"close":function($event){_vm.mpHalfScreenDialog.typeF = false}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v("????????????A")]),_vm._v(" "),_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_vm._v("????????????????????????")]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('wx-button',{staticClass:"weui-btn weui-btn_default",attrs:{"type":"default"}},[_vm._v("??????A")]),_vm._v(" "),_c('wx-button',{staticClass:"weui-btn weui-btn_primary",attrs:{"type":"primary"}},[_vm._v("??????B")])],1)]),_vm._v(" "),_c('mp-half-screen-dialog',{attrs:{"show":_vm.mpHalfScreenDialog.typeS,"maskClosable":false,"title":"????????????B","sub-title":"????????????B????????????","desc":"????????????????????????????????????????????????","tips":"????????????????????????????????????????????????","buttons":_vm.mpHalfScreenDialog.buttons},on:{"buttontap":function($event){return _vm.log('[mp-half-screen-dialog] buttontap', $event.detail)},"close":function($event){_vm.mpHalfScreenDialog.typeS = false}}}),_vm._v(" "),_c('mp-half-screen-dialog',{attrs:{"show":_vm.mpHalfScreenDialog.typeT,"closabled":"false"},on:{"close":function($event){_vm.mpHalfScreenDialog.typeT = false}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v("????????????A")]),_vm._v(" "),_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_vm._v("????????????????????????")]),_vm._v(" "),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('wx-button',{staticClass:"weui-btn weui-btn_default",attrs:{"type":"default"}},[_vm._v("??????A")]),_vm._v(" "),_c('wx-button',{staticClass:"weui-btn weui-btn_primary",attrs:{"type":"primary"}},[_vm._v("??????B")])],1)])],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-actionsheet")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('wx-button',{staticClass:"wx-button opr-button",on:{"tap":function($event){_vm.mpActionSheet.show = true}}},[_vm._v("?????? ActionSheet")]),_vm._v(" "),_c('mp-actionsheet',{attrs:{"show":_vm.mpActionSheet.show,"actions":_vm.mpActionSheet.groups,"title":"???????????????????????????????????????????????????"},on:{"close":function($event){_vm.mpActionSheet.show = false},"actiontap":function($event){return _vm.log('[mp-actionsheet] action tap', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-navigation-bar")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_c('div',{staticClass:"opr-label"},[_vm._v("?????? loading")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.mpNavigationBar.loading = $event.detail.value}}})],1),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",on:{"tap":function($event){_vm.mpNavigationBar.color = '#07C160'}}},[_vm._v("??????????????????")]),_vm._v(" "),_c('wx-button',{staticClass:"wx-button opr-button",on:{"tap":function($event){_vm.mpNavigationBar.background = '#ededed'}}},[_vm._v("??????????????????")]),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("??????/??????")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.mpNavigationBar.show = $event.detail.value}}})],1),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("??????")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.mpNavigationBar.animated = $event.detail.value}}})],1)],1)])]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-tabbar")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[(_vm.mpTabbar.show)?_c('mp-tabbar',{staticStyle:{"position":"fixed","bottom":"0","width":"100%","left":"0","right":"0","z-index":"100"},attrs:{"list":_vm.mpTabbar.list},on:{"change":function($event){return _vm.log('[mp-tabbar] change', $event.detail)}}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"opr-cnt"},[_c('div',{staticClass:"opr-label"},[_vm._v("??????/??????")]),_vm._v(" "),_c('wx-switch',{on:{"change":function($event){_vm.mpTabbar.show = $event.detail.value}}})],1)],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item",staticStyle:{"padding-bottom":"150px"}},[_c('div',{staticClass:"title"},[_vm._v("mp-searchbar")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt"},[_c('mp-searchbar',{attrs:{"search":_vm.onSearch},on:{"selectresult":function($event){return _vm.log('[mp-searchbar] selectresult', $event.detail)}}})],1)]),_vm._v(" "),_c('wx-view',{staticClass:"item"},[_c('div',{staticClass:"title"},[_vm._v("mp-grids")]),_vm._v(" "),_c('div',{staticClass:"comp-cnt",staticStyle:{"padding-bottom":"60px"}},[_c('mp-grids',{attrs:{"grids":_vm.mpGrids.grids},on:{"gridtap":function($event){return _vm.log('[mp-grids] tap', $event.detail)}}})],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/App.vue?vue&type=template&id=2f5a8db4&

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
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',

  data() {
    const tabbarIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC';
    return {
      mpGallery: {
        show: false,
        imgUrls: ['https://res.wx.qq.com/op_res/0TZreUFL8sWsS1cFx5_f7MF5aY767_cWsd9JiKdHxL9Ktu6O6JLAJwvF-jLVxpB3', 'https://res.wx.qq.com/op_res/0TZreUFL8sWsS1cFx5_f7MF5aY767_cWsd9JiKdHxL9Ktu6O6JLAJwvF-jLVxpB3', 'https://res.wx.qq.com/op_res/0TZreUFL8sWsS1cFx5_f7MF5aY767_cWsd9JiKdHxL9Ktu6O6JLAJwvF-jLVxpB3']
      },
      mpLoading: {
        show: true,
        animated: true
      },
      mpIcon: {
        filled: undefined,
        list: [{
          "icon": "add-friends",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "add",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "add2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "album",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "arrow",
          "color": "rgba(0, 0, 0, .9)",
          "size": 12,
          "name": ""
        }, {
          "icon": "at",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "back",
          "color": "rgba(0, 0, 0, .9)",
          "size": 12,
          "name": ""
        }, {
          "icon": "back2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "bellring-off",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "bellring-on",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "camera",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "cellphone",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "clip",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "close",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "close2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "comment",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "contacts",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "copy",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "delete-on",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "delete",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "discover",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "display",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "done",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "done2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "download",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "email",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "error",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "eyes-off",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "eyes-on",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "folder",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "group-detail",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "help",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "home",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "imac",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "info",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "keyboard",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "like",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "link",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "location",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "lock",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "max-window",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "me",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "mike",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "mike2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "mobile-contacts",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "more",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "more2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "mosaic",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "music-off",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "music",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "note",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "pad",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "pause",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "pencil",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "photo-wall",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "play",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "play2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "previous",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "previous2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "qr-code",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "refresh",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "report-problem",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "search",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "sending",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "setting",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "share",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "shop",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "star",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "sticker",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "tag",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "text",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "time",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "transfer-text",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "transfer2",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "translate",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "tv",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "video-call",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "voice",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "volume-down",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "volume-off",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }, {
          "icon": "volume-up",
          "color": "rgba(0, 0, 0, .9)",
          "size": 25,
          "name": ""
        }]
      },
      mpCells: {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
      },
      mpForm: {
        error: '',
        radioItems: [{
          name: 'cell standard',
          value: '0',
          checked: true
        }, {
          name: 'cell standard',
          value: '1',
          checked: false
        }],
        checkboxItems: [{
          name: 'standard is dealt for u.',
          value: '0',
          checked: true
        }, {
          name: 'standard is dealicient for u.',
          value: '1',
          checked: false
        }],
        items: [{
          name: 'USA',
          value: '??????'
        }, {
          name: 'CHN',
          value: '??????',
          checked: 'true'
        }, {
          name: 'BRA',
          value: '??????'
        }, {
          name: 'JPN',
          value: '??????'
        }, {
          name: 'ENG',
          value: '??????'
        }, {
          name: 'TUR',
          value: '??????'
        }],
        date: '2016-09-01',
        time: '12:01',
        countryCodes: ['+86', '+80', '+84', '+87'],
        countryCodeIndex: 0,
        countries: ['??????', '??????', '??????'],
        countryIndex: 0,
        accounts: ['?????????', 'QQ', 'Email'],
        accountIndex: 0,
        isAgree: false,
        formData: {},
        rules: [{
          name: 'radio',
          rules: {
            required: false,
            message: '????????????????????????'
          }
        }, {
          name: 'checkbox',
          rules: {
            required: true,
            message: '????????????????????????'
          }
        }, {
          name: 'name',
          rules: {
            required: true,
            message: '???????????????'
          }
        }, {
          name: 'qq',
          rules: {
            required: true,
            message: 'qq??????'
          }
        }, {
          name: 'mobile',
          rules: [{
            required: true,
            message: 'mobile??????'
          }, {
            mobile: true,
            message: 'mobile ????????????'
          }]
        }, {
          name: 'vcode',
          rules: {
            required: true,
            message: '???????????????'
          }
        }, {
          name: 'idcard',
          rules: {
            validator(rule, value) {
              if (!value || value.length !== 18) return 'idcard ???????????????';
              return '';
            }

          }
        }]
      },
      mpSlideView: {
        buttons: [{
          text: '??????',
          src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTcuNjc4IDExLjU5MWEzLjQ4MyAzLjQ4MyAwIDAgMC00Ljk2NC00Ljg4N2MtLjE3Ny4xNzYtLjQuMzkxLS42NzIuNjQ4bC0uNzU0LjcxLS43NTUtLjcxYTMyLjMzNyAzMi4zMzcgMCAwIDEtLjY3MS0uNjQ4IDMuNDgzIDMuNDgzIDAgMCAwLTQuOTI3IDAgMy40ODEgMy40ODEgMCAwIDAtLjA1IDQuODc2bDYuNDAzIDYuNDAyIDYuMzktNi4zOXpNNC4xNTggNS45MjZhNC41ODMgNC41ODMgMCAwIDEgNi40ODEgMGMuMTY4LjE2Ny4zODQuMzc2LjY0OS42MjUuMjY0LS4yNS40OC0uNDU4LjY0OC0uNjI1YTQuNTgzIDQuNTgzIDAgMCAxIDYuNTMxIDYuNDMxbC02LjUzMSA2LjUzMmEuOTE3LjkxNyAwIDAgMS0xLjI5NyAwbC02LjUzMS02LjUzMWE0LjU4NCA0LjU4NCAwIDAgMSAuMDUtNi40MzJ6Jy8+PC9zdmc+',
          data: {
            test: 'a'
          }
        }, {
          text: '??????',
          extClass: 'test',
          src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMTQuNjEzIDEzLjA5bDMuNjEzLTMuNTIxLTQuOTkzLS43MjZMMTEgNC4zMiA4Ljc2NyA4Ljg0M2wtNC45OTMuNzI2IDMuNjEzIDMuNTIyLS44NTMgNC45NzJMMTEgMTUuNzE2bDQuNDY2IDIuMzQ3LS44NTMtNC45NzJ6TTExIDE2Ljk1OUw2LjcxNyAxOS4yMWEuOTE3LjkxNyAwIDAgMS0xLjMzLS45NjZsLjgxOC00Ljc3LTMuNDY1LTMuMzc3YS45MTcuOTE3IDAgMCAxIC41MDgtMS41NjNsNC43ODktLjY5NiAyLjE0MS00LjM0YS45MTcuOTE3IDAgMCAxIDEuNjQ0IDBsMi4xNDEgNC4zNCA0Ljc4OS42OTZhLjkxNy45MTcgMCAwIDEgLjUwOCAxLjU2M2wtMy40NjUgMy4zNzguODE4IDQuNzY5YS45MTcuOTE3IDAgMCAxLTEuMzMuOTY2TDExIDE2Ljk1OHonLz48L3N2Zz4=',
          data: {
            test: 'b'
          }
        }, {
          type: 'warn',
          text: '??????',
          extClass: 'test',
          src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMicgaGVpZ2h0PScyMicgdmlld0JveD0nMCAwIDIyIDIyJz4gPHBhdGggZmlsbC1vcGFjaXR5PScuOScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNNi4yMSA1Ljg2N2wuNzQ0IDEyLjUxYy4wMjMuMzg3LjM0NC42OS43MzIuNjloNi42MjhhLjczMy43MzMgMCAwIDAgLjczMi0uNjlsLjc0NS0xMi41MUg2LjIwOXptMTAuNjgzIDBsLS43NDkgMTIuNTc1YTEuODMzIDEuODMzIDAgMCAxLTEuODMgMS43MjVINy42ODZjLS45NyAwLTEuNzczLS43NTYtMS44My0xLjcyNUw1LjEwNyA1Ljg2N0gzLjIwOHYtLjY0MmMwLS4yNTMuMjA2LS40NTguNDU5LS40NThoMTQuNjY2Yy4yNTMgMCAuNDU5LjIwNS40NTkuNDU4di42NDJoLTEuOXptLTQuMDYtMy4xMTdjLjI1MyAwIC40NTkuMjA1LjQ1OS40NTh2LjY0Mkg4LjcwOHYtLjY0MmMwLS4yNTMuMjA2LS40NTguNDU5LS40NThoMy42NjZ6bS00LjEyNSA1LjVoMS4xbC40NTkgOC4yNWgtMS4xbC0uNDU5LTguMjV6bTMuNDg0IDBoMS4xbC0uNDU5IDguMjVoLTEuMWwuNDU5LTguMjV6Jy8+PC9zdmc+',
          data: {
            test: 'c'
          }
        }]
      },
      mpUploader: {
        files: [{
          url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg'
        }, {
          url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
          loading: true
        }, {
          url: 'https://i.loli.net/2019/07/27/5d3c143497e6d38917.jpg',
          error: true
        }]
      },
      mpDialog: {
        dialogShow: false,
        showOneButtonDialog: false,
        buttons: [{
          text: '??????'
        }, {
          text: '??????'
        }],
        oneButton: [{
          text: '??????'
        }] // ???????????? json ????????????????????????????????????????????????????????? Web ??????

      },
      mpToptips: {
        value: '',
        showTopTips: false,
        message: '???????????????',
        type: 'info'
      },
      mpHalfScreenDialog: {
        typeF: false,
        typeS: false,
        typeT: false,
        buttons: [{
          type: 'default',
          className: '',
          text: '????????????',
          value: 0
        }, {
          type: 'primary',
          className: '',
          text: '?????????',
          value: 1
        }]
      },
      mpActionSheet: {
        show: false,
        groups: [{
          text: '????????????',
          value: 1
        }, {
          text: '????????????',
          value: 2
        }, {
          text: '????????????',
          type: 'warn',
          value: 3
        }]
      },
      mpNavigationBar: {
        loading: false,
        color: '#000',
        background: '#f8f8f8',
        show: false,
        animated: false
      },
      mpTabbar: {
        show: false,
        list: [{
          text: '??????',
          iconPath: tabbarIcon,
          selectedIconPath: tabbarIcon,
          badge: '8'
        }, {
          text: '?????????',
          iconPath: tabbarIcon,
          selectedIconPath: tabbarIcon
        }, {
          text: '??????',
          iconPath: tabbarIcon,
          selectedIconPath: tabbarIcon,
          dot: true
        }, {
          text: '???',
          iconPath: tabbarIcon,
          selectedIconPath: tabbarIcon
        }]
      },
      mpSearchbar: {
        i: 0
      },
      mpGrids: {
        grids: [{
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }, {
          imgUrl: tabbarIcon,
          url: '',
          text: 'Grid'
        }]
      }
    };
  },

  mounted() {
    setInterval(() => this.mpLoading.show = !this.mpLoading.show, 2000);
  },

  methods: {
    log(...args) {
      console.log.apply(console, args);
    },

    onMpIconModeChange(evt) {
      const colorLight = 'rgba(0, 0, 0, .9)';
      const colorDark = 'rgba(255, 255, 255, .8)';
      const color = evt.detail.value ? colorDark : colorLight;
      this.mpIcon.list.forEach(item => item.color = color);
    },

    onFomrRadioChange(evt) {
      console.log('[mp-checkbox] change', evt.detail);
      const radioItems = this.mpForm.radioItems;

      for (let i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value === evt.detail.value;
      }

      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // ??????

      this.mpForm.formData.radio = evt.detail.value;
    },

    onFormCheckBoxChange(evt) {
      console.log('[mp-checkbox] change', evt.detail);
      const checkboxItems = this.mpForm.checkboxItems;
      const values = evt.detail.value;

      for (let i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;

        for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }

      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // ??????

      this.mpForm.formData.checkbox = evt.detail.value;
    },

    onFormInputChange(evt) {
      const {
        field
      } = evt.currentTarget.dataset;
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // ??????

      this.mpForm.formData[field] = evt.detail.value;
    },

    onFormDateChange(evt) {
      const date = evt.detail.value;
      this.mpForm.date = date;
      this.mpForm.formData = Object.assign({}, this.mpForm.formData); // ??????

      this.mpForm.formData.date = evt.detail.value;
    },

    doSubmitForm() {
      document.querySelector('#form').$$wxCustomComponent.validate((valid, errors) => {
        if (!valid) {
          console.log('[mp-form] invalid', valid, errors);
          const firstError = Object.keys(errors);

          if (firstError.length) {
            this.mpForm.error = errors[firstError[0]].message;
          }
        } else {
          console.log('[mp-form] valid success', this.mpForm.formData);
        }
      });
    },

    onSelectFile(files) {
      console.log('select files', files); // ??????false??????????????????????????????
    },

    onUplaodFile(files) {
      console.log('upload files', files); // ????????????????????????????????????promise

      if (!this._uploadError) {
        this._uploadError = true;
        return new Promise(resolve => setTimeout(() => resolve({
          urls: files.tempFilePaths
        }), 1000));
      } else {
        this._uploadError = false;
        return new Promise((resolve, reject) => setTimeout(() => reject(new Error('some error')), 1000));
      }
    },

    showMpToptips() {
      if (this.mpToptips.value) {
        this.mpToptips.showTopTips = true;
        this.mpToptips.message = this.mpToptips.value;
        this.mpToptips.type = 'success';
      } else {
        this.mpToptips.showTopTips = true;
        this.mpToptips.message = '????????????';
        this.mpToptips.type = 'error';
      }
    },

    onSearch() {
      return new Promise(resolve => {
        if (this.mpSearchbar.i % 2 === 0) {
          setTimeout(() => resolve([{
            text: '????????????',
            value: 1
          }, {
            text: '????????????2',
            value: 2
          }]), 200);
        } else {
          setTimeout(() => resolve([]), 200);
        }

        this.mpSearchbar.i = this.mpSearchbar.i + 1;
      });
    }

  }
});
// CONCATENATED MODULE: ./src/index/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/kbone-tool/dist/index.min.js
var index_min = __webpack_require__(3);

// CONCATENATED MODULE: ./src/index/main.mp.js


 // relations ???????????????????????????????????????????????????

index_min["weui"].useForm();
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

/******/ })["default"];}