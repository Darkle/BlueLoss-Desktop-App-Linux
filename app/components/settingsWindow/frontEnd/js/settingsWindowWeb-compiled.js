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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/settingsWindow/frontEnd/js/settingsWindowWeb.lsc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/actionsIndex.lsc":
/*!***************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/actionsIndex.lsc ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggleTab = __webpack_require__(/*! ./toggleTab.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/toggleTab.lsc");

var _toggleTab2 = _interopRequireDefault(_toggleTab);

var _openLink = __webpack_require__(/*! ./openLink.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/openLink.lsc");

var _openLink2 = _interopRequireDefault(_openLink);

var _animateDots = __webpack_require__(/*! ./animateDots.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/animateDots.lsc");

var _animateDots2 = _interopRequireDefault(_animateDots);

var _updateSetting = __webpack_require__(/*! ./updateSetting.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/updateSetting.lsc");

var _updateSetting2 = _interopRequireDefault(_updateSetting);

var _updateStateOnServerMessage = __webpack_require__(/*! ./updateStateOnServerMessage.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/updateStateOnServerMessage.lsc");

var _updateStateOnServerMessage2 = _interopRequireDefault(_updateStateOnServerMessage);

var _removeDevice = __webpack_require__(/*! ./removeDevice.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/removeDevice.lsc");

var _removeDevice2 = _interopRequireDefault(_removeDevice);

var _addNewDevice = __webpack_require__(/*! ./addNewDevice.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/addNewDevice.lsc");

var _addNewDevice2 = _interopRequireDefault(_addNewDevice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  toggleTab: _toggleTab2.default,
  openLink: _openLink2.default,
  animateDots: _animateDots2.default,
  updateSetting: _updateSetting2.default,
  updateStateOnServerMessage: _updateStateOnServerMessage2.default,
  removeDevice: _removeDevice2.default,
  addNewDevice: _addNewDevice2.default
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/addNewDevice.lsc":
/*!***************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/addNewDevice.lsc ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(/*! ../../../../../types/types.lsc */ "./app/components/types/types.lsc");

/**
* HyperApp - if you need to use the state & actions and return data, you need
* to use `(value) => (state, actions) =>`
* https://github.com/hyperapp/hyperapp#actions
*/
exports.default = function addNewDevice(newDevice) {
  return function (state) {
    if (state.devicesToSearchFor[newDevice.deviceId]) return {};
    //TODO: send new settings to server
    // ipcRenderer.send('renderer:device-added-in-ui', newDevice)
    return {
      devicesToSearchFor: _extends({}, state.devicesToSearchFor, {
        [newDevice.deviceId]: newDevice
      })
    };
  };
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/animateDots.lsc":
/*!**************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/animateDots.lsc ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// HyperApp - this is called from a lifecycle event, so the element is the thing thats passed in.
exports.default = function animateDots(element) {
  function animateStatusDots(interval = 0) {
    setTimeout(function () {
      element.classList.toggle('play');
      animateStatusDots(!element.classList.contains('play') ? 285 : 4200);
    }, interval);
  }animateStatusDots();
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/openLink.lsc":
/*!***********************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/openLink.lsc ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function openLink(event) {
  event.preventDefault();
  window.open(event.currentTarget.dataset.externalLink);
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/removeDevice.lsc":
/*!***************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/removeDevice.lsc ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(/*! ../../../../../types/types.lsc */ "./app/components/types/types.lsc");

