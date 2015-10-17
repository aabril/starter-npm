(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * scripts/main.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

function Main() {
  console.log('main initialized');
}

Main.prototype.beep = function () {
  console.log('hello you !');
};

module.exports = Main;

},{}],2:[function(require,module,exports){
/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 * See https://babeljs.io/docs/learn-es2015/ for info on ES6
 */

'use strict';

// ES5 (default)
var App = require('./Main.js');
var Const = require('./utils/Const.js');

// ES6 (careful - do not use 'use strict' statement)
// import App from './Main';
// import Const from './utils/Const';

var app = new App();

app.beep();

},{"./Main.js":1,"./utils/Const.js":3}],3:[function(require,module,exports){
'use strict';

// all constants
var Const = {

	//Place your constants here

};

module.exports = Const;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVyZW0vU2l0ZXMvc3RhcnRlci1ucG0vYXBwL3NjcmlwdHMvTWFpbi5qcyIsIi9Vc2Vycy9qZXJlbS9TaXRlcy9zdGFydGVyLW5wbS9hcHAvc2NyaXB0cy9hcHAuanMiLCIvVXNlcnMvamVyZW0vU2l0ZXMvc3RhcnRlci1ucG0vYXBwL3NjcmlwdHMvdXRpbHMvQ29uc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDT0EsWUFBWSxDQUFDOztBQUViLFNBQVMsSUFBSSxHQUFHO0FBQ2QsU0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0NBQ2pDOztBQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVk7QUFDaEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztDQUM1QixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7OztBQ1R0QixZQUFZLENBQUM7OztBQUdiLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7O0FBTXhDLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0FBRXBCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O0FDcEJYLFlBQVksQ0FBQzs7O0FBR2IsSUFBSSxLQUFLLEdBQUc7Ozs7Q0FJWCxDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogc2NyaXB0cy9tYWluLmpzXG4gKlxuICogVGhpcyBpcyBhIHNhbXBsZSBDb21tb25KUyBtb2R1bGUuXG4gKiBUYWtlIGEgbG9vayBhdCBodHRwOi8vYnJvd3NlcmlmeS5vcmcvIGZvciBtb3JlIGluZm9cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnNvbGUubG9nKCdtYWluIGluaXRpYWxpemVkJyk7XG59XG5cbk1haW4ucHJvdG90eXBlLmJlZXAgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdoZWxsbyB5b3UgIScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuIiwiLyoqXG4gKiBzY3JpcHRzL21haW4uanNcbiAqXG4gKiBUaGlzIGlzIHRoZSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBhcHBsaWNhdGlvbi5cbiAqIFRha2UgYSBsb29rIGF0IGh0dHA6Ly9icm93c2VyaWZ5Lm9yZy8gZm9yIG1vcmUgaW5mb1xuICogU2VlIGh0dHBzOi8vYmFiZWxqcy5pby9kb2NzL2xlYXJuLWVzMjAxNS8gZm9yIGluZm8gb24gRVM2XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBFUzUgKGRlZmF1bHQpXG52YXIgQXBwID0gcmVxdWlyZSgnLi9NYWluLmpzJyk7XG52YXIgQ29uc3QgPSByZXF1aXJlKCcuL3V0aWxzL0NvbnN0LmpzJyk7XG5cbi8vIEVTNiAoY2FyZWZ1bCAtIGRvIG5vdCB1c2UgJ3VzZSBzdHJpY3QnIHN0YXRlbWVudClcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9NYWluJztcbi8vIGltcG9ydCBDb25zdCBmcm9tICcuL3V0aWxzL0NvbnN0JztcblxudmFyIGFwcCA9IG5ldyBBcHAoKTtcblxuYXBwLmJlZXAoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYWxsIGNvbnN0YW50c1xudmFyIENvbnN0ID0ge1xuXG5cdC8vUGxhY2UgeW91ciBjb25zdGFudHMgaGVyZVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0O1xuIl19
