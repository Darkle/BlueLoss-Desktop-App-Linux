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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/appMain.lsc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/appMain.lsc":
/*!*************************!*\
  !*** ./app/appMain.lsc ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./config/env.lsc */ "./app/config/env.lsc");

var _makeSingleInstance = __webpack_require__(/*! ./components/makeSingleInstance.lsc */ "./app/components/makeSingleInstance.lsc");

var _logging = __webpack_require__(/*! ./components/logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _settings = __webpack_require__(/*! ./components/settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _utils = __webpack_require__(/*! ./components/utils.lsc */ "./app/components/utils.lsc");

var _tray = __webpack_require__(/*! ./components/tray/tray.lsc */ "./app/components/tray/tray.lsc");

var _runOnStartup = __webpack_require__(/*! ./components/runOnStartup.lsc */ "./app/components/runOnStartup.lsc");

// // import { checkForUpdate as checkForAppUpdate } from '../appUpdates/appUpdates.lsc'

// // import { init as startBluetoothScanning } from '../bluetooth/blueToothMain.lsc'
(0, _makeSingleInstance.makeSingleInstance)().then(_settings.initSettings).then(_logging.addWinstonFileLogging).then(_tray.initTrayMenu).then(_utils.setUpDev)
// // .then(startBluetoothScanning)
// // .then(checkForAppUpdate)
.then(() => {
  const { firstRun } = (0, _settings.getSettings)();
  if (firstRun) {
    (0, _settings.updateSetting)('firstRun', !firstRun);
    // showSettingsWindow()
    return (0, _runOnStartup.enableRunOnStartup)(firstRun);
  }
}).catch(err => {
  _logging.logger.error(err);
  return process.exit(1);
});
// // import { showSettingsWindow } from '../'


process.on('unhandledRejection', _logging.logger.error);
process.on('uncaughtException', err => {
  _logging.logger.error(err);
  return process.exit(1);
});

/***/ }),

/***/ "./app/components/bluelossConfig/browsersProfileFileData/browserProfileData.lsc":
/*!**************************************************************************************!*\
  !*** ./app/components/bluelossConfig/browsersProfileFileData/browserProfileData.lsc ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getFirefoxUserChrome() {
  return `
@-moz-document url(chrome://browser/content/browser.xul) {
#TabsToolbar {
  visibility: collapse !important;
}
#nav-bar {
  visibility: collapse !important;
}
`;
}function getFirefoxPrefsJs() {
  return `
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.sessionstore.restore_on_demand", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
`;
}function getChromePrefs() {
  return {
    "browser": {
      "app_window_placement": {
        "www": {
          "google": {
            "com_/": {
              "bottom": 1201,
              "left": 391,
              "maximized": false,
              "right": 1251,
              "top": 404,
              "work_area_bottom": 1398,
              "work_area_left": 0,
              "work_area_right": 2560,
              "work_area_top": 0
            }
          }
        }
      },
      "has_seen_welcome_page": true
    }
  };
}

exports.getFirefoxUserChrome = getFirefoxUserChrome;
exports.getFirefoxPrefsJs = getFirefoxPrefsJs;
exports.getChromePrefs = getChromePrefs;

/***/ }),

/***/ "./app/components/bluelossConfig/createBlueLossConfig.lsc":
/*!****************************************************************!*\
  !*** ./app/components/bluelossConfig/createBlueLossConfig.lsc ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blueLossConfigFolderPath = exports.blueLossLogsFolderPath = exports.createBlueLossConfig = undefined;

var _os = __webpack_require__(/*! os */ "os");

var _os2 = _interopRequireDefault(_os);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(/*! fs-extra */ "fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _browserProfileData = __webpack_require__(/*! ./browsersProfileFileData/browserProfileData.lsc */ "./app/components/bluelossConfig/browsersProfileFileData/browserProfileData.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const blueLossConfigFolderPath = _path2.default.join(_os2.default.homedir(), '.config', 'BlueLoss');
const blueLossSettingsFilePath = _path2.default.join(blueLossConfigFolderPath, 'blueloss-settings.json');
const blueLossLogsFolderPath = _path2.default.join(blueLossConfigFolderPath, 'logs');
const blueLossConfigChromiumPrefsFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'Chromium', 'Default', 'Preferences');
const blueLossConfigFirefoxUserChromeFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'Firefox', 'chrome', 'userChrome.css');
const blueLossConfigFirefoxPrefsFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'Firefox', 'prefs.js');