/**
* HyperApp - if you need to use the state & actions and return data, you need
* to use `(value) => (state, actions) =>`
* https://github.com/hyperapp/hyperapp#actions
*/
exports.default = function removeDevice(deviceToRemove) {
  return function (state) {
    if (!state.devicesToSearchFor[deviceToRemove.deviceId]) return {};
    //TODO: send new settings to server
    // ipcRenderer.send('renderer:device-removed-in-ui', deviceToRemove)
    return {
      devicesToSearchFor: (() => {
        const _obj = {};
        for (let _obj2 = state.devicesToSearchFor, _i = 0, _keys = Object.keys(_obj2), _len = _keys.length; _i < _len; _i++) {
          const deviceId = _keys[_i];const device = _obj2[deviceId];
          if (deviceId !== deviceToRemove.deviceId) _obj[deviceId] = device;
        }return _obj;
      })()
    };
  };
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/toggleTab.lsc":
/*!************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/toggleTab.lsc ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// HyperApp - this is called from a lifecycle event, so the element is the thing thats passed in.
exports.default = function toggleTab(event) {
  return { activeTab: event.currentTarget.id };
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/updateSetting.lsc":
/*!****************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/updateSetting.lsc ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function updateSetting({ settingName, settingValue }) {
  //TODO: send new settings to server
  //ipcRenderer.send('renderer:setting-updated-in-ui', settingName, settingValue)
  return { [settingName]: settingValue };
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/actions/updateStateOnServerMessage.lsc":
/*!*****************************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/actions/updateStateOnServerMessage.lsc ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function updateStateOnServerMessage(newStateObjToMerge) {
  return newStateObjToMerge;
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/deviceCard.lsc":
/*!*****************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/deviceCard.lsc ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function deviceCard({ lookingForDevice, device, actions }) {
  const { deviceName, deviceId } = device;
  return (0, _hyperapp.h)(
    "x-card",
    { "class": "deviceCard" },
    (0, _hyperapp.h)(
      "x-box",
      null,
      (0, _hyperapp.h)(
        "x-box",
        { "class": "cardDeviceIcon" },
        (0, _hyperapp.h)("img", { src: `assets/icons/devicesIconForCards-${lookingForDevice ? 'blue' : 'grey'}.svg` })
      ),
      (0, _hyperapp.h)(
        "x-box",
        { vertical: true, "class": "deviceDetails" },
        (0, _hyperapp.h)(
          "strong",
          { "class": "vendorName" },
          deviceName
        ),
        (0, _hyperapp.h)(
          "p",
          { "class": "deviceMacAddress" },
          deviceId
        )
      ),
      (0, _hyperapp.h)(
        "x-box",
        { "class": "addRemoveButton" },

        // if expressions: http://bit.ly/2kNbt9R
        lookingForDevice ? (0, _hyperapp.h)(
          "x-button",
          { onclick: function () {
              actions.removeDevice(device);
            } },
          (0, _hyperapp.h)(
            "x-box",
            null,
            (0, _hyperapp.h)(
              "x-label",
              null,
              "Remove"
            )
          )
        ) : (0, _hyperapp.h)(
          "x-button",
          { onclick: function () {
              actions.addNewDevice(device);
            } },
          (0, _hyperapp.h)(
            "x-box",
            null,
            (0, _hyperapp.h)(
              "x-label",
              null,
              "Add"
            )
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/header.lsc":
/*!*******************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/header.lsc ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function () {
  return (0, _hyperapp.h)(
    "div",
    { id: "header" },
    (0, _hyperapp.h)(
      "div",
      { id: "logo" },
      (0, _hyperapp.h)(
        "div",
        { id: "headerIcon" },
        (0, _hyperapp.h)("img", { src: "assets/icons/BlueLossIcon.svg" })
      ),
      (0, _hyperapp.h)(
        "div",
        { id: "headerText" },
        "BlueLoss"
      )
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/helpTab.lsc":
/*!********************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/helpTab.lsc ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function ({ actions }) {
  return (0, _hyperapp.h)(
    "div",
    { "class": "tab", onclick: actions.openLink, id: "helpTab", "data-external-link": "https://github.com/Darkle/BlueLoss#readme" },
    (0, _hyperapp.h)(
      "div",
      { "class": "tabIcon" },
      (0, _hyperapp.h)(
        "svg",
        { height: "24", viewbox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        (0, _hyperapp.h)("path", { d: "M0 0h24v24H0z", fill: "none" }),
        (0, _hyperapp.h)("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" })
      )
    ),
    (0, _hyperapp.h)(
      "div",
      { "class": "tabText" },
      "Help"
    ),
    (0, _hyperapp.h)(
      "div",
      { "class": "tabLip" },
      (0, _hyperapp.h)("div", { "class": "tabArrow" }),
      (0, _hyperapp.h)("div", { "class": "tabLine" })
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/settingsInfoWindow.lsc":
/*!*******************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/settingsInfoWindow.lsc ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function ({ actions, state }) {
  const infoWindowDisplay = state.activeTab === 'settingsTab' ? 'flex' : 'none';
  const iconColorIsWhite = state.trayIconColor === 'white';

  return (0, _hyperapp.h)(
    'div',
    { id: 'settingsTabInfoWindow', style: { display: infoWindowDisplay } },
    (0, _hyperapp.h)(
      'x-box',
      { id: 'timeToLockSetting' },
      (0, _hyperapp.h)(
        'x-numberinput',
        {
          id: 'timeToLock',
          value: state.timeToLock,
          suffix: ' mins',
          min: '2',
          onchange: function ({ currentTarget: { value } }) {
            const newTimeToLock = value < minTimeToLock ? minTimeToLock : value;
            actions.updateSetting({ settingName: 'timeToLock', settingValue: newTimeToLock });
          }
        },
        (0, _hyperapp.h)('x-stepper', null)
      ),
      (0, _hyperapp.h)(
        'x-label',
        { 'for': 'timeToLock', id: 'timeToLockLabel' },
        (0, _hyperapp.h)(
          'x-box',
          { vertical: true },
          (0, _hyperapp.h)(
            'x-label',
            null,
            (0, _hyperapp.h)(
              'strong',
              null,
              'Time To Lock'
            )
          ),
          (0, _hyperapp.h)(
            'x-label',
            null,
            'Once a device has been lost, BlueLoss will wait this many minutes before locking the computer.'
          )
        )
      )
    ),
    (0, _hyperapp.h)(
      'x-box',
      { id: 'iconColorDropdownContainer' },
      (0, _hyperapp.h)(
        'select',
        {
          'class': 'select',
          id: 'iconColorDropdown',
          name: 'iconColorDropdown',
          onchange: function (event) {
            actions.changeTrayIconColor(event.currentTarget.value);
          }
        },
        (0, _hyperapp.h)(
          'option',
          { value: 'white', selected: iconColorIsWhite },
          'White'
        ),
        (0, _hyperapp.h)(
          'option',
          { value: 'blue', selected: !iconColorIsWhite },
          'Blue'
        )
      ),
      (0, _hyperapp.h)(
        'x-label',
        { 'for': 'iconColorDropdown', id: 'iconColorDropdownLabel' },
        (0, _hyperapp.h)(
          'x-box',
          { vertical: true },
          (0, _hyperapp.h)(
            'x-label',
            null,
            (0, _hyperapp.h)(
              'strong',
              null,
              isMac ? 'Menu Bar' : 'Tray',
              ' Icon Color'
            )
          )
        )
      )
    ),
    (0, _hyperapp.h)(
      'x-box',
      null,
      (0, _hyperapp.h)('x-checkbox', {
        id: 'erroReportingCheckbox',
        toggled: state.reportErrors,
        onchange: function (event) {
          actions.updateSetting({ settingName: 'reportErrors', settingValue: event.currentTarget.toggled });
        }
      }),
      (0, _hyperapp.h)(
        'x-label',
        { 'for': 'erroReportingCheckbox', id: 'erroReportingCheckboxLabel' },
        (0, _hyperapp.h)(
          'x-box',
          { vertical: true },
          (0, _hyperapp.h)(
            'x-label',
            null,
            (0, _hyperapp.h)(
              'strong',
              null,
              'Error Reporting'
            )
          ),
          (0, _hyperapp.h)(
            'x-label',
            null,
            'Any errors generated by the app will be sent to rollbar.com. This helps development of the app.'
          )
        )
      )
    ),
    (0, _hyperapp.h)(
      'x-box',
      null,
      (0, _hyperapp.h)('x-checkbox', {
        id: 'runOnStartupCheckbox',
        toggled: state.runOnStartup,
        onchange: function (event) {
          actions.updateSetting({ settingName: 'runOnStartup', settingValue: event.currentTarget.toggled });
        }
      }),
      (0, _hyperapp.h)(
        'x-label',
        { 'for': 'runOnStartupCheckbox', id: 'runOnStartupCheckboxLabel' },
        (0, _hyperapp.h)(
          'x-box',
          { vertical: true },
          (0, _hyperapp.h)(
            'x-label',
            null,
            (0, _hyperapp.h)(
              'strong',
              null,
              'Run On System Startup'
            )
          )
        )
      )
    ),
    (0, _hyperapp.h)(
      'x-box',
      null,
      (0, _hyperapp.h)('x-switch', {
        id: 'userDebugSwitch',
        toggled: state.userDebug,
        onchange: actions.toggleDebugWindow
      }),
      (0, _hyperapp.h)(
        'x-label',
        { 'for': 'userDebugSwitch', id: 'userDebugSwitchLabel' },
        (0, _hyperapp.h)(
          'x-box',
          { vertical: true },
          (0, _hyperapp.h)(
            'strong',
            null,
            'User Debugger'
          ),
          (0, _hyperapp.h)(
            'span',
            null,
            'Enabling this will show a debug window with information that may help you diagnose any issues.'
          )
        )
      )
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/settingsTab.lsc":
/*!************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/settingsTab.lsc ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function ({ actions, state }) {
  const activeTabClass = state.activeTab === 'settingsTab' ? 'activeTab' : '';
  return (0, _hyperapp.h)(
    'div',
    {
      'class': `tab ${activeTabClass}`,
      id: 'settingsTab',
      onclick: actions.toggleTab
    },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabIcon' },
      (0, _hyperapp.h)(
        'svg',
        { height: '24', viewbox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, _hyperapp.h)('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
        (0, _hyperapp.h)('path', { d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' })
      )
    ),
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabText' },
      'Settings'
    ),
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabLip' },
      (0, _hyperapp.h)('div', { 'class': 'tabArrow' }),
      (0, _hyperapp.h)('div', { 'class': 'tabLine' })
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/statusInfoWindow.lsc":
/*!*****************************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/statusInfoWindow.lsc ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

var _deviceCard = __webpack_require__(/*! ../deviceCard.lsc */ "./app/components/settingsWindow/frontEnd/js/components/deviceCard.lsc");

