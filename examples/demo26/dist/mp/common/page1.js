module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;var SVGElement = function SVGElement() {};window["createApp"] =
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
/******/ 	deferredModules.push([16,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ref_11_0_App_vue_vue_type_style_index_0_id_add02136_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ref_11_0_App_vue_vue_type_style_index_0_id_add02136_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ref_11_0_App_vue_vue_type_style_index_0_id_add02136_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./src/page1/App.vue?vue&type=template&id=add02136


const _hoisted_1 = { class: "cnt" };
const _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["c" /* createElementVNode */])("a", { href: "/b" }, "当前页跳转", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_runtime_esm_bundler["c" /* createElementVNode */])("a", {
  href: "/c",
  target: "_blank"
}, "新开页面跳转", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = Object(vue_runtime_esm_bundler["i" /* resolveComponent */])("Header");
  const _component_Footer = Object(vue_runtime_esm_bundler["i" /* resolveComponent */])("Footer");

  return Object(vue_runtime_esm_bundler["g" /* openBlock */])(), Object(vue_runtime_esm_bundler["b" /* createElementBlock */])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["d" /* createVNode */])(_component_Header), _hoisted_2, _hoisted_3, Object(vue_runtime_esm_bundler["c" /* createElementVNode */])("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.onClickJump && $setup.onClickJump(...args))
  }, "当前页跳转"), Object(vue_runtime_esm_bundler["c" /* createElementVNode */])("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => $setup.onClickOpen && $setup.onClickOpen(...args))
  }, "新开页面跳转"), Object(vue_runtime_esm_bundler["c" /* createElementVNode */])("canvas", {
    ref: "canvasRef",
    type: "2d",
    width: "300",
    height: "200",
    onTouchstart: _cache[2] || (_cache[2] = $event => $setup.log('normal', $event)),
    onCanvastouchstart: _cache[3] || (_cache[3] = $event => $setup.log('canvas', $event))
  }, null, 544), Object(vue_runtime_esm_bundler["d" /* createVNode */])(_component_Footer)]);
}
// CONCATENATED MODULE: ./src/page1/App.vue?vue&type=template&id=add02136

// EXTERNAL MODULE: ./src/common/Header.vue + 4 modules
var Header = __webpack_require__(3);

// EXTERNAL MODULE: ./src/common/Footer.vue + 4 modules
var Footer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./src/page1/App.vue?vue&type=script&lang=js





/* harmony default export */ var Appvue_type_script_lang_js = ({
  components: {
    Header: Header["a" /* default */],
    Footer: Footer["a" /* default */]
  },
  setup() {
    const canvasRef = vue_runtime_esm_bundler["h" /* ref */](null);

    vue_runtime_esm_bundler["e" /* onMounted */](() => {
      console.log('page1 mounted');

      // 不要问为什么不用 $$prepare，vue3 把所有挂在 dom 上的东西都加了一层 proxy，导致基于 this 的 weakmap 全都没法用
      const canvas = canvasRef.value;
      canvas.$$getNodesRef().then(nodesRef => nodesRef.node(res => {
        const { width, height } = canvas;
        const node = res.node;

        // 设置 canvas 宽高
        node.width = width;
        node.height = height;

        const context = node.getContext('2d');

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
      }).exec()).catch(console.error);
    });

    vue_runtime_esm_bundler["f" /* onUnmounted */](() => {
      console.log('page1 unmounted');
    });

    return {
      canvasRef,

      onClickJump() {
        window.location.href = '/b';
      },

      onClickOpen() {
        window.open('/c');
      },

      async log(...args) {
        console.log(...args);
      }
    };
  }
});
// CONCATENATED MODULE: ./src/page1/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/page1/App.vue?vue&type=style&index=0&id=add02136&lang=css
var Appvue_type_style_index_0_id_add02136_lang_css = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2);
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/page1/App.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var App = (__exports__);
// CONCATENATED MODULE: ./src/page1/main.mp.js



function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  const app = vue_runtime_esm_bundler["a" /* createApp */](App);
  app.mount('#app');
  return app;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];}