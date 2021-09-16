(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdInflowModal"] = factory();
	else
		root["AdInflowModal"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 976:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _dom = __webpack_require__(950);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var BodyLocker = /*#__PURE__*/function () {
  function BodyLocker() {
    var _this = this;

    _classCallCheck(this, BodyLocker);

    this._class = 'ad-inflow-body';
    this._lockEvents = 'touchmove';
    this._preventEvents = ['touch', 'touchstart', 'touchmove', 'touchcancel'];
    this._preventedEvents = ['touchend', 'mousedown'];

    if (isiOS) {
      // "touchend" event is not a user interaction on iOS
      this._preventedEvents.unshift('touchstart');
    }

    this._lock = function (e) {
      e.preventDefault();
    };

    this._prevent = function (e) {
      e.preventDefault();
    };

    this._prevented = function (e) {
      e.preventDefault();

      if (_this._isPrevented) {
        return;
      }

      _this._isPrevented = true;

      _this._next();

      _this._preventedEvents.forEach(function (e) {
        document.body.removeEventListener(e, _this._prevented, {
          capture: true,
          passive: false,
          once: true
        });
      });

      _this._preventEvents.forEach(function (e) {
        document.body.removeEventListener(e, _this._prevent, {
          capture: true,
          passive: false,
          once: true
        });
      });
    };
  }

  _createClass(BodyLocker, [{
    key: "lock",
    value: function lock() {
      (0, _dom.addOneClass)(document.body, this._class);
      document.body.addEventListener(this._lockEvents, this._lock, {
        passive: false
      });
    }
  }, {
    key: "unlock",
    value: function unlock() {
      (0, _dom.removeClass)(document.body, this._class);
      document.body.removeEventListener(this._lockEvents, this._lock, {
        passive: false
      });
    }
  }, {
    key: "prevent",
    value: function prevent(next) {
      var _this2 = this;

      this._isPrevented = false;
      this._next = next;

      this._preventedEvents.forEach(function (e) {
        document.body.addEventListener(e, _this2._prevented, {
          capture: true,
          passive: false,
          once: true
        });
      });

      this._preventEvents.forEach(function (e) {
        document.body.addEventListener(e, _this2._prevent, {
          capture: true,
          passive: false,
          once: true
        });
      });
    }
  }]);

  return BodyLocker;
}();

exports["default"] = BodyLocker;

/***/ }),

/***/ 700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

var _dom = __webpack_require__(950);

var _dummy = __webpack_require__(585);

// can-autoplay.js
// Create once the video element to avoid to set source each time can-autoplay function is called
// This fix an issue where play() is called when source is not fully loaded
// Note: a possible alternative *could* be to call load() after set source
var element = (0, _dom.make)('video', {
  attr: {
    playsinline: null,
    src: _dummy.video.source
  }
});

function _default(cb) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var canAutoplay = function canAutoplay(result) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    clearTimeout(timeoutId);
    cb(result, error);
  };

  var timeoutId = setTimeout(function () {
    canAutoplay(false, new Error('Timeout ' + timeout + ' ms has been reached'));
  }, timeout);
  var promise = element.play();

  if (promise !== undefined) {
    promise.then(function () {
      return canAutoplay(true);
    })["catch"](function (err) {
      return canAutoplay(false, err);
    });
  } else {
    canAutoplay(true);
  }
}

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = detectMobile;

// detect-mobile.js
// Regular Expression: http://detectmobilebrowsers.com/
function detectMobile() {
  var match = navigator.userAgent || navigator.vendor || window.opera;
  /* eslint-disable no-useless-escape */

  return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(match) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(match.substr(0, 4)));
}

/***/ }),

/***/ 950:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.str = str;
exports.el = el;
exports.addOneClass = addOneClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
exports.attr = attr;
exports.make = make;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// dom.js
// Convert value to string
function str(v) {
  return v + '';
} // Query selector shortcut


function el(s) {
  return document.querySelector(s);
} // Adds single class value to element


function addOneClass(e, c) {
  if (e.classList) {
    e.classList.add(c);
  } else {
    if (e.className.split(' ').indexOf(c) == -1) {
      e.className += ' ' + c;
    }
  }

  return e;
} // Adds class values to element


function addClass(e, c) {
  str(c).split(' ').forEach(function (i) {
    e = addOneClass(e, i);
  });
  return e;
} // Remove single class value from element


function removeClass(e, c) {
  if (e.classList) {
    e.classList.remove(c);
  } else {
    e.className = e.className.replace(new RegExp("\\b" + c + "\\b", 'g'), '');
  }

  return e;
} // Toggle single class value from element


function toggleClass(e, c) {
  if (e.classList) {
    e.classList.toggle(c);
  } else {
    var arr = e.className.split(' ');
    var i = arr.indexOf(c);

    if (i >= 0) {
      arr.splice(i, 1);
    } else {
      arr.push(c);
    }

    e.className = arr.join(" ");
  }

  return e;
} // Get or add single element attribute value


function attr(e, n) {
  var v = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

  if (v === undefined) {
    return e.getAttribute(n);
  } // Add "no value" attribute if value is null


  if (v === null) {
    e.setAttributeNode(document.createAttribute(n));
  } else {
    e.setAttribute(n, v);
  }

  return e;
} // Make an element


function make(n) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var e = document.createElement(n);

  if (o["class"]) {
    e = addClass(e, o["class"]);
  }

  if (o.text) {
    e.innerText = o.text;
  }

  if (o.attr && _typeof(o.attr) === 'object') {
    for (var k in o.attr) {
      attr(e, k, o.attr[k]);
    }
  }

  if (o.html) {
    e.innerHTML = o.html;
  }

  return e;
}

/***/ }),

/***/ 585:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.svg = exports.video = void 0;
// dummy.js
// Video: https://github.com/mathiasbynens/small
var VIDEO = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE='; // SVG: https://commons.wikimedia.org/wiki/File:Solid_black.svg

var SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxwYXRoIGQ9Im0wLDB2MWgxVjAiPjwvcGF0aD48L3N2Zz4='; // base64toBlob: https://github.com/video-dev/can-autoplay

function base64toBlob(base64) {
  var base64Regex = /^data:([^;]+);base64,(.+)$/i;
  var matches = base64.match(base64Regex);
  var contentType = matches[1];
  var base64Data = matches[2];
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);
    var bytes = new Array(end - begin);

    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }

    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }

  return new Blob(byteArrays, {
    type: contentType
  });
}