var _deviceCard2 = _interopRequireDefault(_deviceCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function ({ actions, state }) {
  const infoWindowDisplay = state.activeTab === 'statusTab' ? 'flex' : 'none';
  const statusAnimationVisibility = state.blueLossEnabled ? 'visible' : 'hidden';
  const blueLossStatusText = state.blueLossEnabled ? 'Enabled' : 'Disabled';
  const lookingForHeaderDisplay = Object.keys(state.devicesToSearchFor).length ? 'block' : 'none';

  return (0, _hyperapp.h)(
    'div',
    { id: 'statusTabInfoWindow', style: { display: infoWindowDisplay } },
    (0, _hyperapp.h)(
      'div',
      { id: 'topStatus' },
      (0, _hyperapp.h)(
        'div',
        { id: 'statusAnimation', style: { visibility: statusAnimationVisibility } },
        (0, _hyperapp.h)(
          'ul',
          { oncreate: actions.animateDots },
          (0, _hyperapp.h)('li', null),
          (0, _hyperapp.h)('li', null),
          (0, _hyperapp.h)('li', null),
          (0, _hyperapp.h)('li', null),
          (0, _hyperapp.h)('li', null)
        )
      ),
      (0, _hyperapp.h)(
        'x-box',
        { id: 'disableButton' },
        (0, _hyperapp.h)('x-switch', {
          id: 'blueLossEnableswitch',
          toggled: state.blueLossEnabled,
          onchange: function (event) {
            actions.updateSetting({ settingName: 'blueLossEnabled', settingValue: event.currentTarget.toggled });
          }
        }),
        (0, _hyperapp.h)(
          'x-label',
          { 'for': 'blueLossEnableswitch', id: 'blueLossEnableswitch' },
          'BlueLoss ',
          blueLossStatusText
        )
      )
    ),
    (0, _hyperapp.h)(
      'div',
      { id: 'devicesContainer' },
      (0, _hyperapp.h)(
        'div',
        { id: 'lookingForHeader', style: { display: lookingForHeaderDisplay } },
        'Currently Looking For:'
      ),
      Object.values(state.devicesToSearchFor).map(function (device) {
        return (0, _hyperapp.h)(_deviceCard2.default, {
          key: device.deviceId,
          actions: actions,
          lookingForDevice: true,
          device: device
        });
      }),
      (0, _hyperapp.h)(
        'div',
        { id: 'deviceAddHeader' },
        'Devices To Add:'
      ),
      state.devicesCanSee.filter(function ({ deviceId }) {
        return !state.devicesToSearchFor[deviceId];
      }).map(function (device) {
        return (0, _hyperapp.h)(_deviceCard2.default, {
          key: device.deviceId,
          actions: actions,
          lookingForDevice: false,
          device: device
        });
      })
    ),
    (0, _hyperapp.h)('div', { id: 'devicesContainerBottomLip' })
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/statusTab.lsc":
/*!**********************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/statusTab.lsc ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

exports.default = function ({ actions, state }) {
  const activeTabClass = state.activeTab === 'statusTab' ? 'activeTab' : '';
  return (0, _hyperapp.h)(
    'div',
    {
      'class': `tab ${activeTabClass}`,
      id: 'statusTab',
      onclick: actions.toggleTab
    },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabIcon' },
      (0, _hyperapp.h)(
        'svg',
        { style: 'enable-background:new 0 0 20 20;', version: '1.1', viewbox: '0 0 24 24', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
        (0, _hyperapp.h)(
          'g',
          null,
          (0, _hyperapp.h)('path', { d: 'M7.1,7.7c0.4-0.4,0.4-1-0.1-1.4C5.6,5,5.6,3,7,1.7c0.4-0.4,0.4-1,0.1-1.4c-0.4-0.4-1-0.4-1.4-0.1c-2.2,2.1-2.2,5.5,0,7.5 C6.1,8.2,6.7,8.1,7.1,7.7z' }),
          (0, _hyperapp.h)('path', { d: 'M12.9,7.7c0.4,0.4,1,0.4,1.4,0.1c2.2-2.1,2.2-5.5,0-7.5c-0.4-0.4-1-0.4-1.4,0.1c-0.4,0.4-0.4,1,0.1,1.4 C14.3,3,14.3,5,13,6.3C12.6,6.7,12.5,7.3,12.9,7.7z' }),
          (0, _hyperapp.h)('path', { d: 'M19,13h-8V5.7c0.6-0.3,1-1,1-1.7c0-1.1-0.9-2-2-2C8.9,2,8,2.9,8,4c0,0.7,0.4,1.4,1,1.7V13H1c-0.6,0-1,0.5-1,1v4 c0,0.5,0.4,1,1,1h1v1h3v-1h10v1h3v-1h1c0.5,0,1-0.5,1-1v-4C20,13.5,19.5,13,19,13z M3,17c-0.5,0-1-0.5-1-1c0-0.5,0.5-1,1-1 c0.6,0,1,0.5,1,1C4,16.6,3.5,17,3,17z M7,17c-0.6,0-1-0.5-1-1c0-0.5,0.4-1,1-1c0.5,0,1,0.5,1,1C8,16.6,7.5,17,7,17z M17,17h-7v-2h7 V17z' })
        )
      )
    ),
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabText' },
      'Status'
    ),
    (0, _hyperapp.h)(
      'div',
      { 'class': 'tabLip' },
      (0, _hyperapp.h)('div', { 'class': 'tabArrow' }),
      (0, _hyperapp.h)('div', { 'class': 'tabLine' })
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/components/views/viewsIndex.lsc":
/*!***********************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/components/views/viewsIndex.lsc ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

var _header = __webpack_require__(/*! ./header.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/header.lsc");

var _header2 = _interopRequireDefault(_header);

var _helpTab = __webpack_require__(/*! ./helpTab.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/helpTab.lsc");

var _helpTab2 = _interopRequireDefault(_helpTab);

var _settingsTab = __webpack_require__(/*! ./settingsTab.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/settingsTab.lsc");

var _settingsTab2 = _interopRequireDefault(_settingsTab);

var _statusTab = __webpack_require__(/*! ./statusTab.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/statusTab.lsc");

var _statusTab2 = _interopRequireDefault(_statusTab);

var _statusInfoWindow = __webpack_require__(/*! ./statusInfoWindow.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/statusInfoWindow.lsc");

var _statusInfoWindow2 = _interopRequireDefault(_statusInfoWindow);

var _settingsInfoWindow = __webpack_require__(/*! ./settingsInfoWindow.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/settingsInfoWindow.lsc");

var _settingsInfoWindow2 = _interopRequireDefault(_settingsInfoWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, actions) {
  return (0, _hyperapp.h)(
    'div',
    null,
    (0, _hyperapp.h)(_header2.default, { actions: actions }),
    (0, _hyperapp.h)(
      'div',
      { id: 'mainContainer' },
      (0, _hyperapp.h)(
        'div',
        { id: 'sidebar' },
        (0, _hyperapp.h)(
          'div',
          { id: 'topTabs' },
          (0, _hyperapp.h)(_statusTab2.default, { actions: actions, state: state }),
          (0, _hyperapp.h)('hr', null),
          (0, _hyperapp.h)(_settingsTab2.default, { actions: actions, state: state }),
          (0, _hyperapp.h)('hr', null)
        ),
        (0, _hyperapp.h)(
          'div',
          { id: 'bottomTabs' },
          (0, _hyperapp.h)('hr', null),
          (0, _hyperapp.h)(_helpTab2.default, { actions: actions }),
          (0, _hyperapp.h)('hr', null),
          (0, _hyperapp.h)(AboutTab, { actions: actions, state: state })
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { id: 'rightInfoContainer' },
        (0, _hyperapp.h)(_statusInfoWindow2.default, { actions: actions, state: state }),
        (0, _hyperapp.h)(_settingsInfoWindow2.default, { actions: actions, state: state }),
        (0, _hyperapp.h)(AboutInfoWindow, { actions: actions, state: state })
      )
    )
  );
};

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/frontEndUtils.lsc":
/*!*********************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/frontEndUtils.lsc ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function identity(param) {
  return param;
}exports.identity = identity;

/***/ }),

/***/ "./app/components/settingsWindow/frontEnd/js/settingsWindowWeb.lsc":
/*!*************************************************************************!*\
  !*** ./app/components/settingsWindow/frontEnd/js/settingsWindowWeb.lsc ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(/*! hyperapp */ "./node_modules/hyperapp/src/index.js");

