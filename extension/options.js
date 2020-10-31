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

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_1 = __webpack_require__(/*! ./authentication */ "./src/authentication.ts");
var sheets_1 = __webpack_require__(/*! ./sheets */ "./src/sheets.ts");
var ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
var storage_1 = __webpack_require__(/*! ./storage */ "./src/storage.ts");
var inSpreadsheetId = document.getElementById("spreadsheetId");
var inSheetId = document.getElementById("sheetId");
var inColumnOrder = document.getElementById("columnOrder");
var inProfileName = document.getElementById('profileName');
var profileDataList = document.getElementById('profileList');
var checkAutoFill = document.getElementById("checkAutoFill");
var statusElem = document.getElementById('status');
var btnAuth = document.getElementById('oauth');
var btnRemove = document.getElementById('remove');
var btnDeleteProfile = document.getElementById('deleteProfile');
var settingsFrom = document.getElementById('settingsForm');
var baseSettings;
var setStatus = function (s) {
    statusElem.innerText = s;
};
(function () {
    authentication_1.initializeGAPI(function () {
        console.log('gapi initialized and token retrieved');
        onAuthorized();
    }, function (error) {
        console.log('error', error);
        setStatus('Not authorized, click the button to authorize this app');
    });
    storage_1.settingsFromStorage(function (settings) {
        baseSettings = settings;
        Object.keys(settings.profiles).forEach(function (key) {
            ui_1.addOption(profileDataList, settings.profiles[key], key, key);
        });
        inSpreadsheetId.value = settings.spreadsheetId || inSpreadsheetId.value;
        checkAutoFill.checked = settings.autoFill !== null ? settings.autoFill : checkAutoFill.checked;
    });
})();
var onAuthorized = function () {
    setStatus('Authorized');
    chrome.storage.sync.get(['spreadsheetId', 'sheetId'], function (items) {
        onSpreadsheetChange(items.spreadsheetId, function () { return inSheetId.value = items.sheetId; });
    });
    document.querySelectorAll('[disabled]').forEach(function (item) {
        item.disabled = false;
    });
};
var onSpreadsheetChange = function (spreadsheetId, afterChange) {
    sheets_1.getSheetNames(spreadsheetId).then(function (response) {
        if (response.result.sheets !== undefined)
            buildSheetOptions(response.result.sheets);
        afterChange === null || afterChange === void 0 ? void 0 : afterChange();
    }, function (error) {
        console.log(error);
        setStatus(error.result.error.message);
    });
};
var buildSheetOptions = function (sheets) {
    sheets.map(function (sheet) {
        var _a;
        if (((_a = sheet.properties) === null || _a === void 0 ? void 0 : _a.title) !== undefined && sheet.properties.sheetId !== undefined) {
            ui_1.addOption(inSheetId, sheet.properties.title, sheet.properties.sheetId);
        }
    });
    inSheetId.disabled = false;
};
inSpreadsheetId.addEventListener('change', function (e) {
    ui_1.removeOptions(inSheetId);
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
btnDeleteProfile.addEventListener('click', function (e) {
    var pname = inProfileName.value;
    if (pname in baseSettings.profiles) {
        delete baseSettings.profiles[pname];
        inColumnOrder.value = "";
        var item = profileDataList.options.namedItem(pname);
        if (item) {
            profileDataList.options[item.index].remove();
        }
        inProfileName.value = "";
    }
});
inProfileName.addEventListener('change', function (e) {
    var pname = inProfileName.value;
    inColumnOrder.value = (pname in baseSettings.profiles) ? baseSettings.profiles[pname] : "";
});
inColumnOrder.addEventListener('change', function (e) {
    var pname = inProfileName.value;
    var listItem = profileDataList.querySelector("[value=\"" + pname + "\"]");
    if (listItem !== null) {
        listItem.innerText = inColumnOrder.value;
    }
});
settingsFrom.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var newSettings = {
        spreadsheetId: inSpreadsheetId.value,
        sheetId: parseInt(inSheetId.options[inSheetId.selectedIndex].value),
        profiles: __assign(__assign({}, baseSettings.profiles), (_a = {}, _a[inProfileName.value] = inColumnOrder.value, _a)),
        autoFill: checkAutoFill.checked
    };
    storage_1.saveSettings(newSettings, function () {
        setStatus("Settings saved!");
        baseSettings = newSettings;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dGhlbnRpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxzRUFBNkI7QUFFN0I7Ozs7R0FJRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxPQUFvQixFQUFFLE9BQStCO0lBQ2xGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsUUFBUSxF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QUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0tBQ2pDO0lBQ0QsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pCLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ2xDLENBQUMiLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL29wdGlvbnMudHNcIik7XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIEdBUEkgZW52aXJvbm1lbnRcbiAqIEBwYXJhbSBzdWNjZXNzIFdoZW4gY2xpZW50IGhhcyBsb2FkZWQgYW5kIHJldHJpZXZhbCBvZiB0b2tlbiBpcyBzdWNjZXNzZnVsXG4gKiBAcGFyYW0gZmFpbHVyZSBXaGVuIGxvYWRpbmcgdGhlIGNsaWVudCBmYWlsZWQgb2YgcmV0cmlldmFsIG9mIHRoZSB0b2tlbiBmYWlsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVHQVBJKHN1Y2Nlc3M/OiAoKSA9PiB2b2lkLCBmYWlsdXJlPzogKGVycm9yPzogYW55KSA9PiB2b2lkKSB7XG4gIGdhcGkubG9hZCgnY2xpZW50JywgKCkgPT4ge1xuICAgIGdhcGkuY2xpZW50LmluaXQoe1xuICAgICAgJ2FwaUtleSc6IGNvbmZpZy5hcGlLZXksXG4gICAgICAnZGlzY292ZXJ5RG9jcyc6IGNvbmZpZy5kaXNjb3ZlcnlEb2NzXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICByZXRyaWV2ZVRva2VuKHN1Y2Nlc3MsIGZhaWx1cmUsIGZhbHNlKTsgLy8gcmV0cmlldmUgdG9rZW4gbm9uLWludGVyYWN0aXZlbHlcbiAgICB9LCBmYWlsdXJlKTtcbiAgfSlcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIHRva2VuIGFuZCBzZXRzIGl0IGZvciB0aGUgZ2FwaVxuICogQHBhcmFtIHN1Y2Nlc3MgY2FsbGJhY2sgd2hlbiB0b2tlbiBpcyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkXG4gKiBAcGFyYW0gZmFpbHVyZSBjYWxsYmFjayB3aGVuIHNvbWV0aGluZyB3ZW50IHdyb25nIGdldHRpbmcgdGhlIHRva2VuXG4gKiBAcGFyYW0gaW50ZXJhY3RpdmUgaWYgYXNraW5nIGZvciB0b2tlbiBzaG91bGQgYmUgaW50ZXJhY3RpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlVG9rZW4oc3VjY2Vzcz86ICh0b2tlbjogc3RyaW5nKSA9PiB2b2lkLCBmYWlsdXJlPzogKCkgPT4gdm9pZCwgaW50ZXJhY3RpdmUgPSB0cnVlKSB7XG4gIGNocm9tZS5pZGVudGl0eS5nZXRBdXRoVG9rZW4oeyBpbnRlcmFjdGl2ZSB9LCAodG9rZW4pID0+IHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGdhcGkuYXV0aC5zZXRUb2tlbig8Z2FwaS5hdXRoLkdvb2dsZUFwaU9BdXRoMlRva2VuT2JqZWN0PnsgYWNjZXNzX3Rva2VuOiB0b2tlbiB9KTtcbiAgICAgIHN1Y2Nlc3M/Lih0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgZmFpbHVyZT8uKClcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oY2FsbGJhY2s/OiAoKSA9PiB2b2lkKSB7XG4gIGxldCB0ID0gZ2FwaS5jbGllbnQuZ2V0VG9rZW4oKTtcbiAgaWYgKCF0KSByZXR1cm47XG4gIGNocm9tZS5pZGVudGl0eS5yZW1vdmVDYWNoZWRBdXRoVG9rZW4oe1xuICAgIHRva2VuOiB0LmFjY2Vzc190b2tlblxuICB9LCBjYWxsYmFjayk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhcGlLZXk6ICdBSXphU3lBTE4yMGdQNGJ1Ti10cExtYjlHcFN1TVFWZXFIVkpDREUnLFxuICAgIGRpc2NvdmVyeURvY3M6IFtcImh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tLyRkaXNjb3ZlcnkvcmVzdD92ZXJzaW9uPXY0XCJdLFxufVxuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZUdBUEksIHJlbW92ZVRva2VuLCByZXRyaWV2ZVRva2VuIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbidcbmltcG9ydCB7IGdldFNoZWV0TmFtZXMgfSBmcm9tICcuL3NoZWV0cydcbmltcG9ydCB7IHJlbW92ZU9wdGlvbnMsIGFkZE9wdGlvbiB9IGZyb20gJy4vdWknXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQge3NldHRpbmdzRnJvbVN0b3JhZ2UsIHNhdmVTZXR0aW5nc30gZnJvbSAnLi9zdG9yYWdlJ1xuXG5jb25zdCBpblNwcmVhZHNoZWV0SWQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwcmVhZHNoZWV0SWRcIikhXG5jb25zdCBpblNoZWV0SWQ6IEhUTUxTZWxlY3RFbGVtZW50ID0gPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hlZXRJZFwiKSFcbmNvbnN0IGluQ29sdW1uT3JkZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtbk9yZGVyXCIpIVxuY29uc3QgaW5Qcm9maWxlTmFtZTogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlTmFtZScpIVxuY29uc3QgcHJvZmlsZURhdGFMaXN0OiBIVE1MRGF0YUxpc3RFbGVtZW50ID0gPEhUTUxEYXRhTGlzdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGVMaXN0JykhXG5jb25zdCBjaGVja0F1dG9GaWxsOiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0F1dG9GaWxsXCIpIVxuY29uc3Qgc3RhdHVzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKSFcbmNvbnN0IGJ0bkF1dGg6IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYXV0aCcpIVxuY29uc3QgYnRuUmVtb3ZlOiBIVE1MQnV0dG9uRWxlbWVudCA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlJykhXG5jb25zdCBidG5EZWxldGVQcm9maWxlOiBIVE1MQnV0dG9uRWxlbWVudCA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvZmlsZScpIVxuY29uc3Qgc2V0dGluZ3NGcm9tOiBIVE1MRm9ybUVsZW1lbnQgPSA8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0Zvcm0nKTtcblxubGV0IGJhc2VTZXR0aW5nczogU2V0dGluZ3M7XG5cbmNvbnN0IHNldFN0YXR1cyA9IChzOiBzdHJpbmcpID0+IHtcbiAgICBzdGF0dXNFbGVtLmlubmVyVGV4dCA9IHNcbn1cblxuKCgpID0+IHsgLy8gcnVucyB3aGVuIERPTSBpcyBsb2FkZWRcbiAgICBpbml0aWFsaXplR0FQSSgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnYXBpIGluaXRpYWxpemVkIGFuZCB0b2tlbiByZXRyaWV2ZWQnKVxuICAgICAgICBvbkF1dGhvcml6ZWQoKVxuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cygnTm90IGF1dGhvcml6ZWQsIGNsaWNrIHRoZSBidXR0b24gdG8gYXV0aG9yaXplIHRoaXMgYXBwJylcbiAgICB9KTtcbiAgICBzZXR0aW5nc0Zyb21TdG9yYWdlKChzZXR0aW5ncykgPT4ge1xuICAgICAgICBiYXNlU2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncy5wcm9maWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBhZGRPcHRpb24ocHJvZmlsZURhdGFMaXN0LCBzZXR0aW5ncy5wcm9maWxlc1trZXldLCBrZXksIGtleSlcbiAgICAgICAgfSlcbiAgICAgICAgaW5TcHJlYWRzaGVldElkLnZhbHVlID0gc2V0dGluZ3Muc3ByZWFkc2hlZXRJZCB8fCBpblNwcmVhZHNoZWV0SWQudmFsdWVcbiAgICAgICAgY2hlY2tBdXRvRmlsbC5jaGVja2VkID0gc2V0dGluZ3MuYXV0b0ZpbGwgIT09IG51bGwgPyBzZXR0aW5ncy5hdXRvRmlsbCA6IGNoZWNrQXV0b0ZpbGwuY2hlY2tlZFxuICAgIH0pXG59KSgpO1xuXG5jb25zdCBvbkF1dGhvcml6ZWQgPSAoKSA9PiB7XG4gICAgc2V0U3RhdHVzKCdBdXRob3JpemVkJylcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ3NwcmVhZHNoZWV0SWQnLCAnc2hlZXRJZCddLCAoaXRlbXMpID0+IHtcbiAgICAgICAgb25TcHJlYWRzaGVldENoYW5nZShpdGVtcy5zcHJlYWRzaGVldElkLCAoKSA9PiBpblNoZWV0SWQudmFsdWUgPSBpdGVtcy5zaGVldElkKVxuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2Rpc2FibGVkXScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50Pml0ZW0pLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSlcbn1cblxuY29uc3Qgb25TcHJlYWRzaGVldENoYW5nZSA9IChzcHJlYWRzaGVldElkOiBzdHJpbmcsIGFmdGVyQ2hhbmdlPzogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGdldFNoZWV0TmFtZXMoc3ByZWFkc2hlZXRJZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYocmVzcG9uc2UucmVzdWx0LnNoZWV0cyAhPT0gdW5kZWZpbmVkKSBidWlsZFNoZWV0T3B0aW9ucyhyZXNwb25zZS5yZXN1bHQuc2hlZXRzKVxuICAgICAgICBhZnRlckNoYW5nZT8uKClcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHNldFN0YXR1cyhlcnJvci5yZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICB9KVxufVxuXG5jb25zdCBidWlsZFNoZWV0T3B0aW9ucyA9IChzaGVldHM6IGdhcGkuY2xpZW50LnNoZWV0cy5TaGVldFtdKSA9PiB7XG4gICAgc2hlZXRzLm1hcCgoc2hlZXQpID0+IHtcbiAgICAgICAgaWYgKHNoZWV0LnByb3BlcnRpZXM/LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgc2hlZXQucHJvcGVydGllcy5zaGVldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkZE9wdGlvbihpblNoZWV0SWQsIHNoZWV0LnByb3BlcnRpZXMudGl0bGUsIHNoZWV0LnByb3BlcnRpZXMuc2hlZXRJZClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaW5TaGVldElkLmRpc2FibGVkID0gZmFsc2Vcbn1cblxuaW5TcHJlYWRzaGVldElkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgcmVtb3ZlT3B0aW9ucyhpblNoZWV0SWQpO1xuICAgIGxldCBuZXdTU0lkID0gKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS52YWx1ZVxuICAgIGlmIChuZXdTU0lkKSB7XG4gICAgICAgIG9uU3ByZWFkc2hlZXRDaGFuZ2UobmV3U1NJZClcbiAgICB9XG59KTtcblxuYnRuQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmV0cmlldmVUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlZCB0b2tlbicsIHRva2VuKVxuICAgICAgICBvbkF1dGhvcml6ZWQoKVxuICAgIH0sICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZGlkIG5vdCBhdXRob3JpemUgYXBwIDooJylcbiAgICAgICAgc2V0U3RhdHVzKCdZb3UgaGF2ZSB0byBhdXRob3JpemUgdGhlIGFwcCB0byBjb250aW51ZS4gSWYgeW91IGRpZCwgc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nKVxuICAgIH0pO1xufSk7XG5cbmJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVtb3ZlVG9rZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gcmVtb3ZlZCcpXG4gICAgICAgIHNldFN0YXR1cygnVW5hdXRob3JpemVkIScpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LGJ1dHRvbixzZWxlY3QsdGV4dGFyZWEnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbS5pZCA9PSAnb2F1dGgnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZWxlbSkuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KVxuICAgIH0pO1xufSlcblxuYnRuRGVsZXRlUHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbGV0IHBuYW1lID0gaW5Qcm9maWxlTmFtZS52YWx1ZVxuICAgIGlmIChwbmFtZSBpbiBiYXNlU2V0dGluZ3MucHJvZmlsZXMpIHtcbiAgICAgICAgZGVsZXRlIGJhc2VTZXR0aW5ncy5wcm9maWxlc1twbmFtZV1cbiAgICAgICAgaW5Db2x1bW5PcmRlci52YWx1ZSA9IFwiXCJcbiAgICAgICAgbGV0IGl0ZW0gPSBwcm9maWxlRGF0YUxpc3Qub3B0aW9ucy5uYW1lZEl0ZW0ocG5hbWUpXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBwcm9maWxlRGF0YUxpc3Qub3B0aW9uc1tpdGVtLmluZGV4XS5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICAgIGluUHJvZmlsZU5hbWUudmFsdWUgPSBcIlwiXG4gICAgfVxufSlcblxuaW5Qcm9maWxlTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGxldCBwbmFtZSA9IGluUHJvZmlsZU5hbWUudmFsdWVcbiAgICBpbkNvbHVtbk9yZGVyLnZhbHVlID0gKHBuYW1lIGluIGJhc2VTZXR0aW5ncy5wcm9maWxlcykgPyBiYXNlU2V0dGluZ3MucHJvZmlsZXNbcG5hbWVdIDogXCJcIlxufSlcblxuaW5Db2x1bW5PcmRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIGxldCBwbmFtZSA9IGluUHJvZmlsZU5hbWUudmFsdWVcbiAgICBsZXQgbGlzdEl0ZW0gPSA8SFRNTE9wdGlvbkVsZW1lbnQ+cHJvZmlsZURhdGFMaXN0LnF1ZXJ5U2VsZWN0b3IoYFt2YWx1ZT1cIiR7cG5hbWV9XCJdYClcbiAgICBpZiAobGlzdEl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gaW5Db2x1bW5PcmRlci52YWx1ZVxuICAgIH1cbn0pXG5cbnNldHRpbmdzRnJvbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5ld1NldHRpbmdzOiBTZXR0aW5ncyA9IHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZDogaW5TcHJlYWRzaGVldElkLnZhbHVlLFxuICAgICAgICBzaGVldElkOiBwYXJzZUludChpblNoZWV0SWQub3B0aW9uc1tpblNoZWV0SWQuc2VsZWN0ZWRJbmRleF0udmFsdWUpLFxuICAgICAgICBwcm9maWxlczoge1xuICAgICAgICAgICAgLi4uYmFzZVNldHRpbmdzLnByb2ZpbGVzLCAgIFxuICAgICAgICAgICAgW2luUHJvZmlsZU5hbWUudmFsdWVdOiBpbkNvbHVtbk9yZGVyLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9GaWxsOiBjaGVja0F1dG9GaWxsLmNoZWNrZWRcbiAgICB9XG4gICAgc2F2ZVNldHRpbmdzKFxuICAgICAgICBuZXdTZXR0aW5ncywgXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcIlNldHRpbmdzIHNhdmVkIVwiKVxuICAgICAgICAgICAgYmFzZVNldHRpbmdzID0gbmV3U2V0dGluZ3NcbiAgICAgICAgfVxuICAgIClcbn0pXG5cbnNldFN0YXR1cygnRXh0ZW5zaW9uIGxvYWRlZCcpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5zZXJ0RGF0YVJlcXVlc3Qoc3ByZWFkc2hlZXRJZDogc3RyaW5nLCByb3dzOiBhbnlbXVtdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3ByZWFkc2hlZXRJZCxcbiAgICAgICAgcmFuZ2U6IGBBMjoke3Jvd3MubGVuZ3RoICsgMX1gLFxuICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiBcIlVTRVJfRU5URVJFRFwiLFxuICAgICAgICByZXNvdXJjZToge1xuICAgICAgICAgICAgdmFsdWVzOiByb3dzXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRBdXRvRmlsbFJlcXVlc3Qoc2hlZXRJZDogbnVtYmVyLCBsZW5ndGg6IG51bWJlciwgY29sdW1uSW5kZXg6IG51bWJlcik6IGdhcGkuY2xpZW50LnNoZWV0cy5BdXRvRmlsbFJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZUFsdGVybmF0ZVNlcmllczogZmFsc2UsXG4gICAgICAgIHNvdXJjZUFuZERlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBzaGVldElkLFxuICAgICAgICAgICAgICAgIHN0YXJ0Um93SW5kZXg6IDEsIC8vIGVuZCBhdCBzZWNvbmQgcm93LCBiZWNhdXNlIGZpcnN0IHJvdyBhcmUgaGVhZGVyc1xuICAgICAgICAgICAgICAgIGVuZFJvd0luZGV4OiBsZW5ndGggKyAxLCAvLyBzdGFydCBhdCBsYXN0IHJvdyB0aGF0IHdhcyBzdGlsbCBwb3B1bGF0ZWQsIHRoaXMgaXMgdGhlIHJlZmVyZW5jZSBmb3IgdGhlIGF1dG9maWxsXG4gICAgICAgICAgICAgICAgc3RhcnRDb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kQ29sdW1uSW5kZXg6IGNvbHVtbkluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGltZW5zaW9uOiBcIlJPV1NcIiwgLy8gYXV0b2ZpbGwgcm93c1xuICAgICAgICAgICAgZmlsbExlbmd0aDogLWxlbmd0aCAvLyBhdXRvZmlsbCB1cCB3aXRoIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5zZXJ0Um93c1JlcXVlc3QoXG4gICAgc2hlZXRJZDogbnVtYmVyLFxuICAgIGFtb3VudDogbnVtYmVyXG4pOiBnYXBpLmNsaWVudC5zaGVldHMuSW5zZXJ0RGltZW5zaW9uUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIHNoZWV0SWQ6IHNoZWV0SWQsXG4gICAgICAgICAgICBkaW1lbnNpb246IFwiUk9XU1wiLFxuICAgICAgICAgICAgc3RhcnRJbmRleDogMSxcbiAgICAgICAgICAgIGVuZEluZGV4OiBhbW91bnQgKyAxXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGVldE5hbWVzKHNwcmVhZHNoZWV0SWQ6IHN0cmluZykge1xuICAgIHJldHVybiBnYXBpLmNsaWVudC5zaGVldHMuc3ByZWFkc2hlZXRzLmdldCh7XG4gICAgICAgIHNwcmVhZHNoZWV0SWRcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBzZXR0aW5nc0Zyb21TdG9yYWdlID0gKGZuOiAoc2V0dGluZ3M6IFNldHRpbmdzKSA9PiB2b2lkKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydzcHJlYWRzaGVldElkJywgJ3NoZWV0SWQnLCAncHJvZmlsZXMnLCAnYXV0b0ZpbGwnXSwgKGl0ZW1zKSA9PiBcbiAgICAgICAgZm4oe1xuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogaXRlbXMuc3ByZWFkc2hlZXRJZCxcbiAgICAgICAgICAgIHNoZWV0SWQ6IGl0ZW1zLnNoZWV0SWQsXG4gICAgICAgICAgICBwcm9maWxlczogaXRlbXMucHJvZmlsZXMgfHwge30sXG4gICAgICAgICAgICBhdXRvRmlsbDogaXRlbXMuYXV0b0ZpbGwsXG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVTZXR0aW5ncyA9IChzZXR0aW5nczogU2V0dGluZ3MsIGZuOiAoKSA9PiB2b2lkKSA9PiBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzZXR0aW5ncywgZm4pIiwiZXhwb3J0IGNvbnN0IHJlbW92ZU9wdGlvbnMgPSAoc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQpID0+IHtcbiAgICBsZXQgbCA9IHNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGhcbiAgICBmb3IgKGxldCBpID0gbCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQub3B0aW9ucy5yZW1vdmUoaSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkT3B0aW9uID0gKFxuICAgIHNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTERhdGFMaXN0RWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHZhbHVlOiBhbnksXG4gICAgbmFtZT86IHN0cmluZ1xuKSA9PiB7XG4gICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgb3B0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKSlcbiAgICBpZiAobmFtZSkgeyBcbiAgICAgICAgb3B0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpIFxuICAgIH1cbiAgICBvcHQudmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==