function createBlueLossConfig() {
  return _fsExtra2.default.ensureFile(blueLossSettingsFilePath).then(function () {
    return _fsExtra2.default.ensureDir(blueLossLogsFolderPath);
  }).then(function () {
    return _fsExtra2.default.pathExists(blueLossConfigChromiumPrefsFilePath);
  }).then(function (exists) {
    return !exists ? createChromiumProfileFiles() : null;
  }).then(function () {
    return _fsExtra2.default.pathExists(blueLossConfigFirefoxUserChromeFilePath);
  }).then(function (exists) {
    return !exists ? createFirefoxProfileFiles() : null;
  }).then(function () {
    return blueLossSettingsFilePath;
  });
}function createChromiumProfileFiles() {
  return _fsExtra2.default.ensureFile(blueLossConfigChromiumPrefsFilePath).then(function () {
    return _fsExtra2.default.writeJson(blueLossConfigChromiumPrefsFilePath, (0, _browserProfileData.getChromePrefs)());
  });
}function createFirefoxProfileFiles() {
  return _fsExtra2.default.ensureFile(blueLossConfigFirefoxUserChromeFilePath).then(function () {
    return _fsExtra2.default.ensureFile(blueLossConfigFirefoxPrefsFilePath);
  }).then(function () {
    return _fsExtra2.default.outputFile(blueLossConfigFirefoxUserChromeFilePath, (0, _browserProfileData.getFirefoxUserChrome)());
  }).then(function () {
    return _fsExtra2.default.outputFile(blueLossConfigFirefoxPrefsFilePath, (0, _browserProfileData.getFirefoxPrefsJs)());
  });
}exports.createBlueLossConfig = createBlueLossConfig;
exports.blueLossLogsFolderPath = blueLossLogsFolderPath;
exports.blueLossConfigFolderPath = blueLossConfigFolderPath;

/***/ }),

/***/ "./app/components/logging/customRollbarTransport.lsc":
/*!***********************************************************!*\
  !*** ./app/components/logging/customRollbarTransport.lsc ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rollbarLogger = exports.CustomRollbarTransport = undefined;

var _util = __webpack_require__(/*! util */ "util");

var _util2 = _interopRequireDefault(_util);

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _rollbar = __webpack_require__(/*! rollbar */ "rollbar");

var _rollbar2 = _interopRequireDefault(_rollbar);

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rollbarConfig = {
  accessToken: process.env.rollbarAccessToken,
  enabled: false,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: "development",
  reportLevel: 'error',
  payload: {
    BlueLossVersion: (0, _utils.getAppVersion)()
  },
  // Ignore the server stuff cause that includes info about the host pc name.
  transform(payload) {
    return payload.server = {};
  }
};

const rollbarLogger = new _rollbar2.default(rollbarConfig);

const CustomRollbarTransport = _winston2.default.transports.CustomLogger = function (options) {
  Object.assign(this, options);
};_util2.default.inherits(CustomRollbarTransport, _winston2.default.Transport);

CustomRollbarTransport.prototype.log = function (level, msg = '', error, callback) {
  // Only log errors.
  if (level !== 'error') return;
  rollbarLogger.error(msg, error);
  callback(null, true);
};exports.CustomRollbarTransport = CustomRollbarTransport;
exports.rollbarLogger = rollbarLogger;

/***/ }),

/***/ "./app/components/logging/logging.lsc":
/*!********************************************!*\
  !*** ./app/components/logging/logging.lsc ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWinstonFileLogging = exports.removeRollbarLogging = exports.addRollbarLogging = exports.logger = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _customRollbarTransport = __webpack_require__(/*! ./customRollbarTransport.lsc */ "./app/components/logging/customRollbarTransport.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _createBlueLossConfig = __webpack_require__(/*! ../bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bluelossLogFilePath = _path2.default.join(_createBlueLossConfig.blueLossLogsFolderPath, 'BlueLoss.log.txt');
