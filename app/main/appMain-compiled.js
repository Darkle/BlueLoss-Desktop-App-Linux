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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main/appMain.lsc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/appUpdates/appUpdates.lsc":
/*!***************************************!*\
  !*** ./app/appUpdates/appUpdates.lsc ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForUpdate = undefined;

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _got = __webpack_require__(/*! got */ "got");

var _got2 = _interopRequireDefault(_got);

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _showUpdateNotification = __webpack_require__(/*! ./showUpdateNotification.lsc */ "./app/appUpdates/showUpdateNotification.lsc");

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userAgentString = `Mozilla/5.0 (KHTML, like Gecko) BlueLoss App https://github.com/Darkle/BlueLoss`;
const gotRequestOptions = { headers: { 'user-agent': userAgentString }, json: true };
const updateInfoUrl = 'https://raw.githubusercontent.com/Darkle/BlueLoss/master/updateInfo.json';

function checkForUpdate() {
  if (shouldCheckForUpdate()) return;

  (0, _settings.updateSetting)('dateLastCheckedForAppUpdate', Date.now());

  (0, _got2.default)(updateInfoUrl, gotRequestOptions).then(function ({ body: { latestVersion } }) {
    if (shouldShowUpdateNotification(latestVersion)) {
      (0, _showUpdateNotification.showUpdateNotification)(latestVersion);
    }
  }).catch(function (err) {
    _logging.logger.error('error downloading update info', err);
  });

  checkForUpdateTomorrow();
}function shouldCheckForUpdate() {
  return Date.now() > (0, _settings.getSettings)().dateLastCheckedForAppUpdate + _timeproxy2.default.TWO_WEEKS;
}function shouldShowUpdateNotification(latestVersion) {
  return (0, _utils.getProperAppVersion)() !== latestVersion && latestVersion !== (0, _settings.getSettings)().skipUpdateVersion;
}function checkForUpdateTomorrow() {
  setTimeout(checkForUpdate, _timeproxy2.default.ONE_DAY);
}exports.checkForUpdate = checkForUpdate;

/***/ }),

/***/ "./app/appUpdates/showUpdateNotification.lsc":
/*!***************************************************!*\
  !*** ./app/appUpdates/showUpdateNotification.lsc ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUpdateNotification = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(/*! url */ "url");

var _url2 = _interopRequireDefault(_url);

var _electron = __webpack_require__(/*! electron */ "electron");

var _electronPositioner = __webpack_require__(/*! electron-positioner */ "electron-positioner");

var _electronPositioner2 = _interopRequireDefault(_electronPositioner);

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let notificationWindow = null;
const notificationWindowMenu =  true ? _electron.Menu.buildFromTemplate([{ role: 'reload' }]) : undefined;
const updateHTMLfilePath = _url2.default.format({
  protocol: 'file',
  slashes: true,
  pathname: _path2.default.resolve(__dirname, '..', 'appUpdates', 'renderer', 'updateNotification.html')
});
const iconsDir = _path2.default.join(__dirname, '..', 'settingsWindow', 'renderer', 'assets', 'icons');

function showUpdateNotification(latestUpdateVersion) {
  notificationWindow = new _electron.BrowserWindow({
    width: getPlatformNotificationWindowWidth(),
    height: getPlatformNotificationWindowHeight(),
    resizable: false,
    alwaysOnTop: true,
    maximizable: false,
    fullscreenable: false,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    show: false,
    icon: getIconPath(),
    title: 'An Update Is Available For BlueLoss'
  });

  notificationWindow.setMenu(notificationWindowMenu);

  var positioner = new _electronPositioner2.default(notificationWindow);
  positioner.move('bottomRight');

  notificationWindow.loadURL(updateHTMLfilePath);
  if (true) notificationWindow.webContents.openDevTools({ mode: 'undocked' });

  notificationWindow.once('ready-to-show', function () {
    notificationWindow.show();
  });
  notificationWindow.webContents.on('dom-ready', function () {
    notificationWindow.webContents.send('main-process:sent-latest-update-version', latestUpdateVersion);
  });
  notificationWindow.on('closed', function () {
    notificationWindow = null;
  });
  notificationWindow.webContents.once('crashed', function (event) {
    _logging.logger.error('notificationWindow.webContents crashed', event);
  });
  notificationWindow.once('unresponsive', function (event) {
    _logging.logger.error('notificationWindow unresponsive', event);
  });
}_electron.ipcMain.on('renderer:open-update-web-page', function () {
  notificationWindow == null ? void 0 : typeof notificationWindow.close !== 'function' ? void 0 : notificationWindow.close();
  _electron.shell.openExternal('https://github.com/Darkle/BlueLoss/releases');
});

_electron.ipcMain.on('renderer:skip-update-version', function (event, versionToSkip) {
  notificationWindow == null ? void 0 : typeof notificationWindow.close !== 'function' ? void 0 : notificationWindow.close();
  (0, _settings.updateSetting)('skipUpdateVersion', versionToSkip);
});

function getPlatformNotificationWindowWidth() {
  switch (process.platform) {
    case 'darwin':
      return 420;
    case 'linux':
      return 415;
    case 'win32':
      return 435;
  }
}function getPlatformNotificationWindowHeight() {
  switch (process.platform) {
    case 'darwin':
      return 140;
    case 'linux':
      return 120;
    case 'win32':
      return 160;
  }
}function getIconPath() {
  let trayIconColor = typeof _settings.getSettings !== 'function' ? void 0 : (0, _settings.getSettings)().trayIconColor;
  if (!trayIconColor) trayIconColor = 'blue';
  const iconFileName = `BlueLoss-${trayIconColor}-512x512.png`;
  return _path2.default.join(iconsDir, iconFileName);
}exports.showUpdateNotification = showUpdateNotification;

/***/ }),

