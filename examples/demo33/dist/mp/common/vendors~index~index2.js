module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;(window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){"use strict";const n=r(1),i=r(2);t.exports={atob:n,btoa:i}},function(t,e,r){"use strict";function n(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t);return e<0?void 0:e}t.exports=function(t){if((t=(t=""+t).replace(/[ \t\n\f\r]/g,"")).length%4==0&&(t=t.replace(/==?$/,"")),t.length%4==1||/[^+/0-9A-Za-z]/.test(t))return null;let e="",r=0,i=0;for(let a=0;a<t.length;a++)r<<=6,r|=n(t[a]),i+=6,24===i&&(e+=String.fromCharCode((16711680&r)>>16),e+=String.fromCharCode((65280&r)>>8),e+=String.fromCharCode(255&r),r=i=0);return 12===i?(r>>=4,e+=String.fromCharCode(r)):18===i&&(r>>=2,e+=String.fromCharCode((65280&r)>>8),e+=String.fromCharCode(255&r)),e}},function(t,e,r){"use strict";function n(t){if(t>=0&&t<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t]}t.exports=function(t){let e;for(t=""+t,e=0;e<t.length;e++)if(t.charCodeAt(e)>255)return null;let r="";for(e=0;e<t.length;e+=3){const i=[void 0,void 0,void 0,void 0];i[0]=t.charCodeAt(e)>>2,i[1]=(3&t.charCodeAt(e))<<4,t.length>e+1&&(i[1]|=t.charCodeAt(e+1)>>4,i[2]=(15&t.charCodeAt(e+1))<<2),t.length>e+2&&(i[2]|=t.charCodeAt(e+2)>>6,i[3]=63&t.charCodeAt(e+2));for(let t=0;t<i.length;t++)void 0===i[t]?r+="=":r+=n(i[t])}return r}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,r){"use strict";r.r(e),r.d(e,"createScopedThreejs",(function(){return P}));var n=r(0);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=new WeakMap,h=function t(e){c(this,t),this.identifier=e.identifier,this.force=void 0===e.force?1:e.force,this.pageX=e.pageX||e.x,this.pageY=e.pageY||e.y,this.clientX=e.clientX||e.x,this.clientY=e.clientY||e.y,this.screenX=this.pageX,this.screenY=this.pageY},u=function(){function t(){c(this,t),l.set(this,{})}var e,r,n;return e=t,(r=[{key:"addEventListener",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=l.get(this);n||(n={},l.set(this,n)),n[t]||(n[t]=[]),n[t].push(e),r.capture,r.once,r.passive}},{key:"removeEventListener",value:function(t,e){var r=l.get(this);if(r){var n=r[t];if(n&&n.length>0)for(var i=n.length;i--;i>0)if(n[i]===e){n.splice(i,1);break}}}},{key:"dispatchEvent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"function"!=typeof t.preventDefault&&(t.preventDefault=function(){}),"function"!=typeof t.stopPropagation&&(t.stopPropagation=function(){});var e=l.get(this)[t.type];if(e)for(var r=0;r<e.length;r++)e[r](t)}},{key:"dispatchTouchEvent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a({},this),r={changedTouches:t.changedTouches.map((function(t){return new h(t)})),touches:t.touches.map((function(t){return new h(t)})),targetTouches:Array.prototype.slice.call(t.touches.map((function(t){return new h(t)}))),timeStamp:t.timeStamp,target:e,currentTarget:e,type:t.type,cancelBubble:!1,cancelable:!1};this.dispatchEvent(r)}}])&&s(e.prototype,r),n&&s(e,n),t}();function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y(t);if(e){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return g(this,r)}}function g(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=new WeakMap,b=new WeakMap,w=new WeakMap;function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.target=e.target||this,"function"==typeof this["on".concat(t)]&&this["on".concat(t)].call(this,e)}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.readyState=t,e.readyState=t,_.call(this,"readystatechange",e)}function S(t){return!/^(http|https|ftp|wxfile):\/\/.*/i.test(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,r,n,i=m(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this)).onabort=null,t.onerror=null,t.onload=null,t.onloadstart=null,t.onprogress=null,t.ontimeout=null,t.onloadend=null,t.onreadystatechange=null,t.readyState=0,t.response=null,t.responseText=null,t.responseType="text",t.dataType="string",t.responseXML=null,t.status=0,t.statusText="",t.upload={},t.withCredentials=!1,x.set(v(t),{"content-type":"application/x-www-form-urlencoded"}),b.set(v(t),{}),t}return e=a,(r=[{key:"abort",value:function(){var t=w.get(this);t&&t.abort()}},{key:"getAllResponseHeaders",value:function(){var t=b.get(this);return Object.keys(t).map((function(e){return"".concat(e,": ").concat(t[e])})).join("\n")}},{key:"getResponseHeader",value:function(t){return b.get(this)[t]}},{key:"open",value:function(t,e){this._method=t,this._url=e,M.call(this,a.OPENED)}},{key:"overrideMimeType",value:function(){}},{key:"send",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.readyState!==a.OPENED)throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");var r,n=this._url,i=x.get(this),o=this.responseType,s=this.dataType,c=S(n);"arraybuffer"===o||(r="utf8"),delete this.response,this.response=null;var l=function(e){var r=e.data,n=e.statusCode,i=e.header;if(n=void 0===n?200:n,"string"!=typeof r&&!(r instanceof ArrayBuffer))try{r=JSON.stringify(r)}catch(t){}t.status=n,i&&b.set(t,i),_.call(t,"loadstart"),M.call(t,a.HEADERS_RECEIVED),M.call(t,a.LOADING),t.response=r,r instanceof ArrayBuffer?Object.defineProperty(t,"responseText",{enumerable:!0,configurable:!0,get:function(){throw"InvalidStateError : responseType is "+this.responseType}}):t.responseText=r,M.call(t,a.DONE),_.call(t,"load"),_.call(t,"loadend")},h=function(e){var r=e.errMsg;-1!==r.indexOf("abort")?_.call(t,"abort"):_.call(t,"error",{message:r}),_.call(t,"loadend"),c&&console.warn(r)};if(c){var u=wx.getFileSystemManager(),p={filePath:n,success:l,fail:h};return r&&(p.encoding=r),void u.readFile(p)}wx.request({data:e,url:n,method:this._method,header:i,dataType:s,responseType:o,success:l,fail:h})}},{key:"setRequestHeader",value:function(t,e){var r=x.get(this);r[t]=e,x.set(this,r)}},{key:"addEventListener",value:function(t,e){var r=this;"function"==typeof e&&(this["on"+t]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.target=t.target||r,e.call(r,t)})}},{key:"removeEventListener",value:function(t,e){this["on"+t]===e&&(this["on"+t]=null)}}])&&d(e.prototype,r),n&&d(e,n),a}(u);function E(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw a}}}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function L(t,e){var r,n=E(Object.getOwnPropertyNames(e));try{for(n.s();!(r=n.n()).done;){var i=r.value;if("constructor"!==i&&"prototype"!==i&&"name"!==i){var a=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,a)}}}catch(t){n.e(t)}finally{n.f()}}function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(e){Object.defineProperty(e,"style",{get:function(){return{width:this.width+"px",height:this.height+"px"}}}),Object.defineProperty(e,"clientHeight",{get:function(){return this.height}}),Object.defineProperty(e,"clientWidth",{get:function(){return this.width}}),L(e.constructor.prototype,u.prototype);var i={createElementNS:function(t,r){return"canvas"===r?e:"img"===r?e.createImage():void 0}};L(i.constructor.prototype,u.prototype);var a={AudioContext:function(){},URL:{}};L(a.constructor.prototype,u.prototype);var o,s,c=T,l={};return o=this,s=function(t){function e(){}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),void 0===Number.isInteger&&(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),void 0===Math.sign&&(Math.sign=function(t){return t<0?-1:t>0?1:+t}),"name"in Function.prototype==0&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}}),void 0===Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),r=1;r<arguments.length;r++){var n=arguments[r];if(null!=n)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}),Object.assign(e.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});var r=this._listeners;void 0===r[t]&&(r[t]=[]),-1===r[t].indexOf(e)&&r[t].push(e)},hasEventListener:function(t,e){if(void 0===this._listeners)return!1;var r=this._listeners;return void 0!==r[t]&&-1!==r[t].indexOf(e)},removeEventListener:function(t,e){if(void 0!==this._listeners){var r=this._listeners[t];if(void 0!==r){var n=r.indexOf(e);-1!==n&&r.splice(n,1)}}},dispatchEvent:function(t){if(void 0!==this._listeners){var e=this._listeners[t.type];if(void 0!==e){t.target=this;for(var r=e.slice(0),n=0,i=r.length;n<i;n++)r[n].call(this,t)}}}});for(var r=[],o=0;o<256;o++)r[o]=(o<16?"0":"")+o.toString(16);var s={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(r[255&t]+r[t>>8&255]+r[t>>16&255]+r[t>>24&255]+"-"+r[255&e]+r[e>>8&255]+"-"+r[e>>16&15|64]+r[e>>24&255]+"-"+r[63&n|128]+r[n>>8&255]+"-"+r[n>>16&255]+r[n>>24&255]+r[255&i]+r[i>>8&255]+r[i>>16&255]+r[i>>24&255]).toUpperCase()},clamp:function(t,e,r){return Math.max(e,Math.min(r,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,r,n,i){return n+(t-e)*(i-n)/(r-e)},lerp:function(t,e,r){return(1-r)*t+r*e},smoothstep:function(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e))*t*(3-2*t)},smootherstep:function(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*s.DEG2RAD},radToDeg:function(t){return t*s.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}};function l(t,e){this.x=t||0,this.y=e||0}function h(t,e,r,n){this._x=t||0,this._y=e||0,this._z=r||0,this._w=void 0!==n?n:1}Object.defineProperties(l.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}}),Object.assign(l.prototype,{isVector2:!0,set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var e=this.x,r=this.y,n=t.elements;return this.x=n[0]*e+n[3]*r+n[6],this.y=n[1]*e+n[4]*r+n[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this},clampLength:function(t,e){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,r=this.y-t.y;return e*e+r*r},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,r){return this.subVectors(e,t).multiplyScalar(r).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromBufferAttribute:function(t,e,r){return void 0!==r&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this},rotateAround:function(t,e){var r=Math.cos(e),n=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*r-a*n+t.x,this.y=i*n+a*r+t.y,this}}),Object.assign(h,{slerp:function(t,e,r,n){return r.copy(t).slerp(e,n)},slerpFlat:function(t,e,r,n,i,a,o){var s=r[n+0],c=r[n+1],l=r[n+2],h=r[n+3],u=i[a+0],p=i[a+1],d=i[a+2],f=i[a+3];if(h!==f||s!==u||c!==p||l!==d){var m=1-o,g=s*u+c*p+l*d+h*f,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){var x=Math.sqrt(y),b=Math.atan2(x,g*v);m=Math.sin(m*b)/x,o=Math.sin(o*b)/x}var w=o*v;if(s=s*m+u*w,c=c*m+p*w,l=l*m+d*w,h=h*m+f*w,m===1-o){var _=1/Math.sqrt(s*s+c*c+l*l+h*h);s*=_,c*=_,l*=_,h*=_}}t[e]=s,t[e+1]=c,t[e+2]=l,t[e+3]=h}}),Object.defineProperties(h.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()}}}),Object.assign(h.prototype,{isQuaternion:!0,set:function(t,e,r,n){return this._x=t,this._y=e,this._z=r,this._w=n,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},setFromEuler:function(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var r=t._x,n=t._y,i=t._z,a=t.order,o=Math.cos,s=Math.sin,c=o(r/2),l=o(n/2),h=o(i/2),u=s(r/2),p=s(n/2),d=s(i/2);return"XYZ"===a?(this._x=u*l*h+c*p*d,this._y=c*p*h-u*l*d,this._z=c*l*d+u*p*h,this._w=c*l*h-u*p*d):"YXZ"===a?(this._x=u*l*h+c*p*d,this._y=c*p*h-u*l*d,this._z=c*l*d-u*p*h,this._w=c*l*h+u*p*d):"ZXY"===a?(this._x=u*l*h-c*p*d,this._y=c*p*h+u*l*d,this._z=c*l*d+u*p*h,this._w=c*l*h-u*p*d):"ZYX"===a?(this._x=u*l*h-c*p*d,this._y=c*p*h+u*l*d,this._z=c*l*d-u*p*h,this._w=c*l*h+u*p*d):"YZX"===a?(this._x=u*l*h+c*p*d,this._y=c*p*h+u*l*d,this._z=c*l*d-u*p*h,this._w=c*l*h-u*p*d):"XZY"===a&&(this._x=u*l*h-c*p*d,this._y=c*p*h-u*l*d,this._z=c*l*d+u*p*h,this._w=c*l*h+u*p*d),!1!==e&&this._onChangeCallback(),this},setFromAxisAngle:function(t,e){var r=e/2,n=Math.sin(r);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(r),this._onChangeCallback(),this},setFromRotationMatrix:function(t){var e,r=t.elements,n=r[0],i=r[4],a=r[8],o=r[1],s=r[5],c=r[9],l=r[2],h=r[6],u=r[10],p=n+s+u;return p>0?(e=.5/Math.sqrt(p+1),this._w=.25/e,this._x=(h-c)*e,this._y=(a-l)*e,this._z=(o-i)*e):n>s&&n>u?(e=2*Math.sqrt(1+n-s-u),this._w=(h-c)/e,this._x=.25*e,this._y=(i+o)/e,this._z=(a+l)/e):s>u?(e=2*Math.sqrt(1+s-n-u),this._w=(a-l)/e,this._x=(i+o)/e,this._y=.25*e,this._z=(c+h)/e):(e=2*Math.sqrt(1+u-n-s),this._w=(o-i)/e,this._x=(a+l)/e,this._y=(c+h)/e,this._z=.25*e),this._onChangeCallback(),this},setFromUnitVectors:function(t,e){var r=t.dot(e)+1;return r<1e-6?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()},angleTo:function(t){return 2*Math.acos(Math.abs(s.clamp(this.dot(t),-1,1)))},rotateTowards:function(t,e){var r=this.angleTo(t);if(0===r)return this;var n=Math.min(1,e/r);return this.slerp(t,n),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){var r=t._x,n=t._y,i=t._z,a=t._w,o=e._x,s=e._y,c=e._z,l=e._w;return this._x=r*l+a*o+n*c-i*s,this._y=n*l+a*s+i*o-r*c,this._z=i*l+a*c+r*s-n*o,this._w=a*l-r*o-n*s-i*c,this._onChangeCallback(),this},slerp:function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var r=this._x,n=this._y,i=this._z,a=this._w,o=a*t._w+r*t._x+n*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;var s=1-o*o;if(s<=Number.EPSILON){var c=1-e;return this._w=c*a+e*this._w,this._x=c*r+e*this._x,this._y=c*n+e*this._y,this._z=c*i+e*this._z,this.normalize(),this._onChangeCallback(),this}var l=Math.sqrt(s),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*u+this._w*p,this._x=r*u+this._x*p,this._y=n*u+this._y*p,this._z=i*u+this._z*p,this._onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}});var u=new d,p=new h;function d(t,e,r){this.x=t||0,this.y=e||0,this.z=r||0}Object.assign(d.prototype,{isVector3:!0,set:function(t,e,r){return this.x=t,this.y=e,this.z=r,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(p.setFromEuler(t))},applyAxisAngle:function(t,e){return this.applyQuaternion(p.setFromAxisAngle(t,e))},applyMatrix3:function(t){var e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[3]*r+i[6]*n,this.y=i[1]*e+i[4]*r+i[7]*n,this.z=i[2]*e+i[5]*r+i[8]*n,this},applyMatrix4:function(t){var e=this.x,r=this.y,n=this.z,i=t.elements,a=1/(i[3]*e+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*e+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*e+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*e+i[6]*r+i[10]*n+i[14])*a,this},applyQuaternion:function(t){var e=this.x,r=this.y,n=this.z,i=t.x,a=t.y,o=t.z,s=t.w,c=s*e+a*n-o*r,l=s*r+o*e-i*n,h=s*n+i*r-a*e,u=-i*e-a*r-o*n;return this.x=c*s+u*-i+l*-o-h*-a,this.y=l*s+u*-a+h*-i-c*-o,this.z=h*s+u*-o+c*-a-l*-i,this},project:function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},unproject:function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},transformDirection:function(t){var e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[4]*r+i[8]*n,this.y=i[1]*e+i[5]*r+i[9]*n,this.z=i[2]*e+i[6]*r+i[10]*n,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this},clampLength:function(t,e){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,r){return this.subVectors(e,t).multiplyScalar(r).add(t)},cross:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)},crossVectors:function(t,e){var r=t.x,n=t.y,i=t.z,a=e.x,o=e.y,s=e.z;return this.x=n*s-i*o,this.y=i*a-r*s,this.z=r*o-n*a,this},projectOnVector:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)},projectOnPlane:function(t){return u.copy(this).projectOnVector(t),this.sub(u)},reflect:function(t){return this.sub(u.copy(t).multiplyScalar(2*this.dot(t)))},angleTo:function(t){var e=this.dot(t)/Math.sqrt(this.lengthSq()*t.lengthSq());return Math.acos(s.clamp(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,r=this.y-t.y,n=this.z-t.z;return e*e+r*r+n*n},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},setFromSphericalCoords:function(t,e,r){var n=Math.sin(e)*t;return this.x=n*Math.sin(r),this.y=Math.cos(e)*t,this.z=n*Math.cos(r),this},setFromCylindrical:function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},setFromCylindricalCoords:function(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this},setFromMatrixPosition:function(t){var e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this},setFromMatrixScale:function(t){var e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=n,this},setFromMatrixColumn:function(t,e){return this.fromArray(t.elements,4*e)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromBufferAttribute:function(t,e,r){return void 0!==r&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}});var f=new d;function m(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(m.prototype,{isMatrix3:!0,set:function(t,e,r,n,i,a,o,s,c){var l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=i,l[5]=s,l[6]=r,l[7]=a,l[8]=c,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(t){var e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this},setFromMatrix4:function(t){var e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this},applyToBufferAttribute:function(t){for(var e=0,r=t.count;e<r;e++)f.x=t.getX(e),f.y=t.getY(e),f.z=t.getZ(e),f.applyMatrix3(this),t.setXYZ(e,f.x,f.y,f.z);return t},multiply:function(t){return this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var r=t.elements,n=e.elements,i=this.elements,a=r[0],o=r[3],s=r[6],c=r[1],l=r[4],h=r[7],u=r[2],p=r[5],d=r[8],f=n[0],m=n[3],g=n[6],v=n[1],y=n[4],x=n[7],b=n[2],w=n[5],_=n[8];return i[0]=a*f+o*v+s*b,i[3]=a*m+o*y+s*w,i[6]=a*g+o*x+s*_,i[1]=c*f+l*v+h*b,i[4]=c*m+l*y+h*w,i[7]=c*g+l*x+h*_,i[2]=u*f+p*v+d*b,i[5]=u*m+p*y+d*w,i[8]=u*g+p*x+d*_,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this},determinant:function(){var t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8];return e*a*l-e*o*c-r*i*l+r*o*s+n*i*c-n*a*s},getInverse:function(t,e){t&&t.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var r=t.elements,n=this.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],h=r[6],u=r[7],p=r[8],d=p*c-l*u,f=l*h-p*s,m=u*s-c*h,g=i*d+a*f+o*m;if(0===g){var v="THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";if(!0===e)throw new Error(v);return console.warn(v),this.identity()}var y=1/g;return n[0]=d*y,n[1]=(o*u-p*a)*y,n[2]=(l*a-o*c)*y,n[3]=f*y,n[4]=(p*i-o*h)*y,n[5]=(o*s-l*i)*y,n[6]=m*y,n[7]=(a*h-u*i)*y,n[8]=(c*i-a*s)*y,this},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this},getNormalMatrix:function(t){return this.setFromMatrix4(t).getInverse(this).transpose()},transposeIntoArray:function(t){var e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this},setUvTransform:function(t,e,r,n,i,a,o){var s=Math.cos(i),c=Math.sin(i);this.set(r*s,r*c,-r*(s*a+c*o)+a+t,-n*c,n*s,-n*(-c*a+s*o)+o+e,0,0,1)},scale:function(t,e){var r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=e,r[4]*=e,r[7]*=e,this},rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=this.elements,i=n[0],a=n[3],o=n[6],s=n[1],c=n[4],l=n[7];return n[0]=e*i+r*s,n[3]=e*a+r*c,n[6]=e*o+r*l,n[1]=-r*i+e*s,n[4]=-r*a+e*c,n[7]=-r*o+e*l,this},translate:function(t,e){var r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=e*r[2],r[4]+=e*r[5],r[7]+=e*r[8],this},equals:function(t){for(var e=this.elements,r=t.elements,n=0;n<9;n++)if(e[n]!==r[n])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var r=0;r<9;r++)this.elements[r]=t[r+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}});var g={getDataURL:function(t){return t.src}},v=0;function y(t,e,r,n,i,a,o,c,h,u){Object.defineProperty(this,"id",{value:v++}),this.uuid=s.generateUUID(),this.name="",this.image=void 0!==t?t:y.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==e?e:y.DEFAULT_MAPPING,this.wrapS=void 0!==r?r:1001,this.wrapT=void 0!==n?n:1001,this.magFilter=void 0!==i?i:1006,this.minFilter=void 0!==a?a:1008,this.anisotropy=void 0!==h?h:1,this.format=void 0!==o?o:1023,this.type=void 0!==c?c:1009,this.offset=new l(0,0),this.repeat=new l(1,1),this.center=new l(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new m,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=void 0!==u?u:3e3,this.version=0,this.onUpdate=null}function x(t,e,r,n){this.x=t||0,this.y=e||0,this.z=r||0,this.w=void 0!==n?n:1}function b(t,e,r){this.width=t,this.height=e,this.scissor=new x(0,0,t,e),this.scissorTest=!1,this.viewport=new x(0,0,t,e),r=r||{},this.texture=new y(void 0,void 0,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=void 0!==r.generateMipmaps&&r.generateMipmaps,this.texture.minFilter=void 0!==r.minFilter?r.minFilter:1006,this.depthBuffer=void 0===r.depthBuffer||r.depthBuffer,this.stencilBuffer=void 0===r.stencilBuffer||r.stencilBuffer,this.depthTexture=void 0!==r.depthTexture?r.depthTexture:null}function w(t,e,r){b.call(this,t,e,r),this.samples=4}y.DEFAULT_IMAGE=void 0,y.DEFAULT_MAPPING=300,y.prototype=Object.assign(Object.create(e.prototype),{constructor:y,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){var e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];var r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var n=this.image;if(void 0===n.uuid&&(n.uuid=s.generateUUID()),!e&&void 0===t.images[n.uuid]){var i;if(Array.isArray(n)){i=[];for(var a=0,o=n.length;a<o;a++)i.push(g.getDataURL(n[a]))}else i=g.getDataURL(n);t.images[n.uuid]={uuid:n.uuid,url:i}}r.image=n.uuid}return e||(t.textures[this.uuid]=r),r},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(300!==this.mapping)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}}),Object.defineProperty(y.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.defineProperties(x.prototype,{width:{get:function(){return this.z},set:function(t){this.z=t}},height:{get:function(){return this.w},set:function(t){this.w=t}}}),Object.assign(x.prototype,{isVector4:!0,set:function(t,e,r,n){return this.x=t,this.y=e,this.z=r,this.w=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setW:function(t){return this.w=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this},add:function(t,e){return void 0!==e?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this},sub:function(t,e){return void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},applyMatrix4:function(t){var e=this.x,r=this.y,n=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*e+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*e+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*e+a[7]*r+a[11]*n+a[15]*i,this},divideScalar:function(t){return this.multiplyScalar(1/t)},setAxisAngleFromQuaternion:function(t){this.w=2*Math.acos(t.w);var e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this},setAxisAngleFromRotationMatrix:function(t){var e,r,n,i,a=t.elements,o=a[0],s=a[4],c=a[8],l=a[1],h=a[5],u=a[9],p=a[2],d=a[6],f=a[10];if(Math.abs(s-l)<.01&&Math.abs(c-p)<.01&&Math.abs(u-d)<.01){if(Math.abs(s+l)<.1&&Math.abs(c+p)<.1&&Math.abs(u+d)<.1&&Math.abs(o+h+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;var m=(o+1)/2,g=(h+1)/2,v=(f+1)/2,y=(s+l)/4,x=(c+p)/4,b=(u+d)/4;return m>g&&m>v?m<.01?(r=0,n=.707106781,i=.707106781):(n=y/(r=Math.sqrt(m)),i=x/r):g>v?g<.01?(r=.707106781,n=0,i=.707106781):(r=y/(n=Math.sqrt(g)),i=b/n):v<.01?(r=.707106781,n=.707106781,i=0):(r=x/(i=Math.sqrt(v)),n=b/i),this.set(r,n,i,e),this}var w=Math.sqrt((d-u)*(d-u)+(c-p)*(c-p)+(l-s)*(l-s));return Math.abs(w)<.001&&(w=1),this.x=(d-u)/w,this.y=(c-p)/w,this.z=(l-s)/w,this.w=Math.acos((o+h+f-1)/2),this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this},clampLength:function(t,e){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this},lerpVectors:function(t,e,r){return this.subVectors(e,t).multiplyScalar(r).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t},fromBufferAttribute:function(t,e,r){return void 0!==r&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}}),b.prototype=Object.assign(Object.create(e.prototype),{constructor:b,isWebGLRenderTarget:!0,setSize:function(t,e){this.width===t&&this.height===e||(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),w.prototype=Object.assign(Object.create(b.prototype),{constructor:w,isWebGLMultisampleRenderTarget:!0,copy:function(t){return b.prototype.copy.call(this,t),this.samples=t.samples,this}});var _=new d,M=new P,S=new d(0,0,0),T=new d(1,1,1),E=new d,A=new d,L=new d;function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(P.prototype,{isMatrix4:!0,set:function(t,e,r,n,i,a,o,s,c,l,h,u,p,d,f,m){var g=this.elements;return g[0]=t,g[4]=e,g[8]=r,g[12]=n,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=h,g[14]=u,g[3]=p,g[7]=d,g[11]=f,g[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new P).fromArray(this.elements)},copy:function(t){var e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this},copyPosition:function(t){var e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this},extractBasis:function(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this},extractRotation:function(t){var e=this.elements,r=t.elements,n=1/_.setFromMatrixColumn(t,0).length(),i=1/_.setFromMatrixColumn(t,1).length(),a=1/_.setFromMatrixColumn(t,2).length();return e[0]=r[0]*n,e[1]=r[1]*n,e[2]=r[2]*n,e[3]=0,e[4]=r[4]*i,e[5]=r[5]*i,e[6]=r[6]*i,e[7]=0,e[8]=r[8]*a,e[9]=r[9]*a,e[10]=r[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromEuler:function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var e=this.elements,r=t.x,n=t.y,i=t.z,a=Math.cos(r),o=Math.sin(r),s=Math.cos(n),c=Math.sin(n),l=Math.cos(i),h=Math.sin(i);if("XYZ"===t.order){var u=a*l,p=a*h,d=o*l,f=o*h;e[0]=s*l,e[4]=-s*h,e[8]=c,e[1]=p+d*c,e[5]=u-f*c,e[9]=-o*s,e[2]=f-u*c,e[6]=d+p*c,e[10]=a*s}else if("YXZ"===t.order){var m=s*l,g=s*h,v=c*l,y=c*h;e[0]=m+y*o,e[4]=v*o-g,e[8]=a*c,e[1]=a*h,e[5]=a*l,e[9]=-o,e[2]=g*o-v,e[6]=y+m*o,e[10]=a*s}else if("ZXY"===t.order)m=s*l,g=s*h,v=c*l,y=c*h,e[0]=m-y*o,e[4]=-a*h,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*l,e[9]=y-m*o,e[2]=-a*c,e[6]=o,e[10]=a*s;else if("ZYX"===t.order)u=a*l,p=a*h,d=o*l,f=o*h,e[0]=s*l,e[4]=d*c-p,e[8]=u*c+f,e[1]=s*h,e[5]=f*c+u,e[9]=p*c-d,e[2]=-c,e[6]=o*s,e[10]=a*s;else if("YZX"===t.order){var x=a*s,b=a*c,w=o*s,_=o*c;e[0]=s*l,e[4]=_-x*h,e[8]=w*h+b,e[1]=h,e[5]=a*l,e[9]=-o*l,e[2]=-c*l,e[6]=b*h+w,e[10]=x-_*h}else"XZY"===t.order&&(x=a*s,b=a*c,w=o*s,_=o*c,e[0]=s*l,e[4]=-h,e[8]=c*l,e[1]=x*h+_,e[5]=a*l,e[9]=b*h-w,e[2]=w*h-b,e[6]=o*l,e[10]=_*h+x);return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(t){return this.compose(S,t,T)},lookAt:function(t,e,r){var n=this.elements;return L.subVectors(t,e),0===L.lengthSq()&&(L.z=1),L.normalize(),E.crossVectors(r,L),0===E.lengthSq()&&(1===Math.abs(r.z)?L.x+=1e-4:L.z+=1e-4,L.normalize(),E.crossVectors(r,L)),E.normalize(),A.crossVectors(L,E),n[0]=E.x,n[4]=A.x,n[8]=L.x,n[1]=E.y,n[5]=A.y,n[9]=L.y,n[2]=E.z,n[6]=A.z,n[10]=L.z,this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var r=t.elements,n=e.elements,i=this.elements,a=r[0],o=r[4],s=r[8],c=r[12],l=r[1],h=r[5],u=r[9],p=r[13],d=r[2],f=r[6],m=r[10],g=r[14],v=r[3],y=r[7],x=r[11],b=r[15],w=n[0],_=n[4],M=n[8],S=n[12],T=n[1],E=n[5],A=n[9],L=n[13],R=n[2],P=n[6],C=n[10],O=n[14],D=n[3],N=n[7],I=n[11],z=n[15];return i[0]=a*w+o*T+s*R+c*D,i[4]=a*_+o*E+s*P+c*N,i[8]=a*M+o*A+s*C+c*I,i[12]=a*S+o*L+s*O+c*z,i[1]=l*w+h*T+u*R+p*D,i[5]=l*_+h*E+u*P+p*N,i[9]=l*M+h*A+u*C+p*I,i[13]=l*S+h*L+u*O+p*z,i[2]=d*w+f*T+m*R+g*D,i[6]=d*_+f*E+m*P+g*N,i[10]=d*M+f*A+m*C+g*I,i[14]=d*S+f*L+m*O+g*z,i[3]=v*w+y*T+x*R+b*D,i[7]=v*_+y*E+x*P+b*N,i[11]=v*M+y*A+x*C+b*I,i[15]=v*S+y*L+x*O+b*z,this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},applyToBufferAttribute:function(t){for(var e=0,r=t.count;e<r;e++)_.x=t.getX(e),_.y=t.getY(e),_.z=t.getZ(e),_.applyMatrix4(this),t.setXYZ(e,_.x,_.y,_.z);return t},determinant:function(){var t=this.elements,e=t[0],r=t[4],n=t[8],i=t[12],a=t[1],o=t[5],s=t[9],c=t[13],l=t[2],h=t[6],u=t[10],p=t[14];return t[3]*(+i*s*h-n*c*h-i*o*u+r*c*u+n*o*p-r*s*p)+t[7]*(+e*s*p-e*c*u+i*a*u-n*a*p+n*c*l-i*s*l)+t[11]*(+e*c*h-e*o*p-i*a*h+r*a*p+i*o*l-r*c*l)+t[15]*(-n*o*l-e*s*h+e*o*u+n*a*h-r*a*u+r*s*l)},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},setPosition:function(t,e,r){var n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=r),this},getInverse:function(t,e){var r=this.elements,n=t.elements,i=n[0],a=n[1],o=n[2],s=n[3],c=n[4],l=n[5],h=n[6],u=n[7],p=n[8],d=n[9],f=n[10],m=n[11],g=n[12],v=n[13],y=n[14],x=n[15],b=d*y*u-v*f*u+v*h*m-l*y*m-d*h*x+l*f*x,w=g*f*u-p*y*u-g*h*m+c*y*m+p*h*x-c*f*x,_=p*v*u-g*d*u+g*l*m-c*v*m-p*l*x+c*d*x,M=g*d*h-p*v*h-g*l*f+c*v*f+p*l*y-c*d*y,S=i*b+a*w+o*_+s*M;if(0===S){var T="THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";if(!0===e)throw new Error(T);return console.warn(T),this.identity()}var E=1/S;return r[0]=b*E,r[1]=(v*f*s-d*y*s-v*o*m+a*y*m+d*o*x-a*f*x)*E,r[2]=(l*y*s-v*h*s+v*o*u-a*y*u-l*o*x+a*h*x)*E,r[3]=(d*h*s-l*f*s-d*o*u+a*f*u+l*o*m-a*h*m)*E,r[4]=w*E,r[5]=(p*y*s-g*f*s+g*o*m-i*y*m-p*o*x+i*f*x)*E,r[6]=(g*h*s-c*y*s-g*o*u+i*y*u+c*o*x-i*h*x)*E,r[7]=(c*f*s-p*h*s+p*o*u-i*f*u-c*o*m+i*h*m)*E,r[8]=_*E,r[9]=(g*d*s-p*v*s-g*a*m+i*v*m+p*a*x-i*d*x)*E,r[10]=(c*v*s-g*l*s+g*a*u-i*v*u-c*a*x+i*l*x)*E,r[11]=(p*l*s-c*d*s-p*a*u+i*d*u+c*a*m-i*l*m)*E,r[12]=M*E,r[13]=(p*v*o-g*d*o+g*a*f-i*v*f-p*a*y+i*d*y)*E,r[14]=(g*l*o-c*v*o-g*a*h+i*v*h+c*a*y-i*l*y)*E,r[15]=(c*d*o-p*l*o+p*a*h-i*d*h-c*a*f+i*l*f)*E,this},scale:function(t){var e=this.elements,r=t.x,n=t.y,i=t.z;return e[0]*=r,e[4]*=n,e[8]*=i,e[1]*=r,e[5]*=n,e[9]*=i,e[2]*=r,e[6]*=n,e[10]*=i,e[3]*=r,e[7]*=n,e[11]*=i,this},getMaxScaleOnAxis:function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))},makeTranslation:function(t,e,r){return this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this},makeRotationX:function(t){var e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this},makeRotationY:function(t){var e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this},makeRotationZ:function(t){var e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){var r=Math.cos(e),n=Math.sin(e),i=1-r,a=t.x,o=t.y,s=t.z,c=i*a,l=i*o;return this.set(c*a+r,c*o-n*s,c*s+n*o,0,c*o+n*s,l*o+r,l*s-n*a,0,c*s-n*o,l*s+n*a,i*s*s+r,0,0,0,0,1),this},makeScale:function(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this},makeShear:function(t,e,r){return this.set(1,e,r,0,t,1,r,0,t,e,1,0,0,0,0,1),this},compose:function(t,e,r){var n=this.elements,i=e._x,a=e._y,o=e._z,s=e._w,c=i+i,l=a+a,h=o+o,u=i*c,p=i*l,d=i*h,f=a*l,m=a*h,g=o*h,v=s*c,y=s*l,x=s*h,b=r.x,w=r.y,_=r.z;return n[0]=(1-(f+g))*b,n[1]=(p+x)*b,n[2]=(d-y)*b,n[3]=0,n[4]=(p-x)*w,n[5]=(1-(u+g))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(d+y)*_,n[9]=(m-v)*_,n[10]=(1-(u+f))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this},decompose:function(t,e,r){var n=this.elements,i=_.set(n[0],n[1],n[2]).length(),a=_.set(n[4],n[5],n[6]).length(),o=_.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),t.x=n[12],t.y=n[13],t.z=n[14],M.copy(this);var s=1/i,c=1/a,l=1/o;return M.elements[0]*=s,M.elements[1]*=s,M.elements[2]*=s,M.elements[4]*=c,M.elements[5]*=c,M.elements[6]*=c,M.elements[8]*=l,M.elements[9]*=l,M.elements[10]*=l,e.setFromRotationMatrix(M),r.x=i,r.y=a,r.z=o,this},makePerspective:function(t,e,r,n,i,a){void 0===a&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var o=this.elements,s=2*i/(e-t),c=2*i/(r-n),l=(e+t)/(e-t),h=(r+n)/(r-n),u=-(a+i)/(a-i),p=-2*a*i/(a-i);return o[0]=s,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this},makeOrthographic:function(t,e,r,n,i,a){var o=this.elements,s=1/(e-t),c=1/(r-n),l=1/(a-i),h=(e+t)*s,u=(r+n)*c,p=(a+i)*l;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this},equals:function(t){for(var e=this.elements,r=t.elements,n=0;n<16;n++)if(e[n]!==r[n])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var r=0;r<16;r++)this.elements[r]=t[r+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}});var C=new P,O=new h;function D(t,e,r,n){this._x=t||0,this._y=e||0,this._z=r||0,this._order=n||D.DefaultOrder}function N(){this.mask=1}D.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],D.DefaultOrder="XYZ",Object.defineProperties(D.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}}),Object.assign(D.prototype,{isEuler:!0,set:function(t,e,r,n){return this._x=t,this._y=e,this._z=r,this._order=n||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},setFromRotationMatrix:function(t,e,r){var n=s.clamp,i=t.elements,a=i[0],o=i[4],c=i[8],l=i[1],h=i[5],u=i[9],p=i[2],d=i[6],f=i[10];return"XYZ"===(e=e||this._order)?(this._y=Math.asin(n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,h),this._z=0)):"YXZ"===e?(this._x=Math.asin(-n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,a),this._z=0)):"ZXY"===e?(this._x=Math.asin(n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,a))):"ZYX"===e?(this._y=Math.asin(-n(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,h))):"YZX"===e?(this._z=Math.asin(n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,f))):"XZY"===e?(this._z=Math.asin(-n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-u,f),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+e),this._order=e,!1!==r&&this._onChangeCallback(),this},setFromQuaternion:function(t,e,r){return C.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C,e,r)},setFromVector3:function(t,e){return this.set(t.x,t.y,t.z,e||this._order)},reorder:function(t){return O.setFromEuler(this),this.setFromQuaternion(O,t)},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new d(this._x,this._y,this._z)},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}}),Object.assign(N.prototype,{set:function(t){this.mask=1<<t|0},enable:function(t){this.mask|=1<<t|0},enableAll:function(){this.mask=-1},toggle:function(t){this.mask^=1<<t|0},disable:function(t){this.mask&=~(1<<t|0)},disableAll:function(){this.mask=0},test:function(t){return 0!=(this.mask&t.mask)}});var I=0,z=new d,B=new h,F=new P,G=new d,U=new d,H=new d,V=new h,j=new d(1,0,0),k=new d(0,1,0),W=new d(0,0,1),q={type:"added"},X={type:"removed"};function Y(){Object.defineProperty(this,"id",{value:I++}),this.uuid=s.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Y.DefaultUp.clone();var t=new d,e=new D,r=new h,n=new d(1,1,1);e._onChange((function(){r.setFromEuler(e,!1)})),r._onChange((function(){e.setFromQuaternion(r,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new P},normalMatrix:{value:new m}}),this.matrix=new P,this.matrixWorld=new P,this.matrixAutoUpdate=Y.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new N,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}function J(){Y.call(this),this.type="Scene",this.background=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Y.DefaultUp=new d(0,1,0),Y.DefaultMatrixAutoUpdate=!0,Y.prototype=Object.assign(Object.create(e.prototype),{constructor:Y,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return B.setFromAxisAngle(t,e),this.quaternion.multiply(B),this},rotateOnWorldAxis:function(t,e){return B.setFromAxisAngle(t,e),this.quaternion.premultiply(B),this},rotateX:function(t){return this.rotateOnAxis(j,t)},rotateY:function(t){return this.rotateOnAxis(k,t)},rotateZ:function(t){return this.rotateOnAxis(W,t)},translateOnAxis:function(t,e){return z.copy(t).applyQuaternion(this.quaternion),this.position.add(z.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(j,t)},translateY:function(t){return this.translateOnAxis(k,t)},translateZ:function(t){return this.translateOnAxis(W,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(F.getInverse(this.matrixWorld))},lookAt:function(t,e,r){t.isVector3?G.copy(t):G.set(t,e,r);var n=this.parent;this.updateWorldMatrix(!0,!1),U.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?F.lookAt(U,G,this.up):F.lookAt(G,U,this.up),this.quaternion.setFromRotationMatrix(F),n&&(F.extractRotation(n.matrixWorld),B.setFromRotationMatrix(F),this.quaternion.premultiply(B.inverse()))},add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(q)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}var r=this.children.indexOf(t);return-1!==r&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(X)),this},attach:function(t){return this.updateWorldMatrix(!0,!1),F.getInverse(this.matrixWorld),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),F.multiply(t.parent.matrixWorld)),t.applyMatrix(F),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(var r=0,n=this.children.length;r<n;r++){var i=this.children[r].getObjectByProperty(t,e);if(void 0!==i)return i}},getWorldPosition:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new d),this.updateMatrixWorld(!0),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new h),this.updateMatrixWorld(!0),this.matrixWorld.decompose(U,t,H),t},getWorldScale:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new d),this.updateMatrixWorld(!0),this.matrixWorld.decompose(U,V,t),t},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new d),this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);for(var e=this.children,r=0,n=e.length;r<n;r++)e[r].traverse(t)},traverseVisible:function(t){if(!1!==this.visible){t(this);for(var e=this.children,r=0,n=e.length;r<n;r++)e[r].traverseVisible(t)}},traverseAncestors:function(t){var e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);for(var e=this.children,r=0,n=e.length;r<n;r++)e[r].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){var r=this.parent;if(!0===t&&null!==r&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e)for(var n=this.children,i=0,a=n.length;i<a;i++)n[i].updateWorldMatrix(!1,!0)},toJSON:function(t){var e=void 0===t||"string"==typeof t,r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var n={};function i(e,r){return void 0===e[r.uuid]&&(e[r.uuid]=r.toJSON(t)),r.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isMesh&&0!==this.drawMode&&(n.drawMode=this.drawMode),this.isMesh||this.isLine||this.isPoints){n.geometry=i(t.geometries,this.geometry);var a=this.geometry.parameters;if(void 0!==a&&void 0!==a.shapes){var o=a.shapes;if(Array.isArray(o))for(var s=0,c=o.length;s<c;s++){var l=o[s];i(t.shapes,l)}else i(t.shapes,o)}}if(void 0!==this.material)if(Array.isArray(this.material)){var h=[];for(s=0,c=this.material.length;s<c;s++)h.push(i(t.materials,this.material[s]));n.material=h}else n.material=i(t.materials,this.material);if(this.children.length>0)for(n.children=[],s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(t).object);if(e){var u=m(t.geometries),p=m(t.materials),d=m(t.textures),f=m(t.images);o=m(t.shapes),u.length>0&&(r.geometries=u),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),f.length>0&&(r.images=f),o.length>0&&(r.shapes=o)}return r.object=n,r;function m(t){var e=[];for(var r in t){var n=t[r];delete n.metadata,e.push(n)}return e}},clone:function(t){return(new this.constructor).copy(this,t)},copy:function(t,e){if(void 0===e&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(var r=0;r<t.children.length;r++){var n=t.children[r];this.add(n.clone())}return this}}),J.prototype=Object.assign(Object.create(Y.prototype),{constructor:J,isScene:!0,copy:function(t,e){return Y.prototype.copy.call(this,t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},toJSON:function(t){var e=Y.prototype.toJSON.call(this,t);return null!==this.background&&(e.object.background=this.background.toJSON(t)),null!==this.fog&&(e.object.fog=this.fog.toJSON()),e},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Z=[new d,new d,new d,new d,new d,new d,new d,new d],Q=new d,K=new d,$=new d,tt=new d,et=new d,rt=new d,nt=new d,it=new d,at=new d,ot=new d,st=new d;function ct(t,e){this.min=void 0!==t?t:new d(1/0,1/0,1/0),this.max=void 0!==e?e:new d(-1/0,-1/0,-1/0)}function lt(t,e,r,n,i){var a,o;for(a=0,o=t.length-3;a<=o;a+=3){st.fromArray(t,a);var s=i.x*Math.abs(st.x)+i.y*Math.abs(st.y)+i.z*Math.abs(st.z),c=e.dot(st),l=r.dot(st),h=n.dot(st);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>s)return!1}return!0}Object.assign(ct.prototype,{isBox3:!0,set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromArray:function(t){for(var e=1/0,r=1/0,n=1/0,i=-1/0,a=-1/0,o=-1/0,s=0,c=t.length;s<c;s+=3){var l=t[s],h=t[s+1],u=t[s+2];l<e&&(e=l),h<r&&(r=h),u<n&&(n=u),l>i&&(i=l),h>a&&(a=h),u>o&&(o=u)}return this.min.set(e,r,n),this.max.set(i,a,o),this},setFromBufferAttribute:function(t){for(var e=1/0,r=1/0,n=1/0,i=-1/0,a=-1/0,o=-1/0,s=0,c=t.count;s<c;s++){var l=t.getX(s),h=t.getY(s),u=t.getZ(s);l<e&&(e=l),h<r&&(r=h),u<n&&(n=u),l>i&&(i=l),h>a&&(a=h),u>o&&(o=u)}return this.min.set(e,r,n),this.max.set(i,a,o),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(t,e){var r=Q.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},setFromObject:function(t){return this.makeEmpty(),this.expandByObject(t)},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(t){return void 0===t&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new d),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return void 0===t&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new d),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},expandByObject:function(t){var e,r;t.updateWorldMatrix(!1,!1);var n=t.geometry;if(void 0!==n)if(n.isGeometry){var i=n.vertices;for(e=0,r=i.length;e<r;e++)Q.copy(i[e]),Q.applyMatrix4(t.matrixWorld),this.expandByPoint(Q)}else if(n.isBufferGeometry){var a=n.attributes.position;if(void 0!==a)for(e=0,r=a.count;e<r;e++)Q.fromBufferAttribute(a,e).applyMatrix4(t.matrixWorld),this.expandByPoint(Q)}var o=t.children;for(e=0,r=o.length;e<r;e++)this.expandByObject(o[e]);return this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},getParameter:function(t,e){return void 0===e&&(console.warn("THREE.Box3: .getParameter() target is now required"),e=new d),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},intersectsSphere:function(t){return this.clampPoint(t.center,Q),Q.distanceToSquared(t.center)<=t.radius*t.radius},intersectsPlane:function(t){var e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant},intersectsTriangle:function(t){if(this.isEmpty())return!1;this.getCenter(it),at.subVectors(this.max,it),K.subVectors(t.a,it),$.subVectors(t.b,it),tt.subVectors(t.c,it),et.subVectors($,K),rt.subVectors(tt,$),nt.subVectors(K,tt);var e=[0,-et.z,et.y,0,-rt.z,rt.y,0,-nt.z,nt.y,et.z,0,-et.x,rt.z,0,-rt.x,nt.z,0,-nt.x,-et.y,et.x,0,-rt.y,rt.x,0,-nt.y,nt.x,0];return!!lt(e,K,$,tt,at)&&!!lt(e=[1,0,0,0,1,0,0,0,1],K,$,tt,at)&&(ot.crossVectors(et,rt),lt(e=[ot.x,ot.y,ot.z],K,$,tt,at))},clampPoint:function(t,e){return void 0===e&&(console.warn("THREE.Box3: .clampPoint() target is now required"),e=new d),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return Q.copy(t).clamp(this.min,this.max).sub(t).length()},getBoundingSphere:function(t){return void 0===t&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=.5*this.getSize(Q).length(),t},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},applyMatrix4:function(t){return this.isEmpty()||(Z[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Z[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Z[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Z[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Z[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Z[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Z[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Z[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Z)),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});var ht=new ct;function ut(t,e){this.center=void 0!==t?t:new d,this.radius=void 0!==e?e:0}Object.assign(ut.prototype,{set:function(t,e){return this.center.copy(t),this.radius=e,this},setFromPoints:function(t,e){var r=this.center;void 0!==e?r.copy(e):ht.setFromPoints(t).getCenter(r);for(var n=0,i=0,a=t.length;i<a;i++)n=Math.max(n,r.distanceToSquared(t[i]));return this.radius=Math.sqrt(n),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.center.copy(t.center),this.radius=t.radius,this},empty:function(){return this.radius<=0},containsPoint:function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(t){return t.distanceTo(this.center)-this.radius},intersectsSphere:function(t){var e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e},intersectsBox:function(t){return t.intersectsSphere(this)},intersectsPlane:function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},clampPoint:function(t,e){var r=this.center.distanceToSquared(t);return void 0===e&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),e=new d),e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e},getBoundingBox:function(t){return void 0===t&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new ct),t.set(this.center,this.center),t.expandByScalar(this.radius),t},applyMatrix4:function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},translate:function(t){return this.center.add(t),this},equals:function(t){return t.center.equals(this.center)&&t.radius===this.radius}});var pt=new d,dt=new d,ft=new d,mt=new d,gt=new d,vt=new d,yt=new d;function xt(t,e){this.origin=void 0!==t?t:new d,this.direction=void 0!==e?e:new d}Object.assign(xt.prototype,{set:function(t,e){return this.origin.copy(t),this.direction.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},at:function(t,e){return void 0===e&&(console.warn("THREE.Ray: .at() target is now required"),e=new d),e.copy(this.direction).multiplyScalar(t).add(this.origin)},lookAt:function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},recast:function(t){return this.origin.copy(this.at(t,pt)),this},closestPointToPoint:function(t,e){void 0===e&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),e=new d),e.subVectors(t,this.origin);var r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(r).add(this.origin)},distanceToPoint:function(t){return Math.sqrt(this.distanceSqToPoint(t))},distanceSqToPoint:function(t){var e=pt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pt.copy(this.direction).multiplyScalar(e).add(this.origin),pt.distanceToSquared(t))},distanceSqToSegment:function(t,e,r,n){dt.copy(t).add(e).multiplyScalar(.5),ft.copy(e).sub(t).normalize(),mt.copy(this.origin).sub(dt);var i,a,o,s,c=.5*t.distanceTo(e),l=-this.direction.dot(ft),h=mt.dot(this.direction),u=-mt.dot(ft),p=mt.lengthSq(),d=Math.abs(1-l*l);if(d>0)if(a=l*h-u,s=c*d,(i=l*u-h)>=0)if(a>=-s)if(a<=s){var f=1/d;o=(i*=f)*(i+l*(a*=f)+2*h)+a*(l*i+a+2*u)+p}else a=c,o=-(i=Math.max(0,-(l*a+h)))*i+a*(a+2*u)+p;else a=-c,o=-(i=Math.max(0,-(l*a+h)))*i+a*(a+2*u)+p;else a<=-s?o=-(i=Math.max(0,-(-l*c+h)))*i+(a=i>0?-c:Math.min(Math.max(-c,-u),c))*(a+2*u)+p:a<=s?(i=0,o=(a=Math.min(Math.max(-c,-u),c))*(a+2*u)+p):o=-(i=Math.max(0,-(l*c+h)))*i+(a=i>0?c:Math.min(Math.max(-c,-u),c))*(a+2*u)+p;else a=l>0?-c:c,o=-(i=Math.max(0,-(l*a+h)))*i+a*(a+2*u)+p;return r&&r.copy(this.direction).multiplyScalar(i).add(this.origin),n&&n.copy(ft).multiplyScalar(a).add(dt),o},intersectSphere:function(t,e){pt.subVectors(t.center,this.origin);var r=pt.dot(this.direction),n=pt.dot(pt)-r*r,i=t.radius*t.radius;if(n>i)return null;var a=Math.sqrt(i-n),o=r-a,s=r+a;return o<0&&s<0?null:o<0?this.at(s,e):this.at(o,e)},intersectsSphere:function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},distanceToPlane:function(t){var e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;var r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null},intersectPlane:function(t,e){var r=this.distanceToPlane(t);return null===r?null:this.at(r,e)},intersectsPlane:function(t){var e=t.distanceToPoint(this.origin);return 0===e||t.normal.dot(this.direction)*e<0},intersectBox:function(t,e){var r,n,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(r=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(r=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),l>=0?(i=(t.min.y-u.y)*l,a=(t.max.y-u.y)*l):(i=(t.max.y-u.y)*l,a=(t.min.y-u.y)*l),r>a||i>n?null:((i>r||r!=r)&&(r=i),(a<n||n!=n)&&(n=a),h>=0?(o=(t.min.z-u.z)*h,s=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,s=(t.min.z-u.z)*h),r>s||o>n?null:((o>r||r!=r)&&(r=o),(s<n||n!=n)&&(n=s),n<0?null:this.at(r>=0?r:n,e)))},intersectsBox:function(t){return null!==this.intersectBox(t,pt)},intersectTriangle:function(t,e,r,n,i){gt.subVectors(e,t),vt.subVectors(r,t),yt.crossVectors(gt,vt);var a,o=this.direction.dot(yt);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}mt.subVectors(this.origin,t);var s=a*this.direction.dot(vt.crossVectors(mt,vt));if(s<0)return null;var c=a*this.direction.dot(gt.cross(mt));if(c<0)return null;if(s+c>o)return null;var l=-a*mt.dot(yt);return l<0?null:this.at(l/o,i)},applyMatrix4:function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},equals:function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}});var bt=new d,wt=new d,_t=new d,Mt=new d,St=new d,Tt=new d,Et=new d,At=new d,Lt=new d,Rt=new d;function Pt(t,e,r){this.a=void 0!==t?t:new d,this.b=void 0!==e?e:new d,this.c=void 0!==r?r:new d}Object.assign(Pt,{getNormal:function(t,e,r,n){void 0===n&&(console.warn("THREE.Triangle: .getNormal() target is now required"),n=new d),n.subVectors(r,e),bt.subVectors(t,e),n.cross(bt);var i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)},getBarycoord:function(t,e,r,n,i){bt.subVectors(n,e),wt.subVectors(r,e),_t.subVectors(t,e);var a=bt.dot(bt),o=bt.dot(wt),s=bt.dot(_t),c=wt.dot(wt),l=wt.dot(_t),h=a*c-o*o;if(void 0===i&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),i=new d),0===h)return i.set(-2,-1,-1);var u=1/h,p=(c*s-o*l)*u,f=(a*l-o*s)*u;return i.set(1-p-f,f,p)},containsPoint:function(t,e,r,n){return Pt.getBarycoord(t,e,r,n,Mt),Mt.x>=0&&Mt.y>=0&&Mt.x+Mt.y<=1},getUV:function(t,e,r,n,i,a,o,s){return this.getBarycoord(t,e,r,n,Mt),s.set(0,0),s.addScaledVector(i,Mt.x),s.addScaledVector(a,Mt.y),s.addScaledVector(o,Mt.z),s},isFrontFacing:function(t,e,r,n){return bt.subVectors(r,e),wt.subVectors(t,e),bt.cross(wt).dot(n)<0}}),Object.assign(Pt.prototype,{set:function(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this},setFromPointsAndIndices:function(t,e,r,n){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[n]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},getArea:function(){return bt.subVectors(this.c,this.b),wt.subVectors(this.a,this.b),.5*bt.cross(wt).length()},getMidpoint:function(t){return void 0===t&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new d),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(t){return Pt.getNormal(this.a,this.b,this.c,t)},getPlane:function(t){return void 0===t&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new d),t.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(t,e){return Pt.getBarycoord(t,this.a,this.b,this.c,e)},getUV:function(t,e,r,n,i){return Pt.getUV(t,this.a,this.b,this.c,e,r,n,i)},containsPoint:function(t){return Pt.containsPoint(t,this.a,this.b,this.c)},isFrontFacing:function(t){return Pt.isFrontFacing(this.a,this.b,this.c,t)},intersectsBox:function(t){return t.intersectsTriangle(this)},closestPointToPoint:function(t,e){void 0===e&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),e=new d);var r,n,i=this.a,a=this.b,o=this.c;St.subVectors(a,i),Tt.subVectors(o,i),At.subVectors(t,i);var s=St.dot(At),c=Tt.dot(At);if(s<=0&&c<=0)return e.copy(i);Lt.subVectors(t,a);var l=St.dot(Lt),h=Tt.dot(Lt);if(l>=0&&h<=l)return e.copy(a);var u=s*h-l*c;if(u<=0&&s>=0&&l<=0)return r=s/(s-l),e.copy(i).addScaledVector(St,r);Rt.subVectors(t,o);var p=St.dot(Rt),f=Tt.dot(Rt);if(f>=0&&p<=f)return e.copy(o);var m=p*c-s*f;if(m<=0&&c>=0&&f<=0)return n=c/(c-f),e.copy(i).addScaledVector(Tt,n);var g=l*f-p*h;if(g<=0&&h-l>=0&&p-f>=0)return Et.subVectors(o,a),n=(h-l)/(h-l+(p-f)),e.copy(a).addScaledVector(Et,n);var v=1/(g+m+u);return r=m*v,n=u*v,e.copy(i).addScaledVector(St,r).addScaledVector(Tt,n)},equals:function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}});var Ct={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ot={h:0,s:0,l:0},Dt={h:0,s:0,l:0};function Nt(t,e,r){return void 0===e&&void 0===r?this.set(t):this.setRGB(t,e,r)}function It(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+6*(e-t)*(2/3-r):t}function zt(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Bt(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}function Ft(t,e,r,n,i,a){this.a=t,this.b=e,this.c=r,this.normal=n&&n.isVector3?n:new d,this.vertexNormals=Array.isArray(n)?n:[],this.color=i&&i.isColor?i:new Nt,this.vertexColors=Array.isArray(i)?i:[],this.materialIndex=void 0!==a?a:0}Object.assign(Nt.prototype,{isColor:!0,r:1,g:1,b:1,set:function(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this},setScalar:function(t){return this.r=t,this.g=t,this.b=t,this},setHex:function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this},setRGB:function(t,e,r){return this.r=t,this.g=e,this.b=r,this},setHSL:function(t,e,r){if(t=s.euclideanModulo(t,1),e=s.clamp(e,0,1),r=s.clamp(r,0,1),0===e)this.r=this.g=this.b=r;else{var n=r<=.5?r*(1+e):r+e-r*e,i=2*r-n;this.r=It(i,n,t+1/3),this.g=It(i,n,t),this.b=It(i,n,t-1/3)}return this},setStyle:function(t){function e(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var r;if(r=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)){var n,i=r[1],a=r[2];switch(i){case"rgb":case"rgba":if(n=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,e(n[5]),this;if(n=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,e(n[5]),this;break;case"hsl":case"hsla":if(n=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)){var o=parseFloat(n[1])/360,s=parseInt(n[2],10)/100,c=parseInt(n[3],10)/100;return e(n[5]),this.setHSL(o,s,c)}}}else if(r=/^\#([A-Fa-f0-9]+)$/.exec(t)){var l,h=(l=r[1]).length;if(3===h)return this.r=parseInt(l.charAt(0)+l.charAt(0),16)/255,this.g=parseInt(l.charAt(1)+l.charAt(1),16)/255,this.b=parseInt(l.charAt(2)+l.charAt(2),16)/255,this;if(6===h)return this.r=parseInt(l.charAt(0)+l.charAt(1),16)/255,this.g=parseInt(l.charAt(2)+l.charAt(3),16)/255,this.b=parseInt(l.charAt(4)+l.charAt(5),16)/255,this}return t&&t.length>0&&(void 0!==(l=Ct[t])?this.setHex(l):console.warn("THREE.Color: Unknown color "+t)),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},copyGammaToLinear:function(t,e){return void 0===e&&(e=2),this.r=Math.pow(t.r,e),this.g=Math.pow(t.g,e),this.b=Math.pow(t.b,e),this},copyLinearToGamma:function(t,e){void 0===e&&(e=2);var r=e>0?1/e:1;return this.r=Math.pow(t.r,r),this.g=Math.pow(t.g,r),this.b=Math.pow(t.b,r),this},convertGammaToLinear:function(t){return this.copyGammaToLinear(this,t),this},convertLinearToGamma:function(t){return this.copyLinearToGamma(this,t),this},copySRGBToLinear:function(t){return this.r=zt(t.r),this.g=zt(t.g),this.b=zt(t.b),this},copyLinearToSRGB:function(t){return this.r=Bt(t.r),this.g=Bt(t.g),this.b=Bt(t.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(t){void 0===t&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});var e,r,n=this.r,i=this.g,a=this.b,o=Math.max(n,i,a),s=Math.min(n,i,a),c=(s+o)/2;if(s===o)e=0,r=0;else{var l=o-s;switch(r=c<=.5?l/(o+s):l/(2-o-s),o){case n:e=(i-a)/l+(i<a?6:0);break;case i:e=(a-n)/l+2;break;case a:e=(n-i)/l+4}e/=6}return t.h=e,t.s=r,t.l=c,t},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(t,e,r){return this.getHSL(Ot),Ot.h+=t,Ot.s+=e,Ot.l+=r,this.setHSL(Ot.h,Ot.s,Ot.l),this},add:function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},addColors:function(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this},addScalar:function(t){return this.r+=t,this.g+=t,this.b+=t,this},sub:function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},multiply:function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},multiplyScalar:function(t){return this.r*=t,this.g*=t,this.b*=t,this},lerp:function(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this},lerpHSL:function(t,e){this.getHSL(Ot),t.getHSL(Dt);var r=s.lerp(Ot.h,Dt.h,e),n=s.lerp(Ot.s,Dt.s,e),i=s.lerp(Ot.l,Dt.l,e);return this.setHSL(r,n,i),this},equals:function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},fromArray:function(t,e){return void 0===e&&(e=0),this.r=t[e],this.g=t[e+1],this.b=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t},toJSON:function(){return this.getHex()}}),Object.assign(Ft.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var e=0,r=t.vertexNormals.length;e<r;e++)this.vertexNormals[e]=t.vertexNormals[e].clone();for(e=0,r=t.vertexColors.length;e<r;e++)this.vertexColors[e]=t.vertexColors[e].clone();return this}});var Gt=0;function Ut(){Object.defineProperty(this,"id",{value:Gt++}),this.uuid=s.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.lights=!0,this.blending=1,this.side=0,this.flatShading=!1,this.vertexTangents=!1,this.vertexColors=0,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilFunc=519,this.stencilRef=0,this.stencilMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.needsUpdate=!0}function Ht(t){Ut.call(this),this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.lights=!1,this.setValues(t)}function Vt(t,e,r){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===r,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}function jt(t,e,r){Vt.call(this,new Int8Array(t),e,r)}function kt(t,e,r){Vt.call(this,new Uint8Array(t),e,r)}function Wt(t,e,r){Vt.call(this,new Uint8ClampedArray(t),e,r)}function qt(t,e,r){Vt.call(this,new Int16Array(t),e,r)}function Xt(t,e,r){Vt.call(this,new Uint16Array(t),e,r)}function Yt(t,e,r){Vt.call(this,new Int32Array(t),e,r)}function Jt(t,e,r){Vt.call(this,new Uint32Array(t),e,r)}function Zt(t,e,r){Vt.call(this,new Float32Array(t),e,r)}function Qt(t,e,r){Vt.call(this,new Float64Array(t),e,r)}function Kt(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}function $t(t){if(0===t.length)return-1/0;for(var e=t[0],r=1,n=t.length;r<n;++r)t[r]>e&&(e=t[r]);return e}Ut.prototype=Object.assign(Object.create(e.prototype),{constructor:Ut,isMaterial:!0,onBeforeCompile:function(){},setValues:function(t){if(void 0!==t)for(var e in t){var r=t[e];if(void 0!==r)if("shading"!==e){var n=this[e];void 0!==n?n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[e]=r:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}else console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===r;else console.warn("THREE.Material: '"+e+"' parameter is undefined.")}},toJSON:function(t){var e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});var r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(t){var e=[];for(var r in t){var n=t[r];delete n.metadata,e.push(n)}return e}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),void 0!==this.roughness&&(r.roughness=this.roughness),void 0!==this.metalness&&(r.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),void 0!==this.shininess&&(r.shininess=this.shininess),void 0!==this.clearcoat&&(r.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,r.reflectivity=this.reflectivity,r.refractionRatio=this.refractionRatio,void 0!==this.combine&&(r.combine=this.combine),void 0!==this.envMapIntensity&&(r.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.size&&(r.size=this.size),void 0!==this.sizeAttenuation&&(r.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(r.blending=this.blending),!0===this.flatShading&&(r.flatShading=this.flatShading),0!==this.side&&(r.side=this.side),0!==this.vertexColors&&(r.vertexColors=this.vertexColors),this.opacity<1&&(r.opacity=this.opacity),!0===this.transparent&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.stencilWrite=this.stencilWrite,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilMask=this.stencilMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(r.rotation=this.rotation),!0===this.polygonOffset&&(r.polygonOffset=!0),0!==this.polygonOffsetFactor&&(r.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(r.linewidth=this.linewidth),void 0!==this.dashSize&&(r.dashSize=this.dashSize),void 0!==this.gapSize&&(r.gapSize=this.gapSize),void 0!==this.scale&&(r.scale=this.scale),!0===this.dithering&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(r.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(r.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(r.wireframeLinejoin=this.wireframeLinejoin),!0===this.morphTargets&&(r.morphTargets=!0),!0===this.morphNormals&&(r.morphNormals=!0),!0===this.skinning&&(r.skinning=!0),!1===this.visible&&(r.visible=!1),!1===this.toneMapped&&(r.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&&(r.userData=this.userData),e){var i=n(t.textures),a=n(t.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r},clone:function(){return(new this.constructor).copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.lights=t.lights,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWrite=t.stencilWrite,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilMask=t.stencilMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this.clipShadows=t.clipShadows,this.clipIntersection=t.clipIntersection;var e=t.clippingPlanes,r=null;if(null!==e){var n=e.length;r=new Array(n);for(var i=0;i!==n;++i)r[i]=e[i].clone()}return this.clippingPlanes=r,this.shadowSide=t.shadowSide,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),Ht.prototype=Object.create(Ut.prototype),Ht.prototype.constructor=Ht,Ht.prototype.isMeshBasicMaterial=!0,Ht.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this},Object.defineProperty(Vt.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(Vt.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=void 0!==t?t.length/this.itemSize:0,this.array=t,this},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.dynamic=t.dynamic,this},copyAt:function(t,e,r){t*=this.itemSize,r*=e.itemSize;for(var n=0,i=this.itemSize;n<i;n++)this.array[t+n]=e.array[r+n];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){for(var e=this.array,r=0,n=0,i=t.length;n<i;n++){var a=t[n];void 0===a&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new Nt),e[r++]=a.r,e[r++]=a.g,e[r++]=a.b}return this},copyVector2sArray:function(t){for(var e=this.array,r=0,n=0,i=t.length;n<i;n++){var a=t[n];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new l),e[r++]=a.x,e[r++]=a.y}return this},copyVector3sArray:function(t){for(var e=this.array,r=0,n=0,i=t.length;n<i;n++){var a=t[n];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new d),e[r++]=a.x,e[r++]=a.y,e[r++]=a.z}return this},copyVector4sArray:function(t){for(var e=this.array,r=0,n=0,i=t.length;n<i;n++){var a=t[n];void 0===a&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new x),e[r++]=a.x,e[r++]=a.y,e[r++]=a.z,e[r++]=a.w}return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this},setXYZ:function(t,e,r,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this},setXYZW:function(t,e,r,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this.array[t+3]=i,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),jt.prototype=Object.create(Vt.prototype),jt.prototype.constructor=jt,kt.prototype=Object.create(Vt.prototype),kt.prototype.constructor=kt,Wt.prototype=Object.create(Vt.prototype),Wt.prototype.constructor=Wt,qt.prototype=Object.create(Vt.prototype),qt.prototype.constructor=qt,Xt.prototype=Object.create(Vt.prototype),Xt.prototype.constructor=Xt,Yt.prototype=Object.create(Vt.prototype),Yt.prototype.constructor=Yt,Jt.prototype=Object.create(Vt.prototype),Jt.prototype.constructor=Jt,Zt.prototype=Object.create(Vt.prototype),Zt.prototype.constructor=Zt,Qt.prototype=Object.create(Vt.prototype),Qt.prototype.constructor=Qt,Object.assign(Kt.prototype,{computeGroups:function(t){for(var e,r=[],n=void 0,i=t.faces,a=0;a<i.length;a++){var o=i[a];o.materialIndex!==n&&(n=o.materialIndex,void 0!==e&&(e.count=3*a-e.start,r.push(e)),e={start:3*a,materialIndex:n})}void 0!==e&&(e.count=3*a-e.start,r.push(e)),this.groups=r},fromGeometry:function(t){var e,r=t.faces,n=t.vertices,i=t.faceVertexUvs,a=i[0]&&i[0].length>0,o=i[1]&&i[1].length>0,s=t.morphTargets,c=s.length;if(c>0){e=[];for(var h=0;h<c;h++)e[h]={name:s[h].name,data:[]};this.morphTargets.position=e}var u,p=t.morphNormals,d=p.length;if(d>0){for(u=[],h=0;h<d;h++)u[h]={name:p[h].name,data:[]};this.morphTargets.normal=u}var f=t.skinIndices,m=t.skinWeights,g=f.length===n.length,v=m.length===n.length;for(n.length>0&&0===r.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported."),h=0;h<r.length;h++){var y=r[h];this.vertices.push(n[y.a],n[y.b],n[y.c]);var x=y.vertexNormals;if(3===x.length)this.normals.push(x[0],x[1],x[2]);else{var b=y.normal;this.normals.push(b,b,b)}var w,_=y.vertexColors;if(3===_.length)this.colors.push(_[0],_[1],_[2]);else{var M=y.color;this.colors.push(M,M,M)}!0===a&&(void 0!==(w=i[0][h])?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",h),this.uvs.push(new l,new l,new l))),!0===o&&(void 0!==(w=i[1][h])?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",h),this.uvs2.push(new l,new l,new l)));for(var S=0;S<c;S++){var T=s[S].vertices;e[S].data.push(T[y.a],T[y.b],T[y.c])}for(S=0;S<d;S++){var E=p[S].vertexNormals[h];u[S].data.push(E.a,E.b,E.c)}g&&this.skinIndices.push(f[y.a],f[y.b],f[y.c]),v&&this.skinWeights.push(m[y.a],m[y.b],m[y.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this}});var te=1,ee=new P,re=new Y,ne=new d,ie=new ct,ae=new ct,oe=new d;function se(){Object.defineProperty(this,"id",{value:te+=2}),this.uuid=s.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}se.prototype=Object.assign(Object.create(e.prototype),{constructor:se,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new($t(t)>65535?Jt:Xt)(t,1):this.index=t},addAttribute:function(t,e){return e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?"index"===t?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):(this.attributes[t]=e,this):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(t,new Vt(arguments[1],arguments[2])))},getAttribute:function(t){return this.attributes[t]},removeAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,r){this.groups.push({start:t,count:e,materialIndex:void 0!==r?r:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix:function(t){var e=this.attributes.position;void 0!==e&&(t.applyToBufferAttribute(e),e.needsUpdate=!0);var r=this.attributes.normal;void 0!==r&&((new m).getNormalMatrix(t).applyToBufferAttribute(r),r.needsUpdate=!0);var n=this.attributes.tangent;return void 0!==n&&((new m).getNormalMatrix(t).applyToBufferAttribute(n),n.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(t){return ee.makeRotationX(t),this.applyMatrix(ee),this},rotateY:function(t){return ee.makeRotationY(t),this.applyMatrix(ee),this},rotateZ:function(t){return ee.makeRotationZ(t),this.applyMatrix(ee),this},translate:function(t,e,r){return ee.makeTranslation(t,e,r),this.applyMatrix(ee),this},scale:function(t,e,r){return ee.makeScale(t,e,r),this.applyMatrix(ee),this},lookAt:function(t){return re.lookAt(t),re.updateMatrix(),this.applyMatrix(re.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ne).negate(),this.translate(ne.x,ne.y,ne.z),this},setFromObject:function(t){var e=t.geometry;if(t.isPoints||t.isLine){var r=new Zt(3*e.vertices.length,3),n=new Zt(3*e.colors.length,3);if(this.addAttribute("position",r.copyVector3sArray(e.vertices)),this.addAttribute("color",n.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){var i=new Zt(e.lineDistances.length,1);this.addAttribute("lineDistance",i.copyArray(e.lineDistances))}null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){for(var e=[],r=0,n=t.length;r<n;r++){var i=t[r];e.push(i.x,i.y,i.z||0)}return this.addAttribute("position",new Zt(e,3)),this},updateFromObject:function(t){var e,r=t.geometry;if(t.isMesh){var n=r.__directGeometry;if(!0===r.elementsNeedUpdate&&(n=void 0,r.elementsNeedUpdate=!1),void 0===n)return this.fromGeometry(r);n.verticesNeedUpdate=r.verticesNeedUpdate,n.normalsNeedUpdate=r.normalsNeedUpdate,n.colorsNeedUpdate=r.colorsNeedUpdate,n.uvsNeedUpdate=r.uvsNeedUpdate,n.groupsNeedUpdate=r.groupsNeedUpdate,r.verticesNeedUpdate=!1,r.normalsNeedUpdate=!1,r.colorsNeedUpdate=!1,r.uvsNeedUpdate=!1,r.groupsNeedUpdate=!1,r=n}return!0===r.verticesNeedUpdate&&(void 0!==(e=this.attributes.position)&&(e.copyVector3sArray(r.vertices),e.needsUpdate=!0),r.verticesNeedUpdate=!1),!0===r.normalsNeedUpdate&&(void 0!==(e=this.attributes.normal)&&(e.copyVector3sArray(r.normals),e.needsUpdate=!0),r.normalsNeedUpdate=!1),!0===r.colorsNeedUpdate&&(void 0!==(e=this.attributes.color)&&(e.copyColorsArray(r.colors),e.needsUpdate=!0),r.colorsNeedUpdate=!1),r.uvsNeedUpdate&&(void 0!==(e=this.attributes.uv)&&(e.copyVector2sArray(r.uvs),e.needsUpdate=!0),r.uvsNeedUpdate=!1),r.lineDistancesNeedUpdate&&(void 0!==(e=this.attributes.lineDistance)&&(e.copyArray(r.lineDistances),e.needsUpdate=!0),r.lineDistancesNeedUpdate=!1),r.groupsNeedUpdate&&(r.computeGroups(t.geometry),this.groups=r.groups,r.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=(new Kt).fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){var e=new Float32Array(3*t.vertices.length);if(this.addAttribute("position",new Vt(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){var r=new Float32Array(3*t.normals.length);this.addAttribute("normal",new Vt(r,3).copyVector3sArray(t.normals))}if(t.colors.length>0){var n=new Float32Array(3*t.colors.length);this.addAttribute("color",new Vt(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){var i=new Float32Array(2*t.uvs.length);this.addAttribute("uv",new Vt(i,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){var a=new Float32Array(2*t.uvs2.length);this.addAttribute("uv2",new Vt(a,2).copyVector2sArray(t.uvs2))}for(var o in this.groups=t.groups,t.morphTargets){for(var s=[],c=t.morphTargets[o],l=0,h=c.length;l<h;l++){var u=c[l],p=new Zt(3*u.data.length,3);p.name=u.name,s.push(p.copyVector3sArray(u.data))}this.morphAttributes[o]=s}if(t.skinIndices.length>0){var d=new Zt(4*t.skinIndices.length,4);this.addAttribute("skinIndex",d.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){var f=new Zt(4*t.skinWeights.length,4);this.addAttribute("skinWeight",f.copyVector4sArray(t.skinWeights))}return null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new ct);var t=this.attributes.position,e=this.morphAttributes.position;if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(var r=0,n=e.length;r<n;r++){var i=e[r];ie.setFromBufferAttribute(i),this.boundingBox.expandByPoint(ie.min),this.boundingBox.expandByPoint(ie.max)}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new ut);var t=this.attributes.position,e=this.morphAttributes.position;if(t){var r=this.boundingSphere.center;if(ie.setFromBufferAttribute(t),e)for(var n=0,i=e.length;n<i;n++){var a=e[n];ae.setFromBufferAttribute(a),ie.expandByPoint(ae.min),ie.expandByPoint(ae.max)}ie.getCenter(r);var o=0;for(n=0,i=t.count;n<i;n++)oe.fromBufferAttribute(t,n),o=Math.max(o,r.distanceToSquared(oe));if(e)for(n=0,i=e.length;n<i;n++)for(var s=0,c=(a=e[n]).count;s<c;s++)oe.fromBufferAttribute(a,s),o=Math.max(o,r.distanceToSquared(oe));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){var t=this.index,e=this.attributes;if(e.position){var r=e.position.array;if(void 0===e.normal)this.addAttribute("normal",new Vt(new Float32Array(r.length),3));else for(var n=e.normal.array,i=0,a=n.length;i<a;i++)n[i]=0;var o,s,c,l=e.normal.array,h=new d,u=new d,p=new d,f=new d,m=new d;if(t){var g=t.array;for(i=0,a=t.count;i<a;i+=3)o=3*g[i+0],s=3*g[i+1],c=3*g[i+2],h.fromArray(r,o),u.fromArray(r,s),p.fromArray(r,c),f.subVectors(p,u),m.subVectors(h,u),f.cross(m),l[o]+=f.x,l[o+1]+=f.y,l[o+2]+=f.z,l[s]+=f.x,l[s+1]+=f.y,l[s+2]+=f.z,l[c]+=f.x,l[c+1]+=f.y,l[c+2]+=f.z}else for(i=0,a=r.length;i<a;i+=9)h.fromArray(r,i),u.fromArray(r,i+3),p.fromArray(r,i+6),f.subVectors(p,u),m.subVectors(h,u),f.cross(m),l[i]=f.x,l[i+1]=f.y,l[i+2]=f.z,l[i+3]=f.x,l[i+4]=f.y,l[i+5]=f.z,l[i+6]=f.x,l[i+7]=f.y,l[i+8]=f.z;this.normalizeNormals(),e.normal.needsUpdate=!0}},merge:function(t,e){if(t&&t.isBufferGeometry){void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var r=this.attributes;for(var n in r)if(void 0!==t.attributes[n])for(var i=r[n].array,a=t.attributes[n],o=a.array,s=a.itemSize*e,c=Math.min(o.length,i.length-s),l=0,h=s;l<c;l++,h++)i[h]=o[l];return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t)},normalizeNormals:function(){for(var t=this.attributes.normal,e=0,r=t.count;e<r;e++)oe.x=t.getX(e),oe.y=t.getY(e),oe.z=t.getZ(e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)},toNonIndexed:function(){function t(t,e){for(var r=t.array,n=t.itemSize,i=new r.constructor(e.length*n),a=0,o=0,s=0,c=e.length;s<c;s++){a=e[s]*n;for(var l=0;l<n;l++)i[o++]=r[a++]}return new Vt(i,n)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var e=new se,r=this.index.array,n=this.attributes;for(var i in n){var a=t(n[i],r);e.addAttribute(i,a)}var o=this.morphAttributes;for(i in o){for(var s=[],c=o[i],l=0,h=c.length;l<h;l++)a=t(c[l],r),s.push(a);e.morphAttributes[i]=s}for(var u=this.groups,p=(l=0,u.length);l<p;l++){var d=u[l];e.addGroup(d.start,d.count,d.materialIndex)}return e},toJSON:function(){var t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){var e=this.parameters;for(var r in e)void 0!==e[r]&&(t[r]=e[r]);return t}t.data={attributes:{}};var n=this.index;null!==n&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});var i=this.attributes;for(var r in i){var a=(p=i[r]).toJSON();""!==p.name&&(a.name=p.name),t.data.attributes[r]=a}var o={},s=!1;for(var r in this.morphAttributes){for(var c=this.morphAttributes[r],l=[],h=0,u=c.length;h<u;h++){var p;a=(p=c[h]).toJSON(),""!==p.name&&(a.name=p.name),l.push(a)}l.length>0&&(o[r]=l,s=!0)}s&&(t.data.morphAttributes=o);var d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));var f=this.boundingSphere;return null!==f&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t},clone:function(){return(new se).copy(this)},copy:function(t){var e,r,n;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;var i=t.index;null!==i&&this.setIndex(i.clone());var a=t.attributes;for(e in a){var o=a[e];this.addAttribute(e,o.clone())}var s=t.morphAttributes;for(e in s){var c=[],l=s[e];for(r=0,n=l.length;r<n;r++)c.push(l[r].clone());this.morphAttributes[e]=c}var h=t.groups;for(r=0,n=h.length;r<n;r++){var u=h[r];this.addGroup(u.start,u.count,u.materialIndex)}var p=t.boundingBox;null!==p&&(this.boundingBox=p.clone());var d=t.boundingSphere;return null!==d&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var ce=new P,le=new xt,he=new ut,ue=new d,pe=new d,de=new d,fe=new d,me=new d,ge=new d,ve=new d,ye=new d,xe=new d,be=new l,we=new l,_e=new l,Me=new d,Se=new d;function Te(t,e){Y.call(this),this.type="Mesh",this.geometry=void 0!==t?t:new se,this.material=void 0!==e?e:new Ht({color:16777215*Math.random()}),this.drawMode=0,this.updateMorphTargets()}function Ee(t,e,r,n,i,a,o,s){if(null===(1===e.side?n.intersectTriangle(o,a,i,!0,s):n.intersectTriangle(i,a,o,2!==e.side,s)))return null;Se.copy(s),Se.applyMatrix4(t.matrixWorld);var c=r.ray.origin.distanceTo(Se);return c<r.near||c>r.far?null:{distance:c,point:Se.clone(),object:t}}function Ae(t,e,r,n,i,a,o,s,c,h,u){ue.fromBufferAttribute(i,c),pe.fromBufferAttribute(i,h),de.fromBufferAttribute(i,u);var p=t.morphTargetInfluences;if(e.morphTargets&&a&&p){ve.set(0,0,0),ye.set(0,0,0),xe.set(0,0,0);for(var d=0,f=a.length;d<f;d++){var m=p[d],g=a[d];0!==m&&(fe.fromBufferAttribute(g,c),me.fromBufferAttribute(g,h),ge.fromBufferAttribute(g,u),ve.addScaledVector(fe.sub(ue),m),ye.addScaledVector(me.sub(pe),m),xe.addScaledVector(ge.sub(de),m))}ue.add(ve),pe.add(ye),de.add(xe)}var v=Ee(t,e,r,n,ue,pe,de,Me);if(v){o&&(be.fromBufferAttribute(o,c),we.fromBufferAttribute(o,h),_e.fromBufferAttribute(o,u),v.uv=Pt.getUV(Me,ue,pe,de,be,we,_e,new l)),s&&(be.fromBufferAttribute(s,c),we.fromBufferAttribute(s,h),_e.fromBufferAttribute(s,u),v.uv2=Pt.getUV(Me,ue,pe,de,be,we,_e,new l));var y=new Ft(c,h,u);Pt.getNormal(ue,pe,de,y.normal),v.face=y}return v}Te.prototype=Object.assign(Object.create(Y.prototype),{constructor:Te,isMesh:!0,setDrawMode:function(t){this.drawMode=t},copy:function(t){return Y.prototype.copy.call(this,t),this.drawMode=t.drawMode,void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this},updateMorphTargets:function(){var t,e,r,n=this.geometry;if(n.isBufferGeometry){var i=n.morphAttributes,a=Object.keys(i);if(a.length>0){var o=i[a[0]];if(void 0!==o)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},t=0,e=o.length;t<e;t++)r=o[t].name||String(t),this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=t}}else{var s=n.morphTargets;void 0!==s&&s.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){var r,n=this.geometry,i=this.material,a=this.matrixWorld;if(void 0!==i&&(null===n.boundingSphere&&n.computeBoundingSphere(),he.copy(n.boundingSphere),he.applyMatrix4(a),!1!==t.ray.intersectsSphere(he)&&(ce.getInverse(a),le.copy(t.ray).applyMatrix4(ce),null===n.boundingBox||!1!==le.intersectsBox(n.boundingBox))))if(n.isBufferGeometry){var o,s,c,h,u,p,d,f,m,g=n.index,v=n.attributes.position,y=n.morphAttributes.position,x=n.attributes.uv,b=n.attributes.uv2,w=n.groups,_=n.drawRange;if(null!==g)if(Array.isArray(i))for(h=0,p=w.length;h<p;h++)for(m=i[(f=w[h]).materialIndex],u=Math.max(f.start,_.start),d=Math.min(f.start+f.count,_.start+_.count);u<d;u+=3)o=g.getX(u),s=g.getX(u+1),c=g.getX(u+2),(r=Ae(this,m,t,le,v,y,x,b,o,s,c))&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=f.materialIndex,e.push(r));else for(h=Math.max(0,_.start),p=Math.min(g.count,_.start+_.count);h<p;h+=3)o=g.getX(h),s=g.getX(h+1),c=g.getX(h+2),(r=Ae(this,i,t,le,v,y,x,b,o,s,c))&&(r.faceIndex=Math.floor(h/3),e.push(r));else if(void 0!==v)if(Array.isArray(i))for(h=0,p=w.length;h<p;h++)for(m=i[(f=w[h]).materialIndex],u=Math.max(f.start,_.start),d=Math.min(f.start+f.count,_.start+_.count);u<d;u+=3)(r=Ae(this,m,t,le,v,y,x,b,o=u,s=u+1,c=u+2))&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=f.materialIndex,e.push(r));else for(h=Math.max(0,_.start),p=Math.min(v.count,_.start+_.count);h<p;h+=3)(r=Ae(this,i,t,le,v,y,x,b,o=h,s=h+1,c=h+2))&&(r.faceIndex=Math.floor(h/3),e.push(r))}else if(n.isGeometry){var M,S,T,E,A=Array.isArray(i),L=n.vertices,R=n.faces,P=n.faceVertexUvs[0];P.length>0&&(E=P);for(var C=0,O=R.length;C<O;C++){var D=R[C],N=A?i[D.materialIndex]:i;if(void 0!==N&&(M=L[D.a],S=L[D.b],T=L[D.c],r=Ee(this,N,t,le,M,S,T,Me))){if(E&&E[C]){var I=E[C];be.copy(I[0]),we.copy(I[1]),_e.copy(I[2]),r.uv=Pt.getUV(Me,M,S,T,be,we,_e,new l)}r.face=D,r.faceIndex=C,e.push(r)}}}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});var Le=0,Re=new P,Pe=new Y,Ce=new d;function Oe(){Object.defineProperty(this,"id",{value:Le+=2}),this.uuid=s.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}function De(t,e,r,n,i,a){Oe.call(this),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:n,heightSegments:i,depthSegments:a},this.fromBufferGeometry(new Ne(t,e,r,n,i,a)),this.mergeVertices()}function Ne(t,e,r,n,i,a){se.call(this),this.type="BoxBufferGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};var o=this;t=t||1,e=e||1,r=r||1,n=Math.floor(n)||1,i=Math.floor(i)||1,a=Math.floor(a)||1;var s=[],c=[],l=[],h=[],u=0,p=0;function f(t,e,r,n,i,a,f,m,g,v,y){var x,b,w=a/g,_=f/v,M=a/2,S=f/2,T=m/2,E=g+1,A=v+1,L=0,R=0,P=new d;for(b=0;b<A;b++){var C=b*_-S;for(x=0;x<E;x++){var O=x*w-M;P[t]=O*n,P[e]=C*i,P[r]=T,c.push(P.x,P.y,P.z),P[t]=0,P[e]=0,P[r]=m>0?1:-1,l.push(P.x,P.y,P.z),h.push(x/g),h.push(1-b/v),L+=1}}for(b=0;b<v;b++)for(x=0;x<g;x++){var D=u+x+E*b,N=u+x+E*(b+1),I=u+(x+1)+E*(b+1),z=u+(x+1)+E*b;s.push(D,N,z),s.push(N,I,z),R+=6}o.addGroup(p,R,y),p+=R,u+=L}f("z","y","x",-1,-1,r,e,t,a,i,0),f("z","y","x",1,-1,r,e,-t,a,i,1),f("x","z","y",1,1,t,r,e,n,a,2),f("x","z","y",1,-1,t,r,-e,n,a,3),f("x","y","z",1,-1,t,e,r,n,i,4),f("x","y","z",-1,-1,t,e,-r,n,i,5),this.setIndex(s),this.addAttribute("position",new Zt(c,3)),this.addAttribute("normal",new Zt(l,3)),this.addAttribute("uv",new Zt(h,2))}function Ie(t){var e={};for(var r in t)for(var n in e[r]={},t[r]){var i=t[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture)?e[r][n]=i.clone():Array.isArray(i)?e[r][n]=i.slice():e[r][n]=i}return e}function ze(t){for(var e={},r=0;r<t.length;r++){var n=Ie(t[r]);for(var i in n)e[i]=n[i]}return e}Oe.prototype=Object.assign(Object.create(e.prototype),{constructor:Oe,isGeometry:!0,applyMatrix:function(t){for(var e=(new m).getNormalMatrix(t),r=0,n=this.vertices.length;r<n;r++)this.vertices[r].applyMatrix4(t);for(r=0,n=this.faces.length;r<n;r++){var i=this.faces[r];i.normal.applyMatrix3(e).normalize();for(var a=0,o=i.vertexNormals.length;a<o;a++)i.vertexNormals[a].applyMatrix3(e).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Re.makeRotationX(t),this.applyMatrix(Re),this},rotateY:function(t){return Re.makeRotationY(t),this.applyMatrix(Re),this},rotateZ:function(t){return Re.makeRotationZ(t),this.applyMatrix(Re),this},translate:function(t,e,r){return Re.makeTranslation(t,e,r),this.applyMatrix(Re),this},scale:function(t,e,r){return Re.makeScale(t,e,r),this.applyMatrix(Re),this},lookAt:function(t){return Pe.lookAt(t),Pe.updateMatrix(),this.applyMatrix(Pe.matrix),this},fromBufferGeometry:function(t){var e=this,r=null!==t.index?t.index.array:void 0,n=t.attributes,i=n.position.array,a=void 0!==n.normal?n.normal.array:void 0,o=void 0!==n.color?n.color.array:void 0,s=void 0!==n.uv?n.uv.array:void 0,c=void 0!==n.uv2?n.uv2.array:void 0;void 0!==c&&(this.faceVertexUvs[1]=[]);for(var h=0;h<i.length;h+=3)e.vertices.push((new d).fromArray(i,h)),void 0!==o&&e.colors.push((new Nt).fromArray(o,h));function u(t,r,n,i){var h=void 0===o?[]:[e.colors[t].clone(),e.colors[r].clone(),e.colors[n].clone()],u=new Ft(t,r,n,void 0===a?[]:[(new d).fromArray(a,3*t),(new d).fromArray(a,3*r),(new d).fromArray(a,3*n)],h,i);e.faces.push(u),void 0!==s&&e.faceVertexUvs[0].push([(new l).fromArray(s,2*t),(new l).fromArray(s,2*r),(new l).fromArray(s,2*n)]),void 0!==c&&e.faceVertexUvs[1].push([(new l).fromArray(c,2*t),(new l).fromArray(c,2*r),(new l).fromArray(c,2*n)])}var p=t.groups;if(p.length>0)for(h=0;h<p.length;h++)for(var f=p[h],m=f.start,g=m,v=m+f.count;g<v;g+=3)void 0!==r?u(r[g],r[g+1],r[g+2],f.materialIndex):u(g,g+1,g+2,f.materialIndex);else if(void 0!==r)for(h=0;h<r.length;h+=3)u(r[h],r[h+1],r[h+2]);else for(h=0;h<i.length/3;h+=3)u(h,h+1,h+2);return this.computeFaceNormals(),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ce).negate(),this.translate(Ce.x,Ce.y,Ce.z),this},normalize:function(){this.computeBoundingSphere();var t=this.boundingSphere.center,e=this.boundingSphere.radius,r=0===e?1:1/e,n=new P;return n.set(r,0,0,-r*t.x,0,r,0,-r*t.y,0,0,r,-r*t.z,0,0,0,1),this.applyMatrix(n),this},computeFaceNormals:function(){for(var t=new d,e=new d,r=0,n=this.faces.length;r<n;r++){var i=this.faces[r],a=this.vertices[i.a],o=this.vertices[i.b],s=this.vertices[i.c];t.subVectors(s,o),e.subVectors(a,o),t.cross(e),t.normalize(),i.normal.copy(t)}},computeVertexNormals:function(t){var e,r,n,i,a,o;for(void 0===t&&(t=!0),o=new Array(this.vertices.length),e=0,r=this.vertices.length;e<r;e++)o[e]=new d;if(t){var s,c,l,h=new d,u=new d;for(n=0,i=this.faces.length;n<i;n++)a=this.faces[n],s=this.vertices[a.a],c=this.vertices[a.b],l=this.vertices[a.c],h.subVectors(l,c),u.subVectors(s,c),h.cross(u),o[a.a].add(h),o[a.b].add(h),o[a.c].add(h)}else for(this.computeFaceNormals(),n=0,i=this.faces.length;n<i;n++)o[(a=this.faces[n]).a].add(a.normal),o[a.b].add(a.normal),o[a.c].add(a.normal);for(e=0,r=this.vertices.length;e<r;e++)o[e].normalize();for(n=0,i=this.faces.length;n<i;n++){var p=(a=this.faces[n]).vertexNormals;3===p.length?(p[0].copy(o[a.a]),p[1].copy(o[a.b]),p[2].copy(o[a.c])):(p[0]=o[a.a].clone(),p[1]=o[a.b].clone(),p[2]=o[a.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var t,e,r;for(this.computeFaceNormals(),t=0,e=this.faces.length;t<e;t++){var n=(r=this.faces[t]).vertexNormals;3===n.length?(n[0].copy(r.normal),n[1].copy(r.normal),n[2].copy(r.normal)):(n[0]=r.normal.clone(),n[1]=r.normal.clone(),n[2]=r.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var t,e,r,n,i;for(r=0,n=this.faces.length;r<n;r++)for((i=this.faces[r]).__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]),t=0,e=i.vertexNormals.length;t<e;t++)i.__originalVertexNormals[t]?i.__originalVertexNormals[t].copy(i.vertexNormals[t]):i.__originalVertexNormals[t]=i.vertexNormals[t].clone();var a=new Oe;for(a.faces=this.faces,t=0,e=this.morphTargets.length;t<e;t++){if(!this.morphNormals[t]){this.morphNormals[t]={},this.morphNormals[t].faceNormals=[],this.morphNormals[t].vertexNormals=[];var o=this.morphNormals[t].faceNormals,s=this.morphNormals[t].vertexNormals;for(r=0,n=this.faces.length;r<n;r++)c=new d,l={a:new d,b:new d,c:new d},o.push(c),s.push(l)}var c,l,h=this.morphNormals[t];for(a.vertices=this.morphTargets[t].vertices,a.computeFaceNormals(),a.computeVertexNormals(),r=0,n=this.faces.length;r<n;r++)i=this.faces[r],c=h.faceNormals[r],l=h.vertexNormals[r],c.copy(i.normal),l.a.copy(i.vertexNormals[0]),l.b.copy(i.vertexNormals[1]),l.c.copy(i.vertexNormals[2])}for(r=0,n=this.faces.length;r<n;r++)(i=this.faces[r]).normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new ct),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new ut),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,r){if(t&&t.isGeometry){var n,i=this.vertices.length,a=this.vertices,o=t.vertices,s=this.faces,c=t.faces,l=this.colors,h=t.colors;void 0===r&&(r=0),void 0!==e&&(n=(new m).getNormalMatrix(e));for(var u=0,p=o.length;u<p;u++){var d=o[u].clone();void 0!==e&&d.applyMatrix4(e),a.push(d)}for(u=0,p=h.length;u<p;u++)l.push(h[u].clone());for(u=0,p=c.length;u<p;u++){var f,g,v,y=c[u],x=y.vertexNormals,b=y.vertexColors;(f=new Ft(y.a+i,y.b+i,y.c+i)).normal.copy(y.normal),void 0!==n&&f.normal.applyMatrix3(n).normalize();for(var w=0,_=x.length;w<_;w++)g=x[w].clone(),void 0!==n&&g.applyMatrix3(n).normalize(),f.vertexNormals.push(g);for(f.color.copy(y.color),w=0,_=b.length;w<_;w++)v=b[w],f.vertexColors.push(v.clone());f.materialIndex=y.materialIndex+r,s.push(f)}for(u=0,p=t.faceVertexUvs.length;u<p;u++){var M=t.faceVertexUvs[u];for(void 0===this.faceVertexUvs[u]&&(this.faceVertexUvs[u]=[]),w=0,_=M.length;w<_;w++){for(var S=M[w],T=[],E=0,A=S.length;E<A;E++)T.push(S[E].clone());this.faceVertexUvs[u].push(T)}}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t)},mergeMesh:function(t){t&&t.isMesh?(t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t)},mergeVertices:function(){var t,e,r,n,i,a,o,s,c={},l=[],h=[],u=Math.pow(10,4);for(r=0,n=this.vertices.length;r<n;r++)t=this.vertices[r],void 0===c[e=Math.round(t.x*u)+"_"+Math.round(t.y*u)+"_"+Math.round(t.z*u)]?(c[e]=r,l.push(this.vertices[r]),h[r]=l.length-1):h[r]=h[c[e]];var p=[];for(r=0,n=this.faces.length;r<n;r++){(i=this.faces[r]).a=h[i.a],i.b=h[i.b],i.c=h[i.c],a=[i.a,i.b,i.c];for(var d=0;d<3;d++)if(a[d]===a[(d+1)%3]){p.push(r);break}}for(r=p.length-1;r>=0;r--){var f=p[r];for(this.faces.splice(f,1),o=0,s=this.faceVertexUvs.length;o<s;o++)this.faceVertexUvs[o].splice(f,1)}var m=this.vertices.length-l.length;return this.vertices=l,m},setFromPoints:function(t){this.vertices=[];for(var e=0,r=t.length;e<r;e++){var n=t[e];this.vertices.push(new d(n.x,n.y,n.z||0))}return this},sortFacesByMaterialIndex:function(){for(var t=this.faces,e=t.length,r=0;r<e;r++)t[r]._id=r;t.sort((function(t,e){return t.materialIndex-e.materialIndex}));var n,i,a=this.faceVertexUvs[0],o=this.faceVertexUvs[1];for(a&&a.length===e&&(n=[]),o&&o.length===e&&(i=[]),r=0;r<e;r++){var s=t[r]._id;n&&n.push(a[s]),i&&i.push(o[s])}n&&(this.faceVertexUvs[0]=n),i&&(this.faceVertexUvs[1]=i)},toJSON:function(){var t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),void 0!==this.parameters){var e=this.parameters;for(var r in e)void 0!==e[r]&&(t[r]=e[r]);return t}for(var n=[],i=0;i<this.vertices.length;i++){var a=this.vertices[i];n.push(a.x,a.y,a.z)}var o=[],s=[],c={},l=[],h={},u=[],p={};for(i=0;i<this.faces.length;i++){var d=this.faces[i],f=void 0!==this.faceVertexUvs[0][i],m=d.normal.length()>0,g=d.vertexNormals.length>0,v=1!==d.color.r||1!==d.color.g||1!==d.color.b,y=d.vertexColors.length>0,x=0;if(x=M(x,0,0),x=M(x,1,!0),x=M(x,2,!1),x=M(x,3,f),x=M(x,4,m),x=M(x,5,g),x=M(x,6,v),x=M(x,7,y),o.push(x),o.push(d.a,d.b,d.c),o.push(d.materialIndex),f){var b=this.faceVertexUvs[0][i];o.push(E(b[0]),E(b[1]),E(b[2]))}if(m&&o.push(S(d.normal)),g){var w=d.vertexNormals;o.push(S(w[0]),S(w[1]),S(w[2]))}if(v&&o.push(T(d.color)),y){var _=d.vertexColors;o.push(T(_[0]),T(_[1]),T(_[2]))}}function M(t,e,r){return r?t|1<<e:t&~(1<<e)}function S(t){var e=t.x.toString()+t.y.toString()+t.z.toString();return void 0!==c[e]||(c[e]=s.length/3,s.push(t.x,t.y,t.z)),c[e]}function T(t){var e=t.r.toString()+t.g.toString()+t.b.toString();return void 0!==h[e]||(h[e]=l.length,l.push(t.getHex())),h[e]}function E(t){var e=t.x.toString()+t.y.toString();return void 0!==p[e]||(p[e]=u.length/2,u.push(t.x,t.y)),p[e]}return t.data={},t.data.vertices=n,t.data.normals=s,l.length>0&&(t.data.colors=l),u.length>0&&(t.data.uvs=[u]),t.data.faces=o,t},clone:function(){return(new Oe).copy(this)},copy:function(t){var e,r,n,i,a,o;this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;var s=t.vertices;for(e=0,r=s.length;e<r;e++)this.vertices.push(s[e].clone());var c=t.colors;for(e=0,r=c.length;e<r;e++)this.colors.push(c[e].clone());var l=t.faces;for(e=0,r=l.length;e<r;e++)this.faces.push(l[e].clone());for(e=0,r=t.faceVertexUvs.length;e<r;e++){var h=t.faceVertexUvs[e];for(void 0===this.faceVertexUvs[e]&&(this.faceVertexUvs[e]=[]),n=0,i=h.length;n<i;n++){var u=h[n],p=[];for(a=0,o=u.length;a<o;a++){var d=u[a];p.push(d.clone())}this.faceVertexUvs[e].push(p)}}var f=t.morphTargets;for(e=0,r=f.length;e<r;e++){var m={};if(m.name=f[e].name,void 0!==f[e].vertices)for(m.vertices=[],n=0,i=f[e].vertices.length;n<i;n++)m.vertices.push(f[e].vertices[n].clone());if(void 0!==f[e].normals)for(m.normals=[],n=0,i=f[e].normals.length;n<i;n++)m.normals.push(f[e].normals[n].clone());this.morphTargets.push(m)}var g=t.morphNormals;for(e=0,r=g.length;e<r;e++){var v={};if(void 0!==g[e].vertexNormals)for(v.vertexNormals=[],n=0,i=g[e].vertexNormals.length;n<i;n++){var y=g[e].vertexNormals[n],x={};x.a=y.a.clone(),x.b=y.b.clone(),x.c=y.c.clone(),v.vertexNormals.push(x)}if(void 0!==g[e].faceNormals)for(v.faceNormals=[],n=0,i=g[e].faceNormals.length;n<i;n++)v.faceNormals.push(g[e].faceNormals[n].clone());this.morphNormals.push(v)}var b=t.skinWeights;for(e=0,r=b.length;e<r;e++)this.skinWeights.push(b[e].clone());var w=t.skinIndices;for(e=0,r=w.length;e<r;e++)this.skinIndices.push(w[e].clone());var _=t.lineDistances;for(e=0,r=_.length;e<r;e++)this.lineDistances.push(_[e]);var M=t.boundingBox;null!==M&&(this.boundingBox=M.clone());var S=t.boundingSphere;return null!==S&&(this.boundingSphere=S.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}}),De.prototype=Object.create(Oe.prototype),De.prototype.constructor=De,Ne.prototype=Object.create(se.prototype),Ne.prototype.constructor=Ne;var Be={clone:Ie,merge:ze};function Fe(t){Ut.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}function Ge(){Y.call(this),this.type="Camera",this.matrixWorldInverse=new P,this.projectionMatrix=new P,this.projectionMatrixInverse=new P}function Ue(t,e,r,n){Ge.call(this),this.type="PerspectiveCamera",this.fov=void 0!==t?t:50,this.zoom=1,this.near=void 0!==r?r:.1,this.far=void 0!==n?n:2e3,this.focus=10,this.aspect=void 0!==e?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}function He(t,e,r,n){Y.call(this),this.type="CubeCamera";var i=new Ue(90,1,t,e);i.up.set(0,-1,0),i.lookAt(new d(1,0,0)),this.add(i);var a=new Ue(90,1,t,e);a.up.set(0,-1,0),a.lookAt(new d(-1,0,0)),this.add(a);var o=new Ue(90,1,t,e);o.up.set(0,0,1),o.lookAt(new d(0,1,0)),this.add(o);var s=new Ue(90,1,t,e);s.up.set(0,0,-1),s.lookAt(new d(0,-1,0)),this.add(s);var c=new Ue(90,1,t,e);c.up.set(0,-1,0),c.lookAt(new d(0,0,1)),this.add(c);var l=new Ue(90,1,t,e);l.up.set(0,-1,0),l.lookAt(new d(0,0,-1)),this.add(l),n=n||{format:1022,magFilter:1006,minFilter:1006},this.renderTarget=new Ve(r,r,n),this.renderTarget.texture.name="CubeCamera",this.update=function(t,e){null===this.parent&&this.updateMatrixWorld();var r=t.getRenderTarget(),n=this.renderTarget,h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,a),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=h,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(r)},this.clear=function(t,e,r,n){for(var i=t.getRenderTarget(),a=this.renderTarget,o=0;o<6;o++)t.setRenderTarget(a,o),t.clear(e,r,n);t.setRenderTarget(i)}}function Ve(t,e,r){b.call(this,t,e,r)}function je(t,e,r,n,i,a,o,s,c,l,h,u){y.call(this,null,a,o,s,c,l,n,i,h,u),this.image={data:t,width:e,height:r},this.magFilter=void 0!==c?c:1003,this.minFilter=void 0!==l?l:1003,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}Fe.prototype=Object.create(Ut.prototype),Fe.prototype.constructor=Fe,Fe.prototype.isShaderMaterial=!0,Fe.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ie(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=t.extensions,this},Fe.prototype.toJSON=function(t){var e=Ut.prototype.toJSON.call(this,t);for(var r in e.uniforms={},this.uniforms){var n=this.uniforms[r].value;n&&n.isTexture?e.uniforms[r]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[r]={type:"m4",value:n.toArray()}:e.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;var i={};for(var a in this.extensions)!0===this.extensions[a]&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e},Ge.prototype=Object.assign(Object.create(Y.prototype),{constructor:Ge,isCamera:!0,copy:function(t,e){return Y.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new d),this.updateMatrixWorld(!0);var e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){Y.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}}),Ue.prototype=Object.assign(Object.create(Ge.prototype),{constructor:Ue,isPerspectiveCamera:!0,copy:function(t,e){return Ge.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){var e=.5*this.getFilmHeight()/t;this.fov=2*s.RAD2DEG*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){var t=Math.tan(.5*s.DEG2RAD*this.fov);return.5*this.getFilmHeight()/t},getEffectiveFOV:function(){return 2*s.RAD2DEG*Math.atan(Math.tan(.5*s.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,r,n,i,a){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=this.near,e=t*Math.tan(.5*s.DEG2RAD*this.fov)/this.zoom,r=2*e,n=this.aspect*r,i=-.5*n,a=this.view;if(null!==this.view&&this.view.enabled){var o=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/o,e-=a.offsetY*r/c,n*=a.width/o,r*=a.height/c}var l=this.filmOffset;0!==l&&(i+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,e,e-r,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var e=Y.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}),He.prototype=Object.create(Y.prototype),He.prototype.constructor=He,Ve.prototype=Object.create(b.prototype),Ve.prototype.constructor=Ve,Ve.prototype.isWebGLRenderTargetCube=!0,Ve.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=e.format,this.texture.encoding=e.encoding;var r=new J,n={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","\tvWorldDirection = transformDirection( position, modelMatrix );","\t#include <begin_vertex>","\t#include <project_vertex>","}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#define RECIPROCAL_PI 0.31830988618","#define RECIPROCAL_PI2 0.15915494","void main() {","\tvec3 direction = normalize( vWorldDirection );","\tvec2 sampleUV;","\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;","\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;","\tgl_FragColor = texture2D( tEquirect, sampleUV );","}"].join("\n")},i=new Fe({type:"CubemapFromEquirect",uniforms:Ie(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=e;var a=new Te(new Ne(5,5,5),i);r.add(a);var o=new He(1,10,1);return o.renderTarget=this,o.renderTarget.texture.name="CubeCameraTexture",o.update(t,r),a.geometry.dispose(),a.material.dispose(),this},je.prototype=Object.create(y.prototype),je.prototype.constructor=je,je.prototype.isDataTexture=!0;var ke=new d,We=new d,qe=new m;function Xe(t,e){this.normal=void 0!==t?t:new d(1,0,0),this.constant=void 0!==e?e:0}Object.assign(Xe.prototype,{isPlane:!0,set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,r,n){return this.normal.set(t,e,r),this.constant=n,this},setFromNormalAndCoplanarPoint:function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(t,e,r){var n=ke.subVectors(r,e).cross(We.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return void 0===e&&(console.warn("THREE.Plane: .projectPoint() target is now required"),e=new d),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},intersectLine:function(t,e){void 0===e&&(console.warn("THREE.Plane: .intersectLine() target is now required"),e=new d);var r=t.delta(ke),n=this.normal.dot(r);if(0===n)return 0===this.distanceToPoint(t.start)?e.copy(t.start):void 0;var i=-(t.start.dot(this.normal)+this.constant)/n;return i<0||i>1?void 0:e.copy(r).multiplyScalar(i).add(t.start)},intersectsLine:function(t){var e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0},intersectsBox:function(t){return t.intersectsPlane(this)},intersectsSphere:function(t){return t.intersectsPlane(this)},coplanarPoint:function(t){return void 0===t&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new d),t.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(t,e){var r=e||qe.getNormalMatrix(t),n=this.coplanarPoint(ke).applyMatrix4(t),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this},translate:function(t){return this.constant-=t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant}});var Ye=new ut,Je=new d;function Ze(t,e,r,n,i,a){this.planes=[void 0!==t?t:new Xe,void 0!==e?e:new Xe,void 0!==r?r:new Xe,void 0!==n?n:new Xe,void 0!==i?i:new Xe,void 0!==a?a:new Xe]}Object.assign(Ze.prototype,{set:function(t,e,r,n,i,a){var o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){for(var e=this.planes,r=0;r<6;r++)e[r].copy(t.planes[r]);return this},setFromMatrix:function(t){var e=this.planes,r=t.elements,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],c=r[5],l=r[6],h=r[7],u=r[8],p=r[9],d=r[10],f=r[11],m=r[12],g=r[13],v=r[14],y=r[15];return e[0].setComponents(o-n,h-s,f-u,y-m).normalize(),e[1].setComponents(o+n,h+s,f+u,y+m).normalize(),e[2].setComponents(o+i,h+c,f+p,y+g).normalize(),e[3].setComponents(o-i,h-c,f-p,y-g).normalize(),e[4].setComponents(o-a,h-l,f-d,y-v).normalize(),e[5].setComponents(o+a,h+l,f+d,y+v).normalize(),this},intersectsObject:function(t){var e=t.geometry;return null===e.boundingSphere&&e.computeBoundingSphere(),Ye.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ye)},intersectsSprite:function(t){return Ye.center.set(0,0,0),Ye.radius=.7071067811865476,Ye.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ye)},intersectsSphere:function(t){for(var e=this.planes,r=t.center,n=-t.radius,i=0;i<6;i++)if(e[i].distanceToPoint(r)<n)return!1;return!0},intersectsBox:function(t){for(var e=this.planes,r=0;r<6;r++){var n=e[r];if(Je.x=n.normal.x>0?t.max.x:t.min.x,Je.y=n.normal.y>0?t.max.y:t.min.y,Je.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Je)<0)return!1}return!0},containsPoint:function(t){for(var e=this.planes,r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}});var Qe={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",lights_pars_begin:"uniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvec3 NfromST = cross( S, T );\n\t\t\tif( dot( NfromST, N ) > 0.0 ) {\n\t\t\t\tS *= -1.0;\n\t\t\t\tT *= -1.0;\n\t\t\t}\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",uv_pars_fragment:"#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},Ke={common:{diffuse:{value:new Nt(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new m},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new l(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new Nt(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new m}},sprite:{diffuse:{value:new Nt(15658734)},opacity:{value:1},center:{value:new l(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new m}}},$e={basic:{uniforms:ze([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:ze([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:ze([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:ze([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},matcap:{uniforms:ze([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:ze([Ke.points,Ke.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:ze([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:ze([Ke.common,Ke.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:ze([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.normal_vert,fragmentShader:Qe.normal_frag},sprite:{uniforms:ze([Ke.sprite,Ke.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new m},t2D:{value:null}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:ze([Ke.common,Ke.displacementmap,{referencePosition:{value:new d},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:ze([Ke.lights,Ke.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};function tr(){var t=null,e=!1,r=null;function n(i,a){!1!==e&&(r(i,a),t.requestAnimationFrame(n))}return{start:function(){!0!==e&&null!==r&&(t.requestAnimationFrame(n),e=!0)},stop:function(){e=!1},setAnimationLoop:function(t){r=t},setContext:function(e){t=e}}}function er(t){var e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);var n=e.get(r);n&&(t.deleteBuffer(n.buffer),e.delete(r))},update:function(r,n){r.isInterleavedBufferAttribute&&(r=r.data);var i=e.get(r);void 0===i?e.set(r,function(e,r){var n=e.array,i=e.dynamic?35048:35044,a=t.createBuffer();t.bindBuffer(r,a),t.bufferData(r,n,i),e.onUploadCallback();var o=5126;return n instanceof Float32Array?o=5126:n instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):n instanceof Uint16Array?o=5123:n instanceof Int16Array?o=5122:n instanceof Uint32Array?o=5125:n instanceof Int32Array?o=5124:n instanceof Int8Array?o=5120:n instanceof Uint8Array&&(o=5121),{buffer:a,type:o,bytesPerElement:n.BYTES_PER_ELEMENT,version:e.version}}(r,n)):i.version<r.version&&(function(e,r,n){var i=r.array,a=r.updateRange;t.bindBuffer(n,e),!1===r.dynamic?t.bufferData(n,i,35044):-1===a.count?t.bufferSubData(n,0,i):0===a.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(t.bufferSubData(n,a.offset*i.BYTES_PER_ELEMENT,i.subarray(a.offset,a.offset+a.count)),a.count=-1)}(i.buffer,r,n),i.version=r.version)}}}function rr(t,e,r,n){Oe.call(this),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:n},this.fromBufferGeometry(new nr(t,e,r,n)),this.mergeVertices()}function nr(t,e,r,n){se.call(this),this.type="PlaneBufferGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:n};var i,a,o=(t=t||1)/2,s=(e=e||1)/2,c=Math.floor(r)||1,l=Math.floor(n)||1,h=c+1,u=l+1,p=t/c,d=e/l,f=[],m=[],g=[],v=[];for(a=0;a<u;a++){var y=a*d-s;for(i=0;i<h;i++){var x=i*p-o;m.push(x,-y,0),g.push(0,0,1),v.push(i/c),v.push(1-a/l)}}for(a=0;a<l;a++)for(i=0;i<c;i++){var b=i+h*a,w=i+h*(a+1),_=i+1+h*(a+1),M=i+1+h*a;f.push(b,w,M),f.push(w,_,M)}this.setIndex(f),this.addAttribute("position",new Zt(m,3)),this.addAttribute("normal",new Zt(g,3)),this.addAttribute("uv",new Zt(v,2))}function ir(t,e,r,n){var i,a,o=new Nt(0),s=0,c=null,l=0;function h(t,r){e.buffers.color.setClear(t.r,t.g,t.b,r,n)}return{getClearColor:function(){return o},setClearColor:function(t,e){o.set(t),h(o,s=void 0!==e?e:1)},getClearAlpha:function(){return s},setClearAlpha:function(t){h(o,s=t)},render:function(e,n,u,p){var d=n.background,f=t.vr,m=f.getSession&&f.getSession();if(m&&"additive"===m.environmentBlendMode&&(d=null),null===d?(h(o,s),c=null,l=0):d&&d.isColor&&(h(d,1),p=!0,c=null,l=0),(t.autoClear||p)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),d&&(d.isCubeTexture||d.isWebGLRenderTargetCube)){void 0===a&&((a=new Te(new Ne(1,1,1),new Fe({type:"BackgroundCubeMaterial",uniforms:Ie($e.cube.uniforms),vertexShader:$e.cube.vertexShader,fragmentShader:$e.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.removeAttribute("normal"),a.geometry.removeAttribute("uv"),a.onBeforeRender=function(t,e,r){this.matrixWorld.copyPosition(r.matrixWorld)},Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.tCube.value}}),r.update(a));var g=d.isWebGLRenderTargetCube?d.texture:d;a.material.uniforms.tCube.value=g,a.material.uniforms.tFlip.value=d.isWebGLRenderTargetCube?1:-1,c===d&&l===g.version||(a.material.needsUpdate=!0,c=d,l=g.version),e.unshift(a,a.geometry,a.material,0,0,null)}else d&&d.isTexture&&(void 0===i&&((i=new Te(new nr(2,2),new Fe({type:"BackgroundMaterial",uniforms:Ie($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.removeAttribute("normal"),Object.defineProperty(i.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(i)),i.material.uniforms.t2D.value=d,!0===d.matrixAutoUpdate&&d.updateMatrix(),i.material.uniforms.uvTransform.value.copy(d.matrix),c===d&&l===d.version||(i.material.needsUpdate=!0,c=d,l=d.version),e.unshift(i,i.geometry,i.material,0,0,null))}}}function ar(t,e,r,n){var i;this.setMode=function(t){i=t},this.render=function(e,n){t.drawArrays(i,e,n),r.update(n,i)},this.renderInstances=function(a,o,s){var c,l;if(n.isWebGL2)c=t,l="drawArraysInstanced";else if(l="drawArraysInstancedANGLE",null===(c=e.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[l](i,o,s,a.maxInstancedCount),r.update(s,i,a.maxInstancedCount)}}function or(t,e,r){var n;function i(e){if("highp"===e){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}var a="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext,o=void 0!==r.precision?r.precision:"highp",s=i(o);s!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",s,"instead."),o=s);var c=!0===r.logarithmicDepthBuffer,l=t.getParameter(34930),h=t.getParameter(35660),u=t.getParameter(3379),p=t.getParameter(34076),d=t.getParameter(34921),f=t.getParameter(36347),m=t.getParameter(36348),g=t.getParameter(36349),v=h>0,y=a||!!e.get("OES_texture_float");return{isWebGL2:a,getMaxAnisotropy:function(){if(void 0!==n)return n;var r=e.get("EXT_texture_filter_anisotropic");return n=null!==r?t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:i,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:f,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&&y,maxSamples:a?t.getParameter(36183):0}}function sr(){var t=this,e=null,r=0,n=!1,i=!1,a=new Xe,o=new m,s={value:null,needsUpdate:!1};function c(){s.value!==e&&(s.value=e,s.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function l(e,r,n,i){var c=null!==e?e.length:0,l=null;if(0!==c){if(l=s.value,!0!==i||null===l){var h=n+4*c,u=r.matrixWorldInverse;o.getNormalMatrix(u),(null===l||l.length<h)&&(l=new Float32Array(h));for(var p=0,d=n;p!==c;++p,d+=4)a.copy(e[p]).applyMatrix4(u,o),a.normal.toArray(l,d),l[d+3]=a.constant}s.value=l,s.needsUpdate=!0}return t.numPlanes=c,l}this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(t,i,a){var o=0!==t.length||i||0!==r||n;return n=i,e=l(t,a,0),r=t.length,o},this.beginShadows=function(){i=!0,l(null)},this.endShadows=function(){i=!1,c()},this.setState=function(t,a,o,h,u,p){if(!n||null===t||0===t.length||i&&!o)i?l(null):c();else{var d=i?0:r,f=4*d,m=u.clippingState||null;s.value=m,m=l(t,h,f,p);for(var g=0;g!==f;++g)m[g]=e[g];u.clippingState=m,this.numIntersection=a?this.numPlanes:0,this.numPlanes+=d}}}function cr(t){var e={};return{get:function(r){if(void 0!==e[r])return e[r];var n;switch(r){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(r)}return null===n&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),e[r]=n,n}}}function lr(t,e,r){var n=new WeakMap,i=new WeakMap;function a(t){var o=t.target,s=n.get(o);for(var c in null!==s.index&&e.remove(s.index),s.attributes)e.remove(s.attributes[c]);o.removeEventListener("dispose",a),n.delete(o);var l=i.get(s);l&&(e.remove(l),i.delete(s)),r.memory.geometries--}function o(t){var r=[],n=t.index,a=t.attributes.position,o=0;if(null!==n){var s=n.array;o=n.version;for(var c=0,l=s.length;c<l;c+=3){var h=s[c+0],u=s[c+1],p=s[c+2];r.push(h,u,u,p,p,h)}}else for(s=a.array,o=a.version,c=0,l=s.length/3-1;c<l;c+=3)h=c+0,u=c+1,p=c+2,r.push(h,u,u,p,p,h);var d=new($t(r)>65535?Jt:Xt)(r,1);d.version=o,e.update(d,34963);var f=i.get(t);f&&e.remove(f),i.set(t,d)}return{get:function(t,e){var i=n.get(e);return i||(e.addEventListener("dispose",a),e.isBufferGeometry?i=e:e.isGeometry&&(void 0===e._bufferGeometry&&(e._bufferGeometry=(new se).setFromObject(t)),i=e._bufferGeometry),n.set(e,i),r.memory.geometries++,i)},update:function(t){var r=t.index,n=t.attributes;for(var i in null!==r&&e.update(r,34963),n)e.update(n[i],34962);var a=t.morphAttributes;for(var i in a)for(var o=a[i],s=0,c=o.length;s<c;s++)e.update(o[s],34962)},getWireframeAttribute:function(t){var e=i.get(t);if(e){var r=t.index;null!==r&&e.version<r.version&&o(t)}else o(t);return i.get(t)}}}function hr(t,e,r,n){var i,a,o;this.setMode=function(t){i=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,n){t.drawElements(i,n,a,e*o),r.update(n,i)},this.renderInstances=function(s,c,l){var h,u;if(n.isWebGL2)h=t,u="drawElementsInstanced";else if(u="drawElementsInstancedANGLE",null===(h=e.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](i,l,a,c*o,s.maxInstancedCount),r.update(l,i,s.maxInstancedCount)}}function ur(t){var e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,r,n){switch(n=n||1,e.calls++,r){case 4:e.triangles+=n*(t/3);break;case 5:case 6:e.triangles+=n*(t-2);break;case 1:e.lines+=n*(t/2);break;case 3:e.lines+=n*(t-1);break;case 2:e.lines+=n*t;break;case 0:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r)}}}}function pr(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dr(t){var e={},r=new Float32Array(8);return{update:function(n,i,a,o){var s=n.morphTargetInfluences,c=s.length,l=e[i.id];if(void 0===l){l=[];for(var h=0;h<c;h++)l[h]=[h,0];e[i.id]=l}var u=a.morphTargets&&i.morphAttributes.position,p=a.morphNormals&&i.morphAttributes.normal;for(h=0;h<c;h++)0!==(d=l[h])[1]&&(u&&i.removeAttribute("morphTarget"+h),p&&i.removeAttribute("morphNormal"+h));for(h=0;h<c;h++)(d=l[h])[0]=h,d[1]=s[h];for(l.sort(pr),h=0;h<8;h++){var d;if(d=l[h]){var f=d[0],m=d[1];if(m){u&&i.addAttribute("morphTarget"+h,u[f]),p&&i.addAttribute("morphNormal"+h,p[f]),r[h]=m;continue}}r[h]=0}o.getUniforms().setValue(t,"morphTargetInfluences",r)}}}function fr(t,e){var r={};return{update:function(n){var i=e.render.frame,a=n.geometry,o=t.get(n,a);return r[o.id]!==i&&(a.isGeometry&&o.updateFromObject(n),t.update(o),r[o.id]=i),o},dispose:function(){r={}}}}function mr(t,e,r,n,i,a,o,s,c,l){t=void 0!==t?t:[],e=void 0!==e?e:301,o=void 0!==o?o:1022,y.call(this,t,e,r,n,i,a,o,s,c,l),this.flipY=!1}function gr(t,e,r,n){y.call(this,null),this.image={data:t,width:e,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1}function vr(t,e,r,n){y.call(this,null),this.image={data:t,width:e,height:r,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1}$e.physical={uniforms:ze([$e.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new Nt(0)},clearcoatNormalScale:{value:new l(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},rr.prototype=Object.create(Oe.prototype),rr.prototype.constructor=rr,nr.prototype=Object.create(se.prototype),nr.prototype.constructor=nr,mr.prototype=Object.create(y.prototype),mr.prototype.constructor=mr,mr.prototype.isCubeTexture=!0,Object.defineProperty(mr.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}}),gr.prototype=Object.create(y.prototype),gr.prototype.constructor=gr,gr.prototype.isDataTexture2DArray=!0,vr.prototype=Object.create(y.prototype),vr.prototype.constructor=vr,vr.prototype.isDataTexture3D=!0;var yr=new y,xr=new gr,br=new vr,wr=new mr,_r=[],Mr=[],Sr=new Float32Array(16),Tr=new Float32Array(9),Er=new Float32Array(4);function Ar(t,e,r){var n=t[0];if(n<=0||n>0)return t;var i=e*r,a=_r[i];if(void 0===a&&(a=new Float32Array(i),_r[i]=a),0!==e){n.toArray(a,0);for(var o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function Lr(t,e){if(t.length!==e.length)return!1;for(var r=0,n=t.length;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Rr(t,e){for(var r=0,n=e.length;r<n;r++)t[r]=e[r]}function Pr(t,e){var r=Mr[e];void 0===r&&(r=new Int32Array(e),Mr[e]=r);for(var n=0;n!==e;++n)r[n]=t.allocateTextureUnit();return r}function Cr(t,e){var r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function Or(t,e){var r=this.cache;if(void 0!==e.x)r[0]===e.x&&r[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Lr(r,e))return;t.uniform2fv(this.addr,e),Rr(r,e)}}function Dr(t,e){var r=this.cache;if(void 0!==e.x)r[0]===e.x&&r[1]===e.y&&r[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(void 0!==e.r)r[0]===e.r&&r[1]===e.g&&r[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Lr(r,e))return;t.uniform3fv(this.addr,e),Rr(r,e)}}function Nr(t,e){var r=this.cache;if(void 0!==e.x)r[0]===e.x&&r[1]===e.y&&r[2]===e.z&&r[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Lr(r,e))return;t.uniform4fv(this.addr,e),Rr(r,e)}}function Ir(t,e){var r=this.cache,n=e.elements;if(void 0===n){if(Lr(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rr(r,e)}else{if(Lr(r,n))return;Er.set(n),t.uniformMatrix2fv(this.addr,!1,Er),Rr(r,n)}}function zr(t,e){var r=this.cache,n=e.elements;if(void 0===n){if(Lr(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rr(r,e)}else{if(Lr(r,n))return;Tr.set(n),t.uniformMatrix3fv(this.addr,!1,Tr),Rr(r,n)}}function Br(t,e){var r=this.cache,n=e.elements;if(void 0===n){if(Lr(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rr(r,e)}else{if(Lr(r,n))return;Sr.set(n),t.uniformMatrix4fv(this.addr,!1,Sr),Rr(r,n)}}function Fr(t,e,r){var n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.safeSetTexture2D(e||yr,i)}function Gr(t,e,r){var n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.setTexture2DArray(e||xr,i)}function Ur(t,e,r){var n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.setTexture3D(e||br,i)}function Hr(t,e,r){var n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.safeSetTextureCube(e||wr,i)}function Vr(t,e){var r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function jr(t,e){var r=this.cache;Lr(r,e)||(t.uniform2iv(this.addr,e),Rr(r,e))}function kr(t,e){var r=this.cache;Lr(r,e)||(t.uniform3iv(this.addr,e),Rr(r,e))}function Wr(t,e){var r=this.cache;Lr(r,e)||(t.uniform4iv(this.addr,e),Rr(r,e))}function qr(t,e){t.uniform1fv(this.addr,e)}function Xr(t,e){t.uniform1iv(this.addr,e)}function Yr(t,e){t.uniform2iv(this.addr,e)}function Jr(t,e){t.uniform3iv(this.addr,e)}function Zr(t,e){t.uniform4iv(this.addr,e)}function Qr(t,e){var r=Ar(e,this.size,2);t.uniform2fv(this.addr,r)}function Kr(t,e){var r=Ar(e,this.size,3);t.uniform3fv(this.addr,r)}function $r(t,e){var r=Ar(e,this.size,4);t.uniform4fv(this.addr,r)}function tn(t,e){var r=Ar(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function en(t,e){var r=Ar(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function rn(t,e){var r=Ar(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function nn(t,e,r){var n=e.length,i=Pr(r,n);t.uniform1iv(this.addr,i);for(var a=0;a!==n;++a)r.safeSetTexture2D(e[a]||yr,i[a])}function an(t,e,r){var n=e.length,i=Pr(r,n);t.uniform1iv(this.addr,i);for(var a=0;a!==n;++a)r.safeSetTextureCube(e[a]||wr,i[a])}function on(t,e,r){this.id=t,this.addr=r,this.cache=[],this.setValue=function(t){switch(t){case 5126:return Cr;case 35664:return Or;case 35665:return Dr;case 35666:return Nr;case 35674:return Ir;case 35675:return zr;case 35676:return Br;case 35678:case 36198:return Fr;case 35679:return Ur;case 35680:return Hr;case 36289:return Gr;case 5124:case 35670:return Vr;case 35667:case 35671:return jr;case 35668:case 35672:return kr;case 35669:case 35673:return Wr}}(e.type)}function sn(t,e,r){this.id=t,this.addr=r,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return qr;case 35664:return Qr;case 35665:return Kr;case 35666:return $r;case 35674:return tn;case 35675:return en;case 35676:return rn;case 35678:return nn;case 35680:return an;case 5124:case 35670:return Xr;case 35667:case 35671:return Yr;case 35668:case 35672:return Jr;case 35669:case 35673:return Zr}}(e.type)}function cn(t){this.id=t,this.seq=[],this.map={}}sn.prototype.updateCache=function(t){var e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Rr(e,t)},cn.prototype.setValue=function(t,e,r){for(var n=this.seq,i=0,a=n.length;i!==a;++i){var o=n[i];o.setValue(t,e[o.id],r)}};var ln=/([\w\d_]+)(\])?(\[|\.)?/g;function hn(t,e){t.seq.push(e),t.map[e.id]=e}function un(t,e,r){var n=t.name,i=n.length;for(ln.lastIndex=0;;){var a=ln.exec(n),o=ln.lastIndex,s=a[1],c="]"===a[2],l=a[3];if(c&&(s|=0),void 0===l||"["===l&&o+2===i){hn(r,void 0===l?new on(s,t,e):new sn(s,t,e));break}var h=r.map[s];void 0===h&&hn(r,h=new cn(s)),r=h}}function pn(t,e){this.seq=[],this.map={};for(var r=t.getProgramParameter(e,35718),n=0;n<r;++n){var i=t.getActiveUniform(e,n);un(i,t.getUniformLocation(e,i.name),this)}}function dn(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),n}pn.prototype.setValue=function(t,e,r,n){var i=this.map[e];void 0!==i&&i.setValue(t,r,n)},pn.prototype.setOptional=function(t,e,r){var n=e[r];void 0!==n&&this.setValue(t,r,n)},pn.upload=function(t,e,r,n){for(var i=0,a=e.length;i!==a;++i){var o=e[i],s=r[o.id];!1!==s.needsUpdate&&o.setValue(t,s.value,n)}},pn.seqWithValue=function(t,e){for(var r=[],n=0,i=t.length;n!==i;++n){var a=t[n];a.id in e&&r.push(a)}return r};var fn=0;function mn(t){switch(t){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw new Error("unsupported encoding: "+t)}}function gn(t,e,r){var n=t.getShaderParameter(e,35713),i=t.getShaderInfoLog(e).trim();return n&&""===i?"":"THREE.WebGLShader: gl.getShaderInfoLog() "+r+"\n"+i+function(t){for(var e=t.split("\n"),r=0;r<e.length;r++)e[r]=r+1+": "+e[r];return e.join("\n")}(t.getShaderSource(e))}function vn(t,e){var r=mn(e);return"vec4 "+t+"( vec4 value ) { return "+r[0]+"ToLinear"+r[1]+"; }"}function yn(t,e){var r;switch(e){case 1:r="Linear";break;case 2:r="Reinhard";break;case 3:r="Uncharted2";break;case 4:r="OptimizedCineon";break;case 5:r="ACESFilmic";break;default:throw new Error("unsupported toneMapping: "+e)}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function xn(t){return""!==t}function bn(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wn(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function _n(t){return t.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,(function(t,e){var r=Qe[e];if(void 0===r)throw new Error("Can not resolve #include <"+e+">");return _n(r)}))}function Mn(t){return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,(function(t,e,r,n){for(var i="",a=parseInt(e);a<parseInt(r);a++)i+=n.replace(/\[ i \]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}))}function Sn(t,e,r,n,i,a,o){var s=t.getContext(),c=n.defines,l=i.vertexShader,h=i.fragmentShader,u="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?u="SHADOWMAP_TYPE_PCF":2===a.shadowMapType?u="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(u="SHADOWMAP_TYPE_VSM");var p="ENVMAP_TYPE_CUBE",d="ENVMAP_MODE_REFLECTION",f="ENVMAP_BLENDING_MULTIPLY";if(a.envMap){switch(n.envMap.mapping){case 301:case 302:p="ENVMAP_TYPE_CUBE";break;case 306:case 307:p="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:p="ENVMAP_TYPE_EQUIREC";break;case 305:p="ENVMAP_TYPE_SPHERE"}switch(n.envMap.mapping){case 302:case 304:d="ENVMAP_MODE_REFRACTION"}switch(n.combine){case 0:f="ENVMAP_BLENDING_MULTIPLY";break;case 1:f="ENVMAP_BLENDING_MIX";break;case 2:f="ENVMAP_BLENDING_ADD"}}var m,g,v,y,x,b=t.gammaFactor>0?t.gammaFactor:1,w=o.isWebGL2?"":function(t,e,r){return[(t=t||{}).derivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(t.fragDepth||e.logarithmicDepthBuffer)&&r.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",t.drawBuffers&&r.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(t.shaderTextureLOD||e.envMap)&&r.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xn).join("\n")}(n.extensions,a,e),_=function(t){var e=[];for(var r in t){var n=t[r];!1!==n&&e.push("#define "+r+" "+n)}return e.join("\n")}(c),M=s.createProgram();if(n.isRawShaderMaterial?((m=[_].filter(xn).join("\n")).length>0&&(m+="\n"),(g=[w,_].filter(xn).join("\n")).length>0&&(g+="\n")):(m=["precision "+a.precision+" float;","precision "+a.precision+" int;","highp"===a.precision?"#define HIGH_PRECISION":"","#define SHADER_NAME "+i.name,_,a.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+b,"#define MAX_BONES "+a.maxBones,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.displacementMap&&a.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexUvs?"#define USE_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.useVertexTexture?"#define BONE_TEXTURE":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&!1===a.flatShading?"#define USE_MORPHNORMALS":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+u:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&(o.isWebGL2||e.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(xn).join("\n"),g=[w,"precision "+a.precision+" float;","precision "+a.precision+" int;","highp"===a.precision?"#define HIGH_PRECISION":"","#define SHADER_NAME "+i.name,_,a.alphaTest?"#define ALPHATEST "+a.alphaTest+(a.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.envMap?"#define "+d:"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.sheen?"#define USE_SHEEN":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexUvs?"#define USE_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+u:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&(o.isWebGL2||e.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensions&&n.extensions.shaderTextureLOD||a.envMap)&&(o.isWebGL2||e.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==a.toneMapping?"#define TONE_MAPPING":"",0!==a.toneMapping?Qe.tonemapping_pars_fragment:"",0!==a.toneMapping?yn("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.outputEncoding||a.mapEncoding||a.matcapEncoding||a.envMapEncoding||a.emissiveMapEncoding?Qe.encodings_pars_fragment:"",a.mapEncoding?vn("mapTexelToLinear",a.mapEncoding):"",a.matcapEncoding?vn("matcapTexelToLinear",a.matcapEncoding):"",a.envMapEncoding?vn("envMapTexelToLinear",a.envMapEncoding):"",a.emissiveMapEncoding?vn("emissiveMapTexelToLinear",a.emissiveMapEncoding):"",a.outputEncoding?(v="linearToOutputTexel",y=a.outputEncoding,x=mn(y),"vec4 "+v+"( vec4 value ) { return LinearTo"+x[0]+x[1]+"; }"):"",a.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(xn).join("\n")),l=wn(l=bn(l=_n(l),a),a),h=wn(h=bn(h=_n(h),a),a),l=Mn(l),h=Mn(h),o.isWebGL2&&!n.isRawShaderMaterial){var S=!1,T=/^\s*#version\s+300\s+es\s*\n/;n.isShaderMaterial&&null!==l.match(T)&&null!==h.match(T)&&(S=!0,l=l.replace(T,""),h=h.replace(T,"")),m=["#version 300 es\n","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+m,g=["#version 300 es\n","#define varying in",S?"":"out highp vec4 pc_fragColor;",S?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+g}var E,A,L=g+h,R=dn(s,35633,m+l),P=dn(s,35632,L);if(s.attachShader(M,R),s.attachShader(M,P),void 0!==n.index0AttributeName?s.bindAttribLocation(M,0,n.index0AttributeName):!0===a.morphTargets&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M),t.debug.checkShaderErrors){var C=s.getProgramInfoLog(M).trim(),O=s.getShaderInfoLog(R).trim(),D=s.getShaderInfoLog(P).trim(),N=!0,I=!0;if(!1===s.getProgramParameter(M,35714)){N=!1;var z=gn(s,R,"vertex"),B=gn(s,P,"fragment");console.error("THREE.WebGLProgram: shader error: ",s.getError(),"35715",s.getProgramParameter(M,35715),"gl.getProgramInfoLog",C,z,B)}else""!==C?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",C):""!==O&&""!==D||(I=!1);I&&(this.diagnostics={runnable:N,material:n,programLog:C,vertexShader:{log:O,prefix:m},fragmentShader:{log:D,prefix:g}})}return s.deleteShader(R),s.deleteShader(P),this.getUniforms=function(){return void 0===E&&(E=new pn(s,M)),E},this.getAttributes=function(){return void 0===A&&(A=function(t,e){for(var r={},n=t.getProgramParameter(e,35721),i=0;i<n;i++){var a=t.getActiveAttrib(e,i).name;r[a]=t.getAttribLocation(e,a)}return r}(s,M)),A},this.destroy=function(){s.deleteProgram(M),this.program=void 0},this.name=i.name,this.id=fn++,this.code=r,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=P,this}function Tn(t,e,r){var n=[],i={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},a=["precision","supportsVertexTextures","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function o(t,e){var r;return t?t.isTexture?r=t.encoding:t.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),r=t.texture.encoding):r=3e3,3e3===r&&e&&(r=3007),r}this.getParameters=function(e,n,a,s,c,l,h){var u=i[e.type],p=h.isSkinnedMesh?function(t){var e=t.skeleton.bones;if(r.floatVertexTextures)return 1024;var n=r.maxVertexUniforms,i=Math.floor((n-20)/4),a=Math.min(i,e.length);return a<e.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+e.length+" bones. This GPU supports "+a+"."),0):a}(h):0,d=r.precision;null!==e.precision&&(d=r.getMaxPrecision(e.precision))!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",d,"instead.");var f=t.getRenderTarget();return{shaderID:u,precision:d,supportsVertexTextures:r.vertexTextures,outputEncoding:o(f?f.texture:null,t.gammaOutput),map:!!e.map,mapEncoding:o(e.map,t.gammaInput),matcap:!!e.matcap,matcapEncoding:o(e.matcap,t.gammaInput),envMap:!!e.envMap,envMapMode:e.envMap&&e.envMap.mapping,envMapEncoding:o(e.envMap,t.gammaInput),envMapCubeUV:!!e.envMap&&(306===e.envMap.mapping||307===e.envMap.mapping),lightMap:!!e.lightMap,aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:o(e.emissiveMap,t.gammaInput),bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:1===e.normalMapType,tangentSpaceNormalMap:0===e.normalMapType,clearcoatNormalMap:!!e.clearcoatNormalMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,gradientMap:!!e.gradientMap,sheen:!!e.sheen,combine:e.combine,vertexTangents:e.normalMap&&e.vertexTangents,vertexColors:e.vertexColors,vertexUvs:!!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatNormalMap),fog:!!s,useFog:e.fog,fogExp2:s&&s.isFogExp2,flatShading:e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:r.logarithmicDepthBuffer,skinning:e.skinning&&p>0,maxBones:p,useVertexTexture:r.floatVertexTextures,morphTargets:e.morphTargets,morphNormals:e.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:n.directional.length,numPointLights:n.point.length,numSpotLights:n.spot.length,numRectAreaLights:n.rectArea.length,numHemiLights:n.hemi.length,numDirLightShadows:n.directionalShadowMap.length,numPointLightShadows:n.pointShadowMap.length,numSpotLightShadows:n.spotShadowMap.length,numClippingPlanes:c,numClipIntersection:l,dithering:e.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.receiveShadow&&a.length>0,shadowMapType:t.shadowMap.type,toneMapping:e.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:2===e.side,flipSided:1===e.side,depthPacking:void 0!==e.depthPacking&&e.depthPacking}},this.getProgramCode=function(e,r){var n=[];if(r.shaderID?n.push(r.shaderID):(n.push(e.fragmentShader),n.push(e.vertexShader)),void 0!==e.defines)for(var i in e.defines)n.push(i),n.push(e.defines[i]);for(var o=0;o<a.length;o++)n.push(r[a[o]]);return n.push(e.onBeforeCompile.toString()),n.push(t.gammaOutput),n.push(t.gammaFactor),n.join()},this.acquireProgram=function(i,a,o,s){for(var c,l=0,h=n.length;l<h;l++){var u=n[l];if(u.code===s){++(c=u).usedTimes;break}}return void 0===c&&(c=new Sn(t,e,s,i,a,o,r),n.push(c)),c},this.releaseProgram=function(t){if(0==--t.usedTimes){var e=n.indexOf(t);n[e]=n[n.length-1],n.pop(),t.destroy()}},this.programs=n}function En(){var t=new WeakMap;return{get:function(e){var r=t.get(e);return void 0===r&&(r={},t.set(e,r)),r},remove:function(e){t.delete(e)},update:function(e,r,n){t.get(e)[r]=n},dispose:function(){t=new WeakMap}}}function An(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ln(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rn(){var t=[],e=0,r=[],n=[],i={id:-1};function a(r,n,a,o,s,c){var l=t[e];return void 0===l?(l={id:r.id,object:r,geometry:n,material:a,program:a.program||i,groupOrder:o,renderOrder:r.renderOrder,z:s,group:c},t[e]=l):(l.id=r.id,l.object=r,l.geometry=n,l.material=a,l.program=a.program||i,l.groupOrder=o,l.renderOrder=r.renderOrder,l.z=s,l.group=c),e++,l}return{opaque:r,transparent:n,init:function(){e=0,r.length=0,n.length=0},push:function(t,e,i,o,s,c){var l=a(t,e,i,o,s,c);(!0===i.transparent?n:r).push(l)},unshift:function(t,e,i,o,s,c){var l=a(t,e,i,o,s,c);(!0===i.transparent?n:r).unshift(l)},sort:function(){r.length>1&&r.sort(An),n.length>1&&n.sort(Ln)}}}function Pn(){var t=new WeakMap;function e(r){var n=r.target;n.removeEventListener("dispose",e),t.delete(n)}return{get:function(r,n){var i,a=t.get(r);return void 0===a?(i=new Rn,t.set(r,new WeakMap),t.get(r).set(n,i),r.addEventListener("dispose",e)):void 0===(i=a.get(n))&&(i=new Rn,a.set(n,i)),i},dispose:function(){t=new WeakMap}}}function Cn(){var t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];var r;switch(e.type){case"DirectionalLight":r={direction:new d,color:new Nt,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l};break;case"SpotLight":r={position:new d,direction:new d,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l};break;case"PointLight":r={position:new d,color:new Nt,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new l,shadowCameraNear:1,shadowCameraFar:1e3};break;case"HemisphereLight":r={direction:new d,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":r={color:new Nt,position:new d,halfWidth:new d,halfHeight:new d}}return t[e.id]=r,r}}}var On=0;function Dn(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Nn(){for(var t=new Cn,e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},r=0;r<9;r++)e.probe.push(new d);var n=new d,i=new P,a=new P;return{setup:function(r,o,s){for(var c=0,l=0,h=0,u=0;u<9;u++)e.probe[u].set(0,0,0);var p=0,d=0,f=0,m=0,g=0,v=0,y=0,x=0,b=s.matrixWorldInverse;r.sort(Dn),u=0;for(var w=r.length;u<w;u++){var _=r[u],M=_.color,S=_.intensity,T=_.distance,E=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)c+=M.r*S,l+=M.g*S,h+=M.b*S;else if(_.isLightProbe)for(var A=0;A<9;A++)e.probe[A].addScaledVector(_.sh.coefficients[A],S);else if(_.isDirectionalLight){if((R=t.get(_)).color.copy(_.color).multiplyScalar(_.intensity),R.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(n),R.direction.transformDirection(b),R.shadow=_.castShadow,_.castShadow){var L=_.shadow;R.shadowBias=L.bias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,e.directionalShadowMap[p]=E,e.directionalShadowMatrix[p]=_.shadow.matrix,v++}e.directional[p]=R,p++}else if(_.isSpotLight)(R=t.get(_)).position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(b),R.color.copy(M).multiplyScalar(S),R.distance=T,R.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(n),R.direction.transformDirection(b),R.coneCos=Math.cos(_.angle),R.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),R.decay=_.decay,R.shadow=_.castShadow,_.castShadow&&(L=_.shadow,R.shadowBias=L.bias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,e.spotShadowMap[f]=E,e.spotShadowMatrix[f]=_.shadow.matrix,x++),e.spot[f]=R,f++;else if(_.isRectAreaLight)(R=t.get(_)).color.copy(M).multiplyScalar(S),R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(b),a.identity(),i.copy(_.matrixWorld),i.premultiply(b),a.extractRotation(i),R.halfWidth.set(.5*_.width,0,0),R.halfHeight.set(0,.5*_.height,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),e.rectArea[m]=R,m++;else if(_.isPointLight)(R=t.get(_)).position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(b),R.color.copy(_.color).multiplyScalar(_.intensity),R.distance=_.distance,R.decay=_.decay,R.shadow=_.castShadow,_.castShadow&&(L=_.shadow,R.shadowBias=L.bias,R.shadowRadius=L.radius,R.shadowMapSize=L.mapSize,R.shadowCameraNear=L.camera.near,R.shadowCameraFar=L.camera.far,e.pointShadowMap[d]=E,e.pointShadowMatrix[d]=_.shadow.matrix,y++),e.point[d]=R,d++;else if(_.isHemisphereLight){var R;(R=t.get(_)).direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(b),R.direction.normalize(),R.skyColor.copy(_.color).multiplyScalar(S),R.groundColor.copy(_.groundColor).multiplyScalar(S),e.hemi[g]=R,g++}}e.ambient[0]=c,e.ambient[1]=l,e.ambient[2]=h;var P=e.hash;P.directionalLength===p&&P.pointLength===d&&P.spotLength===f&&P.rectAreaLength===m&&P.hemiLength===g&&P.numDirectionalShadows===v&&P.numPointShadows===y&&P.numSpotShadows===x||(e.directional.length=p,e.spot.length=f,e.rectArea.length=m,e.point.length=d,e.hemi.length=g,e.directionalShadowMap.length=v,e.pointShadowMap.length=y,e.spotShadowMap.length=x,e.directionalShadowMatrix.length=v,e.pointShadowMatrix.length=y,e.spotShadowMatrix.length=x,P.directionalLength=p,P.pointLength=d,P.spotLength=f,P.rectAreaLength=m,P.hemiLength=g,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,e.version=On++)},state:e}}function In(){var t=new Nn,e=[],r=[];return{init:function(){e.length=0,r.length=0},state:{lightsArray:e,shadowsArray:r,lights:t},setupLights:function(n){t.setup(e,r,n)},pushLight:function(t){e.push(t)},pushShadow:function(t){r.push(t)}}}function zn(){var t=new WeakMap;function e(r){var n=r.target;n.removeEventListener("dispose",e),t.delete(n)}return{get:function(r,n){var i;return!1===t.has(r)?(i=new In,t.set(r,new WeakMap),t.get(r).set(n,i),r.addEventListener("dispose",e)):!1===t.get(r).has(n)?(i=new In,t.get(r).set(n,i)):i=t.get(r).get(n),i},dispose:function(){t=new WeakMap}}}function Bn(t){Ut.call(this),this.type="MeshDepthMaterial",this.depthPacking=3200,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.setValues(t)}function Fn(t){Ut.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new d,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.lights=!1,this.setValues(t)}function Gn(t,e,r){var n=new Ze,i=new l,a=new l,o=new x,s=new Array(4),c=new Array(4),h={},u={0:1,1:0,2:2},p=new Fe({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new l},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}"}),d=p.clone();d.defines.HORIZONAL_PASS=1;var f=new se;f.addAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));for(var m=new Te(f,p),g=0;4!==g;++g){var v=0!=(1&g),y=0!=(2&g),w=new Bn({depthPacking:3201,morphTargets:v,skinning:y});s[g]=w;var _=new Fn({morphTargets:v,skinning:y});c[g]=_}var M=this;function S(r,n){var i=e.update(m);p.uniforms.shadow_pass.value=r.map.texture,p.uniforms.resolution.value=r.mapSize,p.uniforms.radius.value=r.radius,t.setRenderTarget(r.mapPass),t.clear(),t.renderBufferDirect(n,null,i,p,m,null),d.uniforms.shadow_pass.value=r.mapPass.texture,d.uniforms.resolution.value=r.mapSize,d.uniforms.radius.value=r.radius,t.setRenderTarget(r.map),t.clear(),t.renderBufferDirect(n,null,i,d,m,null)}function T(e,r,n,i,a,o){var l=e.geometry,p=null,d=s,f=e.customDepthMaterial;if(n.isPointLight&&(d=c,f=e.customDistanceMaterial),f)p=f;else{var m=!1;r.morphTargets&&(l&&l.isBufferGeometry?m=l.morphAttributes&&l.morphAttributes.position&&l.morphAttributes.position.length>0:l&&l.isGeometry&&(m=l.morphTargets&&l.morphTargets.length>0)),e.isSkinnedMesh&&!1===r.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",e);var g=0;m&&(g|=1),e.isSkinnedMesh&&r.skinning&&(g|=2),p=d[g]}if(t.localClippingEnabled&&!0===r.clipShadows&&0!==r.clippingPlanes.length){var v=p.uuid,y=r.uuid,x=h[v];void 0===x&&(x={},h[v]=x);var b=x[y];void 0===b&&(b=p.clone(),x[y]=b),p=b}return p.visible=r.visible,p.wireframe=r.wireframe,p.side=3===o?null!=r.shadowSide?r.shadowSide:r.side:null!=r.shadowSide?r.shadowSide:u[r.side],p.clipShadows=r.clipShadows,p.clippingPlanes=r.clippingPlanes,p.clipIntersection=r.clipIntersection,p.wireframeLinewidth=r.wireframeLinewidth,p.linewidth=r.linewidth,n.isPointLight&&p.isMeshDistanceMaterial&&(p.referencePosition.setFromMatrixPosition(n.matrixWorld),p.nearDistance=i,p.farDistance=a),p}function E(r,i,a,o,s){if(!1!==r.visible){if(r.layers.test(i.layers)&&(r.isMesh||r.isLine||r.isPoints)&&(r.castShadow||r.receiveShadow&&3===s)&&(!r.frustumCulled||n.intersectsObject(r))){r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,r.matrixWorld);var c=e.update(r),l=r.material;if(Array.isArray(l))for(var h=c.groups,u=0,p=h.length;u<p;u++){var d=h[u],f=l[d.materialIndex];if(f&&f.visible){var m=T(r,f,o,a.near,a.far,s);t.renderBufferDirect(a,null,c,m,r,d)}}else l.visible&&(m=T(r,l,o,a.near,a.far,s),t.renderBufferDirect(a,null,c,m,r,null))}for(var g=r.children,v=0,y=g.length;v<y;v++)E(g[v],i,a,o,s)}}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(e,s,c){if(!1!==M.enabled&&(!1!==M.autoUpdate||!1!==M.needsUpdate)&&0!==e.length){var l=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);for(var d=0,f=e.length;d<f;d++){var m=e[d],g=m.shadow;if(void 0!==g){i.copy(g.mapSize);var v=g.getFrameExtents();if(i.multiply(v),a.copy(g.mapSize),(i.x>r||i.y>r)&&(console.warn("THREE.WebGLShadowMap:",m,"has shadow exceeding max texture size, reducing"),i.x>r&&(a.x=Math.floor(r/v.x),i.x=a.x*v.x,g.mapSize.x=a.x),i.y>r&&(a.y=Math.floor(r/v.y),i.y=a.y*v.y,g.mapSize.y=a.y)),null===g.map&&!g.isPointLightShadow&&3===this.type){var y={minFilter:1006,magFilter:1006,format:1023};g.map=new b(i.x,i.y,y),g.map.texture.name=m.name+".shadowMap",g.mapPass=new b(i.x,i.y,y),g.camera.updateProjectionMatrix()}null===g.map&&(y={minFilter:1003,magFilter:1003,format:1023},g.map=new b(i.x,i.y,y),g.map.texture.name=m.name+".shadowMap",g.camera.updateProjectionMatrix()),t.setRenderTarget(g.map),t.clear();for(var x=g.getViewportCount(),w=0;w<x;w++){var _=g.getViewport(w);o.set(a.x*_.x,a.y*_.y,a.x*_.z,a.y*_.w),p.viewport(o),g.updateMatrices(m,c,w),n=g.getFrustum(),E(s,c,g.camera,m,this.type)}g.isPointLightShadow||3!==this.type||S(g,c)}else console.warn("THREE.WebGLShadowMap:",m,"has no shadow.")}M.needsUpdate=!1,t.setRenderTarget(l,h,u)}}}function Un(t,e,r,n){var i=new function(){var e=!1,r=new x,n=null,i=new x(0,0,0,0);return{setMask:function(r){n===r||e||(t.colorMask(r,r,r,r),n=r)},setLocked:function(t){e=t},setClear:function(e,n,a,o,s){!0===s&&(e*=o,n*=o,a*=o),r.set(e,n,a,o),!1===i.equals(r)&&(t.clearColor(e,n,a,o),i.copy(r))},reset:function(){e=!1,n=null,i.set(-1,0,0,0)}}},a=new function(){var e=!1,r=null,n=null,i=null;return{setTest:function(t){t?U(2929):H(2929)},setMask:function(n){r===n||e||(t.depthMask(n),r=n)},setFunc:function(e){if(n!==e){if(e)switch(e){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);n=e}},setLocked:function(t){e=t},setClear:function(e){i!==e&&(t.clearDepth(e),i=e)},reset:function(){e=!1,r=null,n=null,i=null}}},o=new function(){var e=!1,r=null,n=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(t){e||(t?U(2960):H(2960))},setMask:function(n){r===n||e||(t.stencilMask(n),r=n)},setFunc:function(e,r,o){n===e&&i===r&&a===o||(t.stencilFunc(e,r,o),n=e,i=r,a=o)},setOp:function(e,r,n){o===e&&s===r&&c===n||(t.stencilOp(e,r,n),o=e,s=r,c=n)},setLocked:function(t){e=t},setClear:function(e){l!==e&&(t.clearStencil(e),l=e)},reset:function(){e=!1,r=null,n=null,i=null,a=null,o=null,s=null,c=null,l=null}}},s=t.getParameter(34921),c=new Uint8Array(s),l=new Uint8Array(s),h=new Uint8Array(s),u={},p=null,d=null,f=null,m=null,g=null,v=null,y=null,b=null,w=null,_=null,M=!1,S=null,T=null,E=null,A=null,L=null,R=t.getParameter(35661),P=!1,C=0,O=t.getParameter(7938);-1!==O.indexOf("WebGL")?(C=parseFloat(/^WebGL\ ([0-9])/.exec(O)[1]),P=C>=1):-1!==O.indexOf("OpenGL ES")&&(C=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(O)[1]),P=C>=2);var D=null,N={},I=new x,z=new x;function B(e,r,n){var i=new Uint8Array(4),a=t.createTexture();t.bindTexture(e,a),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(var o=0;o<n;o++)t.texImage2D(r+o,0,6408,1,1,0,6408,5121,i);return a}var F={};function G(r,i){c[r]=1,0===l[r]&&(t.enableVertexAttribArray(r),l[r]=1),h[r]!==i&&((n.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](r,i),h[r]=i)}function U(e){!0!==u[e]&&(t.enable(e),u[e]=!0)}function H(e){!1!==u[e]&&(t.disable(e),u[e]=!1)}function V(e,n,i,a,o,s,c,l){if(0!==e){if(f||(U(3042),f=!0),5===e)o=o||n,s=s||i,c=c||a,n===g&&o===b||(t.blendEquationSeparate(r.convert(n),r.convert(o)),g=n,b=o),i===v&&a===y&&s===w&&c===_||(t.blendFuncSeparate(r.convert(i),r.convert(a),r.convert(s),r.convert(c)),v=i,y=a,w=s,_=c),m=e,M=null;else if(e!==m||l!==M){if(100===g&&100===b||(t.blendEquation(32774),g=100,b=100),l)switch(e){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,0,769,771);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFunc(0,769);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}v=null,y=null,w=null,_=null,m=e,M=l}}else f&&(H(3042),f=!1)}function j(e){S!==e&&(e?t.frontFace(2304):t.frontFace(2305),S=e)}function k(e){0!==e?(U(2884),e!==T&&(1===e?t.cullFace(1029):2===e?t.cullFace(1028):t.cullFace(1032))):H(2884),T=e}function W(e,r,n){e?(U(32823),A===r&&L===n||(t.polygonOffset(r,n),A=r,L=n)):H(32823)}function q(e){void 0===e&&(e=33984+R-1),D!==e&&(t.activeTexture(e),D=e)}return F[3553]=B(3553,3553,1),F[34067]=B(34067,34069,6),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(2929),a.setFunc(3),j(!1),k(1),U(2884),V(0),{buffers:{color:i,depth:a,stencil:o},initAttributes:function(){for(var t=0,e=c.length;t<e;t++)c[t]=0},enableAttribute:function(t){G(t,0)},enableAttributeAndDivisor:G,disableUnusedAttributes:function(){for(var e=0,r=l.length;e!==r;++e)l[e]!==c[e]&&(t.disableVertexAttribArray(e),l[e]=0)},enable:U,disable:H,getCompressedTextureFormats:function(){if(null===p&&(p=[],e.get("WEBGL_compressed_texture_pvrtc")||e.get("WEBGL_compressed_texture_s3tc")||e.get("WEBGL_compressed_texture_etc1")||e.get("WEBGL_compressed_texture_astc")))for(var r=t.getParameter(34467),n=0;n<r.length;n++)p.push(r[n]);return p},useProgram:function(e){return d!==e&&(t.useProgram(e),d=e,!0)},setBlending:V,setMaterial:function(t,e){2===t.side?H(2884):U(2884);var r=1===t.side;e&&(r=!r),j(r),1===t.blending&&!1===t.transparent?V(0):V(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);var n=t.stencilWrite;o.setTest(n),n&&(o.setFunc(t.stencilFunc,t.stencilRef,t.stencilMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),W(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits)},setFlipSided:j,setCullFace:k,setLineWidth:function(e){e!==E&&(P&&t.lineWidth(e),E=e)},setPolygonOffset:W,setScissorTest:function(t){t?U(3089):H(3089)},activeTexture:q,bindTexture:function(e,r){null===D&&q();var n=N[D];void 0===n&&(n={type:void 0,texture:void 0},N[D]=n),n.type===e&&n.texture===r||(t.bindTexture(e,r||F[e]),n.type=e,n.texture=r)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},scissor:function(e){!1===I.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),I.copy(e))},viewport:function(e){!1===z.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),z.copy(e))},reset:function(){for(var e=0;e<l.length;e++)1===l[e]&&(t.disableVertexAttribArray(e),l[e]=0);u={},p=null,D=null,N={},d=null,m=null,S=null,T=null,i.reset(),a.reset(),o.reset()}}}function Hn(t,e,r,n,a,o,c){var l,h=new WeakMap,u="undefined"!=typeof OffscreenCanvas;function p(t,e){return u?new OffscreenCanvas(t,e):i.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function d(t,e,r,n){var i=1;if((t.width>n||t.height>n)&&(i=n/Math.max(t.width,t.height)),i<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){var a=e?s.floorPowerOfTwo:Math.floor,o=a(i*t.width),c=a(i*t.height);void 0===l&&(l=p(o,c));var h=r?p(o,c):l;return h.width=o,h.height=c,h.getContext("2d").drawImage(t,0,0,o,c),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+o+"x"+c+")."),h}return"data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function f(t){return s.isPowerOfTwo(t.width)&&s.isPowerOfTwo(t.height)}function m(t,e){return t.generateMipmaps&&e&&1003!==t.minFilter&&1006!==t.minFilter}function g(e,r,i,a){t.generateMipmap(e),n.get(r).__maxMipLevel=Math.log(Math.max(i,a))*Math.LOG2E}function v(t,r){if(!a.isWebGL2)return t;var n=t;return 6403===t&&(5126===r&&(n=33326),5131===r&&(n=33325),5121===r&&(n=33321)),6407===t&&(5126===r&&(n=34837),5131===r&&(n=34843),5121===r&&(n=32849)),6408===t&&(5126===r&&(n=34836),5131===r&&(n=34842),5121===r&&(n=32856)),33325===n||33326===n||34842===n||34836===n?e.get("EXT_color_buffer_float"):34843!==n&&34837!==n||console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."),n}function y(t){return 1003===t||1004===t||1005===t?9728:9729}function x(e){var r=e.target;r.removeEventListener("dispose",x),function(e){var r=n.get(e);void 0!==r.__webglInit&&(t.deleteTexture(r.__webglTexture),n.remove(e))}(r),r.isVideoTexture&&h.delete(r),c.memory.textures--}function b(e){var r=e.target;r.removeEventListener("dispose",b),function(e){var r=n.get(e),i=n.get(e.texture);if(e){if(void 0!==i.__webglTexture&&t.deleteTexture(i.__webglTexture),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLRenderTargetCube)for(var a=0;a<6;a++)t.deleteFramebuffer(r.__webglFramebuffer[a]),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[a]);else t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer);n.remove(e.texture),n.remove(e)}}(r),c.memory.textures--}var w=0;function _(t,e){var i=n.get(t);if(t.isVideoTexture&&function(t){var e=c.render.frame;h.get(t)!==e&&(h.set(t,e),t.update())}(t),t.version>0&&i.__version!==t.version){var a=t.image;if(void 0===a)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(!1!==a.complete)return void A(i,t,e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}r.activeTexture(33984+e),r.bindTexture(3553,i.__webglTexture)}function M(e,i){if(6===e.image.length){var s=n.get(e);if(e.version>0&&s.__version!==e.version){E(s,e),r.activeTexture(33984+i),r.bindTexture(34067,s.__webglTexture),t.pixelStorei(37440,e.flipY);for(var c=e&&e.isCompressedTexture,l=e.image[0]&&e.image[0].isDataTexture,h=[],u=0;u<6;u++)h[u]=c||l?l?e.image[u].image:e.image[u]:d(e.image[u],!1,!0,a.maxCubemapSize);var p,y=h[0],x=f(y)||a.isWebGL2,b=o.convert(e.format),w=o.convert(e.type),_=v(b,w);if(T(34067,e,x),c){for(u=0;u<6;u++){p=h[u].mipmaps;for(var M=0;M<p.length;M++){var S=p[M];1023!==e.format&&1022!==e.format?r.getCompressedTextureFormats().indexOf(b)>-1?r.compressedTexImage2D(34069+u,M,_,S.width,S.height,0,S.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):r.texImage2D(34069+u,M,_,S.width,S.height,0,b,w,S.data)}}s.__maxMipLevel=p.length-1}else{for(p=e.mipmaps,u=0;u<6;u++)if(l)for(r.texImage2D(34069+u,0,_,h[u].width,h[u].height,0,b,w,h[u].data),M=0;M<p.length;M++){var A=(S=p[M]).image[u].image;r.texImage2D(34069+u,M+1,_,A.width,A.height,0,b,w,A.data)}else for(r.texImage2D(34069+u,0,_,b,w,h[u]),M=0;M<p.length;M++)S=p[M],r.texImage2D(34069+u,M+1,_,b,w,S.image[u]);s.__maxMipLevel=p.length}m(e,x)&&g(34067,e,y.width,y.height),s.__version=e.version,e.onUpdate&&e.onUpdate(e)}else r.activeTexture(33984+i),r.bindTexture(34067,s.__webglTexture)}}function S(t,e){r.activeTexture(33984+e),r.bindTexture(34067,n.get(t).__webglTexture)}function T(r,i,s){var c;if(s?(t.texParameteri(r,10242,o.convert(i.wrapS)),t.texParameteri(r,10243,o.convert(i.wrapT)),32879!==r&&35866!==r||t.texParameteri(r,32882,o.convert(i.wrapR)),t.texParameteri(r,10240,o.convert(i.magFilter)),t.texParameteri(r,10241,o.convert(i.minFilter))):(t.texParameteri(r,10242,33071),t.texParameteri(r,10243,33071),32879!==r&&35866!==r||t.texParameteri(r,32882,33071),1001===i.wrapS&&1001===i.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(r,10240,y(i.magFilter)),t.texParameteri(r,10241,y(i.minFilter)),1003!==i.minFilter&&1006!==i.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),c=e.get("EXT_texture_filter_anisotropic")){if(1015===i.type&&null===e.get("OES_texture_float_linear"))return;if(1016===i.type&&null===(a.isWebGL2||e.get("OES_texture_half_float_linear")))return;(i.anisotropy>1||n.get(i).__currentAnisotropy)&&(t.texParameterf(r,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,a.getMaxAnisotropy())),n.get(i).__currentAnisotropy=i.anisotropy)}}function E(e,r){void 0===e.__webglInit&&(e.__webglInit=!0,r.addEventListener("dispose",x),e.__webglTexture=t.createTexture(),c.memory.textures++)}function A(e,n,i){var s=3553;n.isDataTexture2DArray&&(s=35866),n.isDataTexture3D&&(s=32879),E(e,n),r.activeTexture(33984+i),r.bindTexture(s,e.__webglTexture),t.pixelStorei(37440,n.flipY),t.pixelStorei(37441,n.premultiplyAlpha),t.pixelStorei(3317,n.unpackAlignment);var c=function(t){return!a.isWebGL2&&(1001!==t.wrapS||1001!==t.wrapT||1003!==t.minFilter&&1006!==t.minFilter)}(n)&&!1===f(n.image),l=d(n.image,c,!1,a.maxTextureSize),h=f(l)||a.isWebGL2,u=o.convert(n.format),p=o.convert(n.type),y=v(u,p);T(s,n,h);var x,b=n.mipmaps;if(n.isDepthTexture){if(y=6402,1015===n.type){if(!a.isWebGL2)throw new Error("Float Depth Texture only supported in WebGL2.0");y=36012}else a.isWebGL2&&(y=33189);1026===n.format&&6402===y&&1012!==n.type&&1014!==n.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),n.type=1012,p=o.convert(n.type)),1027===n.format&&(y=34041,1020!==n.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),n.type=1020,p=o.convert(n.type))),r.texImage2D(3553,0,y,l.width,l.height,0,u,p,null)}else if(n.isDataTexture)if(b.length>0&&h){for(var w=0,_=b.length;w<_;w++)x=b[w],r.texImage2D(3553,w,y,x.width,x.height,0,u,p,x.data);n.generateMipmaps=!1,e.__maxMipLevel=b.length-1}else r.texImage2D(3553,0,y,l.width,l.height,0,u,p,l.data),e.__maxMipLevel=0;else if(n.isCompressedTexture){for(w=0,_=b.length;w<_;w++)x=b[w],1023!==n.format&&1022!==n.format?r.getCompressedTextureFormats().indexOf(u)>-1?r.compressedTexImage2D(3553,w,y,x.width,x.height,0,x.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):r.texImage2D(3553,w,y,x.width,x.height,0,u,p,x.data);e.__maxMipLevel=b.length-1}else if(n.isDataTexture2DArray)r.texImage3D(35866,0,y,l.width,l.height,l.depth,0,u,p,l.data),e.__maxMipLevel=0;else if(n.isDataTexture3D)r.texImage3D(32879,0,y,l.width,l.height,l.depth,0,u,p,l.data),e.__maxMipLevel=0;else if(b.length>0&&h){for(w=0,_=b.length;w<_;w++)x=b[w],r.texImage2D(3553,w,y,u,p,x);n.generateMipmaps=!1,e.__maxMipLevel=b.length-1}else r.texImage2D(3553,0,y,u,p,l),e.__maxMipLevel=0;m(n,h)&&g(3553,n,l.width,l.height),e.__version=n.version,n.onUpdate&&n.onUpdate(n)}function L(e,i,a,s){var c=o.convert(i.texture.format),l=o.convert(i.texture.type),h=v(c,l);r.texImage2D(s,0,h,i.width,i.height,0,c,l,null),t.bindFramebuffer(36160,e),t.framebufferTexture2D(36160,a,s,n.get(i.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function R(e,r,n){if(t.bindRenderbuffer(36161,e),r.depthBuffer&&!r.stencilBuffer){if(n){var i=C(r);t.renderbufferStorageMultisample(36161,i,33189,r.width,r.height)}else t.renderbufferStorage(36161,33189,r.width,r.height);t.framebufferRenderbuffer(36160,36096,36161,e)}else if(r.depthBuffer&&r.stencilBuffer)n?(i=C(r),t.renderbufferStorageMultisample(36161,i,35056,r.width,r.height)):t.renderbufferStorage(36161,34041,r.width,r.height),t.framebufferRenderbuffer(36160,33306,36161,e);else{var a=v(o.convert(r.texture.format),o.convert(r.texture.type));n?(i=C(r),t.renderbufferStorageMultisample(36161,i,a,r.width,r.height)):t.renderbufferStorage(36161,a,r.width,r.height)}t.bindRenderbuffer(36161,null)}function P(e){var r=n.get(e),i=!0===e.isWebGLRenderTargetCube;if(e.depthTexture){if(i)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,r){if(r&&r.isWebGLRenderTargetCube)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),_(r.depthTexture,0);var i=n.get(r.depthTexture).__webglTexture;if(1026===r.depthTexture.format)t.framebufferTexture2D(36160,36096,3553,i,0);else{if(1027!==r.depthTexture.format)throw new Error("Unknown depthTexture format");t.framebufferTexture2D(36160,33306,3553,i,0)}}(r.__webglFramebuffer,e)}else if(i){r.__webglDepthbuffer=[];for(var a=0;a<6;a++)t.bindFramebuffer(36160,r.__webglFramebuffer[a]),r.__webglDepthbuffer[a]=t.createRenderbuffer(),R(r.__webglDepthbuffer[a],e)}else t.bindFramebuffer(36160,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),R(r.__webglDepthbuffer,e);t.bindFramebuffer(36160,null)}function C(t){return a.isWebGL2&&t.isWebGLMultisampleRenderTarget?Math.min(a.maxSamples,t.samples):0}var O=!1,D=!1;this.allocateTextureUnit=function(){var t=w;return t>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+a.maxTextures),w+=1,t},this.resetTextureUnits=function(){w=0},this.setTexture2D=_,this.setTexture2DArray=function(t,e){var i=n.get(t);t.version>0&&i.__version!==t.version?A(i,t,e):(r.activeTexture(33984+e),r.bindTexture(35866,i.__webglTexture))},this.setTexture3D=function(t,e){var i=n.get(t);t.version>0&&i.__version!==t.version?A(i,t,e):(r.activeTexture(33984+e),r.bindTexture(32879,i.__webglTexture))},this.setTextureCube=M,this.setTextureCubeDynamic=S,this.setupRenderTarget=function(e){var i=n.get(e),s=n.get(e.texture);e.addEventListener("dispose",b),s.__webglTexture=t.createTexture(),c.memory.textures++;var l=!0===e.isWebGLRenderTargetCube,h=!0===e.isWebGLMultisampleRenderTarget,u=f(e)||a.isWebGL2;if(l){i.__webglFramebuffer=[];for(var p=0;p<6;p++)i.__webglFramebuffer[p]=t.createFramebuffer()}else if(i.__webglFramebuffer=t.createFramebuffer(),h)if(a.isWebGL2){i.__webglMultisampledFramebuffer=t.createFramebuffer(),i.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,i.__webglColorRenderbuffer);var d=v(o.convert(e.texture.format),o.convert(e.texture.type)),y=C(e);t.renderbufferStorageMultisample(36161,y,d,e.width,e.height),t.bindFramebuffer(36160,i.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,i.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),e.depthBuffer&&(i.__webglDepthRenderbuffer=t.createRenderbuffer(),R(i.__webglDepthRenderbuffer,e,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(l){for(r.bindTexture(34067,s.__webglTexture),T(34067,e.texture,u),p=0;p<6;p++)L(i.__webglFramebuffer[p],e,36064,34069+p);m(e.texture,u)&&g(34067,e.texture,e.width,e.height),r.bindTexture(34067,null)}else r.bindTexture(3553,s.__webglTexture),T(3553,e.texture,u),L(i.__webglFramebuffer,e,36064,3553),m(e.texture,u)&&g(3553,e.texture,e.width,e.height),r.bindTexture(3553,null);e.depthBuffer&&P(e)},this.updateRenderTargetMipmap=function(t){var e=t.texture;if(m(e,f(t)||a.isWebGL2)){var i=t.isWebGLRenderTargetCube?34067:3553,o=n.get(e).__webglTexture;r.bindTexture(i,o),g(i,e,t.width,t.height),r.bindTexture(i,null)}},this.updateMultisampleRenderTarget=function(e){if(e.isWebGLMultisampleRenderTarget)if(a.isWebGL2){var r=n.get(e);t.bindFramebuffer(36008,r.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,r.__webglFramebuffer);var i=e.width,o=e.height,s=16384;e.depthBuffer&&(s|=256),e.stencilBuffer&&(s|=1024),t.blitFramebuffer(0,0,i,o,0,0,i,o,s,9728)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(t,e){t&&t.isWebGLRenderTarget&&(!1===O&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),O=!0),t=t.texture),_(t,e)},this.safeSetTextureCube=function(t,e){t&&t.isWebGLRenderTargetCube&&(!1===D&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),D=!0),t=t.texture),t&&t.isCubeTexture||Array.isArray(t.image)&&6===t.image.length?M(t,e):S(t,e)}}function Vn(t,e,r){return{convert:function(t){var n;if(1e3===t)return 10497;if(1001===t)return 33071;if(1002===t)return 33648;if(1003===t)return 9728;if(1004===t)return 9984;if(1005===t)return 9986;if(1006===t)return 9729;if(1007===t)return 9985;if(1008===t)return 9987;if(1009===t)return 5121;if(1017===t)return 32819;if(1018===t)return 32820;if(1019===t)return 33635;if(1010===t)return 5120;if(1011===t)return 5122;if(1012===t)return 5123;if(1013===t)return 5124;if(1014===t)return 5125;if(1015===t)return 5126;if(1016===t){if(r.isWebGL2)return 5131;if(null!==(n=e.get("OES_texture_half_float")))return n.HALF_FLOAT_OES}if(1021===t)return 6406;if(1022===t)return 6407;if(1023===t)return 6408;if(1024===t)return 6409;if(1025===t)return 6410;if(1026===t)return 6402;if(1027===t)return 34041;if(1028===t)return 6403;if(100===t)return 32774;if(101===t)return 32778;if(102===t)return 32779;if(200===t)return 0;if(201===t)return 1;if(202===t)return 768;if(203===t)return 769;if(204===t)return 770;if(205===t)return 771;if(206===t)return 772;if(207===t)return 773;if(208===t)return 774;if(209===t)return 775;if(210===t)return 776;if((33776===t||33777===t||33778===t||33779===t)&&null!==(n=e.get("WEBGL_compressed_texture_s3tc"))){if(33776===t)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===t)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===t)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===t)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((35840===t||35841===t||35842===t||35843===t)&&null!==(n=e.get("WEBGL_compressed_texture_pvrtc"))){if(35840===t)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===t)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===t)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===t)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===t&&null!==(n=e.get("WEBGL_compressed_texture_etc1")))return n.COMPRESSED_RGB_ETC1_WEBGL;if((37808===t||37809===t||37810===t||37811===t||37812===t||37813===t||37814===t||37815===t||37816===t||37817===t||37818===t||37819===t||37820===t||37821===t)&&null!==(n=e.get("WEBGL_compressed_texture_astc")))return t;if(103===t||104===t){if(r.isWebGL2){if(103===t)return 32775;if(104===t)return 32776}if(null!==(n=e.get("EXT_blend_minmax"))){if(103===t)return n.MIN_EXT;if(104===t)return n.MAX_EXT}}if(1020===t){if(r.isWebGL2)return 34042;if(null!==(n=e.get("WEBGL_depth_texture")))return n.UNSIGNED_INT_24_8_WEBGL}return 0}}}function jn(){Y.call(this),this.type="Group"}function kn(t){Ue.call(this),this.cameras=t||[]}Bn.prototype=Object.create(Ut.prototype),Bn.prototype.constructor=Bn,Bn.prototype.isMeshDepthMaterial=!0,Bn.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this},Fn.prototype=Object.create(Ut.prototype),Fn.prototype.constructor=Fn,Fn.prototype.isMeshDistanceMaterial=!0,Fn.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this},jn.prototype=Object.assign(Object.create(Y.prototype),{constructor:jn,isGroup:!0}),kn.prototype=Object.assign(Object.create(Ue.prototype),{constructor:kn,isArrayCamera:!0});var Wn,qn=new d,Xn=new d;function Yn(t,e,r){qn.setFromMatrixPosition(e.matrixWorld),Xn.setFromMatrixPosition(r.matrixWorld);var n=qn.distanceTo(Xn),i=e.projectionMatrix.elements,a=r.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],h=(i[8]-1)/i[0],u=(a[8]+1)/a[0],p=o*h,d=o*u,f=n/(-h+u),m=f*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(m),t.translateZ(f),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.getInverse(t.matrixWorld);var g=o+f,v=s+f,y=p-m,x=d+(n-m),b=c*s/v*g,w=l*s/v*g;t.projectionMatrix.makePerspective(y,x,b,w,g,v)}function Jn(t){var e,r,n=this,i=null,o=null,s=null,c=[],u=new P,p=new P,f=1,m="local-floor";void 0!==a&&"VRFrameData"in a&&(o=new a.VRFrameData,a.addEventListener("vrdisplaypresentchange",E,!1));var g=new P,v=new h,y=new d,b=new Ue;b.viewport=new x,b.layers.enable(1);var w=new Ue;w.viewport=new x,w.layers.enable(2);var _=new kn([b,w]);function M(){return null!==i&&!0===i.isPresenting}_.layers.enable(1),_.layers.enable(2);var S,T=new l;function E(){if(M()){var a=i.getEyeParameters("left");e=2*a.renderWidth*f,r=a.renderHeight*f,S=t.getPixelRatio(),t.getSize(T),t.setDrawingBufferSize(e,r,1),b.viewport.set(0,0,e/2,r),w.viewport.set(e/2,0,e/2,r),C.start(),n.dispatchEvent({type:"sessionstart"})}else n.enabled&&t.setDrawingBufferSize(T.width,T.height,S),C.stop(),n.dispatchEvent({type:"sessionend"})}var A=[];function L(t){for(var e=navigator.getGamepads&&navigator.getGamepads(),r=0,n=0,i=e.length;r<i;r++){var a=e[r];if(a&&("Daydream Controller"===a.id||"Gear VR Controller"===a.id||"Oculus Go Controller"===a.id||"OpenVR Gamepad"===a.id||a.id.startsWith("Oculus Touch")||a.id.startsWith("HTC Vive Focus")||a.id.startsWith("Spatial Controller"))){if(n===t)return a;n++}}}function R(t,n){null!==n&&4===n.length&&t.set(n[0]*e,n[1]*r,n[2]*e,n[3]*r)}this.enabled=!1,this.getController=function(t){var e=c[t];return void 0===e&&((e=new jn).matrixAutoUpdate=!1,e.visible=!1,c[t]=e),e},this.getDevice=function(){return i},this.setDevice=function(t){void 0!==t&&(i=t),C.setContext(t)},this.setFramebufferScaleFactor=function(t){f=t},this.setReferenceSpaceType=function(t){m=t},this.setPoseTarget=function(t){void 0!==t&&(s=t)},this.getCamera=function(t){var e="local-floor"===m?1.6:0;if(!1===M())return t.position.set(0,e,0),t.rotation.set(0,0,0),t;if(i.depthNear=t.near,i.depthFar=t.far,i.getFrameData(o),"local-floor"===m){var r=i.stageParameters;r?u.fromArray(r.sittingToStandingTransform):u.makeTranslation(0,e,0)}var n=o.pose,a=null!==s?s:t;a.matrix.copy(u),a.matrix.decompose(a.position,a.quaternion,a.scale),null!==n.orientation&&(v.fromArray(n.orientation),a.quaternion.multiply(v)),null!==n.position&&(v.setFromRotationMatrix(u),y.fromArray(n.position),y.applyQuaternion(v),a.position.add(y)),a.updateMatrixWorld(),b.near=t.near,w.near=t.near,b.far=t.far,w.far=t.far,b.matrixWorldInverse.fromArray(o.leftViewMatrix),w.matrixWorldInverse.fromArray(o.rightViewMatrix),p.getInverse(u),"local-floor"===m&&(b.matrixWorldInverse.multiply(p),w.matrixWorldInverse.multiply(p));var l=a.parent;null!==l&&(g.getInverse(l.matrixWorld),b.matrixWorldInverse.multiply(g),w.matrixWorldInverse.multiply(g)),b.matrixWorld.getInverse(b.matrixWorldInverse),w.matrixWorld.getInverse(w.matrixWorldInverse),b.projectionMatrix.fromArray(o.leftProjectionMatrix),w.projectionMatrix.fromArray(o.rightProjectionMatrix),Yn(_,b,w);var h=i.getLayers();if(h.length){var d=h[0];R(b.viewport,d.leftBounds),R(w.viewport,d.rightBounds)}return function(){for(var t=0;t<c.length;t++){var e=c[t],r=L(t);if(void 0!==r&&void 0!==r.pose){if(null===r.pose)return;var n=r.pose;!1===n.hasPosition&&e.position.set(.2,-.6,-.05),null!==n.position&&e.position.fromArray(n.position),null!==n.orientation&&e.quaternion.fromArray(n.orientation),e.matrix.compose(e.position,e.quaternion,e.scale),e.matrix.premultiply(u),e.matrix.decompose(e.position,e.quaternion,e.scale),e.matrixWorldNeedsUpdate=!0,e.visible=!0;var i="Daydream Controller"===r.id?0:1;void 0===A[t]&&(A[t]=!1),A[t]!==r.buttons[i].pressed&&(A[t]=r.buttons[i].pressed,!0===A[t]?e.dispatchEvent({type:"selectstart"}):(e.dispatchEvent({type:"selectend"}),e.dispatchEvent({type:"select"})))}else e.visible=!1}}(),_},this.getStandingMatrix=function(){return u},this.isPresenting=M;var C=new tr;this.setAnimationLoop=function(t){C.setAnimationLoop(t),M()&&C.start()},this.submitFrame=function(){M()&&i.submitFrame()},this.dispose=function(){void 0!==a&&a.removeEventListener("vrdisplaypresentchange",E)},this.setFrameOfReferenceType=function(){console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.")}}function Zn(t,e){var r=this,n=null,i=null,a="local-floor",o=null,s=[],c=[];function l(){return null!==n&&null!==i}var h=new Ue;h.layers.enable(1),h.viewport=new x;var u=new Ue;u.layers.enable(2),u.viewport=new x;var p=new kn([h,u]);function d(t){for(var e=0;e<s.length;e++)c[e]===t.inputSource&&s[e].dispatchEvent({type:t.type})}function f(){t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),y.stop(),r.dispatchEvent({type:"sessionend"})}function m(t){i=t,y.setContext(n),y.start(),r.dispatchEvent({type:"sessionstart"})}function g(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.getInverse(t.matrixWorld)}p.layers.enable(1),p.layers.enable(2),this.enabled=!1,this.getController=function(t){var e=s[t];return void 0===e&&((e=new jn).matrixAutoUpdate=!1,e.visible=!1,s[t]=e),e},this.setFramebufferScaleFactor=function(t){},this.setReferenceSpaceType=function(t){a=t},this.getSession=function(){return n},this.setSession=function(t){null!==(n=t)&&(n.addEventListener("select",d),n.addEventListener("selectstart",d),n.addEventListener("selectend",d),n.addEventListener("end",f),n.updateRenderState({baseLayer:new XRWebGLLayer(n,e)}),n.requestReferenceSpace(a).then(m),c=n.inputSources,n.addEventListener("inputsourceschange",(function(){c=n.inputSources,console.log(c);for(var t=0;t<s.length;t++)s[t].userData.inputSource=c[t]})))},this.getCamera=function(t){if(l()){var e=t.parent,r=p.cameras;g(p,e);for(var n=0;n<r.length;n++)g(r[n],e);t.matrixWorld.copy(p.matrixWorld);for(var i=t.children,a=(n=0,i.length);n<a;n++)i[n].updateMatrixWorld(!0);return Yn(p,h,u),p}return t},this.isPresenting=l;var v=null,y=new tr;y.setAnimationLoop((function(e,r){if(null!==(o=r.getViewerPose(i))){var a=o.views,l=n.renderState.baseLayer;t.setFramebuffer(l.framebuffer);for(var h=0;h<a.length;h++){var u=a[h],d=l.getViewport(u),f=u.transform.inverse.matrix,m=p.cameras[h];m.matrix.fromArray(f).getInverse(m.matrix),m.projectionMatrix.fromArray(u.projectionMatrix),m.viewport.set(d.x,d.y,d.width,d.height),0===h&&p.matrix.copy(m.matrix)}}for(h=0;h<s.length;h++){var g=s[h],y=c[h];if(y){var x=r.getPose(y.targetRaySpace,i);if(null!==x){g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.visible=!0;continue}}g.visible=!1}v&&v(e)})),this.setAnimationLoop=function(t){v=t},this.dispose=function(){},this.getStandingMatrix=function(){return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."),new P},this.getDevice=function(){console.warn("THREE.WebXRManager: getDevice() has been deprecated.")},this.setDevice=function(){console.warn("THREE.WebXRManager: setDevice() has been deprecated.")},this.setFrameOfReferenceType=function(){console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.")},this.submitFrame=function(){}}function Qn(t){var e=void 0!==(t=t||{}).canvas?t.canvas:i.createElementNS("http://www.w3.org/1999/xhtml","canvas"),r=void 0!==t.context?t.context:null,n=void 0!==t.alpha&&t.alpha,o=void 0===t.depth||t.depth,c=void 0===t.stencil||t.stencil,h=void 0!==t.antialias&&t.antialias,u=void 0===t.premultipliedAlpha||t.premultipliedAlpha,p=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,f=void 0!==t.powerPreference?t.powerPreference:"default",m=void 0!==t.failIfMajorPerformanceCaveat&&t.failIfMajorPerformanceCaveat,g=null,v=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=1,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var y,b,w,_,M,S,T,E,A,L,R,C,O,D,N,I,z,B,F=this,G=!1,U=null,H=0,V=0,j=null,k=null,W=-1,q={geometry:null,program:null,wireframe:!1},X=null,Y=null,J=new x,Z=new x,Q=null,K=e.width,$=e.height,tt=1,et=new x(0,0,K,$),rt=new x(0,0,K,$),nt=!1,it=new Ze,at=new sr,ot=!1,st=!1,ct=new P,lt=new d;function ht(){return null===j?tt:1}try{var ut={alpha:n,depth:o,stencil:c,antialias:h,premultipliedAlpha:u,preserveDrawingBuffer:p,powerPreference:f,failIfMajorPerformanceCaveat:m,xrCompatible:!0};if(e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",gt,!1),null===(y=r||e.getContext("webgl",ut)||e.getContext("experimental-webgl",ut)))throw null!==e.getContext("webgl")?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.");void 0===y.getShaderPrecisionFormat&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function pt(){b=new cr(y),(w=new or(y,b,t)).isWebGL2||(b.get("WEBGL_depth_texture"),b.get("OES_texture_float"),b.get("OES_texture_half_float"),b.get("OES_texture_half_float_linear"),b.get("OES_standard_derivatives"),b.get("OES_element_index_uint"),b.get("ANGLE_instanced_arrays")),b.get("OES_texture_float_linear"),B=new Vn(y,b,w),(_=new Un(y,b,B,w)).scissor(Z.copy(rt).multiplyScalar(tt).floor()),_.viewport(J.copy(et).multiplyScalar(tt).floor()),M=new ur(y),S=new En,T=new Hn(y,b,_,S,w,B,M),E=new er(y),A=new lr(y,E,M),L=new fr(A,M),N=new dr(y),R=new Tn(F,b,w),C=new Pn,O=new zn,D=new ir(F,_,L,u),I=new ar(y,b,M,w),z=new hr(y,b,M,w),M.programs=R.programs,F.capabilities=w,F.extensions=b,F.properties=S,F.renderLists=C,F.state=_,F.info=M}pt();var dt="undefined"!=typeof navigator&&"xr"in navigator&&"supportsSession"in navigator.xr?new Zn(F,y):new Jn(F);this.vr=dt;var ft=new Gn(F,L,w.maxTextureSize);function mt(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1,pt()}function vt(t){var e=t.target;e.removeEventListener("dispose",vt),function(t){yt(t),S.remove(t)}(e)}function yt(t){var e=S.get(t).program;t.program=void 0,void 0!==e&&R.releaseProgram(e)}this.shadowMap=ft,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){var t=b.get("WEBGL_lose_context");t&&t.loseContext()},this.forceContextRestore=function(){var t=b.get("WEBGL_lose_context");t&&t.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(t){void 0!==t&&(tt=t,this.setSize(K,$,!1))},this.getSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),t=new l),t.set(K,$)},this.setSize=function(t,r,n){dt.isPresenting()?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(K=t,$=r,e.width=Math.floor(t*tt),e.height=Math.floor(r*tt),!1!==n&&(e.style.width=t+"px",e.style.height=r+"px"),this.setViewport(0,0,t,r))},this.getDrawingBufferSize=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),t=new l),t.set(K*tt,$*tt).floor()},this.setDrawingBufferSize=function(t,r,n){K=t,$=r,tt=n,e.width=Math.floor(t*n),e.height=Math.floor(r*n),this.setViewport(0,0,t,r)},this.getCurrentViewport=function(t){return void 0===t&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),t=new x),t.copy(J)},this.getViewport=function(t){return t.copy(et)},this.setViewport=function(t,e,r,n){t.isVector4?et.set(t.x,t.y,t.z,t.w):et.set(t,e,r,n),_.viewport(J.copy(et).multiplyScalar(tt).floor())},this.getScissor=function(t){return t.copy(rt)},this.setScissor=function(t,e,r,n){t.isVector4?rt.set(t.x,t.y,t.z,t.w):rt.set(t,e,r,n),_.scissor(Z.copy(rt).multiplyScalar(tt).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(t){_.setScissorTest(nt=t)},this.getClearColor=function(){return D.getClearColor()},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(t,e,r){var n=0;(void 0===t||t)&&(n|=16384),(void 0===e||e)&&(n|=256),(void 0===r||r)&&(n|=1024),y.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",gt,!1),C.dispose(),O.dispose(),S.dispose(),L.dispose(),dt.dispose(),bt.stop()},this.renderBufferImmediate=function(t,e){_.initAttributes();var r=S.get(t);t.hasPositions&&!r.position&&(r.position=y.createBuffer()),t.hasNormals&&!r.normal&&(r.normal=y.createBuffer()),t.hasUvs&&!r.uv&&(r.uv=y.createBuffer()),t.hasColors&&!r.color&&(r.color=y.createBuffer());var n=e.getAttributes();t.hasPositions&&(y.bindBuffer(34962,r.position),y.bufferData(34962,t.positionArray,35048),_.enableAttribute(n.position),y.vertexAttribPointer(n.position,3,5126,!1,0,0)),t.hasNormals&&(y.bindBuffer(34962,r.normal),y.bufferData(34962,t.normalArray,35048),_.enableAttribute(n.normal),y.vertexAttribPointer(n.normal,3,5126,!1,0,0)),t.hasUvs&&(y.bindBuffer(34962,r.uv),y.bufferData(34962,t.uvArray,35048),_.enableAttribute(n.uv),y.vertexAttribPointer(n.uv,2,5126,!1,0,0)),t.hasColors&&(y.bindBuffer(34962,r.color),y.bufferData(34962,t.colorArray,35048),_.enableAttribute(n.color),y.vertexAttribPointer(n.color,3,5126,!1,0,0)),_.disableUnusedAttributes(),y.drawArrays(4,0,t.count),t.count=0},this.renderBufferDirect=function(t,e,r,n,i,a){var o=i.isMesh&&i.matrixWorld.determinant()<0;_.setMaterial(n,o);var s=Tt(t,e,n,i),c=!1;q.geometry===r.id&&q.program===s.id&&q.wireframe===(!0===n.wireframe)||(q.geometry=r.id,q.program=s.id,q.wireframe=!0===n.wireframe,c=!0),i.morphTargetInfluences&&(N.update(i,r,n,s),c=!0);var l,h=r.index,u=r.attributes.position,p=1;!0===n.wireframe&&(h=A.getWireframeAttribute(r),p=2);var d=I;null!==h&&(l=E.get(h),(d=z).setIndex(l)),c&&(function(t,e,r){if(r&&r.isInstancedBufferGeometry&&!w.isWebGL2&&null===b.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{_.initAttributes();var n=r.attributes,i=e.getAttributes(),a=t.defaultAttributeValues;for(var o in i){var s=i[o];if(s>=0){var c=n[o];if(void 0!==c){var l=c.normalized,h=c.itemSize,u=E.get(c);if(void 0===u)continue;var p=u.buffer,d=u.type,f=u.bytesPerElement;if(c.isInterleavedBufferAttribute){var m=c.data,g=m.stride,v=c.offset;m&&m.isInstancedInterleavedBuffer?(_.enableAttributeAndDivisor(s,m.meshPerAttribute),void 0===r.maxInstancedCount&&(r.maxInstancedCount=m.meshPerAttribute*m.count)):_.enableAttribute(s),y.bindBuffer(34962,p),y.vertexAttribPointer(s,h,d,l,g*f,v*f)}else c.isInstancedBufferAttribute?(_.enableAttributeAndDivisor(s,c.meshPerAttribute),void 0===r.maxInstancedCount&&(r.maxInstancedCount=c.meshPerAttribute*c.count)):_.enableAttribute(s),y.bindBuffer(34962,p),y.vertexAttribPointer(s,h,d,l,0,0)}else if(void 0!==a){var x=a[o];if(void 0!==x)switch(x.length){case 2:y.vertexAttrib2fv(s,x);break;case 3:y.vertexAttrib3fv(s,x);break;case 4:y.vertexAttrib4fv(s,x);break;default:y.vertexAttrib1fv(s,x)}}}}_.disableUnusedAttributes()}}(n,s,r),null!==h&&y.bindBuffer(34963,l.buffer));var f=1/0;null!==h?f=h.count:void 0!==u&&(f=u.count);var m=r.drawRange.start*p,g=r.drawRange.count*p,v=null!==a?a.start*p:0,x=null!==a?a.count*p:1/0,M=Math.max(m,v),S=Math.min(f,m+g,v+x)-1,T=Math.max(0,S-M+1);if(0!==T){if(i.isMesh)if(!0===n.wireframe)_.setLineWidth(n.wireframeLinewidth*ht()),d.setMode(1);else switch(i.drawMode){case 0:d.setMode(4);break;case 1:d.setMode(5);break;case 2:d.setMode(6)}else if(i.isLine){var L=n.linewidth;void 0===L&&(L=1),_.setLineWidth(L*ht()),i.isLineSegments?d.setMode(1):i.isLineLoop?d.setMode(2):d.setMode(3)}else i.isPoints?d.setMode(0):i.isSprite&&d.setMode(4);r&&r.isInstancedBufferGeometry?r.maxInstancedCount>0&&d.renderInstances(r,M,T):d.render(M,T)}},this.compile=function(t,e){(v=O.get(t,e)).init(),t.traverse((function(t){t.isLight&&(v.pushLight(t),t.castShadow&&v.pushShadow(t))})),v.setupLights(e),t.traverse((function(e){if(e.material)if(Array.isArray(e.material))for(var r=0;r<e.material.length;r++)St(e.material[r],t.fog,e);else St(e.material,t.fog,e)}))};var xt=null,bt=new tr;function wt(t,e,r,n){if(!1!==t.visible){if(t.layers.test(e.layers))if(t.isGroup)r=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)v.pushLight(t),t.castShadow&&v.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||it.intersectsSprite(t)){n&&lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ct);var i=L.update(t);(a=t.material).visible&&g.push(t,i,a,r,lt.z,null)}}else if(t.isImmediateRenderObject)n&&lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ct),g.push(t,null,t.material,r,lt.z,null);else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.update(),!t.frustumCulled||it.intersectsObject(t))){n&&lt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(ct),i=L.update(t);var a=t.material;if(Array.isArray(a))for(var o=i.groups,s=0,c=o.length;s<c;s++){var l=o[s],h=a[l.materialIndex];h&&h.visible&&g.push(t,i,h,r,lt.z,l)}else a.visible&&g.push(t,i,a,r,lt.z,null)}var u=t.children;for(s=0,c=u.length;s<c;s++)wt(u[s],e,r,n)}}function _t(t,e,r,n){for(var i=0,a=t.length;i<a;i++){var o=t[i],s=o.object,c=o.geometry,l=void 0===n?o.material:n,h=o.group;if(r.isArrayCamera){Y=r;for(var u=r.cameras,p=0,d=u.length;p<d;p++){var f=u[p];s.layers.test(f.layers)&&(_.viewport(J.copy(f.viewport)),v.setupLights(f),Mt(s,e,f,c,l,h))}}else Y=null,Mt(s,e,r,c,l,h)}}function Mt(t,e,r,n,i,a){if(t.onBeforeRender(F,e,r,n,i,a),v=O.get(e,Y||r),t.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),t.isImmediateRenderObject){_.setMaterial(i);var o=Tt(r,e.fog,i,t);q.geometry=null,q.program=null,q.wireframe=!1,function(t,e){t.render((function(t){F.renderBufferImmediate(t,e)}))}(t,o)}else F.renderBufferDirect(r,e.fog,n,i,t,a);t.onAfterRender(F,e,r,n,i,a),v=O.get(e,Y||r)}function St(t,e,r){var n=S.get(t),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=R.getParameters(t,i.state,a,e,at.numPlanes,at.numIntersection,r),c=R.getProgramCode(t,s),l=n.program,h=!0;if(void 0===l)t.addEventListener("dispose",vt);else if(l.code!==c)yt(t);else if(n.lightsStateVersion!==o)n.lightsStateVersion=o,h=!1;else{if(void 0!==s.shaderID)return;h=!1}if(h){if(s.shaderID){var u=$e[s.shaderID];n.shader={name:t.type,uniforms:Ie(u.uniforms),vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}}else n.shader={name:t.type,uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader};t.onBeforeCompile(n.shader,F),c=R.getProgramCode(t,s),l=R.acquireProgram(t,n.shader,s,c),n.program=l,t.program=l}var p=l.getAttributes();if(t.morphTargets){t.numSupportedMorphTargets=0;for(var d=0;d<F.maxMorphTargets;d++)p["morphTarget"+d]>=0&&t.numSupportedMorphTargets++}if(t.morphNormals)for(t.numSupportedMorphNormals=0,d=0;d<F.maxMorphNormals;d++)p["morphNormal"+d]>=0&&t.numSupportedMorphNormals++;var f=n.shader.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(n.numClippingPlanes=at.numPlanes,n.numIntersection=at.numIntersection,f.clippingPlanes=at.uniform),n.fog=e,n.lightsStateVersion=o,t.lights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.spotLights.value=i.state.spot,f.rectAreaLights.value=i.state.rectArea,f.pointLights.value=i.state.point,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMap.value=i.state.directionalShadowMap,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotShadowMap.value=i.state.spotShadowMap,f.spotShadowMatrix.value=i.state.spotShadowMatrix,f.pointShadowMap.value=i.state.pointShadowMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix);var m=n.program.getUniforms(),g=pn.seqWithValue(m.seq,f);n.uniformsList=g}function Tt(t,e,r,n){T.resetTextureUnits();var i=S.get(r),a=v.state.lights;if(ot&&(st||t!==X)){var o=t===X&&r.id===W;at.setState(r.clippingPlanes,r.clipIntersection,r.clipShadows,t,i,o)}!1===r.needsUpdate&&(void 0===i.program||r.fog&&i.fog!==e||r.lights&&i.lightsStateVersion!==a.state.version?r.needsUpdate=!0:void 0===i.numClippingPlanes||i.numClippingPlanes===at.numPlanes&&i.numIntersection===at.numIntersection||(r.needsUpdate=!0)),r.needsUpdate&&(St(r,e,n),r.needsUpdate=!1);var c,l,h=!1,u=!1,p=!1,d=i.program,f=d.getUniforms(),m=i.shader.uniforms;if(_.useProgram(d.program)&&(h=!0,u=!0,p=!0),r.id!==W&&(W=r.id,u=!0),h||X!==t){if(f.setValue(y,"projectionMatrix",t.projectionMatrix),w.logarithmicDepthBuffer&&f.setValue(y,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),X!==t&&(X=t,u=!0,p=!0),r.isShaderMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.envMap){var g=f.map.cameraPosition;void 0!==g&&g.setValue(y,lt.setFromMatrixPosition(t.matrixWorld))}(r.isMeshPhongMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial||r.skinning)&&f.setValue(y,"viewMatrix",t.matrixWorldInverse)}if(r.skinning){f.setOptional(y,n,"bindMatrix"),f.setOptional(y,n,"bindMatrixInverse");var x=n.skeleton;if(x){var b=x.bones;if(w.floatVertexTextures){if(void 0===x.boneTexture){var M=Math.sqrt(4*b.length);M=s.ceilPowerOfTwo(M),M=Math.max(M,4);var E=new Float32Array(M*M*4);E.set(x.boneMatrices);var A=new je(E,M,M,1023,1015);A.needsUpdate=!0,x.boneMatrices=E,x.boneTexture=A,x.boneTextureSize=M}f.setValue(y,"boneTexture",x.boneTexture,T),f.setValue(y,"boneTextureSize",x.boneTextureSize)}else f.setOptional(y,x,"boneMatrices")}}return u&&(f.setValue(y,"toneMappingExposure",F.toneMappingExposure),f.setValue(y,"toneMappingWhitePoint",F.toneMappingWhitePoint),r.lights&&(l=p,(c=m).ambientLightColor.needsUpdate=l,c.lightProbe.needsUpdate=l,c.directionalLights.needsUpdate=l,c.pointLights.needsUpdate=l,c.spotLights.needsUpdate=l,c.rectAreaLights.needsUpdate=l,c.hemisphereLights.needsUpdate=l),e&&r.fog&&function(t,e){t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density)}(m,e),r.isMeshBasicMaterial?Et(m,r):r.isMeshLambertMaterial?(Et(m,r),function(t,e){e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap)}(m,r)):r.isMeshPhongMaterial?(Et(m,r),r.isMeshToonMaterial?function(t,e){At(t,e),e.gradientMap&&(t.gradientMap.value=e.gradientMap)}(m,r):At(m,r)):r.isMeshStandardMaterial?(Et(m,r),r.isMeshPhysicalMaterial?function(t,e){Lt(t,e),t.reflectivity.value=e.reflectivity,t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.sheen&&t.sheen.value.copy(e.sheen),e.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&t.clearcoatNormalScale.value.negate()),t.transparency.value=e.transparency}(m,r):Lt(m,r)):r.isMeshMatcapMaterial?(Et(m,r),function(t,e){e.matcap&&(t.matcap.value=e.matcap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(m,r)):r.isMeshDepthMaterial?(Et(m,r),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(m,r)):r.isMeshDistanceMaterial?(Et(m,r),function(t,e){e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias),t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance}(m,r)):r.isMeshNormalMaterial?(Et(m,r),function(t,e){e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}(m,r)):r.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity}(m,r),r.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}(m,r)):r.isPointsMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*tt,t.scale.value=.5*$,t.map.value=e.map,null!==e.map&&(!0===e.map.matrixAutoUpdate&&e.map.updateMatrix(),t.uvTransform.value.copy(e.map.matrix))}(m,r):r.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,t.map.value=e.map,null!==e.map&&(!0===e.map.matrixAutoUpdate&&e.map.updateMatrix(),t.uvTransform.value.copy(e.map.matrix))}(m,r):r.isShadowMaterial&&(m.color.value.copy(r.color),m.opacity.value=r.opacity),void 0!==m.ltc_1&&(m.ltc_1.value=Ke.LTC_1),void 0!==m.ltc_2&&(m.ltc_2.value=Ke.LTC_2),pn.upload(y,i.uniformsList,m,T)),r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(pn.upload(y,i.uniformsList,m,T),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&f.setValue(y,"center",n.center),f.setValue(y,"modelViewMatrix",n.modelViewMatrix),f.setValue(y,"normalMatrix",n.normalMatrix),f.setValue(y,"modelMatrix",n.matrixWorld),d}function Et(t,e){var r;t.opacity.value=e.opacity,e.color&&t.diffuse.value.copy(e.color),e.emissive&&t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),e.map&&(t.map.value=e.map),e.alphaMap&&(t.alphaMap.value=e.alphaMap),e.specularMap&&(t.specularMap.value=e.specularMap),e.envMap&&(t.envMap.value=e.envMap,t.flipEnvMap.value=e.envMap.isCubeTexture?-1:1,t.reflectivity.value=e.reflectivity,t.refractionRatio.value=e.refractionRatio,t.maxMipLevel.value=S.get(e.envMap).__maxMipLevel),e.lightMap&&(t.lightMap.value=e.lightMap,t.lightMapIntensity.value=e.lightMapIntensity),e.aoMap&&(t.aoMap.value=e.aoMap,t.aoMapIntensity.value=e.aoMapIntensity),e.map?r=e.map:e.specularMap?r=e.specularMap:e.displacementMap?r=e.displacementMap:e.normalMap?r=e.normalMap:e.bumpMap?r=e.bumpMap:e.roughnessMap?r=e.roughnessMap:e.metalnessMap?r=e.metalnessMap:e.alphaMap?r=e.alphaMap:e.emissiveMap&&(r=e.emissiveMap),void 0!==r&&(r.isWebGLRenderTarget&&(r=r.texture),!0===r.matrixAutoUpdate&&r.updateMatrix(),t.uvTransform.value.copy(r.matrix))}function At(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias)}function Lt(t,e){t.roughness.value=e.roughness,t.metalness.value=e.metalness,e.roughnessMap&&(t.roughnessMap.value=e.roughnessMap),e.metalnessMap&&(t.metalnessMap.value=e.metalnessMap),e.emissiveMap&&(t.emissiveMap.value=e.emissiveMap),e.bumpMap&&(t.bumpMap.value=e.bumpMap,t.bumpScale.value=e.bumpScale,1===e.side&&(t.bumpScale.value*=-1)),e.normalMap&&(t.normalMap.value=e.normalMap,t.normalScale.value.copy(e.normalScale),1===e.side&&t.normalScale.value.negate()),e.displacementMap&&(t.displacementMap.value=e.displacementMap,t.displacementScale.value=e.displacementScale,t.displacementBias.value=e.displacementBias),e.envMap&&(t.envMapIntensity.value=e.envMapIntensity)}bt.setAnimationLoop((function(t){dt.isPresenting()||xt&&xt(t)})),void 0!==a&&bt.setContext(a),this.setAnimationLoop=function(t){xt=t,dt.setAnimationLoop(t),bt.start()},this.render=function(t,e){var r,n;if(void 0!==arguments[2]&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),r=arguments[2]),void 0!==arguments[3]&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),n=arguments[3]),e&&e.isCamera){if(!G){q.geometry=null,q.program=null,q.wireframe=!1,W=-1,X=null,!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),dt.enabled&&(e=dt.getCamera(e)),(v=O.get(t,e)).init(),t.onBeforeRender(F,t,e,r||j),ct.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),it.setFromMatrix(ct),st=this.localClippingEnabled,ot=at.init(this.clippingPlanes,st,e),(g=C.get(t,e)).init(),wt(t,e,0,F.sortObjects),!0===F.sortObjects&&g.sort(),ot&&at.beginShadows();var i=v.state.shadowsArray;ft.render(i,t,e),v.setupLights(e),ot&&at.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==r&&this.setRenderTarget(r),D.render(g,t,e,n);var a=g.opaque,o=g.transparent;if(t.overrideMaterial){var s=t.overrideMaterial;a.length&&_t(a,t,e,s),o.length&&_t(o,t,e,s)}else a.length&&_t(a,t,e),o.length&&_t(o,t,e);t.onAfterRender(F,t,e),null!==j&&(T.updateRenderTargetMipmap(j),T.updateMultisampleRenderTarget(j)),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1),dt.enabled&&dt.submitFrame(),g=null,v=null}}else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")},this.setFramebuffer=function(t){U!==t&&y.bindFramebuffer(36160,t),U=t},this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTarget=function(t,e,r){j=t,H=e,V=r,t&&void 0===S.get(t).__webglFramebuffer&&T.setupRenderTarget(t);var n=U,i=!1;if(t){var a=S.get(t).__webglFramebuffer;t.isWebGLRenderTargetCube?(n=a[e||0],i=!0):n=t.isWebGLMultisampleRenderTarget?S.get(t).__webglMultisampledFramebuffer:a,J.copy(t.viewport),Z.copy(t.scissor),Q=t.scissorTest}else J.copy(et).multiplyScalar(tt).floor(),Z.copy(rt).multiplyScalar(tt).floor(),Q=nt;if(k!==n&&(y.bindFramebuffer(36160,n),k=n),_.viewport(J),_.scissor(Z),_.setScissorTest(Q),i){var o=S.get(t.texture);y.framebufferTexture2D(36160,36064,34069+(e||0),o.__webglTexture,r||0)}},this.readRenderTargetPixels=function(t,e,r,n,i,a,o){if(t&&t.isWebGLRenderTarget){var s=S.get(t).__webglFramebuffer;if(t.isWebGLRenderTargetCube&&void 0!==o&&(s=s[o]),s){var c=!1;s!==k&&(y.bindFramebuffer(36160,s),c=!0);try{var l=t.texture,h=l.format,u=l.type;if(1023!==h&&B.convert(h)!==y.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(1009===u||B.convert(u)===y.getParameter(35738)||1015===u&&(w.isWebGL2||b.get("OES_texture_float")||b.get("WEBGL_color_buffer_float"))||1016===u&&(w.isWebGL2?b.get("EXT_color_buffer_float"):b.get("EXT_color_buffer_half_float"))))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");36053===y.checkFramebufferStatus(36160)?e>=0&&e<=t.width-n&&r>=0&&r<=t.height-i&&y.readPixels(e,r,n,i,B.convert(h),B.convert(u),a):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{c&&y.bindFramebuffer(36160,k)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")},this.copyFramebufferToTexture=function(t,e,r){var n=e.image.width,i=e.image.height,a=B.convert(e.format);T.setTexture2D(e,0),y.copyTexImage2D(3553,r||0,a,t.x,t.y,n,i,0)},this.copyTextureToTexture=function(t,e,r,n){var i=e.image.width,a=e.image.height,o=B.convert(r.format),s=B.convert(r.type);T.setTexture2D(r,0),e.isDataTexture?y.texSubImage2D(3553,n||0,t.x,t.y,i,a,o,s,e.image.data):y.texSubImage2D(3553,n||0,t.x,t.y,o,s,e.image)},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Kn(t,e){this.name="",this.color=new Nt(t),this.density=void 0!==e?e:25e-5}function $n(t,e,r){this.name="",this.color=new Nt(t),this.near=void 0!==e?e:1,this.far=void 0!==r?r:1e3}function ti(t,e){this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0}function ei(t,e,r,n){this.data=t,this.itemSize=e,this.offset=r,this.normalized=!0===n}function ri(t){Ut.call(this),this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.rotation=0,this.sizeAttenuation=!0,this.lights=!1,this.transparent=!0,this.setValues(t)}Object.assign(Jn.prototype,e.prototype),Object.assign(Zn.prototype,e.prototype),Object.assign(Kn.prototype,{isFogExp2:!0,clone:function(){return new Kn(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}),Object.assign($n.prototype,{isFog:!0,clone:function(){return new $n(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}),Object.defineProperty(ti.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(ti.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(t){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");return this.count=void 0!==t?t.length/this.stride:0,this.array=t,this},setDynamic:function(t){return this.dynamic=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.dynamic=t.dynamic,this},copyAt:function(t,e,r){t*=this.stride,r*=e.stride;for(var n=0,i=this.stride;n<i;n++)this.array[t+n]=e.array[r+n];return this},set:function(t,e){return void 0===e&&(e=0),this.array.set(t,e),this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(t){return this.onUploadCallback=t,this}}),Object.defineProperties(ei.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}}),Object.assign(ei.prototype,{isInterleavedBufferAttribute:!0,setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=r,this},setXYZ:function(t,e,r,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=n,this},setXYZW:function(t,e,r,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=n,this.data.array[t+3]=i,this}}),ri.prototype=Object.create(Ut.prototype),ri.prototype.constructor=ri,ri.prototype.isSpriteMaterial=!0,ri.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};var ni=new d,ii=new d,ai=new d,oi=new l,si=new l,ci=new P,li=new d,hi=new d,ui=new d,pi=new l,di=new l,fi=new l;function mi(t){if(Y.call(this),this.type="Sprite",void 0===Wn){Wn=new se;var e=new ti(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Wn.setIndex([0,1,2,0,2,3]),Wn.addAttribute("position",new ei(e,3,0,!1)),Wn.addAttribute("uv",new ei(e,2,3,!1))}this.geometry=Wn,this.material=void 0!==t?t:new ri,this.center=new l(.5,.5)}function gi(t,e,r,n,i,a){oi.subVectors(t,r).addScalar(.5).multiply(n),void 0!==i?(si.x=a*oi.x-i*oi.y,si.y=i*oi.x+a*oi.y):si.copy(oi),t.copy(e),t.x+=si.x,t.y+=si.y,t.applyMatrix4(ci)}mi.prototype=Object.assign(Object.create(Y.prototype),{constructor:mi,isSprite:!0,raycast:function(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ii.setFromMatrixScale(this.matrixWorld),ci.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ii.multiplyScalar(-ai.z);var r,n,i=this.material.rotation;0!==i&&(n=Math.cos(i),r=Math.sin(i));var a=this.center;gi(li.set(-.5,-.5,0),ai,a,ii,r,n),gi(hi.set(.5,-.5,0),ai,a,ii,r,n),gi(ui.set(.5,.5,0),ai,a,ii,r,n),pi.set(0,0),di.set(1,0),fi.set(1,1);var o=t.ray.intersectTriangle(li,hi,ui,!1,ni);if(null!==o||(gi(hi.set(-.5,.5,0),ai,a,ii,r,n),di.set(0,1),null!==(o=t.ray.intersectTriangle(li,ui,hi,!1,ni)))){var s=t.ray.origin.distanceTo(ni);s<t.near||s>t.far||e.push({distance:s,point:ni.clone(),uv:Pt.getUV(ni,li,hi,ui,pi,di,fi,new l),face:null,object:this})}},clone:function(){return new this.constructor(this.material).copy(this)},copy:function(t){return Y.prototype.copy.call(this,t),void 0!==t.center&&this.center.copy(t.center),this}});var vi=new d,yi=new d;function xi(){Y.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}function bi(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Te.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new P,this.bindMatrixInverse=new P}xi.prototype=Object.assign(Object.create(Y.prototype),{constructor:xi,isLOD:!0,copy:function(t){Y.prototype.copy.call(this,t,!1);for(var e=t.levels,r=0,n=e.length;r<n;r++){var i=e[r];this.addLevel(i.object.clone(),i.distance)}return this},addLevel:function(t,e){void 0===e&&(e=0),e=Math.abs(e);for(var r=this.levels,n=0;n<r.length&&!(e<r[n].distance);n++);return r.splice(n,0,{distance:e,object:t}),this.add(t),this},getObjectForDistance:function(t){for(var e=this.levels,r=1,n=e.length;r<n&&!(t<e[r].distance);r++);return e[r-1].object},raycast:function(t,e){vi.setFromMatrixPosition(this.matrixWorld);var r=t.ray.origin.distanceTo(vi);this.getObjectForDistance(r).raycast(t,e)},update:function(t){var e=this.levels;if(e.length>1){vi.setFromMatrixPosition(t.matrixWorld),yi.setFromMatrixPosition(this.matrixWorld);var r=vi.distanceTo(yi);e[0].object.visible=!0;for(var n=1,i=e.length;n<i&&r>=e[n].distance;n++)e[n-1].object.visible=!1,e[n].object.visible=!0;for(;n<i;n++)e[n].object.visible=!1}},toJSON:function(t){var e=Y.prototype.toJSON.call(this,t);e.object.levels=[];for(var r=this.levels,n=0,i=r.length;n<i;n++){var a=r[n];e.object.levels.push({object:a.object.uuid,distance:a.distance})}return e}}),bi.prototype=Object.assign(Object.create(Te.prototype),{constructor:bi,isSkinnedMesh:!0,bind:function(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var t=new x,e=this.geometry.attributes.skinWeight,r=0,n=e.count;r<n;r++){t.x=e.getX(r),t.y=e.getY(r),t.z=e.getZ(r),t.w=e.getW(r);var i=1/t.manhattanLength();i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(r,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){Te.prototype.updateMatrixWorld.call(this,t),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});var wi=new P,_i=new P;function Mi(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(16*this.bones.length),void 0===e)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(var r=0,n=this.bones.length;r<n;r++)this.boneInverses.push(new P)}}function Si(){Y.call(this),this.type="Bone"}function Ti(t){Ut.call(this),this.type="LineBasicMaterial",this.color=new Nt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.lights=!1,this.setValues(t)}Object.assign(Mi.prototype,{calculateInverses:function(){this.boneInverses=[];for(var t=0,e=this.bones.length;t<e;t++){var r=new P;this.bones[t]&&r.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(r)}},pose:function(){var t,e,r;for(e=0,r=this.bones.length;e<r;e++)(t=this.bones[e])&&t.matrixWorld.getInverse(this.boneInverses[e]);for(e=0,r=this.bones.length;e<r;e++)(t=this.bones[e])&&(t.parent&&t.parent.isBone?(t.matrix.getInverse(t.parent.matrixWorld),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))},update:function(){for(var t=this.bones,e=this.boneInverses,r=this.boneMatrices,n=this.boneTexture,i=0,a=t.length;i<a;i++){var o=t[i]?t[i].matrixWorld:_i;wi.multiplyMatrices(o,e[i]),wi.toArray(r,16*i)}void 0!==n&&(n.needsUpdate=!0)},clone:function(){return new Mi(this.bones,this.boneInverses)},getBoneByName:function(t){for(var e=0,r=this.bones.length;e<r;e++){var n=this.bones[e];if(n.name===t)return n}}}),Si.prototype=Object.assign(Object.create(Y.prototype),{constructor:Si,isBone:!0}),Ti.prototype=Object.create(Ut.prototype),Ti.prototype.constructor=Ti,Ti.prototype.isLineBasicMaterial=!0,Ti.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this};var Ei=new d,Ai=new d,Li=new P,Ri=new xt,Pi=new ut;function Ci(t,e,r){1===r&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),Y.call(this),this.type="Line",this.geometry=void 0!==t?t:new se,this.material=void 0!==e?e:new Ti({color:16777215*Math.random()})}Ci.prototype=Object.assign(Object.create(Y.prototype),{constructor:Ci,isLine:!0,computeLineDistances:function(){var t=this.geometry;if(t.isBufferGeometry)if(null===t.index){for(var e=t.attributes.position,r=[0],n=1,i=e.count;n<i;n++)Ei.fromBufferAttribute(e,n-1),Ai.fromBufferAttribute(e,n),r[n]=r[n-1],r[n]+=Ei.distanceTo(Ai);t.addAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){var a=t.vertices;for((r=t.lineDistances)[0]=0,n=1,i=a.length;n<i;n++)r[n]=r[n-1],r[n]+=a[n-1].distanceTo(a[n])}return this},raycast:function(t,e){var r=t.linePrecision,n=this.geometry,i=this.matrixWorld;if(null===n.boundingSphere&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(i),Pi.radius+=r,!1!==t.ray.intersectsSphere(Pi)){Li.getInverse(i),Ri.copy(t.ray).applyMatrix4(Li);var a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,s=new d,c=new d,l=new d,h=new d,u=this&&this.isLineSegments?2:1;if(n.isBufferGeometry){var p=n.index,f=n.attributes.position.array;if(null!==p)for(var m=p.array,g=0,v=m.length-1;g<v;g+=u){var y=m[g],x=m[g+1];s.fromArray(f,3*y),c.fromArray(f,3*x),Ri.distanceSqToSegment(s,c,h,l)>o||(h.applyMatrix4(this.matrixWorld),(_=t.ray.origin.distanceTo(h))<t.near||_>t.far||e.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,v=f.length/3-1;g<v;g+=u)s.fromArray(f,3*g),c.fromArray(f,3*g+3),Ri.distanceSqToSegment(s,c,h,l)>o||(h.applyMatrix4(this.matrixWorld),(_=t.ray.origin.distanceTo(h))<t.near||_>t.far||e.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(n.isGeometry){var b=n.vertices,w=b.length;for(g=0;g<w-1;g+=u){var _;Ri.distanceSqToSegment(b[g],b[g+1],h,l)>o||(h.applyMatrix4(this.matrixWorld),(_=t.ray.origin.distanceTo(h))<t.near||_>t.far||e.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}});var Oi=new d,Di=new d;function Ni(t,e){Ci.call(this,t,e),this.type="LineSegments"}function Ii(t,e){Ci.call(this,t,e),this.type="LineLoop"}function zi(t){Ut.call(this),this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.lights=!1,this.setValues(t)}Ni.prototype=Object.assign(Object.create(Ci.prototype),{constructor:Ni,isLineSegments:!0,computeLineDistances:function(){var t=this.geometry;if(t.isBufferGeometry)if(null===t.index){for(var e=t.attributes.position,r=[],n=0,i=e.count;n<i;n+=2)Oi.fromBufferAttribute(e,n),Di.fromBufferAttribute(e,n+1),r[n]=0===n?0:r[n-1],r[n+1]=r[n]+Oi.distanceTo(Di);t.addAttribute("lineDistance",new Zt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){var a=t.vertices;for(r=t.lineDistances,n=0,i=a.length;n<i;n+=2)Oi.copy(a[n]),Di.copy(a[n+1]),r[n]=0===n?0:r[n-1],r[n+1]=r[n]+Oi.distanceTo(Di)}return this}}),Ii.prototype=Object.assign(Object.create(Ci.prototype),{constructor:Ii,isLineLoop:!0}),zi.prototype=Object.create(Ut.prototype),zi.prototype.constructor=zi,zi.prototype.isPointsMaterial=!0,zi.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};var Bi=new P,Fi=new xt,Gi=new ut,Ui=new d;function Hi(t,e){Y.call(this),this.type="Points",this.geometry=void 0!==t?t:new se,this.material=void 0!==e?e:new zi({color:16777215*Math.random()}),this.updateMorphTargets()}function Vi(t,e,r,n,i,a,o){var s=Fi.distanceSqToPoint(t);if(s<r){var c=new d;Fi.closestPointToPoint(t,c),c.applyMatrix4(n);var l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:o})}}function ji(t,e,r,n,i,a,o,s,c){y.call(this,t,e,r,n,i,a,o,s,c),this.format=void 0!==o?o:1022,this.minFilter=void 0!==a?a:1006,this.magFilter=void 0!==i?i:1006,this.generateMipmaps=!1}function ki(t,e,r,n,i,a,o,s,c,l,h,u){y.call(this,null,a,o,s,c,l,n,i,h,u),this.image={width:e,height:r},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}function Wi(t,e,r,n,i,a,o,s,c){y.call(this,t,e,r,n,i,a,o,s,c),this.needsUpdate=!0}function qi(t,e,r,n,i,a,o,s,c,l){if(1026!==(l=void 0!==l?l:1026)&&1027!==l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===r&&1026===l&&(r=1012),void 0===r&&1027===l&&(r=1020),y.call(this,null,n,i,a,o,s,l,r,c),this.image={width:t,height:e},this.magFilter=void 0!==o?o:1003,this.minFilter=void 0!==s?s:1003,this.flipY=!1,this.generateMipmaps=!1}function Xi(t){se.call(this),this.type="WireframeGeometry";var e,r,n,i,a,o,s,c,l,h,u=[],p=[0,0],f={},m=["a","b","c"];if(t&&t.isGeometry){var g=t.faces;for(e=0,n=g.length;e<n;e++){var v=g[e];for(r=0;r<3;r++)s=v[m[r]],c=v[m[(r+1)%3]],p[0]=Math.min(s,c),p[1]=Math.max(s,c),void 0===f[l=p[0]+","+p[1]]&&(f[l]={index1:p[0],index2:p[1]})}for(l in f)o=f[l],h=t.vertices[o.index1],u.push(h.x,h.y,h.z),h=t.vertices[o.index2],u.push(h.x,h.y,h.z)}else if(t&&t.isBufferGeometry){var y,x,b,w,_,M,S;if(h=new d,null!==t.index){for(y=t.attributes.position,x=t.index,0===(b=t.groups).length&&(b=[{start:0,count:x.count,materialIndex:0}]),i=0,a=b.length;i<a;++i)for(e=_=(w=b[i]).start,n=_+w.count;e<n;e+=3)for(r=0;r<3;r++)s=x.getX(e+r),c=x.getX(e+(r+1)%3),p[0]=Math.min(s,c),p[1]=Math.max(s,c),void 0===f[l=p[0]+","+p[1]]&&(f[l]={index1:p[0],index2:p[1]});for(l in f)o=f[l],h.fromBufferAttribute(y,o.index1),u.push(h.x,h.y,h.z),h.fromBufferAttribute(y,o.index2),u.push(h.x,h.y,h.z)}else for(e=0,n=(y=t.attributes.position).count/3;e<n;e++)for(r=0;r<3;r++)M=3*e+r,h.fromBufferAttribute(y,M),u.push(h.x,h.y,h.z),S=3*e+(r+1)%3,h.fromBufferAttribute(y,S),u.push(h.x,h.y,h.z)}this.addAttribute("position",new Zt(u,3))}function Yi(t,e,r){Oe.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:r},this.fromBufferGeometry(new Ji(t,e,r)),this.mergeVertices()}function Ji(t,e,r){se.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:r};var n,i,a=[],o=[],s=[],c=[],l=1e-5,h=new d,u=new d,p=new d,f=new d,m=new d;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var g=e+1;for(n=0;n<=r;n++){var v=n/r;for(i=0;i<=e;i++){var y=i/e;t(y,v,u),o.push(u.x,u.y,u.z),y-l>=0?(t(y-l,v,p),f.subVectors(u,p)):(t(y+l,v,p),f.subVectors(p,u)),v-l>=0?(t(y,v-l,p),m.subVectors(u,p)):(t(y,v+l,p),m.subVectors(p,u)),h.crossVectors(f,m).normalize(),s.push(h.x,h.y,h.z),c.push(y,v)}}for(n=0;n<r;n++)for(i=0;i<e;i++){var x=n*g+i,b=n*g+i+1,w=(n+1)*g+i+1,_=(n+1)*g+i;a.push(x,b,_),a.push(b,w,_)}this.setIndex(a),this.addAttribute("position",new Zt(o,3)),this.addAttribute("normal",new Zt(s,3)),this.addAttribute("uv",new Zt(c,2))}function Zi(t,e,r,n){Oe.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:r,detail:n},this.fromBufferGeometry(new Qi(t,e,r,n)),this.mergeVertices()}function Qi(t,e,r,n){se.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:e,radius:r,detail:n},r=r||1;var i=[],a=[];function o(t,e,r,n){var i,a,o=Math.pow(2,n),c=[];for(i=0;i<=o;i++){c[i]=[];var l=t.clone().lerp(r,i/o),h=e.clone().lerp(r,i/o),u=o-i;for(a=0;a<=u;a++)c[i][a]=0===a&&i===o?l:l.clone().lerp(h,a/u)}for(i=0;i<o;i++)for(a=0;a<2*(o-i)-1;a++){var p=Math.floor(a/2);a%2==0?(s(c[i][p+1]),s(c[i+1][p]),s(c[i][p])):(s(c[i][p+1]),s(c[i+1][p+1]),s(c[i+1][p]))}}function s(t){i.push(t.x,t.y,t.z)}function c(e,r){var n=3*e;r.x=t[n+0],r.y=t[n+1],r.z=t[n+2]}function h(t,e,r,n){n<0&&1===t.x&&(a[e]=t.x-1),0===r.x&&0===r.z&&(a[e]=n/2/Math.PI+.5)}function u(t){return Math.atan2(t.z,-t.x)}!function(t){for(var r=new d,n=new d,i=new d,a=0;a<e.length;a+=3)c(e[a+0],r),c(e[a+1],n),c(e[a+2],i),o(r,n,i,t)}(n=n||0),function(t){for(var e=new d,r=0;r<i.length;r+=3)e.x=i[r+0],e.y=i[r+1],e.z=i[r+2],e.normalize().multiplyScalar(t),i[r+0]=e.x,i[r+1]=e.y,i[r+2]=e.z}(r),function(){for(var t=new d,e=0;e<i.length;e+=3){t.x=i[e+0],t.y=i[e+1],t.z=i[e+2];var r=u(t)/2/Math.PI+.5,n=(o=t,Math.atan2(-o.y,Math.sqrt(o.x*o.x+o.z*o.z))/Math.PI+.5);a.push(r,1-n)}var o;(function(){for(var t=new d,e=new d,r=new d,n=new d,o=new l,s=new l,c=new l,p=0,f=0;p<i.length;p+=9,f+=6){t.set(i[p+0],i[p+1],i[p+2]),e.set(i[p+3],i[p+4],i[p+5]),r.set(i[p+6],i[p+7],i[p+8]),o.set(a[f+0],a[f+1]),s.set(a[f+2],a[f+3]),c.set(a[f+4],a[f+5]),n.copy(t).add(e).add(r).divideScalar(3);var m=u(n);h(o,f+0,t,m),h(s,f+2,e,m),h(c,f+4,r,m)}})(),function(){for(var t=0;t<a.length;t+=6){var e=a[t+0],r=a[t+2],n=a[t+4],i=Math.max(e,r,n),o=Math.min(e,r,n);i>.9&&o<.1&&(e<.2&&(a[t+0]+=1),r<.2&&(a[t+2]+=1),n<.2&&(a[t+4]+=1))}}()}(),this.addAttribute("position",new Zt(i,3)),this.addAttribute("normal",new Zt(i.slice(),3)),this.addAttribute("uv",new Zt(a,2)),0===n?this.computeVertexNormals():this.normalizeNormals()}function Ki(t,e){Oe.call(this),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new $i(t,e)),this.mergeVertices()}function $i(t,e){Qi.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronBufferGeometry",this.parameters={radius:t,detail:e}}function ta(t,e){Oe.call(this),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new ea(t,e)),this.mergeVertices()}function ea(t,e){Qi.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:e}}function ra(t,e){Oe.call(this),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new na(t,e)),this.mergeVertices()}function na(t,e){var r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1];Qi.call(this,n,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronBufferGeometry",this.parameters={radius:t,detail:e}}function ia(t,e){Oe.call(this),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e},this.fromBufferGeometry(new aa(t,e)),this.mergeVertices()}function aa(t,e){var r=(1+Math.sqrt(5))/2,n=1/r,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-r,0,-n,r,0,n,-r,0,n,r,-n,-r,0,-n,r,0,n,-r,0,n,r,0,-r,0,-n,r,0,-n,-r,0,n,r,0,n];Qi.call(this,i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronBufferGeometry",this.parameters={radius:t,detail:e}}function oa(t,e,r,n,i,a){Oe.call(this),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:r,radialSegments:n,closed:i},void 0!==a&&console.warn("THREE.TubeGeometry: taper has been removed.");var o=new sa(t,e,r,n,i);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals,this.fromBufferGeometry(o),this.mergeVertices()}function sa(t,e,r,n,i){se.call(this),this.type="TubeBufferGeometry",this.parameters={path:t,tubularSegments:e,radius:r,radialSegments:n,closed:i},e=e||64,r=r||1,n=n||8,i=i||!1;var a=t.computeFrenetFrames(e,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;var o,s,c=new d,h=new d,u=new l,p=new d,f=[],m=[],g=[],v=[];function y(i){p=t.getPointAt(i/e,p);var o=a.normals[i],l=a.binormals[i];for(s=0;s<=n;s++){var u=s/n*Math.PI*2,d=Math.sin(u),g=-Math.cos(u);h.x=g*o.x+d*l.x,h.y=g*o.y+d*l.y,h.z=g*o.z+d*l.z,h.normalize(),m.push(h.x,h.y,h.z),c.x=p.x+r*h.x,c.y=p.y+r*h.y,c.z=p.z+r*h.z,f.push(c.x,c.y,c.z)}}!function(){for(o=0;o<e;o++)y(o);y(!1===i?e:0),function(){for(o=0;o<=e;o++)for(s=0;s<=n;s++)u.x=o/e,u.y=s/n,g.push(u.x,u.y)}(),function(){for(s=1;s<=e;s++)for(o=1;o<=n;o++){var t=(n+1)*(s-1)+(o-1),r=(n+1)*s+(o-1),i=(n+1)*s+o,a=(n+1)*(s-1)+o;v.push(t,r,a),v.push(r,i,a)}}()}(),this.setIndex(v),this.addAttribute("position",new Zt(f,3)),this.addAttribute("normal",new Zt(m,3)),this.addAttribute("uv",new Zt(g,2))}function ca(t,e,r,n,i,a,o){Oe.call(this),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:r,radialSegments:n,p:i,q:a},void 0!==o&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new la(t,e,r,n,i,a)),this.mergeVertices()}function la(t,e,r,n,i,a){se.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:t,tube:e,tubularSegments:r,radialSegments:n,p:i,q:a},t=t||1,e=e||.4,r=Math.floor(r)||64,n=Math.floor(n)||8,i=i||2,a=a||3;var o,s,c=[],l=[],h=[],u=[],p=new d,f=new d,m=new d,g=new d,v=new d,y=new d,x=new d;for(o=0;o<=r;++o){var b=o/r*i*Math.PI*2;for(L(b,i,a,t,m),L(b+.01,i,a,t,g),y.subVectors(g,m),x.addVectors(g,m),v.crossVectors(y,x),x.crossVectors(v,y),v.normalize(),x.normalize(),s=0;s<=n;++s){var w=s/n*Math.PI*2,_=-e*Math.cos(w),M=e*Math.sin(w);p.x=m.x+(_*x.x+M*v.x),p.y=m.y+(_*x.y+M*v.y),p.z=m.z+(_*x.z+M*v.z),l.push(p.x,p.y,p.z),f.subVectors(p,m).normalize(),h.push(f.x,f.y,f.z),u.push(o/r),u.push(s/n)}}for(s=1;s<=r;s++)for(o=1;o<=n;o++){var S=(n+1)*(s-1)+(o-1),T=(n+1)*s+(o-1),E=(n+1)*s+o,A=(n+1)*(s-1)+o;c.push(S,T,A),c.push(T,E,A)}function L(t,e,r,n,i){var a=Math.cos(t),o=Math.sin(t),s=r/e*t,c=Math.cos(s);i.x=n*(2+c)*.5*a,i.y=n*(2+c)*o*.5,i.z=n*Math.sin(s)*.5}this.setIndex(c),this.addAttribute("position",new Zt(l,3)),this.addAttribute("normal",new Zt(h,3)),this.addAttribute("uv",new Zt(u,2))}function ha(t,e,r,n,i){Oe.call(this),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:r,tubularSegments:n,arc:i},this.fromBufferGeometry(new ua(t,e,r,n,i)),this.mergeVertices()}function ua(t,e,r,n,i){se.call(this),this.type="TorusBufferGeometry",this.parameters={radius:t,tube:e,radialSegments:r,tubularSegments:n,arc:i},t=t||1,e=e||.4,r=Math.floor(r)||8,n=Math.floor(n)||6,i=i||2*Math.PI;var a,o,s=[],c=[],l=[],h=[],u=new d,p=new d,f=new d;for(a=0;a<=r;a++)for(o=0;o<=n;o++){var m=o/n*i,g=a/r*Math.PI*2;p.x=(t+e*Math.cos(g))*Math.cos(m),p.y=(t+e*Math.cos(g))*Math.sin(m),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),u.x=t*Math.cos(m),u.y=t*Math.sin(m),f.subVectors(p,u).normalize(),l.push(f.x,f.y,f.z),h.push(o/n),h.push(a/r)}for(a=1;a<=r;a++)for(o=1;o<=n;o++){var v=(n+1)*a+o-1,y=(n+1)*(a-1)+o-1,x=(n+1)*(a-1)+o,b=(n+1)*a+o;s.push(v,y,b),s.push(y,x,b)}this.setIndex(s),this.addAttribute("position",new Zt(c,3)),this.addAttribute("normal",new Zt(l,3)),this.addAttribute("uv",new Zt(h,2))}Hi.prototype=Object.assign(Object.create(Y.prototype),{constructor:Hi,isPoints:!0,raycast:function(t,e){var r=this.geometry,n=this.matrixWorld,i=t.params.Points.threshold;if(null===r.boundingSphere&&r.computeBoundingSphere(),Gi.copy(r.boundingSphere),Gi.applyMatrix4(n),Gi.radius+=i,!1!==t.ray.intersectsSphere(Gi)){Bi.getInverse(n),Fi.copy(t.ray).applyMatrix4(Bi);var a=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(r.isBufferGeometry){var s=r.index,c=r.attributes.position.array;if(null!==s)for(var l=s.array,h=0,u=l.length;h<u;h++){var p=l[h];Ui.fromArray(c,3*p),Vi(Ui,p,o,n,t,e,this)}else{h=0;for(var d=c.length/3;h<d;h++)Ui.fromArray(c,3*h),Vi(Ui,h,o,n,t,e,this)}}else{var f=r.vertices;for(h=0,d=f.length;h<d;h++)Vi(f[h],h,o,n,t,e,this)}}},updateMorphTargets:function(){var t,e,r,n=this.geometry;if(n.isBufferGeometry){var i=n.morphAttributes,a=Object.keys(i);if(a.length>0){var o=i[a[0]];if(void 0!==o)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},t=0,e=o.length;t<e;t++)r=o[t].name||String(t),this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=t}}else{var s=n.morphTargets;void 0!==s&&s.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this)}}),ji.prototype=Object.assign(Object.create(y.prototype),{constructor:ji,isVideoTexture:!0,update:function(){var t=this.image;t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}),ki.prototype=Object.create(y.prototype),ki.prototype.constructor=ki,ki.prototype.isCompressedTexture=!0,Wi.prototype=Object.create(y.prototype),Wi.prototype.constructor=Wi,Wi.prototype.isCanvasTexture=!0,qi.prototype=Object.create(y.prototype),qi.prototype.constructor=qi,qi.prototype.isDepthTexture=!0,Xi.prototype=Object.create(se.prototype),Xi.prototype.constructor=Xi,Yi.prototype=Object.create(Oe.prototype),Yi.prototype.constructor=Yi,Ji.prototype=Object.create(se.prototype),Ji.prototype.constructor=Ji,Zi.prototype=Object.create(Oe.prototype),Zi.prototype.constructor=Zi,Qi.prototype=Object.create(se.prototype),Qi.prototype.constructor=Qi,Ki.prototype=Object.create(Oe.prototype),Ki.prototype.constructor=Ki,$i.prototype=Object.create(Qi.prototype),$i.prototype.constructor=$i,ta.prototype=Object.create(Oe.prototype),ta.prototype.constructor=ta,ea.prototype=Object.create(Qi.prototype),ea.prototype.constructor=ea,ra.prototype=Object.create(Oe.prototype),ra.prototype.constructor=ra,na.prototype=Object.create(Qi.prototype),na.prototype.constructor=na,ia.prototype=Object.create(Oe.prototype),ia.prototype.constructor=ia,aa.prototype=Object.create(Qi.prototype),aa.prototype.constructor=aa,oa.prototype=Object.create(Oe.prototype),oa.prototype.constructor=oa,sa.prototype=Object.create(se.prototype),sa.prototype.constructor=sa,sa.prototype.toJSON=function(){var t=se.prototype.toJSON.call(this);return t.path=this.parameters.path.toJSON(),t},ca.prototype=Object.create(Oe.prototype),ca.prototype.constructor=ca,la.prototype=Object.create(se.prototype),la.prototype.constructor=la,ha.prototype=Object.create(Oe.prototype),ha.prototype.constructor=ha,ua.prototype=Object.create(se.prototype),ua.prototype.constructor=ua;var pa=function(t,e,r){r=r||2;var n,i,a,o,s,c,l,h=e&&e.length,u=h?e[0]*r:t.length,p=da(t,0,u,r,!0),d=[];if(!p||p.next===p.prev)return d;if(h&&(p=function(t,e,r,n){var i,a,o,s,c,l=[];for(i=0,a=e.length;i<a;i++)o=e[i]*n,s=i<a-1?e[i+1]*n:t.length,(c=da(t,o,s,n,!1))===c.next&&(c.steiner=!0),l.push(Ma(c));for(l.sort(ba),i=0;i<l.length;i++)wa(l[i],r),r=fa(r,r.next);return r}(t,e,p,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var f=r;f<u;f+=r)(s=t[f])<n&&(n=s),(c=t[f+1])<i&&(i=c),s>a&&(a=s),c>o&&(o=c);l=0!==(l=Math.max(a-n,o-i))?1/l:0}return ma(p,d,r,n,i,l),d};function da(t,e,r,n,i){var a,o;if(i===function(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}(t,e,r,n)>0)for(a=e;a<r;a+=n)o=Ca(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=Ca(a,t[a],t[a+1],o);return o&&Aa(o,o.next)&&(Oa(o),o=o.next),o}function fa(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!Aa(n,n.next)&&0!==Ea(n.prev,n,n.next))n=n.next;else{if(Oa(n),(n=e=n.prev)===n.next)break;r=!0}}while(r||n!==e);return e}function ma(t,e,r,n,i,a,o){if(t){!o&&a&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=_a(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,a,o,s,c,l=1;do{for(r=t,t=null,a=null,o=0;r;){for(o++,n=r,s=0,e=0;e<l&&(s++,n=n.nextZ);e++);for(c=l;s>0||c>0&&n;)0!==s&&(0===c||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,c--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;r=n}a.nextZ=null,l*=2}while(o>1)}(i)}(t,n,i,a);for(var s,c,l=t;t.prev!==t.next;)if(s=t.prev,c=t.next,a?va(t,n,i,a):ga(t))e.push(s.i/r),e.push(t.i/r),e.push(c.i/r),Oa(t),t=c.next,l=c.next;else if((t=c)===l){o?1===o?ma(t=ya(t,e,r),e,r,n,i,a,2):2===o&&xa(t,e,r,n,i,a):ma(fa(t),e,r,n,i,a,1);break}}}function ga(t){var e=t.prev,r=t,n=t.next;if(Ea(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(Sa(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Ea(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function va(t,e,r,n){var i=t.prev,a=t,o=t.next;if(Ea(i,a,o)>=0)return!1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,c=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,h=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,u=_a(s,c,e,r,n),p=_a(l,h,e,r,n),d=t.prevZ,f=t.nextZ;d&&d.z>=u&&f&&f.z<=p;){if(d!==t.prev&&d!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,d.x,d.y)&&Ea(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,f!==t.prev&&f!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ea(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(;d&&d.z>=u;){if(d!==t.prev&&d!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,d.x,d.y)&&Ea(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;f&&f.z<=p;){if(f!==t.prev&&f!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ea(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function ya(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!Aa(i,a)&&La(i,n,n.next,a)&&Ra(i,a)&&Ra(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),Oa(n),Oa(n.next),n=t=a),n=n.next}while(n!==t);return n}function xa(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Ta(o,s)){var c=Pa(o,s);return o=fa(o,o.next),c=fa(c,c.next),ma(o,e,r,n,i,a),void ma(c,e,r,n,i,a)}s=s.next}o=o.next}while(o!==t)}function ba(t,e){return t.x-e.x}function wa(t,e){if(e=function(t,e){var r,n=e,i=t.x,a=t.y,o=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var s=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=i&&s>o){if(o=s,s===i){if(a===n.y)return n;if(a===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===o)return r.prev;var c,l=r,h=r.x,u=r.y,p=1/0;for(n=r.next;n!==l;)i>=n.x&&n.x>=h&&i!==n.x&&Sa(a<u?i:o,a,h,u,a<u?o:i,a,n.x,n.y)&&((c=Math.abs(a-n.y)/(i-n.x))<p||c===p&&n.x>r.x)&&Ra(n,t)&&(r=n,p=c),n=n.next;return r}(t,e)){var r=Pa(e,t);fa(r,r.next)}}function _a(t,e,r,n,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ma(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t);return r}function Sa(t,e,r,n,i,a,o,s){return(i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function Ta(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&La(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}(t,e)&&Ra(t,e)&&Ra(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,a=(t.y+e.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==t);return n}(t,e)}function Ea(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Aa(t,e){return t.x===e.x&&t.y===e.y}function La(t,e,r,n){return!!(Aa(t,r)&&Aa(e,n)||Aa(t,n)&&Aa(r,e))||Ea(t,e,r)>0!=Ea(t,e,n)>0&&Ea(r,n,t)>0!=Ea(r,n,e)>0}function Ra(t,e){return Ea(t.prev,t,t.next)<0?Ea(t,e,t.next)>=0&&Ea(t,t.prev,e)>=0:Ea(t,e,t.prev)<0||Ea(t,t.next,e)<0}function Pa(t,e){var r=new Da(t.i,t.x,t.y),n=new Da(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function Ca(t,e,r,n){var i=new Da(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Da(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Na={area:function(t){for(var e=t.length,r=0,n=e-1,i=0;i<e;n=i++)r+=t[n].x*t[i].y-t[i].x*t[n].y;return.5*r},isClockWise:function(t){return Na.area(t)<0},triangulateShape:function(t,e){var r=[],n=[],i=[];Ia(t),za(r,t);var a=t.length;e.forEach(Ia);for(var o=0;o<e.length;o++)n.push(a),a+=e[o].length,za(r,e[o]);var s=pa(r,n);for(o=0;o<s.length;o+=3)i.push(s.slice(o,o+3));return i}};function Ia(t){var e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function za(t,e){for(var r=0;r<e.length;r++)t.push(e[r].x),t.push(e[r].y)}function Ba(t,e){Oe.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},this.fromBufferGeometry(new Fa(t,e)),this.mergeVertices()}function Fa(t,e){se.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];for(var r=this,n=[],i=[],a=0,o=t.length;a<o;a++)s(t[a]);function s(t){var a=[],o=void 0!==e.curveSegments?e.curveSegments:12,s=void 0!==e.steps?e.steps:1,c=void 0!==e.depth?e.depth:100,h=void 0===e.bevelEnabled||e.bevelEnabled,u=void 0!==e.bevelThickness?e.bevelThickness:6,p=void 0!==e.bevelSize?e.bevelSize:u-2,f=void 0!==e.bevelOffset?e.bevelOffset:0,m=void 0!==e.bevelSegments?e.bevelSegments:3,g=e.extrudePath,v=void 0!==e.UVGenerator?e.UVGenerator:Ga;void 0!==e.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),c=e.amount);var y,x,b,w,_,M,S,T,E=!1;g&&(y=g.getSpacedPoints(s),E=!0,h=!1,x=g.computeFrenetFrames(s,!1),b=new d,w=new d,_=new d),h||(m=0,u=0,p=0,f=0);var A=t.extractPoints(o),L=A.shape,R=A.holes;if(!Na.isClockWise(L))for(L=L.reverse(),S=0,T=R.length;S<T;S++)M=R[S],Na.isClockWise(M)&&(R[S]=M.reverse());var P=Na.triangulateShape(L,R),C=L;for(S=0,T=R.length;S<T;S++)M=R[S],L=L.concat(M);function O(t,e,r){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().multiplyScalar(r).add(t)}var D,N,I,z,B,F,G=L.length,U=P.length;function H(t,e,r){var n,i,a,o=t.x-e.x,s=t.y-e.y,c=r.x-t.x,h=r.y-t.y,u=o*o+s*s,p=o*h-s*c;if(Math.abs(p)>Number.EPSILON){var d=Math.sqrt(u),f=Math.sqrt(c*c+h*h),m=e.x-s/d,g=e.y+o/d,v=((r.x-h/f-m)*h-(r.y+c/f-g)*c)/(o*h-s*c),y=(n=m+o*v-t.x)*n+(i=g+s*v-t.y)*i;if(y<=2)return new l(n,i);a=Math.sqrt(y/2)}else{var x=!1;o>Number.EPSILON?c>Number.EPSILON&&(x=!0):o<-Number.EPSILON?c<-Number.EPSILON&&(x=!0):Math.sign(s)===Math.sign(h)&&(x=!0),x?(n=-s,i=o,a=Math.sqrt(u)):(n=o,i=s,a=Math.sqrt(u/2))}return new l(n/a,i/a)}for(var V=[],j=0,k=C.length,W=k-1,q=j+1;j<k;j++,W++,q++)W===k&&(W=0),q===k&&(q=0),V[j]=H(C[j],C[W],C[q]);var X,Y,J=[],Z=V.concat();for(S=0,T=R.length;S<T;S++){for(M=R[S],X=[],j=0,W=(k=M.length)-1,q=j+1;j<k;j++,W++,q++)W===k&&(W=0),q===k&&(q=0),X[j]=H(M[j],M[W],M[q]);J.push(X),Z=Z.concat(X)}for(D=0;D<m;D++){for(I=D/m,z=u*Math.cos(I*Math.PI/2),N=p*Math.sin(I*Math.PI/2)+f,j=0,k=C.length;j<k;j++)K((B=O(C[j],V[j],N)).x,B.y,-z);for(S=0,T=R.length;S<T;S++)for(M=R[S],X=J[S],j=0,k=M.length;j<k;j++)K((B=O(M[j],X[j],N)).x,B.y,-z)}for(N=p+f,j=0;j<G;j++)B=h?O(L[j],Z[j],N):L[j],E?(w.copy(x.normals[0]).multiplyScalar(B.x),b.copy(x.binormals[0]).multiplyScalar(B.y),_.copy(y[0]).add(w).add(b),K(_.x,_.y,_.z)):K(B.x,B.y,0);for(Y=1;Y<=s;Y++)for(j=0;j<G;j++)B=h?O(L[j],Z[j],N):L[j],E?(w.copy(x.normals[Y]).multiplyScalar(B.x),b.copy(x.binormals[Y]).multiplyScalar(B.y),_.copy(y[Y]).add(w).add(b),K(_.x,_.y,_.z)):K(B.x,B.y,c/s*Y);for(D=m-1;D>=0;D--){for(I=D/m,z=u*Math.cos(I*Math.PI/2),N=p*Math.sin(I*Math.PI/2)+f,j=0,k=C.length;j<k;j++)K((B=O(C[j],V[j],N)).x,B.y,c+z);for(S=0,T=R.length;S<T;S++)for(M=R[S],X=J[S],j=0,k=M.length;j<k;j++)B=O(M[j],X[j],N),E?K(B.x,B.y+y[s-1].y,y[s-1].x+z):K(B.x,B.y,c+z)}function Q(t,e){var r,n;for(j=t.length;--j>=0;){r=j,(n=j-1)<0&&(n=t.length-1);var i=0,a=s+2*m;for(i=0;i<a;i++){var o=G*i,c=G*(i+1);tt(e+r+o,e+n+o,e+n+c,e+r+c)}}}function K(t,e,r){a.push(t),a.push(e),a.push(r)}function $(t,e,i){et(t),et(e),et(i);var a=n.length/3,o=v.generateTopUV(r,n,a-3,a-2,a-1);rt(o[0]),rt(o[1]),rt(o[2])}function tt(t,e,i,a){et(t),et(e),et(a),et(e),et(i),et(a);var o=n.length/3,s=v.generateSideWallUV(r,n,o-6,o-3,o-2,o-1);rt(s[0]),rt(s[1]),rt(s[3]),rt(s[1]),rt(s[2]),rt(s[3])}function et(t){n.push(a[3*t+0]),n.push(a[3*t+1]),n.push(a[3*t+2])}function rt(t){i.push(t.x),i.push(t.y)}!function(){var t=n.length/3;if(h){var e=0,i=G*e;for(j=0;j<U;j++)$((F=P[j])[2]+i,F[1]+i,F[0]+i);for(i=G*(e=s+2*m),j=0;j<U;j++)$((F=P[j])[0]+i,F[1]+i,F[2]+i)}else{for(j=0;j<U;j++)$((F=P[j])[2],F[1],F[0]);for(j=0;j<U;j++)$((F=P[j])[0]+G*s,F[1]+G*s,F[2]+G*s)}r.addGroup(t,n.length/3-t,0)}(),function(){var t=n.length/3,e=0;for(Q(C,e),e+=C.length,S=0,T=R.length;S<T;S++)Q(M=R[S],e),e+=M.length;r.addGroup(t,n.length/3-t,1)}()}this.addAttribute("position",new Zt(n,3)),this.addAttribute("uv",new Zt(i,2)),this.computeVertexNormals()}Ba.prototype=Object.create(Oe.prototype),Ba.prototype.constructor=Ba,Ba.prototype.toJSON=function(){var t=Oe.prototype.toJSON.call(this);return Ua(this.parameters.shapes,this.parameters.options,t)},Fa.prototype=Object.create(se.prototype),Fa.prototype.constructor=Fa,Fa.prototype.toJSON=function(){var t=se.prototype.toJSON.call(this);return Ua(this.parameters.shapes,this.parameters.options,t)};var Ga={generateTopUV:function(t,e,r,n,i){var a=e[3*r],o=e[3*r+1],s=e[3*n],c=e[3*n+1],h=e[3*i],u=e[3*i+1];return[new l(a,o),new l(s,c),new l(h,u)]},generateSideWallUV:function(t,e,r,n,i,a){var o=e[3*r],s=e[3*r+1],c=e[3*r+2],h=e[3*n],u=e[3*n+1],p=e[3*n+2],d=e[3*i],f=e[3*i+1],m=e[3*i+2],g=e[3*a],v=e[3*a+1],y=e[3*a+2];return Math.abs(s-u)<.01?[new l(o,1-c),new l(h,1-p),new l(d,1-m),new l(g,1-y)]:[new l(s,1-c),new l(u,1-p),new l(f,1-m),new l(v,1-y)]}};function Ua(t,e,r){if(r.shapes=[],Array.isArray(t))for(var n=0,i=t.length;n<i;n++){var a=t[n];r.shapes.push(a.uuid)}else r.shapes.push(t.uuid);return void 0!==e.extrudePath&&(r.options.extrudePath=e.extrudePath.toJSON()),r}function Ha(t,e){Oe.call(this),this.type="TextGeometry",this.parameters={text:t,parameters:e},this.fromBufferGeometry(new Va(t,e)),this.mergeVertices()}function Va(t,e){var r=(e=e||{}).font;if(!r||!r.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Oe;var n=r.generateShapes(t,e.size);e.depth=void 0!==e.height?e.height:50,void 0===e.bevelThickness&&(e.bevelThickness=10),void 0===e.bevelSize&&(e.bevelSize=8),void 0===e.bevelEnabled&&(e.bevelEnabled=!1),Fa.call(this,n,e),this.type="TextBufferGeometry"}function ja(t,e,r,n,i,a,o){Oe.call(this),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},this.fromBufferGeometry(new ka(t,e,r,n,i,a,o)),this.mergeVertices()}function ka(t,e,r,n,i,a,o){se.call(this),this.type="SphereBufferGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=t||1,e=Math.max(3,Math.floor(e)||8),r=Math.max(2,Math.floor(r)||6),n=void 0!==n?n:0,i=void 0!==i?i:2*Math.PI,a=void 0!==a?a:0,o=void 0!==o?o:Math.PI;var s,c,l=Math.min(a+o,Math.PI),h=0,u=[],p=new d,f=new d,m=[],g=[],v=[],y=[];for(c=0;c<=r;c++){var x=[],b=c/r,w=0;for(0==c&&0==a?w=.5/e:c==r&&l==Math.PI&&(w=-.5/e),s=0;s<=e;s++){var _=s/e;p.x=-t*Math.cos(n+_*i)*Math.sin(a+b*o),p.y=t*Math.cos(a+b*o),p.z=t*Math.sin(n+_*i)*Math.sin(a+b*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),v.push(f.x,f.y,f.z),y.push(_+w,1-b),x.push(h++)}u.push(x)}for(c=0;c<r;c++)for(s=0;s<e;s++){var M=u[c][s+1],S=u[c][s],T=u[c+1][s],E=u[c+1][s+1];(0!==c||a>0)&&m.push(M,S,E),(c!==r-1||l<Math.PI)&&m.push(S,T,E)}this.setIndex(m),this.addAttribute("position",new Zt(g,3)),this.addAttribute("normal",new Zt(v,3)),this.addAttribute("uv",new Zt(y,2))}function Wa(t,e,r,n,i,a){Oe.call(this),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:r,phiSegments:n,thetaStart:i,thetaLength:a},this.fromBufferGeometry(new qa(t,e,r,n,i,a)),this.mergeVertices()}function qa(t,e,r,n,i,a){se.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:r,phiSegments:n,thetaStart:i,thetaLength:a},t=t||.5,e=e||1,i=void 0!==i?i:0,a=void 0!==a?a:2*Math.PI,r=void 0!==r?Math.max(3,r):8;var o,s,c,h=[],u=[],p=[],f=[],m=t,g=(e-t)/(n=void 0!==n?Math.max(1,n):1),v=new d,y=new l;for(s=0;s<=n;s++){for(c=0;c<=r;c++)o=i+c/r*a,v.x=m*Math.cos(o),v.y=m*Math.sin(o),u.push(v.x,v.y,v.z),p.push(0,0,1),y.x=(v.x/e+1)/2,y.y=(v.y/e+1)/2,f.push(y.x,y.y);m+=g}for(s=0;s<n;s++){var x=s*(r+1);for(c=0;c<r;c++){var b=o=c+x,w=o+r+1,_=o+r+2,M=o+1;h.push(b,w,M),h.push(w,_,M)}}this.setIndex(h),this.addAttribute("position",new Zt(u,3)),this.addAttribute("normal",new Zt(p,3)),this.addAttribute("uv",new Zt(f,2))}function Xa(t,e,r,n){Oe.call(this),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:r,phiLength:n},this.fromBufferGeometry(new Ya(t,e,r,n)),this.mergeVertices()}function Ya(t,e,r,n){se.call(this),this.type="LatheBufferGeometry",this.parameters={points:t,segments:e,phiStart:r,phiLength:n},e=Math.floor(e)||12,r=r||0,n=n||2*Math.PI,n=s.clamp(n,0,2*Math.PI);var i,a,o,c=[],h=[],u=[],p=1/e,f=new d,m=new l;for(a=0;a<=e;a++){var g=r+a*p*n,v=Math.sin(g),y=Math.cos(g);for(o=0;o<=t.length-1;o++)f.x=t[o].x*v,f.y=t[o].y,f.z=t[o].x*y,h.push(f.x,f.y,f.z),m.x=a/e,m.y=o/(t.length-1),u.push(m.x,m.y)}for(a=0;a<e;a++)for(o=0;o<t.length-1;o++){var x=i=o+a*t.length,b=i+t.length,w=i+t.length+1,_=i+1;c.push(x,b,_),c.push(b,w,_)}if(this.setIndex(c),this.addAttribute("position",new Zt(h,3)),this.addAttribute("uv",new Zt(u,2)),this.computeVertexNormals(),n===2*Math.PI){var M=this.attributes.normal.array,S=new d,T=new d,E=new d;for(i=e*t.length*3,a=0,o=0;a<t.length;a++,o+=3)S.x=M[o+0],S.y=M[o+1],S.z=M[o+2],T.x=M[i+o+0],T.y=M[i+o+1],T.z=M[i+o+2],E.addVectors(S,T).normalize(),M[o+0]=M[i+o+0]=E.x,M[o+1]=M[i+o+1]=E.y,M[o+2]=M[i+o+2]=E.z}}function Ja(t,e){Oe.call(this),this.type="ShapeGeometry","object"===R(e)&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),e=e.curveSegments),this.parameters={shapes:t,curveSegments:e},this.fromBufferGeometry(new Za(t,e)),this.mergeVertices()}function Za(t,e){se.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:t,curveSegments:e},e=e||12;var r=[],n=[],i=[],a=[],o=0,s=0;if(!1===Array.isArray(t))l(t);else for(var c=0;c<t.length;c++)l(t[c]),this.addGroup(o,s,c),o+=s,s=0;function l(t){var o,c,l,h=n.length/3,u=t.extractPoints(e),p=u.shape,d=u.holes;for(!1===Na.isClockWise(p)&&(p=p.reverse()),o=0,c=d.length;o<c;o++)l=d[o],!0===Na.isClockWise(l)&&(d[o]=l.reverse());var f=Na.triangulateShape(p,d);for(o=0,c=d.length;o<c;o++)l=d[o],p=p.concat(l);for(o=0,c=p.length;o<c;o++){var m=p[o];n.push(m.x,m.y,0),i.push(0,0,1),a.push(m.x,m.y)}for(o=0,c=f.length;o<c;o++){var g=f[o],v=g[0]+h,y=g[1]+h,x=g[2]+h;r.push(v,y,x),s+=3}}this.setIndex(r),this.addAttribute("position",new Zt(n,3)),this.addAttribute("normal",new Zt(i,3)),this.addAttribute("uv",new Zt(a,2))}function Qa(t,e){if(e.shapes=[],Array.isArray(t))for(var r=0,n=t.length;r<n;r++){var i=t[r];e.shapes.push(i.uuid)}else e.shapes.push(t.uuid);return e}function Ka(t,e){se.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:e},e=void 0!==e?e:1;var r,n,i,a,o=[],c=Math.cos(s.DEG2RAD*e),l=[0,0],h={},u=["a","b","c"];t.isBufferGeometry?(a=new Oe).fromBufferGeometry(t):a=t.clone(),a.mergeVertices(),a.computeFaceNormals();for(var p=a.vertices,d=a.faces,f=0,m=d.length;f<m;f++)for(var g=d[f],v=0;v<3;v++)r=g[u[v]],n=g[u[(v+1)%3]],l[0]=Math.min(r,n),l[1]=Math.max(r,n),void 0===h[i=l[0]+","+l[1]]?h[i]={index1:l[0],index2:l[1],face1:f,face2:void 0}:h[i].face2=f;for(i in h){var y=h[i];if(void 0===y.face2||d[y.face1].normal.dot(d[y.face2].normal)<=c){var x=p[y.index1];o.push(x.x,x.y,x.z),x=p[y.index2],o.push(x.x,x.y,x.z)}}this.addAttribute("position",new Zt(o,3))}function $a(t,e,r,n,i,a,o,s){Oe.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s},this.fromBufferGeometry(new to(t,e,r,n,i,a,o,s)),this.mergeVertices()}function to(t,e,r,n,i,a,o,s){se.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};var c=this;t=void 0!==t?t:1,e=void 0!==e?e:1,r=r||1,n=Math.floor(n)||8,i=Math.floor(i)||1,a=void 0!==a&&a,o=void 0!==o?o:0,s=void 0!==s?s:2*Math.PI;var h=[],u=[],p=[],f=[],m=0,g=[],v=r/2,y=0;function x(r){var i,a,g,x=new l,b=new d,w=0,_=!0===r?t:e,M=!0===r?1:-1;for(a=m,i=1;i<=n;i++)u.push(0,v*M,0),p.push(0,M,0),f.push(.5,.5),m++;for(g=m,i=0;i<=n;i++){var S=i/n*s+o,T=Math.cos(S),E=Math.sin(S);b.x=_*E,b.y=v*M,b.z=_*T,u.push(b.x,b.y,b.z),p.push(0,M,0),x.x=.5*T+.5,x.y=.5*E*M+.5,f.push(x.x,x.y),m++}for(i=0;i<n;i++){var A=a+i,L=g+i;!0===r?h.push(L,L+1,A):h.push(L+1,L,A),w+=3}c.addGroup(y,w,!0===r?1:2),y+=w}!function(){var a,l,x=new d,b=new d,w=0,_=(e-t)/r;for(l=0;l<=i;l++){var M=[],S=l/i,T=S*(e-t)+t;for(a=0;a<=n;a++){var E=a/n,A=E*s+o,L=Math.sin(A),R=Math.cos(A);b.x=T*L,b.y=-S*r+v,b.z=T*R,u.push(b.x,b.y,b.z),x.set(L,_,R).normalize(),p.push(x.x,x.y,x.z),f.push(E,1-S),M.push(m++)}g.push(M)}for(a=0;a<n;a++)for(l=0;l<i;l++){var P=g[l][a],C=g[l+1][a],O=g[l+1][a+1],D=g[l][a+1];h.push(P,C,D),h.push(C,O,D),w+=6}c.addGroup(y,w,0),y+=w}(),!1===a&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.addAttribute("position",new Zt(u,3)),this.addAttribute("normal",new Zt(p,3)),this.addAttribute("uv",new Zt(f,2))}function eo(t,e,r,n,i,a,o){$a.call(this,0,t,e,r,n,i,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:r,heightSegments:n,openEnded:i,thetaStart:a,thetaLength:o}}function ro(t,e,r,n,i,a,o){to.call(this,0,t,e,r,n,i,a,o),this.type="ConeBufferGeometry",this.parameters={radius:t,height:e,radialSegments:r,heightSegments:n,openEnded:i,thetaStart:a,thetaLength:o}}function no(t,e,r,n){Oe.call(this),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:r,thetaLength:n},this.fromBufferGeometry(new io(t,e,r,n)),this.mergeVertices()}function io(t,e,r,n){se.call(this),this.type="CircleBufferGeometry",this.parameters={radius:t,segments:e,thetaStart:r,thetaLength:n},t=t||1,e=void 0!==e?Math.max(3,e):8,r=void 0!==r?r:0,n=void 0!==n?n:2*Math.PI;var i,a,o=[],s=[],c=[],h=[],u=new d,p=new l;for(s.push(0,0,0),c.push(0,0,1),h.push(.5,.5),a=0,i=3;a<=e;a++,i+=3){var f=r+a/e*n;u.x=t*Math.cos(f),u.y=t*Math.sin(f),s.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(s[i]/t+1)/2,p.y=(s[i+1]/t+1)/2,h.push(p.x,p.y)}for(i=1;i<=e;i++)o.push(i,i+1,0);this.setIndex(o),this.addAttribute("position",new Zt(s,3)),this.addAttribute("normal",new Zt(c,3)),this.addAttribute("uv",new Zt(h,2))}Ha.prototype=Object.create(Oe.prototype),Ha.prototype.constructor=Ha,Va.prototype=Object.create(Fa.prototype),Va.prototype.constructor=Va,ja.prototype=Object.create(Oe.prototype),ja.prototype.constructor=ja,ka.prototype=Object.create(se.prototype),ka.prototype.constructor=ka,Wa.prototype=Object.create(Oe.prototype),Wa.prototype.constructor=Wa,qa.prototype=Object.create(se.prototype),qa.prototype.constructor=qa,Xa.prototype=Object.create(Oe.prototype),Xa.prototype.constructor=Xa,Ya.prototype=Object.create(se.prototype),Ya.prototype.constructor=Ya,Ja.prototype=Object.create(Oe.prototype),Ja.prototype.constructor=Ja,Ja.prototype.toJSON=function(){var t=Oe.prototype.toJSON.call(this);return Qa(this.parameters.shapes,t)},Za.prototype=Object.create(se.prototype),Za.prototype.constructor=Za,Za.prototype.toJSON=function(){var t=se.prototype.toJSON.call(this);return Qa(this.parameters.shapes,t)},Ka.prototype=Object.create(se.prototype),Ka.prototype.constructor=Ka,$a.prototype=Object.create(Oe.prototype),$a.prototype.constructor=$a,to.prototype=Object.create(se.prototype),to.prototype.constructor=to,eo.prototype=Object.create($a.prototype),eo.prototype.constructor=eo,ro.prototype=Object.create(to.prototype),ro.prototype.constructor=ro,no.prototype=Object.create(Oe.prototype),no.prototype.constructor=no,io.prototype=Object.create(se.prototype),io.prototype.constructor=io;var ao=Object.freeze({WireframeGeometry:Xi,ParametricGeometry:Yi,ParametricBufferGeometry:Ji,TetrahedronGeometry:Ki,TetrahedronBufferGeometry:$i,OctahedronGeometry:ta,OctahedronBufferGeometry:ea,IcosahedronGeometry:ra,IcosahedronBufferGeometry:na,DodecahedronGeometry:ia,DodecahedronBufferGeometry:aa,PolyhedronGeometry:Zi,PolyhedronBufferGeometry:Qi,TubeGeometry:oa,TubeBufferGeometry:sa,TorusKnotGeometry:ca,TorusKnotBufferGeometry:la,TorusGeometry:ha,TorusBufferGeometry:ua,TextGeometry:Ha,TextBufferGeometry:Va,SphereGeometry:ja,SphereBufferGeometry:ka,RingGeometry:Wa,RingBufferGeometry:qa,PlaneGeometry:rr,PlaneBufferGeometry:nr,LatheGeometry:Xa,LatheBufferGeometry:Ya,ShapeGeometry:Ja,ShapeBufferGeometry:Za,ExtrudeGeometry:Ba,ExtrudeBufferGeometry:Fa,EdgesGeometry:Ka,ConeGeometry:eo,ConeBufferGeometry:ro,CylinderGeometry:$a,CylinderBufferGeometry:to,CircleGeometry:no,CircleBufferGeometry:io,BoxGeometry:De,BoxBufferGeometry:Ne});function oo(t){Ut.call(this),this.type="ShadowMaterial",this.color=new Nt(0),this.transparent=!0,this.setValues(t)}function so(t){Fe.call(this,t),this.type="RawShaderMaterial"}function co(t){Ut.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function lo(t){co.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,this.clearcoat=0,this.clearcoatRoughness=0,this.sheen=null,this.clearcoatNormalScale=new l(1,1),this.clearcoatNormalMap=null,this.transparency=0,this.setValues(t)}function ho(t){Ut.call(this),this.type="MeshPhongMaterial",this.color=new Nt(16777215),this.specular=new Nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function uo(t){ho.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.gradientMap=null,this.setValues(t)}function po(t){Ut.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function fo(t){Ut.call(this),this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}function mo(t){Ut.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Nt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new l(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.lights=!1,this.setValues(t)}function go(t){Ti.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}oo.prototype=Object.create(Ut.prototype),oo.prototype.constructor=oo,oo.prototype.isShadowMaterial=!0,oo.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this},so.prototype=Object.create(Fe.prototype),so.prototype.constructor=so,so.prototype.isRawShaderMaterial=!0,co.prototype=Object.create(Ut.prototype),co.prototype.constructor=co,co.prototype.isMeshStandardMaterial=!0,co.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},lo.prototype=Object.create(co.prototype),lo.prototype.constructor=lo,lo.prototype.isMeshPhysicalMaterial=!0,lo.prototype.copy=function(t){return co.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.reflectivity=t.reflectivity,this.clearcoat=t.clearcoat,this.clearcoatRoughness=t.clearcoatRoughness,t.sheen?this.sheen=(this.sheen||new Nt).copy(t.sheen):this.sheen=null,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.transparency=t.transparency,this},ho.prototype=Object.create(Ut.prototype),ho.prototype.constructor=ho,ho.prototype.isMeshPhongMaterial=!0,ho.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},uo.prototype=Object.create(ho.prototype),uo.prototype.constructor=uo,uo.prototype.isMeshToonMaterial=!0,uo.prototype.copy=function(t){return ho.prototype.copy.call(this,t),this.gradientMap=t.gradientMap,this},po.prototype=Object.create(Ut.prototype),po.prototype.constructor=po,po.prototype.isMeshNormalMaterial=!0,po.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},fo.prototype=Object.create(Ut.prototype),fo.prototype.constructor=fo,fo.prototype.isMeshLambertMaterial=!0,fo.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},mo.prototype=Object.create(Ut.prototype),mo.prototype.constructor=mo,mo.prototype.isMeshMatcapMaterial=!0,mo.prototype.copy=function(t){return Ut.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this},go.prototype=Object.create(Ti.prototype),go.prototype.constructor=go,go.prototype.isLineDashedMaterial=!0,go.prototype.copy=function(t){return Ti.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var vo=Object.freeze({ShadowMaterial:oo,SpriteMaterial:ri,RawShaderMaterial:so,ShaderMaterial:Fe,PointsMaterial:zi,MeshPhysicalMaterial:lo,MeshStandardMaterial:co,MeshPhongMaterial:ho,MeshToonMaterial:uo,MeshNormalMaterial:po,MeshLambertMaterial:fo,MeshDepthMaterial:Bn,MeshDistanceMaterial:Fn,MeshBasicMaterial:Ht,MeshMatcapMaterial:mo,LineDashedMaterial:go,LineBasicMaterial:Ti,Material:Ut}),yo={arraySlice:function(t,e,r){return yo.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==r?r:t.length)):t.slice(e,r)},convertArray:function(t,e,r){return!t||!r&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){for(var e=t.length,r=new Array(e),n=0;n!==e;++n)r[n]=n;return r.sort((function(e,r){return t[e]-t[r]})),r},sortedArray:function(t,e,r){for(var n=t.length,i=new t.constructor(n),a=0,o=0;o!==n;++a)for(var s=r[a]*e,c=0;c!==e;++c)i[o++]=t[s+c];return i},flattenJSON:function(t,e,r,n){for(var i=1,a=t[0];void 0!==a&&void 0===a[n];)a=t[i++];if(void 0!==a){var o=a[n];if(void 0!==o)if(Array.isArray(o))do{void 0!==(o=a[n])&&(e.push(a.time),r.push.apply(r,o)),a=t[i++]}while(void 0!==a);else if(void 0!==o.toArray)do{void 0!==(o=a[n])&&(e.push(a.time),o.toArray(r,r.length)),a=t[i++]}while(void 0!==a);else do{void 0!==(o=a[n])&&(e.push(a.time),r.push(o)),a=t[i++]}while(void 0!==a)}}};function xo(t,e,r,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==n?n:new e.constructor(r),this.sampleValues=e,this.valueSize=r}function bo(t,e,r,n){xo.call(this,t,e,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}function wo(t,e,r,n){xo.call(this,t,e,r,n)}function _o(t,e,r,n){xo.call(this,t,e,r,n)}function Mo(t,e,r,n){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo.convertArray(e,this.TimeBufferType),this.values=yo.convertArray(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}function So(t,e,r){Mo.call(this,t,e,r)}function To(t,e,r,n){Mo.call(this,t,e,r,n)}function Eo(t,e,r,n){Mo.call(this,t,e,r,n)}function Ao(t,e,r,n){xo.call(this,t,e,r,n)}function Lo(t,e,r,n){Mo.call(this,t,e,r,n)}function Ro(t,e,r,n){Mo.call(this,t,e,r,n)}function Po(t,e,r,n){Mo.call(this,t,e,r,n)}function Co(t,e,r){this.name=t,this.tracks=r,this.duration=void 0!==e?e:-1,this.uuid=s.generateUUID(),this.duration<0&&this.resetDuration()}function Oo(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return Po;case"color":return To;case"quaternion":return Lo;case"bool":case"boolean":return So;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){var r=[],n=[];yo.flattenJSON(t.keys,r,n,"value"),t.times=r,t.values=n}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(xo.prototype,{evaluate:function(t){var e=this.parameterPositions,r=this._cachedIndex,n=e[r],i=e[r-1];t:{e:{var a;r:{n:if(!(t<n)){for(var o=r+2;;){if(void 0===n){if(t<i)break n;return r=e.length,this._cachedIndex=r,this.afterEnd_(r-1,t,i)}if(r===o)break;if(i=n,t<(n=e[++r]))break e}a=e.length;break r}if(t>=i)break t;var s=e[1];for(t<s&&(r=2,i=s),o=r-2;;){if(void 0===i)return this._cachedIndex=0,this.beforeStart_(0,t,n);if(r===o)break;if(n=i,t>=(i=e[--r-1]))break e}a=r,r=0}for(;r<a;){var c=r+a>>>1;t<e[c]?a=c:r=c+1}if(n=e[r],void 0===(i=e[r-1]))return this._cachedIndex=0,this.beforeStart_(0,t,n);if(void 0===n)return r=e.length,this._cachedIndex=r,this.afterEnd_(r-1,i,t)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,t,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){for(var e=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=t*n,a=0;a!==n;++a)e[a]=r[i+a];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(xo.prototype,{beforeStart_:xo.prototype.copySampleValue_,afterEnd_:xo.prototype.copySampleValue_}),bo.prototype=Object.assign(Object.create(xo.prototype),{constructor:bo,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(t,e,r){var n=this.parameterPositions,i=t-2,a=t+1,o=n[i],s=n[a];if(void 0===o)switch(this.getSettings_().endingStart){case 2401:i=t,o=2*e-r;break;case 2402:o=e+n[i=n.length-2]-n[i+1];break;default:i=t,o=r}if(void 0===s)switch(this.getSettings_().endingEnd){case 2401:a=t,s=2*r-e;break;case 2402:a=1,s=r+n[1]-n[0];break;default:a=t-1,s=e}var c=.5*(r-e),l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(s-r),this._offsetPrev=i*l,this._offsetNext=a*l},interpolate_:function(t,e,r,n){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,c=s-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,d=(r-e)/(n-e),f=d*d,m=f*d,g=-u*m+2*u*f-u*d,v=(1+u)*m+(-1.5-2*u)*f+(-.5+u)*d+1,y=(-1-p)*m+(1.5+p)*f+.5*d,x=p*m-p*f,b=0;b!==o;++b)i[b]=g*a[l+b]+v*a[c+b]+y*a[s+b]+x*a[h+b];return i}}),wo.prototype=Object.assign(Object.create(xo.prototype),{constructor:wo,interpolate_:function(t,e,r,n){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,c=s-o,l=(r-e)/(n-e),h=1-l,u=0;u!==o;++u)i[u]=a[c+u]*h+a[s+u]*l;return i}}),_o.prototype=Object.assign(Object.create(xo.prototype),{constructor:_o,interpolate_:function(t){return this.copySampleValue_(t-1)}}),Object.assign(Mo,{toJSON:function(t){var e,r=t.constructor;if(void 0!==r.toJSON)e=r.toJSON(t);else{e={name:t.name,times:yo.convertArray(t.times,Array),values:yo.convertArray(t.values,Array)};var n=t.getInterpolation();n!==t.DefaultInterpolation&&(e.interpolation=n)}return e.type=t.ValueTypeName,e}}),Object.assign(Mo.prototype,{constructor:Mo,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(t){return new _o(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new wo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new bo(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){var e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){var r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(r);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(0!==t)for(var e=this.times,r=0,n=e.length;r!==n;++r)e[r]+=t;return this},scale:function(t){if(1!==t)for(var e=this.times,r=0,n=e.length;r!==n;++r)e[r]*=t;return this},trim:function(t,e){for(var r=this.times,n=r.length,i=0,a=n-1;i!==n&&r[i]<t;)++i;for(;-1!==a&&r[a]>e;)--a;if(++a,0!==i||a!==n){i>=a&&(i=(a=Math.max(a,1))-1);var o=this.getValueSize();this.times=yo.arraySlice(r,i,a),this.values=yo.arraySlice(this.values,i*o,a*o)}return this},validate:function(){var t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);var r=this.times,n=this.values,i=r.length;0===i&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);for(var a=null,o=0;o!==i;o++){var s=r[o];if("number"==typeof s&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),t=!1;break}if(null!==a&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),t=!1;break}a=s}if(void 0!==n&&yo.isTypedArray(n)){o=0;for(var c=n.length;o!==c;++o){var l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}}return t},optimize:function(){for(var t=this.times,e=this.values,r=this.getValueSize(),n=2302===this.getInterpolation(),i=1,a=t.length-1,o=1;o<a;++o){var s=!1,c=t[o];if(c!==t[o+1]&&(1!==o||c!==c[0]))if(n)s=!0;else for(var l=o*r,h=l-r,u=l+r,p=0;p!==r;++p){var d=e[l+p];if(d!==e[h+p]||d!==e[u+p]){s=!0;break}}if(s){if(o!==i){t[i]=t[o];var f=o*r,m=i*r;for(p=0;p!==r;++p)e[m+p]=e[f+p]}++i}}if(a>0){for(t[i]=t[a],f=a*r,m=i*r,p=0;p!==r;++p)e[m+p]=e[f+p];++i}return i!==t.length&&(this.times=yo.arraySlice(t,0,i),this.values=yo.arraySlice(e,0,i*r)),this},clone:function(){var t=yo.arraySlice(this.times,0),e=yo.arraySlice(this.values,0),r=new(0,this.constructor)(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}),So.prototype=Object.assign(Object.create(Mo.prototype),{constructor:So,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),To.prototype=Object.assign(Object.create(Mo.prototype),{constructor:To,ValueTypeName:"color"}),Eo.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Eo,ValueTypeName:"number"}),Ao.prototype=Object.assign(Object.create(xo.prototype),{constructor:Ao,interpolate_:function(t,e,r,n){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=t*o,c=(r-e)/(n-e),l=s+o;s!==l;s+=4)h.slerpFlat(i,0,a,s-o,a,s,c);return i}}),Lo.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Lo,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(t){return new Ao(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0}),Ro.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Ro,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),Po.prototype=Object.assign(Object.create(Mo.prototype),{constructor:Po,ValueTypeName:"vector"}),Object.assign(Co,{parse:function(t){for(var e=[],r=t.tracks,n=1/(t.fps||1),i=0,a=r.length;i!==a;++i)e.push(Oo(r[i]).scale(n));return new Co(t.name,t.duration,e)},toJSON:function(t){for(var e=[],r=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid},i=0,a=r.length;i!==a;++i)e.push(Mo.toJSON(r[i]));return n},CreateFromMorphTargetSequence:function(t,e,r,n){for(var i=e.length,a=[],o=0;o<i;o++){var s=[],c=[];s.push((o+i-1)%i,o,(o+1)%i),c.push(0,1,0);var l=yo.getKeyframeOrder(s);s=yo.sortedArray(s,1,l),c=yo.sortedArray(c,1,l),n||0!==s[0]||(s.push(i),c.push(c[0])),a.push(new Eo(".morphTargetInfluences["+e[o].name+"]",s,c).scale(1/r))}return new Co(t,-1,a)},findByName:function(t,e){var r=t;if(!Array.isArray(t)){var n=t;r=n.geometry&&n.geometry.animations||n.animations}for(var i=0;i<r.length;i++)if(r[i].name===e)return r[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,r){for(var n={},i=/^([\w-]*?)([\d]+)$/,a=0,o=t.length;a<o;a++){var s=t[a],c=s.name.match(i);if(c&&c.length>1){var l=n[u=c[1]];l||(n[u]=l=[]),l.push(s)}}var h=[];for(var u in n)h.push(Co.CreateFromMorphTargetSequence(u,n[u],e,r));return h},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var r=function(t,e,r,n,i){if(0!==r.length){var a=[],o=[];yo.flattenJSON(r,a,o,n),0!==a.length&&i.push(new t(e,a,o))}},n=[],i=t.name||"default",a=t.length||-1,o=t.fps||30,s=t.hierarchy||[],c=0;c<s.length;c++){var l=s[c].keys;if(l&&0!==l.length)if(l[0].morphTargets){for(var h={},u=0;u<l.length;u++)if(l[u].morphTargets)for(var p=0;p<l[u].morphTargets.length;p++)h[l[u].morphTargets[p]]=-1;for(var d in h){var f=[],m=[];for(p=0;p!==l[u].morphTargets.length;++p){var g=l[u];f.push(g.time),m.push(g.morphTarget===d?1:0)}n.push(new Eo(".morphTargetInfluence["+d+"]",f,m))}a=h.length*(o||1)}else{var v=".bones["+e[c].name+"]";r(Po,v+".position",l,"pos",n),r(Lo,v+".quaternion",l,"rot",n),r(Po,v+".scale",l,"scl",n)}}return 0===n.length?null:new Co(i,a,n)}}),Object.assign(Co.prototype,{resetDuration:function(){for(var t=0,e=0,r=this.tracks.length;e!==r;++e){var n=this.tracks[e];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this},trim:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){for(var t=!0,e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(var t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){for(var t=[],e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Co(this.name,this.duration,t)}});var Do={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function No(t,e,r){var n=this,i=!1,a=0,o=0,s=void 0;this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.itemStart=function(t){o++,!1===i&&void 0!==n.onStart&&n.onStart(t,a,o),i=!0},this.itemEnd=function(t){a++,void 0!==n.onProgress&&n.onProgress(t,a,o),a===o&&(i=!1,void 0!==n.onLoad&&n.onLoad())},this.itemError=function(t){void 0!==n.onError&&n.onError(t)},this.resolveURL=function(t){return s?s(t):t},this.setURLModifier=function(t){return s=t,this}}var Io=new No;function zo(t){this.manager=void 0!==t?t:Io,this.crossOrigin="anonymous",this.path="",this.resourcePath=""}Object.assign(zo.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this}}),zo.Handlers={handlers:[],add:function(t,e){this.handlers.push(t,e)},get:function(t){for(var e=this.handlers,r=0,n=e.length;r<n;r+=2){var i=e[r],a=e[r+1];if(i.test(t))return a}return null}};var Bo={};function Fo(t){zo.call(this,t)}function Go(t){zo.call(this,t)}function Uo(t){zo.call(this,t),this._parser=null}function Ho(t){zo.call(this,t),this._parser=null}function Vo(t){zo.call(this,t)}function jo(t){zo.call(this,t)}function ko(t){zo.call(this,t)}function Wo(){this.type="Curve",this.arcLengthDivisions=200}function qo(t,e,r,n,i,a,o,s){Wo.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=r||1,this.yRadius=n||1,this.aStartAngle=i||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}function Xo(t,e,r,n,i,a){qo.call(this,t,e,r,r,n,i,a),this.type="ArcCurve"}function Yo(){var t=0,e=0,r=0,n=0;function i(i,a,o,s){t=i,e=o,r=-3*i+3*a-2*o-s,n=2*i-2*a+o+s}return{initCatmullRom:function(t,e,r,n,a){i(e,r,a*(r-t),a*(n-e))},initNonuniformCatmullRom:function(t,e,r,n,a,o,s){var c=(e-t)/a-(r-t)/(a+o)+(r-e)/o,l=(r-e)/o-(n-e)/(o+s)+(n-r)/s;i(e,r,c*=o,l*=o)},calc:function(i){var a=i*i;return t+e*i+r*a+n*(a*i)}}}Fo.prototype=Object.assign(Object.create(zo.prototype),{constructor:Fo,load:function(t,e,r,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var a=this,o=Do.get(t);if(void 0!==o)return a.manager.itemStart(t),setTimeout((function(){e&&e(o),a.manager.itemEnd(t)}),0),o;if(void 0===Bo[t]){var s,l=t.match(/^data:(.*?)(;base64)?,(.*)$/);if(l){var h=l[1],u=!!l[2],p=l[3];p=decodeURIComponent(p),u&&(s=p,p=Object(n.atob)(s));try{var d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":for(var m=new Uint8Array(p.length),g=0;g<p.length;g++)m[g]=p.charCodeAt(g);d="blob"===f?new Blob([m.buffer],{type:h}):m.buffer;break;case"document":var v=new DOMParser;d=v.parseFromString(p,h);break;case"json":d=JSON.parse(p);break;default:d=p}setTimeout((function(){e&&e(d),a.manager.itemEnd(t)}),0)}catch(e){setTimeout((function(){i&&i(e),a.manager.itemError(t),a.manager.itemEnd(t)}),0)}}else{Bo[t]=[],Bo[t].push({onLoad:e,onProgress:r,onError:i});var y=new c;for(var x in y.open("GET",t,!0),y.addEventListener("load",(function(e){var r=this.response;Do.add(t,r);var n=Bo[t];if(delete Bo[t],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var i=0,o=n.length;i<o;i++)(s=n[i]).onLoad&&s.onLoad(r);a.manager.itemEnd(t)}else{for(i=0,o=n.length;i<o;i++){var s;(s=n[i]).onError&&s.onError(e)}a.manager.itemError(t),a.manager.itemEnd(t)}}),!1),y.addEventListener("progress",(function(e){for(var r=Bo[t],n=0,i=r.length;n<i;n++){var a=r[n];a.onProgress&&a.onProgress(e)}}),!1),y.addEventListener("error",(function(e){var r=Bo[t];delete Bo[t];for(var n=0,i=r.length;n<i;n++){var o=r[n];o.onError&&o.onError(e)}a.manager.itemError(t),a.manager.itemEnd(t)}),!1),y.addEventListener("abort",(function(e){var r=Bo[t];delete Bo[t];for(var n=0,i=r.length;n<i;n++){var o=r[n];o.onError&&o.onError(e)}a.manager.itemError(t),a.manager.itemEnd(t)}),!1),void 0!==this.responseType&&(y.responseType=this.responseType),void 0!==this.withCredentials&&(y.withCredentials=this.withCredentials),y.overrideMimeType&&y.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain"),this.requestHeader)y.setRequestHeader(x,this.requestHeader[x]);y.send(null)}return a.manager.itemStart(t),y}Bo[t].push({onLoad:e,onProgress:r,onError:i})},setResponseType:function(t){return this.responseType=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setMimeType:function(t){return this.mimeType=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}}),Go.prototype=Object.assign(Object.create(zo.prototype),{constructor:Go,load:function(t,e,r,n){var i=this,a=new Fo(i.manager);a.setPath(i.path),a.load(t,(function(t){e(i.parse(JSON.parse(t)))}),r,n)},parse:function(t){for(var e=[],r=0;r<t.length;r++){var n=Co.parse(t[r]);e.push(n)}return e}}),Uo.prototype=Object.assign(Object.create(zo.prototype),{constructor:Uo,load:function(t,e,r,n){var i=this,a=[],o=new ki;o.image=a;var s=new Fo(this.manager);function c(c){s.load(t[c],(function(t){var r=i._parser(t,!0);a[c]={width:r.width,height:r.height,format:r.format,mipmaps:r.mipmaps},6===(l+=1)&&(1===r.mipmapCount&&(o.minFilter=1006),o.format=r.format,o.needsUpdate=!0,e&&e(o))}),r,n)}if(s.setPath(this.path),s.setResponseType("arraybuffer"),Array.isArray(t))for(var l=0,h=0,u=t.length;h<u;++h)c(h);else s.load(t,(function(t){var r=i._parser(t,!0);if(r.isCubemap)for(var n=r.mipmaps.length/r.mipmapCount,s=0;s<n;s++){a[s]={mipmaps:[]};for(var c=0;c<r.mipmapCount;c++)a[s].mipmaps.push(r.mipmaps[s*r.mipmapCount+c]),a[s].format=r.format,a[s].width=r.width,a[s].height=r.height}else o.image.width=r.width,o.image.height=r.height,o.mipmaps=r.mipmaps;1===r.mipmapCount&&(o.minFilter=1006),o.format=r.format,o.needsUpdate=!0,e&&e(o)}),r,n);return o}}),Ho.prototype=Object.assign(Object.create(zo.prototype),{constructor:Ho,load:function(t,e,r,n){var i=this,a=new je,o=new Fo(this.manager);return o.setResponseType("arraybuffer"),o.setPath(this.path),o.load(t,(function(t){var r=i._parser(t);r&&(void 0!==r.image?a.image=r.image:void 0!==r.data&&(a.image.width=r.width,a.image.height=r.height,a.image.data=r.data),a.wrapS=void 0!==r.wrapS?r.wrapS:1001,a.wrapT=void 0!==r.wrapT?r.wrapT:1001,a.magFilter=void 0!==r.magFilter?r.magFilter:1006,a.minFilter=void 0!==r.minFilter?r.minFilter:1008,a.anisotropy=void 0!==r.anisotropy?r.anisotropy:1,void 0!==r.format&&(a.format=r.format),void 0!==r.type&&(a.type=r.type),void 0!==r.mipmaps&&(a.mipmaps=r.mipmaps),1===r.mipmapCount&&(a.minFilter=1006),a.needsUpdate=!0,e&&e(a,r))}),r,n),a}}),Vo.prototype=Object.assign(Object.create(zo.prototype),{constructor:Vo,load:function(t,e,r,n){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var a=this,o=Do.get(t);if(void 0!==o)return a.manager.itemStart(t),setTimeout((function(){e&&e(o),a.manager.itemEnd(t)}),0),o;var s=i.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1),Do.add(t,this),e&&e(this),a.manager.itemEnd(t)}function l(e){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1),n&&n(e),a.manager.itemError(t),a.manager.itemEnd(t)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(t),s.src=t,s}}),jo.prototype=Object.assign(Object.create(zo.prototype),{constructor:jo,load:function(t,e,r,n){var i=new mr,a=new Vo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(r){a.load(t[r],(function(t){i.images[r]=t,6==++o&&(i.needsUpdate=!0,e&&e(i))}),void 0,n)}for(var c=0;c<t.length;++c)s(c);return i}}),ko.prototype=Object.assign(Object.create(zo.prototype),{constructor:ko,load:function(t,e,r,n){var i=new y,a=new Vo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,(function(r){i.image=r;var n=t.search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/);i.format=n?1022:1023,i.needsUpdate=!0,void 0!==e&&e(i)}),r,n),i}}),Object.assign(Wo.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){var r=this.getUtoTmapping(t);return this.getPoint(r,e)},getPoints:function(t){void 0===t&&(t=5);for(var e=[],r=0;r<=t;r++)e.push(this.getPoint(r/t));return e},getSpacedPoints:function(t){void 0===t&&(t=5);for(var e=[],r=0;r<=t;r++)e.push(this.getPointAt(r/t));return e},getLength:function(){var t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(void 0===t&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var e,r,n=[],i=this.getPoint(0),a=0;for(n.push(0),r=1;r<=t;r++)a+=(e=this.getPoint(r/t)).distanceTo(i),n.push(a),i=e;return this.cacheArcLengths=n,n},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){var r,n=this.getLengths(),i=0,a=n.length;r=e||t*n[a-1];for(var o,s=0,c=a-1;s<=c;)if((o=n[i=Math.floor(s+(c-s)/2)]-r)<0)s=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(n[i=c]===r)return i/(a-1);var l=n[i];return(i+(r-l)/(n[i+1]-l))/(a-1)},getTangent:function(t){var e=t-1e-4,r=t+1e-4;e<0&&(e=0),r>1&&(r=1);var n=this.getPoint(e);return this.getPoint(r).clone().sub(n).normalize()},getTangentAt:function(t){var e=this.getUtoTmapping(t);return this.getTangent(e)},computeFrenetFrames:function(t,e){var r,n,i,a=new d,o=[],c=[],l=[],h=new d,u=new P;for(r=0;r<=t;r++)n=r/t,o[r]=this.getTangentAt(n),o[r].normalize();c[0]=new d,l[0]=new d;var p=Number.MAX_VALUE,f=Math.abs(o[0].x),m=Math.abs(o[0].y),g=Math.abs(o[0].z);for(f<=p&&(p=f,a.set(1,0,0)),m<=p&&(p=m,a.set(0,1,0)),g<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),l[0].crossVectors(o[0],c[0]),r=1;r<=t;r++)c[r]=c[r-1].clone(),l[r]=l[r-1].clone(),h.crossVectors(o[r-1],o[r]),h.length()>Number.EPSILON&&(h.normalize(),i=Math.acos(s.clamp(o[r-1].dot(o[r]),-1,1)),c[r].applyMatrix4(u.makeRotationAxis(h,i))),l[r].crossVectors(o[r],c[r]);if(!0===e)for(i=Math.acos(s.clamp(c[0].dot(c[t]),-1,1)),i/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(i=-i),r=1;r<=t;r++)c[r].applyMatrix4(u.makeRotationAxis(o[r],i*r)),l[r].crossVectors(o[r],c[r]);return{tangents:o,normals:c,binormals:l}},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){var t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}),qo.prototype=Object.create(Wo.prototype),qo.prototype.constructor=qo,qo.prototype.isEllipseCurve=!0,qo.prototype.getPoint=function(t,e){for(var r=e||new l,n=2*Math.PI,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<Number.EPSILON;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(i=a?0:n),!0!==this.aClockwise||a||(i===n?i=-n:i-=n);var o=this.aStartAngle+t*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(0!==this.aRotation){var h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=s-this.aX,d=c-this.aY;s=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return r.set(s,c)},qo.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},qo.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t},qo.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this},Xo.prototype=Object.create(qo.prototype),Xo.prototype.constructor=Xo,Xo.prototype.isArcCurve=!0;var Jo=new d,Zo=new Yo,Qo=new Yo,Ko=new Yo;function $o(t,e,r,n){Wo.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=r||"centripetal",this.tension=n||.5}function ts(t,e,r,n,i){var a=.5*(n-e),o=.5*(i-r),s=t*t;return(2*r-2*n+a+o)*(t*s)+(-3*r+3*n-2*a-o)*s+a*t+r}function es(t,e,r,n){return function(t,e){var r=1-t;return r*r*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,r)+function(t,e){return t*t*e}(t,n)}function rs(t,e,r,n,i){return function(t,e){var r=1-t;return r*r*r*e}(t,e)+function(t,e){var r=1-t;return 3*r*r*t*e}(t,r)+function(t,e){return 3*(1-t)*t*t*e}(t,n)+function(t,e){return t*t*t*e}(t,i)}function ns(t,e,r,n){Wo.call(this),this.type="CubicBezierCurve",this.v0=t||new l,this.v1=e||new l,this.v2=r||new l,this.v3=n||new l}function is(t,e,r,n){Wo.call(this),this.type="CubicBezierCurve3",this.v0=t||new d,this.v1=e||new d,this.v2=r||new d,this.v3=n||new d}function as(t,e){Wo.call(this),this.type="LineCurve",this.v1=t||new l,this.v2=e||new l}function os(t,e){Wo.call(this),this.type="LineCurve3",this.v1=t||new d,this.v2=e||new d}function ss(t,e,r){Wo.call(this),this.type="QuadraticBezierCurve",this.v0=t||new l,this.v1=e||new l,this.v2=r||new l}function cs(t,e,r){Wo.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new d,this.v1=e||new d,this.v2=r||new d}function ls(t){Wo.call(this),this.type="SplineCurve",this.points=t||[]}$o.prototype=Object.create(Wo.prototype),$o.prototype.constructor=$o,$o.prototype.isCatmullRomCurve3=!0,$o.prototype.getPoint=function(t,e){var r,n,i,a,o=e||new d,s=this.points,c=s.length,l=(c-(this.closed?0:1))*t,h=Math.floor(l),u=l-h;if(this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:0===u&&h===c-1&&(h=c-2,u=1),this.closed||h>0?r=s[(h-1)%c]:(Jo.subVectors(s[0],s[1]).add(s[0]),r=Jo),n=s[h%c],i=s[(h+1)%c],this.closed||h+2<c?a=s[(h+2)%c]:(Jo.subVectors(s[c-1],s[c-2]).add(s[c-1]),a=Jo),"centripetal"===this.curveType||"chordal"===this.curveType){var p="chordal"===this.curveType?.5:.25,f=Math.pow(r.distanceToSquared(n),p),m=Math.pow(n.distanceToSquared(i),p),g=Math.pow(i.distanceToSquared(a),p);m<1e-4&&(m=1),f<1e-4&&(f=m),g<1e-4&&(g=m),Zo.initNonuniformCatmullRom(r.x,n.x,i.x,a.x,f,m,g),Qo.initNonuniformCatmullRom(r.y,n.y,i.y,a.y,f,m,g),Ko.initNonuniformCatmullRom(r.z,n.z,i.z,a.z,f,m,g)}else"catmullrom"===this.curveType&&(Zo.initCatmullRom(r.x,n.x,i.x,a.x,this.tension),Qo.initCatmullRom(r.y,n.y,i.y,a.y,this.tension),Ko.initCatmullRom(r.z,n.z,i.z,a.z,this.tension));return o.set(Zo.calc(u),Qo.calc(u),Ko.calc(u)),o},$o.prototype.copy=function(t){Wo.prototype.copy.call(this,t),this.points=[];for(var e=0,r=t.points.length;e<r;e++){var n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},$o.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);t.points=[];for(var e=0,r=this.points.length;e<r;e++){var n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t},$o.prototype.fromJSON=function(t){Wo.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,r=t.points.length;e<r;e++){var n=t.points[e];this.points.push((new d).fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this},ns.prototype=Object.create(Wo.prototype),ns.prototype.constructor=ns,ns.prototype.isCubicBezierCurve=!0,ns.prototype.getPoint=function(t,e){var r=e||new l,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(rs(t,n.x,i.x,a.x,o.x),rs(t,n.y,i.y,a.y,o.y)),r},ns.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},ns.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},ns.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},is.prototype=Object.create(Wo.prototype),is.prototype.constructor=is,is.prototype.isCubicBezierCurve3=!0,is.prototype.getPoint=function(t,e){var r=e||new d,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(rs(t,n.x,i.x,a.x,o.x),rs(t,n.y,i.y,a.y,o.y),rs(t,n.z,i.z,a.z,o.z)),r},is.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this},is.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t},is.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this},as.prototype=Object.create(Wo.prototype),as.prototype.constructor=as,as.prototype.isLineCurve=!0,as.prototype.getPoint=function(t,e){var r=e||new l;return 1===t?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r},as.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},as.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()},as.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},as.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},as.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},os.prototype=Object.create(Wo.prototype),os.prototype.constructor=os,os.prototype.isLineCurve3=!0,os.prototype.getPoint=function(t,e){var r=e||new d;return 1===t?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r},os.prototype.getPointAt=function(t,e){return this.getPoint(t,e)},os.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this},os.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},os.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},ss.prototype=Object.create(Wo.prototype),ss.prototype.constructor=ss,ss.prototype.isQuadraticBezierCurve=!0,ss.prototype.getPoint=function(t,e){var r=e||new l,n=this.v0,i=this.v1,a=this.v2;return r.set(es(t,n.x,i.x,a.x),es(t,n.y,i.y,a.y)),r},ss.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},ss.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},ss.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},cs.prototype=Object.create(Wo.prototype),cs.prototype.constructor=cs,cs.prototype.isQuadraticBezierCurve3=!0,cs.prototype.getPoint=function(t,e){var r=e||new d,n=this.v0,i=this.v1,a=this.v2;return r.set(es(t,n.x,i.x,a.x),es(t,n.y,i.y,a.y),es(t,n.z,i.z,a.z)),r},cs.prototype.copy=function(t){return Wo.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},cs.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},cs.prototype.fromJSON=function(t){return Wo.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},ls.prototype=Object.create(Wo.prototype),ls.prototype.constructor=ls,ls.prototype.isSplineCurve=!0,ls.prototype.getPoint=function(t,e){var r=e||new l,n=this.points,i=(n.length-1)*t,a=Math.floor(i),o=i-a,s=n[0===a?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return r.set(ts(o,s.x,c.x,h.x,u.x),ts(o,s.y,c.y,h.y,u.y)),r},ls.prototype.copy=function(t){Wo.prototype.copy.call(this,t),this.points=[];for(var e=0,r=t.points.length;e<r;e++){var n=t.points[e];this.points.push(n.clone())}return this},ls.prototype.toJSON=function(){var t=Wo.prototype.toJSON.call(this);t.points=[];for(var e=0,r=this.points.length;e<r;e++){var n=this.points[e];t.points.push(n.toArray())}return t},ls.prototype.fromJSON=function(t){Wo.prototype.fromJSON.call(this,t),this.points=[];for(var e=0,r=t.points.length;e<r;e++){var n=t.points[e];this.points.push((new l).fromArray(n))}return this};var hs=Object.freeze({ArcCurve:Xo,CatmullRomCurve3:$o,CubicBezierCurve:ns,CubicBezierCurve3:is,EllipseCurve:qo,LineCurve:as,LineCurve3:os,QuadraticBezierCurve:ss,QuadraticBezierCurve3:cs,SplineCurve:ls});function us(){Wo.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}function ps(t){us.call(this),this.type="Path",this.currentPoint=new l,t&&this.setFromPoints(t)}function ds(t){ps.call(this,t),this.uuid=s.generateUUID(),this.type="Shape",this.holes=[]}function fs(t,e){Y.call(this),this.type="Light",this.color=new Nt(t),this.intensity=void 0!==e?e:1,this.receiveShadow=void 0}function ms(t,e,r){fs.call(this,t,r),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(Y.DefaultUp),this.updateMatrix(),this.groundColor=new Nt(e)}function gs(t){this.camera=t,this.bias=0,this.radius=1,this.mapSize=new l(512,512),this.map=null,this.mapPass=null,this.matrix=new P,this._frustum=new Ze,this._frameExtents=new l(1,1),this._viewportCount=1,this._viewports=[new x(0,0,1,1)]}function vs(){gs.call(this,new Ue(50,1,.5,500))}function ys(t,e,r,n,i,a){fs.call(this,t,e),this.type="SpotLight",this.position.copy(Y.DefaultUp),this.updateMatrix(),this.target=new Y,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI}}),this.distance=void 0!==r?r:0,this.angle=void 0!==n?n:Math.PI/3,this.penumbra=void 0!==i?i:0,this.decay=void 0!==a?a:1,this.shadow=new vs}function xs(){gs.call(this,new Ue(90,1,.5,500)),this._frameExtents=new l(4,2),this._viewportCount=6,this._viewports=[new x(2,1,1,1),new x(0,1,1,1),new x(3,1,1,1),new x(1,1,1,1),new x(3,0,1,1),new x(1,0,1,1)],this._cubeDirections=[new d(1,0,0),new d(-1,0,0),new d(0,0,1),new d(0,0,-1),new d(0,1,0),new d(0,-1,0)],this._cubeUps=[new d(0,1,0),new d(0,1,0),new d(0,1,0),new d(0,1,0),new d(0,0,1),new d(0,0,-1)]}function bs(t,e,r,n){fs.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI)}}),this.distance=void 0!==r?r:0,this.decay=void 0!==n?n:1,this.shadow=new xs}function ws(t,e,r,n,i,a){Ge.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=void 0!==t?t:-1,this.right=void 0!==e?e:1,this.top=void 0!==r?r:1,this.bottom=void 0!==n?n:-1,this.near=void 0!==i?i:.1,this.far=void 0!==a?a:2e3,this.updateProjectionMatrix()}function _s(){gs.call(this,new ws(-5,5,5,-5,.5,500))}function Ms(t,e){fs.call(this,t,e),this.type="DirectionalLight",this.position.copy(Y.DefaultUp),this.updateMatrix(),this.target=new Y,this.shadow=new _s}function Ss(t,e){fs.call(this,t,e),this.type="AmbientLight",this.castShadow=void 0}function Ts(t,e,r,n){fs.call(this,t,e),this.type="RectAreaLight",this.width=void 0!==r?r:10,this.height=void 0!==n?n:10}function Es(t){zo.call(this,t),this.textures={}}us.prototype=Object.assign(Object.create(Wo.prototype),{constructor:us,add:function(t){this.curves.push(t)},closePath:function(){var t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new as(e,t))},getPoint:function(t){for(var e=t*this.getLength(),r=this.getCurveLengths(),n=0;n<r.length;){if(r[n]>=e){var i=r[n]-e,a=this.curves[n],o=a.getLength(),s=0===o?0:1-i/o;return a.getPointAt(s)}n++}return null},getLength:function(){var t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var t=[],e=0,r=0,n=this.curves.length;r<n;r++)e+=this.curves[r].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){void 0===t&&(t=40);for(var e=[],r=0;r<=t;r++)e.push(this.getPoint(r/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;for(var e,r=[],n=0,i=this.curves;n<i.length;n++)for(var a=i[n],o=a&&a.isEllipseCurve?2*t:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?t*a.points.length:t,s=a.getPoints(o),c=0;c<s.length;c++){var l=s[c];e&&e.equals(l)||(r.push(l),e=l)}return this.autoClose&&r.length>1&&!r[r.length-1].equals(r[0])&&r.push(r[0]),r},copy:function(t){Wo.prototype.copy.call(this,t),this.curves=[];for(var e=0,r=t.curves.length;e<r;e++){var n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){var t=Wo.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(var e=0,r=this.curves.length;e<r;e++){var n=this.curves[e];t.curves.push(n.toJSON())}return t},fromJSON:function(t){Wo.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(var e=0,r=t.curves.length;e<r;e++){var n=t.curves[e];this.curves.push((new hs[n.type]).fromJSON(n))}return this}}),ps.prototype=Object.assign(Object.create(us.prototype),{constructor:ps,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(var e=1,r=t.length;e<r;e++)this.lineTo(t[e].x,t[e].y)},moveTo:function(t,e){this.currentPoint.set(t,e)},lineTo:function(t,e){var r=new as(this.currentPoint.clone(),new l(t,e));this.curves.push(r),this.currentPoint.set(t,e)},quadraticCurveTo:function(t,e,r,n){var i=new ss(this.currentPoint.clone(),new l(t,e),new l(r,n));this.curves.push(i),this.currentPoint.set(r,n)},bezierCurveTo:function(t,e,r,n,i,a){var o=new ns(this.currentPoint.clone(),new l(t,e),new l(r,n),new l(i,a));this.curves.push(o),this.currentPoint.set(i,a)},splineThru:function(t){var e=new ls([this.currentPoint.clone()].concat(t));this.curves.push(e),this.currentPoint.copy(t[t.length-1])},arc:function(t,e,r,n,i,a){var o=this.currentPoint.x,s=this.currentPoint.y;this.absarc(t+o,e+s,r,n,i,a)},absarc:function(t,e,r,n,i,a){this.absellipse(t,e,r,r,n,i,a)},ellipse:function(t,e,r,n,i,a,o,s){var c=this.currentPoint.x,l=this.currentPoint.y;this.absellipse(t+c,e+l,r,n,i,a,o,s)},absellipse:function(t,e,r,n,i,a,o,s){var c=new qo(t,e,r,n,i,a,o,s);if(this.curves.length>0){var l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);var h=c.getPoint(1);this.currentPoint.copy(h)},copy:function(t){return us.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){var t=us.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return us.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}}),ds.prototype=Object.assign(Object.create(ps.prototype),{constructor:ds,getPointsHoles:function(t){for(var e=[],r=0,n=this.holes.length;r<n;r++)e[r]=this.holes[r].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){ps.prototype.copy.call(this,t),this.holes=[];for(var e=0,r=t.holes.length;e<r;e++){var n=t.holes[e];this.holes.push(n.clone())}return this},toJSON:function(){var t=ps.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(var e=0,r=this.holes.length;e<r;e++){var n=this.holes[e];t.holes.push(n.toJSON())}return t},fromJSON:function(t){ps.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(var e=0,r=t.holes.length;e<r;e++){var n=t.holes[e];this.holes.push((new ps).fromJSON(n))}return this}}),fs.prototype=Object.assign(Object.create(Y.prototype),{constructor:fs,isLight:!0,copy:function(t){return Y.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){var e=Y.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}),ms.prototype=Object.assign(Object.create(fs.prototype),{constructor:ms,isHemisphereLight:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}),Object.assign(gs.prototype,{_projScreenMatrix:new P,_lightPositionWorld:new d,_lookTarget:new d,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){var e=this.camera,r=this.matrix,n=this._projScreenMatrix,i=this._lookTarget,a=this._lightPositionWorld;a.setFromMatrixPosition(t.matrixWorld),e.position.copy(a),i.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(i),e.updateMatrixWorld(),n.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromMatrix(n),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(e.projectionMatrix),r.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t={};return 0!==this.bias&&(t.bias=this.bias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}),vs.prototype=Object.assign(Object.create(gs.prototype),{constructor:vs,isSpotLightShadow:!0,updateMatrices:function(t,e,r){var n=this.camera,i=2*s.RAD2DEG*t.angle,a=this.mapSize.width/this.mapSize.height,o=t.distance||n.far;i===n.fov&&a===n.aspect&&o===n.far||(n.fov=i,n.aspect=a,n.far=o,n.updateProjectionMatrix()),gs.prototype.updateMatrices.call(this,t,e,r)}}),ys.prototype=Object.assign(Object.create(fs.prototype),{constructor:ys,isSpotLight:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),xs.prototype=Object.assign(Object.create(gs.prototype),{constructor:xs,isPointLightShadow:!0,updateMatrices:function(t,e,r){var n=this.camera,i=this.matrix,a=this._lightPositionWorld,o=this._lookTarget,s=this._projScreenMatrix;a.setFromMatrixPosition(t.matrixWorld),n.position.copy(a),o.copy(n.position),o.add(this._cubeDirections[r]),n.up.copy(this._cubeUps[r]),n.lookAt(o),n.updateMatrixWorld(),i.makeTranslation(-a.x,-a.y,-a.z),s.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromMatrix(s)}}),bs.prototype=Object.assign(Object.create(fs.prototype),{constructor:bs,isPointLight:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}),ws.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ws,isOrthographicCamera:!0,copy:function(t,e){return Ge.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,e,r,n,i,a){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=r-t,a=r+t,o=n+e,s=n-e;if(null!==this.view&&this.view.enabled){var c=this.zoom/(this.view.width/this.view.fullWidth),l=this.zoom/(this.view.height/this.view.fullHeight),h=(this.right-this.left)/this.view.width,u=(this.top-this.bottom)/this.view.height;a=(i+=h*(this.view.offsetX/c))+h*(this.view.width/c),s=(o-=u*(this.view.offsetY/l))-u*(this.view.height/l)}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){var e=Y.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}),_s.prototype=Object.assign(Object.create(gs.prototype),{constructor:_s,isDirectionalLightShadow:!0,updateMatrices:function(t,e,r){gs.prototype.updateMatrices.call(this,t,e,r)}}),Ms.prototype=Object.assign(Object.create(fs.prototype),{constructor:Ms,isDirectionalLight:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}),Ss.prototype=Object.assign(Object.create(fs.prototype),{constructor:Ss,isAmbientLight:!0}),Ts.prototype=Object.assign(Object.create(fs.prototype),{constructor:Ts,isRectAreaLight:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){var e=fs.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}}),Es.prototype=Object.assign(Object.create(zo.prototype),{constructor:Es,load:function(t,e,r,n){var i=this,a=new Fo(i.manager);a.setPath(i.path),a.load(t,(function(t){e(i.parse(JSON.parse(t)))}),r,n)},parse:function(t){var e=this.textures;function r(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}var n=new vo[t.type];if(void 0!==t.uuid&&(n.uuid=t.uuid),void 0!==t.name&&(n.name=t.name),void 0!==t.color&&n.color.setHex(t.color),void 0!==t.roughness&&(n.roughness=t.roughness),void 0!==t.metalness&&(n.metalness=t.metalness),void 0!==t.emissive&&n.emissive.setHex(t.emissive),void 0!==t.specular&&n.specular.setHex(t.specular),void 0!==t.shininess&&(n.shininess=t.shininess),void 0!==t.clearcoat&&(n.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(n.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.vertexColors&&(n.vertexColors=t.vertexColors),void 0!==t.fog&&(n.fog=t.fog),void 0!==t.flatShading&&(n.flatShading=t.flatShading),void 0!==t.blending&&(n.blending=t.blending),void 0!==t.combine&&(n.combine=t.combine),void 0!==t.side&&(n.side=t.side),void 0!==t.opacity&&(n.opacity=t.opacity),void 0!==t.transparent&&(n.transparent=t.transparent),void 0!==t.alphaTest&&(n.alphaTest=t.alphaTest),void 0!==t.depthTest&&(n.depthTest=t.depthTest),void 0!==t.depthWrite&&(n.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(n.colorWrite=t.colorWrite),void 0!==t.wireframe&&(n.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(n.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(n.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(n.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(n.rotation=t.rotation),1!==t.linewidth&&(n.linewidth=t.linewidth),void 0!==t.dashSize&&(n.dashSize=t.dashSize),void 0!==t.gapSize&&(n.gapSize=t.gapSize),void 0!==t.scale&&(n.scale=t.scale),void 0!==t.polygonOffset&&(n.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(n.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(n.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.skinning&&(n.skinning=t.skinning),void 0!==t.morphTargets&&(n.morphTargets=t.morphTargets),void 0!==t.morphNormals&&(n.morphNormals=t.morphNormals),void 0!==t.dithering&&(n.dithering=t.dithering),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.toneMapped&&(n.toneMapped=t.toneMapped),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.uniforms)for(var i in t.uniforms){var a=t.uniforms[i];switch(n.uniforms[i]={},a.type){case"t":n.uniforms[i].value=r(a.value);break;case"c":n.uniforms[i].value=(new Nt).setHex(a.value);break;case"v2":n.uniforms[i].value=(new l).fromArray(a.value);break;case"v3":n.uniforms[i].value=(new d).fromArray(a.value);break;case"v4":n.uniforms[i].value=(new x).fromArray(a.value);break;case"m3":n.uniforms[i].value=(new m).fromArray(a.value);case"m4":n.uniforms[i].value=(new P).fromArray(a.value);break;default:n.uniforms[i].value=a.value}}if(void 0!==t.defines&&(n.defines=t.defines),void 0!==t.vertexShader&&(n.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(n.fragmentShader=t.fragmentShader),void 0!==t.extensions)for(var o in t.extensions)n.extensions[o]=t.extensions[o];if(void 0!==t.shading&&(n.flatShading=1===t.shading),void 0!==t.size&&(n.size=t.size),void 0!==t.sizeAttenuation&&(n.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(n.map=r(t.map)),void 0!==t.matcap&&(n.matcap=r(t.matcap)),void 0!==t.alphaMap&&(n.alphaMap=r(t.alphaMap),n.transparent=!0),void 0!==t.bumpMap&&(n.bumpMap=r(t.bumpMap)),void 0!==t.bumpScale&&(n.bumpScale=t.bumpScale),void 0!==t.normalMap&&(n.normalMap=r(t.normalMap)),void 0!==t.normalMapType&&(n.normalMapType=t.normalMapType),void 0!==t.normalScale){var s=t.normalScale;!1===Array.isArray(s)&&(s=[s,s]),n.normalScale=(new l).fromArray(s)}return void 0!==t.displacementMap&&(n.displacementMap=r(t.displacementMap)),void 0!==t.displacementScale&&(n.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(n.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(n.roughnessMap=r(t.roughnessMap)),void 0!==t.metalnessMap&&(n.metalnessMap=r(t.metalnessMap)),void 0!==t.emissiveMap&&(n.emissiveMap=r(t.emissiveMap)),void 0!==t.emissiveIntensity&&(n.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(n.specularMap=r(t.specularMap)),void 0!==t.envMap&&(n.envMap=r(t.envMap)),void 0!==t.envMapIntensity&&(n.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(n.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(n.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(n.lightMap=r(t.lightMap)),void 0!==t.lightMapIntensity&&(n.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(n.aoMap=r(t.aoMap)),void 0!==t.aoMapIntensity&&(n.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(n.gradientMap=r(t.gradientMap)),void 0!==t.clearcoatNormalMap&&(n.clearcoatNormalMap=r(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(n.clearcoatNormalScale=(new l).fromArray(t.clearcoatNormalScale)),n},setTextures:function(t){return this.textures=t,this}});var As={decodeText:function(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var e="",r=0,n=t.length;r<n;r++)e+=String.fromCharCode(t[r]);try{return decodeURIComponent(escape(e))}catch(t){return e}},extractUrlBase:function(t){var e=t.lastIndexOf("/");return-1===e?"./":t.substr(0,e+1)}};function Ls(){se.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0}function Rs(t,e,r,n){"number"==typeof r&&(n=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Vt.call(this,t,e,r),this.meshPerAttribute=n||1}function Ps(t){zo.call(this,t)}Ls.prototype=Object.assign(Object.create(se.prototype),{constructor:Ls,isInstancedBufferGeometry:!0,copy:function(t){return se.prototype.copy.call(this,t),this.maxInstancedCount=t.maxInstancedCount,this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var t=se.prototype.toJSON.call(this);return t.maxInstancedCount=this.maxInstancedCount,t.isInstancedBufferGeometry=!0,t}}),Rs.prototype=Object.assign(Object.create(Vt.prototype),{constructor:Rs,isInstancedBufferAttribute:!0,copy:function(t){return Vt.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){var t=Vt.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}),Ps.prototype=Object.assign(Object.create(zo.prototype),{constructor:Ps,load:function(t,e,r,n){var i=this,a=new Fo(i.manager);a.setPath(i.path),a.load(t,(function(t){e(i.parse(JSON.parse(t)))}),r,n)},parse:function(t){var e=t.isInstancedBufferGeometry?new Ls:new se,r=t.data.index;if(void 0!==r){var n=new Cs[r.type](r.array);e.setIndex(new Vt(n,1))}var i=t.data.attributes;for(var a in i){var o=i[a],s=(n=new Cs[o.type](o.array),new(o.isInstancedBufferAttribute?Rs:Vt)(n,o.itemSize,o.normalized));void 0!==o.name&&(s.name=o.name),e.addAttribute(a,s)}var c=t.data.morphAttributes;if(c)for(var a in c){for(var l=c[a],h=[],u=0,p=l.length;u<p;u++)o=l[u],s=new Vt(n=new Cs[o.type](o.array),o.itemSize,o.normalized),void 0!==o.name&&(s.name=o.name),h.push(s);e.morphAttributes[a]=h}var f=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==f){u=0;for(var m=f.length;u!==m;++u){var g=f[u];e.addGroup(g.start,g.count,g.materialIndex)}}var v=t.data.boundingSphere;if(void 0!==v){var y=new d;void 0!==v.center&&y.fromArray(v.center),e.boundingSphere=new ut(y,v.radius)}return t.name&&(e.name=t.name),t.userData&&(e.userData=t.userData),e}});var Cs={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!=typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function Os(t){zo.call(this,t)}Os.prototype=Object.assign(Object.create(zo.prototype),{constructor:Os,load:function(t,e,r,n){var i=this,a=""===this.path?As.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;var o=new Fo(i.manager);o.setPath(this.path),o.load(t,(function(r){var a=null;try{a=JSON.parse(r)}catch(e){return void 0!==n&&n(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}var o=a.metadata;void 0!==o&&void 0!==o.type&&"geometry"!==o.type.toLowerCase()?i.parse(a,e):console.error("THREE.ObjectLoader: Can't load "+t)}),r,n)},parse:function(t,e){var r=this.parseShape(t.shapes),n=this.parseGeometries(t.geometries,r),i=this.parseImages(t.images,(function(){void 0!==e&&e(s)})),a=this.parseTextures(t.textures,i),o=this.parseMaterials(t.materials,a),s=this.parseObject(t.object,n,o);return t.animations&&(s.animations=this.parseAnimations(t.animations)),void 0!==t.images&&0!==t.images.length||void 0!==e&&e(s),s},parseShape:function(t){var e={};if(void 0!==t)for(var r=0,n=t.length;r<n;r++){var i=(new ds).fromJSON(t[r]);e[i.uuid]=i}return e},parseGeometries:function(t,e){var r={};if(void 0!==t)for(var n=new Ps,i=0,o=t.length;i<o;i++){var s,c=t[i];switch(c.type){case"PlaneGeometry":case"PlaneBufferGeometry":s=new ao[c.type](c.width,c.height,c.widthSegments,c.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":s=new ao[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":s=new ao[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":s=new ao[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":s=new ao[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":s=new ao[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":s=new ao[c.type](c.radius,c.detail);break;case"RingGeometry":case"RingBufferGeometry":s=new ao[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":s=new ao[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":s=new ao[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);break;case"TubeGeometry":case"TubeBufferGeometry":s=new ao[c.type]((new hs[c.path.type]).fromJSON(c.path),c.tubularSegments,c.radius,c.radialSegments,c.closed);break;case"LatheGeometry":case"LatheBufferGeometry":s=new ao[c.type](c.points,c.segments,c.phiStart,c.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":s=new ao[c.type](c.vertices,c.indices,c.radius,c.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":for(var l=[],h=0,u=c.shapes.length;h<u;h++){var p=e[c.shapes[h]];l.push(p)}s=new ao[c.type](l,c.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":for(l=[],h=0,u=c.shapes.length;h<u;h++)p=e[c.shapes[h]],l.push(p);var d=c.options.extrudePath;void 0!==d&&(c.options.extrudePath=(new hs[d.type]).fromJSON(d)),s=new ao[c.type](l,c.options);break;case"BufferGeometry":case"InstancedBufferGeometry":s=n.parse(c);break;case"Geometry":"THREE"in a&&"LegacyJSONLoader"in THREE?s=(new THREE.LegacyJSONLoader).parse(c,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+c.type+'"');continue}s.uuid=c.uuid,void 0!==c.name&&(s.name=c.name),!0===s.isBufferGeometry&&void 0!==c.userData&&(s.userData=c.userData),r[c.uuid]=s}return r},parseMaterials:function(t,e){var r={},n={};if(void 0!==t){var i=new Es;i.setTextures(e);for(var a=0,o=t.length;a<o;a++){var s=t[a];if("MultiMaterial"===s.type){for(var c=[],l=0;l<s.materials.length;l++){var h=s.materials[l];void 0===r[h.uuid]&&(r[h.uuid]=i.parse(h)),c.push(r[h.uuid])}n[s.uuid]=c}else void 0===r[s.uuid]&&(r[s.uuid]=i.parse(s)),n[s.uuid]=r[s.uuid]}}return n},parseAnimations:function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r],i=Co.parse(n);void 0!==n.uuid&&(i.uuid=n.uuid),e.push(i)}return e},parseImages:function(t,e){var r=this,n={};function i(t){return r.manager.itemStart(t),a.load(t,(function(){r.manager.itemEnd(t)}),void 0,(function(){r.manager.itemError(t),r.manager.itemEnd(t)}))}if(void 0!==t&&t.length>0){var a=new Vo(new No(e));a.setCrossOrigin(this.crossOrigin);for(var o=0,s=t.length;o<s;o++){var c=t[o],l=c.url;if(Array.isArray(l)){n[c.uuid]=[];for(var h=0,u=l.length;h<u;h++){var p=l[h],d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:r.resourcePath+p;n[c.uuid].push(i(d))}}else d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url)?c.url:r.resourcePath+c.url,n[c.uuid]=i(d)}}return n},parseTextures:function(t,e){function r(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}var n={};if(void 0!==t)for(var i=0,a=t.length;i<a;i++){var o,s=t[i];void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image),(o=Array.isArray(e[s.image])?new mr(e[s.image]):new y(e[s.image])).needsUpdate=!0,o.uuid=s.uuid,void 0!==s.name&&(o.name=s.name),void 0!==s.mapping&&(o.mapping=r(s.mapping,Ns)),void 0!==s.offset&&o.offset.fromArray(s.offset),void 0!==s.repeat&&o.repeat.fromArray(s.repeat),void 0!==s.center&&o.center.fromArray(s.center),void 0!==s.rotation&&(o.rotation=s.rotation),void 0!==s.wrap&&(o.wrapS=r(s.wrap[0],Is),o.wrapT=r(s.wrap[1],Is)),void 0!==s.format&&(o.format=s.format),void 0!==s.type&&(o.type=s.type),void 0!==s.encoding&&(o.encoding=s.encoding),void 0!==s.minFilter&&(o.minFilter=r(s.minFilter,zs)),void 0!==s.magFilter&&(o.magFilter=r(s.magFilter,zs)),void 0!==s.anisotropy&&(o.anisotropy=s.anisotropy),void 0!==s.flipY&&(o.flipY=s.flipY),void 0!==s.premultiplyAlpha&&(o.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(o.unpackAlignment=s.unpackAlignment),n[s.uuid]=o}return n},parseObject:function(t,e,r){var n;function i(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function a(t){if(void 0!==t){if(Array.isArray(t)){for(var e=[],n=0,i=t.length;n<i;n++){var a=t[n];void 0===r[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),e.push(r[a])}return e}return void 0===r[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),r[t]}}switch(t.type){case"Scene":n=new J,void 0!==t.background&&Number.isInteger(t.background)&&(n.background=new Nt(t.background)),void 0!==t.fog&&("Fog"===t.fog.type?n.fog=new $n(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(n.fog=new Kn(t.fog.color,t.fog.density)));break;case"PerspectiveCamera":n=new Ue(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(n.focus=t.focus),void 0!==t.zoom&&(n.zoom=t.zoom),void 0!==t.filmGauge&&(n.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(n.filmOffset=t.filmOffset),void 0!==t.view&&(n.view=Object.assign({},t.view));break;case"OrthographicCamera":n=new ws(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(n.zoom=t.zoom),void 0!==t.view&&(n.view=Object.assign({},t.view));break;case"AmbientLight":n=new Ss(t.color,t.intensity);break;case"DirectionalLight":n=new Ms(t.color,t.intensity);break;case"PointLight":n=new bs(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":n=new Ts(t.color,t.intensity,t.width,t.height);break;case"SpotLight":n=new ys(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":n=new ms(t.color,t.groundColor,t.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":var o=i(t.geometry),s=a(t.material);n=o.bones&&o.bones.length>0?new bi(o,s):new Te(o,s),void 0!==t.drawMode&&n.setDrawMode(t.drawMode);break;case"LOD":n=new xi;break;case"Line":n=new Ci(i(t.geometry),a(t.material),t.mode);break;case"LineLoop":n=new Ii(i(t.geometry),a(t.material));break;case"LineSegments":n=new Ni(i(t.geometry),a(t.material));break;case"PointCloud":case"Points":n=new Hi(i(t.geometry),a(t.material));break;case"Sprite":n=new mi(a(t.material));break;case"Group":n=new jn;break;default:n=new Y}if(n.uuid=t.uuid,void 0!==t.name&&(n.name=t.name),void 0!==t.matrix?(n.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(n.matrixAutoUpdate=t.matrixAutoUpdate),n.matrixAutoUpdate&&n.matrix.decompose(n.position,n.quaternion,n.scale)):(void 0!==t.position&&n.position.fromArray(t.position),void 0!==t.rotation&&n.rotation.fromArray(t.rotation),void 0!==t.quaternion&&n.quaternion.fromArray(t.quaternion),void 0!==t.scale&&n.scale.fromArray(t.scale)),void 0!==t.castShadow&&(n.castShadow=t.castShadow),void 0!==t.receiveShadow&&(n.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(n.shadow.bias=t.shadow.bias),void 0!==t.shadow.radius&&(n.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&n.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(n.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.frustumCulled&&(n.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(n.renderOrder=t.renderOrder),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.layers&&(n.layers.mask=t.layers),void 0!==t.children)for(var c=t.children,l=0;l<c.length;l++)n.add(this.parseObject(c[l],e,r));if("LOD"===t.type)for(var h=t.levels,u=0;u<h.length;u++){var p=h[u],d=n.getObjectByProperty("uuid",p.object);void 0!==d&&n.addLevel(d,p.distance)}return n}});var Ds,Ns={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Is={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},zs={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};function Bs(t){"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),zo.call(this,t),this.options=void 0}function Fs(){this.type="ShapePath",this.color=new Nt,this.subPaths=[],this.currentPath=null}function Gs(t){this.type="Font",this.data=t}function Us(t,e,r,n,i){var a=i.glyphs[t]||i.glyphs["?"];if(a){var o,s,c,l,h,u,p,d,f=new Fs;if(a.o)for(var m=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),g=0,v=m.length;g<v;)switch(m[g++]){case"m":o=m[g++]*e+r,s=m[g++]*e+n,f.moveTo(o,s);break;case"l":o=m[g++]*e+r,s=m[g++]*e+n,f.lineTo(o,s);break;case"q":c=m[g++]*e+r,l=m[g++]*e+n,h=m[g++]*e+r,u=m[g++]*e+n,f.quadraticCurveTo(h,u,c,l);break;case"b":c=m[g++]*e+r,l=m[g++]*e+n,h=m[g++]*e+r,u=m[g++]*e+n,p=m[g++]*e+r,d=m[g++]*e+n,f.bezierCurveTo(h,u,p,d,c,l)}return{offsetX:a.ha*e,path:f}}console.error('THREE.Font: character "'+t+'" does not exists in font family '+i.familyName+".")}function Hs(t){zo.call(this,t)}Bs.prototype=Object.assign(Object.create(zo.prototype),{constructor:Bs,setOptions:function(t){return this.options=t,this},load:function(t,e,r,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);var i=this,a=Do.get(t);if(void 0!==a)return i.manager.itemStart(t),setTimeout((function(){e&&e(a),i.manager.itemEnd(t)}),0),a;fetch(t).then((function(t){return t.blob()})).then((function(t){return void 0===i.options?createImageBitmap(t):createImageBitmap(t,i.options)})).then((function(r){Do.add(t,r),e&&e(r),i.manager.itemEnd(t)})).catch((function(e){n&&n(e),i.manager.itemError(t),i.manager.itemEnd(t)})),i.manager.itemStart(t)}}),Object.assign(Fs.prototype,{moveTo:function(t,e){this.currentPath=new ps,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e)},lineTo:function(t,e){this.currentPath.lineTo(t,e)},quadraticCurveTo:function(t,e,r,n){this.currentPath.quadraticCurveTo(t,e,r,n)},bezierCurveTo:function(t,e,r,n,i,a){this.currentPath.bezierCurveTo(t,e,r,n,i,a)},splineThru:function(t){this.currentPath.splineThru(t)},toShapes:function(t,e){function r(t){for(var e=[],r=0,n=t.length;r<n;r++){var i=t[r],a=new ds;a.curves=i.curves,e.push(a)}return e}function n(t,e){for(var r=e.length,n=!1,i=r-1,a=0;a<r;i=a++){var o=e[i],s=e[a],c=s.x-o.x,l=s.y-o.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(o=e[a],c=-c,s=e[i],l=-l),t.y<o.y||t.y>s.y)continue;if(t.y===o.y){if(t.x===o.x)return!0}else{var h=l*(t.x-o.x)-c*(t.y-o.y);if(0===h)return!0;if(h<0)continue;n=!n}}else{if(t.y!==o.y)continue;if(s.x<=t.x&&t.x<=o.x||o.x<=t.x&&t.x<=s.x)return!0}}return n}var i=Na.isClockWise,a=this.subPaths;if(0===a.length)return[];if(!0===e)return r(a);var o,s,c,l=[];if(1===a.length)return s=a[0],(c=new ds).curves=s.curves,l.push(c),l;var h=!i(a[0].getPoints());h=t?!h:h;var u,p,d=[],f=[],m=[],g=0;f[g]=void 0,m[g]=[];for(var v=0,y=a.length;v<y;v++)o=i(u=(s=a[v]).getPoints()),(o=t?!o:o)?(!h&&f[g]&&g++,f[g]={s:new ds,p:u},f[g].s.curves=s.curves,h&&g++,m[g]=[]):m[g].push({h:s,p:u[0]});if(!f[0])return r(a);if(f.length>1){for(var x=!1,b=[],w=0,_=f.length;w<_;w++)d[w]=[];for(w=0,_=f.length;w<_;w++)for(var M=m[w],S=0;S<M.length;S++){for(var T=M[S],E=!0,A=0;A<f.length;A++)n(T.p,f[A].p)&&(w!==A&&b.push({froms:w,tos:A,hole:S}),E?(E=!1,d[A].push(T)):x=!0);E&&d[w].push(T)}b.length>0&&(x||(m=d))}v=0;for(var L=f.length;v<L;v++){c=f[v].s,l.push(c);for(var R=0,P=(p=m[v]).length;R<P;R++)c.holes.push(p[R].h)}return l}}),Object.assign(Gs.prototype,{isFont:!0,generateShapes:function(t,e){void 0===e&&(e=100);for(var r=[],n=function(t,e,r){for(var n=Array.from?Array.from(t):String(t).split(""),i=e/r.resolution,a=(r.boundingBox.yMax-r.boundingBox.yMin+r.underlineThickness)*i,o=[],s=0,c=0,l=0;l<n.length;l++){var h=n[l];if("\n"===h)s=0,c-=a;else{var u=Us(h,i,s,c,r);s+=u.offsetX,o.push(u.path)}}return o}(t,e,this.data),i=0,a=n.length;i<a;i++)Array.prototype.push.apply(r,n[i].toShapes());return r}}),Hs.prototype=Object.assign(Object.create(zo.prototype),{constructor:Hs,load:function(t,e,r,n){var i=this,a=new Fo(this.manager);a.setPath(this.path),a.load(t,(function(t){var r;try{r=JSON.parse(t)}catch(e){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),r=JSON.parse(t.substring(65,t.length-2))}var n=i.parse(r);e&&e(n)}),r,n)},parse:function(t){return new Gs(t)}});var Vs={getContext:function(){return void 0===Ds&&(Ds=new(a.AudioContext||a.webkitAudioContext)),Ds},setContext:function(t){Ds=t}};function js(t){zo.call(this,t)}function ks(){this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new d)}function Ws(t,e){fs.call(this,void 0,e),this.sh=void 0!==t?t:new ks}function qs(t,e,r){Ws.call(this,void 0,r);var n=(new Nt).set(t),i=(new Nt).set(e),a=new d(n.r,n.g,n.b),o=new d(i.r,i.g,i.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}function Xs(t,e){Ws.call(this,void 0,e);var r=(new Nt).set(t);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}js.prototype=Object.assign(Object.create(zo.prototype),{constructor:js,load:function(t,e,r,n){var i=new Fo(this.manager);i.setResponseType("arraybuffer"),i.setPath(this.path),i.load(t,(function(t){var r=t.slice(0);Vs.getContext().decodeAudioData(r,(function(t){e(t)}))}),r,n)}}),Object.assign(ks.prototype,{isSphericalHarmonics3:!0,set:function(t){for(var e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this},zero:function(){for(var t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},getAt:function(t,e){var r=t.x,n=t.y,i=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScale(a[1],.488603*n),e.addScale(a[2],.488603*i),e.addScale(a[3],.488603*r),e.addScale(a[4],r*n*1.092548),e.addScale(a[5],n*i*1.092548),e.addScale(a[6],.315392*(3*i*i-1)),e.addScale(a[7],r*i*1.092548),e.addScale(a[8],.546274*(r*r-n*n)),e},getIrradianceAt:function(t,e){var r=t.x,n=t.y,i=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScale(a[1],1.023328*n),e.addScale(a[2],1.023328*i),e.addScale(a[3],1.023328*r),e.addScale(a[4],.858086*r*n),e.addScale(a[5],.858086*n*i),e.addScale(a[6],.743125*i*i-.247708),e.addScale(a[7],.858086*r*i),e.addScale(a[8],.429043*(r*r-n*n)),e},add:function(t){for(var e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this},scale:function(t){for(var e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this},lerp:function(t,e){for(var r=0;r<9;r++)this.coefficients[r].lerp(t.coefficients[r],e);return this},equals:function(t){for(var e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0},copy:function(t){return this.set(t.coefficients)},clone:function(){return(new this.constructor).copy(this)},fromArray:function(t,e){void 0===e&&(e=0);for(var r=this.coefficients,n=0;n<9;n++)r[n].fromArray(t,e+3*n);return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);for(var r=this.coefficients,n=0;n<9;n++)r[n].toArray(t,e+3*n);return t}}),Object.assign(ks,{getBasisAt:function(t,e){var r=t.x,n=t.y,i=t.z;e[0]=.282095,e[1]=.488603*n,e[2]=.488603*i,e[3]=.488603*r,e[4]=1.092548*r*n,e[5]=1.092548*n*i,e[6]=.315392*(3*i*i-1),e[7]=1.092548*r*i,e[8]=.546274*(r*r-n*n)}}),Ws.prototype=Object.assign(Object.create(fs.prototype),{constructor:Ws,isLightProbe:!0,copy:function(t){return fs.prototype.copy.call(this,t),this.sh.copy(t.sh),this.intensity=t.intensity,this},toJSON:function(t){return fs.prototype.toJSON.call(this,t)}}),qs.prototype=Object.assign(Object.create(Ws.prototype),{constructor:qs,isHemisphereLightProbe:!0,copy:function(t){return Ws.prototype.copy.call(this,t),this},toJSON:function(t){return Ws.prototype.toJSON.call(this,t)}}),Xs.prototype=Object.assign(Object.create(Ws.prototype),{constructor:Xs,isAmbientLightProbe:!0,copy:function(t){return Ws.prototype.copy.call(this,t),this},toJSON:function(t){return Ws.prototype.toJSON.call(this,t)}});var Ys=new P,Js=new P;function Zs(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ue,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ue,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}function Qs(t){this.autoStart=void 0===t||t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Zs.prototype,{update:function(t){var e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;var r,n,i=t.projectionMatrix.clone(),a=e.eyeSep/2,o=a*e.near/e.focus,c=e.near*Math.tan(s.DEG2RAD*e.fov*.5)/e.zoom;Js.elements[12]=-a,Ys.elements[12]=a,r=-c*e.aspect+o,n=c*e.aspect+o,i.elements[0]=2*e.near/(n-r),i.elements[8]=(n+r)/(n-r),this.cameraL.projectionMatrix.copy(i),r=-c*e.aspect-o,n=c*e.aspect-o,i.elements[0]=2*e.near/(n-r),i.elements[8]=(n+r)/(n-r),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Js),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Ys)}}),Object.assign(Qs.prototype,{start:function(){this.startTime=("undefined"==typeof performance?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=("undefined"==typeof performance?Date:performance).now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}});var Ks=new d,$s=new h,tc=new d,ec=new d;function rc(){Y.call(this),this.type="AudioListener",this.context=Vs.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Qs}function nc(t){Y.call(this),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.startTime=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filters=[]}rc.prototype=Object.assign(Object.create(Y.prototype),{constructor:rc,getInput:function(){return this.gain},removeFilter:function(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this},updateMatrixWorld:function(t){Y.prototype.updateMatrixWorld.call(this,t);var e=this.context.listener,r=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ks,$s,tc),ec.set(0,0,-1).applyQuaternion($s),e.positionX){var n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ks.x,n),e.positionY.linearRampToValueAtTime(Ks.y,n),e.positionZ.linearRampToValueAtTime(Ks.z,n),e.forwardX.linearRampToValueAtTime(ec.x,n),e.forwardY.linearRampToValueAtTime(ec.y,n),e.forwardZ.linearRampToValueAtTime(ec.z,n),e.upX.linearRampToValueAtTime(r.x,n),e.upY.linearRampToValueAtTime(r.y,n),e.upZ.linearRampToValueAtTime(r.z,n)}else e.setPosition(Ks.x,Ks.y,Ks.z),e.setOrientation(ec.x,ec.y,ec.z,r.x,r.y,r.z)}}),nc.prototype=Object.assign(Object.create(Y.prototype),{constructor:nc,getOutput:function(){return this.gain},setNodeSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this},setMediaElementSource:function(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this},setBuffer:function(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(){if(!0!==this.isPlaying){if(!1!==this.hasPlaybackControl){var t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.onended=this.onEnded.bind(this),this.startTime=this.context.currentTime,t.start(this.startTime,this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}console.warn("THREE.Audio: this Audio has no playback control.")}else console.warn("THREE.Audio: Audio is already playing.")},pause:function(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")},stop:function(){if(!1!==this.hasPlaybackControl)return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(t){return t||(t=[]),!0===this.isPlaying?(this.disconnect(),this.filters=t,this.connect()):this.filters=t,this},setDetune:function(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(t){return this.setFilters(t?[t]:[])},setPlaybackRate:function(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")},getVolume:function(){return this.gain.gain.value},setVolume:function(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}});var ic=new d,ac=new h,oc=new d,sc=new d;function cc(t){nc.call(this,t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}function lc(t,e){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=void 0!==e?e:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}function hc(t,e,r){this.binding=t,this.valueSize=r;var n,i=Float64Array;switch(e){case"quaternion":n=this._slerp;break;case"string":case"bool":i=Array,n=this._select;break;default:n=this._lerp}this.buffer=new i(4*r),this._mixBufferRegion=n,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0}cc.prototype=Object.assign(Object.create(nc.prototype),{constructor:cc,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(t){return this.panner.refDistance=t,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(t){return this.panner.rolloffFactor=t,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(t){return this.panner.distanceModel=t,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(t){return this.panner.maxDistance=t,this},setDirectionalCone:function(t,e,r){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=r,this},updateMatrixWorld:function(t){if(Y.prototype.updateMatrixWorld.call(this,t),!0!==this.hasPlaybackControl||!1!==this.isPlaying){this.matrixWorld.decompose(ic,ac,oc),sc.set(0,0,1).applyQuaternion(ac);var e=this.panner;if(e.positionX){var r=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ic.x,r),e.positionY.linearRampToValueAtTime(ic.y,r),e.positionZ.linearRampToValueAtTime(ic.z,r),e.orientationX.linearRampToValueAtTime(sc.x,r),e.orientationY.linearRampToValueAtTime(sc.y,r),e.orientationZ.linearRampToValueAtTime(sc.z,r)}else e.setPosition(ic.x,ic.y,ic.z),e.setOrientation(sc.x,sc.y,sc.z)}}}),Object.assign(lc.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){for(var t=0,e=this.getFrequencyData(),r=0;r<e.length;r++)t+=e[r];return t/e.length}}),Object.assign(hc.prototype,{accumulate:function(t,e){var r=this.buffer,n=this.valueSize,i=t*n+n,a=this.cumulativeWeight;if(0===a){for(var o=0;o!==n;++o)r[i+o]=r[o];a=e}else{var s=e/(a+=e);this._mixBufferRegion(r,i,0,s,n)}this.cumulativeWeight=a},apply:function(t){var e=this.valueSize,r=this.buffer,n=t*e+e,i=this.cumulativeWeight,a=this.binding;if(this.cumulativeWeight=0,i<1){var o=3*e;this._mixBufferRegion(r,n,o,1-i,e)}for(var s=e,c=e+e;s!==c;++s)if(r[s]!==r[s+e]){a.setValue(r,n);break}},saveOriginalState:function(){var t=this.binding,e=this.buffer,r=this.valueSize,n=3*r;t.getValue(e,n);for(var i=r,a=n;i!==a;++i)e[i]=e[n+i%r];this.cumulativeWeight=0},restoreOriginalState:function(){var t=3*this.valueSize;this.binding.setValue(this.buffer,t)},_select:function(t,e,r,n,i){if(n>=.5)for(var a=0;a!==i;++a)t[e+a]=t[r+a]},_slerp:function(t,e,r,n){h.slerpFlat(t,e,t,e,t,r,n)},_lerp:function(t,e,r,n,i){for(var a=1-n,o=0;o!==i;++o){var s=e+o;t[s]=t[s]*a+t[r+o]*n}}});var uc=new RegExp("[\\[\\]\\.:\\/]","g"),pc="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",dc=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),fc=/(WCOD+)?/.source.replace("WCOD",pc),mc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),gc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),vc=new RegExp("^"+dc+fc+mc+gc+"$"),yc=["material","materials","bones"];function xc(t,e,r){var n=r||bc.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}function bc(t,e,r){this.path=e,this.parsedPath=r||bc.parseTrackName(e),this.node=bc.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}function wc(){this.uuid=s.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var t={};this._indicesByUUID=t;for(var e=0,r=arguments.length;e!==r;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var n=this;this.stats={objects:{get total(){return n._objects.length},get inUse(){return this.total-n.nCachedObjects_}},get bindingsPerObject(){return n._bindings.length}}}function _c(t,e,r){this._mixer=t,this._clip=e,this._localRoot=r||null;for(var n=e.tracks,i=n.length,a=new Array(i),o={endingStart:2400,endingEnd:2400},s=0;s!==i;++s){var c=n[s].createInterpolant(null);a[s]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(i),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}function Mc(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}function Sc(t){"string"==typeof t&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}function Tc(t,e,r){ti.call(this,t,e),this.meshPerAttribute=r||1}function Ec(t,e,r,n){this.ray=new xt(t,e),this.near=r||0,this.far=n||1/0,this.camera=null,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ac(t,e){return t.distance-e.distance}function Lc(t,e,r,n){if(!1!==t.visible&&(t.raycast(e,r),!0===n))for(var i=t.children,a=0,o=i.length;a<o;a++)Lc(i[a],e,r,!0)}function Rc(t,e,r){return this.radius=void 0!==t?t:1,this.phi=void 0!==e?e:0,this.theta=void 0!==r?r:0,this}function Pc(t,e,r){return this.radius=void 0!==t?t:1,this.theta=void 0!==e?e:0,this.y=void 0!==r?r:0,this}Object.assign(xc.prototype,{getValue:function(t,e){this.bind();var r=this._targetGroup.nCachedObjects_,n=this._bindings[r];void 0!==n&&n.getValue(t,e)},setValue:function(t,e){for(var r=this._bindings,n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(t,e)},bind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].bind()},unbind:function(){for(var t=this._bindings,e=this._targetGroup.nCachedObjects_,r=t.length;e!==r;++e)t[e].unbind()}}),Object.assign(bc,{Composite:xc,create:function(t,e,r){return t&&t.isAnimationObjectGroup?new bc.Composite(t,e,r):new bc(t,e,r)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(uc,"")},parseTrackName:function(t){var e=vc.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);var r={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(void 0!==n&&-1!==n){var i=r.nodeName.substring(n+1);-1!==yc.indexOf(i)&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=i)}if(null===r.propertyName||0===r.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r},findNode:function(t,e){if(!e||""===e||"root"===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){var r=t.skeleton.getBoneByName(e);if(void 0!==r)return r}if(t.children){var n=function t(r){for(var n=0;n<r.length;n++){var i=r[n];if(i.name===e||i.uuid===e)return i;var a=t(i.children);if(a)return a}return null}(t.children);if(n)return n}return null}}),Object.assign(bc.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,e){t[e]=this.node[this.propertyName]},function(t,e){for(var r=this.resolvedProperty,n=0,i=r.length;n!==i;++n)t[e++]=r[n]},function(t,e){t[e]=this.resolvedProperty[this.propertyIndex]},function(t,e){this.resolvedProperty.toArray(t,e)}],SetterByBindingTypeAndVersioning:[[function(t,e){this.targetObject[this.propertyName]=t[e]},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){for(var r=this.resolvedProperty,n=0,i=r.length;n!==i;++n)r[n]=t[e++]},function(t,e){for(var r=this.resolvedProperty,n=0,i=r.length;n!==i;++n)r[n]=t[e++];this.targetObject.needsUpdate=!0},function(t,e){for(var r=this.resolvedProperty,n=0,i=r.length;n!==i;++n)r[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty[this.propertyIndex]=t[e]},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,e){this.resolvedProperty.fromArray(t,e)},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0},function(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,e){this.bind(),this.getValue(t,e)},setValue:function(t,e){this.bind(),this.setValue(t,e)},bind:function(){var t=this.node,e=this.parsedPath,r=e.objectName,n=e.propertyName,i=e.propertyIndex;if(t||(t=bc.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,t){if(r){var a=e.objectIndex;switch(r){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(var o=0;o<t.length;o++)if(t[o].name===a){a=o;break}break;default:if(void 0===t[r])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[r]}if(void 0!==a){if(void 0===t[a])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[a]}}var s=t[n];if(void 0!==s){var c=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?c=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(c=this.Versioning.MatrixWorldNeedsUpdate);var l=this.BindingType.Direct;if(void 0!==i){if("morphTargetInfluences"===n){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);for(o=0;o<this.node.geometry.morphAttributes.position.length;o++)if(t.geometry.morphAttributes.position[o].name===i){i=o;break}}else{if(!t.geometry.morphTargets)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);for(o=0;o<this.node.geometry.morphTargets.length;o++)if(t.geometry.morphTargets[o].name===i){i=o;break}}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else void 0!==s.fromArray&&void 0!==s.toArray?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}else{var h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t)}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}),//!\ DECLARE ALIAS AFTER assign prototype !
Object.assign(bc.prototype,{_getValue_unbound:bc.prototype.getValue,_setValue_unbound:bc.prototype.setValue}),Object.assign(wc.prototype,{isAnimationObjectGroup:!0,add:function(){for(var t=this._objects,e=t.length,r=this.nCachedObjects_,n=this._indicesByUUID,i=this._paths,a=this._parsedPaths,o=this._bindings,s=o.length,c=void 0,l=0,h=arguments.length;l!==h;++l){var u=arguments[l],p=u.uuid,d=n[p];if(void 0===d){d=e++,n[p]=d,t.push(u);for(var f=0,m=s;f!==m;++f)o[f].push(new bc(u,i[f],a[f]))}else if(d<r){c=t[d];var g=--r,v=t[g];for(n[v.uuid]=d,t[d]=v,n[p]=g,t[g]=u,f=0,m=s;f!==m;++f){var y=o[f],x=y[g],b=y[d];y[d]=x,void 0===b&&(b=new bc(u,i[f],a[f])),y[g]=b}}else t[d]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=r},remove:function(){for(var t=this._objects,e=this.nCachedObjects_,r=this._indicesByUUID,n=this._bindings,i=n.length,a=0,o=arguments.length;a!==o;++a){var s=arguments[a],c=s.uuid,l=r[c];if(void 0!==l&&l>=e){var h=e++,u=t[h];r[u.uuid]=l,t[l]=u,r[c]=h,t[h]=s;for(var p=0,d=i;p!==d;++p){var f=n[p],m=f[h],g=f[l];f[l]=m,f[h]=g}}}this.nCachedObjects_=e},uncache:function(){for(var t=this._objects,e=t.length,r=this.nCachedObjects_,n=this._indicesByUUID,i=this._bindings,a=i.length,o=0,s=arguments.length;o!==s;++o){var c=arguments[o],l=c.uuid,h=n[l];if(void 0!==h)if(delete n[l],h<r){var u=--r,p=t[u],d=t[y=--e];n[p.uuid]=h,t[h]=p,n[d.uuid]=u,t[u]=d,t.pop();for(var f=0,m=a;f!==m;++f){var g=(x=i[f])[u],v=x[y];x[h]=g,x[u]=v,x.pop()}}else{var y;for(n[(d=t[y=--e]).uuid]=h,t[h]=d,t.pop(),f=0,m=a;f!==m;++f){var x;(x=i[f])[h]=x[y],x.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){var r=this._bindingsIndicesByPath,n=r[t],i=this._bindings;if(void 0!==n)return i[n];var a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,h=new Array(c);n=i.length,r[t]=n,a.push(t),o.push(e),i.push(h);for(var u=l,p=s.length;u!==p;++u){var d=s[u];h[u]=new bc(d,t,e)}return h},unsubscribe_:function(t){var e=this._bindingsIndicesByPath,r=e[t];if(void 0!==r){var n=this._paths,i=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o];e[t[o]]=r,a[r]=s,a.pop(),i[r]=i[o],i.pop(),n[r]=n[o],n.pop()}}}),Object.assign(_c.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(t){return this._startTime=t,this},setLoop:function(t,e){return this.loop=t,this.repetitions=e,this},setEffectiveWeight:function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(t){return this._scheduleFading(t,0,1)},fadeOut:function(t){return this._scheduleFading(t,1,0)},crossFadeFrom:function(t,e,r){if(t.fadeOut(e),this.fadeIn(e),r){var n=this._clip.duration,i=t._clip.duration,a=i/n,o=n/i;t.warp(1,a,e),this.warp(o,1,e)}return this},crossFadeTo:function(t,e,r){return t.crossFadeFrom(this,e,r)},stopFading:function(){var t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},setEffectiveTimeScale:function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},syncWith:function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},halt:function(t){return this.warp(this._effectiveTimeScale,0,t)},warp:function(t,e,r){var n=this._mixer,i=n.time,a=this._timeScaleInterpolant,o=this.timeScale;null===a&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);var s=a.parameterPositions,c=a.sampleValues;return s[0]=i,s[1]=i+r,c[0]=t/o,c[1]=e/o,this},stopWarping:function(){var t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(t,e,r,n){if(this.enabled){var i=this._startTime;if(null!==i){var a=(t-i)*r;if(a<0||0===r)return;this._startTime=null,e=r*a}e*=this._updateTimeScale(t);var o=this._updateTime(e),s=this._updateWeight(t);if(s>0)for(var c=this._interpolants,l=this._propertyBindings,h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(n,s)}else this._updateWeight(t)},_updateWeight:function(t){var e=0;if(this.enabled){e=this.weight;var r=this._weightInterpolant;if(null!==r){var n=r.evaluate(t)[0];e*=n,t>r.parameterPositions[1]&&(this.stopFading(),0===n&&(this.enabled=!1))}}return this._effectiveWeight=e,e},_updateTimeScale:function(t){var e=0;if(!this.paused){e=this.timeScale;var r=this._timeScaleInterpolant;null!==r&&(e*=r.evaluate(t)[0],t>r.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e},_updateTime:function(t){var e=this.time+t,r=this._clip.duration,n=this.loop,i=this._loopCount,a=2202===n;if(0===t)return-1===i?e:a&&1==(1&i)?r-e:e;if(2200===n){-1===i&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(e>=r)e=r;else{if(!(e<0)){this.time=e;break t}e=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=e,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(-1===i&&(t>=0?(i=0,this._setEndings(!0,0===this.repetitions,a)):this._setEndings(0===this.repetitions,!0,a)),e>=r||e<0){var o=Math.floor(e/r);e-=r*o,i+=Math.abs(o);var s=this.repetitions-i;if(s<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,e=t>0?r:0,this.time=e,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(1===s){var c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=e;if(a&&1==(1&i))return r-e}return e},_setEndings:function(t,e,r){var n=this._interpolantSettings;r?(n.endingStart=2401,n.endingEnd=2401):(n.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,n.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(t,e,r){var n=this._mixer,i=n.time,a=this._weightInterpolant;null===a&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);var o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=e,o[1]=i+t,s[1]=r,this}}),Mc.prototype=Object.assign(Object.create(e.prototype),{constructor:Mc,_bindAction:function(t,e){var r=t._localRoot||this._root,n=t._clip.tracks,i=n.length,a=t._propertyBindings,o=t._interpolants,s=r.uuid,c=this._bindingsByRootAndName,l=c[s];void 0===l&&(l={},c[s]=l);for(var h=0;h!==i;++h){var u=n[h],p=u.name,d=l[p];if(void 0!==d)a[h]=d;else{if(void 0!==(d=a[h])){null===d._cacheIndex&&(++d.referenceCount,this._addInactiveBinding(d,s,p));continue}var f=e&&e._propertyBindings[h].binding.parsedPath;++(d=new hc(bc.create(r,p,f),u.ValueTypeName,u.getValueSize())).referenceCount,this._addInactiveBinding(d,s,p),a[h]=d}o[h].resultBuffer=d.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){var e=(t._localRoot||this._root).uuid,r=t._clip.uuid,n=this._actionsByClip[r];this._bindAction(t,n&&n.knownActions[0]),this._addInactiveAction(t,r,e)}for(var i=t._propertyBindings,a=0,o=i.length;a!==o;++a){var s=i[a];0==s.useCount++&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){for(var e=t._propertyBindings,r=0,n=e.length;r!==n;++r){var i=e[r];0==--i.useCount&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){var e=t._cacheIndex;return null!==e&&e<this._nActiveActions},_addInactiveAction:function(t,e,r){var n=this._actions,i=this._actionsByClip,a=i[e];if(void 0===a)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,i[e]=a;else{var o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=n.length,n.push(t),a.actionByRoot[r]=t},_removeInactiveAction:function(t){var e=this._actions,r=e[e.length-1],n=t._cacheIndex;r._cacheIndex=n,e[n]=r,e.pop(),t._cacheIndex=null;var i=t._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),t._byClipCacheIndex=null,delete o.actionByRoot[(t._localRoot||this._root).uuid],0===s.length&&delete a[i],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){for(var e=t._propertyBindings,r=0,n=e.length;r!==n;++r){var i=e[r];0==--i.referenceCount&&this._removeInactiveBinding(i)}},_lendAction:function(t){var e=this._actions,r=t._cacheIndex,n=this._nActiveActions++,i=e[n];t._cacheIndex=n,e[n]=t,i._cacheIndex=r,e[r]=i},_takeBackAction:function(t){var e=this._actions,r=t._cacheIndex,n=--this._nActiveActions,i=e[n];t._cacheIndex=n,e[n]=t,i._cacheIndex=r,e[r]=i},_addInactiveBinding:function(t,e,r){var n=this._bindingsByRootAndName,i=n[e],a=this._bindings;void 0===i&&(i={},n[e]=i),i[r]=t,t._cacheIndex=a.length,a.push(t)},_removeInactiveBinding:function(t){var e=this._bindings,r=t.binding,n=r.rootNode.uuid,i=r.path,a=this._bindingsByRootAndName,o=a[n],s=e[e.length-1],c=t._cacheIndex;s._cacheIndex=c,e[c]=s,e.pop(),delete o[i],0===Object.keys(o).length&&delete a[n]},_lendBinding:function(t){var e=this._bindings,r=t._cacheIndex,n=this._nActiveBindings++,i=e[n];t._cacheIndex=n,e[n]=t,i._cacheIndex=r,e[r]=i},_takeBackBinding:function(t){var e=this._bindings,r=t._cacheIndex,n=--this._nActiveBindings,i=e[n];t._cacheIndex=n,e[n]=t,i._cacheIndex=r,e[r]=i},_lendControlInterpolant:function(){var t=this._controlInterpolants,e=this._nActiveControlInterpolants++,r=t[e];return void 0===r&&((r=new wo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex=e,t[e]=r),r},_takeBackControlInterpolant:function(t){var e=this._controlInterpolants,r=t.__cacheIndex,n=--this._nActiveControlInterpolants,i=e[n];t.__cacheIndex=n,e[n]=t,i.__cacheIndex=r,e[r]=i},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e){var r=e||this._root,n=r.uuid,i="string"==typeof t?Co.findByName(r,t):t,a=null!==i?i.uuid:t,o=this._actionsByClip[a],s=null;if(void 0!==o){var c=o.actionByRoot[n];if(void 0!==c)return c;s=o.knownActions[0],null===i&&(i=s._clip)}if(null===i)return null;var l=new _c(this,i,e);return this._bindAction(l,s),this._addInactiveAction(l,a,n),l},existingAction:function(t,e){var r=e||this._root,n=r.uuid,i="string"==typeof t?Co.findByName(r,t):t,a=i?i.uuid:t,o=this._actionsByClip[a];return void 0!==o&&o.actionByRoot[n]||null},stopAllAction:function(){var t=this._actions,e=this._nActiveActions,r=this._bindings,n=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var i=0;i!==e;++i)t[i].reset();for(i=0;i!==n;++i)r[i].useCount=0;return this},update:function(t){t*=this.timeScale;for(var e=this._actions,r=this._nActiveActions,n=this.time+=t,i=Math.sign(t),a=this._accuIndex^=1,o=0;o!==r;++o)e[o]._update(n,t,i,a);var s=this._bindings,c=this._nActiveBindings;for(o=0;o!==c;++o)s[o].apply(a);return this},getRoot:function(){return this._root},uncacheClip:function(t){var e=this._actions,r=t.uuid,n=this._actionsByClip,i=n[r];if(void 0!==i){for(var a=i.knownActions,o=0,s=a.length;o!==s;++o){var c=a[o];this._deactivateAction(c);var l=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=l,e[l]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[r]}},uncacheRoot:function(t){var e=t.uuid,r=this._actionsByClip;for(var n in r){var i=r[n].actionByRoot[e];void 0!==i&&(this._deactivateAction(i),this._removeInactiveAction(i))}var a=this._bindingsByRootAndName[e];if(void 0!==a)for(var o in a){var s=a[o];s.restoreOriginalState(),this._removeInactiveBinding(s)}},uncacheAction:function(t,e){var r=this.existingAction(t,e);null!==r&&(this._deactivateAction(r),this._removeInactiveAction(r))}}),Sc.prototype.clone=function(){return new Sc(void 0===this.value.clone?this.value:this.value.clone())},Tc.prototype=Object.assign(Object.create(ti.prototype),{constructor:Tc,isInstancedInterleavedBuffer:!0,copy:function(t){return ti.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this}}),Object.assign(Ec.prototype,{linePrecision:1,set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,r){var n=r||[];return Lc(t,this,n,e),n.sort(Ac),n},intersectObjects:function(t,e,r){var n=r||[];if(!1===Array.isArray(t))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),n;for(var i=0,a=t.length;i<a;i++)Lc(t[i],this,n,e);return n.sort(Ac),n}}),Object.assign(Rc.prototype,{set:function(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},makeSafe:function(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(s.clamp(e/this.radius,-1,1))),this}}),Object.assign(Pc.prototype,{set:function(t,e,r){return this.radius=t,this.theta=e,this.y=r,this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},setFromVector3:function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},setFromCartesianCoords:function(t,e,r){return this.radius=Math.sqrt(t*t+r*r),this.theta=Math.atan2(t,r),this.y=e,this}});var Cc=new l;function Oc(t,e){this.min=void 0!==t?t:new l(1/0,1/0),this.max=void 0!==e?e:new l(-1/0,-1/0)}Object.assign(Oc.prototype,{set:function(t,e){return this.min.copy(t),this.max.copy(e),this},setFromPoints:function(t){this.makeEmpty();for(var e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this},setFromCenterAndSize:function(t,e){var r=Cc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.min.copy(t.min),this.max.copy(t.max),this},makeEmpty:function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(t){return void 0===t&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new l),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(t){return void 0===t&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new l),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},expandByPoint:function(t){return this.min.min(t),this.max.max(t),this},expandByVector:function(t){return this.min.sub(t),this.max.add(t),this},expandByScalar:function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},containsPoint:function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},containsBox:function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},getParameter:function(t,e){return void 0===e&&(console.warn("THREE.Box2: .getParameter() target is now required"),e=new l),e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},clampPoint:function(t,e){return void 0===e&&(console.warn("THREE.Box2: .clampPoint() target is now required"),e=new l),e.copy(t).clamp(this.min,this.max)},distanceToPoint:function(t){return Cc.copy(t).clamp(this.min,this.max).sub(t).length()},intersect:function(t){return this.min.max(t.min),this.max.min(t.max),this},union:function(t){return this.min.min(t.min),this.max.max(t.max),this},translate:function(t){return this.min.add(t),this.max.add(t),this},equals:function(t){return t.min.equals(this.min)&&t.max.equals(this.max)}});var Dc=new d,Nc=new d;function Ic(t,e){this.start=void 0!==t?t:new d,this.end=void 0!==e?e:new d}function zc(t){Y.call(this),this.material=t,this.render=function(){}}Object.assign(Ic.prototype,{set:function(t,e){return this.start.copy(t),this.end.copy(e),this},clone:function(){return(new this.constructor).copy(this)},copy:function(t){return this.start.copy(t.start),this.end.copy(t.end),this},getCenter:function(t){return void 0===t&&(console.warn("THREE.Line3: .getCenter() target is now required"),t=new d),t.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(t){return void 0===t&&(console.warn("THREE.Line3: .delta() target is now required"),t=new d),t.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(t,e){return void 0===e&&(console.warn("THREE.Line3: .at() target is now required"),e=new d),this.delta(e).multiplyScalar(t).add(this.start)},closestPointToPointParameter:function(t,e){Dc.subVectors(t,this.start),Nc.subVectors(this.end,this.start);var r=Nc.dot(Nc),n=Nc.dot(Dc)/r;return e&&(n=s.clamp(n,0,1)),n},closestPointToPoint:function(t,e,r){var n=this.closestPointToPointParameter(t,e);return void 0===r&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),r=new d),this.delta(r).multiplyScalar(n).add(this.start)},applyMatrix4:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this},equals:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}}),zc.prototype=Object.create(Y.prototype),zc.prototype.constructor=zc,zc.prototype.isImmediateRenderObject=!0;var Bc=new d,Fc=new d,Gc=new m,Uc=["a","b","c"];function Hc(t,e,r,n){this.object=t,this.size=void 0!==e?e:1;var i=void 0!==r?r:16711680,a=void 0!==n?n:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=3*s.faces.length:s&&s.isBufferGeometry&&(o=s.attributes.normal.count);var c=new se,l=new Zt(2*o*3,3);c.addAttribute("position",l),Ni.call(this,c,new Ti({color:i,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}Hc.prototype=Object.create(Ni.prototype),Hc.prototype.constructor=Hc,Hc.prototype.update=function(){this.object.updateMatrixWorld(!0),Gc.getNormalMatrix(this.object.matrixWorld);var t=this.object.matrixWorld,e=this.geometry.attributes.position,r=this.object.geometry;if(r&&r.isGeometry)for(var n=r.vertices,i=r.faces,a=0,o=0,s=i.length;o<s;o++)for(var c=i[o],l=0,h=c.vertexNormals.length;l<h;l++){var u=n[c[Uc[l]]],p=c.vertexNormals[l];Bc.copy(u).applyMatrix4(t),Fc.copy(p).applyMatrix3(Gc).normalize().multiplyScalar(this.size).add(Bc),e.setXYZ(a,Bc.x,Bc.y,Bc.z),a+=1,e.setXYZ(a,Fc.x,Fc.y,Fc.z),a+=1}else if(r&&r.isBufferGeometry){var d=r.attributes.position,f=r.attributes.normal;for(a=0,l=0,h=d.count;l<h;l++)Bc.set(d.getX(l),d.getY(l),d.getZ(l)).applyMatrix4(t),Fc.set(f.getX(l),f.getY(l),f.getZ(l)),Fc.applyMatrix3(Gc).normalize().multiplyScalar(this.size).add(Bc),e.setXYZ(a,Bc.x,Bc.y,Bc.z),a+=1,e.setXYZ(a,Fc.x,Fc.y,Fc.z),a+=1}e.needsUpdate=!0};var Vc=new d;function jc(t,e){Y.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;for(var r=new se,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],i=0,a=1;i<32;i++,a++){var o=i/32*Math.PI*2,s=a/32*Math.PI*2;n.push(Math.cos(o),Math.sin(o),1,Math.cos(s),Math.sin(s),1)}r.addAttribute("position",new Zt(n,3));var c=new Ti({fog:!1});this.cone=new Ni(r,c),this.add(this.cone),this.update()}jc.prototype=Object.create(Y.prototype),jc.prototype.constructor=jc,jc.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},jc.prototype.update=function(){this.light.updateMatrixWorld();var t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Vc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Vc),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var kc=new d,Wc=new P,qc=new P;function Xc(t){for(var e=function t(e){var r=[];e&&e.isBone&&r.push(e);for(var n=0;n<e.children.length;n++)r.push.apply(r,t(e.children[n]));return r}(t),r=new se,n=[],i=[],a=new Nt(0,0,1),o=new Nt(0,1,0),s=0;s<e.length;s++){var c=e[s];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(a.r,a.g,a.b),i.push(o.r,o.g,o.b))}r.addAttribute("position",new Zt(n,3)),r.addAttribute("color",new Zt(i,3));var l=new Ti({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});Ni.call(this,r,l),this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}function Yc(t,e,r){this.light=t,this.light.updateMatrixWorld(),this.color=r;var n=new ka(e,4,2),i=new Ht({wireframe:!0,fog:!1});Te.call(this,n,i),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}function Jc(t,e){this.type="RectAreaLightHelper",this.light=t,this.color=e;var r=new se;r.addAttribute("position",new Zt([1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere();var n=new Ti({fog:!1});Ci.call(this,r,n);var i=new se;i.addAttribute("position",new Zt([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),i.computeBoundingSphere(),this.add(new Te(i,new Ht({side:1,fog:!1}))),this.update()}Xc.prototype=Object.create(Ni.prototype),Xc.prototype.constructor=Xc,Xc.prototype.updateMatrixWorld=function(t){var e=this.bones,r=this.geometry,n=r.getAttribute("position");qc.getInverse(this.root.matrixWorld);for(var i=0,a=0;i<e.length;i++){var o=e[i];o.parent&&o.parent.isBone&&(Wc.multiplyMatrices(qc,o.matrixWorld),kc.setFromMatrixPosition(Wc),n.setXYZ(a,kc.x,kc.y,kc.z),Wc.multiplyMatrices(qc,o.parent.matrixWorld),kc.setFromMatrixPosition(Wc),n.setXYZ(a+1,kc.x,kc.y,kc.z),a+=2)}r.getAttribute("position").needsUpdate=!0,Y.prototype.updateMatrixWorld.call(this,t)},Yc.prototype=Object.create(Te.prototype),Yc.prototype.constructor=Yc,Yc.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},Yc.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)},Jc.prototype=Object.create(Ci.prototype),Jc.prototype.constructor=Jc,Jc.prototype.update=function(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var t=this.material.color,e=Math.max(t.r,t.g,t.b);e>1&&t.multiplyScalar(1/e),this.children[0].material.color.copy(this.material.color)}},Jc.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()};var Zc=new d,Qc=new Nt,Kc=new Nt;function $c(t,e,r){Y.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=r;var n=new ea(e);n.rotateY(.5*Math.PI),this.material=new Ht({wireframe:!0,fog:!1}),void 0===this.color&&(this.material.vertexColors=2);var i=n.getAttribute("position"),a=new Float32Array(3*i.count);n.addAttribute("color",new Vt(a,3)),this.add(new Te(n,this.material)),this.update()}function tl(t,e){this.lightProbe=t,this.size=e;var r={GAMMA_OUTPUT:""},n=new Fe({defines:r,uniforms:{sh:{value:this.lightProbe.sh.coefficients},intensity:{value:this.lightProbe.intensity}},vertexShader:["varying vec3 vNormal;","void main() {","\tvNormal = normalize( normalMatrix * normal );","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["#define RECIPROCAL_PI 0.318309886","vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {","\t// matrix is assumed to be orthogonal","\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );","}","vec3 linearToOutput( in vec3 a ) {","\t#ifdef GAMMA_OUTPUT","\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );","\t#else","\t\treturn a;","\t#endif","}","// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf","vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {","\t// normal is assumed to have unit length","\tfloat x = normal.x, y = normal.y, z = normal.z;","\t// band 0","\tvec3 result = shCoefficients[ 0 ] * 0.886227;","\t// band 1","\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;","\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;","\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;","\t// band 2","\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;","\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;","\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );","\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;","\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );","\treturn result;","}","uniform vec3 sh[ 9 ]; // sh coefficients","uniform float intensity; // light probe intensity","varying vec3 vNormal;","void main() {","\tvec3 normal = normalize( vNormal );","\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );","\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );","\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;","\toutgoingLight = linearToOutput( outgoingLight );","\tgl_FragColor = vec4( outgoingLight, 1.0 );","}"].join("\n")}),i=new ka(1,32,16);Te.call(this,i,n),this.onBeforeRender()}function el(t,e,r,n){t=t||10,e=e||10,r=new Nt(void 0!==r?r:4473924),n=new Nt(void 0!==n?n:8947848);for(var i=e/2,a=t/e,o=t/2,s=[],c=[],l=0,h=0,u=-o;l<=e;l++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);var p=l===i?r:n;p.toArray(c,h),h+=3,p.toArray(c,h),h+=3,p.toArray(c,h),h+=3,p.toArray(c,h),h+=3}var d=new se;d.addAttribute("position",new Zt(s,3)),d.addAttribute("color",new Zt(c,3));var f=new Ti({vertexColors:2});Ni.call(this,d,f)}function rl(t,e,r,n,i,a){t=t||10,e=e||16,r=r||8,n=n||64,i=new Nt(void 0!==i?i:4473924),a=new Nt(void 0!==a?a:8947848);var o,s,c,l,h,u,p,d=[],f=[];for(l=0;l<=e;l++)c=l/e*(2*Math.PI),o=Math.sin(c)*t,s=Math.cos(c)*t,d.push(0,0,0),d.push(o,0,s),p=1&l?i:a,f.push(p.r,p.g,p.b),f.push(p.r,p.g,p.b);for(l=0;l<=r;l++)for(p=1&l?i:a,u=t-t/r*l,h=0;h<n;h++)c=h/n*(2*Math.PI),o=Math.sin(c)*u,s=Math.cos(c)*u,d.push(o,0,s),f.push(p.r,p.g,p.b),c=(h+1)/n*(2*Math.PI),o=Math.sin(c)*u,s=Math.cos(c)*u,d.push(o,0,s),f.push(p.r,p.g,p.b);var m=new se;m.addAttribute("position",new Zt(d,3)),m.addAttribute("color",new Zt(f,3));var g=new Ti({vertexColors:2});Ni.call(this,m,g)}function nl(t,e,r,n){this.audio=t,this.range=e||1,this.divisionsInnerAngle=r||16,this.divisionsOuterAngle=n||2;var i=new se,a=this.divisionsInnerAngle+2*this.divisionsOuterAngle,o=new Float32Array(3*(3*a+3));i.addAttribute("position",new Vt(o,3));var s=new Ti({color:65280}),c=new Ti({color:16776960});Ci.call(this,i,[c,s]),this.update()}$c.prototype=Object.create(Y.prototype),$c.prototype.constructor=$c,$c.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()},$c.prototype.update=function(){var t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var e=t.geometry.getAttribute("color");Qc.copy(this.light.color),Kc.copy(this.light.groundColor);for(var r=0,n=e.count;r<n;r++){var i=r<n/2?Qc:Kc;e.setXYZ(r,i.r,i.g,i.b)}e.needsUpdate=!0}t.lookAt(Zc.setFromMatrixPosition(this.light.matrixWorld).negate())},tl.prototype=Object.create(Te.prototype),tl.prototype.constructor=tl,tl.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},tl.prototype.onBeforeRender=function(){this.position.copy(this.lightProbe.position),this.scale.set(1,1,1).multiplyScalar(this.size),this.material.uniforms.intensity.value=this.lightProbe.intensity},el.prototype=Object.assign(Object.create(Ni.prototype),{constructor:el,copy:function(t){return Ni.prototype.copy.call(this,t),this.geometry.copy(t.geometry),this.material.copy(t.material),this},clone:function(){return(new this.constructor).copy(this)}}),rl.prototype=Object.create(Ni.prototype),rl.prototype.constructor=rl,nl.prototype=Object.create(Ci.prototype),nl.prototype.constructor=nl,nl.prototype.update=function(){var t,e,r=this.audio,n=this.range,i=this.divisionsInnerAngle,a=this.divisionsOuterAngle,o=s.degToRad(r.panner.coneInnerAngle),c=s.degToRad(r.panner.coneOuterAngle),l=o/2,h=c/2,u=0,p=0,d=this.geometry,f=d.attributes.position;function m(r,i,a,o){var s=(i-r)/a;for(f.setXYZ(u,0,0,0),p++,t=r;t<i;t+=s)e=u+p,f.setXYZ(e,Math.sin(t)*n,0,Math.cos(t)*n),f.setXYZ(e+1,Math.sin(Math.min(t+s,i))*n,0,Math.cos(Math.min(t+s,i))*n),f.setXYZ(e+2,0,0,0),p+=3;d.addGroup(u,p,o),u+=p,p=0}d.clearGroups(),m(-h,-l,a,0),m(-l,l,i,1),m(l,h,a,0),f.needsUpdate=!0,o===c&&(this.material[0].visible=!1)},nl.prototype.dispose=function(){this.geometry.dispose(),this.material[0].dispose(),this.material[1].dispose()};var il=new d,al=new d,ol=new m;function sl(t,e,r,n){this.object=t,this.size=void 0!==e?e:1;var i=void 0!==r?r:16776960,a=void 0!==n?n:1,o=0,s=this.object.geometry;s&&s.isGeometry?o=s.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");var c=new se,l=new Zt(2*o*3,3);c.addAttribute("position",l),Ni.call(this,c,new Ti({color:i,linewidth:a})),this.matrixAutoUpdate=!1,this.update()}sl.prototype=Object.create(Ni.prototype),sl.prototype.constructor=sl,sl.prototype.update=function(){this.object.updateMatrixWorld(!0),ol.getNormalMatrix(this.object.matrixWorld);for(var t=this.object.matrixWorld,e=this.geometry.attributes.position,r=this.object.geometry,n=r.vertices,i=r.faces,a=0,o=0,s=i.length;o<s;o++){var c=i[o],l=c.normal;il.copy(n[c.a]).add(n[c.b]).add(n[c.c]).divideScalar(3).applyMatrix4(t),al.copy(l).applyMatrix3(ol).normalize().multiplyScalar(this.size).add(il),e.setXYZ(a,il.x,il.y,il.z),a+=1,e.setXYZ(a,al.x,al.y,al.z),a+=1}e.needsUpdate=!0};var cl=new d,ll=new d,hl=new d;function ul(t,e,r){Y.call(this),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=r,void 0===e&&(e=1);var n=new se;n.addAttribute("position",new Zt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));var i=new Ti({fog:!1});this.lightPlane=new Ci(n,i),this.add(this.lightPlane),(n=new se).addAttribute("position",new Zt([0,0,0,0,0,1],3)),this.targetLine=new Ci(n,i),this.add(this.targetLine),this.update()}ul.prototype=Object.create(Y.prototype),ul.prototype.constructor=ul,ul.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},ul.prototype.update=function(){cl.setFromMatrixPosition(this.light.matrixWorld),ll.setFromMatrixPosition(this.light.target.matrixWorld),hl.subVectors(ll,cl),this.lightPlane.lookAt(ll),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ll),this.targetLine.scale.z=hl.length()};var pl=new d,dl=new Ge;function fl(t){var e=new se,r=new Ti({color:16777215,vertexColors:1}),n=[],i=[],a={},o=new Nt(16755200),s=new Nt(16711680),c=new Nt(43775),l=new Nt(16777215),h=new Nt(3355443);function u(t,e,r){p(t,r),p(e,r)}function p(t,e){n.push(0,0,0),i.push(e.r,e.g,e.b),void 0===a[t]&&(a[t]=[]),a[t].push(n.length/3-1)}u("n1","n2",o),u("n2","n4",o),u("n4","n3",o),u("n3","n1",o),u("f1","f2",o),u("f2","f4",o),u("f4","f3",o),u("f3","f1",o),u("n1","f1",o),u("n2","f2",o),u("n3","f3",o),u("n4","f4",o),u("p","n1",s),u("p","n2",s),u("p","n3",s),u("p","n4",s),u("u1","u2",c),u("u2","u3",c),u("u3","u1",c),u("c","t",l),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h),e.addAttribute("position",new Zt(n,3)),e.addAttribute("color",new Zt(i,3)),Ni.call(this,e,r),this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update()}function ml(t,e,r,n,i,a,o){pl.set(i,a,o).unproject(n);var s=e[t];if(void 0!==s)for(var c=r.getAttribute("position"),l=0,h=s.length;l<h;l++)c.setXYZ(s[l],pl.x,pl.y,pl.z)}fl.prototype=Object.create(Ni.prototype),fl.prototype.constructor=fl,fl.prototype.update=function(){var t=this.geometry,e=this.pointMap;dl.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ml("c",e,t,dl,0,0,-1),ml("t",e,t,dl,0,0,1),ml("n1",e,t,dl,-1,-1,-1),ml("n2",e,t,dl,1,-1,-1),ml("n3",e,t,dl,-1,1,-1),ml("n4",e,t,dl,1,1,-1),ml("f1",e,t,dl,-1,-1,1),ml("f2",e,t,dl,1,-1,1),ml("f3",e,t,dl,-1,1,1),ml("f4",e,t,dl,1,1,1),ml("u1",e,t,dl,.7,1.1,-1),ml("u2",e,t,dl,-.7,1.1,-1),ml("u3",e,t,dl,0,2,-1),ml("cf1",e,t,dl,-1,0,1),ml("cf2",e,t,dl,1,0,1),ml("cf3",e,t,dl,0,-1,1),ml("cf4",e,t,dl,0,1,1),ml("cn1",e,t,dl,-1,0,-1),ml("cn2",e,t,dl,1,0,-1),ml("cn3",e,t,dl,0,-1,-1),ml("cn4",e,t,dl,0,1,-1),t.getAttribute("position").needsUpdate=!0};var gl=new ct;function vl(t,e){this.object=t,void 0===e&&(e=16776960);var r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),i=new se;i.setIndex(new Vt(r,1)),i.addAttribute("position",new Vt(n,3)),Ni.call(this,i,new Ti({color:e})),this.matrixAutoUpdate=!1,this.update()}function yl(t,e){this.type="Box3Helper",this.box=t,e=e||16776960;var r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new se;n.setIndex(new Vt(r,1)),n.addAttribute("position",new Zt([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),Ni.call(this,n,new Ti({color:e})),this.geometry.computeBoundingSphere()}function xl(t,e,r){this.type="PlaneHelper",this.plane=t,this.size=void 0===e?1:e;var n=void 0!==r?r:16776960,i=new se;i.addAttribute("position",new Zt([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),i.computeBoundingSphere(),Ci.call(this,i,new Ti({color:n}));var a=new se;a.addAttribute("position",new Zt([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),a.computeBoundingSphere(),this.add(new Te(a,new Ht({color:n,opacity:.2,transparent:!0,depthWrite:!1})))}vl.prototype=Object.create(Ni.prototype),vl.prototype.constructor=vl,vl.prototype.update=function(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&gl.setFromObject(this.object),!gl.isEmpty()){var e=gl.min,r=gl.max,n=this.geometry.attributes.position,i=n.array;i[0]=r.x,i[1]=r.y,i[2]=r.z,i[3]=e.x,i[4]=r.y,i[5]=r.z,i[6]=e.x,i[7]=e.y,i[8]=r.z,i[9]=r.x,i[10]=e.y,i[11]=r.z,i[12]=r.x,i[13]=r.y,i[14]=e.z,i[15]=e.x,i[16]=r.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=r.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}},vl.prototype.setFromObject=function(t){return this.object=t,this.update(),this},vl.prototype.copy=function(t){return Ni.prototype.copy.call(this,t),this.object=t.object,this},vl.prototype.clone=function(){return(new this.constructor).copy(this)},yl.prototype=Object.create(Ni.prototype),yl.prototype.constructor=yl,yl.prototype.updateMatrixWorld=function(t){var e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),Y.prototype.updateMatrixWorld.call(this,t))},xl.prototype=Object.create(Ci.prototype),xl.prototype.constructor=xl,xl.prototype.updateMatrixWorld=function(t){var e=-this.plane.constant;Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?1:0,this.lookAt(this.plane.normal),Y.prototype.updateMatrixWorld.call(this,t)};var bl,wl,_l=new d;function Ml(t,e,r,n,i,a){Y.call(this),void 0===t&&(t=new d(0,0,1)),void 0===e&&(e=new d(0,0,0)),void 0===r&&(r=1),void 0===n&&(n=16776960),void 0===i&&(i=.2*r),void 0===a&&(a=.2*i),void 0===bl&&((bl=new se).addAttribute("position",new Zt([0,0,0,0,1,0],3)),(wl=new to(0,.5,1,5,1)).translate(0,-.5,0)),this.position.copy(e),this.line=new Ci(bl,new Ti({color:n})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Te(wl,new Ht({color:n})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(r,i,a)}function Sl(t){var e=[0,0,0,t=t||1,0,0,0,0,0,0,t,0,0,0,0,0,0,t],r=new se;r.addAttribute("position",new Zt(e,3)),r.addAttribute("color",new Zt([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var n=new Ti({vertexColors:2});Ni.call(this,r,n)}function Tl(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),$o.call(this,t),this.type="catmullrom",this.closed=!0}function El(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),$o.call(this,t),this.type="catmullrom"}function Al(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),$o.call(this,t),this.type="catmullrom"}Ml.prototype=Object.create(Y.prototype),Ml.prototype.constructor=Ml,Ml.prototype.setDirection=function(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{_l.set(t.z,0,-t.x).normalize();var e=Math.acos(t.y);this.quaternion.setFromAxisAngle(_l,e)}},Ml.prototype.setLength=function(t,e,r){void 0===e&&(e=.2*t),void 0===r&&(r=.2*e),this.line.scale.set(1,Math.max(0,t-e),1),this.line.updateMatrix(),this.cone.scale.set(r,e,r),this.cone.position.y=t,this.cone.updateMatrix()},Ml.prototype.setColor=function(t){this.line.material.color.set(t),this.cone.material.color.set(t)},Ml.prototype.copy=function(t){return Y.prototype.copy.call(this,t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this},Ml.prototype.clone=function(){return(new this.constructor).copy(this)},Sl.prototype=Object.create(Ni.prototype),Sl.prototype.constructor=Sl,Wo.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(Wo.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Object.assign(us.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");var e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var e=new Oe,r=0,n=t.length;r<n;r++){var i=t[r];e.vertices.push(new d(i.x,i.y,i.z||0))}return e}}),Object.assign(ps.prototype,{fromPoints:function(t){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}}),Tl.prototype=Object.create($o.prototype),El.prototype=Object.create($o.prototype),Al.prototype=Object.create($o.prototype),Object.assign(Al.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}}),el.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Xc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},Object.assign(zo.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),As.extractUrlBase(t)}}),Object.assign(Os.prototype,{setTexturePath:function(t){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(t)}}),Object.assign(Oc.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}}),Object.assign(ct.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}}),Ic.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)},Object.assign(s,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),s.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),s.ceilPowerOfTwo(t)}}),Object.assign(m.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(t){return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(t)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}}),Object.assign(P.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),(new d).setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(t){return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),this.applyToBufferAttribute(t)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,r,n,i,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,n,r,i,a)}}),Xe.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},h.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},Object.assign(xt.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}}),Object.assign(Pt.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}}),Object.assign(Pt,{barycoordFromPoint:function(t,e,r,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Pt.getBarycoord(t,e,r,n,i)},normal:function(t,e,r,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Pt.getNormal(t,e,r,n)}}),Object.assign(ds.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ba(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ja(this,t)}}),Object.assign(l.prototype,{fromAttribute:function(t,e,r){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,r)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(d.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,r){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,r)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(x.prototype,{fromAttribute:function(t,e,r){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,r)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}}),Object.assign(Oe.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}}),Object.assign(Y.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}}),Object.defineProperties(Y.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Object.defineProperties(xi.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),Object.defineProperty(Mi.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}}),bi.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},Object.defineProperty(Wo.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}}),Ue.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==e&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(fs.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(Vt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")}}),Object.assign(se.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addDrawCall:function(t,e,r){void 0!==r&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}}),Object.defineProperties(se.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Object.assign(Fa.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}}),Object.defineProperties(Sc.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}}),Object.defineProperties(Ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Nt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===t}}}),Object.defineProperties(ho.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(Fe.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),Object.assign(Qn.prototype,{clearTarget:function(t,e,r,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,r,n)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}}),Object.defineProperties(Qn.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}}}),Object.defineProperties(Gn.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Ve.prototype,{activeCubeFace:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")}},activeMipMapLevel:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")}}}),Object.defineProperties(b.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),Object.defineProperties(Jn.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}},userHeight:{set:function(){console.warn("THREE.WebVRManager: .userHeight has been removed.")}}}),nc.prototype.load=function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var e=this;return(new js).load(t,(function(t){e.setBuffer(t)})),this},lc.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},He.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};var Ll={merge:function(t,e,r){var n;console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),n=e.matrix,e=e.geometry),t.merge(e,n,r)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}};g.crossOrigin=void 0,g.loadTexture=function(t,e,r,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var i=new ko;i.setCrossOrigin(this.crossOrigin);var a=i.load(t,r,void 0,n);return e&&(a.mapping=e),a},g.loadTextureCube=function(t,e,r,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var i=new jo;i.setCrossOrigin(this.crossOrigin);var a=i.load(t,r,void 0,n);return e&&(a.mapping=e),a},g.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},g.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};var Rl={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};t.ACESFilmicToneMapping=5,t.AddEquation=100,t.AddOperation=2,t.AdditiveBlending=2,t.AlphaFormat=1021,t.AlwaysDepth=1,t.AlwaysStencilFunc=519,t.AmbientLight=Ss,t.AmbientLightProbe=Xs,t.AnimationClip=Co,t.AnimationLoader=Go,t.AnimationMixer=Mc,t.AnimationObjectGroup=wc,t.AnimationUtils=yo,t.ArcCurve=Xo,t.ArrayCamera=kn,t.ArrowHelper=Ml,t.Audio=nc,t.AudioAnalyser=lc,t.AudioContext=Vs,t.AudioListener=rc,t.AudioLoader=js,t.AxesHelper=Sl,t.AxisHelper=function(t){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Sl(t)},t.BackSide=1,t.BasicDepthPacking=3200,t.BasicShadowMap=0,t.BinaryTextureLoader=function(t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Ho(t)},t.Bone=Si,t.BooleanKeyframeTrack=So,t.BoundingBoxHelper=function(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new vl(t,e)},t.Box2=Oc,t.Box3=ct,t.Box3Helper=yl,t.BoxBufferGeometry=Ne,t.BoxGeometry=De,t.BoxHelper=vl,t.BufferAttribute=Vt,t.BufferGeometry=se,t.BufferGeometryLoader=Ps,t.ByteType=1010,t.Cache=Do,t.Camera=Ge,t.CameraHelper=fl,t.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},t.CanvasTexture=Wi,t.CatmullRomCurve3=$o,t.CineonToneMapping=4,t.CircleBufferGeometry=io,t.CircleGeometry=no,t.ClampToEdgeWrapping=1001,t.Clock=Qs,t.ClosedSplineCurve3=Tl,t.Color=Nt,t.ColorKeyframeTrack=To,t.CompressedTexture=ki,t.CompressedTextureLoader=Uo,t.ConeBufferGeometry=ro,t.ConeGeometry=eo,t.CubeCamera=He,t.CubeGeometry=De,t.CubeReflectionMapping=301,t.CubeRefractionMapping=302,t.CubeTexture=mr,t.CubeTextureLoader=jo,t.CubeUVReflectionMapping=306,t.CubeUVRefractionMapping=307,t.CubicBezierCurve=ns,t.CubicBezierCurve3=is,t.CubicInterpolant=bo,t.CullFaceBack=1,t.CullFaceFront=2,t.CullFaceFrontBack=3,t.CullFaceNone=0,t.Curve=Wo,t.CurvePath=us,t.CustomBlending=5,t.CylinderBufferGeometry=to,t.CylinderGeometry=$a,t.Cylindrical=Pc,t.DataTexture=je,t.DataTexture2DArray=gr,t.DataTexture3D=vr,t.DataTextureLoader=Ho,t.DecrementStencilOp=7683,t.DecrementWrapStencilOp=34056,t.DefaultLoadingManager=Io,t.DepthFormat=1026,t.DepthStencilFormat=1027,t.DepthTexture=qi,t.DirectionalLight=Ms,t.DirectionalLightHelper=ul,t.DirectionalLightShadow=_s,t.DiscreteInterpolant=_o,t.DodecahedronBufferGeometry=aa,t.DodecahedronGeometry=ia,t.DoubleSide=2,t.DstAlphaFactor=206,t.DstColorFactor=208,t.DynamicBufferAttribute=function(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new Vt(t,e).setDynamic(!0)},t.EdgesGeometry=Ka,t.EdgesHelper=function(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Ni(new Ka(t.geometry),new Ti({color:void 0!==e?e:16777215}))},t.EllipseCurve=qo,t.EqualDepth=4,t.EqualStencilFunc=514,t.EquirectangularReflectionMapping=303,t.EquirectangularRefractionMapping=304,t.Euler=D,t.EventDispatcher=e,t.ExtrudeBufferGeometry=Fa,t.ExtrudeGeometry=Ba,t.Face3=Ft,t.Face4=function(t,e,r,n,i,a,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Ft(t,e,r,i,a,o)},t.FaceColors=1,t.FaceNormalsHelper=sl,t.FileLoader=Fo,t.FlatShading=1,t.Float32Attribute=function(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new Zt(t,e)},t.Float32BufferAttribute=Zt,t.Float64Attribute=function(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Qt(t,e)},t.Float64BufferAttribute=Qt,t.FloatType=1015,t.Fog=$n,t.FogExp2=Kn,t.Font=Gs,t.FontLoader=Hs,t.FrontFaceDirectionCCW=1,t.FrontFaceDirectionCW=0,t.FrontSide=0,t.Frustum=Ze,t.GammaEncoding=3007,t.Geometry=Oe,t.GeometryUtils=Ll,t.GreaterDepth=6,t.GreaterEqualDepth=5,t.GreaterEqualStencilFunc=518,t.GreaterStencilFunc=516,t.GridHelper=el,t.Group=jn,t.HalfFloatType=1016,t.HemisphereLight=ms,t.HemisphereLightHelper=$c,t.HemisphereLightProbe=qs,t.IcosahedronBufferGeometry=na,t.IcosahedronGeometry=ra,t.ImageBitmapLoader=Bs,t.ImageLoader=Vo,t.ImageUtils=g,t.ImmediateRenderObject=zc,t.IncrementStencilOp=7682,t.IncrementWrapStencilOp=34055,t.InstancedBufferAttribute=Rs,t.InstancedBufferGeometry=Ls,t.InstancedInterleavedBuffer=Tc,t.Int16Attribute=function(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new qt(t,e)},t.Int16BufferAttribute=qt,t.Int32Attribute=function(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Yt(t,e)},t.Int32BufferAttribute=Yt,t.Int8Attribute=function(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new jt(t,e)},t.Int8BufferAttribute=jt,t.IntType=1013,t.InterleavedBuffer=ti,t.InterleavedBufferAttribute=ei,t.Interpolant=xo,t.InterpolateDiscrete=2300,t.InterpolateLinear=2301,t.InterpolateSmooth=2302,t.InvertStencilOp=5386,t.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},t.KeepStencilOp=7680,t.KeyframeTrack=Mo,t.LOD=xi,t.LatheBufferGeometry=Ya,t.LatheGeometry=Xa,t.Layers=N,t.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")},t.LessDepth=2,t.LessEqualDepth=3,t.LessEqualStencilFunc=515,t.LessStencilFunc=513,t.Light=fs,t.LightProbe=Ws,t.LightProbeHelper=tl,t.LightShadow=gs,t.Line=Ci,t.Line3=Ic,t.LineBasicMaterial=Ti,t.LineCurve=as,t.LineCurve3=os,t.LineDashedMaterial=go,t.LineLoop=Ii,t.LinePieces=1,t.LineSegments=Ni,t.LineStrip=0,t.LinearEncoding=3e3,t.LinearFilter=1006,t.LinearInterpolant=wo,t.LinearMipMapLinearFilter=1008,t.LinearMipMapNearestFilter=1007,t.LinearMipmapLinearFilter=1008,t.LinearMipmapNearestFilter=1007,t.LinearToneMapping=1,t.Loader=zo,t.LoaderUtils=As,t.LoadingManager=No,t.LogLuvEncoding=3003,t.LoopOnce=2200,t.LoopPingPong=2202,t.LoopRepeat=2201,t.LuminanceAlphaFormat=1025,t.LuminanceFormat=1024,t.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t.Material=Ut,t.MaterialLoader=Es,t.Math=s,t.Matrix3=m,t.Matrix4=P,t.MaxEquation=104,t.Mesh=Te,t.MeshBasicMaterial=Ht,t.MeshDepthMaterial=Bn,t.MeshDistanceMaterial=Fn,t.MeshFaceMaterial=function(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t},t.MeshLambertMaterial=fo,t.MeshMatcapMaterial=mo,t.MeshNormalMaterial=po,t.MeshPhongMaterial=ho,t.MeshPhysicalMaterial=lo,t.MeshStandardMaterial=co,t.MeshToonMaterial=uo,t.MinEquation=103,t.MirroredRepeatWrapping=1002,t.MixOperation=1,t.MultiMaterial=function(t){return void 0===t&&(t=[]),console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t},t.MultiplyBlending=4,t.MultiplyOperation=0,t.NearestFilter=1003,t.NearestMipMapLinearFilter=1005,t.NearestMipMapNearestFilter=1004,t.NearestMipmapLinearFilter=1005,t.NearestMipmapNearestFilter=1004,t.NeverDepth=0,t.NeverStencilFunc=512,t.NoBlending=0,t.NoColors=0,t.NoToneMapping=0,t.NormalBlending=1,t.NotEqualDepth=7,t.NotEqualStencilFunc=517,t.NumberKeyframeTrack=Eo,t.Object3D=Y,t.ObjectLoader=Os,t.ObjectSpaceNormalMap=1,t.OctahedronBufferGeometry=ea,t.OctahedronGeometry=ta,t.OneFactor=201,t.OneMinusDstAlphaFactor=207,t.OneMinusDstColorFactor=209,t.OneMinusSrcAlphaFactor=205,t.OneMinusSrcColorFactor=203,t.OrthographicCamera=ws,t.PCFShadowMap=1,t.PCFSoftShadowMap=2,t.ParametricBufferGeometry=Ji,t.ParametricGeometry=Yi,t.Particle=function(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new mi(t)},t.ParticleBasicMaterial=function(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new zi(t)},t.ParticleSystem=function(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Hi(t,e)},t.ParticleSystemMaterial=function(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new zi(t)},t.Path=ps,t.PerspectiveCamera=Ue,t.Plane=Xe,t.PlaneBufferGeometry=nr,t.PlaneGeometry=rr,t.PlaneHelper=xl,t.PointCloud=function(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Hi(t,e)},t.PointCloudMaterial=function(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new zi(t)},t.PointLight=bs,t.PointLightHelper=Yc,t.Points=Hi,t.PointsMaterial=zi,t.PolarGridHelper=rl,t.PolyhedronBufferGeometry=Qi,t.PolyhedronGeometry=Zi,t.PositionalAudio=cc,t.PositionalAudioHelper=nl,t.PropertyBinding=bc,t.PropertyMixer=hc,t.QuadraticBezierCurve=ss,t.QuadraticBezierCurve3=cs,t.Quaternion=h,t.QuaternionKeyframeTrack=Lo,t.QuaternionLinearInterpolant=Ao,t.REVISION="108",t.RGBADepthPacking=3201,t.RGBAFormat=1023,t.RGBA_ASTC_10x10_Format=37819,t.RGBA_ASTC_10x5_Format=37816,t.RGBA_ASTC_10x6_Format=37817,t.RGBA_ASTC_10x8_Format=37818,t.RGBA_ASTC_12x10_Format=37820,t.RGBA_ASTC_12x12_Format=37821,t.RGBA_ASTC_4x4_Format=37808,t.RGBA_ASTC_5x4_Format=37809,t.RGBA_ASTC_5x5_Format=37810,t.RGBA_ASTC_6x5_Format=37811,t.RGBA_ASTC_6x6_Format=37812,t.RGBA_ASTC_8x5_Format=37813,t.RGBA_ASTC_8x6_Format=37814,t.RGBA_ASTC_8x8_Format=37815,t.RGBA_PVRTC_2BPPV1_Format=35843,t.RGBA_PVRTC_4BPPV1_Format=35842,t.RGBA_S3TC_DXT1_Format=33777,t.RGBA_S3TC_DXT3_Format=33778,t.RGBA_S3TC_DXT5_Format=33779,t.RGBDEncoding=3006,t.RGBEEncoding=3002,t.RGBEFormat=1023,t.RGBFormat=1022,t.RGBM16Encoding=3005,t.RGBM7Encoding=3004,t.RGB_ETC1_Format=36196,t.RGB_PVRTC_2BPPV1_Format=35841,t.RGB_PVRTC_4BPPV1_Format=35840,t.RGB_S3TC_DXT1_Format=33776,t.RawShaderMaterial=so,t.Ray=xt,t.Raycaster=Ec,t.RectAreaLight=Ts,t.RectAreaLightHelper=Jc,t.RedFormat=1028,t.ReinhardToneMapping=2,t.RepeatWrapping=1e3,t.ReplaceStencilOp=7681,t.ReverseSubtractEquation=102,t.RingBufferGeometry=qa,t.RingGeometry=Wa,t.Scene=J,t.SceneUtils=Rl,t.ShaderChunk=Qe,t.ShaderLib=$e,t.ShaderMaterial=Fe,t.ShadowMaterial=oo,t.Shape=ds,t.ShapeBufferGeometry=Za,t.ShapeGeometry=Ja,t.ShapePath=Fs,t.ShapeUtils=Na,t.ShortType=1011,t.Skeleton=Mi,t.SkeletonHelper=Xc,t.SkinnedMesh=bi,t.SmoothShading=2,t.Sphere=ut,t.SphereBufferGeometry=ka,t.SphereGeometry=ja,t.Spherical=Rc,t.SphericalHarmonics3=ks,t.SphericalReflectionMapping=305,t.Spline=Al,t.SplineCurve=ls,t.SplineCurve3=El,t.SpotLight=ys,t.SpotLightHelper=jc,t.SpotLightShadow=vs,t.Sprite=mi,t.SpriteMaterial=ri,t.SrcAlphaFactor=204,t.SrcAlphaSaturateFactor=210,t.SrcColorFactor=202,t.StereoCamera=Zs,t.StringKeyframeTrack=Ro,t.SubtractEquation=101,t.SubtractiveBlending=3,t.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t.TangentSpaceNormalMap=0,t.TetrahedronBufferGeometry=$i,t.TetrahedronGeometry=Ki,t.TextBufferGeometry=Va,t.TextGeometry=Ha,t.Texture=y,t.TextureLoader=ko,t.TorusBufferGeometry=ua,t.TorusGeometry=ha,t.TorusKnotBufferGeometry=la,t.TorusKnotGeometry=ca,t.Triangle=Pt,t.TriangleFanDrawMode=2,t.TriangleStripDrawMode=1,t.TrianglesDrawMode=0,t.TubeBufferGeometry=sa,t.TubeGeometry=oa,t.UVMapping=300,t.Uint16Attribute=function(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new Xt(t,e)},t.Uint16BufferAttribute=Xt,t.Uint32Attribute=function(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Jt(t,e)},t.Uint32BufferAttribute=Jt,t.Uint8Attribute=function(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new kt(t,e)},t.Uint8BufferAttribute=kt,t.Uint8ClampedAttribute=function(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Wt(t,e)},t.Uint8ClampedBufferAttribute=Wt,t.Uncharted2ToneMapping=3,t.Uniform=Sc,t.UniformsLib=Ke,t.UniformsUtils=Be,t.UnsignedByteType=1009,t.UnsignedInt248Type=1020,t.UnsignedIntType=1014,t.UnsignedShort4444Type=1017,t.UnsignedShort5551Type=1018,t.UnsignedShort565Type=1019,t.UnsignedShortType=1012,t.VSMShadowMap=3,t.Vector2=l,t.Vector3=d,t.Vector4=x,t.VectorKeyframeTrack=Po,t.Vertex=function(t,e,r){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new d(t,e,r)},t.VertexColors=2,t.VertexNormalsHelper=Hc,t.VideoTexture=ji,t.WebGLMultisampleRenderTarget=w,t.WebGLRenderTarget=b,t.WebGLRenderTargetCube=Ve,t.WebGLRenderer=Qn,t.WebGLUtils=Vn,t.WireframeGeometry=Xi,t.WireframeHelper=function(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Ni(new Xi(t.geometry),new Ti({color:void 0!==e?e:16777215}))},t.WrapAroundEnding=2402,t.XHRLoader=function(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Fo(t)},t.ZeroCurvatureEnding=2400,t.ZeroFactor=200,t.ZeroSlopeEnding=2401,t.ZeroStencilOp=0,t.sRGBEncoding=3001,Object.defineProperty(t,"__esModule",{value:!0})},"object"===R(l)&&void 0!==t?s(l): true&&r(3)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (s),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):s((o=o||self).THREE={}),l}T.UNSEND=0,T.OPENED=1,T.HEADERS_RECEIVED=2,T.LOADING=3,T.DONE=4}]));

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (false) {}
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).setImmediate))

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(8);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
]]);}