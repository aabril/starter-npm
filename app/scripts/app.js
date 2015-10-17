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