function blobToObject(blob) {
  return {
    source: URL.createObjectURL(blob),
    mimeType: blob.type
  };
}

var _video = blobToObject(base64toBlob(VIDEO));

var _svg = blobToObject(base64toBlob(SVG));

var video = _video;
exports.video = video;
var svg = _svg;
exports.svg = svg;

/***/ }),

/***/ 752:
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7400:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_507__) => {

"use strict";


__nested_webpack_require_507__(9070);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

__nested_webpack_require_507__(2564);

// ima-loader.js
function _default(cb) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6000;
  var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var win = window,
      doc = document,
      el = 'script',
      timer = null;

  var onLoad = function onLoad(r) {
    win.clearTimeout(timer);
    if (typeof cb === 'function') cb(r);
  };

  if (win.google && win.google.ima) {
    return onLoad(true);
  }

  var first = doc.getElementsByTagName(el)[0];
  var script = doc.createElement(el);
  script.src = 'https://imasdk.googleapis.com/js/sdkloader/ima3' + (debug ? '_debug' : '') + '.js';
  script.async = true;
  if (typeof cb === 'function') script.onload = function () {
    onLoad(true);
  };
  first.parentNode.insertBefore(script, first);

  if (timeout) {
    timer = win.setTimeout(function () {
      onLoad(false);
    }, timeout);
  }
}

/***/ }),

/***/ 6676:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_1699__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__nested_webpack_require_1699__(2564);

__nested_webpack_require_1699__(9070);

var _utils = __nested_webpack_require_1699__(9853);