const rollbarTransportOptions = {
  name: 'rollbarTransport',
  level: 'error',
  handleExceptions: true,
  humanReadableUnhandledException: true

  // https://github.com/winstonjs/winston/tree/2.4.0
};const logger = new _winston2.default.Logger({
  level: 'debug',
  exitOnError: false
});

if (true) {
  logger.add(_winston2.default.transports.Console, {
    handleExceptions: true,
    humanReadableUnhandledException: true
    // json: true
  });
} // dont send errors to rollbar in dev && only if enabled.
if (false) {}
/**
* We also need to enable/disable the rollbar module itself as well,
* as it is set to report uncaught exceptions as well as logging
* caught errors.
*/
function addRollbarLogging() {
  _customRollbarTransport.rollbarLogger.configure({ enabled: true });
  logger.add(_customRollbarTransport.CustomRollbarTransport, rollbarTransportOptions);
}function removeRollbarLogging() {
  _customRollbarTransport.rollbarLogger.configure({ enabled: false });
  logger.remove('rollbarTransport');
}function addWinstonFileLogging() {
  return _winston2.default.add(_winston2.default.transports.File, {
    filename: bluelossLogFilePath,
    maxsize: 500000, // 500KB
    maxFiles: 6,
    prettyPrint: true,
    depth: 10
  });
}exports.logger = logger;
exports.addRollbarLogging = addRollbarLogging;
exports.removeRollbarLogging = removeRollbarLogging;
exports.addWinstonFileLogging = addWinstonFileLogging;

/***/ }),

/***/ "./app/components/makeSingleInstance.lsc":
/*!***********************************************!*\
  !*** ./app/components/makeSingleInstance.lsc ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSingleInstance = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(/*! fs-extra */ "fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _createBlueLossConfig = __webpack_require__(/*! ./bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let weCreatedFileLock = false;
let blueLossSettingsFilePath = null;

async function makeSingleInstance() {
  blueLossSettingsFilePath = await (0, _createBlueLossConfig.createBlueLossConfig)();
  const exists = await _fsExtra2.default.pathExists(getLockFilePath());

  if (exists) {
    console.error(new Error('The BlueLoss.lock file already exits, exiting...'));
    process.exit(1);
  } else {
    weCreatedFileLock = true;
    await _fsExtra2.default.ensureFile(getLockFilePath());
  }return blueLossSettingsFilePath;
}process.on('exit', function () {
  if (weCreatedFileLock) {
    try {
      _fsExtra2.default.removeSync(getLockFilePath());
    } catch (e) {
      return;
    }
  }
});

// https://github.com/moxystudio/node-proper-lockfile#graceful-exit
process.once('SIGINT', function () {
  return process.exit(1);
}).once('SIGTERM', function () {
  return process.exit(1);
});

function getLockFilePath() {
  return _path2.default.join(_createBlueLossConfig.blueLossConfigFolderPath, 'BlueLoss.lock');
}exports.makeSingleInstance = makeSingleInstance;

/***/ }),

/***/ "./app/components/runOnStartup.lsc":
/*!*****************************************!*\
  !*** ./app/components/runOnStartup.lsc ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableRunOnStartup = exports.enableRunOnStartup = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _untildify = __webpack_require__(/*! untildify */ "untildify");

var _untildify2 = _interopRequireDefault(_untildify);

var _fsExtra = __webpack_require__(/*! fs-extra */ "fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _logging = __webpack_require__(/*! ./logging/logging.lsc */ "./app/components/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const autoStartFolder = (0, _untildify2.default)('~/.config/autostart/');
const bluelossDesktopFilePath = _path2.default.join(autoStartFolder, 'BlueLoss.desktop');

function enableRunOnStartup(firstRun) {
  if (firstRun && true) return;
  _fsExtra2.default.outputFile(bluelossDesktopFilePath, gernerateDesktopFile()).catch(_logging.logger.error);
}function disableRunOnStartup() {
  _fsExtra2.default.remove(bluelossDesktopFilePath).catch(_logging.logger.error);
}function gernerateDesktopFile() {
  return `
[Desktop Entry]
Type=Application
Version=1.0
Name=BlueLoss
Comment=Run BlueLoss
Exec=${process.execPath}
Icon=${process.cwd()}
StartupNotify=false
Terminal=false
Categories=Utility;
`.trim();
}exports.enableRunOnStartup = enableRunOnStartup;
exports.disableRunOnStartup = disableRunOnStartup;

/***/ }),

