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
/******/ 	deferredModules.push([8,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/todo.vue?vue&type=template&id=64d48488&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"title"},[_vm._v("todos")]),_vm._v(" "),_c('div',{staticClass:"form"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputText),expression:"inputText"}],staticClass:"new-todo",attrs:{"placeholder":"下一步行动计划是？"},domProps:{"value":(_vm.inputText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputText=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"add-btn",on:{"click":_vm.newTodo}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"todo-list"},_vm._l((_vm.todo),function(item){return (_vm.type === 'all' || (_vm.type === 'active' && !item.done) || (_vm.type === 'done' && item.done))?_c('div',{class:item.done ? 'todo-item done' : 'todo-item'},[_c('div',{staticClass:"toggle",attrs:{"data-id":item.id},on:{"click":_vm.toggle}}),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.text)+" ")]),_vm._v(" "),_c('div',{staticClass:"delete",attrs:{"data-id":item.id},on:{"click":_vm.deleteItem}})]):_vm._e()}),0),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"todo-count"},[_c('div',{staticClass:"strong"},[_vm._v(_vm._s(_vm.left)+" items left")])]),_vm._v(" "),_c('div',{staticClass:"filters"},[_c('div',{staticClass:"ib",attrs:{"data-filter":"all"},on:{"click":_vm.filter}},[_c('div',{class:_vm.type === 'all' ? 'selected' : ''},[_vm._v("All")])]),_vm._v(" "),_c('div',{staticClass:"ib",attrs:{"data-filter":"active"},on:{"click":_vm.filter}},[_c('div',{class:_vm.type === 'active' ? 'selected' : ''},[_vm._v("Active")])]),_vm._v(" "),_c('div',{staticClass:"ib",attrs:{"data-filter":"done"},on:{"click":_vm.filter}},[_c('div',{class:_vm.type === 'done' ? 'selected' : ''},[_vm._v("Done")])])]),_vm._v(" "),(_vm.done > 0)?_c('button',{staticClass:"clear-completed",on:{"click":_vm.clear}},[_vm._v("Clear done")]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/todo.vue?vue&type=template&id=64d48488&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/index/todo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var todovue_type_script_lang_js_ = ({
  name: 'todo',
  data() {
    return {
      id: 1,
      todo: [{ text: '学习 Kbone', id: 0, done: false }, { text: '学习 vue', id: 1, done: false }],
      left: 2,
      type: 'all',
      done: 0,
      inputText: ''
    };
  },
  computed: {
    route() {
      return this.$route.path;
    }
  },
  methods: {
    toggle(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i];
        if (item.id === Number(evt.currentTarget.dataset.id)) {
          item.done = !item.done;
          this.computeCount();
          break;
        }
      }
    },
    newTodo() {
      if (this.inputText.trim() === '') {
        return;
      }

      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      });
      this.computeCount();
      this.inputText = '';
    },
    deleteItem(evt) {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i];
        if (item.id === Number(evt.currentTarget.dataset.id)) {
          this.todo.splice(i, 1);
          this.computeCount();
          break;
        }
      }
    },
    computeCount() {
      this.left = 0;
      this.done = 0;
      for (let i = 0, len = this.todo.length; i < len; i++) {
        this.todo[i].done ? this.done++ : this.left++;
      }
    },

    filter(evt) {
      this.type = evt.currentTarget.dataset.filter;
    },
    clear() {
      for (let i = 0, len = this.todo.length; i < len; i++) {
        const item = this.todo[i];
        if (item.done) {
          this.todo.splice(i, 1);
          len--;
          i--;
        }
      }
      this.done = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/index/todo.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_todovue_type_script_lang_js_ = (todovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/todo.vue?vue&type=style&index=0&lang=css&
var todovue_type_style_index_0_lang_css_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index/todo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_todovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var todo = (component.exports);
// CONCATENATED MODULE: ./src/index/main.mp.js



function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  return new vue_runtime_esm["a" /* default */]({
    el: '#app',
    render: h => h(todo)
  });
}

/***/ })

/******/ })["default"];}