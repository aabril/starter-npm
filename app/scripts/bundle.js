(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * scripts/main.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

var Main = (function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: 'beep',
    value: function beep() {
      console.log('beep');
      console.log('beepbeep');
    }
  }]);

  return Main;
})();

exports.default = Main;

},{}],2:[function(require,module,exports){
'use strict';

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Const = require('./utils/Const');

var _Const2 = _interopRequireDefault(_Const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 * See https://babeljs.io/docs/learn-es2015/ for info on ES6
 */

var app = new _Main2.default();

app.beep();

},{"./Main":1,"./utils/Const":3}],3:[function(require,module,exports){
'use strict'

// all constants
;
var Const = {

	//Place your constants here

};

module.exports = Const;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9NYWluLmpzIiwiYXBwL3NjcmlwdHMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvdXRpbHMvQ29uc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ09xQixJQUFJO0FBQ3ZCLFdBRG1CLElBQUksR0FDVDswQkFESyxJQUFJO0dBR3RCOztlQUhrQixJQUFJOzsyQkFLaEI7QUFDSCxhQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLGFBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDM0I7OztTQVJrQixJQUFJOzs7a0JBQUosSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJekIsSUFBSSxHQUFHLEdBQUcsb0JBQVMsQ0FBQzs7QUFFcEIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUNiWDs7O0FBQVksQ0FBQztBQUdiLElBQUksS0FBSyxHQUFHOzs7O0NBSVgsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIHNjcmlwdHMvbWFpbi5qc1xuICpcbiAqIFRoaXMgaXMgYSBzYW1wbGUgQ29tbW9uSlMgbW9kdWxlLlxuICogVGFrZSBhIGxvb2sgYXQgaHR0cDovL2Jyb3dzZXJpZnkub3JnLyBmb3IgbW9yZSBpbmZvXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBiZWVwKCkge1xuICAgICAgY29uc29sZS5sb2coJ2JlZXAnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdiZWVwYmVlcCcpO1xuICB9XG59XG4iLCIvKipcbiAqIHNjcmlwdHMvbWFpbi5qc1xuICpcbiAqIFRoaXMgaXMgdGhlIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIGFwcGxpY2F0aW9uLlxuICogVGFrZSBhIGxvb2sgYXQgaHR0cDovL2Jyb3dzZXJpZnkub3JnLyBmb3IgbW9yZSBpbmZvXG4gKiBTZWUgaHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvbGVhcm4tZXMyMDE1LyBmb3IgaW5mbyBvbiBFUzZcbiAqL1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vTWFpbic7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi91dGlscy9Db25zdCc7XG5cbmxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbmFwcC5iZWVwKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGFsbCBjb25zdGFudHNcbnZhciBDb25zdCA9IHtcblxuXHQvL1BsYWNlIHlvdXIgY29uc3RhbnRzIGhlcmVcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdDtcbiJdfQ==