/***/ "./app/bluetooth/blueToothMain.lsc":
/*!*****************************************!*\
  !*** ./app/bluetooth/blueToothMain.lsc ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(/*! url */ "url");

var _url2 = _interopRequireDefault(_url);

var _electron = __webpack_require__(/*! electron */ "electron");

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _handleScanResults = __webpack_require__(/*! ./handleScanResults.lsc */ "./app/bluetooth/handleScanResults.lsc");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _lockCheck = __webpack_require__(/*! ./lockCheck.lsc */ "./app/bluetooth/lockCheck.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bluetoothHiddenWindowHTMLpath = _url2.default.format({
  protocol: 'file',
  slashes: true,
  pathname: _path2.default.resolve(__dirname, '..', 'bluetooth', 'renderer', 'bluetoothHiddenWindow.html')
});
const bluetoothHiddenWindowProperties = {
  show: false,
  webPreferences: {
    experimentalFeatures: true // for web-bluetooth
  }
};
const invokeUserGesture = true;
let scannerWindow = null; // so it doesn't get garbage collected

function init() {
  createBluetoothScannerWindow().then(scanforDevices);
}function createBluetoothScannerWindow() {
  return new Promise(function (resolve) {
    scannerWindow = new _electron.BrowserWindow(bluetoothHiddenWindowProperties);
    scannerWindow.loadURL(bluetoothHiddenWindowHTMLpath);
    if (true) scannerWindow.webContents.openDevTools({ mode: 'undocked' });

    scannerWindow.webContents.once('dom-ready', resolve);
    scannerWindow.webContents.on('select-bluetooth-device', _handleScanResults.handleScanResults);
    scannerWindow.webContents.once('crashed', function (event) {
      _logging.logger.error('scannerWindow.webContents crashed', event);
    });
    scannerWindow.once('unresponsive', function (event) {
      _logging.logger.error('scannerWindow unresponsive', event);
    });
  });
}function scanforDevices() {
  if (!(0, _settings.getSettings)().blueLossEnabled) return scanIn20Seconds();

  _logging.logger.debug('=======New Scan Started=======');

  scannerWindow.webContents.executeJavaScript(`navigator.bluetooth.requestDevice({acceptAllDevices: true})`, invokeUserGesture).catch(handleRequestDeviceError);

  (0, _lockCheck.lockSystemIfDeviceLost)();
  scanIn20Seconds();
}function scanIn20Seconds() {
  setTimeout(scanforDevices, _timeproxy2.default.TWENTY_SECONDS);
} /**
   * NotFoundError is the norm.
   */
function handleRequestDeviceError(err) {
  if ((err == null ? void 0 : err.name) === 'NotFoundError') return;
  _logging.logger.error(err);
}exports.init = init;

/***/ }),

/***/ "./app/bluetooth/handleScanResults.lsc":
/*!*********************************************!*\
  !*** ./app/bluetooth/handleScanResults.lsc ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeviceSearchingFor = exports.handleScanResults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isEmpty = __webpack_require__(/*! is-empty */ "is-empty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _types = __webpack_require__(/*! ../types/types.lsc */ "./app/types/types.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const processDeviceList = (0, _utils.compose)(addTimeStampToSeenDevices, dedupeDeviceList);
/**
 * Note: handleScanResults doesn't get called from
 * ` scannerWindow.webContents.on('select-bluetooth-device', handleScanResults)`
 * if there are no results from the
 * `executeJavaScript(`navigator.bluetooth.requestDevice({acceptAllDevices: true})`, true)`
 * call. That's why we do the lockCheck in scanforDevices.
 */
function handleScanResults(event, deviceList, callback) {
  var _settingsWindow$webCo;

  event.preventDefault();
  _logging.logger.debug(`Found these Bluetooth devices in scan: `, { deviceList });

  const { devicesToSearchFor } = (0, _settings.getSettings)();
  const timeStampedDeviceList = processDeviceList(deviceList);

  _settingsWindow.settingsWindow == null ? void 0 : (_settingsWindow$webCo = _settingsWindow.settingsWindow.webContents) == null ? void 0 : _settingsWindow$webCo.send('mainprocess:update-of-bluetooth-devices-can-see', { devicesCanSee: timeStampedDeviceList });

  if ((0, _isEmpty2.default)(devicesToSearchFor)) return;
  /**
   * If any devices we are looking for showed up in the latest scan,
   * update the device's lastSeen value to now in devicesToSearchFor.
   */
  for (let _i = 0, _len = deviceList.length; _i < _len; _i++) {
    const { deviceId } = deviceList[_i];
    if (devicesToSearchFor[deviceId]) {
      updateDeviceSearchingFor(deviceId, Date.now());
    }
  }callback('');
} // http://bit.ly/2kZhD74


function addTimeStampToSeenDevices(deviceList) {
  return (() => {
    const _arr = [];for (let _i2 = 0, _len2 = deviceList.length; _i2 < _len2; _i2++) {
      const device = deviceList[_i2];_arr.push(_extends({}, device, { lastSeen: Date.now() }));
    }return _arr;
  })();
}

/*****
* Check for duplicates in deviceList cause of this bug (which I've run into too):
* https://github.com/electron/electron/issues/10800
* We remove duplicates, but also for any duplicates, we prefer to take the duplicate
* that has a device name (sometimes they have an empty string for a device name).
*/
function dedupeDeviceList(deviceList) {
  return deviceList.reduce(function (newDeviceList, newDevice) {
    const newDeviceId = newDevice.deviceId;

    const deviceAlreadyInNewList = newDeviceList.find(function (device) {
      return device.deviceId === newDeviceId;
    });

    if (!deviceAlreadyInNewList) {
      return [...(newDeviceList === void 0 ? [] : newDeviceList), newDevice];
    }if (betterNamedDevice(deviceAlreadyInNewList, newDevice)) {
      var _ref;

      return [...(_ref = newDeviceList.filter(function (device) {
        return device.deviceId !== newDeviceId;
      }), _ref === void 0 ? [] : _ref), newDevice];
    }return newDeviceList;
  }, []);
}function betterNamedDevice(existingDevice, newDevice) {
  return existingDevice.deviceName.length === 0 && newDevice.deviceName.length > 0;
}function updateDeviceSearchingFor(deviceId, timeStamp) {
  (0, _settings.updateDeviceInDevicesToSearchFor)(deviceId, 'lastSeen', timeStamp);
}exports.handleScanResults = handleScanResults;
exports.updateDeviceSearchingFor = updateDeviceSearchingFor;

