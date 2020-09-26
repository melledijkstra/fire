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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var authentication_1 = __webpack_require__(/*! ./authentication */ "./src/authentication.ts");
var sheets_1 = __webpack_require__(/*! ./sheets */ "./src/sheets.ts");
var inSpreadsheetId = document.getElementById("spreadsheetId");
var inSheetId = document.getElementById("sheetId");
var inColumnOrder = document.getElementById("columnOrder");
var statusElem = document.getElementById('status');
var btnAuth = document.getElementById('oauth');
var btnRemove = document.getElementById('remove');
var settingsFrom = document.getElementById('settingsForm');
function setStatus(s) {
    statusElem.innerText = s;
}
(function () {
    authentication_1.initializeGAPI(function () {
        console.log('gapi initialized and token retrieved');
        onAuthorized();
    }, function (error) {
        console.log('error', error);
        setStatus('Not authorized, click the button to authorize this app');
    });
    chrome.storage.sync.get(['spreadsheetId', 'columnOrder'], function (items) {
        inSpreadsheetId.value = items.spreadsheetId || inSpreadsheetId.value;
        inColumnOrder.value = items.columnOrder || inColumnOrder.value;
    });
})();
function onAuthorized() {
    setStatus('Authorized');
    chrome.storage.sync.get(['spreadsheetId', 'sheetId'], function (items) {
        onSpreadsheetChange(items.spreadsheetId, function () { return inSheetId.value = items.sheetId; });
    });
    document.querySelectorAll('[disabled]').forEach(function (item) {
        item.disabled = false;
    });
}
function onSpreadsheetChange(spreadsheetId, afterChange) {
    sheets_1.getSheetNames(spreadsheetId).then(function (response) {
        if (response.result.sheets !== undefined)
            buildSheetOptions(response.result.sheets);
        afterChange === null || afterChange === void 0 ? void 0 : afterChange();
    }, function (error) {
        console.log(error);
        setStatus(error.result.error.message);
    });
}
function removeOptions() {
    var l = inSheetId.options.length;
    for (var i = l - 1; i >= 0; i--) {
        inSheetId.options.remove(i);
    }
}
function buildSheetOptions(sheets) {
    sheets.map(function (sheet) {
        var _a;
        if (((_a = sheet.properties) === null || _a === void 0 ? void 0 : _a.title) !== undefined && sheet.properties.sheetId !== undefined) {
            addOption(sheet.properties.title, sheet.properties.sheetId);
        }
    });
    inSheetId.disabled = false;
}
function addOption(title, value) {
    var opt = document.createElement('option');
    opt.appendChild(document.createTextNode(title));
    opt.value = String(value);
    inSheetId.appendChild(opt);
}
inSpreadsheetId.addEventListener('change', function (e) {
    removeOptions();
    var newSSId = e.target.value;
    if (newSSId) {
        onSpreadsheetChange(newSSId);
    }
});
btnAuth.addEventListener('click', function (e) {
    authentication_1.retrieveToken(function (token) {
        console.log('retrieved token', token);
        onAuthorized();
    }, function () {
        console.log('user did not authorize app :(');
        setStatus('You have to authorize the app to continue. If you did, something went wrong...');
    });
});
btnRemove.addEventListener('click', function (e) {
    authentication_1.removeToken(function () {
        console.log('token removed');
        setStatus('Unauthorized!');
        document.querySelectorAll('input,button,select,textarea').forEach(function (elem) {
            if (elem.id == 'oauth') {
                return;
            }
            elem.disabled = true;
        });
    });
});
settingsFrom.addEventListener('submit', function (e) {
    e.preventDefault();
    var spreadsheetId = inSpreadsheetId.value;
    var sheetId = inSheetId.options[inSheetId.selectedIndex].value;
    var columnOrder = inColumnOrder.value;
    chrome.storage.sync.set({
        spreadsheetId: spreadsheetId,
        sheetId: sheetId,
        columnOrder: columnOrder
    }, function () { return setStatus("Settings saved!"); });
});
setStatus('Extension loaded');


/***/ }),