/***/ "./app/components/settings/settings.lsc":
/*!**********************************************!*\
  !*** ./app/components/settings/settings.lsc ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeviceInDevicesToSearchFor = exports.removeNewDeviceToSearchFor = exports.addNewDeviceToSearchFor = exports.getSettings = exports.updateSetting = exports.initSettings = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gawk = __webpack_require__(/*! gawk */ "gawk");

var _gawk2 = _interopRequireDefault(_gawk);

var _lowdb = __webpack_require__(/*! lowdb */ "lowdb");

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = __webpack_require__(/*! lowdb/adapters/FileSync */ "lowdb/adapters/FileSync");

var _FileSync2 = _interopRequireDefault(_FileSync);

var _typa = __webpack_require__(/*! typa */ "typa");

var _typa2 = _interopRequireDefault(_typa);

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

var _types = __webpack_require__(/*! ../types/types.lsc */ "./app/components/types/types.lsc");

var _settingsDefaults = __webpack_require__(/*! ./settingsDefaults.lsc */ "./app/components/settings/settingsDefaults.lsc");

var _settingsObservers = __webpack_require__(/*! ./settingsObservers.lsc */ "./app/components/settings/settingsObservers.lsc");

var _settingsIPClisteners = __webpack_require__(/*! ./settingsIPClisteners.lsc */ "./app/components/settings/settingsIPClisteners.lsc");

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let db = null;
let settings = null;

function initSettings(settingsDBpath) {
  db = (0, _lowdb2.default)(new _FileSync2.default(settingsDBpath));
  db.defaults(_settingsDefaults.defaultSettings).write();

  settings = (0, _gawk2.default)(db.getState());

  (0, _settingsObservers.initSettingsObservers)(settings);
  (0, _settingsIPClisteners.initSettingsIPClisteners)();
  updateLastSeenForDevicesLookingForOnStartup();
  return settings;
}function getSettings() {
  return settings;
}function updateSetting(newSettingKey, newSettingValue) {
  settings[newSettingKey] = newSettingValue;
  db.set(newSettingKey, newSettingValue).write();
  logSettingsUpdate(newSettingKey, newSettingValue);
}function addNewDeviceToSearchFor(deviceToAdd) {
  const { deviceId } = deviceToAdd;
  if (deviceIsInDevicesToSearchFor(deviceId)) return;
  updateSetting('devicesToSearchFor', _extends({}, settings.devicesToSearchFor, { [deviceId]: deviceToAdd }));
}function removeNewDeviceToSearchFor(deviceToRemove) {
  const { deviceId } = deviceToRemove;
  if (!deviceIsInDevicesToSearchFor(deviceId)) return;
  updateSetting('devicesToSearchFor', filterDevicesToSearchFor(deviceId));
}function filterDevicesToSearchFor(deviceIdToRemove) {
  return (() => {
    const _obj = {};for (let _obj2 = settings.devicesToSearchFor, _i = 0, _keys = Object.keys(_obj2), _len = _keys.length; _i < _len; _i++) {
      const deviceId = _keys[_i];const device = _obj2[deviceId];
      if (deviceId !== deviceIdToRemove) _obj[deviceId] = device;
    }return _obj;
  })();
}

