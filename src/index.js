// for @babel-polyfill
// quote from babel doc: As of Babel 7.4.0, this package 
// has been deprecated in favor of directly including core-js/stable 
// (to polyfill ECMAScript features) and
// regenerator-runtime/runtime (needed to use transpiled generator functions):

import "core-js/stable";
import "regenerator-runtime/runtime";

const a = 'a';
console.log(a);

const b = new Promise((resolve, reject) => {
  resolve('success');
});