/***/ "./src/sheets.ts":
/*!***********************!*\
  !*** ./src/sheets.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSheetNames = exports.insertRows = exports.insertData = void 0;
function insertData(rows, config) {
    var spreadsheetId = config.spreadsheetId;
    var body = {
        values: rows
    };
    return gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: "A2:" + (rows.length + 1),
        valueInputOption: "USER_ENTERED",
        resource: body
    });
}
exports.insertData = insertData;
function insertRows(amount, config) {
    var spreadsheetId = config.spreadsheetId, sheetId = config.sheetId;
    var emptyRowsRequest = {
        requests: [
            {
                "insertDimension": {
                    "range": {
                        "sheetId": sheetId,
                        "dimension": "ROWS",
                        "startIndex": 1,
                        "endIndex": amount + 1
                    },
                    "inheritFromBefore": false
                }
            }
        ]
    };
    var params = { spreadsheetId: spreadsheetId };
    return gapi.client.sheets.spreadsheets.batchUpdate(params, emptyRowsRequest);
}
exports.insertRows = insertRows;
function getSheetNames(spreadsheetId) {
    return gapi.client.sheets.spreadsheets.get({
        spreadsheetId: spreadsheetId
    });
}
exports.getSheetNames = getSheetNames;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGhlbnRpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoZWV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHNFQUE2QjtBQUU3Qjs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLE9BQW9CLEVBQUUsT0FBK0I7SUFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxNQUFNO1lBQ3ZCLGVBQWUsRUFBRSxnQkFBTSxDQUFDLGFBQWE7U0FD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cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL29wdGlvbnMudHNcIik7XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIEdBUEkgZW52aXJvbm1lbnRcbiAqIEBwYXJhbSBzdWNjZXNzIFdoZW4gY2xpZW50IGhhcyBsb2FkZWQgYW5kIHJldHJpZXZhbCBvZiB0b2tlbiBpcyBzdWNjZXNzZnVsXG4gKiBAcGFyYW0gZmFpbHVyZSBXaGVuIGxvYWRpbmcgdGhlIGNsaWVudCBmYWlsZWQgb2YgcmV0cmlldmFsIG9mIHRoZSB0b2tlbiBmYWlsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVHQVBJKHN1Y2Nlc3M/OiAoKSA9PiB2b2lkLCBmYWlsdXJlPzogKGVycm9yPzogYW55KSA9PiB2b2lkKSB7XG4gIGdhcGkubG9hZCgnY2xpZW50JywgKCkgPT4ge1xuICAgIGdhcGkuY2xpZW50LmluaXQoe1xuICAgICAgJ2FwaUtleSc6IGNvbmZpZy5hcGlLZXksXG4gICAgICAnZGlzY292ZXJ5RG9jcyc6IGNvbmZpZy5kaXNjb3ZlcnlEb2NzXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICByZXRyaWV2ZVRva2VuKHN1Y2Nlc3MsIGZhaWx1cmUsIGZhbHNlKTsgLy8gcmV0cmlldmUgdG9rZW4gbm9uLWludGVyYWN0aXZlbHlcbiAgICB9LCBmYWlsdXJlKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHRva2VuIGFuZCBzZXRzIGl0IGZvciB0aGUgZ2FwaVxuICogQHBhcmFtIHN1Y2Nlc3MgY2FsbGJhY2sgd2hlbiB0b2tlbiBpcyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkXG4gKiBAcGFyYW0gZmFpbHVyZSBjYWxsYmFjayB3aGVuIHNvbWV0aGluZyB3ZW50IHdyb25nIGdldHRpbmcgdGhlIHRva2VuXG4gKiBAcGFyYW0gaW50ZXJhY3RpdmUgaWYgYXNraW5nIGZvciB0b2tlbiBzaG91bGQgYmUgaW50ZXJhY3RpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlVG9rZW4oc3VjY2Vzcz86ICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkLCBmYWlsdXJlPzogKCkgPT4gdm9pZCwgaW50ZXJhY3RpdmUgPSB0cnVlKSB7XG4gIGNocm9tZS5pZGVudGl0eS5nZXRBdXRoVG9rZW4oeyBpbnRlcmFjdGl2ZSB9LCAodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGdhcGkuYXV0aC5zZXRUb2tlbig8Z2FwaS5hdXRoLkdvb2dsZUFwaU9BdXRoMlRva2VuT2JqZWN0PnsgYWNjZXNzX3Rva2VuOiB0b2tlbiB9KTtcbiAgICAgIHN1Y2Nlc3M/Lih0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgZmFpbHVyZT8uKClcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gIGxldCB0ID0gZ2FwaS5jbGllbnQuZ2V0VG9rZW4oKTtcbiAgaWYgKCF0KSByZXR1cm47XG4gIGNocm9tZS5pZGVudGl0eS5yZW1vdmVDYWNoZWRBdXRoVG9rZW4oe1xuICAgIHRva2VuOiB0LmFjY2Vzc190b2tlblxuICB9LCBjYWxsYmFjayk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhcGlLZXk6ICdBSXphU3lBTE4yMGdQNGJ1Ti10cExtYjlHcFN1TVFWZXFIVkpDREUnLFxuICAgIGRpc2NvdmVyeURvY3M6IFtcImh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tLyRkaXNjb3ZlcnkvcmVzdD92ZXJzaW9uPXY0XCJdLFxufVxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUdBUEksIHJlbW92ZVRva2VuLCByZXRyaWV2ZVRva2VuIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbidcbmltcG9ydCB7IGdldFNoZWV0TmFtZXMgfSBmcm9tICcuL3NoZWV0cydcblxuY29uc3QgaW5TcHJlYWRzaGVldElkOiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcHJlYWRzaGVldElkXCIpIVxuY29uc3QgaW5TaGVldElkOiBIVE1MU2VsZWN0RWxlbWVudCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoZWV0SWRcIikhXG5jb25zdCBpbkNvbHVtbk9yZGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5PcmRlclwiKSFcbmNvbnN0IHN0YXR1c0VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykhXG5jb25zdCBidG5BdXRoOiBIVE1MQnV0dG9uRWxlbWVudCA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2F1dGgnKSFcbmNvbnN0IGJ0blJlbW92ZTogSFRNTEJ1dHRvbkVsZW1lbnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZScpIVxuXG5jb25zdCBzZXR0aW5nc0Zyb206IEhUTUxGb3JtRWxlbWVudCA9IDxIVE1MRm9ybUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzRm9ybScpO1xuXG5mdW5jdGlvbiBzZXRTdGF0dXMoczogc3RyaW5nKSB7XG4gICAgc3RhdHVzRWxlbS5pbm5lclRleHQgPSBzXG59XG5cbihmdW5jdGlvbiAoKSB7IC8vIHJ1bnMgd2hlbiBET00gaXMgbG9hZGVkXG4gICAgaW5pdGlhbGl6ZUdBUEkoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2FwaSBpbml0aWFsaXplZCBhbmQgdG9rZW4gcmV0cmlldmVkJylcbiAgICAgICAgb25BdXRob3JpemVkKClcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICBzZXRTdGF0dXMoJ05vdCBhdXRob3JpemVkLCBjbGljayB0aGUgYnV0dG9uIHRvIGF1dGhvcml6ZSB0aGlzIGFwcCcpXG4gICAgfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydzcHJlYWRzaGVldElkJywgJ2NvbHVtbk9yZGVyJ10sIChpdGVtcykgPT4ge1xuICAgICAgICBpblNwcmVhZHNoZWV0SWQudmFsdWUgPSBpdGVtcy5zcHJlYWRzaGVldElkIHx8IGluU3ByZWFkc2hlZXRJZC52YWx1ZVxuICAgICAgICBpbkNvbHVtbk9yZGVyLnZhbHVlID0gaXRlbXMuY29sdW1uT3JkZXIgfHwgaW5Db2x1bW5PcmRlci52YWx1ZVxuICAgIH0pO1xufSkoKTtcblxuZnVuY3Rpb24gb25BdXRob3JpemVkKCkge1xuICAgIHNldFN0YXR1cygnQXV0aG9yaXplZCcpXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydzcHJlYWRzaGVldElkJywgJ3NoZWV0SWQnXSwgKGl0ZW1zKSA9PiB7XG4gICAgICAgIG9uU3ByZWFkc2hlZXRDaGFuZ2UoaXRlbXMuc3ByZWFkc2hlZXRJZCwgKCkgPT4gaW5TaGVldElkLnZhbHVlID0gaXRlbXMuc2hlZXRJZClcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkaXNhYmxlZF0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5pdGVtKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9uU3ByZWFkc2hlZXRDaGFuZ2Uoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCBhZnRlckNoYW5nZT86ICgpID0+IHZvaWQpIHtcbiAgICBnZXRTaGVldE5hbWVzKHNwcmVhZHNoZWV0SWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmKHJlc3BvbnNlLnJlc3VsdC5zaGVldHMgIT09IHVuZGVmaW5lZCkgYnVpbGRTaGVldE9wdGlvbnMocmVzcG9uc2UucmVzdWx0LnNoZWV0cylcbiAgICAgICAgYWZ0ZXJDaGFuZ2U/LigpXG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICBzZXRTdGF0dXMoZXJyb3IucmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3B0aW9ucygpIHtcbiAgICBsZXQgbCA9IGluU2hlZXRJZC5vcHRpb25zLmxlbmd0aFxuICAgIGZvciAobGV0IGkgPSBsIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaW5TaGVldElkLm9wdGlvbnMucmVtb3ZlKGkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRTaGVldE9wdGlvbnMoc2hlZXRzOiBnYXBpLmNsaWVudC5zaGVldHMuU2hlZXRbXSkge1xuICAgIHNoZWV0cy5tYXAoKHNoZWV0KSA9PiB7XG4gICAgICAgIGlmIChzaGVldC5wcm9wZXJ0aWVzPy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHNoZWV0LnByb3BlcnRpZXMuc2hlZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGRPcHRpb24oc2hlZXQucHJvcGVydGllcy50aXRsZSwgc2hlZXQucHJvcGVydGllcy5zaGVldElkKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBpblNoZWV0SWQuZGlzYWJsZWQgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBhZGRPcHRpb24odGl0bGU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSkpXG4gICAgb3B0LnZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIGluU2hlZXRJZC5hcHBlbmRDaGlsZChvcHQpXG59XG5cbmluU3ByZWFkc2hlZXRJZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHJlbW92ZU9wdGlvbnMoKTtcbiAgICBsZXQgbmV3U1NJZCA9ICg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkudmFsdWVcbiAgICBpZiAobmV3U1NJZCkge1xuICAgICAgICBvblNwcmVhZHNoZWV0Q2hhbmdlKG5ld1NTSWQpXG4gICAgfVxufSk7XG5cbmJ0bkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJldHJpZXZlVG9rZW4oKHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXRyaWV2ZWQgdG9rZW4nLCB0b2tlbilcbiAgICAgICAgb25BdXRob3JpemVkKClcbiAgICB9LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGRpZCBub3QgYXV0aG9yaXplIGFwcCA6KCcpXG4gICAgICAgIHNldFN0YXR1cygnWW91IGhhdmUgdG8gYXV0aG9yaXplIHRoZSBhcHAgdG8gY29udGludWUuIElmIHlvdSBkaWQsIHNvbWV0aGluZyB3ZW50IHdyb25nLi4uJylcbiAgICB9KTtcbn0pO1xuXG5idG5SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZVRva2VuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIHJlbW92ZWQnKVxuICAgICAgICBzZXRTdGF0dXMoJ1VuYXV0aG9yaXplZCEnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxidXR0b24sc2VsZWN0LHRleHRhcmVhJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW0uaWQgPT0gJ29hdXRoJykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmVsZW0pLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn0pXG5cbnNldHRpbmdzRnJvbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBzcHJlYWRzaGVldElkID0gaW5TcHJlYWRzaGVldElkLnZhbHVlXG4gICAgbGV0IHNoZWV0SWQgPSBpblNoZWV0SWQub3B0aW9uc1tpblNoZWV0SWQuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICBsZXQgY29sdW1uT3JkZXIgPSBpbkNvbHVtbk9yZGVyLnZhbHVlXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1xuICAgICAgICBzcHJlYWRzaGVldElkLFxuICAgICAgICBzaGVldElkLFxuICAgICAgICBjb2x1bW5PcmRlclxuICAgIH0sICgpID0+IHNldFN0YXR1cyhcIlNldHRpbmdzIHNhdmVkIVwiKSlcbn0pXG5cbnNldFN0YXR1cygnRXh0ZW5zaW9uIGxvYWRlZCcpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGluc2VydERhdGEocm93czogYW55W11bXSwgY29uZmlnOiB7XG4gICAgc3ByZWFkc2hlZXRJZDogc3RyaW5nXG59KSB7XG4gICAgY29uc3QgeyBzcHJlYWRzaGVldElkIH0gPSBjb25maWdcbiAgICBsZXQgYm9keSA9IHtcbiAgICAgICAgdmFsdWVzOiByb3dzXG4gICAgfTtcbiAgICByZXR1cm4gZ2FwaS5jbGllbnQuc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMudXBkYXRlKHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZCxcbiAgICAgICAgcmFuZ2U6IGBBMjoke3Jvd3MubGVuZ3RoICsgMX1gLFxuICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBcIlVTRVJfRU5URVJFRFwiLFxuICAgICAgICByZXNvdXJjZTogYm9keVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Um93cyhhbW91bnQ6IG51bWJlciwgY29uZmlnOiB7XG4gICAgc3ByZWFkc2hlZXRJZDogc3RyaW5nLFxuICAgIHNoZWV0SWQ6IG51bWJlclxufSkge1xuICAgIGNvbnN0IHtzcHJlYWRzaGVldElkLCBzaGVldElkfSA9IGNvbmZpZ1xuICAgIHZhciBlbXB0eVJvd3NSZXF1ZXN0ID0ge1xuICAgICAgICByZXF1ZXN0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaW5zZXJ0RGltZW5zaW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyYW5nZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNoZWV0SWRcIjogc2hlZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGltZW5zaW9uXCI6IFwiUk9XU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuZEluZGV4XCI6IGFtb3VudCArIDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbmhlcml0RnJvbUJlZm9yZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbiAgICBsZXQgcGFyYW1zID0geyBzcHJlYWRzaGVldElkOiBzcHJlYWRzaGVldElkIH1cblxuICAgIHJldHVybiBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLmJhdGNoVXBkYXRlKHBhcmFtcywgZW1wdHlSb3dzUmVxdWVzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGVldE5hbWVzKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLmdldCh7XG4gICAgICAgIHNwcmVhZHNoZWV0SWRcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=