var _logger = __webpack_require__(/*! @hyperapp/logger */ "./node_modules/@hyperapp/logger/src/index.js");

var _actionsIndex = __webpack_require__(/*! ./components/actions/actionsIndex.lsc */ "./app/components/settingsWindow/frontEnd/js/components/actions/actionsIndex.lsc");

var _actionsIndex2 = _interopRequireDefault(_actionsIndex);

var _viewsIndex = __webpack_require__(/*! ./components/views/viewsIndex.lsc */ "./app/components/settingsWindow/frontEnd/js/components/views/viewsIndex.lsc");

var _viewsIndex2 = _interopRequireDefault(_viewsIndex);

var _frontEndUtils = __webpack_require__(/*! ./frontEndUtils.lsc */ "./app/components/settingsWindow/frontEnd/js/frontEndUtils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
const initialState = {
  activeTab: 'statusTab',
  devicesCanSee: [],
  blueLossEnabled: true,
  runOnStartup: true,
  timeToLock: 3,
  reportErrors: true,
  firstRun: true,
  scanInterval: 30000
};

const logInDev =  true ? _logger.withLogger : undefined;
const settingsWindowApp = logInDev(_hyperapp.app)(initialState, _actionsIndex2.default, _viewsIndex2.default, document.body);

// settingsWindowApp?.updateStateOnServerMessage?(setting)


console.log('settings window main');

/***/ }),