var _observable = _interopRequireDefault(__nested_webpack_require_1699__(8938));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global google */
var ImaPlayer = /*#__PURE__*/function () {
  function ImaPlayer(options) {
    _classCallCheck(this, ImaPlayer);

    this._configure(options);

    this._evt = new _observable["default"]();
    this._adRequesting = false;
    this._adRequested = false; // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.ImaSdkSettings#setVpaidMode

    this._o.vpaidMode && google.ima.settings.setVpaidMode(this._resolvedVpaidMode); // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.ImaSdkSettings#setLocale

    this._o.locale && google.ima.settings.setLocale(this._o.locale); // Assumes the display container and video element are correctly positioned and sized
    // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side#html

    this._adDisplayContainer = new google.ima.AdDisplayContainer(this._o.displayContainer, this._o.video, this._o.clickTracking);
    this._adDisplayContainerInit = false;
  }

  _createClass(ImaPlayer, [{
    key: "_configure",
    value: function _configure(o) {
      this._o = {
        displayContainer: o.displayContainer,
        video: o.video,
        tag: o.tag
      }; // VPAID mode will be ima SDK default (if not set)

      if (o.vpaidMode) {
        this._o.vpaidMode = (0, _utils.makeNum)(o.vpaidMode, undefined);
      }

      if (o.maxDuration) {
        this._o.maxDuration = (0, _utils.makeNum)(o.maxDuration, undefined);
      } // Default is undefined


      this._o.locale = o.locale; // Default is undefined or alternative video ad click element
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdDisplayContainer

      this._o.clickTracking = o.clickTracking; // Default is undefined or object

      this._o.adsRequestOptions = o.adsRequestOptions; // Default is undefined or object

      this._o.adsRenderingOptions = o.adsRenderingOptions; // Default is to let IMA SDK handle non-linear display duration

      this._o.nonLinearMaxDuration = (0, _utils.makeNum)(o.nonLinearMaxDuration, -1); // Assumes by default that the playback is consented by user

      this._o.adWillAutoPlay = !!(0, _utils.makeDefault)(o.adWillAutoPlay, true);
      this._o.adWillPlayMuted = !!(0, _utils.makeDefault)(o.adWillPlayMuted, false); // Default is undefined

      this._o.continuousPlayback = o.continuousPlayback; // Default is to tell the SDK NOT to save and restore content video state

      this._o.restoreVideo = !!(0, _utils.makeDefault)(o.restoreVideo, false);
    }
  }, {
    key: "_setProperties",
    value: function _setProperties(target, properties) {
      for (var prop in properties) {
        if (typeof target[prop] !== 'undefined') {
          target[prop] = properties[prop];
        }
      }
    }
  }, {
    key: "_resolvedVpaidMode",
    get: function get() {
      if (this._o.vpaidMode === ImaPlayer.vpaidMode.DISABLED) {
        return google.ima.ImaSdkSettings.VpaidMode.DISABLED;
      }

      if (this._o.vpaidMode === ImaPlayer.vpaidMode.INSECURE) {
        return google.ima.ImaSdkSettings.VpaidMode.INSECURE;
      } // Default to SECURE mode


      return google.ima.ImaSdkSettings.VpaidMode.ENABLED;
    }
  }, {
    key: "on",
    value: function on(name, cb) {
      this._evt.subscribe(name, cb);
    }
  }, {
    key: "off",
    value: function off(name) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (cb === null) {
        this._evt.unsubscribeAll(name);
      } else {
        this._evt.unsubscribe(name, cb);
      }
    }
  }, {
    key: "play",
    value: function play() {
      this._dispatch('ad_play_intent');

      this._adPlayIntent = true;
      this.initAdDisplayContainer();

      this._requestAd();
    }
  }, {
    key: "request",
    value: function request(options) {
      this._dispatch('ad_request_intent', options);

      this._requestAd(options);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var viewMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (this._adsManager) {
        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#resize
        viewMode || (viewMode = google.ima.ViewMode.NORMAL);

        this._adsManager.resize(width, height, viewMode);
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#setVolume
      this._adsManager && this._adsManager.setVolume(volume);
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#getVolume
      this._adsManager && this._adsManager.getVolume();
    }
  }, {
    key: "discardAdBreak",
    value: function discardAdBreak() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#discardAdBreak
      this._adsManager && this._adsManager.discardAdBreak();
    }
  }, {
    key: "pause",
    value: function pause() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#pause
      this._adsManager && this._adsManager.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#resume
      this._adsManager && this._adsManager.resume();
    }
  }, {
    key: "skip",
    value: function skip() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#skip
      this._adsManager && this._adsManager.skip();
    }
  }, {
    key: "updateAdsRenderingSettings",
    value: function updateAdsRenderingSettings(adsRenderingSettings) {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#updateAdsRenderingSettings
      this._adsManager && this._adsManager.updateAdsRenderingSettings(adsRenderingSettings);
    }
  }, {
    key: "configureAdsManager",
    value: function configureAdsManager(content, adsRenderingSettings) {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#configureAdsManager
      this._adsManager && this._adsManager.configureAdsManager(content, adsRenderingSettings);
    }
  }, {
    key: "focus",
    value: function focus() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#focus
      this._adsManager && this._adsManager.focus();
    }
  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#getCuePoints
      this._adsManager && this._adsManager.getCuePoints();
    }
  }, {
    key: "getAdSkippableState",
    value: function getAdSkippableState() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#getAdSkippableState
      this._adsManager && this._adsManager.getAdSkippableState();
    }
  }, {
    key: "getRemainingTime",
    value: function getRemainingTime() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#getRemainingTime
      this._adsManager && this._adsManager.getRemainingTime();
    }
  }, {
    key: "isCustomClickTrackingUsed",
    value: function isCustomClickTrackingUsed() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#isCustomClickTrackingUsed
      this._adsManager && this._adsManager.isCustomClickTrackingUsed();
    }
  }, {
    key: "isCustomPlaybackUsed",
    value: function isCustomPlaybackUsed() {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager#isCustomPlaybackUsed
      this._adsManager && this._adsManager.isCustomPlaybackUsed();
    }
  }, {
    key: "setAdWillAutoPlay",
    value: function setAdWillAutoPlay(autoPlay) {
      this._o.adWillAutoPlay = autoPlay;
    }
  }, {
    key: "setAdWillPlayMuted",
    value: function setAdWillPlayMuted(muted) {
      this._o.adWillPlayMuted = muted;
    }
  }, {
    key: "setContinuousPlayback",
    value: function setContinuousPlayback(continuousPlayback) {
      this._o.continuousPlayback = continuousPlayback;
    }
  }, {
    key: "stop",
    value: function stop() {
      this._dispatch('ad_stop_intent');

      this._stop();
    }
  }, {
    key: "ended",
    value: function ended() {
      // Signals the video content is finished.
      // This will allow to play post-roll ads (if any)
      this._adsLoader && this._adsLoader.contentComplete();
    }
  }, {
    key: "initAdDisplayContainer",
    value: function initAdDisplayContainer() {
      // Must be done via a user interaction
      if (!this._adDisplayContainerInit) {
        this._adDisplayContainer.initialize();

        this._adDisplayContainerInit = true;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var unsubscribeEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._adsManager && this._adsManager.stop();

      this._endAd();

      unsubscribeEvents && this._evt.unsubscribeAll();

      this._destroyAdsManager();

      this._adsLoader && this._adsLoader.destroy();
      this._adDisplayContainer && this._adDisplayContainer.destroy();
    }
  }, {
    key: "_stop",
    value: function _stop() {
      this._dispatch('ad_stop');

      if (this._adsManager) {
        // Signal ads manager to stop and get back to content
        this._adsManager.stop();
      } else {
        this._endAd();
      }
    }
  }, {
    key: "_makeAdsLoader",
    value: function _makeAdsLoader() {
      var _this = this;

      this._adsLoader = new google.ima.AdsLoader(this._adDisplayContainer);

      this._adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
        _this._onAdsManagerLoaded(e);
      });

      this._adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this._adRequested = false;

        _this._onAdError(e);
      });
    }
  }, {
    key: "_requestAd",
    value: function _requestAd(options) {
      // Check if ad request is pending
      if (this._adRequesting) {
        // Ad will autostart if play method called
        return;
      } // Check if ad already requested (pre-request)


      if (this._adRequested) {
        // Start ad only if play method called
        if (this._adPlayIntent) {
          this._playAd();
        }

        return;
      }

      this._adRequesting = true;

      if (!this._adsLoader) {
        this._makeAdsLoader();
      }

      var adsRequest = new google.ima.AdsRequest(); // Set ad request default settings

      adsRequest.adTagUrl = this._o.tag;
      adsRequest.linearAdSlotWidth = this._o.video.offsetWidth;
      adsRequest.linearAdSlotHeight = this._o.video.offsetHeight;
      adsRequest.nonLinearAdSlotWidth = this._o.video.offsetWidth;
      adsRequest.nonLinearAdSlotHeight = this._o.video.offsetHeight;
      adsRequest.setAdWillAutoPlay(this._o.adWillAutoPlay);
      adsRequest.setAdWillPlayMuted(this._o.adWillPlayMuted);

      if (this._o.continuousPlayback !== undefined) {
        // Internally set AdsRequest.videoContinuousPlay to "0" if undefined, "1" if false, "2" if true
        adsRequest.setContinuousPlayback(this._o.continuousPlayback);
      } // Assumes that ad request options is an object with ads request properties
      // defined in the IMA SDK documentation (will override default settings)
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest


      var adsRequestOptions = options ? options : this._o.adsRequestOptions;

      if (adsRequestOptions) {
        this._setProperties(adsRequest, adsRequestOptions);
      }

      this._dispatch('ad_request', adsRequest); // The requestAds() method triggers _onAdsManagerLoaded() or _onAdError()


      this._adsLoader.requestAds(adsRequest);
    }
  }, {
    key: "_destroyAdsManager",
    value: function _destroyAdsManager() {
      if (this._adsManager) {
        this._adsManager.destroy();

        delete this._adsManager;
      }
    }
  }, {
    key: "_bindAdsManagerEvents",
    value: function _bindAdsManagerEvents() {
      var _this2 = this;

      this._adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
        _this2._onAdError(e);
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function (e) {
        _this2._adEnded = false;

        _this2._dispatch('content_pause_requested', e);

        _this2._dispatch('ad_begin'); // "content_pause_requested" event alias

      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function (e) {
        _this2._dispatch('content_resume_requested', e);

        _this2._endAd();
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function (e) {
        _this2._dispatch('started', e);

        var ad = e.getAd();

        if (ad.isLinear()) {
          _this2._o.maxDuration && _this2._startMaxDurationTimer();
        } else {
          // Signal non-linear ad scenario
          var duration = _this2._o.nonLinearMaxDuration;

          _this2._dispatch('ad_non_linear', {
            ad: ad,
            duration: duration
          }); // By default, IMA SDK will automatically close non-linear ad (after 45 seconds ?)


          if (_this2._o.nonLinearMaxDuration > 0) {
            setTimeout(function () {
              _this2._adsManager && _this2._adsManager.stop();
            }, _this2._o.nonLinearMaxDuration);
          } // Ends to play/resume content video


          _this2._endAd();
        }
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, function (e) {
        _this2._adRequested = false;

        _this2._dispatch('all_ads_completed', e);
      });

      var adEvents = {
        'ad_break_ready': google.ima.AdEvent.Type.AD_BREAK_READY,
        'ad_buffering': google.ima.AdEvent.Type.AD_BUFFERING,
        'ad_metadata': google.ima.AdEvent.Type.AD_METADATA,
        'ad_progress': google.ima.AdEvent.Type.AD_PROGRESS,
        'click': google.ima.AdEvent.Type.CLICK,
        'complete': google.ima.AdEvent.Type.COMPLETE,
        'duration_change': google.ima.AdEvent.Type.DURATION_CHANGE,
        'first_quartile': google.ima.AdEvent.Type.FIRST_QUARTILE,
        'impression': google.ima.AdEvent.Type.IMPRESSION,
        'interaction': google.ima.AdEvent.Type.INTERACTION,
        'linear_changed': google.ima.AdEvent.Type.LINEAR_CHANGED,
        'loaded': google.ima.AdEvent.Type.LOADED,
        'log': google.ima.AdEvent.Type.LOG,
        'midpoint': google.ima.AdEvent.Type.MIDPOINT,
        'paused': google.ima.AdEvent.Type.PAUSED,
        'resumed': google.ima.AdEvent.Type.RESUMED,
        'skippable_state_changed': google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
        'skipped': google.ima.AdEvent.Type.SKIPPED,
        'third_quartile': google.ima.AdEvent.Type.THIRD_QUARTILE,
        'user_close': google.ima.AdEvent.Type.USER_CLOSE,
        'video_clicked': google.ima.AdEvent.Type.VIDEO_CLICKED,
        'video_icon_clicked': google.ima.AdEvent.Type.VIDEO_ICON_CLICKED,
        'volume_changed': google.ima.AdEvent.Type.VOLUME_CHANGED,
        'volume_muted': google.ima.AdEvent.Type.VOLUME_MUTED
      }; // Not documented, may be unavailable in the future

      google.ima.AdEvent.Type.AD_CAN_PLAY && (adEvents.ad_can_play = google.ima.AdEvent.Type.AD_CAN_PLAY);
      google.ima.AdEvent.Type.VIEWABLE_IMPRESSION && (adEvents.viewable_impression = google.ima.AdEvent.Type.VIEWABLE_IMPRESSION);

      var _loop = function _loop(adEvent) {
        _this2._adsManager.addEventListener(adEvents[adEvent], function (e) {
          _this2._dispatch(adEvent, e);
        });
      };

      for (var adEvent in adEvents) {
        _loop(adEvent);
      }
    }
  }, {
    key: "_onAdsManagerLoaded",
    value: function _onAdsManagerLoaded(adsManagerLoadedEvent) {
      this._dispatch('ads_manager_loaded', adsManagerLoadedEvent); // Create default ads rendering settings


      var adsRenderingSettings = new google.ima.AdsRenderingSettings();
      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = this._o.restoreVideo; // Assumes that ads rendering options is an object with ads rendering settings properties
      // defined in the IMA SDK documentation (will override default settings)
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRenderingSettings

      if (this._o.adsRenderingOptions) {
        this._setProperties(adsRenderingSettings, this._o.adsRenderingOptions);
      }

      this._dispatch('ads_rendering_settings', adsRenderingSettings);

      this._destroyAdsManager();

      this._adsManager = adsManagerLoadedEvent.getAdsManager(this._o.video, adsRenderingSettings);

      this._bindAdsManagerEvents();

      this._dispatch('ads_manager', this._adsManager); // Ad is ready to be played


      this._adRequesting = false;
      this._adRequested = true;

      if (this._adPlayIntent) {
        this._playAd();
      }
    }
  }, {
    key: "_onMaxDuration",
    value: function _onMaxDuration() {
      this._dispatch('error', new Error('Maximum duration of ' + this._o.maxDuration + ' ms reached'));

      this._stop();
    }
  }, {
    key: "_startMaxDurationTimer",
    value: function _startMaxDurationTimer() {
      var _this3 = this;

      this._maxDurationTimer = setTimeout(function () {
        _this3._onMaxDuration();
      }, this._o.maxDuration);
    }
  }, {
    key: "_resetMaxDurationTimer",
    value: function _resetMaxDurationTimer() {
      if (typeof this._maxDurationTimer === 'number') {
        clearTimeout(this._maxDurationTimer);
        this._maxDurationTimer = undefined;
      }
    }
  }, {
    key: "_onAdError",
    value: function _onAdError(adErrorEvent) {
      // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdErrorEvent
      // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdError
      // console.log('onAdError: ' + adErrorEvent.getError())
      this._dispatch('ad_error', adErrorEvent);

      this._endAd();
    }
  }, {
    key: "_playAd",
    value: function _playAd() {
      try {
        this._dispatch('ad_play');

        this._adEnded = false;

        this._adsManager.init(this._o.video.offsetWidth, this._o.video.offsetHeight, google.ima.ViewMode.NORMAL);

        this._adsManager.start();
      } catch (e) {
        // console.log('adsManager catched error', e)
        this._dispatch('error', e);

        this._endAd();
      }
    }
  }, {
    key: "_dispatch",
    value: function _dispatch(name, e) {
      this._evt.notify(name, {
        name: name,
        data: e,
        target: this
      });
    }
  }, {
    key: "_endAd",
    value: function _endAd() {
      if (this._adEnded) {
        return;
      }

      this._adEnded = true;
      this._adPlayIntent = false;
      this._adRequesting = false;

      this._resetMaxDurationTimer();

      this._dispatch('ad_end');
    }
  }], [{
    key: "vpaidMode",
    get: function get() {
      return {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2
      };
    }
  }]);

  return ImaPlayer;
}();

