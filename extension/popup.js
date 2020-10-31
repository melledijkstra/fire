/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=m,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&U(e.read)&&U(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,m=!0,_=",",v="\r\n",s='"',a=s+s,i=!1,r=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(_=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(m=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);"boolean"==typeof t.escapeFormulae&&(o=t.escapeFormulae)}();var h=new RegExp(q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,i);if("object"==typeof e[0])return f(r||u(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:u(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function f(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&m){for(var a=0;a<e.length;a++)0<a&&(r+=_),r+=y(e[a],a);0<t.length&&(r+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=_);var g=n&&s?e[p]:p;r+=y(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=v)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===o&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(h,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(_)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=w,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else U(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&U(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(U(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!U(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){U(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(_){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(U(_.step)){var p=_.step;_.step=function(e){if(c=e,m())g();else{if(g(),0===c.data.length)return;i+=e.data.length,_.preview&&i>_.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function v(e){return"greedy"===_.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),_.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return m()&&function(){if(!c)return;function e(e,t){U(_.transformHeader)&&(e=_.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;m()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!_.header&&!_.dynamicTyping&&!_.transform)return c;function e(e,t){var i,r=_.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];_.header&&(n=i>=l.length?"__parsed_extra":l[i]),_.transform&&(s=_.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return _.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);_.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function m(){return _.header&&0===l.length}function y(e,t){return i=e,_.dynamicTypingFunction&&void 0===_.dynamicTyping[i]&&(_.dynamicTyping[i]=_.dynamicTypingFunction(i)),!0===(_.dynamicTyping[i]||_.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=_.quoteChar||'"';if(_.newline||(_.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(q(t)+"([^]*?)"+q(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,_.delimiter)U(_.delimiter)&&(_.delimiter=_.delimiter(e),c.meta.delimiter=_.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new w({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else{var m=p.data[g].length;l+=m,void 0!==o?0<m&&(d+=Math.abs(m-o),o=m):o=m}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(_.delimiter=s),bestDelimiter:s}}(e,_.newline,_.skipEmptyLines,_.comments,_.delimitersToGuess);n.successful?_.delimiter=n.bestDelimiter:(h=!0,_.delimiter=b.DefaultDelimiter),c.meta.delimiter=_.delimiter}var s=E(_);return _.preview&&_.header&&s.preview++,a=e,o=new w(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=U(_.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,U(_.complete)&&_.complete(c),a=""}}function q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=U(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),m=new RegExp(q(z)+q(O),"g"),_=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<g||-1===g)){if(!(p<_)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,_,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,_=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(_=M,M++;;){if(-1===(_=a.indexOf(O,_+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(_===r-1)return E(a.substring(M,_).replace(m,O));if(O!==z||a[_+1]!==z){if(O===z||0===_||a[_-1]!==z){-1!==p&&p<_+1&&(p=a.indexOf(D,_+1)),-1!==g&&g<_+1&&(g=a.indexOf(I,_+1));var y=w(-1===g?p:Math.min(p,g));if(a[_+1+y]===D){f.push(a.substring(M,_).replace(m,O)),a[M=_+1+y+e]!==O&&(_=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=w(g);if(a.substring(_+1+k,_+1+k+n)===I){if(f.push(a.substring(M,_).replace(m,O)),C(_+1+k+n),p=a.indexOf(D,M),_=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),_++}}else _++}return E();function b(e){h.push(e),d=M}function w(e){var t=0;if(-1!==e){var i=a.substring(_+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M)}function R(e){return{data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[]}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function m(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=a[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=E(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function U(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ }),

/***/ "./src/authentication.ts":
/*!*******************************!*\
  !*** ./src/authentication.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToken = exports.retrieveToken = exports.initializeGAPI = void 0;
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
/**
 * Initialize the GAPI environment
 * @param success When client has loaded and retrieval of token is successful
 * @param failure When loading the client failed of retrieval of the token failed
 */
function initializeGAPI(success, failure) {
    gapi.load('client', function () {
        gapi.client.init({
            'apiKey': config_1.default.apiKey,
            'discoveryDocs': config_1.default.discoveryDocs
        }).then(function () {
            retrieveToken(success, failure, false); // retrieve token non-interactively
        }, failure);
    });
}
exports.initializeGAPI = initializeGAPI;
/**
 * Retrieves the token and sets it for the gapi
 * @param success callback when token is successfully retrieved
 * @param failure callback when something went wrong getting the token
 * @param interactive if asking for token should be interactive
 */
function retrieveToken(success, failure, interactive) {
    if (interactive === void 0) { interactive = true; }
    chrome.identity.getAuthToken({ interactive: interactive }, function (token) {
        if (token) {
            gapi.auth.setToken({ access_token: token });
            success === null || success === void 0 ? void 0 : success(token);
        }
        else {
            failure === null || failure === void 0 ? void 0 : failure();
        }
    });
}
exports.retrieveToken = retrieveToken;
function removeToken(callback) {
    var t = gapi.client.getToken();
    if (!t)
        return;
    chrome.identity.removeCachedAuthToken({
        token: t.access_token
    }, callback);
}
exports.removeToken = removeToken;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    apiKey: 'AIzaSyALN20gP4buN-tpLmb9GpSuMQVeqHVJCDE',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
};


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanData = exports.goToOptions = exports.transpose = exports.getKey = void 0;
function getKey(arr, value) {
    var num = Object.keys(arr).find(function (key) { return arr[key] === value; });
    return parseInt(num);
}
exports.getKey = getKey;
function transpose(arr) {
    return Object.keys(arr[0]).map(function (c) { return arr.map(function (r) { return r[c]; }); });
}
exports.transpose = transpose;
function goToOptions() {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    }
    else {
        window.open(chrome.runtime.getURL('options.html'));
    }
}
exports.goToOptions = goToOptions;
function cleanData(data) {
    if (data[data.length - 1].length == 1) {
        data.pop();
    }
}
exports.cleanData = cleanData;


/***/ }),

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var papaparse_1 = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
var sheets_1 = __webpack_require__(/*! ./sheets */ "./src/sheets.ts");
var H = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
var authentication_1 = __webpack_require__(/*! ./authentication */ "./src/authentication.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/storage.ts");
var ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
var inputFile = document.getElementById('inputFile');
var inSettingsProfile = document.getElementById('settingsProfile');
var statusElem = document.getElementById('status');
var importForm = document.getElementById('importForm');
var setStatus = function (status) {
    statusElem.innerText = status;
};
// runs when DOM is loaded
(function () {
    authentication_1.initializeGAPI(function () {
        console.log('gapi initialized and token retrieved');
        document.querySelectorAll('[disabled]').forEach(function (elem) { return elem.disabled = false; });
    }, function (error) {
        console.log('error', error);
        setStatus('Not authorized, go to options page to authorize this app');
        showConfigureButton();
    });
    storage_1.settingsFromStorage(function (settings) {
        Object.keys(settings.profiles).forEach(function (key) {
            ui_1.addOption(inSettingsProfile, key, settings.profiles[key]);
        });
    });
})();
var showConfigureButton = function () {
    var _a;
    var btn = document.createElement('button');
    btn.innerText = '➡ Configure in options ⚙️';
    btn.className = 'pure-button button-warning';
    btn.addEventListener('click', H.goToOptions);
    (_a = statusElem.parentNode) === null || _a === void 0 ? void 0 : _a.append(btn);
};
/**
 * This function corrects the columns from a matrix where the first row are the headers of the data.
 * it makes sure the desired headers will be left over in the end with the corresponding data from the original matrix
 * @param correctHeaders A list of string representing the header in the desired way
 * @param data The matrix of data where the first row are headings (incorrect headings!)
 */
var switchColumns = function (correctHeaders, // the correct order of columns
data // the matrix of data retrieved from CSV
) {
    var CSVheaders = data.shift(); // get the columns from the data (these are not in correct order yet!)
    var rowCount = data.length;
    data = H.transpose(data); // transpose so its easier to work with the matrix data
    console.log(data);
    var corrData = []; // prepare our correct matrix (this will store the data with correct columns)
    correctHeaders.forEach(function (header) {
        console.log(header, CSVheaders === null || CSVheaders === void 0 ? void 0 : CSVheaders.includes(header));
        if (CSVheaders === null || CSVheaders === void 0 ? void 0 : CSVheaders.includes(header)) {
            // if header exists get the rows corresponding to this header and add it to the correct matrix
            corrData.push(data[H.getKey(CSVheaders, header)]);
        }
        else {
            corrData.push(new Array(rowCount).fill("")); // add empty array when header doesn't exist
            // this is done so that the desired length is kept while going trough the desired headings
        }
    });
    console.log(corrData);
    // transpose back into original state
    corrData = H.transpose(corrData);
    console.log(corrData);
    return corrData;
};
var importRowsToSheets = function (file, spreadsheetId, sheetId, columnOrder, doAutoFill) {
    console.debug('do autofill?', doAutoFill);
    papaparse_1.parse(file, {
        complete: function (results) { return __awaiter(void 0, void 0, void 0, function () {
            var data, batchUpdateRequest;
            var _a;
            return __generator(this, function (_b) {
                data = results.data;
                console.log(data);
                H.cleanData(data);
                console.log(data);
                data = switchColumns(columnOrder, data);
                batchUpdateRequest = {
                    requests: [
                        { insertDimension: sheets_1.buildInsertRowsRequest(sheetId, data.length) },
                    ]
                };
                if (doAutoFill) {
                    batchUpdateRequest.requests = (_a = batchUpdateRequest.requests) === null || _a === void 0 ? void 0 : _a.concat([
                        { autoFill: sheets_1.buildAutoFillRequest(sheetId, data.length, 8) },
                        { autoFill: sheets_1.buildAutoFillRequest(sheetId, data.length, 13) },
                    ]);
                }
                console.debug(doAutoFill, batchUpdateRequest);
                gapi.client.sheets.spreadsheets.batchUpdate({ spreadsheetId: spreadsheetId }, batchUpdateRequest)
                    .then(function (response) { return gapi.client.sheets.spreadsheets.values.update(sheets_1.buildInsertDataRequest(spreadsheetId, data)); }).then(function (response) {
                    console.debug(response.result);
                    var _a = response.result, updatedRows = _a.updatedRows, updatedColumns = _a.updatedColumns, updatedCells = _a.updatedCells;
                    setStatus("rows: " + updatedRows + ", cols: " + updatedColumns + " added and " + updatedCells + " cells updated.");
                });
                return [2 /*return*/];
            });
        }); },
        error: function (error) {
            console.log(error);
            setStatus(error.message);
        }
    });
};
importForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputFile.files == null) {
        return;
    }
    var file = inputFile.files[0];
    storage_1.settingsFromStorage(function (settings) {
        var selectedProfile = inSettingsProfile.options.item(inSettingsProfile.selectedIndex);
        if (!(selectedProfile && selectedProfile.innerText in settings.profiles)) {
            setStatus('Profile does not exist!');
            return;
        }
        var columnOrder = settings.profiles[selectedProfile.innerText]
            .split(',')
            .map(function (s) { return s.trim(); });
        importRowsToSheets(file, settings.spreadsheetId, settings.sheetId, columnOrder, settings.autoFill);
    });
});


/***/ }),

/***/ "./src/sheets.ts":
/*!***********************!*\
  !*** ./src/sheets.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSheetNames = exports.buildInsertRowsRequest = exports.buildAutoFillRequest = exports.buildInsertDataRequest = void 0;
function buildInsertDataRequest(spreadsheetId, rows) {
    return {
        spreadsheetId: spreadsheetId,
        range: "A2:" + (rows.length + 1),
        valueInputOption: "USER_ENTERED",
        resource: {
            values: rows
        }
    };
}
exports.buildInsertDataRequest = buildInsertDataRequest;
function buildAutoFillRequest(sheetId, length, columnIndex) {
    return {
        useAlternateSeries: false,
        sourceAndDestination: {
            source: {
                sheetId: sheetId,
                startRowIndex: 1,
                endRowIndex: length + 1,
                startColumnIndex: columnIndex,
                endColumnIndex: columnIndex
            },
            dimension: "ROWS",
            fillLength: -length // autofill up with the length of the given data
        }
    };
}
exports.buildAutoFillRequest = buildAutoFillRequest;
function buildInsertRowsRequest(sheetId, amount) {
    return {
        range: {
            sheetId: sheetId,
            dimension: "ROWS",
            startIndex: 1,
            endIndex: amount + 1
        }
    };
}
exports.buildInsertRowsRequest = buildInsertRowsRequest;
function getSheetNames(spreadsheetId) {
    return gapi.client.sheets.spreadsheets.get({
        spreadsheetId: spreadsheetId
    });
}
exports.getSheetNames = getSheetNames;


/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSettings = exports.settingsFromStorage = void 0;
exports.settingsFromStorage = function (fn) {
    chrome.storage.sync.get(['spreadsheetId', 'sheetId', 'profiles', 'autoFill'], function (items) {
        return fn({
            spreadsheetId: items.spreadsheetId,
            sheetId: items.sheetId,
            profiles: items.profiles || {},
            autoFill: items.autoFill,
        });
    });
};
exports.saveSettings = function (settings, fn) { return chrome.storage.sync.set(settings, fn); };


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addOption = exports.removeOptions = void 0;
exports.removeOptions = function (selectElement) {
    var l = selectElement.options.length;
    for (var i = l - 1; i >= 0; i--) {
        selectElement.options.remove(i);
    }
};
exports.addOption = function (selectElement, title, value, name) {
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(title));
    if (name) {
        opt.setAttribute('name', name);
    }
    opt.value = String(value);
    selectElement.appendChild(opt);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9hdXRoZW50aWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hlZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFxQyxDQUFDLGlDQUFPLEVBQUUsb0NBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSxvR0FBQyxDQUFDLFNBQWtGLENBQUMsbUJBQW1CLGFBQWEsc0ZBQXNGLHFFQUFxRSxnQkFBZ0IsUUFBUSxvQkFBb0IsY0FBYyxvQkFBb0IscUNBQXFDLEVBQUUsOEZBQThGLGlCQUFpQixpQ0FBaUMsZ0hBQWdILElBQUksdUJBQXVCLHVCQUF1QixRQUFRLHdDQUF3QyxHQUFHLCtNQUErTSwrQkFBK0IsRUFBRSxXQUFXLG9MQUFvTCxtQkFBbUIsdUJBQXVCLDBEQUEwRCxZQUFZLDZCQUE2QixrRUFBa0Usa0NBQWtDLDBCQUEwQixpR0FBaUcsNEZBQTRGLDBDQUEwQyw4Q0FBOEMseUNBQXlDLDZCQUE2QixtRUFBbUUsWUFBWSwwQ0FBMEMseURBQXlELEdBQUcsMkJBQTJCLHNDQUFzQyxxQkFBcUIscURBQXFELGtEQUFrRCxtVUFBbVUsMERBQTBELGNBQWMsK0JBQStCLFNBQVMseUJBQXlCLFNBQVMsa0JBQWtCLFNBQVMsNEVBQTRFLDBEQUEwRCxTQUFTLFlBQVksV0FBVyw2QkFBNkIsbUJBQW1CLFlBQVksV0FBVyxLQUFLLG1GQUFtRiwwR0FBMEcsaUJBQWlCLElBQUksS0FBSyxlQUFlLGdCQUFnQix5QkFBeUIsT0FBTyxZQUFZLElBQUksS0FBSyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixxQ0FBcUMsU0FBUyxnQkFBZ0Isb0JBQW9CLDZEQUE2RCxxRUFBcUUsOEhBQThILFlBQVksV0FBVyxtQ0FBbUMsU0FBUyxxRkFBcUYsb0JBQW9CLHNaQUFzWixlQUFlLHVCQUF1QixrQkFBa0IsTUFBTSw2QkFBNkIsOEpBQThKLFlBQVksb0JBQW9CLFlBQVksNERBQTRELElBQUksRUFBRSxXQUFXLGFBQWEsaUJBQWlCLG1CQUFtQixnQkFBZ0IsbUNBQW1DLHVCQUF1Qix3R0FBd0csT0FBTyxTQUFTLHFDQUFxQyxrRkFBa0YsbUNBQW1DLGdDQUFnQyxzQ0FBc0Msa0NBQWtDLGtDQUFrQyxpQ0FBaUMsYUFBYSxvQkFBb0IsY0FBYywrTkFBK04sMEJBQTBCLGFBQWEsV0FBVyxzRUFBc0UsNkRBQTZELDRDQUE0Qyx3REFBd0QsdUNBQXVDLGtCQUFrQixxQ0FBcUMsMEJBQTBCLHFCQUFxQiw0REFBNEQsb0RBQW9ELG9CQUFvQixnSUFBZ0ksaUZBQWlGLG9CQUFvQiwwQ0FBMEMsRUFBRSxtQ0FBbUMsaUhBQWlILHNDQUFzQyw0WkFBNFosZ0JBQWdCLDZCQUE2QixrRkFBa0YseUNBQXlDLEdBQUcsY0FBYyxNQUFNLFFBQVEseUZBQXlGLHNDQUFzQyxZQUFZLGtCQUFrQix5QkFBeUIsZ0NBQWdDLDRCQUE0QixzQ0FBc0MsS0FBSyw0UkFBNFIsMENBQTBDLDBDQUEwQywyQkFBMkIsMkNBQTJDLHVEQUF1RCxJQUFJLHlDQUF5QyxTQUFTLDRCQUE0QixxQ0FBcUMsOEJBQThCLHFOQUFxTiwyQ0FBMkMscUJBQXFCLG1EQUFtRCxzQ0FBc0MsOEJBQThCLHNCQUFzQiwrQkFBK0IsY0FBYyxRQUFRLFFBQVEsMkRBQTJELHFDQUFxQyx3QkFBd0IscUxBQXFMLDRCQUE0QixnR0FBZ0csNEJBQTRCLGtCQUFrQiwyQkFBMkIsb0VBQW9FLDBCQUEwQiw0Q0FBNEMsc0JBQXNCLFFBQVEsVUFBVSxFQUFFLCtCQUErQiwySUFBMkksNkJBQTZCLDBCQUEwQixjQUFjLE1BQU0sbUJBQW1CLDBCQUEwQiw2QkFBNkIsNEJBQTRCLG9CQUFvQiwrQkFBK0IsaUdBQWlHLGNBQWMsbUJBQW1CLEVBQUUsbUJBQW1CLHNCQUFzQiw0REFBNEQsd0JBQXdCLDhEQUE4RCx5QkFBeUIsc0lBQXNJLGtDQUFrQyxxQ0FBcUMsNEJBQTRCLGlFQUFpRSxnQ0FBZ0MsSUFBSSw0SEFBNEgsU0FBUyxzQkFBc0IsdUNBQXVDLHlDQUF5QyxvQ0FBb0MsZ0RBQWdELHdDQUF3Qyw0SkFBNEosT0FBTyxjQUFjLHlGQUF5RixFQUFFLHlFQUF5RSxFQUFFLG9FQUFvRSxFQUFFLDBGQUEwRiwyQkFBMkIsY0FBYyxhQUFhLG1CQUFtQixlQUFlLEtBQUssZ0NBQWdDLDhFQUE4RSxjQUFjLHVGQUF1RixhQUFhLDRGQUE0Riw0RUFBNEUsZ0JBQWdCLHVDQUF1Qyx1QkFBdUIsYUFBYSxnQkFBZ0IsMkRBQTJELDZCQUE2QixZQUFZLHFCQUFxQix5QkFBeUIsbUJBQW1CLHVCQUF1QixjQUFjLDBEQUEwRCxnQkFBZ0IsbUJBQW1CLElBQUksUUFBUSxXQUFXLEtBQUssZUFBZSxvSkFBb0osb1BBQW9QLFFBQVEsbUdBQW1HLG9DQUFvQyxjQUFjLEdBQUcsYUFBYSw4QkFBOEIsZ0JBQWdCLDJOQUEyTixjQUFjLG9CQUFvQixxQkFBcUIsU0FBUyx5REFBeUQsTUFBTSxvQkFBb0IsT0FBTyx5QkFBeUIsdUNBQXVDLDJCQUEyQix1QkFBdUIsdUNBQXVDLHlCQUF5QixtSUFBbUksOEJBQThCLGdCQUFnQixXQUFXLHdCQUF3QixpQ0FBaUMsa0dBQWtHLEtBQUssMEJBQTBCLFlBQVkscUJBQXFCLDJCQUEyQixZQUFZLFdBQVcsS0FBSyx1QkFBdUIsU0FBUyxpQkFBaUIsNENBQTRDLGVBQWUsZ0JBQWdCLDJCQUEyQixLQUFLLHVCQUF1QixnREFBZ0QsbUdBQW1HLE9BQU8sOENBQThDLDhEQUE4RCw0R0FBNEcsV0FBVywrRUFBK0UsTUFBTSxXQUFXLEtBQUssTUFBTSxZQUFZLHdCQUF3QixTQUFTLHVCQUF1Qiw2REFBNkQsd0JBQXdCLDZFQUE2RSx5QkFBeUIsU0FBUyx1QkFBdUIsb0VBQW9FLGNBQWMsMkJBQTJCLG9CQUFvQixjQUFjLGdCQUFnQixnSEFBZ0gsc0tBQXNLLG1IQUFtSCxhQUFhLDJCQUEyQixnRUFBZ0UsNEVBQTRFLGlCQUFpQixpQ0FBaUMseUJBQXlCLFdBQVcsS0FBSyxpREFBaUQscUJBQXFCLDZCQUE2QixNQUFNLHVDQUF1QyxtQkFBbUIsd0NBQXdDLFdBQVcsd0ZBQXdGLHlEQUF5RCxxQkFBcUIsd0NBQXdDLEtBQUssMEJBQTBCLFdBQVcsZ0RBQWdELFNBQVMsZUFBZSw0QkFBNEIsOEVBQThFLFVBQVUsZ0JBQWdCLHlEQUF5RCwrQkFBK0Isa0JBQWtCLEVBQUUsK0NBQStDLDRGQUE0RixNQUFNLG1EQUFtRCxzQkFBc0IsNkJBQTZCLHdFQUF3RSxnQ0FBZ0MsaUJBQWlCLDZHQUE2RyxNQUFNLFdBQVcsbUNBQW1DLDRHQUE0RywrQkFBK0IsTUFBTSxRQUFRLDhHQUE4RyxPQUFPLFNBQVMsV0FBVyxjQUFjLGNBQWMsY0FBYyxRQUFRLFdBQVcseUJBQXlCLCtCQUErQixTQUFTLGNBQWMseUVBQXlFLGNBQWMsK0JBQStCLGNBQWMsT0FBTyxzQkFBc0Isa0VBQWtFLGFBQWEsaUJBQWlCLGtCQUFrQixPQUFPLG9DQUFvQyxvQkFBb0IsNEJBQTRCLHFCQUFxQixtQkFBbUIscUNBQXFDLFFBQVEsMkJBQTJCLFVBQVUsdUJBQXVCLEtBQUssOEJBQThCLFVBQVUsY0FBYyxrQ0FBa0MsdUNBQXVDLG1DQUFtQyxPQUFPLGlCQUFpQixtQkFBbUIsd0JBQXdCLFlBQVksRUFBRSxtQkFBbUIsa0JBQWtCLFlBQVksc0NBQXNDLG1FQUFtRSxRQUFRLEtBQUssaUJBQWlCLHdFQUF3RSx3Q0FBd0MsZ0JBQWdCLFdBQVcsK0RBQStELGFBQWEsb0NBQW9DLGNBQWMseUNBQXlDLDZCQUE2Qiw0QkFBNEIsU0FBUyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixjQUFjLDJCQUEyQixtQ0FBbUMsYUFBYSxrREFBa0QsMkNBQTJDLG1FQUFtRSxFQUFFLG9FQUFvRSxnQ0FBZ0Msa0JBQWtCLDJDQUEyQyxHQUFHLGdPQUFnTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOcHRsQixzRUFBNkI7QUFFN0I7Ozs7R0FJRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxPQUFvQixFQUFFLE9BQStCO0lBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsUUFBUSxFQUFFLGdCQUFNLENBQUMsTUFBTTtZQUN2QixlQUFlLEVBQUUsZ0JBQU0sQ0FBQyxhQUFhO1NBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQUM3RSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsd0NBU0M7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxPQUFpQyxFQUFFLE9BQW9CLEVBQUUsV0FBa0I7SUFBbEIsZ0RBQWtCO0lBQ3ZHLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsV0FBVyxlQUFFLEVBQUUsVUFBQyxLQUFLO1FBQ2xELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQXVDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbEYsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFHLEtBQUssRUFBQztTQUNqQjthQUFNO1lBQ0wsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxHQUFJO1NBQ1o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFURCxzQ0FTQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxRQUFxQjtJQUMvQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTztJQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUM7UUFDcEMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZO0tBQ3RCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDZixDQUFDO0FBTkQsa0NBTUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRCxrQkFBZTtJQUNYLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakQsYUFBYSxFQUFFLENBQUMsMERBQTBELENBQUM7Q0FDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRCxTQUFnQixNQUFNLENBQUMsR0FBYSxFQUFFLEtBQWE7SUFDL0MsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssVUFBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBbEIsQ0FBa0IsQ0FBRTtJQUNsRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDeEIsQ0FBQztBQUhELHdCQUdDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQVk7SUFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU0sSUFBTyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztBQUN6RixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXO0lBQ3ZCLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7UUFDL0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUNwQztTQUFNO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFORCxrQ0FNQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFXO0lBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNuQyxJQUFJLENBQUMsR0FBRyxFQUFFO0tBQ2I7QUFDTCxDQUFDO0FBSkQsOEJBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxvR0FBaUM7QUFDakMsc0VBQStGO0FBQy9GLGlFQUE4QjtBQUM5Qiw4RkFBaUQ7QUFDakQseUVBQStDO0FBQy9DLDBEQUFnQztBQUVoQyxJQUFNLFNBQVMsR0FBdUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUU7QUFDM0YsSUFBTSxpQkFBaUIsR0FBeUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBRTtBQUMzRyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRTtBQUNyRCxJQUFNLFVBQVUsR0FBcUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUU7QUFFM0YsSUFBTSxTQUFTLEdBQUcsVUFBQyxNQUFjO0lBQzdCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTTtBQUNqQyxDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLENBQUM7SUFDRywrQkFBYyxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztRQUNuRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQW1CLElBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUF6QyxDQUF5QyxDQUFDO0lBQ3hHLENBQUMsRUFBRSxVQUFDLEtBQUs7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDM0IsU0FBUyxDQUFDLDBEQUEwRCxDQUFDO1FBQ3JFLG1CQUFtQixFQUFFO0lBQ3pCLENBQUMsQ0FBQztJQUNGLDZCQUFtQixDQUFDLFVBQUMsUUFBUTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRztZQUN0QyxjQUFTLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsRUFBRTtBQUVKLElBQU0sbUJBQW1CLEdBQUc7O0lBQ3hCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsMkJBQTJCO0lBQzNDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsNEJBQTRCO0lBQzVDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUM1QyxnQkFBVSxDQUFDLFVBQVUsMENBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQztBQUN0QyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxJQUFNLGFBQWEsR0FBRyxVQUNsQixjQUF3QixFQUFFLCtCQUErQjtBQUN6RCxJQUFnQixDQUFDLHdDQUF3Qzs7SUFFekQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFDLHNFQUFzRTtJQUN0RyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTtJQUM1QixJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyx1REFBdUQ7SUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFakIsSUFBSSxRQUFRLEdBQWUsRUFBRSxFQUFDLDZFQUE2RTtJQUMzRyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNqRCxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLENBQUMsTUFBTSxHQUFHO1lBQzlCLDhGQUE4RjtZQUM5RixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLDRDQUE0QztZQUN4RiwwRkFBMEY7U0FDN0Y7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCLHFDQUFxQztJQUNyQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDckIsT0FBTyxRQUFRO0FBQ25CLENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHLFVBQ3ZCLElBQVUsRUFDVixhQUFxQixFQUNyQixPQUFlLEVBQ2YsV0FBcUIsRUFDckIsVUFBbUI7SUFFbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO0lBQ3pDLGlCQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1IsUUFBUSxFQUFFLFVBQU8sT0FBTzs7OztnQkFDaEIsSUFBSSxHQUFVLE9BQU8sQ0FBQyxJQUFJO2dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDakIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7Z0JBRW5DLGtCQUFrQixHQUFxRDtvQkFDdkUsUUFBUSxFQUFFO3dCQUNOLEVBQUUsZUFBZSxFQUFFLCtCQUFzQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7cUJBQ3BFO2lCQUNKO2dCQUVELElBQUksVUFBVSxFQUFFO29CQUNaLGtCQUFrQixDQUFDLFFBQVEsU0FBRyxrQkFBa0IsQ0FBQyxRQUFRLDBDQUFFLE1BQU0sQ0FBQzt3QkFDOUQsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQzNELEVBQUUsUUFBUSxFQUFFLDZCQUFvQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3FCQUMvRCxDQUFDO2lCQUNMO2dCQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUMsYUFBYSxpQkFBQyxFQUFFLGtCQUFrQixDQUFDO3FCQUMvRSxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssV0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzdELCtCQUFzQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FDOUMsRUFGbUIsQ0FFbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7b0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN4QixTQUFnRCxRQUFRLENBQUMsTUFBTSxFQUE3RCxXQUFXLG1CQUFFLGNBQWMsc0JBQUUsWUFBWSxrQkFBb0I7b0JBQ3JFLFNBQVMsQ0FBQyxXQUFTLFdBQVcsZ0JBQVcsY0FBYyxtQkFBYyxZQUFZLG9CQUFpQixDQUFDO2dCQUN2RyxDQUFDLENBQUM7OzthQUNMO1FBQ0QsS0FBSyxFQUFFLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2xCLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUU7SUFDbEIsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtRQUN6QixPQUFPO0tBQ1Y7SUFDRCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3Qiw2QkFBbUIsQ0FBQyxVQUFDLFFBQVE7UUFDekIsSUFBSSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDckYsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RFLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQztZQUNwQyxPQUFNO1NBQ1Q7UUFDRCxJQUFJLFdBQVcsR0FBYSxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7YUFDbkUsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQztRQUN2QixrQkFBa0IsQ0FDZCxJQUFJLEVBQ0osUUFBUSxDQUFDLGFBQWEsRUFDdEIsUUFBUSxDQUFDLE9BQU8sRUFDaEIsV0FBVyxFQUNYLFFBQVEsQ0FBQyxRQUFRLENBQ3BCO0lBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEpGLFNBQWdCLHNCQUFzQixDQUFDLGFBQXFCLEVBQUUsSUFBYTtJQUN2RSxPQUFPO1FBQ0gsYUFBYTtRQUNiLEtBQUssRUFBRSxTQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFO1FBQzlCLGdCQUFnQixFQUFFLGNBQWM7UUFDaEMsUUFBUSxFQUFFO1lBQ04sTUFBTSxFQUFFLElBQUk7U0FDZjtLQUNKLENBQUM7QUFDTixDQUFDO0FBVEQsd0RBU0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxPQUFlLEVBQUUsTUFBYyxFQUFFLFdBQW1CO0lBQ3JGLE9BQU87UUFDSCxrQkFBa0IsRUFBRSxLQUFLO1FBQ3pCLG9CQUFvQixFQUFFO1lBQ2xCLE1BQU0sRUFBRTtnQkFDSixPQUFPO2dCQUNQLGFBQWEsRUFBRSxDQUFDO2dCQUNoQixXQUFXLEVBQUUsTUFBTSxHQUFHLENBQUM7Z0JBQ3ZCLGdCQUFnQixFQUFFLFdBQVc7Z0JBQzdCLGNBQWMsRUFBRSxXQUFXO2FBQzlCO1lBQ0QsU0FBUyxFQUFFLE1BQU07WUFDakIsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLGdEQUFnRDtTQUN2RTtLQUNKO0FBQ0wsQ0FBQztBQWZELG9EQWVDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQ2xDLE9BQWUsRUFDZixNQUFjO0lBRWQsT0FBTztRQUNILEtBQUssRUFBRTtZQUNILE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sR0FBRyxDQUFDO1NBQ3ZCO0tBQ0o7QUFDTCxDQUFDO0FBWkQsd0RBWUM7QUFFRCxTQUFnQixhQUFhLENBQUMsYUFBcUI7SUFDL0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLGFBQWE7S0FDaEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUpELHNDQUlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNZLDJCQUFtQixHQUFHLFVBQUMsRUFBZ0M7SUFDaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsVUFBQyxLQUFLO1FBQ2hGLFNBQUUsQ0FBQztZQUNDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRTtZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsQ0FBQztJQUxGLENBS0UsQ0FDTCxDQUFDO0FBQ04sQ0FBQztBQUVZLG9CQUFZLEdBQUcsVUFBQyxRQUFrQixFQUFFLEVBQWMsSUFBSyxhQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFyQyxDQUFxQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2I1RixxQkFBYSxHQUFHLFVBQUMsYUFBZ0M7SUFDMUQsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25DO0FBQ0wsQ0FBQztBQUVZLGlCQUFTLEdBQUcsVUFDckIsYUFBc0QsRUFDdEQsS0FBYSxFQUNiLEtBQVUsRUFDVixJQUFhO0lBRWIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDMUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLElBQUksSUFBSSxFQUFFO1FBQ04sR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0tBQ2pDO0lBQ0QsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pCLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ2xDLENBQUMiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wb3B1cC50c1wiKTtcbiIsIi8qIEBsaWNlbnNlXG5QYXBhIFBhcnNlXG52NS4zLjBcbmh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2VcbkxpY2Vuc2U6IE1JVFxuKi9cbiFmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuUGFwYT10KCl9KHRoaXMsZnVuY3Rpb24gcygpe1widXNlIHN0cmljdFwiO3ZhciBmPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwIT09Zj9mOnt9O3ZhciBuPSFmLmRvY3VtZW50JiYhIWYucG9zdE1lc3NhZ2Usbz1uJiYvYmxvYjovaS50ZXN0KChmLmxvY2F0aW9ufHx7fSkucHJvdG9jb2wpLGE9e30saD0wLGI9e3BhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9KHQ9dHx8e30pLmR5bmFtaWNUeXBpbmd8fCExO1UoaSkmJih0LmR5bmFtaWNUeXBpbmdGdW5jdGlvbj1pLGk9e30pO2lmKHQuZHluYW1pY1R5cGluZz1pLHQudHJhbnNmb3JtPSEhVSh0LnRyYW5zZm9ybSkmJnQudHJhbnNmb3JtLHQud29ya2VyJiZiLldPUktFUlNfU1VQUE9SVEVEKXt2YXIgcj1mdW5jdGlvbigpe2lmKCFiLldPUktFUlNfU1VQUE9SVEVEKXJldHVybiExO3ZhciBlPShpPWYuVVJMfHxmLndlYmtpdFVSTHx8bnVsbCxyPXMudG9TdHJpbmcoKSxiLkJMT0JfVVJMfHwoYi5CTE9CX1VSTD1pLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCIoXCIscixcIikoKTtcIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSkpLHQ9bmV3IGYuV29ya2VyKGUpO3ZhciBpLHI7cmV0dXJuIHQub25tZXNzYWdlPW0sdC5pZD1oKyssYVt0LmlkXT10fSgpO3JldHVybiByLnVzZXJTdGVwPXQuc3RlcCxyLnVzZXJDaHVuaz10LmNodW5rLHIudXNlckNvbXBsZXRlPXQuY29tcGxldGUsci51c2VyRXJyb3I9dC5lcnJvcix0LnN0ZXA9VSh0LnN0ZXApLHQuY2h1bms9VSh0LmNodW5rKSx0LmNvbXBsZXRlPVUodC5jb21wbGV0ZSksdC5lcnJvcj1VKHQuZXJyb3IpLGRlbGV0ZSB0Lndvcmtlcix2b2lkIHIucG9zdE1lc3NhZ2Uoe2lucHV0OmUsY29uZmlnOnQsd29ya2VySWQ6ci5pZH0pfXZhciBuPW51bGw7Yi5OT0RFX1NUUkVBTV9JTlBVVCxcInN0cmluZ1wiPT10eXBlb2YgZT9uPXQuZG93bmxvYWQ/bmV3IGwodCk6bmV3IHAodCk6ITA9PT1lLnJlYWRhYmxlJiZVKGUucmVhZCkmJlUoZS5vbik/bj1uZXcgZyh0KTooZi5GaWxlJiZlIGluc3RhbmNlb2YgRmlsZXx8ZSBpbnN0YW5jZW9mIE9iamVjdCkmJihuPW5ldyBjKHQpKTtyZXR1cm4gbi5zdHJlYW0oZSl9LHVucGFyc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbj0hMSxtPSEwLF89XCIsXCIsdj1cIlxcclxcblwiLHM9J1wiJyxhPXMrcyxpPSExLHI9bnVsbCxvPSExOyFmdW5jdGlvbigpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0KXJldHVybjtcInN0cmluZ1wiIT10eXBlb2YgdC5kZWxpbWl0ZXJ8fGIuQkFEX0RFTElNSVRFUlMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybi0xIT09dC5kZWxpbWl0ZXIuaW5kZXhPZihlKX0pLmxlbmd0aHx8KF89dC5kZWxpbWl0ZXIpOyhcImJvb2xlYW5cIj09dHlwZW9mIHQucXVvdGVzfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnF1b3Rlc3x8QXJyYXkuaXNBcnJheSh0LnF1b3RlcykpJiYobj10LnF1b3Rlcyk7XCJib29sZWFuXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzJiZcInN0cmluZ1wiIT10eXBlb2YgdC5za2lwRW1wdHlMaW5lc3x8KGk9dC5za2lwRW1wdHlMaW5lcyk7XCJzdHJpbmdcIj09dHlwZW9mIHQubmV3bGluZSYmKHY9dC5uZXdsaW5lKTtcInN0cmluZ1wiPT10eXBlb2YgdC5xdW90ZUNoYXImJihzPXQucXVvdGVDaGFyKTtcImJvb2xlYW5cIj09dHlwZW9mIHQuaGVhZGVyJiYobT10LmhlYWRlcik7aWYoQXJyYXkuaXNBcnJheSh0LmNvbHVtbnMpKXtpZigwPT09dC5jb2x1bW5zLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJPcHRpb24gY29sdW1ucyBpcyBlbXB0eVwiKTtyPXQuY29sdW1uc312b2lkIDAhPT10LmVzY2FwZUNoYXImJihhPXQuZXNjYXBlQ2hhcitzKTtcImJvb2xlYW5cIj09dHlwZW9mIHQuZXNjYXBlRm9ybXVsYWUmJihvPXQuZXNjYXBlRm9ybXVsYWUpfSgpO3ZhciBoPW5ldyBSZWdFeHAocShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gZihudWxsLGUsaSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIGYocnx8dShlWzBdKSxlLGkpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmKGUuZGF0YT1KU09OLnBhcnNlKGUuZGF0YSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhKSYmKGUuZmllbGRzfHwoZS5maWVsZHM9ZS5tZXRhJiZlLm1ldGEuZmllbGRzKSxlLmZpZWxkc3x8KGUuZmllbGRzPUFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKT9lLmZpZWxkczp1KGUuZGF0YVswXSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKXx8XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXXx8KGUuZGF0YT1bZS5kYXRhXSkpLGYoZS5maWVsZHN8fFtdLGUuZGF0YXx8W10saSk7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXRcIik7ZnVuY3Rpb24gdShlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm5bXTt2YXIgdD1bXTtmb3IodmFyIGkgaW4gZSl0LnB1c2goaSk7cmV0dXJuIHR9ZnVuY3Rpb24gZihlLHQsaSl7dmFyIHI9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PUpTT04ucGFyc2UodCkpO3ZhciBuPUFycmF5LmlzQXJyYXkoZSkmJjA8ZS5sZW5ndGgscz0hQXJyYXkuaXNBcnJheSh0WzBdKTtpZihuJiZtKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKykwPGEmJihyKz1fKSxyKz15KGVbYV0sYSk7MDx0Lmxlbmd0aCYmKHIrPXYpfWZvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgaD1uP2UubGVuZ3RoOnRbb10ubGVuZ3RoLHU9ITEsZj1uPzA9PT1PYmplY3Qua2V5cyh0W29dKS5sZW5ndGg6MD09PXRbb10ubGVuZ3RoO2lmKGkmJiFuJiYodT1cImdyZWVkeVwiPT09aT9cIlwiPT09dFtvXS5qb2luKFwiXCIpLnRyaW0oKToxPT09dFtvXS5sZW5ndGgmJjA9PT10W29dWzBdLmxlbmd0aCksXCJncmVlZHlcIj09PWkmJm4pe2Zvcih2YXIgZD1bXSxsPTA7bDxoO2wrKyl7dmFyIGM9cz9lW2xdOmw7ZC5wdXNoKHRbb11bY10pfXU9XCJcIj09PWQuam9pbihcIlwiKS50cmltKCl9aWYoIXUpe2Zvcih2YXIgcD0wO3A8aDtwKyspezA8cCYmIWYmJihyKz1fKTt2YXIgZz1uJiZzP2VbcF06cDtyKz15KHRbb11bZ10scCl9bzx0Lmxlbmd0aC0xJiYoIWl8fDA8aCYmIWYpJiYocis9dil9fXJldHVybiByfWZ1bmN0aW9uIHkoZSx0KXtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoZS5jb25zdHJ1Y3Rvcj09PURhdGUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpLnNsaWNlKDEsMjUpOyEwPT09byYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJm51bGwhPT1lLm1hdGNoKC9eWz0rXFwtQF0uKiQvKSYmKGU9XCInXCIrZSk7dmFyIGk9ZS50b1N0cmluZygpLnJlcGxhY2UoaCxhKSxyPVwiYm9vbGVhblwiPT10eXBlb2YgbiYmbnx8XCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbihlLHQpfHxBcnJheS5pc0FycmF5KG4pJiZuW3RdfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKWlmKC0xPGUuaW5kZXhPZih0W2ldKSlyZXR1cm4hMDtyZXR1cm4hMX0oaSxiLkJBRF9ERUxJTUlURVJTKXx8LTE8aS5pbmRleE9mKF8pfHxcIiBcIj09PWkuY2hhckF0KDApfHxcIiBcIj09PWkuY2hhckF0KGkubGVuZ3RoLTEpO3JldHVybiByP3MraStzOml9fX07aWYoYi5SRUNPUkRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzApLGIuVU5JVF9TRVA9U3RyaW5nLmZyb21DaGFyQ29kZSgzMSksYi5CWVRFX09SREVSX01BUks9XCJcXHVmZWZmXCIsYi5CQURfREVMSU1JVEVSUz1bXCJcXHJcIixcIlxcblwiLCdcIicsYi5CWVRFX09SREVSX01BUktdLGIuV09SS0VSU19TVVBQT1JURUQ9IW4mJiEhZi5Xb3JrZXIsYi5OT0RFX1NUUkVBTV9JTlBVVD0xLGIuTG9jYWxDaHVua1NpemU9MTA0ODU3NjAsYi5SZW1vdGVDaHVua1NpemU9NTI0Mjg4MCxiLkRlZmF1bHREZWxpbWl0ZXI9XCIsXCIsYi5QYXJzZXI9dyxiLlBhcnNlckhhbmRsZT1pLGIuTmV0d29ya1N0cmVhbWVyPWwsYi5GaWxlU3RyZWFtZXI9YyxiLlN0cmluZ1N0cmVhbWVyPXAsYi5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyPWcsZi5qUXVlcnkpe3ZhciBkPWYualF1ZXJ5O2QuZm4ucGFyc2U9ZnVuY3Rpb24obyl7dmFyIGk9by5jb25maWd8fHt9LGg9W107cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtpZighKFwiSU5QVVRcIj09PWQodGhpcykucHJvcChcInRhZ05hbWVcIikudG9VcHBlckNhc2UoKSYmXCJmaWxlXCI9PT1kKHRoaXMpLmF0dHIoXCJ0eXBlXCIpLnRvTG93ZXJDYXNlKCkmJmYuRmlsZVJlYWRlcil8fCF0aGlzLmZpbGVzfHwwPT09dGhpcy5maWxlcy5sZW5ndGgpcmV0dXJuITA7Zm9yKHZhciB0PTA7dDx0aGlzLmZpbGVzLmxlbmd0aDt0KyspaC5wdXNoKHtmaWxlOnRoaXMuZmlsZXNbdF0saW5wdXRFbGVtOnRoaXMsaW5zdGFuY2VDb25maWc6ZC5leHRlbmQoe30saSl9KX0pLGUoKSx0aGlzO2Z1bmN0aW9uIGUoKXtpZigwIT09aC5sZW5ndGgpe3ZhciBlLHQsaSxyLG49aFswXTtpZihVKG8uYmVmb3JlKSl7dmFyIHM9by5iZWZvcmUobi5maWxlLG4uaW5wdXRFbGVtKTtpZihcIm9iamVjdFwiPT10eXBlb2Ygcyl7aWYoXCJhYm9ydFwiPT09cy5hY3Rpb24pcmV0dXJuIGU9XCJBYm9ydEVycm9yXCIsdD1uLmZpbGUsaT1uLmlucHV0RWxlbSxyPXMucmVhc29uLHZvaWQoVShvLmVycm9yKSYmby5lcnJvcih7bmFtZTplfSx0LGkscikpO2lmKFwic2tpcFwiPT09cy5hY3Rpb24pcmV0dXJuIHZvaWQgdSgpO1wib2JqZWN0XCI9PXR5cGVvZiBzLmNvbmZpZyYmKG4uaW5zdGFuY2VDb25maWc9ZC5leHRlbmQobi5pbnN0YW5jZUNvbmZpZyxzLmNvbmZpZykpfWVsc2UgaWYoXCJza2lwXCI9PT1zKXJldHVybiB2b2lkIHUoKX12YXIgYT1uLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO24uaW5zdGFuY2VDb25maWcuY29tcGxldGU9ZnVuY3Rpb24oZSl7VShhKSYmYShlLG4uZmlsZSxuLmlucHV0RWxlbSksdSgpfSxiLnBhcnNlKG4uZmlsZSxuLmluc3RhbmNlQ29uZmlnKX1lbHNlIFUoby5jb21wbGV0ZSkmJm8uY29tcGxldGUoKX1mdW5jdGlvbiB1KCl7aC5zcGxpY2UoMCwxKSxlKCl9fX1mdW5jdGlvbiB1KGUpe3RoaXMuX2hhbmRsZT1udWxsLHRoaXMuX2ZpbmlzaGVkPSExLHRoaXMuX2NvbXBsZXRlZD0hMSx0aGlzLl9oYWx0ZWQ9ITEsdGhpcy5faW5wdXQ9bnVsbCx0aGlzLl9iYXNlSW5kZXg9MCx0aGlzLl9wYXJ0aWFsTGluZT1cIlwiLHRoaXMuX3Jvd0NvdW50PTAsdGhpcy5fc3RhcnQ9MCx0aGlzLl9uZXh0Q2h1bms9bnVsbCx0aGlzLmlzRmlyc3RDaHVuaz0hMCx0aGlzLl9jb21wbGV0ZVJlc3VsdHM9e2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e319LGZ1bmN0aW9uKGUpe3ZhciB0PUUoZSk7dC5jaHVua1NpemU9cGFyc2VJbnQodC5jaHVua1NpemUpLGUuc3RlcHx8ZS5jaHVua3x8KHQuY2h1bmtTaXplPW51bGwpO3RoaXMuX2hhbmRsZT1uZXcgaSh0KSwodGhpcy5faGFuZGxlLnN0cmVhbWVyPXRoaXMpLl9jb25maWc9dH0uY2FsbCh0aGlzLGUpLHRoaXMucGFyc2VDaHVuaz1mdW5jdGlvbihlLHQpe2lmKHRoaXMuaXNGaXJzdENodW5rJiZVKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSl7dmFyIGk9dGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoZSk7dm9pZCAwIT09aSYmKGU9aSl9dGhpcy5pc0ZpcnN0Q2h1bms9ITEsdGhpcy5faGFsdGVkPSExO3ZhciByPXRoaXMuX3BhcnRpYWxMaW5lK2U7dGhpcy5fcGFydGlhbExpbmU9XCJcIjt2YXIgbj10aGlzLl9oYW5kbGUucGFyc2Uocix0aGlzLl9iYXNlSW5kZXgsIXRoaXMuX2ZpbmlzaGVkKTtpZighdGhpcy5faGFuZGxlLnBhdXNlZCgpJiYhdGhpcy5faGFuZGxlLmFib3J0ZWQoKSl7dmFyIHM9bi5tZXRhLmN1cnNvcjt0aGlzLl9maW5pc2hlZHx8KHRoaXMuX3BhcnRpYWxMaW5lPXIuc3Vic3RyaW5nKHMtdGhpcy5fYmFzZUluZGV4KSx0aGlzLl9iYXNlSW5kZXg9cyksbiYmbi5kYXRhJiYodGhpcy5fcm93Q291bnQrPW4uZGF0YS5sZW5ndGgpO3ZhciBhPXRoaXMuX2ZpbmlzaGVkfHx0aGlzLl9jb25maWcucHJldmlldyYmdGhpcy5fcm93Q291bnQ+PXRoaXMuX2NvbmZpZy5wcmV2aWV3O2lmKG8pZi5wb3N0TWVzc2FnZSh7cmVzdWx0czpuLHdvcmtlcklkOmIuV09SS0VSX0lELGZpbmlzaGVkOmF9KTtlbHNlIGlmKFUodGhpcy5fY29uZmlnLmNodW5rKSYmIXQpe2lmKHRoaXMuX2NvbmZpZy5jaHVuayhuLHRoaXMuX2hhbmRsZSksdGhpcy5faGFuZGxlLnBhdXNlZCgpfHx0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKXJldHVybiB2b2lkKHRoaXMuX2hhbHRlZD0hMCk7bj12b2lkIDAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXZvaWQgMH1yZXR1cm4gdGhpcy5fY29uZmlnLnN0ZXB8fHRoaXMuX2NvbmZpZy5jaHVua3x8KHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChuLmRhdGEpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnM9dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQobi5lcnJvcnMpLHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhPW4ubWV0YSksdGhpcy5fY29tcGxldGVkfHwhYXx8IVUodGhpcy5fY29uZmlnLmNvbXBsZXRlKXx8biYmbi5tZXRhLmFib3J0ZWR8fCh0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLHRoaXMuX2lucHV0KSx0aGlzLl9jb21wbGV0ZWQ9ITApLGF8fG4mJm4ubWV0YS5wYXVzZWR8fHRoaXMuX25leHRDaHVuaygpLG59dGhpcy5faGFsdGVkPSEwfSx0aGlzLl9zZW5kRXJyb3I9ZnVuY3Rpb24oZSl7VSh0aGlzLl9jb25maWcuZXJyb3IpP3RoaXMuX2NvbmZpZy5lcnJvcihlKTpvJiZ0aGlzLl9jb25maWcuZXJyb3ImJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELGVycm9yOmUsZmluaXNoZWQ6ITF9KX19ZnVuY3Rpb24gbChlKXt2YXIgcjsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5SZW1vdGVDaHVua1NpemUpLHUuY2FsbCh0aGlzLGUpLHRoaXMuX25leHRDaHVuaz1uP2Z1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCksdGhpcy5fY2h1bmtMb2FkZWQoKX06ZnVuY3Rpb24oKXt0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7aWYodGhpcy5fZmluaXNoZWQpdGhpcy5fY2h1bmtMb2FkZWQoKTtlbHNle2lmKHI9bmV3IFhNTEh0dHBSZXF1ZXN0LHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMmJihyLndpdGhDcmVkZW50aWFscz10aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKSxufHwoci5vbmxvYWQ9eSh0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxyLm9uZXJyb3I9eSh0aGlzLl9jaHVua0Vycm9yLHRoaXMpKSxyLm9wZW4odGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEJvZHk/XCJQT1NUXCI6XCJHRVRcIix0aGlzLl9pbnB1dCwhbiksdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpe3ZhciBlPXRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO2Zvcih2YXIgdCBpbiBlKXIuc2V0UmVxdWVzdEhlYWRlcih0LGVbdF0pfWlmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciBpPXRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUtMTtyLnNldFJlcXVlc3RIZWFkZXIoXCJSYW5nZVwiLFwiYnl0ZXM9XCIrdGhpcy5fc3RhcnQrXCItXCIraSl9dHJ5e3Iuc2VuZCh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0Qm9keSl9Y2F0Y2goZSl7dGhpcy5fY2h1bmtFcnJvcihlLm1lc3NhZ2UpfW4mJjA9PT1yLnN0YXR1cyYmdGhpcy5fY2h1bmtFcnJvcigpfX0sdGhpcy5fY2h1bmtMb2FkZWQ9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiYoci5zdGF0dXM8MjAwfHw0MDA8PXIuc3RhdHVzP3RoaXMuX2NodW5rRXJyb3IoKToodGhpcy5fc3RhcnQrPXRoaXMuX2NvbmZpZy5jaHVua1NpemU/dGhpcy5fY29uZmlnLmNodW5rU2l6ZTpyLnJlc3BvbnNlVGV4dC5sZW5ndGgsdGhpcy5fZmluaXNoZWQ9IXRoaXMuX2NvbmZpZy5jaHVua1NpemV8fHRoaXMuX3N0YXJ0Pj1mdW5jdGlvbihlKXt2YXIgdD1lLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1SYW5nZVwiKTtpZihudWxsPT09dClyZXR1cm4tMTtyZXR1cm4gcGFyc2VJbnQodC5zdWJzdHJpbmcodC5sYXN0SW5kZXhPZihcIi9cIikrMSkpfShyKSx0aGlzLnBhcnNlQ2h1bmsoci5yZXNwb25zZVRleHQpKSl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5zdGF0dXNUZXh0fHxlO3RoaXMuX3NlbmRFcnJvcihuZXcgRXJyb3IodCkpfX1mdW5jdGlvbiBjKGUpe3ZhciByLG47KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuTG9jYWxDaHVua1NpemUpLHUuY2FsbCh0aGlzLGUpO3ZhciBzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyO3RoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsbj1lLnNsaWNlfHxlLndlYmtpdFNsaWNlfHxlLm1velNsaWNlLHM/KChyPW5ldyBGaWxlUmVhZGVyKS5vbmxvYWQ9eSh0aGlzLl9jaHVua0xvYWRlZCx0aGlzKSxyLm9uZXJyb3I9eSh0aGlzLl9jaHVua0Vycm9yLHRoaXMpKTpyPW5ldyBGaWxlUmVhZGVyU3luYyx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fZmluaXNoZWR8fHRoaXMuX2NvbmZpZy5wcmV2aWV3JiYhKHRoaXMuX3Jvd0NvdW50PHRoaXMuX2NvbmZpZy5wcmV2aWV3KXx8dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2lucHV0O2lmKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpe3ZhciB0PU1hdGgubWluKHRoaXMuX3N0YXJ0K3RoaXMuX2NvbmZpZy5jaHVua1NpemUsdGhpcy5faW5wdXQuc2l6ZSk7ZT1uLmNhbGwoZSx0aGlzLl9zdGFydCx0KX12YXIgaT1yLnJlYWRBc1RleHQoZSx0aGlzLl9jb25maWcuZW5jb2RpbmcpO3N8fHRoaXMuX2NodW5rTG9hZGVkKHt0YXJnZXQ6e3Jlc3VsdDppfX0pfSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbihlKXt0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PXRoaXMuX2lucHV0LnNpemUsdGhpcy5wYXJzZUNodW5rKGUudGFyZ2V0LnJlc3VsdCl9LHRoaXMuX2NodW5rRXJyb3I9ZnVuY3Rpb24oKXt0aGlzLl9zZW5kRXJyb3Ioci5lcnJvcil9fWZ1bmN0aW9uIHAoZSl7dmFyIGk7dS5jYWxsKHRoaXMsZT1lfHx7fSksdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSx0aGlzLl9uZXh0Q2h1bmsoKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2ZpbmlzaGVkKXt2YXIgZSx0PXRoaXMuX2NvbmZpZy5jaHVua1NpemU7cmV0dXJuIHQ/KGU9aS5zdWJzdHJpbmcoMCx0KSxpPWkuc3Vic3RyaW5nKHQpKTooZT1pLGk9XCJcIiksdGhpcy5fZmluaXNoZWQ9IWksdGhpcy5wYXJzZUNodW5rKGUpfX19ZnVuY3Rpb24gZyhlKXt1LmNhbGwodGhpcyxlPWV8fHt9KTt2YXIgdD1bXSxpPSEwLHI9ITE7dGhpcy5wYXVzZT1mdW5jdGlvbigpe3UucHJvdG90eXBlLnBhdXNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5wYXVzZSgpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3UucHJvdG90eXBlLnJlc3VtZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5faW5wdXQucmVzdW1lKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5faW5wdXQub24oXCJkYXRhXCIsdGhpcy5fc3RyZWFtRGF0YSksdGhpcy5faW5wdXQub24oXCJlbmRcIix0aGlzLl9zdHJlYW1FbmQpLHRoaXMuX2lucHV0Lm9uKFwiZXJyb3JcIix0aGlzLl9zdHJlYW1FcnJvcil9LHRoaXMuX2NoZWNrSXNGaW5pc2hlZD1mdW5jdGlvbigpe3ImJjE9PT10Lmxlbmd0aCYmKHRoaXMuX2ZpbmlzaGVkPSEwKX0sdGhpcy5fbmV4dENodW5rPWZ1bmN0aW9uKCl7dGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdC5sZW5ndGg/dGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSk6aT0hMH0sdGhpcy5fc3RyZWFtRGF0YT15KGZ1bmN0aW9uKGUpe3RyeXt0LnB1c2goXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpLGkmJihpPSExLHRoaXMuX2NoZWNrSXNGaW5pc2hlZCgpLHRoaXMucGFyc2VDaHVuayh0LnNoaWZ0KCkpKX1jYXRjaChlKXt0aGlzLl9zdHJlYW1FcnJvcihlKX19LHRoaXMpLHRoaXMuX3N0cmVhbUVycm9yPXkoZnVuY3Rpb24oZSl7dGhpcy5fc3RyZWFtQ2xlYW5VcCgpLHRoaXMuX3NlbmRFcnJvcihlKX0sdGhpcyksdGhpcy5fc3RyZWFtRW5kPXkoZnVuY3Rpb24oKXt0aGlzLl9zdHJlYW1DbGVhblVwKCkscj0hMCx0aGlzLl9zdHJlYW1EYXRhKFwiXCIpfSx0aGlzKSx0aGlzLl9zdHJlYW1DbGVhblVwPXkoZnVuY3Rpb24oKXt0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcyl9ZnVuY3Rpb24gaShfKXt2YXIgYSxvLGgscj1NYXRoLnBvdygyLDUzKSxuPS1yLHM9L15cXHMqLT8oXFxkK1xcLj98XFwuXFxkK3xcXGQrXFwuXFxkKykoZVstK10/XFxkKyk/XFxzKiQvLHU9LyhcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZFxcLlxcZCsoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKS8sdD10aGlzLGk9MCxmPTAsZD0hMSxlPSExLGw9W10sYz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX07aWYoVShfLnN0ZXApKXt2YXIgcD1fLnN0ZXA7Xy5zdGVwPWZ1bmN0aW9uKGUpe2lmKGM9ZSxtKCkpZygpO2Vsc2V7aWYoZygpLDA9PT1jLmRhdGEubGVuZ3RoKXJldHVybjtpKz1lLmRhdGEubGVuZ3RoLF8ucHJldmlldyYmaT5fLnByZXZpZXc/by5hYm9ydCgpOihjLmRhdGE9Yy5kYXRhWzBdLHAoYyx0KSl9fX1mdW5jdGlvbiB2KGUpe3JldHVyblwiZ3JlZWR5XCI9PT1fLnNraXBFbXB0eUxpbmVzP1wiXCI9PT1lLmpvaW4oXCJcIikudHJpbSgpOjE9PT1lLmxlbmd0aCYmMD09PWVbMF0ubGVuZ3RofWZ1bmN0aW9uIGcoKXtpZihjJiZoJiYoayhcIkRlbGltaXRlclwiLFwiVW5kZXRlY3RhYmxlRGVsaW1pdGVyXCIsXCJVbmFibGUgdG8gYXV0by1kZXRlY3QgZGVsaW1pdGluZyBjaGFyYWN0ZXI7IGRlZmF1bHRlZCB0byAnXCIrYi5EZWZhdWx0RGVsaW1pdGVyK1wiJ1wiKSxoPSExKSxfLnNraXBFbXB0eUxpbmVzKWZvcih2YXIgZT0wO2U8Yy5kYXRhLmxlbmd0aDtlKyspdihjLmRhdGFbZV0pJiZjLmRhdGEuc3BsaWNlKGUtLSwxKTtyZXR1cm4gbSgpJiZmdW5jdGlvbigpe2lmKCFjKXJldHVybjtmdW5jdGlvbiBlKGUsdCl7VShfLnRyYW5zZm9ybUhlYWRlcikmJihlPV8udHJhbnNmb3JtSGVhZGVyKGUsdCkpLGwucHVzaChlKX1pZihBcnJheS5pc0FycmF5KGMuZGF0YVswXSkpe2Zvcih2YXIgdD0wO20oKSYmdDxjLmRhdGEubGVuZ3RoO3QrKyljLmRhdGFbdF0uZm9yRWFjaChlKTtjLmRhdGEuc3BsaWNlKDAsMSl9ZWxzZSBjLmRhdGEuZm9yRWFjaChlKX0oKSxmdW5jdGlvbigpe2lmKCFjfHwhXy5oZWFkZXImJiFfLmR5bmFtaWNUeXBpbmcmJiFfLnRyYW5zZm9ybSlyZXR1cm4gYztmdW5jdGlvbiBlKGUsdCl7dmFyIGkscj1fLmhlYWRlcj97fTpbXTtmb3IoaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgbj1pLHM9ZVtpXTtfLmhlYWRlciYmKG49aT49bC5sZW5ndGg/XCJfX3BhcnNlZF9leHRyYVwiOmxbaV0pLF8udHJhbnNmb3JtJiYocz1fLnRyYW5zZm9ybShzLG4pKSxzPXkobixzKSxcIl9fcGFyc2VkX2V4dHJhXCI9PT1uPyhyW25dPXJbbl18fFtdLHJbbl0ucHVzaChzKSk6cltuXT1zfXJldHVybiBfLmhlYWRlciYmKGk+bC5sZW5ndGg/ayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb01hbnlGaWVsZHNcIixcIlRvbyBtYW55IGZpZWxkczogZXhwZWN0ZWQgXCIrbC5sZW5ndGgrXCIgZmllbGRzIGJ1dCBwYXJzZWQgXCIraSxmK3QpOmk8bC5sZW5ndGgmJmsoXCJGaWVsZE1pc21hdGNoXCIsXCJUb29GZXdGaWVsZHNcIixcIlRvbyBmZXcgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIitpLGYrdCkpLHJ9dmFyIHQ9MTshYy5kYXRhLmxlbmd0aHx8QXJyYXkuaXNBcnJheShjLmRhdGFbMF0pPyhjLmRhdGE9Yy5kYXRhLm1hcChlKSx0PWMuZGF0YS5sZW5ndGgpOmMuZGF0YT1lKGMuZGF0YSwwKTtfLmhlYWRlciYmYy5tZXRhJiYoYy5tZXRhLmZpZWxkcz1sKTtyZXR1cm4gZis9dCxjfSgpfWZ1bmN0aW9uIG0oKXtyZXR1cm4gXy5oZWFkZXImJjA9PT1sLmxlbmd0aH1mdW5jdGlvbiB5KGUsdCl7cmV0dXJuIGk9ZSxfLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiYmdm9pZCAwPT09Xy5keW5hbWljVHlwaW5nW2ldJiYoXy5keW5hbWljVHlwaW5nW2ldPV8uZHluYW1pY1R5cGluZ0Z1bmN0aW9uKGkpKSwhMD09PShfLmR5bmFtaWNUeXBpbmdbaV18fF8uZHluYW1pY1R5cGluZyk/XCJ0cnVlXCI9PT10fHxcIlRSVUVcIj09PXR8fFwiZmFsc2VcIiE9PXQmJlwiRkFMU0VcIiE9PXQmJihmdW5jdGlvbihlKXtpZihzLnRlc3QoZSkpe3ZhciB0PXBhcnNlRmxvYXQoZSk7aWYobjx0JiZ0PHIpcmV0dXJuITB9cmV0dXJuITF9KHQpP3BhcnNlRmxvYXQodCk6dS50ZXN0KHQpP25ldyBEYXRlKHQpOlwiXCI9PT10P251bGw6dCk6dDt2YXIgaX1mdW5jdGlvbiBrKGUsdCxpLHIpe3ZhciBuPXt0eXBlOmUsY29kZTp0LG1lc3NhZ2U6aX07dm9pZCAwIT09ciYmKG4ucm93PXIpLGMuZXJyb3JzLnB1c2gobil9dGhpcy5wYXJzZT1mdW5jdGlvbihlLHQsaSl7dmFyIHI9Xy5xdW90ZUNoYXJ8fCdcIic7aWYoXy5uZXdsaW5lfHwoXy5uZXdsaW5lPWZ1bmN0aW9uKGUsdCl7ZT1lLnN1YnN0cmluZygwLDEwNDg1NzYpO3ZhciBpPW5ldyBSZWdFeHAocSh0KStcIihbXl0qPylcIitxKHQpLFwiZ21cIikscj0oZT1lLnJlcGxhY2UoaSxcIlwiKSkuc3BsaXQoXCJcXHJcIiksbj1lLnNwbGl0KFwiXFxuXCIpLHM9MTxuLmxlbmd0aCYmblswXS5sZW5ndGg8clswXS5sZW5ndGg7aWYoMT09PXIubGVuZ3RofHxzKXJldHVyblwiXFxuXCI7Zm9yKHZhciBhPTAsbz0wO288ci5sZW5ndGg7bysrKVwiXFxuXCI9PT1yW29dWzBdJiZhKys7cmV0dXJuIGE+PXIubGVuZ3RoLzI/XCJcXHJcXG5cIjpcIlxcclwifShlLHIpKSxoPSExLF8uZGVsaW1pdGVyKVUoXy5kZWxpbWl0ZXIpJiYoXy5kZWxpbWl0ZXI9Xy5kZWxpbWl0ZXIoZSksYy5tZXRhLmRlbGltaXRlcj1fLmRlbGltaXRlcik7ZWxzZXt2YXIgbj1mdW5jdGlvbihlLHQsaSxyLG4pe3ZhciBzLGEsbyxoO249bnx8W1wiLFwiLFwiXFx0XCIsXCJ8XCIsXCI7XCIsYi5SRUNPUkRfU0VQLGIuVU5JVF9TRVBdO2Zvcih2YXIgdT0wO3U8bi5sZW5ndGg7dSsrKXt2YXIgZj1uW3VdLGQ9MCxsPTAsYz0wO289dm9pZCAwO2Zvcih2YXIgcD1uZXcgdyh7Y29tbWVudHM6cixkZWxpbWl0ZXI6ZixuZXdsaW5lOnQscHJldmlldzoxMH0pLnBhcnNlKGUpLGc9MDtnPHAuZGF0YS5sZW5ndGg7ZysrKWlmKGkmJnYocC5kYXRhW2ddKSljKys7ZWxzZXt2YXIgbT1wLmRhdGFbZ10ubGVuZ3RoO2wrPW0sdm9pZCAwIT09bz8wPG0mJihkKz1NYXRoLmFicyhtLW8pLG89bSk6bz1tfTA8cC5kYXRhLmxlbmd0aCYmKGwvPXAuZGF0YS5sZW5ndGgtYyksKHZvaWQgMD09PWF8fGQ8PWEpJiYodm9pZCAwPT09aHx8aDxsKSYmMS45OTxsJiYoYT1kLHM9ZixoPWwpfXJldHVybntzdWNjZXNzZnVsOiEhKF8uZGVsaW1pdGVyPXMpLGJlc3REZWxpbWl0ZXI6c319KGUsXy5uZXdsaW5lLF8uc2tpcEVtcHR5TGluZXMsXy5jb21tZW50cyxfLmRlbGltaXRlcnNUb0d1ZXNzKTtuLnN1Y2Nlc3NmdWw/Xy5kZWxpbWl0ZXI9bi5iZXN0RGVsaW1pdGVyOihoPSEwLF8uZGVsaW1pdGVyPWIuRGVmYXVsdERlbGltaXRlciksYy5tZXRhLmRlbGltaXRlcj1fLmRlbGltaXRlcn12YXIgcz1FKF8pO3JldHVybiBfLnByZXZpZXcmJl8uaGVhZGVyJiZzLnByZXZpZXcrKyxhPWUsbz1uZXcgdyhzKSxjPW8ucGFyc2UoYSx0LGkpLGcoKSxkP3ttZXRhOntwYXVzZWQ6ITB9fTpjfHx7bWV0YTp7cGF1c2VkOiExfX19LHRoaXMucGF1c2VkPWZ1bmN0aW9uKCl7cmV0dXJuIGR9LHRoaXMucGF1c2U9ZnVuY3Rpb24oKXtkPSEwLG8uYWJvcnQoKSxhPVUoXy5jaHVuayk/XCJcIjphLnN1YnN0cmluZyhvLmdldENoYXJJbmRleCgpKX0sdGhpcy5yZXN1bWU9ZnVuY3Rpb24oKXt0LnN0cmVhbWVyLl9oYWx0ZWQ/KGQ9ITEsdC5zdHJlYW1lci5wYXJzZUNodW5rKGEsITApKTpzZXRUaW1lb3V0KHQucmVzdW1lLDMpfSx0aGlzLmFib3J0ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe2U9ITAsby5hYm9ydCgpLGMubWV0YS5hYm9ydGVkPSEwLFUoXy5jb21wbGV0ZSkmJl8uY29tcGxldGUoYyksYT1cIlwifX1mdW5jdGlvbiBxKGUpe3JldHVybiBlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIHcoZSl7dmFyIE8sRD0oZT1lfHx7fSkuZGVsaW1pdGVyLEk9ZS5uZXdsaW5lLFQ9ZS5jb21tZW50cyxBPWUuc3RlcCxMPWUucHJldmlldyxGPWUuZmFzdE1vZGUsej1PPXZvaWQgMD09PWUucXVvdGVDaGFyPydcIic6ZS5xdW90ZUNoYXI7aWYodm9pZCAwIT09ZS5lc2NhcGVDaGFyJiYoej1lLmVzY2FwZUNoYXIpLChcInN0cmluZ1wiIT10eXBlb2YgRHx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKEQpKSYmKEQ9XCIsXCIpLFQ9PT1EKXRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyXCIpOyEwPT09VD9UPVwiI1wiOihcInN0cmluZ1wiIT10eXBlb2YgVHx8LTE8Yi5CQURfREVMSU1JVEVSUy5pbmRleE9mKFQpKSYmKFQ9ITEpLFwiXFxuXCIhPT1JJiZcIlxcclwiIT09SSYmXCJcXHJcXG5cIiE9PUkmJihJPVwiXFxuXCIpO3ZhciBNPTAsaj0hMTt0aGlzLnBhcnNlPWZ1bmN0aW9uKGEsdCxpKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSl0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgc3RyaW5nXCIpO3ZhciByPWEubGVuZ3RoLGU9RC5sZW5ndGgsbj1JLmxlbmd0aCxzPVQubGVuZ3RoLG89VShBKSxoPVtdLHU9W10sZj1bXSxkPU09MDtpZighYSlyZXR1cm4gUigpO2lmKEZ8fCExIT09RiYmLTE9PT1hLmluZGV4T2YoTykpe2Zvcih2YXIgbD1hLnNwbGl0KEkpLGM9MDtjPGwubGVuZ3RoO2MrKyl7aWYoZj1sW2NdLE0rPWYubGVuZ3RoLGMhPT1sLmxlbmd0aC0xKU0rPUkubGVuZ3RoO2Vsc2UgaWYoaSlyZXR1cm4gUigpO2lmKCFUfHxmLnN1YnN0cmluZygwLHMpIT09VCl7aWYobyl7aWYoaD1bXSxiKGYuc3BsaXQoRCkpLFMoKSxqKXJldHVybiBSKCl9ZWxzZSBiKGYuc3BsaXQoRCkpO2lmKEwmJkw8PWMpcmV0dXJuIGg9aC5zbGljZSgwLEwpLFIoITApfX1yZXR1cm4gUigpfWZvcih2YXIgcD1hLmluZGV4T2YoRCxNKSxnPWEuaW5kZXhPZihJLE0pLG09bmV3IFJlZ0V4cChxKHopK3EoTyksXCJnXCIpLF89YS5pbmRleE9mKE8sTSk7OylpZihhW01dIT09TylpZihUJiYwPT09Zi5sZW5ndGgmJmEuc3Vic3RyaW5nKE0sTStzKT09PVQpe2lmKC0xPT09ZylyZXR1cm4gUigpO009ZytuLGc9YS5pbmRleE9mKEksTSkscD1hLmluZGV4T2YoRCxNKX1lbHNle2lmKC0xIT09cCYmKHA8Z3x8LTE9PT1nKSl7aWYoIShwPF8pKXtmLnB1c2goYS5zdWJzdHJpbmcoTSxwKSksTT1wK2UscD1hLmluZGV4T2YoRCxNKTtjb250aW51ZX12YXIgdj14KHAsXyxnKTtpZih2JiZ2b2lkIDAhPT12Lm5leHREZWxpbSl7cD12Lm5leHREZWxpbSxfPXYucXVvdGVTZWFyY2gsZi5wdXNoKGEuc3Vic3RyaW5nKE0scCkpLE09cCtlLHA9YS5pbmRleE9mKEQsTSk7Y29udGludWV9fWlmKC0xPT09ZylicmVhaztpZihmLnB1c2goYS5zdWJzdHJpbmcoTSxnKSksQyhnK24pLG8mJihTKCksaikpcmV0dXJuIFIoKTtpZihMJiZoLmxlbmd0aD49TClyZXR1cm4gUighMCl9ZWxzZSBmb3IoXz1NLE0rKzs7KXtpZigtMT09PShfPWEuaW5kZXhPZihPLF8rMSkpKXJldHVybiBpfHx1LnB1c2goe3R5cGU6XCJRdW90ZXNcIixjb2RlOlwiTWlzc2luZ1F1b3Rlc1wiLG1lc3NhZ2U6XCJRdW90ZWQgZmllbGQgdW50ZXJtaW5hdGVkXCIscm93OmgubGVuZ3RoLGluZGV4Ok19KSxFKCk7aWYoXz09PXItMSlyZXR1cm4gRShhLnN1YnN0cmluZyhNLF8pLnJlcGxhY2UobSxPKSk7aWYoTyE9PXp8fGFbXysxXSE9PXope2lmKE89PT16fHwwPT09X3x8YVtfLTFdIT09eil7LTEhPT1wJiZwPF8rMSYmKHA9YS5pbmRleE9mKEQsXysxKSksLTEhPT1nJiZnPF8rMSYmKGc9YS5pbmRleE9mKEksXysxKSk7dmFyIHk9dygtMT09PWc/cDpNYXRoLm1pbihwLGcpKTtpZihhW18rMSt5XT09PUQpe2YucHVzaChhLnN1YnN0cmluZyhNLF8pLnJlcGxhY2UobSxPKSksYVtNPV8rMSt5K2VdIT09TyYmKF89YS5pbmRleE9mKE8sTSkpLHA9YS5pbmRleE9mKEQsTSksZz1hLmluZGV4T2YoSSxNKTticmVha312YXIgaz13KGcpO2lmKGEuc3Vic3RyaW5nKF8rMStrLF8rMStrK24pPT09SSl7aWYoZi5wdXNoKGEuc3Vic3RyaW5nKE0sXykucmVwbGFjZShtLE8pKSxDKF8rMStrK24pLHA9YS5pbmRleE9mKEQsTSksXz1hLmluZGV4T2YoTyxNKSxvJiYoUygpLGopKXJldHVybiBSKCk7aWYoTCYmaC5sZW5ndGg+PUwpcmV0dXJuIFIoITApO2JyZWFrfXUucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJJbnZhbGlkUXVvdGVzXCIsbWVzc2FnZTpcIlRyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWRcIixyb3c6aC5sZW5ndGgsaW5kZXg6TX0pLF8rK319ZWxzZSBfKyt9cmV0dXJuIEUoKTtmdW5jdGlvbiBiKGUpe2gucHVzaChlKSxkPU19ZnVuY3Rpb24gdyhlKXt2YXIgdD0wO2lmKC0xIT09ZSl7dmFyIGk9YS5zdWJzdHJpbmcoXysxLGUpO2kmJlwiXCI9PT1pLnRyaW0oKSYmKHQ9aS5sZW5ndGgpfXJldHVybiB0fWZ1bmN0aW9uIEUoZSl7cmV0dXJuIGl8fCh2b2lkIDA9PT1lJiYoZT1hLnN1YnN0cmluZyhNKSksZi5wdXNoKGUpLE09cixiKGYpLG8mJlMoKSksUigpfWZ1bmN0aW9uIEMoZSl7TT1lLGIoZiksZj1bXSxnPWEuaW5kZXhPZihJLE0pfWZ1bmN0aW9uIFIoZSl7cmV0dXJue2RhdGE6aCxlcnJvcnM6dSxtZXRhOntkZWxpbWl0ZXI6RCxsaW5lYnJlYWs6SSxhYm9ydGVkOmosdHJ1bmNhdGVkOiEhZSxjdXJzb3I6ZCsodHx8MCl9fX1mdW5jdGlvbiBTKCl7QShSKCkpLGg9W10sdT1bXX1mdW5jdGlvbiB4KGUsdCxpKXt2YXIgcj17bmV4dERlbGltOnZvaWQgMCxxdW90ZVNlYXJjaDp2b2lkIDB9LG49YS5pbmRleE9mKE8sdCsxKTtpZih0PGUmJmU8biYmKG48aXx8LTE9PT1pKSl7dmFyIHM9YS5pbmRleE9mKEQsbik7aWYoLTE9PT1zKXJldHVybiByO248cyYmKG49YS5pbmRleE9mKE8sbisxKSkscj14KHMsbixpKX1lbHNlIHI9e25leHREZWxpbTplLHF1b3RlU2VhcmNoOnR9O3JldHVybiByfX0sdGhpcy5hYm9ydD1mdW5jdGlvbigpe2o9ITB9LHRoaXMuZ2V0Q2hhckluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIE19fWZ1bmN0aW9uIG0oZSl7dmFyIHQ9ZS5kYXRhLGk9YVt0LndvcmtlcklkXSxyPSExO2lmKHQuZXJyb3IpaS51c2VyRXJyb3IodC5lcnJvcix0LmZpbGUpO2Vsc2UgaWYodC5yZXN1bHRzJiZ0LnJlc3VsdHMuZGF0YSl7dmFyIG49e2Fib3J0OmZ1bmN0aW9uKCl7cj0hMCxfKHQud29ya2VySWQse2RhdGE6W10sZXJyb3JzOltdLG1ldGE6e2Fib3J0ZWQ6ITB9fSl9LHBhdXNlOnYscmVzdW1lOnZ9O2lmKFUoaS51c2VyU3RlcCkpe2Zvcih2YXIgcz0wO3M8dC5yZXN1bHRzLmRhdGEubGVuZ3RoJiYoaS51c2VyU3RlcCh7ZGF0YTp0LnJlc3VsdHMuZGF0YVtzXSxlcnJvcnM6dC5yZXN1bHRzLmVycm9ycyxtZXRhOnQucmVzdWx0cy5tZXRhfSxuKSwhcik7cysrKTtkZWxldGUgdC5yZXN1bHRzfWVsc2UgVShpLnVzZXJDaHVuaykmJihpLnVzZXJDaHVuayh0LnJlc3VsdHMsbix0LmZpbGUpLGRlbGV0ZSB0LnJlc3VsdHMpfXQuZmluaXNoZWQmJiFyJiZfKHQud29ya2VySWQsdC5yZXN1bHRzKX1mdW5jdGlvbiBfKGUsdCl7dmFyIGk9YVtlXTtVKGkudXNlckNvbXBsZXRlKSYmaS51c2VyQ29tcGxldGUodCksaS50ZXJtaW5hdGUoKSxkZWxldGUgYVtlXX1mdW5jdGlvbiB2KCl7dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKX1mdW5jdGlvbiBFKGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgdD1BcnJheS5pc0FycmF5KGUpP1tdOnt9O2Zvcih2YXIgaSBpbiBlKXRbaV09RShlW2ldKTtyZXR1cm4gdH1mdW5jdGlvbiB5KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIFUoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1yZXR1cm4gbyYmKGYub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0YTt2b2lkIDA9PT1iLldPUktFUl9JRCYmdCYmKGIuV09SS0VSX0lEPXQud29ya2VySWQpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmlucHV0KWYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKSxmaW5pc2hlZDohMH0pO2Vsc2UgaWYoZi5GaWxlJiZ0LmlucHV0IGluc3RhbmNlb2YgRmlsZXx8dC5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdCl7dmFyIGk9Yi5wYXJzZSh0LmlucHV0LHQuY29uZmlnKTtpJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxyZXN1bHRzOmksZmluaXNoZWQ6ITB9KX19KSwobC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh1LnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWwsKGMucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodS5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1jLChwLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHAucHJvdG90eXBlKSkuY29uc3RydWN0b3I9cCwoZy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh1LnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWcsYn0pOyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgR0FQSSBlbnZpcm9ubWVudFxuICogQHBhcmFtIHN1Y2Nlc3MgV2hlbiBjbGllbnQgaGFzIGxvYWRlZCBhbmQgcmV0cmlldmFsIG9mIHRva2VuIGlzIHN1Y2Nlc3NmdWxcbiAqIEBwYXJhbSBmYWlsdXJlIFdoZW4gbG9hZGluZyB0aGUgY2xpZW50IGZhaWxlZCBvZiByZXRyaWV2YWwgb2YgdGhlIHRva2VuIGZhaWxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUdBUEkoc3VjY2Vzcz86ICgpID0+IHZvaWQsIGZhaWx1cmU/OiAoZXJyb3I/OiBhbnkpID0+IHZvaWQpIHtcbiAgZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiB7XG4gICAgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgICAnYXBpS2V5JzogY29uZmlnLmFwaUtleSxcbiAgICAgICdkaXNjb3ZlcnlEb2NzJzogY29uZmlnLmRpc2NvdmVyeURvY3NcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHJldHJpZXZlVG9rZW4oc3VjY2VzcywgZmFpbHVyZSwgZmFsc2UpOyAvLyByZXRyaWV2ZSB0b2tlbiBub24taW50ZXJhY3RpdmVseVxuICAgIH0sIGZhaWx1cmUpO1xuICB9KVxufVxuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdG9rZW4gYW5kIHNldHMgaXQgZm9yIHRoZSBnYXBpXG4gKiBAcGFyYW0gc3VjY2VzcyBjYWxsYmFjayB3aGVuIHRva2VuIGlzIHN1Y2Nlc3NmdWxseSByZXRyaWV2ZWRcbiAqIEBwYXJhbSBmYWlsdXJlIGNhbGxiYWNrIHdoZW4gc29tZXRoaW5nIHdlbnQgd3JvbmcgZ2V0dGluZyB0aGUgdG9rZW5cbiAqIEBwYXJhbSBpbnRlcmFjdGl2ZSBpZiBhc2tpbmcgZm9yIHRva2VuIHNob3VsZCBiZSBpbnRlcmFjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVUb2tlbihzdWNjZXNzPzogKHRva2VuOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmU/OiAoKSA9PiB2b2lkLCBpbnRlcmFjdGl2ZSA9IHRydWUpIHtcbiAgY2hyb21lLmlkZW50aXR5LmdldEF1dGhUb2tlbih7IGludGVyYWN0aXZlIH0sICh0b2tlbikgPT4ge1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZ2FwaS5hdXRoLnNldFRva2VuKDxnYXBpLmF1dGguR29vZ2xlQXBpT0F1dGgyVG9rZW5PYmplY3Q+eyBhY2Nlc3NfdG9rZW46IHRva2VuIH0pO1xuICAgICAgc3VjY2Vzcz8uKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICBmYWlsdXJlPy4oKVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbihjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgbGV0IHQgPSBnYXBpLmNsaWVudC5nZXRUb2tlbigpO1xuICBpZiAoIXQpIHJldHVybjtcbiAgY2hyb21lLmlkZW50aXR5LnJlbW92ZUNhY2hlZEF1dGhUb2tlbih7XG4gICAgdG9rZW46IHQuYWNjZXNzX3Rva2VuXG4gIH0sIGNhbGxiYWNrKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFwaUtleTogJ0FJemFTeUFMTjIwZ1A0YnVOLXRwTG1iOUdwU3VNUVZlcUhWSkNERScsXG4gICAgZGlzY292ZXJ5RG9jczogW1wiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djRcIl0sXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0S2V5KGFycjogc3RyaW5nW10sIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgbnVtID0gT2JqZWN0LmtleXMoYXJyKS5maW5kKChrZXk6IGFueSkgPT4gYXJyW2tleV0gPT09IHZhbHVlKSFcbiAgICByZXR1cm4gcGFyc2VJbnQobnVtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKGFycjogYW55W11bXSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhcnJbMF0pLm1hcCgoYzogYW55KSA9PiB7IHJldHVybiBhcnIubWFwKChyKSA9PiB7IHJldHVybiByW2NdIH0pfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9PcHRpb25zKCkge1xuICAgIGlmKGNocm9tZS5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSkge1xuICAgICAgICBjaHJvbWUucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cub3BlbihjaHJvbWUucnVudGltZS5nZXRVUkwoJ29wdGlvbnMuaHRtbCcpKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuRGF0YShkYXRhOiBhbnlbXSkge1xuICAgIGlmIChkYXRhW2RhdGEubGVuZ3RoIC0gMV0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgZGF0YS5wb3AoKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3BhcGFwYXJzZSdcbmltcG9ydCB7IGJ1aWxkSW5zZXJ0Um93c1JlcXVlc3QsIGJ1aWxkSW5zZXJ0RGF0YVJlcXVlc3QsIGJ1aWxkQXV0b0ZpbGxSZXF1ZXN0IH0gZnJvbSBcIi4vc2hlZXRzXCJcbmltcG9ydCAqIGFzIEggZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUdBUEkgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uJ1xuaW1wb3J0IHsgc2V0dGluZ3NGcm9tU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSdcbmltcG9ydCB7IGFkZE9wdGlvbiB9IGZyb20gJy4vdWknXG5cbmNvbnN0IGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dEZpbGUnKSFcbmNvbnN0IGluU2V0dGluZ3NQcm9maWxlOiBIVE1MU2VsZWN0RWxlbWVudCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NQcm9maWxlJykhXG5jb25zdCBzdGF0dXNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpIVxuY29uc3QgaW1wb3J0Rm9ybTogSFRNTEZvcm1FbGVtZW50ID0gPEhUTUxGb3JtRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0Rm9ybScpIVxuXG5jb25zdCBzZXRTdGF0dXMgPSAoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICBzdGF0dXNFbGVtLmlubmVyVGV4dCA9IHN0YXR1c1xufVxuXG4vLyBydW5zIHdoZW4gRE9NIGlzIGxvYWRlZFxuKCgpID0+IHtcbiAgICBpbml0aWFsaXplR0FQSSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnYXBpIGluaXRpYWxpemVkIGFuZCB0b2tlbiByZXRyaWV2ZWQnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGlzYWJsZWRdJykuZm9yRWFjaCgoZWxlbSkgPT4gKDxIVE1MSW5wdXRFbGVtZW50PmVsZW0pLmRpc2FibGVkID0gZmFsc2UpXG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKVxuICAgICAgICBzZXRTdGF0dXMoJ05vdCBhdXRob3JpemVkLCBnbyB0byBvcHRpb25zIHBhZ2UgdG8gYXV0aG9yaXplIHRoaXMgYXBwJylcbiAgICAgICAgc2hvd0NvbmZpZ3VyZUJ1dHRvbigpXG4gICAgfSlcbiAgICBzZXR0aW5nc0Zyb21TdG9yYWdlKChzZXR0aW5ncykgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncy5wcm9maWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgYWRkT3B0aW9uKGluU2V0dGluZ3NQcm9maWxlLCBrZXksIHNldHRpbmdzLnByb2ZpbGVzW2tleV0pXG4gICAgICAgIH0pO1xuICAgIH0pXG59KSgpXG5cbmNvbnN0IHNob3dDb25maWd1cmVCdXR0b24gPSAoKSA9PiB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuLmlubmVyVGV4dCA9ICfinqEgQ29uZmlndXJlIGluIG9wdGlvbnMg4pqZ77iPJ1xuICAgIGJ0bi5jbGFzc05hbWUgPSAncHVyZS1idXR0b24gYnV0dG9uLXdhcm5pbmcnXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgSC5nb1RvT3B0aW9ucylcbiAgICBzdGF0dXNFbGVtLnBhcmVudE5vZGU/LmFwcGVuZChidG4pXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb3JyZWN0cyB0aGUgY29sdW1ucyBmcm9tIGEgbWF0cml4IHdoZXJlIHRoZSBmaXJzdCByb3cgYXJlIHRoZSBoZWFkZXJzIG9mIHRoZSBkYXRhLlxuICogaXQgbWFrZXMgc3VyZSB0aGUgZGVzaXJlZCBoZWFkZXJzIHdpbGwgYmUgbGVmdCBvdmVyIGluIHRoZSBlbmQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyBkYXRhIGZyb20gdGhlIG9yaWdpbmFsIG1hdHJpeFxuICogQHBhcmFtIGNvcnJlY3RIZWFkZXJzIEEgbGlzdCBvZiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBoZWFkZXIgaW4gdGhlIGRlc2lyZWQgd2F5XG4gKiBAcGFyYW0gZGF0YSBUaGUgbWF0cml4IG9mIGRhdGEgd2hlcmUgdGhlIGZpcnN0IHJvdyBhcmUgaGVhZGluZ3MgKGluY29ycmVjdCBoZWFkaW5ncyEpXG4gKi9cbmNvbnN0IHN3aXRjaENvbHVtbnMgPSAoXG4gICAgY29ycmVjdEhlYWRlcnM6IHN0cmluZ1tdLCAvLyB0aGUgY29ycmVjdCBvcmRlciBvZiBjb2x1bW5zXG4gICAgZGF0YTogc3RyaW5nW11bXSAvLyB0aGUgbWF0cml4IG9mIGRhdGEgcmV0cmlldmVkIGZyb20gQ1NWXG4pID0+IHtcbiAgICBjb25zdCBDU1ZoZWFkZXJzID0gZGF0YS5zaGlmdCgpIC8vIGdldCB0aGUgY29sdW1ucyBmcm9tIHRoZSBkYXRhICh0aGVzZSBhcmUgbm90IGluIGNvcnJlY3Qgb3JkZXIgeWV0ISlcbiAgICBjb25zdCByb3dDb3VudCA9IGRhdGEubGVuZ3RoXG4gICAgZGF0YSA9IEgudHJhbnNwb3NlKGRhdGEpIC8vIHRyYW5zcG9zZSBzbyBpdHMgZWFzaWVyIHRvIHdvcmsgd2l0aCB0aGUgbWF0cml4IGRhdGFcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICBsZXQgY29yckRhdGE6IHN0cmluZ1tdW10gPSBbXSAvLyBwcmVwYXJlIG91ciBjb3JyZWN0IG1hdHJpeCAodGhpcyB3aWxsIHN0b3JlIHRoZSBkYXRhIHdpdGggY29ycmVjdCBjb2x1bW5zKVxuICAgIGNvcnJlY3RIZWFkZXJzLmZvckVhY2goKGhlYWRlcjogc3RyaW5nKSA9PiB7IC8vIGxvb3AgdGhyb3VnaCB0aGUgY29ycmVjdCBjb2x1bW5zXG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlciwgQ1NWaGVhZGVycz8uaW5jbHVkZXMoaGVhZGVyKSlcbiAgICAgICAgaWYgKENTVmhlYWRlcnM/LmluY2x1ZGVzKGhlYWRlcikpIHtcbiAgICAgICAgICAgIC8vIGlmIGhlYWRlciBleGlzdHMgZ2V0IHRoZSByb3dzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBoZWFkZXIgYW5kIGFkZCBpdCB0byB0aGUgY29ycmVjdCBtYXRyaXhcbiAgICAgICAgICAgIGNvcnJEYXRhLnB1c2goZGF0YVtILmdldEtleShDU1ZoZWFkZXJzLCBoZWFkZXIpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvcnJEYXRhLnB1c2gobmV3IEFycmF5KHJvd0NvdW50KS5maWxsKFwiXCIpKSAvLyBhZGQgZW1wdHkgYXJyYXkgd2hlbiBoZWFkZXIgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgLy8gdGhpcyBpcyBkb25lIHNvIHRoYXQgdGhlIGRlc2lyZWQgbGVuZ3RoIGlzIGtlcHQgd2hpbGUgZ29pbmcgdHJvdWdoIHRoZSBkZXNpcmVkIGhlYWRpbmdzXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjb3JyRGF0YSlcbiAgICAvLyB0cmFuc3Bvc2UgYmFjayBpbnRvIG9yaWdpbmFsIHN0YXRlXG4gICAgY29yckRhdGEgPSBILnRyYW5zcG9zZShjb3JyRGF0YSlcbiAgICBjb25zb2xlLmxvZyhjb3JyRGF0YSlcbiAgICByZXR1cm4gY29yckRhdGFcbn1cblxuY29uc3QgaW1wb3J0Um93c1RvU2hlZXRzID0gKFxuICAgIGZpbGU6IEZpbGUsXG4gICAgc3ByZWFkc2hlZXRJZDogc3RyaW5nLFxuICAgIHNoZWV0SWQ6IG51bWJlcixcbiAgICBjb2x1bW5PcmRlcjogc3RyaW5nW10sXG4gICAgZG9BdXRvRmlsbDogYm9vbGVhblxuKSA9PiB7XG4gICAgY29uc29sZS5kZWJ1ZygnZG8gYXV0b2ZpbGw/JywgZG9BdXRvRmlsbClcbiAgICBwYXJzZShmaWxlLCB7XG4gICAgICAgIGNvbXBsZXRlOiBhc3luYyAocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGE6IGFueVtdID0gcmVzdWx0cy5kYXRhXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgSC5jbGVhbkRhdGEoZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBkYXRhID0gc3dpdGNoQ29sdW1ucyhjb2x1bW5PcmRlciwgZGF0YSlcblxuICAgICAgICAgICAgbGV0IGJhdGNoVXBkYXRlUmVxdWVzdDogZ2FwaS5jbGllbnQuc2hlZXRzLkJhdGNoVXBkYXRlU3ByZWFkc2hlZXRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgaW5zZXJ0RGltZW5zaW9uOiBidWlsZEluc2VydFJvd3NSZXF1ZXN0KHNoZWV0SWQsIGRhdGEubGVuZ3RoKSB9LCAvLyBjcmVhdGUgZW1wdHkgcm93c1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvQXV0b0ZpbGwpIHtcbiAgICAgICAgICAgICAgICBiYXRjaFVwZGF0ZVJlcXVlc3QucmVxdWVzdHMgPSBiYXRjaFVwZGF0ZVJlcXVlc3QucmVxdWVzdHM/LmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgIHsgYXV0b0ZpbGw6IGJ1aWxkQXV0b0ZpbGxSZXF1ZXN0KHNoZWV0SWQsIGRhdGEubGVuZ3RoLCA4KSB9LCAvLyBjYXRlZ29yeSBpdGVtIGNvbHVtbiAoSSlcbiAgICAgICAgICAgICAgICAgICAgeyBhdXRvRmlsbDogYnVpbGRBdXRvRmlsbFJlcXVlc3Qoc2hlZXRJZCwgZGF0YS5sZW5ndGgsIDEzKSB9LCAvLyBkaXNhYmxlZCBjb2x1bW4gKE4pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyhkb0F1dG9GaWxsLCBiYXRjaFVwZGF0ZVJlcXVlc3QpXG4gICAgICAgICAgICBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLmJhdGNoVXBkYXRlKHtzcHJlYWRzaGVldElkfSwgYmF0Y2hVcGRhdGVSZXF1ZXN0KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy51cGRhdGUoXG4gICAgICAgICAgICAgICAgYnVpbGRJbnNlcnREYXRhUmVxdWVzdChzcHJlYWRzaGVldElkLCBkYXRhKVxuICAgICAgICAgICAgKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHJlc3BvbnNlLnJlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVwZGF0ZWRSb3dzLCB1cGRhdGVkQ29sdW1ucywgdXBkYXRlZENlbGxzIH0gPSByZXNwb25zZS5yZXN1bHRcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoYHJvd3M6ICR7dXBkYXRlZFJvd3N9LCBjb2xzOiAke3VwZGF0ZWRDb2x1bW5zfSBhZGRlZCBhbmQgJHt1cGRhdGVkQ2VsbHN9IGNlbGxzIHVwZGF0ZWQuYClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgc2V0U3RhdHVzKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pbXBvcnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKGlucHV0RmlsZS5maWxlcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZpbGUgPSBpbnB1dEZpbGUuZmlsZXNbMF1cbiAgICBzZXR0aW5nc0Zyb21TdG9yYWdlKChzZXR0aW5ncykgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRQcm9maWxlID0gaW5TZXR0aW5nc1Byb2ZpbGUub3B0aW9ucy5pdGVtKGluU2V0dGluZ3NQcm9maWxlLnNlbGVjdGVkSW5kZXgpXG4gICAgICAgIGlmICghKHNlbGVjdGVkUHJvZmlsZSAmJiBzZWxlY3RlZFByb2ZpbGUuaW5uZXJUZXh0IGluIHNldHRpbmdzLnByb2ZpbGVzKSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKCdQcm9maWxlIGRvZXMgbm90IGV4aXN0IScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29sdW1uT3JkZXI6IHN0cmluZ1tdID0gc2V0dGluZ3MucHJvZmlsZXNbc2VsZWN0ZWRQcm9maWxlLmlubmVyVGV4dF1cbiAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgICAgIGltcG9ydFJvd3NUb1NoZWV0cyhcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBzZXR0aW5ncy5zcHJlYWRzaGVldElkLFxuICAgICAgICAgICAgc2V0dGluZ3Muc2hlZXRJZCxcbiAgICAgICAgICAgIGNvbHVtbk9yZGVyLFxuICAgICAgICAgICAgc2V0dGluZ3MuYXV0b0ZpbGxcbiAgICAgICAgKVxuICAgIH0pXG59KVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5zZXJ0RGF0YVJlcXVlc3Qoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCByb3dzOiBhbnlbXVtdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZCxcbiAgICAgICAgcmFuZ2U6IGBBMjoke3Jvd3MubGVuZ3RoICsgMX1gLFxuICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBcIlVTRVJfRU5URVJFRFwiLFxuICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgdmFsdWVzOiByb3dzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBdXRvRmlsbFJlcXVlc3Qoc2hlZXRJZDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IGdhcGkuY2xpZW50LnNoZWV0cy5BdXRvRmlsbFJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFsdGVybmF0ZVNlcmllczogZmFsc2UsXG4gICAgICAgIHNvdXJjZUFuZERlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBzaGVldElkLFxuICAgICAgICAgICAgICAgIHN0YXJ0Um93SW5kZXg6IDEsIC8vIGVuZCBhdCBzZWNvbmQgcm93LCBiZWNhdXNlIGZpcnN0IHJvdyBhcmUgaGVhZGVyc1xuICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4OiBsZW5ndGggKyAxLCAvLyBzdGFydCBhdCBsYXN0IHJvdyB0aGF0IHdhcyBzdGlsbCBwb3B1bGF0ZWQsIHRoaXMgaXMgdGhlIHJlZmVyZW5jZSBmb3IgdGhlIGF1dG9maWxsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uSW5kZXg6IGNvbHVtbkluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGltZW5zaW9uOiBcIlJPV1NcIiwgLy8gYXV0b2ZpbGwgcm93c1xuICAgICAgICAgICAgZmlsbExlbmd0aDogLWxlbmd0aCAvLyBhdXRvZmlsbCB1cCB3aXRoIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5zZXJ0Um93c1JlcXVlc3QoXG4gICAgc2hlZXRJZDogbnVtYmVyLFxuICAgIGFtb3VudDogbnVtYmVyXG4pOiBnYXBpLmNsaWVudC5zaGVldHMuSW5zZXJ0RGltZW5zaW9uUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIHNoZWV0SWQ6IHNoZWV0SWQsXG4gICAgICAgICAgICBkaW1lbnNpb246IFwiUk9XU1wiLFxuICAgICAgICAgICAgc3RhcnRJbmRleDogMSxcbiAgICAgICAgICAgIGVuZEluZGV4OiBhbW91bnQgKyAxXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGVldE5hbWVzKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLmdldCh7XG4gICAgICAgIHNwcmVhZHNoZWV0SWRcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc0Zyb21TdG9yYWdlID0gKGZuOiAoc2V0dGluZ3M6IFNldHRpbmdzKSA9PiB2b2lkKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydzcHJlYWRzaGVldElkJywgJ3NoZWV0SWQnLCAncHJvZmlsZXMnLCAnYXV0b0ZpbGwnXSwgKGl0ZW1zKSA9PiBcbiAgICAgICAgZm4oe1xuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogaXRlbXMuc3ByZWFkc2hlZXRJZCxcbiAgICAgICAgICAgIHNoZWV0SWQ6IGl0ZW1zLnNoZWV0SWQsXG4gICAgICAgICAgICBwcm9maWxlczogaXRlbXMucHJvZmlsZXMgfHwge30sXG4gICAgICAgICAgICBhdXRvRmlsbDogaXRlbXMuYXV0b0ZpbGwsXG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVTZXR0aW5ncyA9IChzZXR0aW5nczogU2V0dGluZ3MsIGZuOiAoKSA9PiB2b2lkKSA9PiBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzZXR0aW5ncywgZm4pIiwiZXhwb3J0IGNvbnN0IHJlbW92ZU9wdGlvbnMgPSAoc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQpID0+IHtcbiAgICBsZXQgbCA9IHNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gbCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQub3B0aW9ucy5yZW1vdmUoaSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkT3B0aW9uID0gKFxuICAgIHNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTERhdGFMaXN0RWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgbmFtZT86IHN0cmluZ1xuKSA9PiB7XG4gICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKSlcbiAgICBpZiAobmFtZSkgeyBcbiAgICAgICAgb3B0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpIFxuICAgIH1cbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==