/***/ "./app/components/types/types.lsc":
/*!****************************************!*\
  !*** ./app/components/types/types.lsc ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/@hyperapp/logger/src/defaultLog.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hyperapp/logger/src/defaultLog.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(prevState, action, nextState) {
  console.group("%c action", "color: gray; font-weight: lighter;", action.name)
  console.log("%c prev state", "color: #9E9E9E; font-weight: bold;", prevState)
  console.log("%c data", "color: #03A9F4; font-weight: bold;", action.data)
  console.log("%c next state", "color: #4CAF50; font-weight: bold;", nextState)
  console.groupEnd()
});


/***/ }),

/***/ "./node_modules/@hyperapp/logger/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@hyperapp/logger/src/index.js ***!
  \****************************************************/
/*! exports provided: withLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLogger", function() { return withLogger; });
/* harmony import */ var _defaultLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLog */ "./node_modules/@hyperapp/logger/src/defaultLog.js");


var isFn = function(value) {
  return typeof value === "function"
}

function makeLoggerApp(log, nextApp) {
  return function(initialState, actionsTemplate, view, container) {
    function enhanceActions(actions, prefix) {
      var namespace = prefix ? prefix + "." : ""
      return Object.keys(actions || {}).reduce(function(otherActions, name) {
        var namedspacedName = namespace + name
        var action = actions[name]
        otherActions[name] =
          typeof action === "function"
            ? function(data) {
                return function(state, actions) {
                  var result = action(data)
                  result =
                    typeof result === "function"
                      ? result(state, actions)
                      : result
                  log(state, { name: namedspacedName, data: data }, result)
                  return result
                }
              }
            : enhanceActions(action, namedspacedName)
        return otherActions
      }, {})
    }

    var enhancedActions = enhanceActions(actionsTemplate)

    var appActions = nextApp(initialState, enhancedActions, view, container)
    return appActions
  }
}