/***/ }),

/***/ "./app/bluetooth/lockCheck.lsc":
/*!*************************************!*\
  !*** ./app/bluetooth/lockCheck.lsc ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockSystemIfDeviceLost = undefined;

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

var _lockSystem = __webpack_require__(/*! ../common/lockSystem.lsc */ "./app/common/lockSystem.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _handleScanResults = __webpack_require__(/*! ./handleScanResults.lsc */ "./app/bluetooth/handleScanResults.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lockSystemIfDeviceLost() {
  const { devicesToSearchFor, timeToLock } = (0, _settings.getSettings)();
  /**
   * If a device is lost we lock the computer, however, after that, if
   * the computer is unlocked without the device coming back, we don't want
   * to keep locking the computer because the device is still lost. So we
   * give the device that has just been lost a lastSeen value of 10 years
   * from now (not using Infinity cause it doesn't JSON.stringify for storage).
   */
  for (let _i = 0, _keys = Object.keys(devicesToSearchFor), _len = _keys.length; _i < _len; _i++) {
    const _k = _keys[_i];const { lastSeen, deviceId } = devicesToSearchFor[_k];
    if (deviceHasBeenLost(lastSeen, timeToLock)) {
      (0, _lockSystem.lockTheSystem)();
      (0, _handleScanResults.updateDeviceSearchingFor)(deviceId, (0, _utils.tenYearsFromNow)());
    }
  }
}function deviceHasBeenLost(lastTimeSawDevice, timeToLock) {
  return Date.now() > lastTimeSawDevice + _timeproxy2.default`${timeToLock} minutes`;
}exports.lockSystemIfDeviceLost = lockSystemIfDeviceLost;

/***/ }),

/***/ "./app/common/lockSystem.lsc":
/*!***********************************!*\
  !*** ./app/common/lockSystem.lsc ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockTheSystem = undefined;

var _lockSystem = __webpack_require__(/*! lock-system */ "lock-system");

var _lockSystem2 = _interopRequireDefault(_lockSystem);

var _logging = __webpack_require__(/*! ./logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lockTheSystem() {
  if (!(0, _settings.getSettings)().blueLossEnabled) return;
  // lockSystem throws on error, so use try/catch
  try {
    (0, _lockSystem2.default)();
  } catch (err) {
    _logging.logger.error('Error occured trying to lock the system : ', err);
  }
}exports.lockTheSystem = lockTheSystem;

/***/ }),

/***/ "./app/common/logging/customRollbarTransport.lsc":
/*!*******************************************************!*\
  !*** ./app/common/logging/customRollbarTransport.lsc ***!
  \*******************************************************/
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

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rollbarConfig = {
  accessToken: process.env.rollbarAccessToken,
  enabled: false,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: "development",
  reportLevel: 'error',
  payload: {
    mainOrRenderer: 'main',
    platform: process.platform,
    processVersions: process.versions,
    arch: process.arch,
    BlueLossVersion: (0, _utils.getProperAppVersion)()
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

/***/ "./app/common/logging/logging.lsc":
/*!****************************************!*\
  !*** ./app/common/logging/logging.lsc ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeRollbarLogging = exports.addRollbarLogging = exports.logger = undefined;

var _electron = __webpack_require__(/*! electron */ "electron");

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _customRollbarTransport = __webpack_require__(/*! ./customRollbarTransport.lsc */ "./app/common/logging/customRollbarTransport.lsc");

var _userDebugLogger = __webpack_require__(/*! ./userDebugLogger.lsc */ "./app/common/logging/userDebugLogger.lsc");

var _settings = __webpack_require__(/*! ../../settings/settings.lsc */ "./app/settings/settings.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rollbarTransportOptions = {
  name: 'rollbarTransport',
  level: 'error',
  handleExceptions: true,
  humanReadableUnhandledException: true
};
const userDebugTransportOptions = {
  name: 'userDebugTransport',
  level: 'debug',
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
if (false) {}logger.add(_userDebugLogger.UserDebugLoggerTransport, userDebugTransportOptions);
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
}_electron.ipcMain.on('settings-renderer:error-sent', function (event, error) {
  logger.error('settings-renderer:error-sent', error);
});
_electron.ipcMain.on('bluetooth-scan-window-renderer:error-sent', function (event, error) {
  logger.error('bluetooth-scan-window-renderer:error-sent', error);
});

exports.logger = logger;
exports.addRollbarLogging = addRollbarLogging;
exports.removeRollbarLogging = removeRollbarLogging;

/***/ }),

/***/ "./app/common/logging/userDebugLogger.lsc":
/*!************************************************!*\
  !*** ./app/common/logging/userDebugLogger.lsc ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDebugLoggerTransport = undefined;

var _util = __webpack_require__(/*! util */ "util");

var _util2 = _interopRequireDefault(_util);

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _isEmpty = __webpack_require__(/*! is-empty */ "is-empty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _debugWindow = __webpack_require__(/*! ../../debugWindow/debugWindow.lsc */ "./app/debugWindow/debugWindow.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/****
* This is the loggger for when the user checks the "debug" checkbox in the options
* window. The log data is sent to the debug window renderer devtools console.
*/
const UserDebugLoggerTransport = _winston2.default.transports.CustomLogger = function (options) {
  Object.assign(this, options);
};_util2.default.inherits(UserDebugLoggerTransport, _winston2.default.Transport);

UserDebugLoggerTransport.prototype.log = function (level, msg = '', meta = {}, callback) {
  var _debugWindow$webConte;

  const isError = level === 'error';
  const loggerMessage = isError ? 'Error:' : msg;
  const consoleMethod = isError ? 'error' : 'log';

  _debugWindow.debugWindow == null ? void 0 : (_debugWindow$webConte = _debugWindow.debugWindow.webContents) == null ? void 0 : typeof _debugWindow$webConte.executeJavaScript !== 'function' ? void 0 : _debugWindow$webConte.executeJavaScript(`console.${consoleMethod}(\`${(0, _utils.generateLogTimeStamp)()}  ${loggerMessage}\n\`, ${createObjectStringForLog(meta)});`).catch(_utils.noop);

  callback(null, true);
};function createObjectStringForLog(meta) {
  const cleanedMetaObj = (0, _utils.omitInheritedProperties)(meta);
  if ((0, _isEmpty2.default)(cleanedMetaObj)) return '';
  if (cleanedMetaObj.stack) cleanedMetaObj.stack = cleanedMetaObj.stack.split(/\r\n?|\n/);
  return `JSON.stringify(${JSON.stringify(cleanedMetaObj)}, null, 4)`;
}exports.UserDebugLoggerTransport = UserDebugLoggerTransport;

/***/ }),

/***/ "./app/common/runOnStartup.lsc":
/*!*************************************!*\
  !*** ./app/common/runOnStartup.lsc ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableRunOnStartup = exports.enableRunOnStartup = undefined;

var _autoLaunch = __webpack_require__(/*! auto-launch */ "auto-launch");

var _autoLaunch2 = _interopRequireDefault(_autoLaunch);

var _logging = __webpack_require__(/*! ./logging/logging.lsc */ "./app/common/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const blueLossAutoLauncher = new _autoLaunch2.default({
  name: 'BlueLoss',
  isHidden: true
});

function enableRunOnStartup(firstRun) {
  if (firstRun && true) return;
  blueLossAutoLauncher.enable().catch(function (err) {
    _logging.logger.error('enableRunOnStartup error: ', err);
  });
}function disableRunOnStartup() {
  blueLossAutoLauncher.disable().catch(function (err) {
    _logging.logger.error('disableRunOnStartup error: ', err);
  });
}exports.enableRunOnStartup = enableRunOnStartup;
exports.disableRunOnStartup = disableRunOnStartup;

/***/ }),

/***/ "./app/common/setUpDev.lsc":
/*!*********************************!*\
  !*** ./app/common/setUpDev.lsc ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUpDev = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _electron = __webpack_require__(/*! electron */ "electron");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const devtronPath = _path2.default.resolve(__dirname, '..', '..', 'node_modules', 'devtron');
const settingsWindowDirPath = _path2.default.resolve(__dirname, '..', 'settingsWindow', 'renderer');
const settingsWindowHTMLfilePath = _path2.default.join(settingsWindowDirPath, 'settingsWindow.html');
const settingsWindowCSSfilePath = _path2.default.join(settingsWindowDirPath, 'assets', 'styles', 'css', 'settingsWindowCss-compiled.css');
const settingsWindowJSfilePath = _path2.default.join(settingsWindowDirPath, 'settingsWindowRendererMain-compiled.js');
const settingsWindowIconFiles = _path2.default.join(settingsWindowDirPath, 'assets', 'icons', '*.*');
const debugWindowDirPath = _path2.default.resolve(__dirname, '..', 'debugWindow', 'renderer');
const debugWindowHTMLfilePath = _path2.default.join(debugWindowDirPath, 'debugWindow.html');
const debugWindowJSfilePath = _path2.default.join(debugWindowDirPath, 'debugWindowRendererMain-compiled.js');
const notificationWindowHTMLfilePath = _path2.default.join(__dirname, '..', 'appUpdates', 'updateNotification.html');
const bluetoothRendererJSfilePath = _path2.default.resolve(__dirname, '..', 'bluetooth', 'renderer', 'bluetoothRendererMain-compiled.js');

function setUpDev() {
  if (false) {}
  __webpack_require__(/*! electron-reload */ "electron-reload")([settingsWindowHTMLfilePath, settingsWindowCSSfilePath, settingsWindowJSfilePath, settingsWindowIconFiles, debugWindowHTMLfilePath, debugWindowJSfilePath, notificationWindowHTMLfilePath, bluetoothRendererJSfilePath]);
  _electron.BrowserWindow.addDevToolsExtension(devtronPath);
  // auto open the settings window in dev so dont have to manually open it each time electron restarts
  (0, _settingsWindow.showSettingsWindow)();
}exports.setUpDev = setUpDev;

/***/ }),

/***/ "./app/common/utils.lsc":
/*!******************************!*\
  !*** ./app/common/utils.lsc ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLogTimeStamp = exports.recursivelyOmitObjProperties = exports.getProperAppVersion = exports.tenYearsFromNow = exports.identity = exports.compose = exports.range = exports.curryRight = exports.curry = exports.pipe = exports.noop = exports.omitInheritedProperties = exports.omitGawkFromSettings = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _typa = __webpack_require__(/*! typa */ "typa");

var _typa2 = _interopRequireDefault(_typa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * If you run Electron by pointing it to a js file that's not in the base parent directory with the
 * package.json it will report the Electron binary version rather than what's in your package.json.
 * https://github.com/electron/electron/issues/7085
 */
const appVersion = __webpack_require__(/*! ../../package.json */ "./package.json").version;

function getProperAppVersion() {
  return appVersion;
}function omitGawkFromSettings(settings) {
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
}exports.omitGawkFromSettings = omitGawkFromSettings;
exports.omitInheritedProperties = omitInheritedProperties;
exports.noop = noop;
exports.pipe = pipe;
exports.curry = curry;
exports.curryRight = curryRight;
exports.range = range;
exports.compose = compose;
exports.identity = identity;
exports.tenYearsFromNow = tenYearsFromNow;
exports.getProperAppVersion = getProperAppVersion;
exports.recursivelyOmitObjProperties = recursivelyOmitObjProperties;
exports.generateLogTimeStamp = generateLogTimeStamp;

/***/ }),

/***/ "./app/debugWindow/debugWindow.lsc":
/*!*****************************************!*\
  !*** ./app/debugWindow/debugWindow.lsc ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugWindow = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(/*! url */ "url");

var _url2 = _interopRequireDefault(_url);

var _electron = __webpack_require__(/*! electron */ "electron");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debugWindowHTMLpath = _url2.default.format({
  protocol: 'file',
  slashes: true,
  pathname: _path2.default.resolve(__dirname, '..', 'debugWindow', 'renderer', 'debugWindow.html')
});
let debugWindow = null;

function showDebugWindow() {
  if (debugWindow) {
    return debugWindow.webContents.openDevTools({ mode: 'undocked' });
  }exports.debugWindow = debugWindow = new _electron.BrowserWindow({ show: false });
  debugWindow.loadURL(debugWindowHTMLpath);
  debugWindow.webContents.openDevTools({ mode: 'undocked' });

  debugWindow.once('closed', function () {
    exports.debugWindow = debugWindow = null;
  });
  /**
   * Without a delay, the console has trouble showing the VM:line to the right of
   * what you just logged, instead it shows (unknown) which kinda looks like we're
   * printing 'Current BlueLoss settings: (unknown)'
   */
  debugWindow.webContents.once('devtools-opened', function () {
    setTimeout(() => {
      return _logging.logger.debug('Current BlueLoss settings:', (0, _utils.omitGawkFromSettings)((0, _settings.getSettings)()));
    }, 500);
  });
  debugWindow.webContents.once('devtools-closed', function () {
    var _settingsWindow$webCo;

    _settingsWindow.settingsWindow == null ? void 0 : (_settingsWindow$webCo = _settingsWindow.settingsWindow.webContents) == null ? void 0 : _settingsWindow$webCo.send('mainprocess:setting-updated-in-main', { userDebug: false });
    debugWindow.close();
  });
  debugWindow.webContents.once('crashed', function (event) {
    _logging.logger.error('debugWindow.webContents crashed', event);
  });
  debugWindow.once('unresponsive', function (event) {
    _logging.logger.error('debugWindow unresponsive', event);
  });
}_electron.ipcMain.on('renderer:user-debug-toggled', function (event, userDebug) {
  if (userDebug) showDebugWindow();else debugWindow == null ? void 0 : typeof debugWindow.close !== 'function' ? void 0 : debugWindow.close();
});

exports.debugWindow = debugWindow;

/***/ }),

/***/ "./app/main/appMain.lsc":
/*!******************************!*\
  !*** ./app/main/appMain.lsc ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../config/env.lsc */ "./config/env.lsc");

var _electron = __webpack_require__(/*! electron */ "electron");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _setUpDev = __webpack_require__(/*! ../common/setUpDev.lsc */ "./app/common/setUpDev.lsc");

var _blueToothMain = __webpack_require__(/*! ../bluetooth/blueToothMain.lsc */ "./app/bluetooth/blueToothMain.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

var _tray = __webpack_require__(/*! ../tray/tray.lsc */ "./app/tray/tray.lsc");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

var _runOnStartup = __webpack_require__(/*! ../common/runOnStartup.lsc */ "./app/common/runOnStartup.lsc");

var _appUpdates = __webpack_require__(/*! ../appUpdates/appUpdates.lsc */ "./app/appUpdates/appUpdates.lsc");

if (_electron.app.makeSingleInstance(_utils.noop)) _electron.app.quit();

_electron.app.once('ready', function () {
  var _electronApp$dock;

  const { firstRun } = (0, _settings.getSettings)();

  if (true) (0, _setUpDev.setUpDev)();
  if (!firstRun) (_electronApp$dock = _electron.app.dock) == null ? void 0 : _electronApp$dock.hide();

  (0, _tray.initTrayMenu)();
  (0, _blueToothMain.init)();
  (0, _appUpdates.checkForUpdate)();

  if (firstRun) {
    (0, _settings.updateSetting)('firstRun', !firstRun);
    (0, _settingsWindow.showSettingsWindow)();
    (0, _runOnStartup.enableRunOnStartup)(firstRun);
  }
});

_electron.app.on('window-all-closed', _utils.noop);

process.on('unhandledRejection', _logging.logger.error);
process.on('uncaughtException', function (err) {
  _logging.logger.error(err);
  process.exit(1);
} // eslint-disable-line no-process-exit
);

/***/ }),

/***/ "./app/settings/settings.lsc":
/*!***********************************!*\
  !*** ./app/settings/settings.lsc ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDeviceInDevicesToSearchFor = exports.removeNewDeviceToSearchFor = exports.addNewDeviceToSearchFor = exports.getSettings = exports.updateSetting = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _electron = __webpack_require__(/*! electron */ "electron");

var _gawk = __webpack_require__(/*! gawk */ "gawk");

var _gawk2 = _interopRequireDefault(_gawk);

var _lowdb = __webpack_require__(/*! lowdb */ "lowdb");

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = __webpack_require__(/*! lowdb/adapters/FileSync */ "lowdb/adapters/FileSync");

var _FileSync2 = _interopRequireDefault(_FileSync);

var _typa = __webpack_require__(/*! typa */ "typa");

var _typa2 = _interopRequireDefault(_typa);

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

var _types = __webpack_require__(/*! ../types/types.lsc */ "./app/types/types.lsc");

var _settingsDefaults = __webpack_require__(/*! ./settingsDefaults.lsc */ "./app/settings/settingsDefaults.lsc");

var _settingsObservers = __webpack_require__(/*! ./settingsObservers.lsc */ "./app/settings/settingsObservers.lsc");

var _settingsIPClisteners = __webpack_require__(/*! ./settingsIPClisteners.lsc */ "./app/settings/settingsIPClisteners.lsc");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let devicesLastSeenHasBeenUpdatedOnStartup = false;
const settingsDBpath = _path2.default.join(_electron.app.getPath('userData'), 'blueloss-settings.json');
const adapter = new _FileSync2.default(settingsDBpath);
const db = (0, _lowdb2.default)(adapter);

db.defaults(_settingsDefaults.defaultSettings).write();

const settings = (0, _gawk2.default)(db.getState());

(0, _settingsObservers.initSettingsObservers)(settings);
(0, _settingsIPClisteners.initSettingsIPClisteners)();
updateLastSeenForDevicesLookingForOnStartup();

function getSettings() {
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
  }devicesLastSeenHasBeenUpdatedOnStartup = true;
}function logSettingsUpdate(newSettingKey, newSettingValue) {
  /**
   * There's a circular dependancy issue with logging stuff on app startup,
   * so using a variable to keep track.
   * (updateLastSeenForDevicesLookingForOnStartup is called on startup,
   * which changes the devicesToSearchFor setting value, which in turn
   * causes logSettingsUpdate to be called, which relies on the logger, which isnt ready yet).
   */
  if (!devicesLastSeenHasBeenUpdatedOnStartup) return;
  const debugMessage = `Updated Setting: updated '${newSettingKey}' with:`;
  if (_typa2.default.obj(newSettingValue)) {
    _logging.logger.debug(debugMessage, { [newSettingKey]: (0, _utils.omitGawkFromSettings)(newSettingValue) });
  } else {
    _logging.logger.debug(`${debugMessage} ${newSettingValue}`);
  }
}exports.updateSetting = updateSetting;
exports.getSettings = getSettings;
exports.addNewDeviceToSearchFor = addNewDeviceToSearchFor;
exports.removeNewDeviceToSearchFor = removeNewDeviceToSearchFor;
exports.updateDeviceInDevicesToSearchFor = updateDeviceInDevicesToSearchFor;

/***/ }),

/***/ "./app/settings/settingsDefaults.lsc":
/*!*******************************************!*\
  !*** ./app/settings/settingsDefaults.lsc ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSettings = undefined;

var _types = __webpack_require__(/*! ../types/types.lsc */ "./app/types/types.lsc");

const defaultSettings = {
  blueLossEnabled: true,
  runOnStartup: true,
  trayIconColor: 'blue',
  devicesToSearchFor: {},
  timeToLock: 3,
  reportErrors: true,
  firstRun: true,
  settingsWindowPosition: null,
  dateLastCheckedForAppUpdate: Date.now(),
  skipUpdateVersion: '0.2.3'
};

exports.defaultSettings = defaultSettings;

/***/ }),

/***/ "./app/settings/settingsIPClisteners.lsc":
/*!***********************************************!*\
  !*** ./app/settings/settingsIPClisteners.lsc ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSettingsIPClisteners = undefined;

var _electron = __webpack_require__(/*! electron */ "electron");

var _types = __webpack_require__(/*! ../types/types.lsc */ "./app/types/types.lsc");

var _settings = __webpack_require__(/*! ./settings.lsc */ "./app/settings/settings.lsc");

function initSettingsIPClisteners() {
  _electron.ipcMain.on('renderer:setting-updated-in-ui', function (event, settingName, settingValue) {
    (0, _settings.updateSetting)(settingName, settingValue);
  });
  _electron.ipcMain.on('renderer:device-added-in-ui', function (event, deviceToAdd) {
    (0, _settings.addNewDeviceToSearchFor)(deviceToAdd);
  });
  _electron.ipcMain.on('renderer:device-removed-in-ui', function (event, deviceToRemove) {
    (0, _settings.removeNewDeviceToSearchFor)(deviceToRemove);
  });
}exports.initSettingsIPClisteners = initSettingsIPClisteners;

/***/ }),

/***/ "./app/settings/settingsObservers.lsc":
/*!********************************************!*\
  !*** ./app/settings/settingsObservers.lsc ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSettingsObservers = undefined;

var _gawk = __webpack_require__(/*! gawk */ "gawk");

var _gawk2 = _interopRequireDefault(_gawk);

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _tray = __webpack_require__(/*! ../tray/tray.lsc */ "./app/tray/tray.lsc");

var _runOnStartup = __webpack_require__(/*! ../common/runOnStartup.lsc */ "./app/common/runOnStartup.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initSettingsObservers(settings) {
  _gawk2.default.watch(settings, ['blueLossEnabled'], function (enabled) {
    var _settingsWindow$webCo;

    _settingsWindow.settingsWindow == null ? void 0 : (_settingsWindow$webCo = _settingsWindow.settingsWindow.webContents) == null ? void 0 : _settingsWindow$webCo.send('mainprocess:setting-updated-in-main', { blueLossEnabled: enabled });
    (0, _tray.updateTrayMenu)();
  });
  _gawk2.default.watch(settings, ['reportErrors'], function (enabled) {
    if (enabled) (0, _logging.addRollbarLogging)();else (0, _logging.removeRollbarLogging)();
  });
  _gawk2.default.watch(settings, ['runOnStartup'], function (enabled) {
    if (enabled) (0, _runOnStartup.enableRunOnStartup)();else (0, _runOnStartup.disableRunOnStartup)();
  });
  _gawk2.default.watch(settings, ['trayIconColor'], _tray.changeTrayIcon);
}exports.initSettingsObservers = initSettingsObservers;

/***/ }),

/***/ "./app/settingsWindow/settingsWindow.lsc":
/*!***********************************************!*\
  !*** ./app/settingsWindow/settingsWindow.lsc ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsWindow = exports.toggleSettingsWindow = exports.showSettingsWindow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _url = __webpack_require__(/*! url */ "url");

var _url2 = _interopRequireDefault(_url);

var _electron = __webpack_require__(/*! electron */ "electron");

var _lodash = __webpack_require__(/*! lodash.omit */ "lodash.omit");

var _lodash2 = _interopRequireDefault(_lodash);

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

var _logging = __webpack_require__(/*! ../common/logging/logging.lsc */ "./app/common/logging/logging.lsc");

var _utils = __webpack_require__(/*! ../common/utils.lsc */ "./app/common/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const settingsWindowRendererDirPath = _path2.default.join(__dirname, '..', 'settingsWindow', 'renderer');
const iconsDir = _path2.default.join(settingsWindowRendererDirPath, 'assets', 'icons');
const settingsHTMLpath = _url2.default.format({
  protocol: 'file',
  slashes: true,
  pathname: _path2.default.resolve(settingsWindowRendererDirPath, 'settingsWindow.html')
});
const settingsWindowProperties = _extends({
  width: 786,
  height: 616,
  title: 'BlueLoss',
  autoHideMenuBar: true,
  resizable: false,
  fullscreenable: false,
  fullscreen: false,
  frame: false,
  show: false,
  icon: getIconPath(),
  webPreferences: {
    textAreasAreResizable: false,
    devTools: true
  }
}, getStoredWindowPosition());
/****
* Remove the menu in alt menu bar in prod, so they dont accidentally exit the app.
* Reload is for dev so we can easily reload the browserwindow with Ctrl+R.
*/
const settingsWindowMenu =  true ? _electron.Menu.buildFromTemplate([{ role: 'reload' }]) : undefined;
let settingsWindow = null;

function showSettingsWindow() {
  var _electronApp$dock;

  if (settingsWindow) return settingsWindow.show();
  /*****
  * We add the settings to a global each time we create a new settings window so we can easily
  * load the inital app settings on renderer startup. This way we dont have to send a message from the
  * renderer to the main processs to ask for the settings - or send them from main process on detection
  * of the BrowserWindow 'ready-to-show' event, both of which might make the UI show nothing briefly
  * before the settings.
  *
  * We can't use remote.require(../settings.lsc).getSettings() in the renderer because it doesn't seem
  * to work with code that needs to be transpiled, as everything in settlings.lsc is compiled into
  * appMain-compiled.js and the remote.require() looks for the .lsc file - it doesn't know that the
  * settings module has been compiled and now lives inside of the appMain-compiled.js file.
  */
  global.settingsWindowRendererInitialSettings = createSettingsWindowInitialSettings();

  exports.settingsWindow = settingsWindow = new _electron.BrowserWindow(_extends({}, settingsWindowProperties, getStoredWindowPosition(), { icon: getIconPath() }));
  settingsWindow.loadURL(settingsHTMLpath);
  settingsWindow.setMenu(settingsWindowMenu);
  (_electronApp$dock = _electron.app.dock) == null ? void 0 : _electronApp$dock.show();
  if (true) settingsWindow.webContents.openDevTools({ mode: 'undocked' });

  settingsWindow.once('close', function () {
    (0, _settings.updateSetting)('settingsWindowPosition', settingsWindow.getBounds());
  });
  settingsWindow.once('ready-to-show', function () {
    settingsWindow.show();
  });
  settingsWindow.once('closed', function () {
    var _electronApp$dock2;

    exports.settingsWindow = settingsWindow = null;
    (_electronApp$dock2 = _electron.app.dock) == null ? void 0 : _electronApp$dock2.hide();
  });
  settingsWindow.webContents.once('crashed', function (event) {
    _logging.logger.error('settingsWindow.webContents crashed', event);
  });
  settingsWindow.once('unresponsive', function (event) {
    _logging.logger.error('settingsWindow unresponsive', event);
  });
}function getStoredWindowPosition() {
  const settingsWindowPosition = typeof _settings.getSettings !== 'function' ? void 0 : (0, _settings.getSettings)().settingsWindowPosition;
  if (!settingsWindowPosition) return {};
  return { x: settingsWindowPosition.x, y: settingsWindowPosition.y };
}function getIconPath() {
  let trayIconColor = typeof _settings.getSettings !== 'function' ? void 0 : (0, _settings.getSettings)().trayIconColor;
  if (!trayIconColor) trayIconColor = 'blue';
  const iconFileName = `BlueLoss-${trayIconColor}-512x512.png`;
  return _path2.default.join(iconsDir, iconFileName);
}function toggleSettingsWindow() {
  if (!settingsWindow) {
    showSettingsWindow();
  } else if (settingsWindow.isVisible()) {
    settingsWindow.close();
  }
} /**
   * Some settings are just used internally and never exposed to the user -
   * e.g. firstRun, settingsWindowPosition, etc.
   */
function createSettingsWindowInitialSettings() {
  return (0, _lodash2.default)((0, _utils.omitGawkFromSettings)((0, _utils.omitInheritedProperties)((0, _settings.getSettings)())), ['firstRun', 'settingsWindowPosition', 'dateLastCheckedForAppUpdate', 'skipUpdateVersion']);
}exports.showSettingsWindow = showSettingsWindow;
exports.toggleSettingsWindow = toggleSettingsWindow;
exports.settingsWindow = settingsWindow;

/***/ }),

/***/ "./app/tray/tray.lsc":
/*!***************************!*\
  !*** ./app/tray/tray.lsc ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTrayMenu = exports.createContextMenu = exports.changeTrayIcon = exports.initTrayMenu = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _electron = __webpack_require__(/*! electron */ "electron");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/settingsWindow/settingsWindow.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/settings/settings.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let tray = null;
const trayIconsFolder = _path2.default.resolve(__dirname, '..', 'tray', 'icons');