function deviceIsInDevicesToSearchFor(deviceId) {
  return settings.devicesToSearchFor[deviceId];
}function updateDeviceInDevicesToSearchFor(deviceId, propName, propValue) {
  return updateSetting('devicesToSearchFor', _extends({}, settings.devicesToSearchFor, {
    [deviceId]: _extends({}, settings.devicesToSearchFor[deviceId], { [propName]: propValue })
  }));
} /**
   * When a user starts up BlueLoss after previously exiting, the
   * lastSeen value will be out of date for the devices in
   * devicesToSearchFor. This would cause BlueLoss to lock the
   * system straight away because the lastSeen value + timeToLock
   *  will be less than Date.now(). So to prevent this, we give all
   * devices in devicesToSearchFor a lastSeen of 10 years from now.
   * (when a device is seen again during a scan, lastSeen is updated.)
   */
function updateLastSeenForDevicesLookingForOnStartup() {
  for (let _obj3 = settings.devicesToSearchFor, _i2 = 0, _keys2 = Object.keys(_obj3), _len2 = _keys2.length; _i2 < _len2; _i2++) {
    const _k = _keys2[_i2];const { deviceId } = _obj3[_k];
    updateDeviceInDevicesToSearchFor(deviceId, 'lastSeen', (0, _utils.tenYearsFromNow)());
  }
}function logSettingsUpdate(newSettingKey, newSettingValue) {
  const debugMessage = `Updated Setting: updated '${newSettingKey}' with:`;
  if (_typa2.default.obj(newSettingValue)) {
    _logging.logger.debug(debugMessage, { [newSettingKey]: (0, _utils.omitGawkFromSettings)(newSettingValue) });
  } else {
    _logging.logger.debug(`${debugMessage} ${newSettingValue}`);
  }
}exports.initSettings = initSettings;
exports.updateSetting = updateSetting;
exports.getSettings = getSettings;
exports.addNewDeviceToSearchFor = addNewDeviceToSearchFor;
exports.removeNewDeviceToSearchFor = removeNewDeviceToSearchFor;
exports.updateDeviceInDevicesToSearchFor = updateDeviceInDevicesToSearchFor;

/***/ }),

/***/ "./app/components/settings/settingsDefaults.lsc":
/*!******************************************************!*\
  !*** ./app/components/settings/settingsDefaults.lsc ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const defaultSettings = {
  blueLossEnabled: true,
  runOnStartup: true,
  trayIconColor: 'blue',
  devicesToSearchFor: {},
  timeToLock: 3,
  reportErrors: true,
  firstRun: true,
  dateLastCheckedForAppUpdate: Date.now(),
  skipUpdateVersion: '0'
};

exports.defaultSettings = defaultSettings;

/***/ }),

/***/ "./app/components/settings/settingsIPClisteners.lsc":
/*!**********************************************************!*\
  !*** ./app/components/settings/settingsIPClisteners.lsc ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import { DeviceType, SettingsTypes } from '../types/types.lsc'
function initSettingsIPClisteners() {
  ({});
} // ipcMain.on('renderer:setting-updated-in-ui', (event, settingName: string, settingValue: SettingsTypes):void ->
//   updateSetting(settingName, settingValue)
// )
// ipcMain.on('renderer:device-added-in-ui', (event, deviceToAdd: DeviceType):void ->
//   addNewDeviceToSearchFor(deviceToAdd)
// )
// ipcMain.on('renderer:device-removed-in-ui', (event, deviceToRemove: DeviceType):void ->
//   removeNewDeviceToSearchFor(deviceToRemove)
// )

exports.initSettingsIPClisteners = initSettingsIPClisteners;

/***/ }),

/***/ "./app/components/settings/settingsObservers.lsc":
/*!*******************************************************!*\
  !*** ./app/components/settings/settingsObservers.lsc ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// import gawk from 'gawk'

// import { settingsWindow } from '../settingsWindow/settingsWindow.lsc'
// import { addRollbarLogging, removeRollbarLogging } from '../common/logging/logging.lsc'
// import { changeTrayIcon, updateTrayMenuEnabledItem } from '../tray/tray.lsc'
function initSettingsObservers() {
  ({});
} // initSettingsObservers(settings):void ->
// gawk.watch(settings, ['blueLossEnabled'], (enabled: boolean):void ->
//   settingsWindow?.webContents?.send('mainprocess:setting-updated-in-main', {blueLossEnabled: enabled})
//   updateTrayMenuEnabledItem()
// )
// gawk.watch(settings, ['reportErrors'], (enabled: boolean):void ->
//   if enabled: addRollbarLogging()
//   else: removeRollbarLogging()
// )
// gawk.watch(settings, ['runOnStartup'], (enabled: boolean):void ->
//   if enabled: enableRunOnStartup()
//   else: disableRunOnStartup()
// )
// gawk.watch(settings, ['trayIconColor'], changeTrayIcon)

exports.initSettingsObservers = initSettingsObservers;

/***/ }),

