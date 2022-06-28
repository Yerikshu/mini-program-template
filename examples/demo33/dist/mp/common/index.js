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
/******/ 	deferredModules.push([11,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=template&id=10a07d86&
var Appvue_type_template_id_10a07d86_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{ref:"canvas",attrs:{"type":"webgl"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/index/App.vue?vue&type=template&id=10a07d86&

// EXTERNAL MODULE: ./node_modules/threejs-miniprogram/dist/index.js
var dist = __webpack_require__(0);

// EXTERNAL MODULE: ./build/mp/OrbitControls.js
var OrbitControls = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/index/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


var negx = 'https://res.wx.qq.com/op_res/m_LtPXT7r0J-oE8bg_b-fR13m0F86unvY6ZBrcyNMghxrU7e7mvpcl-Gfe05zZXKjrdmvAbwI3o3XEPw6EMhKw';
var negy = 'https://res.wx.qq.com/op_res/m_LtPXT7r0J-oE8bg_b-fY42lpJZ0pby6nbp-hiE4SlMRQYjFZ7vUHyGo9k2cnt8ThbOhhqXV5PJcFbSstunCA';
var negz = 'https://res.wx.qq.com/op_res/m_LtPXT7r0J-oE8bg_b-feNKHxp4vipZ2zANFe79cSroZS1MxFbEICn-BBiXM8sX2OQrks7DyWtGpRDtYi5COw';
var posx = 'https://res.wx.qq.com/op_res/CHdJxEMpxQxLqpWVe01CQh7aQ8Fs3NuzPmJXJoJU7pnprB5gxQ4xIrr0uojukw9JTzbpU_TyrOl-AI4O7JrDaA';
var posy = 'https://res.wx.qq.com/op_res/CHdJxEMpxQxLqpWVe01CQvnpGYq24F7r_CJVbCIeHHRpkiWxOFpbDAAbJcNZvUsZhg5oEZtC4fHVS9DIf1du7g';
var posz = 'https://res.wx.qq.com/op_res/CHdJxEMpxQxLqpWVe01CQi9lxEWNS6GM5J7hpXBkGe8v3NfCRzm9d0prT9fCVL36TmcSKtFmTH6IXtaxt6pKIw';
var total360 = 'https://res.wx.qq.com/op_res/jhgYUBa8GgeG9mV42CtwLmWCGHIvCb-6k3_lWjKB4FCydOsLyfq2U9PD4MSK2IDhLz9rrHAwS6Qtjb4W69KsmA';
var width = 0;
var height = 0;
var devicePixelRatio = 2;
var THREE;
var Appvue_type_script_lang_js_OrbitControls;
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  mounted: function mounted() {
    var _this = this;

    var canvas = this.$refs.canvas;

    if (true) {
      var systemInfo = wx.getSystemInfoSync();
      width = systemInfo.windowWidth;
      height = systemInfo.windowHeight;
      devicePixelRatio = systemInfo.devicePixelRatio;
      canvas.width = width;
      canvas.height = height;
      canvas.$$getNodesRef().then(function (nodesRef) {
        nodesRef.node(function (res) {
          // 事件转成 threejs 需要的事件
          var transEvt = function transEvt(node, type, evt) {
            return {
              type: type,
              target: node,
              timeStamp: evt.timeStamp,
              touches: evt.touches,
              changedTouches: evt.changedTouches,
              detail: evt.timeSdetailtamp
            };
          };

          canvas.addEventListener('canvastouchstart', function (evt) {
            return node.dispatchTouchEvent(transEvt(node, 'touchstart', evt));
          });
          canvas.addEventListener('canvastouchmove', function (evt) {
            return node.dispatchTouchEvent(transEvt(node, 'touchmove', evt));
          });
          canvas.addEventListener('canvastouchend', function (evt) {
            return node.dispatchTouchEvent(transEvt(node, 'touchend', evt));
          });
          canvas.addEventListener('canvastouchcancel', function (evt) {
            return node.dispatchTouchEvent(transEvt(node, 'touchcancel', evt));
          });
          var node = res.node;
          node.width = width;
          node.height = height;
          THREE = dist["createScopedThreejs"](node);
          Appvue_type_script_lang_js_OrbitControls = OrbitControls["a" /* default */](THREE).OrbitControls;

          _this.init(node);
        }).exec();
      });
    } else {}
  },
  methods: {
    init: function init(canvas) {
      // camera
      var camera = new THREE.PerspectiveCamera(70, width / height, 1, 100000);
      camera.position.set(0, 0, 1000); // scene

      var scene = new THREE.Scene(); // 光线

      var ambient = new THREE.AmbientLight(0xffffff);
      scene.add(ambient); // 立方体

      var textureCube = new THREE.CubeTextureLoader().load([posx, negx, posy, negy, posz, negz]);
      textureCube.format = THREE.RGBFormat;
      textureCube.mapping = THREE.CubeReflectionMapping;
      textureCube.encoding = THREE.sRGBEncoding;
      scene.background = textureCube; // 球体
      // const textureEquirec = new THREE.TextureLoader().load(total360, res => console.log('@@@@@@@', res), undefined, err => console.log('#########', err))
      // textureEquirec.needsUpdate = true
      // textureEquirec.updateMatrix()
      // const equirectGeometry = new THREE.SphereGeometry(100, 32, 16)
      // const equirectMaterial = new THREE.ShaderMaterial({
      //   wireframe: false,
      //   side: THREE.DoubleSide,
      //   uniforms: {
      //     tex_0: new THREE.Uniform(textureEquirec),
      //   },
      //   vertexShader: `
      //     precision highp float;
      //     varying vec2 v_uv;
      //     void main() {
      //         gl_Position = projectionMatrix *
      //             modelViewMatrix *
      //             vec4(position.xyz, 1.0);
      //         v_uv = uv;
      //     }
      //   `,
      //   fragmentShader: `
      //     precision highp float;
      //     varying vec2 v_uv;
      //     uniform sampler2D tex_0;
      //     void main() {
      //         vec4 texColor = texture2D(tex_0, vec2(1. - v_uv.x, v_uv.y));
      //         gl_FragColor = texColor;
      //     }
      //   `,
      // })
      // const mesh = new THREE.Mesh(equirectGeometry, equirectMaterial)
      // scene.add(mesh)
      // renderer

      var renderer = new THREE.WebGLRenderer({
        canvas: canvas
      });
      renderer.setPixelRatio(devicePixelRatio);
      renderer.setSize(width, height);
      renderer.gammaOutput = true; // 手势控制

      var controls = new Appvue_type_script_lang_js_OrbitControls(camera, renderer.domElement);
      controls.maxDistance = 100;
      controls.update(); // 渲染

      var onUpdate = function onUpdate() {
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
        requestAnimationFrame(onUpdate);
      };

      onUpdate();
    }
  }
});
// CONCATENATED MODULE: ./src/index/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/index/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_Appvue_type_script_lang_js_,
  Appvue_type_template_id_10a07d86_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/index/main.mp.js


function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  return new vue_runtime_esm["a" /* default */]({
    el: '#app',
    render: function render(h) {
      return h(App);
    }
  });
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

/******/ })["default"];}