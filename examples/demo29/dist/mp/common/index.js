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
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=template&id=79d6432a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"margin-top":"100px","display":"flex","justify-content":"center"}},[_c('div',{ref:"animation-cnt",staticStyle:{"width":"200px","height":"30px","line-height":"30px","text-align":"center","background":"red","color":"#fff"}},[_vm._v("关键帧动画元素")])]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.startAnimation}},[_vm._v("开始关键帧动画")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.stopAnimation}},[_vm._v("取消关键帧动画")]),_vm._v(" "),_c('wx-scroll-view',{staticStyle:{"height":"200px","width":"100%"},attrs:{"id":"scroller","scroll-y":true}},[_c('div',{staticStyle:{"width":"100%","background":"#ccc"}},[_c('div',{staticStyle:{"text-align":"center","font-size":"18px"}},[_vm._v("这是 scroll-view，请往下滚动")]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"140px","display":"flex","justify-content":"center"}},[_c('div',{ref:"animation-cnt-2",staticStyle:{"transform":"sclae(0.2)","border-radius":"15px","width":"200px","height":"30px","line-height":"30px","text-align":"center","background":"red","color":"#fff"}},[_vm._v("滚动驱动动画元素")])]),_vm._v(" "),_c('div',{staticStyle:{"height":"500px"}})])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"20px","width":"100%","display":"flex","justify-content":"center"}},[_c('wx-animation',{staticStyle:{"width":"200rpx","height":"200rpx","background-color":"#1AAD19"},attrs:{"animation":_vm.animation}})],1),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doRotate}},[_vm._v("旋转")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doScale}},[_vm._v("缩放")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doTranslate}},[_vm._v("移动")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doSkew}},[_vm._v("倾斜")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doRotateAndScale}},[_vm._v("旋转并缩放")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doRotateThenScale}},[_vm._v("旋转后缩放")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doAll}},[_vm._v("同时展示全部")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doAllInQueue}},[_vm._v("顺序展示全部")]),_vm._v(" "),_c('button',{staticClass:"btn",on:{"click":_vm.doReset}},[_vm._v("还原")]),_vm._v(" "),_c('Footer')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/App.vue?vue&type=template&id=79d6432a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/common/Footer.vue?vue&type=template&id=7a612a4a&
var Footervue_type_template_id_7a612a4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Footervue_type_template_id_7a612a4a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('p',[_vm._v("wechat-miniprogram")])])}]


// CONCATENATED MODULE: ./src/common/Footer.vue?vue&type=template&id=7a612a4a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/common/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/common/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/common/Footer.vue?vue&type=style&index=0&lang=css&
var Footervue_type_style_index_0_lang_css_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/common/Footer.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_Footervue_type_script_lang_js_,
  Footervue_type_template_id_7a612a4a_render,
  Footervue_type_template_id_7a612a4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Footer = (component.exports);
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



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    Footer: Footer
  },
  data() {
    return {
      animation: undefined
    };
  },
  mounted() {
    // 滚动驱动动画
    setTimeout(() => {
      this.$refs['animation-cnt-2'].$$animate([{
        borderRadius: '15px',
        transform: 'scale(0.2)',
        offset: 0
      }, {
        borderRadius: '10px',
        transform: 'scale(.5)',
        offset: .5
      }, {
        borderRadius: '0',
        transform: `scale(1)`,
        offset: 1
      }], 2000, {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: 0,
        endScrollOffset: 85
      });
    }, 500);

    if (true) {
      this.animationObj = wx.createAnimation();
    }
  },
  methods: {
    startAnimation() {
      this.$refs['animation-cnt'].$$animate([{ scale: [1, 1], rotate: 0, ease: 'ease-out' }, { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9 }, { scale: [2, 2], rotate: 90 }], 5000, () => {
        console.log('动画正常结束');
        this.$refs['animation-cnt'].$$clearAnimation({ scale: true, rotate: true }, () => {
          console.log('清除动画属性');
        });
      });
    },

    stopAnimation() {
      this.$refs['animation-cnt'].$$clearAnimation({ scale: true, rotate: true }, () => {
        console.log('清除动画属性');
      });
    },

    doRotate() {
      if (this.animationObj) {
        this.animationObj.rotate(Math.random() * 720 - 360).step();
        this.animation = this.animationObj.export();
      }
    },

    doScale() {
      if (this.animationObj) {
        this.animationObj.scale(Math.random() * 2).step();
        this.animation = this.animationObj.export();
      }
    },

    doTranslate() {
      if (this.animationObj) {
        this.animationObj.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step();
        this.animation = this.animationObj.export();
      }
    },

    doSkew() {
      if (this.animationObj) {
        this.animationObj.skew(Math.random() * 90, Math.random() * 90).step();
        this.animation = this.animationObj.export();
      }
    },

    doRotateAndScale() {
      if (this.animationObj) {
        this.animationObj.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).step();
        this.animation = this.animationObj.export();
      }
    },

    doRotateThenScale() {
      if (this.animationObj) {
        this.animationObj.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step();
        this.animation = this.animationObj.export();
      }
    },

    doAll() {
      if (this.animationObj) {
        this.animationObj.rotate(Math.random() * 720 - 360).scale(Math.random() * 2).translate(Math.random() * 100 - 50, Math.random() * 100 - 50).skew(Math.random() * 90, Math.random() * 90).step();
        this.animation = this.animationObj.export();
      }
    },

    doAllInQueue() {
      if (this.animationObj) {
        this.animationObj.rotate(Math.random() * 720 - 360).step().scale(Math.random() * 2).step().translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step().skew(Math.random() * 90, Math.random() * 90).step();
        this.animation = this.animationObj.export();
      }
    },

    doReset() {
      if (this.animationObj) {
        this.animationObj.rotate(0, 0).scale(1).translate(0, 0).skew(0, 0).step({ duration: 0 });
        this.animation = this.animationObj.export();
      }
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