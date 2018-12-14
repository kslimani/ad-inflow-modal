(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AdInflowModal"] = factory();
	else
		root["AdInflowModal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str = str;
exports.el = el;
exports.addOneClass = addOneClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
exports.attr = attr;
exports.make = make;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  if (o.class) {
    e = addClass(e, o.class);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = __webpack_require__(0);

var _bodyLocker = _interopRequireDefault(__webpack_require__(2));

var _detectMobile = _interopRequireDefault(__webpack_require__(3));

var _canAutoplay = _interopRequireDefault(__webpack_require__(4));

var _imaAdPlayer = _interopRequireDefault(__webpack_require__(6));

__webpack_require__(7);

var _close2 = _interopRequireDefault(__webpack_require__(8));

var _play = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isMobile = (0, _detectMobile.default)();

var AdInflowModal =
/*#__PURE__*/
function () {
  function AdInflowModal(options) {
    var _this = this;

    _classCallCheck(this, AdInflowModal);

    this._e = {};
    this._t = {};
    this._body = new _bodyLocker.default();

    this._configure(options);

    this._onClose = function () {
      _this.close();
    };

    this._onPlayIntent = function (e) {
      _this._hidePlayOverlay();

      _this._showCloseButton(_this._o.closeButtonDelay);

      _this._adPlayer.play();
    };
  }

  _createClass(AdInflowModal, [{
    key: "_configure",
    value: function _configure(o) {
      o.closeButtonDelay || (o.closeButtonDelay = 5000);
      o.skipAdIfNoAutoplay || (o.skipAdIfNoAutoplay = false);
      o.canAutoplayTimeout || (o.canAutoplayTimeout = 1000);

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
        class: 'ad-inflow-modal'
      });
      this._e.content = (0, _dom.make)('div', {
        class: 'ad-inflow-modal-content'
      });
      this._e.close = (0, _dom.make)('span', {
        class: 'ad-inflow-modal-close',
        html: _close2.default
      });

      this._e.modal.appendChild(this._e.content);

      this._e.ad = (0, _dom.make)('div', {
        class: 'ad-inflow'
      });
      this._e.adContainerVideo = (0, _dom.make)('div', {
        class: 'ad-inflow-container-video'
      });
      this._e.adVideo = (0, _dom.make)('video', {
        class: 'ad-inflow-video',
        attr: {
          playsinline: null
        }
      });
      this._e.adContainer = (0, _dom.make)('div', {
        class: 'ad-inflow-container'
      });
      this._e.adOverlay = (0, _dom.make)('div', {
        class: 'ad-inflow-overlay'
      });
      this._e.adOverlayText = (0, _dom.make)('div', {
        class: 'ad-inflow-overlay-text',
        html: _play.default
      });

      this._e.adOverlay.appendChild(this._e.adOverlayText);

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
    key: "_makeAdPlayer",
    value: function _makeAdPlayer() {
      var _this3 = this;

      // Assumes "this._o.imaAdPlayer" is configuration object
      this._o.imaAdPlayer.video = this._e.adVideo;
      this._o.imaAdPlayer.displayContainer = this._e.adContainer;
      (0, _imaAdPlayer.default)(this._o.imaAdPlayer, function (player, error) {
        if (error) {
          // Ad player creation failed
          console.log(error);
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
        (0, _canAutoplay.default)(function (result, error) {
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

      this._adPlayer.on('ad_end', function (o) {
        _this5._close();
      });

      this._show();

      this._body.lock();

      if (autoplay) {
        this._showCloseButton(this._o.closeButtonDelay);

        this._adPlayer.play();
      } else {
        // Play must be done via a user action on mobile devices
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

      this._destroy(10000);
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
        _this7._t.destroy = setTimeout(function () {
          _this7._removeModal();

          _this7._destroyAdPlayer();
        }, delay);
      });
    }
  }]);

  return AdInflowModal;
}();

exports.default = AdInflowModal;
module.exports = exports.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BodyLocker =
/*#__PURE__*/
function () {
  function BodyLocker() {
    _classCallCheck(this, BodyLocker);

    this._e = 'touchmove';
    this._c = 'ad-inflow-body';

    this._prevent = function (e) {
      e.preventDefault();
    };
  }

  _createClass(BodyLocker, [{
    key: "lock",
    value: function lock() {
      (0, _dom.addOneClass)(document.body, this._c);
      document.body.addEventListener(this._e, this._prevent, {
        passive: false
      });
    }
  }, {
    key: "unlock",
    value: function unlock() {
      (0, _dom.removeClass)(document.body, this._c);
      document.body.removeEventListener(this._e, this._prevent, {
        passive: false
      });
    }
  }]);

  return BodyLocker;
}();

exports.default = BodyLocker;
module.exports = exports.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectMobile;

// detect-mobile.js
// Regular Expression: http://detectmobilebrowsers.com/
function detectMobile() {
  var match = navigator.userAgent || navigator.vendor || window.opera;
  return !!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(match) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(match.substr(0, 4)));
}

module.exports = exports.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _dom = __webpack_require__(0);

var _videoBlob = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// can-autoplay.js
// Create once the video element to avoid to set source each time can-autoplay function is called
// This fix an issue where play() is called when source is not fully loaded
// Note: a possible alternative *could* be to call load() after set source
var element = (0, _dom.make)('video', {
  attr: {
    playsinline: null,
    src: (0, _videoBlob.default)().source
  }
});

function _default(cb) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var promise = element.play();
  var timeoutId = setTimeout(function () {
    canAutoplay(false, new Error('Timeout ' + timeout + ' ms has been reached'));
  }, timeout);

  var canAutoplay = function canAutoplay(result) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    clearTimeout(timeoutId);
    cb(result, error);
  };

  if (promise !== undefined) {
    promise.then(function () {
      return canAutoplay(true);
    }).catch(function (err) {
      return canAutoplay(false, err);
    });
  } else {
    canAutoplay(true);
  }
}

module.exports = exports.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
// video-blob.js
// Video: https://github.com/mathiasbynens/small
var VIDEO = 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE='; // base64toBlob: https://github.com/video-dev/can-autoplay

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

var blob = base64toBlob(VIDEO);
var sourceObj = {
  source: URL.createObjectURL(blob),
  mimeType: blob.type
};

function _default() {
  return sourceObj;
}

module.exports = exports.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.makeNum = makeNum;
exports.makeDefault = makeDefault;

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _imaLoader = _interopRequireDefault(__webpack_require__(2));

var _imaPlayer = _interopRequireDefault(__webpack_require__(3));

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IMA ad player factory
function _default(options, cb) {
  (0, _imaLoader.default)(function (success) {
    if (!success) {
      return cb(null, new Error('Failed to load IMA SDK'));
    }

    cb(new _imaPlayer.default(options), null);
  }, (0, _utils.makeNum)(options.timemout, 6000), !!options.debug);
}

module.exports = exports.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

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

module.exports = exports.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

var _observable = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImaPlayer =
/*#__PURE__*/
function () {
  function ImaPlayer(options) {
    _classCallCheck(this, ImaPlayer);

    this._configure(options);

    this._evt = new _observable.default(); // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.setVpaidMode

    google.ima.settings.setVpaidMode(this._vpaidMode); // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.ImaSdkSettings.setLocale

    if (this._o.locale) {
      google.ima.settings.setLocale(this._o.locale);
    } // Assumes the display container and video element are correctly positioned and sized
    // https://developers.google.com/interactive-media-ads/docs/sdks/html5/#html


    this._adDisplayContainer = new google.ima.AdDisplayContainer(this._o.displayContainer, this._o.video);
  }

  _createClass(ImaPlayer, [{
    key: "_configure",
    value: function _configure(o) {
      this._o = {
        displayContainer: o.displayContainer,
        video: o.video,
        tag: o.tag
      };
      this._o.vpaidMode = (0, _utils.makeNum)(o.vpaidMode, 0);

      if (o.maxDuration) {
        this._o.maxDuration = (0, _utils.makeNum)(o.maxDuration, undefined);
      } // Assumes by default that the playback is consented by user


      this._o.adWillAutoPlay = !!(0, _utils.makeDefault)(o.adWillAutoPlay, true);
      this._o.adWillPlayMuted = !!(0, _utils.makeDefault)(o.adWillPlayMuted, false); // Default is to tell the SDK NOT to save and restore content video state

      this._o.restoreVideo = !!(0, _utils.makeDefault)(o.restoreVideo, false);
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

      if (this._o.video && this._o.video.load) {
        this._o.video.load();
      } // Must be done via a user action on mobile devices


      this._adDisplayContainer.initialize();

      this._requestAd();
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (this._adsManager) {
        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdsManager.resize
        this._adsManager.resize(width, height, google.ima.ViewMode.NORMAL);
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      if (this._adsManager) {
        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdsManager.setVolume      
        this._adsManager.setVolume(volume);
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
        _this._onAdError(e);
      });
    }
  }, {
    key: "_requestAd",
    value: function _requestAd() {
      if (!this._adsLoader) {
        this._makeAdsLoader();
      }

      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = this._o.tag;
      adsRequest.linearAdSlotWidth = this._o.video.offsetWidth;
      adsRequest.linearAdSlotHeight = this._o.video.offsetHeight;
      adsRequest.nonLinearAdSlotWidth = this._o.video.offsetWidth;
      adsRequest.nonLinearAdSlotHeight = this._o.video.offsetHeight;
      adsRequest.setAdWillAutoPlay(this._o.adWillAutoPlay);
      adsRequest.setAdWillPlayMuted(this._o.adWillPlayMuted); // The requestAds() method triggers _onAdsManagerLoaded() or _onAdError()

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

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () {
        _this2._dispatch('content_resume_requested');

        _this2._endAd();
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () {
        _this2._dispatch('content_pause_requested');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, function () {
        _this2._dispatch('loaded');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, function () {
        _this2._dispatch('click');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function () {
        _this2._dispatch('impression');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, function (e) {
        if (!e.getAd().isLinear()) {
          _this2._dispatch('error', new Error('Non-linear ad is not supported'));

          return _this2.stop();
        } else {
          _this2._o.maxDuration && _this2._startMaxDurationTimer();
        }

        _this2._dispatch('started');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, function () {
        _this2._dispatch('first_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, function () {
        _this2._dispatch('midpoint');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, function () {
        _this2._dispatch('third_quartile');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, function () {
        _this2._dispatch('complete');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, function () {
        _this2._dispatch('paused');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, function () {
        _this2._dispatch('resumed');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, function () {
        _this2._dispatch('skipped');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, function () {
        _this2._dispatch('volume_changed');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, function () {
        _this2._dispatch('volume_muted');
      });

      this._adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, function () {
        _this2._dispatch('user_close');
      });
    }
  }, {
    key: "_onAdsManagerLoaded",
    value: function _onAdsManagerLoaded(adsManagerLoadedEvent) {
      var adsRenderingSettings = new google.ima.AdsRenderingSettings();
      adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = this._o.restoreVideo;

      this._destroyAdsManager();

      this._adsManager = adsManagerLoadedEvent.getAdsManager(this._o.video, adsRenderingSettings);

      this._bindAdsManagerEvents();

      this._playAd();
    }
  }, {
    key: "stop",
    value: function stop() {
      this._dispatch('ad_stop');

      if (this._adsManager) {
        // Signal ads manager to stop and get back to content
        this._adsManager.stop();
      } else {
        this._endAd();
      }
    }
  }, {
    key: "_onMaxDuration",
    value: function _onMaxDuration() {
      this._dispatch('error', new Error('Maximum duration of ' + this._o.maxDuration + ' ms reached'));

      this.stop();
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
      // google.ima.AdErrorEvent : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdErrorEvent
      // google.ima.AdError : https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdError
      // console.log('onAdError: ' + adErrorEvent.getError())
      this._dispatch('ad_error', adErrorEvent);

      this._endAd();
    }
  }, {
    key: "_playAd",
    value: function _playAd() {
      try {
        this._end = false;

        this._dispatch('ad_play');

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
      if (this._end) {
        return;
      }

      this._end = true;

      this._resetMaxDurationTimer();

      this._dispatch('ad_end');
    }
  }, {
    key: "_vpaidMode",
    get: function get() {
      if (this._o.vpaidMode === 0) {
        return google.ima.ImaSdkSettings.VpaidMode.DISABLED;
      }

      if (this._o.vpaidMode > 1) {
        return google.ima.ImaSdkSettings.VpaidMode.INSECURE;
      }

      return google.ima.ImaSdkSettings.VpaidMode.ENABLED;
    }
  }]);

  return ImaPlayer;
}();

exports.default = ImaPlayer;
module.exports = exports.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// observable.js
var Observable =
/*#__PURE__*/
function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.observers = {};
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
    value: function unsubscribeAll(n) {
      if (this.observers[n]) {
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

exports.default = Observable;
module.exports = exports.default;

/***/ })
/******/ ]);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 26 26\" style=\"enable-background:new 0 0 26 26;\" xml:space=\"preserve\"><circle class=\"ad-inflow-modal-close-circle \" cx=\"13\" cy=\"13\" r=\"12\"></circle><path class=\"ad-inflow-modal-close-cross \" d=\"M13.1,11.7l2.7-2.7c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-2.7,2.7l2.7,2.7 c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-2.7-2.7l-2.7,2.7c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l2.7-2.7l-2.7-2.7 c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L13.1,11.7z\"></path></svg>"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\"><path class=\"ad-inflow-modal-overlay-play \" d=\"M204,369.75L357,255L204,140.25V369.75z M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255 S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z\" fill=\"#FFFFFF\"></path></svg>"

/***/ })
/******/ ]);
});