/***/ "./app/components/tray/iconsData.lsc":
/*!*******************************************!*\
  !*** ./app/components/tray/iconsData.lsc ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const base64IconData = {
  'white': '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',
  'blue': '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'
};

exports.base64IconData = base64IconData;

/***/ }),

/***/ "./app/components/tray/tray.lsc":
/*!**************************************!*\
  !*** ./app/components/tray/tray.lsc ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTrayMenuEnabledItem = exports.initTrayMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _systray = __webpack_require__(/*! systray */ "systray");

var _systray2 = _interopRequireDefault(_systray);

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _iconsData = __webpack_require__(/*! ./iconsData.lsc */ "./app/components/tray/iconsData.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let systray = null;

function initTrayMenu() {
  return new Promise(function (resolve) {
    systray = new _systray2.default({
      menu: {
        icon: _iconsData.base64IconData[getTrayIconColor()],
        title: "BlueLoss",
        tooltip: "BlueLoss",
        items: [{
          title: "Open BlueLoss Settings",
          tooltip: "Open BlueLoss Settings",
          checked: false,
          enabled: true
        }, {
          title: generateEnabledDisabledLabel(checkIfBlueLossEnabled()),
          tooltip: generateEnabledDisabledLabel(checkIfBlueLossEnabled()),
          checked: false,
          enabled: true
        }, {
          title: "Quit BlueLoss",
          tooltip: "Quit BlueLoss",
          checked: false,
          enabled: true
        }]
      },
      debug: false,
      copyDir: true // copy go tray binary to outside directory, useful for packing tool like pkg.
    });
    systray.onClick(systrayClickHandler);
    systray.onReady(resolve);
  });
}function systrayClickHandler(action) {
  if (action.seq_id === 0) {
    console.log('open settings window here');
  }if (action.seq_id === 1) {
    const newBlueLossEnbaledVal = !checkIfBlueLossEnabled();
    systray.sendAction({
      type: 'update-item',
      item: _extends({}, action.item, {
        title: generateEnabledDisabledLabel(newBlueLossEnbaledVal),
        tooltip: generateEnabledDisabledLabel(newBlueLossEnbaledVal)
      }),
      seq_id: action.seq_id
    });
    (0, _settings.updateSetting)('blueLossEnabled', newBlueLossEnbaledVal);
  }if (action.seq_id === 2) {
    systray.kill();
  }
}function checkIfBlueLossEnabled() {
  return (0, _settings.getSettings)().blueLossEnabled;
}function getTrayIconColor() {
  return  true ? 'white' : undefined;
} /*****
  * We can't just check for getSettings().blueLossEnabled in generateEnabledDisabledLabel, because in
  * in systray.onClick we don't have the ability to wait for updateSetting to finish before running
  * systray.sendAction, so
  */
function generateEnabledDisabledLabel(blueLossEnabled) {
  return `${blueLossEnabled ? 'Disable' : 'Enable'} BlueLoss`;
}function updateTrayMenuEnabledItem() {
  systray.sendAction({
    type: 'update-item',
    item: {
      checked: false,
      enabled: true,
      title: generateEnabledDisabledLabel(checkIfBlueLossEnabled()),
      tooltip: generateEnabledDisabledLabel(checkIfBlueLossEnabled())
    },
    seq_id: 1
  });
}exports.initTrayMenu = initTrayMenu;
exports.updateTrayMenuEnabledItem = updateTrayMenuEnabledItem;

/***/ }),

