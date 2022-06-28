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
/******/ 		2: 0
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
/******/ 	deferredModules.push([21,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/page-container/App.vue?vue&type=template&id=e0066b34&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"title"},[_vm._v("弹出位置")]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('wx-button',{staticClass:"btn",attrs:{"data-position":"right"},on:{"click":_vm.doPopup}},[_vm._v("右侧弹出")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-position":"top"},on:{"click":_vm.doPopup}},[_vm._v("顶部弹出")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-position":"bottom"},on:{"click":_vm.doPopup}},[_vm._v("底部弹出")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-position":"center"},on:{"click":_vm.doPopup}},[_vm._v("中央弹出")])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("弹窗圆角")]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('wx-button',{staticClass:"btn",on:{"click":_vm.changeRound}},[_vm._v("设置"+_vm._s(_vm.round ? '直角' : '圆角'))])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("遮罩层")]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('wx-button',{staticClass:"btn",on:{"click":_vm.changeOverlay}},[_vm._v("设置"+_vm._s(_vm.overlay ? '无' : '有')+"遮罩")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-type":"black"},on:{"click":_vm.changeOverlayStyle}},[_vm._v("黑色半透明遮罩")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-type":"white"},on:{"click":_vm.changeOverlayStyle}},[_vm._v("白色半透明遮罩")]),_vm._v(" "),_c('wx-button',{staticClass:"btn",attrs:{"data-type":"blur"},on:{"click":_vm.changeOverlayStyle}},[_vm._v("模糊遮罩")])],1),_vm._v(" "),_c('wx-page-container',{attrs:{"show":_vm.show,"round":_vm.round,"overlay":_vm.overlay,"duration":"300","position":_vm.position,"close-on-slide-down":"false","custom-style":_vm.customStyle,"overlay-style":_vm.overlayStyle},on:{"beforeenter":_vm.onBeforeEnter,"enter":_vm.onEnter,"afterenter":_vm.onAfterEnter,"beforeleave":_vm.onBeforeLeave,"leave":_vm.onLeave,"afterleave":_vm.onAfterLeave,"clickoverlay":_vm.onClickOverlay}},[_c('div',{staticClass:"detail-page"},[_c('wx-button',{attrs:{"type":"primary"},on:{"click":_vm.doExit}},[_vm._v("退出")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/page-container/App.vue?vue&type=template&id=e0066b34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page-container/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      show: false,
      position: 'right',
      round: false,
      overlay: true,
      customStyle: '',
      overlayStyle: ''
    };
  },
  methods: {
    doPopup(evt) {
      const position = evt.currentTarget.dataset.position;
      let customStyle = '';
      switch (position) {
        case 'top':
        case 'bottom':
          customStyle = 'height: 30%;';
          break;
        case 'right':
          break;
      }
      this.position = position;
      this.show = true;
      this.customStyle = customStyle;
    },

    changeRound() {
      this.round = !this.round;
    },

    changeOverlay() {
      this.overlay = !this.overlay;
      this.show = true;
    },

    changeOverlayStyle(evt) {
      let overlayStyle = '';
      const type = evt.currentTarget.dataset.type;
      switch (type) {
        case 'black':
          overlayStyle = 'background-color: rgba(0, 0, 0, 0.7)';
          break;
        case 'white':
          overlayStyle = 'background-color: rgba(255, 255, 255, 0.7)';
          break;
        case 'blur':
          overlayStyle = 'background-color: rgba(0, 0, 0, 0.7); filter: blur(4px);';
      }
      this.overlayStyle = overlayStyle;
      this.show = true;
    },

    doExit() {
      this.show = false;
    },

    onBeforeEnter(evt) {
      console.log('beforeenter', evt);
    },

    onEnter(evt) {
      console.log('enter', evt);
    },

    onAfterEnter(evt) {
      this.show = true;
      console.log('afterenter', evt);
    },

    onBeforeLeave(evt) {
      console.log('beforeleave', evt);
    },

    onLeave(evt) {
      console.log('leave', evt);
    },

    onAfterLeave(evt) {
      this.show = false;
      console.log('afterleave', evt);
    },

    onClickOverlay(evt) {
      console.log('clickoverlay', evt);
    }
  }
});
// CONCATENATED MODULE: ./src/page-container/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_container_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/page-container/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/page-container/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_container_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/page-container/main.mp.js



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