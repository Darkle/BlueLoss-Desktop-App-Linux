!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=47)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initLogging=t.changeLogLevel=t.removeRollbarLogging=t.addRollbarLogging=t.logger=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=l(n(3)),i=l(n(15)),s=n(38),u=n(1),a=n(6);function l(e){return e&&e.__esModule?e:{default:e}}let c=null;const d={name:"rollbarTransport",level:"error",handleExceptions:!0,humanReadableUnhandledException:!0},g={maxsize:5e5,maxFiles:6,prettyPrint:!0,depth:10};function f(){s.rollbarLogger.configure({enabled:!0}),c.add(s.CustomRollbarTransport,d)}t.logger=c,t.addRollbarLogging=f,t.removeRollbarLogging=function(){s.rollbarLogger.configure({enabled:!1}),c.remove("rollbarTransport")},t.changeLogLevel=function(e){c.level=e},t.initLogging=function(){t.logger=c=new i.default.Logger({level:(0,u.getSettings)().verboseLogging?"verbose":"error",exitOnError:!1}),c.add(i.default.transports.File,o({},g,{filename:r.default.join((0,a.getBlueLossLogsFolderPath)(),"BlueLoss.log.txt")})),(0,u.getSettings)().reportErrors&&f()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSettings=t.updateSetting=t.initSettings=void 0;var o=d(n(41)),r=d(n(40)),i=d(n(17)),s=n(16),u=n(39),a=n(6),l=n(28),c=n(9);n(8);function d(e){return e&&e.__esModule?e:{default:e}}let g=null,f=null;t.initSettings=function(){return(g=(0,o.default)(new r.default((0,a.getBlueLossSettingsFilePath)()))).defaults(s.defaultSettings).write(),f=(0,i.default)(g.getState()),(0,u.initSettingsObservers)(f),(0,c.updateLastSeenForDevicesLookingForOnStartup)()},t.updateSetting=function(e,t){f[e]=t,g.set(e,t).write(),(0,l.logSettingsUpdateForVerboseLogging)(e,t)},t.getSettings=function(){return f}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.xdgOpenLogsFolder=t.xdgOpenServerWebPage=t.getExecNameFromStdOut=t.capitalizeFirstLetter=t.tenYearsFromNow=t.identity=t.compose=t.range=t.curryRight=t.curry=t.pipe=t.noop=t.setUpDev=void 0;var o,r=n(4),i=n(5),s=n(12),u=(o=s)&&o.__esModule?o:{default:o},a=(n(11),n(1),n(6)),l=n(7);const c=(0,r.promisify)(i.exec);t.setUpDev=function(){},t.noop=function(){},t.pipe=function(...e){return function(t){return e.reduce(function(e,t){return t(e)},t)}},t.curry=function(e){return function(...t){return function(...n){return e(...void 0===t?[]:t,...void 0===n?[]:n)}}},t.curryRight=function(e){return function(...t){return function(...n){return e(...void 0===n?[]:n,...void 0===t?[]:t)}}},t.range=function(e,t){return Array.from({length:t-e+1},function(t,n){return n+e})},t.compose=function(...e){return function(t){return e.reduceRight(function(e,t){return t(e)},t)}},t.identity=function(e){return e},t.tenYearsFromNow=function(){return Date.now()+u.default.FIVE_HUNDRED_WEEKS},t.capitalizeFirstLetter=function(e){return`${e[0].toUpperCase()}${e.slice(1)}`},t.getExecNameFromStdOut=function({stdout:e}){const t=e.trim();return t.slice(t.lastIndexOf("/")+1)},t.xdgOpenServerWebPage=function(){return c(`xdg-open ${(0,l.getServerAddress)()}`)},t.xdgOpenLogsFolder=function(){return c(`xdg-open ${(0,a.getBlueLossLogsFolderPath)()}`)}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("child_process")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBlueLossSettingsFilePath=t.getBlueLossConfigFolderPath=t.getBlueLossLogsFolderPath=t.createBlueLossConfig=void 0;var o=u(n(44)),r=u(n(3)),i=u(n(13)),s=n(43);function u(e){return e&&e.__esModule?e:{default:e}}const a=r.default.join(o.default.homedir(),".config","BlueLoss"),l=r.default.join(a,"blueloss-settings.json"),c=r.default.join(a,"logs"),d=r.default.join(a,"BrowserProfiles","Chromium","First Run"),g=r.default.join(a,"BrowserProfiles","Chromium","Default","Preferences"),f=r.default.join(a,"BrowserProfiles","Firefox","chrome","userChrome.css"),p=r.default.join(a,"BrowserProfiles","Firefox","prefs.js");t.createBlueLossConfig=async function(){return await i.default.pathExists(l)?Promise.resolve():await Promise.all([i.default.ensureFile(l),i.default.ensureDir(c),i.default.ensureFile(g).then(function(){return i.default.writeJson(g,(0,s.getChromePrefs)())}).then(function(){return i.default.ensureFile(d)}),i.default.ensureFile(f).then(function(){return i.default.ensureFile(p)}).then(function(){return i.default.outputFile(f,(0,s.getFirefoxUserChrome)())}).then(function(){return i.default.outputFile(p,(0,s.getFirefoxPrefsJs)())})])},t.getBlueLossLogsFolderPath=function(){return c},t.getBlueLossConfigFolderPath=function(){return a},t.getBlueLossSettingsFilePath=function(){return l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tellAllSettingsWindowsToClose=t.pushUpdatesToFrontEnd=t.getServerAddress=t.startServer=void 0;var o=d(n(3)),r=d(n(34)),i=d(n(33)),s=d(n(32)),u=d(n(31)),a=n(0),l=n(1),c=n(30);function d(e){return e&&e.__esModule?e:{default:e}}let g=null;const f=o.default.resolve(__dirname,"..","app","components","settingsWindow","frontEnd"),p=o.default.join(f,"assets"),A=o.default.join(f,"js"),v=o.default.join(f,"html","settingsWindow.html"),m=(0,s.default)(),h=(0,r.default)();h.use("/assets",r.default.static(p)),h.use("/js",r.default.static(A)),h.use(i.default.json()),h.get("/",function(e,t){return t.cookie("bluelossSettings",JSON.stringify((0,u.default)((0,l.getSettings)(),["trayIconColor","dateLastCheckedForAppUpdate","skipUpdateVersion","firstRun"]))),t.sendFile(v)}),h.post("/updatesettings",c.validateUpdatePost,function(e,t){const[[n,o]]=Object.entries(e.body);return(0,l.updateSetting)(n,o),t.end()}),h.use("/sse-update",m.handler()),t.startServer=function(){return new Promise(e=>{const t=h.listen(0,()=>((function({family:e,address:t,port:n}){const o="ipv6"===e.toLowerCase()?`[${t}]`:t;g=`http://${o}:${n}`,a.logger.verbose("serverAddress: ",g)})(t.address()),e()));return t})},t.getServerAddress=function(){return g},t.pushUpdatesToFrontEnd=function(e,t){m("settingsUpdate",{[e]:t})},t.tellAllSettingsWindowsToClose=function(){m("closeSelf",!0)}},function(e,t,n){"use strict"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateLastSeenForDevicesLookingForOnStartup=t.updateLastSeenForDeviceSearchingFor=t.removeNewDeviceToSearchFor=t.addNewDeviceToSearchFor=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),i=n(2);n(8);function s(e){return(0,r.getSettings)().devicesToSearchFor[e]}function u(e,t){const{devicesToSearchFor:n}=(0,r.getSettings)(),i=n[e];return(0,r.updateSetting)("devicesToSearchFor",o({},n,{[e]:o({},i,{lastSeen:t})}))}t.addNewDeviceToSearchFor=function(e){const{deviceId:t}=e;s(t)||(0,r.updateSetting)("devicesToSearchFor",o({},(0,r.getSettings)().devicesToSearchFor,{[t]:e}))},t.removeNewDeviceToSearchFor=function({deviceId:e}){var t;s(e)&&(0,r.updateSetting)("devicesToSearchFor",(t=e,(()=>{const e={};for(let n=(0,r.getSettings)().devicesToSearchFor,o=0,i=Object.keys(n),s=i.length;o<s;o++){const r=i[o],s=n[r];r!==t&&(e[r]=s)}return e})()))},t.updateLastSeenForDeviceSearchingFor=u,t.updateLastSeenForDevicesLookingForOnStartup=function(){for(let e=(0,r.getSettings)().devicesToSearchFor,t=0,n=Object.keys(e),o=n.length;t<o;t++){const o=n[t],{deviceId:r}=e[o];u(r,(0,i.tenYearsFromNow)())}}},function(e,t){e.exports=require("promise-rat-race")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openSettingsWindow=void 0;var o=n(4),r=n(5),i=c(n(3)),s=c(n(10)),u=n(7),a=n(6),l=n(2);function c(e){return e&&e.__esModule?e:{default:e}}const d=(0,o.promisify)(r.exec);function g(e){return d("firefox"===e?`firefox -new-instance --width=910 --height=760 -profile ${f("Firefox")} ${(0,u.getServerAddress)()}`:function(e){return`${e} --app=${(0,u.getServerAddress)()} --user-data-dir=${f("Chromium")}`}(e))}function f(e){return i.default.join((0,a.getBlueLossConfigFolderPath)(),"BrowserProfiles",(0,l.capitalizeFirstLetter)(e))}t.openSettingsWindow=function(){(0,u.tellAllSettingsWindowsToClose)(),(0,s.default)([d("command -v firefox"),d("command -v chromium-browser"),d("command -v google-chrome")]).then(l.getExecNameFromStdOut).then(g).catch(l.xdgOpenServerWebPage)}},function(e,t){e.exports=require("timeproxy")},function(e,t){e.exports=require("fs-extra")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.disableRunOnStartup=t.enableRunOnStartup=void 0;var o=u(n(3)),r=u(n(35)),i=u(n(13)),s=n(0);function u(e){return e&&e.__esModule?e:{default:e}}const a=(0,r.default)("~/.config/autostart/"),l=o.default.join(a,"BlueLoss.desktop");t.enableRunOnStartup=function(e){return i.default.outputFile(l,`\n[Desktop Entry]\nType=Application\nVersion=1.0\nName=BlueLoss\nExec=${process.execPath}\nIcon=${o.default.join(process.cwd(),"BlueLoss.png")}\nStartupNotify=false\nTerminal=false\nCategories=Utility;\n`.trim()).catch(s.logger.error)},t.disableRunOnStartup=function(){return i.default.remove(l).catch(s.logger.error)}},function(e,t){e.exports=require("winston")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaultSettings={blueLossEnabled:!0,runOnStartup:!0,trayIconColor:"blue",devicesToSearchFor:{},timeToLock:2,reportErrors:!0,firstRun:!0,scanInterval:30,verboseLogging:!1}},function(e,t){e.exports=require("gawk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lockSystem=void 0;var o,r=n(4),i=n(5),s=n(10),u=(o=s)&&o.__esModule?o:{default:o},a=n(0),l=n(2);const c=(0,r.promisify)(i.exec),d={"xdg-screensaver":"lock","gnome-screensaver-command":"--lock","cinnamon-screensaver-command":"--lock","dm-tool":"lock"};t.lockSystem=function(e){e&&(0,u.default)([c("command -v xdg-screensaver"),c("command -v gnome-screensaver-command"),c("command -v cinnamon-screensaver-command"),c("command -v dm-tool")]).then(l.getExecNameFromStdOut).then(function(e){return c(`${e} ${d[e]}`)}).catch(a.logger.verbose)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lockSystemIfDeviceLost=void 0;var o,r=n(12),i=(o=r)&&o.__esModule?o:{default:o},s=n(2),u=n(1),a=n(9),l=n(18);function c(e,t){return Date.now()>e+i.default`${t} minutes`}t.lockSystemIfDeviceLost=function(){const{devicesToSearchFor:e,timeToLock:t,blueLossEnabled:n}=(0,u.getSettings)();for(let o=0,r=Object.keys(e),i=r.length;o<i;o++){const i=r[o],{lastSeen:u,deviceId:d}=e[i];c(u,t)&&((0,l.lockSystem)(n),(0,a.updateLastSeenForDeviceSearchingFor)(d,(0,s.tenYearsFromNow)()))}}},function(e,t){e.exports=require("is-empty")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleScanResults=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(20),s=(o=i)&&o.__esModule?o:{default:o},u=n(0),a=(n(8),n(1)),l=n(7),c=n(9),d=n(19);t.handleScanResults=function(e){const t=function(e){var t,n;const o=null==e?void 0:null==(t=e.stdout)?void 0:null==(n=t.trim())?void 0:n.replace("Scanning ...","");return(null==o?void 0:o.length)?o.split("\n").reduce(function(e,t){const n=t.trim().split("\t"),o=n[0].trim(),r=n[1].trim();return[...void 0===e?[]:e,...[{deviceId:o,deviceName:r}]]}):[]}(e);u.logger.verbose("Found these Bluetooth devices in scan: ",{deviceList:t});const{devicesToSearchFor:n}=(0,a.getSettings)(),o=function(e){return(()=>{const t=[];for(let n=0,o=e.length;n<o;n++){const o=e[n];t.push(r({},o,{lastSeen:Date.now()}))}return t})()}(t);if((0,l.pushUpdatesToFrontEnd)("devicesCanSee",o),!(0,s.default)(n)){for(let e=0,o=t.length;e<o;e++){const{deviceId:o}=t[e];n[o]&&(0,c.updateLastSeenForDeviceSearchingFor)(o,Date.now())}(0,d.lockSystemIfDeviceLost)()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scanForBlueToothDevices=void 0;var o,r=n(4),i=n(5),s=n(12),u=(o=s)&&o.__esModule?o:{default:o},a=n(21),l=n(0),c=n(1);const d=(0,r.promisify)(i.exec);function g(){(0,c.getSettings)().blueLossEnabled||f(),l.logger.verbose("=======New Scan Started======="),d("hcitool scan").then(a.handleScanResults).catch(l.logger.error),f()}function f(){return setTimeout(g,u.default`${(0,c.getSettings)().scanInterval} seconds`)}t.scanForBlueToothDevices=g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendOSnotification=void 0;var o,r=n(4),i=n(5),s=n(10),u=(o=s)&&o.__esModule?o:{default:o},a=n(2);const l=(0,r.promisify)(i.exec);t.sendOSnotification=function(e){(0,u.default)([l("command -v zenity"),l("command -v notify-send")]).then(a.getExecNameFromStdOut).then(function(t){return l("zenity"===t?`zenity --notification --text="${e}"`:`notify-send "${e}"`)}).catch(a.noop)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.base64IconData={white:"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",blue:"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"}},function(e,t){e.exports=require("systray")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initTrayMenu=void 0;var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(25),s=(o=i)&&o.__esModule?o:{default:o},u=n(1),a=n(24),l=n(23),c=n(2),d=n(0),g=n(11);let f=null;function p(e){0===e.seq_id&&(0,g.openSettingsWindow)(),1===e.seq_id&&((0,u.updateSetting)("blueLossEnabled",!(0,u.getSettings)().blueLossEnabled),function(e){f.sendAction({type:"update-item",item:r({},e.item,{title:m(),tooltip:m()}),seq_id:e.seq_id})}(e),(0,l.sendOSnotification)((0,u.getSettings)().blueLossEnabled?"BlueLoss Enabled":"BlueLoss Disabled")),2===e.seq_id&&(function(){const e="white"===(0,u.getSettings)().trayIconColor?"blue":"white";(0,u.updateSetting)("trayIconColor",e)}(),function(e){f.sendAction({type:"update-menu",menu:{icon:a.base64IconData[v()],title:"BlueLoss",tooltip:"BlueLoss",items:A()},seq_id:e.seq_id})}(e)),3===e.seq_id&&(0,c.xdgOpenLogsFolder)().catch(d.logger.error),4===e.seq_id&&f.kill()}function A(){return[{title:"Open BlueLoss Settings",tooltip:"Open BlueLoss Settings",enabled:!0},{title:m(),tooltip:m(),enabled:!0},{title:"Toggle Tray Icon Color",tooltip:"Toggle Tray Icon Color",enabled:!0},{title:"Open Logs",tooltip:"Open Logs",enabled:!0},{title:"Quit BlueLoss",tooltip:"Quit BlueLoss",enabled:!0}]}function v(){return(0,u.getSettings)().trayIconColor}function m(){return`${(0,u.getSettings)().blueLossEnabled?"Disable":"Enable"} BlueLoss`}t.initTrayMenu=function(){return new Promise(function(e){(f=new s.default({menu:{icon:a.base64IconData[v()],title:"BlueLoss",tooltip:"BlueLoss",items:A()},debug:!1,copyDir:!0})).onClick(p),f.onReady(e)})}},function(e,t){e.exports=require("typa")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logSettingsUpdateForVerboseLogging=void 0;var o,r=n(27),i=(o=r)&&o.__esModule?o:{default:o},s=n(0);n(8);t.logSettingsUpdateForVerboseLogging=function(e,t){if(!s.logger)return;const n=`Updated Setting: updated '${e}' with:`;i.default.obj(t)?s.logger.verbose(n,{[e]:t}):s.logger.verbose(`${n} ${t}`)}},function(e,t){e.exports=require("joi")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateUpdatePost=void 0;var o,r=n(29),i=(o=r)&&o.__esModule?o:{default:o},s=n(16),u=n(0);const a=i.default.object().keys({blueLossEnabled:i.default.boolean(),runOnStartup:i.default.boolean(),devicesToSearchFor:i.default.object(),timeToLock:i.default.number().integer().min(s.defaultSettings.timeToLock),scanInterval:i.default.number().integer().min(s.defaultSettings.scanInterval),reportErrors:i.default.boolean(),verboseLogging:i.default.boolean()});t.validateUpdatePost=function(e,t,n){var o;const r=null==(o=i.default.validate(null==e?void 0:e.body,a))?void 0:o.error;return r?(u.logger.error(r),t.status(400).end()):n()}},function(e,t){e.exports=require("lodash.omit")},function(e,t){e.exports=require("sse-pusher")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("untildify")},function(e){e.exports={name:"blueloss",productName:"BlueLoss",version:"2018.6.1",description:"A desktop app that locks your computer when a device is lost",main:"app/appMain-compiled.js",scripts:{webpackWatch:"cross-env NODE_ENV=development parallel-webpack --watch --max-retries=1 --no-stats",startDev:"cross-env NODE_ENV=development nodemon app/appMain-compiled.js",debug:"cross-env NODE_ENV=development nodeDebug=true parallel-webpack && node --inspect app/appMain-compiled.js",lintWatch:"cross-env NODE_ENV=development esw -w --ext .lsc -c .eslintrc.json --color --clear",start:"cross-env NODE_ENV=production node app/appMain-compiled.js",devTasks:"cross-env NODE_ENV=production node devTasks/tasks.js",test:"snyk test"},pkg:{assets:["app/config/.env","app/components/settingsWindow/frontEnd/js/settingsWindowWeb-compiled.js","app/components/settingsWindow/frontEnd/assets/styles/*.css","app/components/settingsWindow/frontEnd/assets/vendor/materialize/materialize.css","app/components/settingsWindow/frontEnd/assets/vendor/modern-normalize/modern-normalize.css","app/components/settingsWindow/frontEnd/assets/icons/*","app/components/settingsWindow/frontEnd/html/settingsWindow.html"]},repository:"https://github.com/Darkle/BlueLoss.git",author:"Darkle <coop.coding@gmail.com>",license:"MIT",dependencies:{"@hyperapp/logger":"^0.5.0","auto-launch":"^5.0.5","body-parser":"^1.18.3",dotenv:"^5.0.1",express:"^4.16.3","fs-extra":"^6.0.1",gawk:"^4.4.5",hyperapp:"^1.2.5","is-empty":"^1.2.0",joi:"^13.4.0","js-cookie":"^2.2.0","lodash.omit":"^4.5.0",lowdb:"^1.0.0",ono:"^4.0.5","promise-rat-race":"^1.5.1",rollbar:"^2.4.1","sse-pusher":"^1.1.1",systray:"^1.0.5",timeproxy:"^1.2.1",typa:"^0.1.18",untildify:"^3.0.3",winston:"^2.4.1"},devDependencies:{"@oigroup/babel-preset-lightscript":"^3.1.1","@oigroup/lightscript-eslint":"^3.1.1","babel-core":"^6.26.0","babel-eslint":"^8.2.3","babel-loader":"^7.1.4","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-react-jsx":"^6.24.1","babel-register":"^6.26.0",chalk:"^2.4.1","cross-env":"^5.1.6",del:"^3.0.0",eslint:"=4.8.0","eslint-plugin-jsx":"0.0.2","eslint-plugin-react":"^7.8.2","eslint-watch":"^3.1.5",exeq:"^3.0.0",inquirer:"^5.2.0","node-7z":"^0.4.0",nodemon:"^1.17.5","parallel-webpack":"^2.3.0",pkg:"^4.3.1",snyk:"^1.82.0","stringify-object":"^3.2.2",webpack:"^4.10.2","webpack-node-externals":"^1.7.2"},snyk:!0}},function(e,t){e.exports=require("rollbar")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rollbarLogger=t.CustomRollbarTransport=void 0;var o=i(n(4)),r=i(n(15));function i(e){return e&&e.__esModule?e:{default:e}}const s=new(i(n(37)).default)({accessToken:process.env.rollbarAccessToken,enabled:!1,captureUncaught:!0,captureUnhandledRejections:!0,environment:"production",reportLevel:"error",payload:{BlueLossVersion:n(36).version},transform:e=>e.server={}}),u=r.default.transports.CustomLogger=function(e){Object.assign(this,e)};o.default.inherits(u,r.default.Transport),u.prototype.log=function(e,t="",n,o){"error"===e&&(s.error(t,n),o(null,!0))},t.CustomRollbarTransport=u,t.rollbarLogger=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initSettingsObservers=void 0;var o,r=n(17),i=(o=r)&&o.__esModule?o:{default:o},s=n(0),u=n(14),a=n(7),l=n(2);t.initSettingsObservers=function(e){i.default.watch(e,["reportErrors"],function(e){e?(0,s.addRollbarLogging)():(0,s.removeRollbarLogging)()}),i.default.watch(e,["blueLossEnabled"],function(e){(0,a.pushUpdatesToFrontEnd)("blueLossEnabled",e)}),i.default.watch(e,["runOnStartup"],function(e){e?(0,u.enableRunOnStartup)().catch(l.noop):(0,u.disableRunOnStartup)().catch(l.noop)}),i.default.watch(e,["verboseLogging"],function(e){(0,s.changeLogLevel)(e?"verbose":"error")})}},function(e,t){e.exports=require("lowdb/adapters/FileSync")},function(e,t){e.exports=require("lowdb")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeSingleInstance=void 0;var o=s(n(3)),r=s(n(13)),i=n(6);function s(e){return e&&e.__esModule?e:{default:e}}let u=!1;const a="BlueLoss is already running (BlueLoss.lock file already exists), exiting...";function l(){return o.default.join((0,i.getBlueLossConfigFolderPath)(),"BlueLoss.lock")}process.on("exit",()=>{if(u)try{return r.default.removeSync(l())}catch(e){return}}),process.once("SIGINT",function(){return process.exit(1)}).once("SIGTERM",function(){return process.exit(1)}),t.makeSingleInstance=async function(){return await r.default.pathExists(l())?(console.error(new Error(a)),process.exit(1)):(u=!0,r.default.ensureFile(l()))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getChromePrefs=t.getFirefoxPrefsJs=t.getFirefoxUserChrome=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(5);t.getFirefoxUserChrome=function(){return"\n@-moz-document url(chrome://browser/content/browser.xul) {\n#TabsToolbar {\n  visibility: collapse !important;\n}\n#nav-bar {\n  visibility: collapse !important;\n}\n"},t.getFirefoxPrefsJs=function(){return'\nuser_pref("browser.tabs.warnOnClose", false);\nuser_pref("browser.sessionstore.restore_on_demand", false);\nuser_pref("browser.tabs.warnOnCloseOtherTabs", false);\n'},t.getChromePrefs=function(){const e=function(){try{const[e,t]=(0,r.execSync)("xrandr |grep \\* |awk '{print $1}'").toString().trim().split("x");return{screenWidth:Number(e),screenHeight:Number(t)}}catch(e){return console.error(e),null}}();if(!e)return{};const t=function({screenHeight:e,screenWidth:t}){return{top:Math.round(e/2-380),bottom:Math.round(e/2+380),left:Math.round(t/2-455),right:Math.round(t/2+455)}}(e);return{browser:{app_window_placement:{"[::]_/":o({maximized:!1},t),"[::1]_/":o({maximized:!1},t),0:{0:{0:{"0_/":o({maximized:!1},t)}}},127:{0:{0:{"1_/":o({maximized:!1},t)}}}}}}}},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("dotenv")},function(e,t,n){"use strict";var o=r(n(3));function r(e){return e&&e.__esModule?e:{default:e}}r(n(45)).default.config({path:o.default.resolve(__dirname,"..","..","config",".env")})},function(e,t,n){"use strict";n(46);var o=n(6),r=n(42),i=n(1),s=n(0),u=n(26),a=n(7),l=n(2),c=n(22),d=n(11),g=n(14);function f(e){console.error(e),null==s.logger||"function"!=typeof s.logger.error||s.logger.error(e),process.exit(1)}(0,o.createBlueLossConfig)().then(r.makeSingleInstance).then(i.initSettings).then(s.initLogging).then(u.initTrayMenu).then(a.startServer).then(l.setUpDev).then(function(){const{firstRun:e}=(0,i.getSettings)();return e?((0,i.updateSetting)("firstRun",!e),(0,g.enableRunOnStartup)(e).then(d.openSettingsWindow)):Promise.resolve()}).then(c.scanForBlueToothDevices).catch(f),process.on("unhandledRejection",f),process.on("uncaughtException",f)}]);