/***/ "./app/components/types/types.lsc":
/*!****************************************!*\
  !*** ./app/components/types/types.lsc ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./app/components/utils.lsc":
/*!**********************************!*\
  !*** ./app/components/utils.lsc ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLogTimeStamp = exports.recursivelyOmitObjProperties = exports.tenYearsFromNow = exports.identity = exports.compose = exports.range = exports.curryRight = exports.curry = exports.pipe = exports.noop = exports.omitInheritedProperties = exports.omitGawkFromSettings = exports.setUpDev = exports.getAppVersion = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _typa = __webpack_require__(/*! typa */ "typa");

var _typa2 = _interopRequireDefault(_typa);

var _package = __webpack_require__(/*! ../../package.json */ "./package.json");

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAppVersion() {
  return _package2.default.version;
} // setUpDev(firstRun):void -> if !ISDEV && !firstRun: showSettingsWindow()
function setUpDev() {
  console.log('setUpDev');
}

function omitGawkFromSettings(settings) {
  return recursivelyOmitObjProperties(settings, ['__gawk__']);
}function noop() {
  return;
}function pipe(...fns) {
  return function (param) {
    return fns.reduce(function (result, fn) {
      return fn(result);
    }, param);
  };
}function compose(...fns) {
  return function (value) {
    return fns.reduceRight((accumulator, current) => current(accumulator), value);
  };
}function curry(f) {
  return function (...a) {
    return function (...b) {
      return f(...(a === void 0 ? [] : a), ...(b === void 0 ? [] : b));
    };
  };
}function curryRight(f) {
  return function (...a) {
    return function (...b) {
      return f(...(b === void 0 ? [] : b), ...(a === void 0 ? [] : a));
    };
  };
}function identity(param) {
  return param;
}function range(start, end) {
  return Array.from({ length: end - start + 1 }, function (v, k) {
    return k + start;
  });
} //includes end number

