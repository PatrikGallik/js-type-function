/**
 * TypeFunction
 * Create your function with arguments type check.
 *
 * @author   Patrik Gallik (<https://github.com/PatrikGallik>)
 * @version  0.0.1
 * @license  MIT
 */

;(function (global) {
	'use strict'

  function _getType(variable) {
    var type = toString.call(variable);
    return type.substring(8, type.length-1);
  }

  function _checkType(type, variable) {
    return type === _getType(variable);
  }

  function create(parameters, body) {
    return function() {
        var passed = true;

        for (var _i = 0; _i < arguments.length; _i++) {
          if (! _checkType(parameters[_i], arguments[_i])) {
            console.log('Error: bad argument: "' + arguments[_i] + '" should be ' +
              parameters[_i] + ', ' + toString.call(arguments[_i]) + ' given.');
            passed = false;
          }
        }

        if (passed) {
          body.apply(this, arguments);
        }
      }
  }

	var TypeFunction = {
		create: create
	};

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = TypeFunction;
	} else if (typeof define === 'function' && define.amd) {
		define(function () { return TypeFunction });
	} else {
		global.TypeFunction = TypeFunction;
	}

}(typeof window !== "undefined" ? window : this));