exports["default"] = ImaPlayer;

/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_23185__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__nested_webpack_require_23185__(2772);

__nested_webpack_require_23185__(561);

__nested_webpack_require_23185__(9554);

__nested_webpack_require_23185__(4747);

__nested_webpack_require_23185__(9070);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// observable.js
var Observable = /*#__PURE__*/function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.unsubscribeAll();
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(n, f) {
      if (!this.observers[n]) {
        this.observers[n] = [];
      }

      this.observers[n].push(f);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(n, f) {
      if (!this.observers[n]) {
        return;
      }

      var i = this.observers[n].indexOf(f);

      if (i == -1) {
        return;
      }

      this.observers[n].splice(i, 1);
    }
  }, {
    key: "unsubscribeAll",
    value: function unsubscribeAll() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (n === null) {
        this.observers = {};
      } else if (this.observers[n]) {
        delete this.observers[n];
      }
    }
  }, {
    key: "notify",
    value: function notify(n, e) {
      if (this.observers[n]) {
        this.observers[n].forEach(function (o) {
          return o(e);
        });
      }
    }
  }]);

  return Observable;
}();

exports["default"] = Observable;

/***/ }),

/***/ 9853:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_25404__) => {

"use strict";


__nested_webpack_require_25404__(9070);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNumeric = isNumeric;
exports.makeNum = makeNum;
exports.makeDefault = makeDefault;

__nested_webpack_require_25404__(4678);

// utils.js
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function makeNum(value, fallback) {
  return isNumeric(value) ? value + 0 : fallback;
}

function makeDefault(value, defaultValue) {
  return value === undefined ? defaultValue : value;
}

/***/ }),

/***/ 3099:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 9670:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_26191__) => {

var isObject = __nested_webpack_require_26191__(111);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 8533:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_26456__) => {

"use strict";

var $forEach = __nested_webpack_require_26456__(2092).forEach;
var arrayMethodIsStrict = __nested_webpack_require_26456__(9341);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 1318:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_27078__) => {

var toIndexedObject = __nested_webpack_require_27078__(5656);
var toLength = __nested_webpack_require_27078__(7466);
var toAbsoluteIndex = __nested_webpack_require_27078__(1400);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 2092:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_28427__) => {

var bind = __nested_webpack_require_28427__(9974);
var IndexedObject = __nested_webpack_require_28427__(8361);
var toObject = __nested_webpack_require_28427__(7908);
var toLength = __nested_webpack_require_28427__(7466);
var arraySpeciesCreate = __nested_webpack_require_28427__(5417);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 1194:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_31265__) => {

var fails = __nested_webpack_require_31265__(7293);
var wellKnownSymbol = __nested_webpack_require_31265__(5112);
var V8_VERSION = __nested_webpack_require_31265__(7392);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 9341:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_31996__) => {

"use strict";

var fails = __nested_webpack_require_31996__(7293);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 7475:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_32432__) => {

var isObject = __nested_webpack_require_32432__(111);
var isArray = __nested_webpack_require_32432__(3157);
var wellKnownSymbol = __nested_webpack_require_32432__(5112);

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 5417:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_33177__) => {

var arraySpeciesConstructor = __nested_webpack_require_33177__(7475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 4326:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 9920:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_33713__) => {

var has = __nested_webpack_require_33713__(6656);
var ownKeys = __nested_webpack_require_33713__(3887);
var getOwnPropertyDescriptorModule = __nested_webpack_require_33713__(1236);
var definePropertyModule = __nested_webpack_require_33713__(3070);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 8880:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_34360__) => {

var DESCRIPTORS = __nested_webpack_require_34360__(9781);
var definePropertyModule = __nested_webpack_require_34360__(3070);
var createPropertyDescriptor = __nested_webpack_require_34360__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6135:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_35056__) => {

"use strict";

var toPropertyKey = __nested_webpack_require_35056__(4948);
var definePropertyModule = __nested_webpack_require_35056__(3070);
var createPropertyDescriptor = __nested_webpack_require_35056__(9114);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 9781:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_35563__) => {

var fails = __nested_webpack_require_35563__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_35960__) => {

var global = __nested_webpack_require_35960__(7854);
var isObject = __nested_webpack_require_35960__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8324:
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 8509:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_37180__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __nested_webpack_require_37180__(317);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 8113:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_37674__) => {

var getBuiltIn = __nested_webpack_require_37674__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_37874__) => {

var global = __nested_webpack_require_37874__(7854);
var userAgent = __nested_webpack_require_37874__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 748:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_38766__) => {

var global = __nested_webpack_require_38766__(7854);
var getOwnPropertyDescriptor = __nested_webpack_require_38766__(1236).f;
var createNonEnumerableProperty = __nested_webpack_require_38766__(8880);
var redefine = __nested_webpack_require_38766__(1320);
var setGlobal = __nested_webpack_require_38766__(3505);
var copyConstructorProperties = __nested_webpack_require_38766__(9920);
var isForced = __nested_webpack_require_38766__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 6677:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_41417__) => {

var fails = __nested_webpack_require_41417__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 9974:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_41765__) => {

var aFunction = __nested_webpack_require_41765__(3099);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_42449__) => {

var global = __nested_webpack_require_42449__(7854);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 7854:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_42851__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __nested_webpack_require_42851__.g == 'object' && __nested_webpack_require_42851__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6656:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_43565__) => {

var toObject = __nested_webpack_require_43565__(7908);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_43924__) => {

var DESCRIPTORS = __nested_webpack_require_43924__(9781);
var fails = __nested_webpack_require_43924__(7293);
var createElement = __nested_webpack_require_43924__(317);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_44440__) => {

var fails = __nested_webpack_require_44440__(7293);
var classof = __nested_webpack_require_44440__(4326);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 2788:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_45031__) => {

var store = __nested_webpack_require_45031__(5465);

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 2423:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_45460__) => {

var $ = __nested_webpack_require_45460__(2109);
var hiddenKeys = __nested_webpack_require_45460__(3501);
var isObject = __nested_webpack_require_45460__(111);
var has = __nested_webpack_require_45460__(6656);
var defineProperty = __nested_webpack_require_45460__(3070).f;
var getOwnPropertyNamesModule = __nested_webpack_require_45460__(8006);
var getOwnPropertyNamesExternalModule = __nested_webpack_require_45460__(1156);
var uid = __nested_webpack_require_45460__(9711);
var FREEZING = __nested_webpack_require_45460__(6677);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 9909:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_48229__) => {

var NATIVE_WEAK_MAP = __nested_webpack_require_48229__(8536);
var global = __nested_webpack_require_48229__(7854);
var isObject = __nested_webpack_require_48229__(111);
var createNonEnumerableProperty = __nested_webpack_require_48229__(8880);
var objectHas = __nested_webpack_require_48229__(6656);
var shared = __nested_webpack_require_48229__(5465);
var sharedKey = __nested_webpack_require_48229__(6200);
var hiddenKeys = __nested_webpack_require_48229__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_50154__) => {

var classof = __nested_webpack_require_50154__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 4705:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_50513__) => {

var fails = __nested_webpack_require_50513__(7293);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_51403__) => {

var getBuiltIn = __nested_webpack_require_51403__(5005);
var USE_SYMBOL_AS_UID = __nested_webpack_require_51403__(3307);

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ 133:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_51810__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __nested_webpack_require_51810__(7392);
var fails = __nested_webpack_require_51810__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8536:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_52593__) => {

var global = __nested_webpack_require_52593__(7854);
var inspectSource = __nested_webpack_require_52593__(2788);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 2814:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_52900__) => {

var global = __nested_webpack_require_52900__(7854);
var toString = __nested_webpack_require_52900__(1340);
var trim = __nested_webpack_require_52900__(3111).trim;
var whitespaces = __nested_webpack_require_52900__(1361);

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ 3070:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_53573__) => {

var DESCRIPTORS = __nested_webpack_require_53573__(9781);
var IE8_DOM_DEFINE = __nested_webpack_require_53573__(4664);
var anObject = __nested_webpack_require_53573__(9670);
var toPropertyKey = __nested_webpack_require_53573__(4948);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_54470__) => {

var DESCRIPTORS = __nested_webpack_require_54470__(9781);
var propertyIsEnumerableModule = __nested_webpack_require_54470__(5296);
var createPropertyDescriptor = __nested_webpack_require_54470__(9114);
var toIndexedObject = __nested_webpack_require_54470__(5656);
var toPropertyKey = __nested_webpack_require_54470__(4948);
var has = __nested_webpack_require_54470__(6656);
var IE8_DOM_DEFINE = __nested_webpack_require_54470__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 1156:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_55510__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __nested_webpack_require_55510__(5656);
var $getOwnPropertyNames = __nested_webpack_require_55510__(8006).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8006:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_56344__) => {

var internalObjectKeys = __nested_webpack_require_56344__(6324);
var enumBugKeys = __nested_webpack_require_56344__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 6324:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_57072__) => {

var has = __nested_webpack_require_57072__(6656);
var toIndexedObject = __nested_webpack_require_57072__(5656);
var indexOf = __nested_webpack_require_57072__(1318).indexOf;
var hiddenKeys = __nested_webpack_require_57072__(3501);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2140:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_58423__) => {

var isObject = __nested_webpack_require_58423__(111);

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_59109__) => {

var getBuiltIn = __nested_webpack_require_59109__(5005);
var getOwnPropertyNamesModule = __nested_webpack_require_59109__(8006);
var getOwnPropertySymbolsModule = __nested_webpack_require_59109__(5181);
var anObject = __nested_webpack_require_59109__(9670);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 1320:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_59742__) => {

var global = __nested_webpack_require_59742__(7854);
var createNonEnumerableProperty = __nested_webpack_require_59742__(8880);
var has = __nested_webpack_require_59742__(6656);
var setGlobal = __nested_webpack_require_59742__(3505);
var inspectSource = __nested_webpack_require_59742__(2788);
var InternalStateModule = __nested_webpack_require_59742__(9909);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 4488:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_61622__) => {

var global = __nested_webpack_require_61622__(7854);

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6200:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_62034__) => {

var shared = __nested_webpack_require_62034__(2309);
var uid = __nested_webpack_require_62034__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_62317__) => {

var global = __nested_webpack_require_62317__(7854);
var setGlobal = __nested_webpack_require_62317__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_62608__) => {

var IS_PURE = __nested_webpack_require_62608__(1913);
var store = __nested_webpack_require_62608__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.17.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 3111:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_63037__) => {

var requireObjectCoercible = __nested_webpack_require_63037__(4488);
var toString = __nested_webpack_require_63037__(1340);
var whitespaces = __nested_webpack_require_63037__(1361);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 1400:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_64200__) => {

var toInteger = __nested_webpack_require_64200__(9958);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_64724__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_64724__(8361);
var requireObjectCoercible = __nested_webpack_require_64724__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9958:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 7466:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_65363__) => {

var toInteger = __nested_webpack_require_65363__(9958);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_65745__) => {

var requireObjectCoercible = __nested_webpack_require_65745__(4488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_66063__) => {

var isObject = __nested_webpack_require_66063__(111);
var isSymbol = __nested_webpack_require_66063__(2190);
var ordinaryToPrimitive = __nested_webpack_require_66063__(2140);
var wellKnownSymbol = __nested_webpack_require_66063__(5112);

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_66976__) => {

var toPrimitive = __nested_webpack_require_66976__(7593);
var isSymbol = __nested_webpack_require_66976__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ 1340:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_67373__) => {

var isSymbol = __nested_webpack_require_67373__(2190);

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 9711:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 3307:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_67891__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __nested_webpack_require_67891__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 5112:
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_68180__) => {

var global = __nested_webpack_require_68180__(7854);
var shared = __nested_webpack_require_68180__(2309);
var has = __nested_webpack_require_68180__(6656);
var uid = __nested_webpack_require_68180__(9711);
var NATIVE_SYMBOL = __nested_webpack_require_68180__(133);
var USE_SYMBOL_AS_UID = __nested_webpack_require_68180__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 1361:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 9554:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_69364__) => {

"use strict";

var $ = __nested_webpack_require_69364__(2109);
var forEach = __nested_webpack_require_69364__(8533);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 2772:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_69817__) => {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __nested_webpack_require_69817__(2109);
var $indexOf = __nested_webpack_require_69817__(1318).indexOf;
var arrayMethodIsStrict = __nested_webpack_require_69817__(9341);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 561:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_70744__) => {

"use strict";

var $ = __nested_webpack_require_70744__(2109);
var toAbsoluteIndex = __nested_webpack_require_70744__(1400);
var toInteger = __nested_webpack_require_70744__(9958);
var toLength = __nested_webpack_require_70744__(7466);
var toObject = __nested_webpack_require_70744__(7908);
var arraySpeciesCreate = __nested_webpack_require_70744__(5417);
var createProperty = __nested_webpack_require_70744__(6135);
var arrayMethodHasSpeciesSupport = __nested_webpack_require_70744__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 9070:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_73385__) => {

var $ = __nested_webpack_require_73385__(2109);
var DESCRIPTORS = __nested_webpack_require_73385__(9781);
var objectDefinePropertyModile = __nested_webpack_require_73385__(3070);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ 3371:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_73856__) => {

var $ = __nested_webpack_require_73856__(2109);
var FREEZING = __nested_webpack_require_73856__(6677);
var fails = __nested_webpack_require_73856__(7293);
var isObject = __nested_webpack_require_73856__(111);
var onFreeze = __nested_webpack_require_73856__(2423).onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 4678:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_74585__) => {

var $ = __nested_webpack_require_74585__(2109);
var parseFloatImplementation = __nested_webpack_require_74585__(2814);

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ 4747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_74976__) => {

var global = __nested_webpack_require_74976__(7854);
var DOMIterables = __nested_webpack_require_74976__(8324);
var DOMTokenListPrototype = __nested_webpack_require_74976__(8509);
var forEach = __nested_webpack_require_74976__(8533);
var createNonEnumerableProperty = __nested_webpack_require_74976__(8880);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 2564:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nested_webpack_require_75847__) => {

var $ = __nested_webpack_require_75847__(2109);
var global = __nested_webpack_require_75847__(7854);
var userAgent = __nested_webpack_require_75847__(8113);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_77241__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_77241__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_77241__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;


__nested_webpack_require_77241__(9070);

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = factory;

__nested_webpack_require_77241__(3371);

var _imaLoader = _interopRequireDefault(__nested_webpack_require_77241__(7400));

var _imaPlayer = _interopRequireDefault(__nested_webpack_require_77241__(6676));

var _utils = __nested_webpack_require_77241__(9853);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// IMA ad player factory
function factory(options, cb) {
  (0, _imaLoader["default"])(function (success) {
    if (!success) {
      return cb(null, new Error('Failed to load IMA SDK'));
    }

    cb(new _imaPlayer["default"](options), null);
  }, (0, _utils.makeNum)(options.timeout, 6000), !!options.debug);
} // Make VPAID modes available before player instanciation (read only)


factory.vpaidMode = Object.freeze(_imaPlayer["default"].vpaidMode);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 26 26\" style=\"enable-background:new 0 0 26 26;\" xml:space=\"preserve\"><circle class=\"ad-inflow-modal-close-circle \" cx=\"13\" cy=\"13\" r=\"12\"></circle><path class=\"ad-inflow-modal-close-cross \" d=\"M13.1,11.7l2.7-2.7c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-2.7,2.7l2.7,2.7 c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-2.7-2.7l-2.7,2.7c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l2.7-2.7l-2.7-2.7 c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L13.1,11.7z\"></path></svg>"

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\"><path class=\"ad-inflow-modal-overlay-play \" d=\"M204,369.75L357,255L204,140.25V369.75z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255 S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z\" fill=\"#FFFFFF\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var _dom = __webpack_require__(950);

var _dummy = __webpack_require__(585);

var _bodyLocker = _interopRequireDefault(__webpack_require__(976));

var _detectMobile = _interopRequireDefault(__webpack_require__(553));

var _canAutoplay = _interopRequireDefault(__webpack_require__(700));

var _imaAdPlayer = _interopRequireDefault(__webpack_require__(752));

__webpack_require__(281);

var _close2 = _interopRequireDefault(__webpack_require__(695));

var _play = _interopRequireDefault(__webpack_require__(470));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isMobile = (0, _detectMobile["default"])();

var AdInflowModal = /*#__PURE__*/function () {
  function AdInflowModal(options) {
    var _this = this;

    _classCallCheck(this, AdInflowModal);

    this._e = {};
    this._t = {};
    this._body = new _bodyLocker["default"]();

    this._configure(options);

    this._onClose = function () {
      _this.close();
    };

    this._onPlayIntent = function () {
      _this._hidePlayOverlay();

      _this._adPlayer.play();
    };
  }

  _createClass(AdInflowModal, [{
    key: "_configure",
    value: function _configure(o) {
      o.closeButtonDelay || (o.closeButtonDelay = 5000);
      o.skipAdIfNoAutoplay || (o.skipAdIfNoAutoplay = false);
      o.canAutoplayTimeout || (o.canAutoplayTimeout = 1000);
      o.logAdPlayerErrors || (o.logAdPlayerErrors = true);
      o.destroyTimeout || (o.destroyTimeout = 10000);
      o.openOnInteractionIfNoAutoplay || (o.openOnInteractionIfNoAutoplay = false);

      if (!o.imaAdPlayer) {
        throw new Error('AdInflowModal error: ima ad player configuration is missing');
      }

      this._o = o;
    }
  }, {
    key: "open",
    value: function open() {
      this._makeModal();

      this._appendModal();

      this._makeAdPlayer();
    }
  }, {
    key: "close",
    value: function close() {
      if (this._adPlayer) {
        this._adPlayer.stop();
      } else {
        this._close();
      }
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (this._e.content) {
        this._e.content.setAttribute('style', 'width:' + width + 'px;height:' + height + 'px;');

        this._adPlayer && this._adPlayer.resize(width, height);
      }
    }
  }, {
    key: "_makeModal",
    value: function _makeModal() {
      var _this2 = this;

      if (this._e.modal) {
        this._clearAllTimeout(function () {
          _this2._removeModal();

          _this2._destroyAdPlayer();
        });
      }

      this._e.modal = (0, _dom.make)('div', {
        "class": 'ad-inflow-modal'
      });
      this._e.content = (0, _dom.make)('div', {
        "class": 'ad-inflow-modal-content'
      });
      this._e.close = (0, _dom.make)('span', {
        "class": 'ad-inflow-modal-close',
        html: _close2["default"]
      });

      this._e.modal.appendChild(this._e.content);

      this._e.ad = (0, _dom.make)('div', {
        "class": 'ad-inflow'
      });
      this._e.adContainerVideo = (0, _dom.make)('div', {
        "class": 'ad-inflow-container-video'
      });
      this._e.adVideo = (0, _dom.make)('video', {
        "class": 'ad-inflow-video',
        attr: {
          playsinline: null,
          src: _dummy.video.source,
          poster: _dummy.svg.source
        }
      });
      this._e.adContainer = (0, _dom.make)('div', {
        "class": 'ad-inflow-container'
      });
      this._e.adOverlay = (0, _dom.make)('div', {
        "class": 'ad-inflow-overlay'
      });
      this._e.adOverlayIcon = (0, _dom.make)('div', {
        "class": 'ad-inflow-overlay-icon',
        html: _play["default"]
      });

      this._e.adOverlay.appendChild(this._e.adOverlayIcon);

      this._e.adContainerVideo.appendChild(this._e.adVideo);

      this._e.ad.appendChild(this._e.adContainerVideo);

      this._e.ad.appendChild(this._e.adContainer);

      this._e.ad.appendChild(this._e.adOverlay);

      this._e.content.appendChild(this._e.ad);

      this._e.content.appendChild(this._e.close);
    }
  }, {
    key: "_appendModal",
    value: function _appendModal() {
      if (document.body && this._e.modal) {
        document.body.appendChild(this._e.modal);

        this._e.close.addEventListener('click', this._onClose);
      }
    }
  }, {
    key: "_removeModal",
    value: function _removeModal() {
      if (document.body && this._e.modal) {
        this._e.close.removeEventListener('click', this._onClose);

        this._e.modal = document.body.removeChild(this._e.modal);
      }

      this._e = {};
    }
  }, {
    key: "_handlePlayerError",
    value: function _handlePlayerError(o) {
      var e = o;

      if (e.data) {
        e = e.data;
      }

      if (e.getError) {
        e = e.getError();
      }

      if (e.toString) {
        e = e.toString();
      }

      try {
        console.log('ad-inflow-modal:', e);
      } catch (err) {} // eslint-disable-line no-empty

    }
  }, {
    key: "_makeAdPlayer",
    value: function _makeAdPlayer() {
      var _this3 = this;

      // Assumes "this._o.imaAdPlayer" is configuration object
      this._o.imaAdPlayer.video = this._e.adVideo;
      this._o.imaAdPlayer.displayContainer = this._e.adContainer;
      (0, _imaAdPlayer["default"])(this._o.imaAdPlayer, function (player, error) {
        if (error) {
          // Ad player creation failed
          _this3._o.logAdPlayerErrors && _this3._handlePlayerError(error);
          return _this3._destroy();
        }

        _this3._adPlayer = player;

        _this3._handleAutoplay(_this3._o.canAutoplayTimeout);
      });
    }
  }, {
    key: "_destroyAdPlayer",
    value: function _destroyAdPlayer() {
      if (this._adPlayer) {
        delete this._adPlayer;
      }
    }
  }, {
    key: "_handleAutoplay",
    value: function _handleAutoplay(timeout) {
      var _this4 = this;

      if (isMobile) {
        this._open(false);
      } else {
        (0, _canAutoplay["default"])(function (result
        /*error*/
        ) {
          _this4._open(result);
        }, timeout);
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      this._e.modal && (0, _dom.addOneClass)(this._e.modal, 'ad-inflow-modal-show');
    }
  }, {
    key: "_hide",
    value: function _hide() {
      this._e.modal && (0, _dom.removeClass)(this._e.modal, 'ad-inflow-modal-show');
    }
  }, {
    key: "_open",
    value: function _open(autoplay) {
      var _this5 = this;

      if (!autoplay && this._o.skipAdIfNoAutoplay) {
        return this._destroy();
      }

      if (!autoplay && this._o.requestAdIfNoAutoplay) {
        this._adPlayer.request();
      }

      if (this._o.logAdPlayerErrors) {
        this._adPlayer.on('error', function (o) {
          _this5._handlePlayerError(o);
        });

        this._adPlayer.on('ad_error', function (o) {
          _this5._handlePlayerError(o);
        });
      }

      this._adPlayer.on('started', function () {
        _this5._showCloseButton(_this5._o.closeButtonDelay);
      });

      this._adPlayer.on('ad_end', function () {
        _this5._close();
      });

      if (autoplay || this._o.openOnInteractionIfNoAutoplay) {
        // Modal will show up on "ad begin" ad player event
        this._adPlayer.on('ad_begin', function () {
          _this5._show();

          _this5._body.lock();
        });
      }

      if (autoplay) {
        this._adPlayer.play();
      } else if (this._o.openOnInteractionIfNoAutoplay) {
        // Will attempt to play on user action
        this._body.prevent(function () {
          _this5._adPlayer.play();
        });
      } else {
        // Play must be done via a user action
        this._show();

        this._body.lock();

        this._showPlayOverlay();
      }
    }
  }, {
    key: "_showCloseButton",
    value: function _showCloseButton(delay) {
      var _this6 = this;

      this._t.close = setTimeout(function () {
        _this6._e.close && (0, _dom.addOneClass)(_this6._e.close, 'ad-inflow-modal-close-show');
      }, delay);
    }
  }, {
    key: "_hideCloseButton",
    value: function _hideCloseButton() {
      this._e.close && (0, _dom.removeClass)(this._e.close, 'ad-inflow-modal-close-show');
    }
  }, {
    key: "_showPlayOverlay",
    value: function _showPlayOverlay() {
      if (this._e.adOverlay) {
        this._e.adOverlay.addEventListener('click', this._onPlayIntent);

        (0, _dom.addOneClass)(this._e.adOverlay, 'ad-inflow-overlay-show');
      }
    }
  }, {
    key: "_hidePlayOverlay",
    value: function _hidePlayOverlay() {
      if (this._e.adOverlay) {
        this._e.adOverlay.removeEventListener('click', this._onPlayIntent);

        (0, _dom.removeClass)(this._e.adOverlay, 'ad-inflow-overlay-show');
      }
    }
  }, {
    key: "_close",
    value: function _close() {
      this._hideCloseButton();

      this._hide();

      this._body.unlock();

      this._destroy(this._o.destroyTimeout);
    }
  }, {
    key: "_clearAllTimeout",
    value: function _clearAllTimeout(next) {
      for (var t in this._t) {
        if (typeof this._t[t] === 'number') {
          clearTimeout(this._t[t]);
        }
      }

      this._t = {};
      next();
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this7 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this._clearAllTimeout(function () {
        if (delay > -1) {
          _this7._t.destroy = setTimeout(function () {
            _this7._removeModal();

            _this7._destroyAdPlayer();
          }, delay);
        }
      });
    }
  }], [{
    key: "vpaidMode",
    get: function get() {
      return _imaAdPlayer["default"].vpaidMode;
    }
  }]);

  return AdInflowModal;
}();

exports["default"] = AdInflowModal;
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});