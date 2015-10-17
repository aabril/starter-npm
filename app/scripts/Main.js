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