function tenYearsFromNow() {
  return Date.now() + _timeproxy2.default.FIVE_HUNDRED_WEEKS;
}function recursivelyOmitObjProperties(obj, propertyFiltersArr = []) {
  return Object.keys(obj).reduce(function (newObj, propName) {
    for (let _i = 0, _len = propertyFiltersArr.length; _i < _len; _i++) {
      const propertyToFilter = propertyFiltersArr[_i];
      if (propertyToFilter === propName) return newObj;
    }if (_typa2.default.obj(obj[propName])) {
      return _extends({}, newObj, { [propName]: recursivelyOmitObjProperties(obj[propName], propertyFiltersArr) });
    }return _extends({}, newObj, { [propName]: obj[propName] });
  }, {});
}function omitInheritedProperties(obj) {
  return Object.getOwnPropertyNames(obj).reduce(function (newObj, propName) {
    if (_typa2.default.obj(obj[propName])) {
      return _extends({}, newObj, { [propName]: omitInheritedProperties(obj[propName]) });
    }return _extends({}, newObj, { [propName]: obj[propName] });
  }, {});
}function generateLogTimeStamp() {
  const today = new Date();
  return `[${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
}exports.getAppVersion = getAppVersion;
exports.setUpDev = setUpDev;
exports.omitGawkFromSettings = omitGawkFromSettings;
exports.omitInheritedProperties = omitInheritedProperties;
exports.noop = noop;
exports.pipe = pipe;
exports.curry = curry;
exports.curryRight = curryRight;
exports.range = range;
exports.compose = compose;
exports.identity = identity;
exports.tenYearsFromNow = tenYearsFromNow;
exports.recursivelyOmitObjProperties = recursivelyOmitObjProperties;
exports.generateLogTimeStamp = generateLogTimeStamp;

/***/ }),

/***/ "./app/config/env.lsc":
/*!****************************!*\
  !*** ./app/config/env.lsc ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _dotenv = __webpack_require__(/*! dotenv */ "dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://bit.ly/2xEDMxk
_dotenv2.default.config({ path: _path2.default.resolve(__dirname, '..', '..', 'config', '.env') });

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, productName, version, description, main, scripts, repository, author, license, dependencies, devDependencies, snyk, default */
/***/ (function(module) {

module.exports = {"name":"blueloss","productName":"BlueLoss","version":"2018.30.5","description":"A desktop app that locks your computer when a device is lost","main":"app/appMain-compiled.js","scripts":{"webpackWatch":"cross-env NODE_ENV=development parallel-webpack --watch --max-retries=1 --no-stats","startDev":"cross-env NODE_ENV=development nodemon app/appMain-compiled.js","debug":"cross-env NODE_ENV=development nodeDebug=true parallel-webpack && node --inspect-brk app/appMain-compiled.js","rollupWatchMain":"cross-env NODE_ENV=development rollup --config rollup.config.main.js --watch","rollupWatchSettingsPage":"cross-env NODE_ENV=development rollup --config rollup.config.frontEnd.js --watch","styleWatch":"cross-env NODE_ENV=development stylus -w app/frontEnd/assets/styles/stylus/index.styl -o app/frontEnd/assets/styles/css/settingsWindowCss-compiled.css","lintWatch":"cross-env NODE_ENV=development esw -w --ext .lsc -c .eslintrc.json --color --clear","start":"cross-env NODE_ENV=production node app/appMain-compiled.js","devTasks":"cross-env NODE_ENV=production node devTasks/tasks.js"},"repository":"https://github.com/Darkle/BlueLoss.git","author":"Darkle <coop.coding@gmail.com>","license":"MIT","dependencies":{"@hyperapp/logger":"^0.5.0","auto-launch":"^5.0.5","dotenv":"^5.0.1","formbase":"^6.0.4","fs-extra":"^6.0.1","gawk":"^4.4.5","got":"^8.3.0","hyperapp":"^1.2.5","is-empty":"^1.2.0","lock-system":"^1.3.0","lodash.omit":"^4.5.0","lowdb":"^1.0.0","ono":"^4.0.5","parallel-webpack":"^2.3.0","rollbar":"^2.3.9","stringify-object":"^3.2.2","systray":"^1.0.5","the-answer":"^1.0.0","timeproxy":"^1.2.1","typa":"^0.1.18","untildify":"^3.0.3","winston":"^2.4.1"},"devDependencies":{"@oigroup/babel-preset-lightscript":"^3.1.1","@oigroup/lightscript-eslint":"^3.1.1","babel-core":"^6.26.0","babel-eslint":"^8.2.3","babel-loader":"^7.1.4","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-react-jsx":"^6.24.1","babel-register":"^6.26.0","chalk":"^2.4.1","cross-env":"^5.1.6","del":"^3.0.0","eslint":"=4.8.0","eslint-plugin-jsx":"0.0.2","eslint-plugin-react":"^7.8.2","eslint-watch":"^3.1.5","exeq":"^3.0.0","inquirer":"^5.2.0","nexe":"^2.0.0-rc.28","nodemon":"^1.17.5","pkg":"^4.3.1","rollup":"^0.59.4","rollup-plugin-babel":"^3.0.4","rollup-plugin-commonjs":"^9.1.3","rollup-plugin-json":"^3.0.0","rollup-plugin-node-resolve":"^3.3.0","semver":"^5.5.0","sleep-ms":"^2.0.1","snyk":"^1.82.0","stylus":"^0.54.5","webpack":"^4.10.2","webpack-node-externals":"^1.7.2"},"snyk":true};

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "gawk":
/*!***********************!*\
  !*** external "gawk" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gawk");

/***/ }),

/***/ "lowdb":
/*!************************!*\
  !*** external "lowdb" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lowdb");

/***/ }),

/***/ "lowdb/adapters/FileSync":
/*!******************************************!*\
  !*** external "lowdb/adapters/FileSync" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lowdb/adapters/FileSync");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rollbar":
/*!**************************!*\
  !*** external "rollbar" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rollbar");

/***/ }),

/***/ "systray":
/*!**************************!*\
  !*** external "systray" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("systray");

/***/ }),

/***/ "timeproxy":
/*!****************************!*\
  !*** external "timeproxy" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timeproxy");

/***/ }),

/***/ "typa":
/*!***********************!*\
  !*** external "typa" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typa");

/***/ }),

/***/ "untildify":
/*!****************************!*\
  !*** external "untildify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("untildify");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });