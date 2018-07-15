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


var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _createBlueLossConfig = __webpack_require__(/*! ./components/bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

var _makeSingleInstance = __webpack_require__(/*! ./components/makeSingleInstance.lsc */ "./app/components/makeSingleInstance.lsc");

var _settings = __webpack_require__(/*! ./components/settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _logging = __webpack_require__(/*! ./components/logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _tray = __webpack_require__(/*! ./components/tray/tray.lsc */ "./app/components/tray/tray.lsc");

var _server = __webpack_require__(/*! ./components/server/server.lsc */ "./app/components/server/server.lsc");

var _utils = __webpack_require__(/*! ./components/utils.lsc */ "./app/components/utils.lsc");

var _bluetoothScan = __webpack_require__(/*! ./components/bluetooth/bluetoothScan.lsc */ "./app/components/bluetooth/bluetoothScan.lsc");

var _settingsWindow = __webpack_require__(/*! ./components/settingsWindow/settingsWindow.lsc */ "./app/components/settingsWindow/settingsWindow.lsc");

var _runOnStartup = __webpack_require__(/*! ./components/runOnStartup.lsc */ "./app/components/runOnStartup.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! dotenv */ "dotenv").config({ path: _path2.default.resolve(__dirname, '..', 'config', '.env') });

(0, _createBlueLossConfig.createBlueLossConfig)().then(_makeSingleInstance.makeSingleInstance).then(_settings.initSettings).then(_logging.initLogging).then(_tray.initTrayMenu).then(_server.startServer).then(_utils.setUpDev).then(firstRunSetup).then(_bluetoothScan.scanForBlueToothDevices).catch(_utils.bailOnFatalError);

function firstRunSetup() {
  const { firstRun } = (0, _settings.getSettings)();
  if (!firstRun) return Promise.resolve();
  (0, _settings.updateSetting)('firstRun', !firstRun);
  return (0, _runOnStartup.enableRunOnStartup)(firstRun).then(_settingsWindow.openSettingsWindow);
}process.on('unhandledRejection', _utils.bailOnFatalError);
process.on('uncaughtException', _utils.bailOnFatalError);

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
exports.getChromePrefs = exports.getFirefoxPrefsJs = exports.getFirefoxUserChrome = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _child_process = __webpack_require__(/*! child_process */ "child_process");

function getFirefoxUserChrome() {
  return `
@-moz-document url(chrome://browser/content/browser.xul) {
#TabsToolbar {
  visibility: collapse !important;
}
#nav-bar {
  visibility: collapse !important;
}
}
`;
}function getFirefoxPrefsJs() {
  return `
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.sessionstore.restore_on_demand", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
`;
} /*****
  * Localhost addresses
  * ::
  * ::1
  * 0.0.0.0
  * 127.0.0.1
  */
function getChromePrefs() {
  const screenResolution = getScreenResolution();
  if (!screenResolution) return {};
  const browserWindowPosition = generateBrowserWindowPosition(screenResolution);
  return {
    "browser": {
      "app_window_placement": {
        "[::]_/": _extends({
          "maximized": false
        }, browserWindowPosition),
        "[::1]_/": _extends({
          "maximized": false
        }, browserWindowPosition),
        "0": {
          "0": {
            "0": {
              "0_/": _extends({
                "maximized": false
              }, browserWindowPosition)
            }
          }
        },
        "127": {
          "0": {
            "0": {
              "1_/": _extends({
                "maximized": false
              }, browserWindowPosition)
            }
          }
        }
      }
    }
  };
}

/*****
* We want the chromium browser to end up in the center of the screen
* with a width of 910px and a height of 760px. It's ok if the users screen
* dimensions change later as when they move the window and close it, chromium
* updates that in the Preferences file.
*/
function generateBrowserWindowPosition({ screenHeight, screenWidth }) {
  return {
    "top": Math.round(screenHeight / 2 - 760 / 2),
    "bottom": Math.round(screenHeight / 2 + 760 / 2),
    "left": Math.round(screenWidth / 2 - 910 / 2),
    "right": Math.round(screenWidth / 2 + 910 / 2)
  };
}

function getScreenResolution() {
  try {
    const [width, height] = (0, _child_process.execSync)(`xrandr |grep \\* |awk '{print $1}'`).toString().trim().split('x');
    return { screenWidth: Number(width), screenHeight: Number(height) };
  } catch (e) {
    //winston logger isn't ready yet here, so fall back to using console
    console.error(e);
    return null;
  }
}exports.getFirefoxUserChrome = getFirefoxUserChrome;
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
exports.getBlueLossSettingsFilePath = exports.getBlueLossConfigFolderPath = exports.getBlueLossLogsFolderPath = exports.createBlueLossConfig = undefined;

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
const blueLossConfigChromiumFirstRunFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'chromium', 'First Run');
const blueLossConfigChromiumPrefsFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'chromium', 'Default', 'Preferences');
const blueLossConfigFirefoxUserChromeFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'firefox', 'chrome', 'userChrome.css');
const blueLossConfigFirefoxPrefsFilePath = _path2.default.join(blueLossConfigFolderPath, 'BrowserProfiles', 'firefox', 'prefs.js');

async function createBlueLossConfig() {
  const exists = await _fsExtra2.default.pathExists(blueLossSettingsFilePath);
  if (exists) return Promise.resolve();
  return await Promise.all([_fsExtra2.default.ensureFile(blueLossSettingsFilePath), _fsExtra2.default.ensureDir(blueLossLogsFolderPath), createChromiumProfileFiles(), createFirefoxProfileFiles()]);
}function createChromiumProfileFiles() {
  return _fsExtra2.default.ensureFile(blueLossConfigChromiumPrefsFilePath).then(function () {
    return _fsExtra2.default.writeJson(blueLossConfigChromiumPrefsFilePath, (0, _browserProfileData.getChromePrefs)());
  }).then(function () {
    return _fsExtra2.default.ensureFile(blueLossConfigChromiumFirstRunFilePath);
  });
}function createFirefoxProfileFiles() {
  return _fsExtra2.default.ensureFile(blueLossConfigFirefoxUserChromeFilePath).then(function () {
    return _fsExtra2.default.ensureFile(blueLossConfigFirefoxPrefsFilePath);
  }).then(function () {
    return _fsExtra2.default.outputFile(blueLossConfigFirefoxUserChromeFilePath, (0, _browserProfileData.getFirefoxUserChrome)());
  }).then(function () {
    return _fsExtra2.default.outputFile(blueLossConfigFirefoxPrefsFilePath, (0, _browserProfileData.getFirefoxPrefsJs)());
  });
}function getBlueLossLogsFolderPath() {
  return blueLossLogsFolderPath;
}function getBlueLossConfigFolderPath() {
  return blueLossConfigFolderPath;
}function getBlueLossSettingsFilePath() {
  return blueLossSettingsFilePath;
}exports.createBlueLossConfig = createBlueLossConfig;
exports.getBlueLossLogsFolderPath = getBlueLossLogsFolderPath;
exports.getBlueLossConfigFolderPath = getBlueLossConfigFolderPath;
exports.getBlueLossSettingsFilePath = getBlueLossSettingsFilePath;

/***/ }),

/***/ "./app/components/bluetooth/bluetoothScan.lsc":
/*!****************************************************!*\
  !*** ./app/components/bluetooth/bluetoothScan.lsc ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanForBlueToothDevices = undefined;

var _child_process = __webpack_require__(/*! child_process */ "child_process");

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _signalExit = __webpack_require__(/*! signal-exit */ "signal-exit");

var _signalExit2 = _interopRequireDefault(_signalExit);

var _handleScanResults = __webpack_require__(/*! ./handleScanResults.lsc */ "./app/components/bluetooth/handleScanResults.lsc");

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const spawnedScans = new Set();

/*****
* We don't return a promise here as we want scanForBlueToothDevices to
* be spun off seperately. Also, if we returned a promise here that calls
* itself recursively we get stuck in appMain.lsc.
* Also we store the running scans in an set so that we can easily kill whatever
* is running on exit - it's possible one scan may not be finished by the time a new scan
* starts, so that's why we keep a record of all the currently running scans instead
* of just the latest one.
*/
function scanForBlueToothDevices() {
  if (!(0, _settings.getSettings)().blueLossEnabled) return scheduleScan();
  _logging.logger.verbose(`=======New Scan Started======= ${(0, _utils.generateLogTimeStamp)()}`);
  spawnHciToolScan();
  scheduleScan();
}function spawnHciToolScan() {
  const scan = (0, _child_process.spawn)('hcitool', ['scan']);
  spawnedScans.add(scan);

  scan.stdout.on('data', _handleScanResults.handleScanResults);
  scan.on('error', function (err) {
    _logging.logger.verbose(err);
    spawnedScans.delete(scan);
  });
  scan.on('close', function () {
    return spawnedScans.delete(scan);
  });
}function scheduleScan() {
  return setTimeout(scanForBlueToothDevices, _timeproxy2.default`${(0, _settings.getSettings)().scanInterval} seconds`);
}(0, _signalExit2.default)(() => {
  for (const scan of spawnedScans) scan.kill();
});

exports.scanForBlueToothDevices = scanForBlueToothDevices;

/***/ }),

/***/ "./app/components/bluetooth/handleScanResults.lsc":
/*!********************************************************!*\
  !*** ./app/components/bluetooth/handleScanResults.lsc ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleScanResults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isEmpty = __webpack_require__(/*! is-empty */ "is-empty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _server = __webpack_require__(/*! ../server/server.lsc */ "./app/components/server/server.lsc");

var _devices = __webpack_require__(/*! ../settings/devices.lsc */ "./app/components/settings/devices.lsc");

var _lockCheck = __webpack_require__(/*! ./lockCheck.lsc */ "./app/components/bluetooth/lockCheck.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*****
* We check for blueLossEnabled before calling updateDevicesToSearchFor because if
* they disable blueloss and a scan hasn't finished, when it does finish it will
* update the devices lastSeen in devicesToSearchFor with Date.now() which is not
* what we want. As you can see in settingsObservers.lsc, we need to update the
* devices lastSeen with tenYearsFromNow(). More comments in settingsObservers.lsc.
*/
function handleScanResults(scanResult) {
  const deviceList = getDeviceDataFromScanResult(scanResult);
  _logging.logger.verbose(`Found these Bluetooth devices in scan: `, { deviceList });

  const { devicesToSearchFor, blueLossEnabled } = (0, _settings.getSettings)();
  const timeStampedDeviceList = addTimeStampToSeenDevices(deviceList);

  (0, _server.pushUpdatesToFrontEnd)('devicesCanSee', timeStampedDeviceList);

  if ((0, _isEmpty2.default)(devicesToSearchFor) || !blueLossEnabled) return;
  updateDevicesToSearchFor(devicesToSearchFor, deviceList);
  (0, _lockCheck.lockSystemIfDeviceLost)();
} /**
  * If any devices we are looking for showed up in the latest scan,
  * update the device's lastSeen value to now in devicesToSearchFor.
  */
function updateDevicesToSearchFor(devicesToSearchFor, deviceList) {
  for (let _i = 0, _len = deviceList.length; _i < _len; _i++) {
    const { deviceId } = deviceList[_i];
    if (devicesToSearchFor[deviceId]) {
      (0, _devices.updateTimeStampForSingleDeviceSearchingFor)(deviceId, Date.now());
    }
  }
} /*****
  * result will be a buffer which as text looks like:
  * "Scanning ...\tE0:88:61:CF:F3:52\tMotoG3\n\t12:30:D3:CD:32:51\tn/a\n"
  */
function getDeviceDataFromScanResult(scanResult) {
  const results = scanResult == null ? void 0 : scanResult.toString().trim().replace('Scanning ...', '');
  if (!(results == null ? void 0 : results.length)) return [];

  return results.split('\n').reduce(function (resultsArr, nextResult) {
    const splitIDandName = nextResult.trim().split('\t');
    const deviceId = splitIDandName[0].trim();
    const deviceName = splitIDandName[1].trim();
    return [...(resultsArr === void 0 ? [] : resultsArr), { deviceId, deviceName }];
  });
}function addTimeStampToSeenDevices(deviceList) {
  return (() => {
    const _arr = [];for (let _i2 = 0, _len2 = deviceList.length; _i2 < _len2; _i2++) {
      const device = deviceList[_i2];_arr.push(_extends({}, device, { lastSeen: Date.now() }));
    }return _arr;
  })();
}

exports.handleScanResults = handleScanResults;

/***/ }),

/***/ "./app/components/bluetooth/lockCheck.lsc":
/*!************************************************!*\
  !*** ./app/components/bluetooth/lockCheck.lsc ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockSystemIfDeviceLost = undefined;

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _devices = __webpack_require__(/*! ../settings/devices.lsc */ "./app/components/settings/devices.lsc");

var _lockSystem = __webpack_require__(/*! ../lockSystem.lsc */ "./app/components/lockSystem.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* If a device is lost we lock the computer, however, after that, if
* the computer is unlocked without the device coming back, we don't want
* to keep locking the computer because the device is still lost. So we
* give the device that has just been lost a lastSeen value of 10 years
* from now (not using Infinity cause it doesn't JSON.stringify for storage).
*/
function lockSystemIfDeviceLost() {
  const { devicesToSearchFor, timeToLock, blueLossEnabled } = (0, _settings.getSettings)();
  for (let _i = 0, _keys = Object.keys(devicesToSearchFor), _len = _keys.length; _i < _len; _i++) {
    const _k = _keys[_i];const { lastSeen, deviceId } = devicesToSearchFor[_k];
    if (deviceHasBeenLost(lastSeen, timeToLock)) {
      (0, _lockSystem.lockSystem)(blueLossEnabled);
      (0, _devices.updateTimeStampForSingleDeviceSearchingFor)(deviceId, (0, _utils.tenYearsFromNow)());
    }
  }
}function deviceHasBeenLost(lastTimeSawDevice, timeToLock) {
  return Date.now() > lastTimeSawDevice + _timeproxy2.default`${timeToLock} minutes`;
}exports.lockSystemIfDeviceLost = lockSystemIfDeviceLost;

/***/ }),

/***/ "./app/components/enableDisableBlueLoss.lsc":
/*!**************************************************!*\
  !*** ./app/components/enableDisableBlueLoss.lsc ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableDisableBlueLoss = undefined;

var _server = __webpack_require__(/*! ./server/server.lsc */ "./app/components/server/server.lsc");

var _utils = __webpack_require__(/*! ./utils.lsc */ "./app/components/utils.lsc");

var _devices = __webpack_require__(/*! ./settings/devices.lsc */ "./app/components/settings/devices.lsc");

var _settings = __webpack_require__(/*! ./settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _tray = __webpack_require__(/*! ./tray/tray.lsc */ "./app/components/tray/tray.lsc");

var _sendOSnotification = __webpack_require__(/*! ./sendOSnotification.lsc */ "./app/components/sendOSnotification.lsc");

/*****
* We aren't using a gawk observer for blueLossEnabled as we were running in to
* circular issues.
*
* We run `updateTimeStampForAllDevicesSearchingFor(tenYearsFromNow())` when BlueLoss
* is disabled because otherwise if you disabled BlueLoss and devices that you are
* looking for went away and then re-enabled BlueLoss, it would lock straight away.
*
* Also update the frontend when we enable/disable BlueLoss from the systray.
*/
function enableDisableBlueLoss(toggleFromSysTray, blueLossEnabled) {
  (0, _settings.updateSetting)('blueLossEnabled', blueLossEnabled);
  if (toggleFromSysTray) (0, _server.pushUpdatesToFrontEnd)('blueLossEnabled', blueLossEnabled);
  if (!blueLossEnabled) (0, _devices.updateTimeStampForAllDevicesSearchingFor)((0, _utils.tenYearsFromNow)());
  (0, _tray.updateEnabledDisabledMenuItem)();
  (0, _sendOSnotification.sendOSnotification)(generateNotifcationText(blueLossEnabled));
}function generateNotifcationText(blueLossEnabled) {
  if (blueLossEnabled) return 'BlueLoss Enabled';else return 'BlueLoss Disabled';
}exports.enableDisableBlueLoss = enableDisableBlueLoss;

/***/ }),

/***/ "./app/components/lockSystem.lsc":
/*!***************************************!*\
  !*** ./app/components/lockSystem.lsc ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockSystem = undefined;

var _promiseRatRace = __webpack_require__(/*! promise-rat-race */ "promise-rat-race");

var _promiseRatRace2 = _interopRequireDefault(_promiseRatRace);

var _logging = __webpack_require__(/*! ./logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _utils = __webpack_require__(/*! ./utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lockCommandArgs = {
  'xdg-screensaver': 'lock',
  'gnome-screensaver-command': '--lock',
  'cinnamon-screensaver-command': '--lock',
  'dm-tool': 'lock'

  /*****
  * Based on: https://github.com/sindresorhus/lock-system/blob/master/index.js
  * The spawned xdg-screensaved command always seems to error for me even though
  * the command actually succeeds, so only log the error when verbose logging is enabled.
  * Note: we need to use exec (pExec) to run 'command -v ...' as that is a
  * shell-specific command.
  */
};function lockSystem(blueLossEnabled) {
  if (!blueLossEnabled) return;
  (0, _promiseRatRace2.default)([(0, _utils.pExec)('command -v xdg-screensaver'), (0, _utils.pExec)('command -v gnome-screensaver-command'), (0, _utils.pExec)('command -v cinnamon-screensaver-command'), (0, _utils.pExec)('command -v dm-tool')]).then(_utils.getExecNameFromStdOut).then(function (lockCommand) {
    return (0, _utils.pExecFile)(lockCommand, [lockCommandArgs[lockCommand]]);
  }).catch(_logging.logger.verbose);
}exports.lockSystem = lockSystem;

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
exports.rollbarLogger = exports.CustomRollbarTransport = exports.createRollbarLogger = undefined;

var _util = __webpack_require__(/*! util */ "util");

var _util2 = _interopRequireDefault(_util);

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _rollbar = __webpack_require__(/*! rollbar */ "rollbar");

var _rollbar2 = _interopRequireDefault(_rollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let rollbarLogger = null;

function createRollbarLogger() {
  exports.rollbarLogger = rollbarLogger = new _rollbar2.default({
    accessToken: process.env.rollbarAccessToken,
    enabled: false,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: "development",
    reportLevel: 'error',
    payload: {
      platform: process.platform,
      BlueLossVersion: __webpack_require__(/*! ../../../package.json */ "./package.json").version
    },
    // Ignore the server stuff cause that includes info about the host pc name.
    transform(payload) {
      return payload.server = {};
    }
  });
}const CustomRollbarTransport = _winston2.default.transports.CustomLogger = function (options) {
  Object.assign(this, options);
};_util2.default.inherits(CustomRollbarTransport, _winston2.default.Transport);

CustomRollbarTransport.prototype.log = function (level, msg = '', error, callback) {
  // Only log errors.
  if (level !== 'error') return;
  rollbarLogger.error(msg, error);
  callback(null, true);
};exports.createRollbarLogger = createRollbarLogger;
exports.CustomRollbarTransport = CustomRollbarTransport;
exports.rollbarLogger = rollbarLogger;

/***/ }),

/***/ "./app/components/logging/logSettingsUpdates.lsc":
/*!*******************************************************!*\
  !*** ./app/components/logging/logSettingsUpdates.lsc ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logSettingsUpdateForVerboseLogging = undefined;

var _typa = __webpack_require__(/*! typa */ "typa");

var _typa2 = _interopRequireDefault(_typa);

var _logging = __webpack_require__(/*! ./logging.lsc */ "./app/components/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logSettingsUpdateForVerboseLogging(newSettingKey, newSettingValue) {
  /*****
  * Check if the logger is instantiated first as logSettingsUpdateForVerboseLogging gets
  * called early on startup.
  */
  if (!_logging.logger) return;
  const debugMessage = `Updated Setting: updated '${newSettingKey}' with:`;
  if (_typa2.default.obj(newSettingValue)) {
    _logging.logger.verbose(debugMessage, { [newSettingKey]: newSettingValue });
  } else {
    _logging.logger.verbose(`${debugMessage} ${newSettingValue}`);
  }
}exports.logSettingsUpdateForVerboseLogging = logSettingsUpdateForVerboseLogging;

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
exports.initLogging = exports.changeLogLevel = exports.removeRollbarLogging = exports.addRollbarLogging = exports.logger = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _winston = __webpack_require__(/*! winston */ "winston");

var _winston2 = _interopRequireDefault(_winston);

var _customRollbarTransport = __webpack_require__(/*! ./customRollbarTransport.lsc */ "./app/components/logging/customRollbarTransport.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _createBlueLossConfig = __webpack_require__(/*! ../bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let logger = null;
const rollbarTransportOptions = {
  name: 'rollbarTransport',
  level: 'error',
  handleExceptions: true,
  humanReadableUnhandledException: true
};
const fiveHundredKilobytes = 500000;
const fileTransportOptions = {
  maxsize: fiveHundredKilobytes,
  maxFiles: 6,
  prettyPrint: true,
  depth: 10
};

function initLogging() {
  /*****
  * Note: we're using the old Winston 2.4 branch: https://github.com/winstonjs/winston/tree/2.4.0
  */
  exports.logger = logger = new _winston2.default.Logger({
    level: initialLogLevel(),
    exitOnError: false
  });

  logger.add(_winston2.default.transports.File, _extends({}, fileTransportOptions, {
    filename: _path2.default.join((0, _createBlueLossConfig.getBlueLossLogsFolderPath)(), 'BlueLoss.log.txt')
  }));

  if (true) {
    logger.add(_winston2.default.transports.Console, {
      handleExceptions: true,
      humanReadableUnhandledException: true
    });
  }(0, _customRollbarTransport.createRollbarLogger)();
  /*****
  * We dont send errors to rollbar in dev and also only if enabled.
  */
  if (false) {}
}function addRollbarLogging() {
  /**
  * We also need to enable/disable the rollbar module itself as well,
  * as it is set to report uncaught exceptions as well as logging
  * caught errors.
  */
  _customRollbarTransport.rollbarLogger.configure({ enabled: true });
  logger.add(_customRollbarTransport.CustomRollbarTransport, rollbarTransportOptions);
}function removeRollbarLogging() {
  _customRollbarTransport.rollbarLogger.configure({ enabled: false });
  logger.remove('rollbarTransport');
}function initialLogLevel() {
  if (true) return 'verbose';else {}
}function changeLogLevel(level) {
  logger.level = level;
}exports.logger = logger;
exports.addRollbarLogging = addRollbarLogging;
exports.removeRollbarLogging = removeRollbarLogging;
exports.changeLogLevel = changeLogLevel;
exports.initLogging = initLogging;

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

var _signalExit = __webpack_require__(/*! signal-exit */ "signal-exit");

var _signalExit2 = _interopRequireDefault(_signalExit);

var _createBlueLossConfig = __webpack_require__(/*! ./bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let weCreatedLockFile = false;
const anotherInstanceErrorMessage = 'BlueLoss is already running (BlueLoss.lock file already exists), exiting...';

async function makeSingleInstance() {
  if (true) return Promise.resolve();
  const exists = await _fsExtra2.default.pathExists(getLockFilePath());
  if (exists) {
    console.error(new Error(anotherInstanceErrorMessage));
    return process.exit(1);
  }weCreatedLockFile = true;
  return _fsExtra2.default.ensureFile(getLockFilePath());
}(0, _signalExit2.default)(() => {
  if (weCreatedLockFile) {
    try {
      return _fsExtra2.default.removeSync(getLockFilePath());
    } catch (e) {
      return;
    }
  }
});

function getLockFilePath() {
  return _path2.default.join((0, _createBlueLossConfig.getBlueLossConfigFolderPath)(), 'BlueLoss.lock');
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
  if (firstRun && true) return Promise.resolve();
  return _fsExtra2.default.outputFile(bluelossDesktopFilePath, generateDesktopFile()).catch(_logging.logger.error);
}function disableRunOnStartup() {
  return _fsExtra2.default.remove(bluelossDesktopFilePath).catch(_logging.logger.error);
} /*****
  * https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-1.0.html
  * "Version" is the Free Desktop spec version.
  */
function generateDesktopFile() {
  return `
[Desktop Entry]
Type=Application
Version=1.0
Name=BlueLoss
Exec=${process.execPath}
Icon=${_path2.default.join(process.cwd(), 'BlueLoss.png')}
StartupNotify=false
Terminal=false
Categories=Utility;
`.trim();
}exports.enableRunOnStartup = enableRunOnStartup;
exports.disableRunOnStartup = disableRunOnStartup;

/***/ }),

/***/ "./app/components/sendOSnotification.lsc":
/*!***********************************************!*\
  !*** ./app/components/sendOSnotification.lsc ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendOSnotification = undefined;

var _utils = __webpack_require__(/*! ./utils.lsc */ "./app/components/utils.lsc");

function sendOSnotification(message) {
  (0, _utils.pExecFile)('notify-send', [message]).catch(_utils.noop);
}exports.sendOSnotification = sendOSnotification;

/***/ }),

/***/ "./app/components/server/server.lsc":
/*!******************************************!*\
  !*** ./app/components/server/server.lsc ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushUpdatesToFrontEnd = exports.getServerAddress = exports.startServer = undefined;

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ssePusher = __webpack_require__(/*! sse-pusher */ "sse-pusher");

var _ssePusher2 = _interopRequireDefault(_ssePusher);

var _lodash = __webpack_require__(/*! lodash.omit */ "lodash.omit");

var _lodash2 = _interopRequireDefault(_lodash);

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _validation = __webpack_require__(/*! ./validation.lsc */ "./app/components/server/validation.lsc");

var _enableDisableBlueLoss = __webpack_require__(/*! ../enableDisableBlueLoss.lsc */ "./app/components/enableDisableBlueLoss.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let serverAddress = null;
const frontEndDirPath = _path2.default.resolve(__dirname, '..', 'app', 'components', 'settingsWindow', 'frontEnd');
const assetsPath = _path2.default.join(frontEndDirPath, 'assets');
const jsPath = _path2.default.join(frontEndDirPath, 'js');
const settingsPagePath = _path2.default.join(frontEndDirPath, 'html', 'settingsWindow.html');
const blueLossToggledFromTray = false;

const push = (0, _ssePusher2.default)();
const expressApp = (0, _express2.default)();

expressApp.use('/assets', _express2.default.static(assetsPath));
expressApp.use('/js', _express2.default.static(jsPath));
expressApp.use(_bodyParser2.default.json());
expressApp.get('/', function (req, res) {
  res.cookie('bluelossSettings', generateServerSettingsCookie());
  return res.sendFile(settingsPagePath);
});
expressApp.post('/updatesettings', _validation.validateGeneralUpdatePost, updateSettingsPostHandler);
/*****
* Check comments in enableDisableBlueLoss.lsc for why we need a seperate api path for
* updates to blueLossEnabled.
*/
expressApp.post('/blueloss-enabled-disabled-from-frontend', _validation.validateEnableDisableUpdatePost, blueLossEnableDisableUpdatePostHandler);
expressApp.use('/sse-update', push.handler());

/*****
* If port is 0, the operating system will assign an arbitrary unused port.
*/
function startServer() {
  return new Promise(resolve => {
    const listener = expressApp.listen(0, () => {
      storeServerAddress(listener.address());
      return resolve();
    });
    return listener;
  });
} /*****
  * The frontend only updates (sends back) one setting at a time.
  * Object.entries returns an array of arrays of key/value pairs for an object.
  */
function updateSettingsPostHandler(req, res) {
  const [[settingName, newSettingValue]] = Object.entries(req.body);
  (0, _settings.updateSetting)(settingName, newSettingValue);
  return res.end();
}function blueLossEnableDisableUpdatePostHandler(req, res) {
  const [[, blueLossEnabled]] = Object.entries(req.body);
  (0, _enableDisableBlueLoss.enableDisableBlueLoss)(blueLossToggledFromTray, blueLossEnabled);
  return res.end();
}function storeServerAddress({ family, address, port }) {
  const ip = family.toLowerCase() === 'ipv6' ? `[${address}]` : address;
  serverAddress = `http://${ip}:${port}`;
  _logging.logger.verbose('serverAddress: ', serverAddress);
}function getServerAddress() {
  return serverAddress;
}function pushUpdatesToFrontEnd(settingName, settingValue) {
  push('settingsUpdate', { [settingName]: settingValue });
}function generateServerSettingsCookie() {
  return JSON.stringify((0, _lodash2.default)((0, _settings.getSettings)(), ['trayIconColor', 'firstRun']));
}exports.startServer = startServer;
exports.getServerAddress = getServerAddress;
exports.pushUpdatesToFrontEnd = pushUpdatesToFrontEnd;

/***/ }),

/***/ "./app/components/server/validation.lsc":
/*!**********************************************!*\
  !*** ./app/components/server/validation.lsc ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEnableDisableUpdatePost = exports.validateGeneralUpdatePost = undefined;

var _joi = __webpack_require__(/*! joi */ "joi");

var _joi2 = _interopRequireDefault(_joi);

var _settingsDefaults = __webpack_require__(/*! ../settings/settingsDefaults.lsc */ "./app/components/settings/settingsDefaults.lsc");

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generalUpdatePostBodyValidationSchema = _joi2.default.object().keys({
  blueLossEnabled: _joi2.default.boolean(),
  runOnStartup: _joi2.default.boolean(),
  devicesToSearchFor: _joi2.default.object(),
  timeToLock: _joi2.default.number().integer().min(_settingsDefaults.defaultSettings.timeToLock),
  scanInterval: _joi2.default.number().integer().min(_settingsDefaults.defaultSettings.scanInterval),
  reportErrors: _joi2.default.boolean(),
  verboseLogging: _joi2.default.boolean()
});

const blueLossEnabledDisabledPostBodyValidationSchema = _joi2.default.object().keys({
  blueLossEnabled: _joi2.default.boolean()
});

function validateGeneralUpdatePost(req, res, next) {
  return validate(req, res, next, generalUpdatePostBodyValidationSchema);
}function validateEnableDisableUpdatePost(req, res, next) {
  return validate(req, res, next, blueLossEnabledDisabledPostBodyValidationSchema);
}function validate(req, res, next, schema) {
  var _Joi$validate;

  const validationError = (_Joi$validate = _joi2.default.validate(req == null ? void 0 : req.body, schema)) == null ? void 0 : _Joi$validate.error;
  if (validationError) {
    _logging.logger.error(validationError);
    return res.status(400).end();
  }return next();
}exports.validateGeneralUpdatePost = validateGeneralUpdatePost;
exports.validateEnableDisableUpdatePost = validateEnableDisableUpdatePost;

/***/ }),

/***/ "./app/components/settings/devices.lsc":
/*!*********************************************!*\
  !*** ./app/components/settings/devices.lsc ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTimeStampForAllDevicesSearchingFor = exports.updateTimeStampForSingleDeviceSearchingFor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _settings = __webpack_require__(/*! ./settings.lsc */ "./app/components/settings/settings.lsc");

function updateTimeStampForSingleDeviceSearchingFor(deviceId, newTimeStamp) {
  const { devicesToSearchFor } = (0, _settings.getSettings)();
  const deviceToUpdate = devicesToSearchFor[deviceId];
  return (0, _settings.updateSetting)('devicesToSearchFor', _extends({}, devicesToSearchFor, { [deviceId]: _extends({}, deviceToUpdate, { lastSeen: newTimeStamp }) }));
}function updateTimeStampForAllDevicesSearchingFor(newTimeStamp) {
  (0, _settings.updateSetting)('devicesToSearchFor', (() => {
    const _obj = {};
    for (let _obj2 = (0, _settings.getSettings)().devicesToSearchFor, _i = 0, _keys = Object.keys(_obj2), _len = _keys.length; _i < _len; _i++) {
      const deviceId = _keys[_i];const device = _obj2[deviceId];
      _obj[deviceId] = _extends({}, device, { lastSeen: newTimeStamp });
    }return _obj;
  })());
}exports.updateTimeStampForSingleDeviceSearchingFor = updateTimeStampForSingleDeviceSearchingFor;
exports.updateTimeStampForAllDevicesSearchingFor = updateTimeStampForAllDevicesSearchingFor;

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
exports.getSettings = exports.updateSetting = exports.initSettings = undefined;

var _lowdb = __webpack_require__(/*! lowdb */ "lowdb");

var _lowdb2 = _interopRequireDefault(_lowdb);

var _FileSync = __webpack_require__(/*! lowdb/adapters/FileSync */ "lowdb/adapters/FileSync");

var _FileSync2 = _interopRequireDefault(_FileSync);

var _gawk = __webpack_require__(/*! gawk */ "gawk");

var _gawk2 = _interopRequireDefault(_gawk);

var _settingsDefaults = __webpack_require__(/*! ./settingsDefaults.lsc */ "./app/components/settings/settingsDefaults.lsc");

var _settingsObservers = __webpack_require__(/*! ./settingsObservers.lsc */ "./app/components/settings/settingsObservers.lsc");

var _createBlueLossConfig = __webpack_require__(/*! ../bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

var _logSettingsUpdates = __webpack_require__(/*! ../logging/logSettingsUpdates.lsc */ "./app/components/logging/logSettingsUpdates.lsc");

var _devices = __webpack_require__(/*! ./devices.lsc */ "./app/components/settings/devices.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let db = null;
let settings = null;

function initSettings() {
  return new Promise(function (resolve) {
    db = (0, _lowdb2.default)(new _FileSync2.default((0, _createBlueLossConfig.getBlueLossSettingsFilePath)()));
    db.defaults(_settingsDefaults.defaultSettings).write();
    settings = (0, _gawk2.default)(db.getState());
    (0, _settingsObservers.initSettingsObservers)(settings);
    /**
    * When a user starts up BlueLoss after previously exiting, the
    * lastSeen value will be out of date for the devices in
    * devicesToSearchFor. This would cause BlueLoss to lock the
    * system straight away because the lastSeen value + timeToLock
    *  will be less than Date.now(). So to prevent this, we give all
    * devices in devicesToSearchFor a lastSeen of 10 years from now.
    * (when a device is seen again during a scan, lastSeen is updated.)
    */
    (0, _devices.updateTimeStampForAllDevicesSearchingFor)((0, _utils.tenYearsFromNow)());
    return resolve();
  });
}function getSettings() {
  return settings;
}function updateSetting(newSettingKey, newSettingValue) {
  settings[newSettingKey] = newSettingValue;
  db.set(newSettingKey, newSettingValue).write();
  (0, _logSettingsUpdates.logSettingsUpdateForVerboseLogging)(newSettingKey, newSettingValue);
}exports.initSettings = initSettings;
exports.updateSetting = updateSetting;
exports.getSettings = getSettings;

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
  timeToLock: 2,
  reportErrors: true,
  firstRun: true,
  scanInterval: 30,
  verboseLogging: false
};

exports.defaultSettings = defaultSettings;

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
exports.initSettingsObservers = undefined;

var _gawk = __webpack_require__(/*! gawk */ "gawk");

var _gawk2 = _interopRequireDefault(_gawk);

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _runOnStartup = __webpack_require__(/*! ../runOnStartup.lsc */ "./app/components/runOnStartup.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initSettingsObservers(settings) {
  _gawk2.default.watch(settings, ['reportErrors'], function (enabled) {
    if (enabled) (0, _logging.addRollbarLogging)();else (0, _logging.removeRollbarLogging)();
  });
  _gawk2.default.watch(settings, ['runOnStartup'], function (enabled) {
    if (enabled) (0, _runOnStartup.enableRunOnStartup)().catch(_utils.noop);else (0, _runOnStartup.disableRunOnStartup)().catch(_utils.noop);
  });
  _gawk2.default.watch(settings, ['verboseLogging'], function (enabled) {
    (0, _logging.changeLogLevel)(enabled ? 'verbose' : 'error');
  });
}exports.initSettingsObservers = initSettingsObservers;

/***/ }),

/***/ "./app/components/settingsWindow/settingsWindow.lsc":
/*!**********************************************************!*\
  !*** ./app/components/settingsWindow/settingsWindow.lsc ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openSettingsWindow = undefined;

var _child_process = __webpack_require__(/*! child_process */ "child_process");

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _promiseRatRace = __webpack_require__(/*! promise-rat-race */ "promise-rat-race");

var _promiseRatRace2 = _interopRequireDefault(_promiseRatRace);

var _signalExit = __webpack_require__(/*! signal-exit */ "signal-exit");

var _signalExit2 = _interopRequireDefault(_signalExit);

var _server = __webpack_require__(/*! ../server/server.lsc */ "./app/components/server/server.lsc");

var _createBlueLossConfig = __webpack_require__(/*! ../bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let spawnedSettingsWindow = null;

/*****
* We don't want to return a Promise here because openSettingsWindowInPreferredBrowser will not
* resolve until the settings window is closed.
* Note: we need to use exec (pExec) to run 'command -v ...' as that is a shell-specific command.
*/
function openSettingsWindow() {
  /*****
  * We kill settings window if it's already open so there isn't more than one settings window open
  * at once. This is slightly inefficiant, but wmctrl wasn't installed by default on my machine, so
  * gonna do it this way.
  */
  killSpawnedSettingsWindow();

  (0, _promiseRatRace2.default)([(0, _utils.pExec)('command -v firefox'), (0, _utils.pExec)('command -v chromium-browser'), (0, _utils.pExec)('command -v google-chrome')]).then(_utils.getExecNameFromStdOut).then(openSettingsWindowInPreferredBrowser).catch(_utils.xdgOpenServerWebPage);
} //fall back to opening with OS's default browser

function openSettingsWindowInPreferredBrowser(browser) {
  return new Promise(function (resolve, reject) {
    spawnedSettingsWindow = (0, _child_process.execFile)(browser, generateBrowserParams(browser), function (error) {
      if (error) return reject(error);
      return resolve();
    });
  });
}function generateBrowserParams(browser) {
  if (browser === 'firefox') {
    return ['-new-instance', '--width=910', '--height=760', '-profile', getBrowserProfilePath('firefox'), (0, _server.getServerAddress)()];
  }return [`--app=${(0, _server.getServerAddress)()}`, `--user-data-dir=${getBrowserProfilePath('chromium')}`];
}function getBrowserProfilePath(browserType) {
  return _path2.default.join((0, _createBlueLossConfig.getBlueLossConfigFolderPath)(), 'BrowserProfiles', browserType);
}function killSpawnedSettingsWindow() {
  spawnedSettingsWindow == null ? void 0 : spawnedSettingsWindow.kill();
  spawnedSettingsWindow = null;
} /*****
  * Kill settings window on app exit.
  */
(0, _signalExit2.default)(killSpawnedSettingsWindow);

exports.openSettingsWindow = openSettingsWindow;

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
exports.updateEnabledDisabledMenuItem = exports.initTrayMenu = undefined;

var _systray = __webpack_require__(/*! systray */ "systray");

var _systray2 = _interopRequireDefault(_systray);

var _settings = __webpack_require__(/*! ../settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _iconsData = __webpack_require__(/*! ./iconsData.lsc */ "./app/components/tray/iconsData.lsc");

var _utils = __webpack_require__(/*! ../utils.lsc */ "./app/components/utils.lsc");

var _logging = __webpack_require__(/*! ../logging/logging.lsc */ "./app/components/logging/logging.lsc");

var _settingsWindow = __webpack_require__(/*! ../settingsWindow/settingsWindow.lsc */ "./app/components/settingsWindow/settingsWindow.lsc");

var _enableDisableBlueLoss = __webpack_require__(/*! ../enableDisableBlueLoss.lsc */ "./app/components/enableDisableBlueLoss.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let systray = null;
const blueLossToggledFromTray = true;
const disableEnableBlueLossMenuActionItemNumber = 1;

function initTrayMenu() {
  return new Promise(function (resolve) {
    systray = new _systray2.default({
      menu: {
        icon: _iconsData.base64IconData[(0, _settings.getSettings)().trayIconColor],
        tooltip: "BlueLoss",
        items: generateMenuItems()
      },
      debug: false,
      copyDir: true // copy go tray binary to outside directory, useful for packing tool like pkg.
    });
    systray.onClick(systrayClickHandler);
    systray.onReady(resolve);
  });
} /*****
  * seq_id:
  * 0 - Open settings window
  * 1 - Enable/Disable BlueLoss
  * 2 - Toggle system tray icon color
  * 3 - Open logs folder
  * 4 - Exit BlueLoss
  */
function systrayClickHandler(action) {
  if (action.seq_id === 0) {
    (0, _settingsWindow.openSettingsWindow)();
  }if (action.seq_id === 1) {
    (0, _enableDisableBlueLoss.enableDisableBlueLoss)(blueLossToggledFromTray, !(0, _settings.getSettings)().blueLossEnabled);
  }if (action.seq_id === 2) {
    toggleTrayIconColorSetting();
    updateSystrayIcon(action);
  }if (action.seq_id === 3) {
    (0, _utils.xdgOpenLogsFolder)().catch(_logging.logger.error);
  }if (action.seq_id === 4) {
    systray.kill();
  }
}function updateEnabledDisabledMenuItem() {
  systray.sendAction({
    type: 'update-item',
    item: {
      checked: false,
      enabled: true,
      title: generateEnabledDisabledLabel(),
      tooltip: generateEnabledDisabledLabel()
    },
    seq_id: disableEnableBlueLossMenuActionItemNumber
  });
}function updateSystrayIcon(action) {
  systray.sendAction({
    type: 'update-menu',
    menu: {
      icon: _iconsData.base64IconData[(0, _settings.getSettings)().trayIconColor],
      tooltip: "BlueLoss",
      items: generateMenuItems()
    },
    seq_id: action.seq_id
  });
}function generateMenuItems() {
  return [{
    title: "Open BlueLoss Settings",
    tooltip: "Open BlueLoss Settings",
    enabled: true
  }, {
    title: generateEnabledDisabledLabel(),
    tooltip: generateEnabledDisabledLabel(),
    enabled: true
  }, {
    title: "Toggle Tray Icon Color",
    tooltip: "Toggle Tray Icon Color",
    enabled: true
  }, {
    title: "Open Logs",
    tooltip: "Open Logs",
    enabled: true
  }, {
    title: "Quit BlueLoss",
    tooltip: "Quit BlueLoss",
    enabled: true
  }];
}function toggleTrayIconColorSetting() {
  const newColor = (0, _settings.getSettings)().trayIconColor === 'white' ? 'blue' : 'white';
  (0, _settings.updateSetting)('trayIconColor', newColor);
}function generateEnabledDisabledLabel() {
  return `${(0, _settings.getSettings)().blueLossEnabled ? 'Disable' : 'Enable'} BlueLoss`;
}exports.initTrayMenu = initTrayMenu;
exports.updateEnabledDisabledMenuItem = updateEnabledDisabledMenuItem;

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
exports.generateLogTimeStamp = exports.bailOnFatalError = exports.xdgOpenLogsFolder = exports.xdgOpenServerWebPage = exports.getExecNameFromStdOut = exports.tenYearsFromNow = exports.identity = exports.noop = exports.setUpDev = exports.pExec = exports.pExecFile = undefined;

var _util = __webpack_require__(/*! util */ "util");

var _child_process = __webpack_require__(/*! child_process */ "child_process");

var _timeproxy = __webpack_require__(/*! timeproxy */ "timeproxy");

var _timeproxy2 = _interopRequireDefault(_timeproxy);

var _settingsWindow = __webpack_require__(/*! ../components/settingsWindow/settingsWindow.lsc */ "./app/components/settingsWindow/settingsWindow.lsc");

var _settings = __webpack_require__(/*! ./settings/settings.lsc */ "./app/components/settings/settings.lsc");

var _createBlueLossConfig = __webpack_require__(/*! ./bluelossConfig/createBlueLossConfig.lsc */ "./app/components/bluelossConfig/createBlueLossConfig.lsc");

var _server = __webpack_require__(/*! ./server/server.lsc */ "./app/components/server/server.lsc");

var _logging = __webpack_require__(/*! ./logging/logging.lsc */ "./app/components/logging/logging.lsc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pExecFile = (0, _util.promisify)(_child_process.execFile);
const pExec = (0, _util.promisify)(_child_process.exec);

function setUpDev() {
  true && !(0, _settings.getSettings)().firstRun ? (0, _settingsWindow.openSettingsWindow)() : void 0;
}function noop() {
  return;
}function identity(param) {
  return param;
}function tenYearsFromNow() {
  return Date.now() + _timeproxy2.default.FIVE_HUNDRED_WEEKS;
}function getExecNameFromStdOut({ stdout }) {
  const execName = stdout.trim();
  return execName.slice(execName.lastIndexOf('/') + 1);
}function xdgOpenServerWebPage() {
  return pExecFile(`xdg-open`, [(0, _server.getServerAddress)()]);
}function xdgOpenLogsFolder() {
  return pExecFile(`xdg-open`, [(0, _createBlueLossConfig.getBlueLossLogsFolderPath)()]);
}function bailOnFatalError(err) {
  console.error(err);
  _logging.logger == null ? void 0 : typeof _logging.logger.error !== 'function' ? void 0 : _logging.logger.error(err);
  process.exit(1);
}function generateLogTimeStamp() {
  const today = new Date();
  return `[${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}]`;
}exports.pExecFile = pExecFile;
exports.pExec = pExec;
exports.setUpDev = setUpDev;
exports.noop = noop;
exports.identity = identity;
exports.tenYearsFromNow = tenYearsFromNow;
exports.getExecNameFromStdOut = getExecNameFromStdOut;
exports.xdgOpenServerWebPage = xdgOpenServerWebPage;
exports.xdgOpenLogsFolder = xdgOpenLogsFolder;
exports.bailOnFatalError = bailOnFatalError;
exports.generateLogTimeStamp = generateLogTimeStamp;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, productName, version, description, main, scripts, pkg, repository, author, license, dependencies, devDependencies, snyk, default */
/***/ (function(module) {

module.exports = {"name":"blueloss","productName":"BlueLoss","version":"0.0.1","description":"A desktop app that locks your computer when a device is lost","main":"app/appMain-compiled.js","scripts":{"ww":"cross-env NODE_ENV=development parallel-webpack --watch --max-retries=1 --no-stats","startDev":"cross-env NODE_ENV=development nodemon app/appMain-compiled.js","debug":"cross-env NODE_ENV=development parallel-webpack && node --inspect app/appMain-compiled.js","lintWatch":"cross-env NODE_ENV=development esw -w --ext .lsc -c .eslintrc.json --color --clear","start":"cross-env NODE_ENV=production node app/appMain-compiled.js","devTasks":"cross-env NODE_ENV=production node devTasks/tasks.js","test":"snyk test"},"pkg":{"assets":["config/.env","app/components/settingsWindow/frontEnd/js/settingsWindowWeb-compiled.js","app/components/settingsWindow/frontEnd/assets/styles/*.css","app/components/settingsWindow/frontEnd/assets/vendor/materialize/materialize.css","app/components/settingsWindow/frontEnd/assets/vendor/modern-normalize/modern-normalize.css","app/components/settingsWindow/frontEnd/assets/icons/*","app/components/settingsWindow/frontEnd/html/settingsWindow.html","node_modules/systray/traybin/tray_linux_release"]},"repository":"https://github.com/Darkle/BlueLoss.git","author":"Darkle <coop.coding@gmail.com>","license":"MIT","dependencies":{"@hyperapp/logger":"^0.5.0","body-parser":"^1.18.3","dotenv":"^6.0.0","express":"^4.16.3","fs-extra":"^6.0.1","gawk":"^4.4.5","hyperapp":"^1.2.5","is-empty":"^1.2.0","joi":"^13.4.0","js-cookie":"^2.2.0","lodash.omit":"^4.5.0","lowdb":"^1.0.0","promise-rat-race":"^1.5.1","rollbar":"^2.4.1","signal-exit":"^3.0.2","sse-pusher":"^1.1.1","systray":"^1.0.5","timeproxy":"^1.2.1","typa":"^0.1.18","untildify":"^3.0.3","winston":"^2.4.3"},"devDependencies":{"@oigroup/babel-preset-lightscript":"^3.1.1","@oigroup/lightscript-eslint":"^3.1.1","babel-core":"^6.26.0","babel-eslint":"^8.2.3","babel-loader":"^7.1.4","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-react-jsx":"^6.24.1","babel-register":"^6.26.0","chalk":"^2.4.1","cross-env":"^5.1.6","del":"^3.0.0","eslint":"=4.8.0","eslint-plugin-jsx":"0.0.2","eslint-plugin-react":"^7.8.2","eslint-watch":"^3.1.5","exeq":"^3.0.0","inquirer":"^6.0.0","node-7z":"^0.4.0","nodemon":"^1.17.5","parallel-webpack":"^2.3.0","pkg":"^4.3.3","snyk":"^1.82.0","string-replace-webpack-plugin":"^0.1.3","webpack":"^4.10.2","webpack-node-externals":"^1.7.2"},"snyk":true};

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

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

/***/ "is-empty":
/*!***************************!*\
  !*** external "is-empty" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-empty");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

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

/***/ "promise-rat-race":
/*!***********************************!*\
  !*** external "promise-rat-race" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("promise-rat-race");

/***/ }),

/***/ "rollbar":
/*!**************************!*\
  !*** external "rollbar" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rollbar");

/***/ }),

/***/ "signal-exit":
/*!******************************!*\
  !*** external "signal-exit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("signal-exit");

/***/ }),

/***/ "sse-pusher":
/*!*****************************!*\
  !*** external "sse-pusher" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sse-pusher");

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
//# sourceMappingURL=appMain-compiled.js.map