function withLogger(optionsOrApp) {
  if (isFn(optionsOrApp)) {
    return makeLoggerApp(_defaultLog__WEBPACK_IMPORTED_MODULE_0__["default"], optionsOrApp)
  } else {
    var log = isFn(optionsOrApp.log) ? optionsOrApp.log : _defaultLog__WEBPACK_IMPORTED_MODULE_0__["default"]
    return function(nextApp) {
      return makeLoggerApp(log, nextApp)
    }
  }
}


/***/ }),

/***/ "./node_modules/hyperapp/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/
/*! exports provided: h, app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
function h(name, attributes) {
  var rest = []
  var children = []
  var length = arguments.length

  while (length-- > 2) rest.push(arguments[length])

  while (rest.length) {
    var node = rest.pop()
    if (node && node.pop) {
      for (length = node.length; length--; ) {
        rest.push(node[length])
      }
    } else if (node != null && node !== true && node !== false) {
      children.push(node)
    }
  }

  return typeof name === "function"
    ? name(attributes || {}, children)
    : {
        nodeName: name,
        attributes: attributes || {},
        children: children,
        key: attributes && attributes.key
      }
}

function app(state, actions, view, container) {
  var map = [].map
  var rootElement = (container && container.children[0]) || null
  var oldNode = rootElement && recycleElement(rootElement)
  var lifecycle = []
  var skipRender
  var isRecycling = true
  var globalState = clone(state)
  var wiredActions = wireStateToActions([], globalState, clone(actions))

  scheduleRender()

  return wiredActions

  function recycleElement(element) {
    return {
      nodeName: element.nodeName.toLowerCase(),
      attributes: {},
      children: map.call(element.childNodes, function(element) {
        return element.nodeType === 3 // Node.TEXT_NODE
          ? element.nodeValue
          : recycleElement(element)
      })
    }
  }

  function resolveNode(node) {
    return typeof node === "function"
      ? resolveNode(node(globalState, wiredActions))
      : node != null
        ? node
        : ""
  }

  function render() {
    skipRender = !skipRender

    var node = resolveNode(view)

    if (container && !skipRender) {
      rootElement = patch(container, rootElement, oldNode, (oldNode = node))
    }

    isRecycling = false

    while (lifecycle.length) lifecycle.pop()()
  }

  function scheduleRender() {
    if (!skipRender) {
      skipRender = true
      setTimeout(render)
    }
  }

  function clone(target, source) {
    var out = {}

    for (var i in target) out[i] = target[i]
    for (var i in source) out[i] = source[i]

    return out
  }

  function setPartialState(path, value, source) {
    var target = {}
    if (path.length) {
      target[path[0]] =
        path.length > 1
          ? setPartialState(path.slice(1), value, source[path[0]])
          : value
      return clone(source, target)
    }
    return value
  }

  function getPartialState(path, source) {
    var i = 0
    while (i < path.length) {
      source = source[path[i++]]
    }
    return source
  }

  function wireStateToActions(path, state, actions) {
    for (var key in actions) {
      typeof actions[key] === "function"
        ? (function(key, action) {
            actions[key] = function(data) {
              var result = action(data)

              if (typeof result === "function") {
                result = result(getPartialState(path, globalState), actions)
              }

              if (
                result &&
                result !== (state = getPartialState(path, globalState)) &&
                !result.then // !isPromise
              ) {
                scheduleRender(
                  (globalState = setPartialState(
                    path,
                    clone(state, result),
                    globalState
                  ))
                )
              }

              return result
            }
          })(key, actions[key])
        : wireStateToActions(
            path.concat(key),
            (state[key] = clone(state[key])),
            (actions[key] = clone(actions[key]))
          )
    }

    return actions
  }

  function getKey(node) {
    return node ? node.key : null
  }

  function eventListener(event) {
    return event.currentTarget.events[event.type](event)
  }

  function updateAttribute(element, name, value, oldValue, isSvg) {
    if (name === "key") {
    } else if (name === "style") {
      for (var i in clone(oldValue, value)) {
        var style = value == null || value[i] == null ? "" : value[i]
        if (i[0] === "-") {
          element[name].setProperty(i, style)
        } else {
          element[name][i] = style
        }
      }
    } else {
      if (name[0] === "o" && name[1] === "n") {
        name = name.slice(2)

        if (element.events) {
          if (!oldValue) oldValue = element.events[name]
        } else {
          element.events = {}
        }

        element.events[name] = value

        if (value) {
          if (!oldValue) {
            element.addEventListener(name, eventListener)
          }
        } else {
          element.removeEventListener(name, eventListener)
        }
      } else if (name in element && name !== "list" && !isSvg) {
        element[name] = value == null ? "" : value
      } else if (value != null && value !== false) {
        element.setAttribute(name, value)
      }

      if (value == null || value === false) {
        element.removeAttribute(name)
      }
    }
  }

  function createElement(node, isSvg) {
    var element =
      typeof node === "string" || typeof node === "number"
        ? document.createTextNode(node)
        : (isSvg = isSvg || node.nodeName === "svg")
          ? document.createElementNS(
              "http://www.w3.org/2000/svg",
              node.nodeName
            )
          : document.createElement(node.nodeName)

    var attributes = node.attributes
    if (attributes) {
      if (attributes.oncreate) {
        lifecycle.push(function() {
          attributes.oncreate(element)
        })
      }

      for (var i = 0; i < node.children.length; i++) {
        element.appendChild(
          createElement(
            (node.children[i] = resolveNode(node.children[i])),
            isSvg
          )
        )
      }

      for (var name in attributes) {
        updateAttribute(element, name, attributes[name], null, isSvg)
      }
    }

    return element
  }

  function updateElement(element, oldAttributes, attributes, isSvg) {
    for (var name in clone(oldAttributes, attributes)) {
      if (
        attributes[name] !==
        (name === "value" || name === "checked"
          ? element[name]
          : oldAttributes[name])
      ) {
        updateAttribute(
          element,
          name,
          attributes[name],
          oldAttributes[name],
          isSvg
        )
      }
    }

    var cb = isRecycling ? attributes.oncreate : attributes.onupdate
    if (cb) {
      lifecycle.push(function() {
        cb(element, oldAttributes)
      })
    }
  }

  function removeChildren(element, node) {
    var attributes = node.attributes
    if (attributes) {
      for (var i = 0; i < node.children.length; i++) {
        removeChildren(element.childNodes[i], node.children[i])
      }

      if (attributes.ondestroy) {
        attributes.ondestroy(element)
      }
    }
    return element
  }

  function removeElement(parent, element, node) {
    function done() {
      parent.removeChild(removeChildren(element, node))
    }

    var cb = node.attributes && node.attributes.onremove
    if (cb) {
      cb(element, done)
    } else {
      done()
    }
  }

  function patch(parent, element, oldNode, node, isSvg) {
    if (node === oldNode) {
    } else if (oldNode == null || oldNode.nodeName !== node.nodeName) {
      var newElement = createElement(node, isSvg)
      parent.insertBefore(newElement, element)

      if (oldNode != null) {
        removeElement(parent, element, oldNode)
      }

      element = newElement
    } else if (oldNode.nodeName == null) {
      element.nodeValue = node
    } else {
      updateElement(
        element,
        oldNode.attributes,
        node.attributes,
        (isSvg = isSvg || node.nodeName === "svg")
      )

      var oldKeyed = {}
      var newKeyed = {}
      var oldElements = []
      var oldChildren = oldNode.children
      var children = node.children

      for (var i = 0; i < oldChildren.length; i++) {
        oldElements[i] = element.childNodes[i]

        var oldKey = getKey(oldChildren[i])
        if (oldKey != null) {
          oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]
        }
      }

      var i = 0
      var k = 0

      while (k < children.length) {
        var oldKey = getKey(oldChildren[i])
        var newKey = getKey((children[k] = resolveNode(children[k])))

        if (newKeyed[oldKey]) {
          i++
          continue
        }

        if (newKey != null && newKey === getKey(oldChildren[i + 1])) {
          if (oldKey == null) {
            removeElement(element, oldElements[i], oldChildren[i])
          }
          i++
          continue
        }

        if (newKey == null || isRecycling) {
          if (oldKey == null) {
            patch(element, oldElements[i], oldChildren[i], children[k], isSvg)
            k++
          }
          i++
        } else {
          var keyedNode = oldKeyed[newKey] || []

          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], children[k], isSvg)
            i++
          } else if (keyedNode[0]) {
            patch(
              element,
              element.insertBefore(keyedNode[0], oldElements[i]),
              keyedNode[1],
              children[k],
              isSvg
            )
          } else {
            patch(element, oldElements[i], null, children[k], isSvg)
          }

          newKeyed[newKey] = children[k]
          k++
        }
      }

      while (i < oldChildren.length) {
        if (getKey(oldChildren[i]) == null) {
          removeElement(element, oldElements[i], oldChildren[i])
        }
        i++
      }

      for (var i in oldKeyed) {
        if (!newKeyed[i]) {
          removeElement(element, oldKeyed[i][0], oldKeyed[i][1])
        }
      }
    }
    return element
  }
}


/***/ })

/******/ });