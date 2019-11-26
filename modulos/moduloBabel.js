"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mult = exports.suma = void 0;

var suma = function suma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};

exports.suma = suma;

var mult = function mult() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a * b;
};

exports.mult = mult;