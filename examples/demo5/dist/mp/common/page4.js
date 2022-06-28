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
/******/ 		7: 0
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
/******/ 	deferredModules.push([35,1,0,9,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AAA_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AAA_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AAA_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BBB_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BBB_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BBB_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/App.vue?vue&type=template&id=c75689f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cnt"},[_c('Header'),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('Footer')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/page4/App.vue?vue&type=template&id=c75689f0&

// EXTERNAL MODULE: ./src/common/Header.vue + 4 modules
var Header = __webpack_require__(2);

// EXTERNAL MODULE: ./src/common/Footer.vue + 4 modules
var Footer = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/App.vue?vue&type=script&lang=js&
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
    Header: Header["a" /* default */],
    Footer: Footer["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/page4/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var page4_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page4/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/page4/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page4_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/Layout.vue?vue&type=template&id=4a36f060&
var Layoutvue_type_template_id_4a36f060_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"tabbar"},[_c('li',[_c('router-link',{staticClass:"link",attrs:{"to":"/spa"}},[_vm._v("normal")])],1),_vm._v(" "),_c('li',[_c('router-link',{staticClass:"link",attrs:{"to":"/spa/a"}},[_vm._v("aaa")])],1),_vm._v(" "),_c('li',[_c('router-link',{staticClass:"link",attrs:{"to":"/spa/b"}},[_vm._v("bbb")])],1)]),_vm._v(" "),_c('router-view')],1)}
var Layoutvue_type_template_id_4a36f060_staticRenderFns = []


// CONCATENATED MODULE: ./src/page4/components/Layout.vue?vue&type=template&id=4a36f060&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/Layout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Layoutvue_type_script_lang_js_ = ({
  name: 'Layout'
});
// CONCATENATED MODULE: ./src/page4/components/Layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Layoutvue_type_script_lang_js_ = (Layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page4/components/Layout.vue?vue&type=style&index=0&lang=css&
var Layoutvue_type_style_index_0_lang_css_ = __webpack_require__(30);

// CONCATENATED MODULE: ./src/page4/components/Layout.vue






/* normalize component */

var Layout_component = Object(componentNormalizer["a" /* default */])(
  components_Layoutvue_type_script_lang_js_,
  Layoutvue_type_template_id_4a36f060_render,
  Layoutvue_type_template_id_4a36f060_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Layout = (Layout_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/Normal.vue?vue&type=template&id=7322b06c&
var Normalvue_type_template_id_7322b06c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cnt"},[_c('p',[_vm._v("I am normal")]),_vm._v(" "),_c('p',[_vm._v("route: "+_vm._s(_vm.route))])])}
var Normalvue_type_template_id_7322b06c_staticRenderFns = []


// CONCATENATED MODULE: ./src/page4/components/Normal.vue?vue&type=template&id=7322b06c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/Normal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Normalvue_type_script_lang_js_ = ({
  name: 'Normal',
  computed: {
    route() {
      return this.$route.path;
    }
  }
});
// CONCATENATED MODULE: ./src/page4/components/Normal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Normalvue_type_script_lang_js_ = (Normalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page4/components/Normal.vue?vue&type=style&index=0&lang=css&
var Normalvue_type_style_index_0_lang_css_ = __webpack_require__(31);

// CONCATENATED MODULE: ./src/page4/components/Normal.vue






/* normalize component */

var Normal_component = Object(componentNormalizer["a" /* default */])(
  components_Normalvue_type_script_lang_js_,
  Normalvue_type_template_id_7322b06c_render,
  Normalvue_type_template_id_7322b06c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Normal = (Normal_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/AAA.vue?vue&type=template&id=7a322c2e&
var AAAvue_type_template_id_7a322c2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cnt"},[_c('p',[_vm._v("I am aaa")]),_vm._v(" "),_c('p',[_vm._v("route: "+_vm._s(_vm.route))])])}
var AAAvue_type_template_id_7a322c2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/page4/components/AAA.vue?vue&type=template&id=7a322c2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/AAA.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var AAAvue_type_script_lang_js_ = ({
  name: 'AAA',
  computed: {
    route() {
      return this.$route.path;
    }
  }
});
// CONCATENATED MODULE: ./src/page4/components/AAA.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AAAvue_type_script_lang_js_ = (AAAvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page4/components/AAA.vue?vue&type=style&index=0&lang=css&
var AAAvue_type_style_index_0_lang_css_ = __webpack_require__(32);

// CONCATENATED MODULE: ./src/page4/components/AAA.vue






/* normalize component */

var AAA_component = Object(componentNormalizer["a" /* default */])(
  components_AAAvue_type_script_lang_js_,
  AAAvue_type_template_id_7a322c2e_render,
  AAAvue_type_template_id_7a322c2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AAA = (AAA_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/BBB.vue?vue&type=template&id=23d15de6&
var BBBvue_type_template_id_23d15de6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cnt"},[_c('p',[_vm._v("I am bbb")]),_vm._v(" "),_c('p',[_vm._v("route: "+_vm._s(_vm.route))])])}
var BBBvue_type_template_id_23d15de6_staticRenderFns = []


// CONCATENATED MODULE: ./src/page4/components/BBB.vue?vue&type=template&id=23d15de6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page4/components/BBB.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var BBBvue_type_script_lang_js_ = ({
  name: 'BBB',
  computed: {
    route() {
      return this.$route.path;
    }
  }
});
// CONCATENATED MODULE: ./src/page4/components/BBB.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BBBvue_type_script_lang_js_ = (BBBvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page4/components/BBB.vue?vue&type=style&index=0&lang=css&
var BBBvue_type_style_index_0_lang_css_ = __webpack_require__(33);

// CONCATENATED MODULE: ./src/page4/components/BBB.vue






/* normalize component */

var BBB_component = Object(componentNormalizer["a" /* default */])(
  components_BBBvue_type_script_lang_js_,
  BBBvue_type_template_id_23d15de6_render,
  BBBvue_type_template_id_23d15de6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BBB = (BBB_component.exports);
// CONCATENATED MODULE: ./src/page4/main.mp.js








function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

  const router = new vue_router_esm["a" /* default */]({
    mode: 'history', // 是否使用 history api
    routes: [{
      path: '/spa',
      component: Layout,
      children: [{ path: '', component: Normal }, { path: 'a', component: AAA }, { path: 'b', component: BBB }]
    }]
  });

  return new vue_runtime_esm["a" /* default */]({
    el: '#app',
    router,
    render: h => h(App)
  });
}

/***/ })
/******/ ])["default"];}