function initTrayMenu() {
  tray = new _electron.Tray(getNewTrayIconPath((0, _settings.getSettings)().trayIconColor));
  tray.setContextMenu(createContextMenu());
  tray.setToolTip('BlueLoss');
  tray.on('double-click', _settingsWindow.toggleSettingsWindow);
}function createContextMenu() {
  return _electron.Menu.buildFromTemplate([{
    label: 'Open BlueLoss Settings',
    click: _settingsWindow.showSettingsWindow
  }, {
    label: generateEnabledDisabledLabel(),
    click: toggleEnabledFromTray
  }, {
    label: 'Quit BlueLoss',
    click: _electron.app.quit
  }]);
}function getNewTrayIconPath(trayIconColor) {
  return _path2.default.join(trayIconsFolder, `BlueLoss-${trayIconColor}-128x128.png`);
}function generateEnabledDisabledLabel() {
  return `${(0, _settings.getSettings)().blueLossEnabled ? 'Disable' : 'Enable'} BlueLoss`;
}function changeTrayIcon(newTrayIconColor) {
  tray.setImage(getNewTrayIconPath(newTrayIconColor));
}function updateTrayMenu() {
  tray.setContextMenu(createContextMenu());
}function toggleEnabledFromTray() {
  (0, _settings.updateSetting)('blueLossEnabled', !(0, _settings.getSettings)().blueLossEnabled);
}exports.initTrayMenu = initTrayMenu;
exports.changeTrayIcon = changeTrayIcon;
exports.createContextMenu = createContextMenu;
exports.updateTrayMenu = updateTrayMenu;

/***/ }),

/***/ "./app/types/types.lsc":
/*!*****************************!*\
  !*** ./app/types/types.lsc ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./config/env.lsc":
/*!************************!*\
  !*** ./config/env.lsc ***!
  \************************/
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

module.exports = {"name":"blueloss","productName":"BlueLoss","version":"0.2.3","description":"A desktop app that locks your computer when a device is lost","main":"app/main/appMain-compiled.js","scripts":{"webpackWatch":"cross-env NODE_ENV=development parallel-webpack --watch --max-retries=1 --no-stats","electronWatch":"cross-env NODE_ENV=development nodemon app/main/appMain-compiled.js --config nodemon.json","styleWatch":"cross-env NODE_ENV=development stylus -w app/settingsWindow/renderer/assets/styles/stylus/index.styl -o app/settingsWindow/renderer/assets/styles/css/settingsWindowCss-compiled.css","lintWatch":"cross-env NODE_ENV=development esw -w --ext .lsc -c .eslintrc.json --color --clear","debug":"cross-env NODE_ENV=development nodeDebug=true parallel-webpack && sleepms 3000 && electron --inspect-brk app/main/appMain-compiled.js","start":"cross-env NODE_ENV=production electron app/main/appMain-compiled.js","devTasks":"cross-env NODE_ENV=production node devTasks/tasks.js","snyk-protect":"snyk protect","prepare":"npm run snyk-protect","test":"snyk test"},"repository":"https://github.com/Darkle/BlueLoss.git","author":"Darkle <coop.coding@gmail.com>","license":"MIT","dependencies":{"@hyperapp/logger":"^0.5.0","auto-launch":"^5.0.5","dotenv":"^5.0.1","electron-positioner":"^3.0.0","formbase":"^6.0.4","fs-jetpack":"^1.3.0","gawk":"^4.4.5","got":"^8.3.0","hyperapp":"^1.2.5","is-empty":"^1.2.0","lock-system":"^1.3.0","lodash.omit":"^4.5.0","lowdb":"^1.0.0","ono":"^4.0.5","rollbar":"^2.3.9","stringify-object":"^3.2.2","timeproxy":"^1.2.1","typa":"^0.1.18","winston":"^2.4.1","snyk":"^1.76.0"},"devDependencies":{"@oigroup/babel-preset-lightscript":"^3.1.0-alpha.2","@oigroup/lightscript-eslint":"^3.1.0-alpha.2","babel-core":"^6.26.0","babel-eslint":"^8.2.3","babel-loader":"^7.1.4","babel-plugin-transform-react-jsx":"^6.24.1","babel-register":"^6.26.0","chalk":"^2.4.1","cross-env":"^5.1.4","del":"^3.0.0","devtron":"^1.4.0","electron":"^2.0.0-beta.8","electron-packager":"^12.0.1","electron-reload":"^1.2.2","electron-wix-msi":"^1.3.0","eslint":"=4.8.0","eslint-plugin-jsx":"0.0.2","eslint-plugin-react":"^7.7.0","eslint-watch":"^3.1.4","exeq":"^3.0.0","inquirer":"^5.2.0","node-7z":"^0.4.0","nodemon":"^1.17.3","parallel-webpack":"^2.3.0","semver":"^5.5.0","sleep-ms":"^2.0.1","stylus":"^0.54.5","webpack":"^4.6.0","webpack-node-externals":"^1.7.2"},"snyk":true};

/***/ }),

/***/ "auto-launch":
/*!******************************!*\
  !*** external "auto-launch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auto-launch");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-positioner":
/*!**************************************!*\
  !*** external "electron-positioner" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-positioner");

/***/ }),

/***/ "electron-reload":
/*!**********************************!*\
  !*** external "electron-reload" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-reload");

/***/ }),

/***/ "gawk":
/*!***********************!*\
  !*** external "gawk" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gawk");

/***/ }),

/***/ "got":
/*!**********************!*\
  !*** external "got" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("got");

/***/ }),

/***/ "is-empty":
/*!***************************!*\
  !*** external "is-empty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-empty");

/***/ }),

/***/ "lock-system":
/*!******************************!*\
  !*** external "lock-system" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lock-system");

/***/ }),

/***/ "lodash.omit":
/*!******************************!*\
  !*** external "lodash.omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

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