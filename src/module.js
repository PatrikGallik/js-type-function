/**
 * Type function
 * Create your function with arguments type check.
 *
 * @author   Patrik Gallik (<https://github.com/PatrikGallik>)
 * @version  0.0.1
 * @license  MIT
 */

;(function (global) {
	'use strict'

  function _isString(variable) {
    return toString.call(variable) == '[object String]';
  }

  function _isNumber(variable) {
    return toString.call(variable) == '[object Number]';
  }

  function _isFunction(variable) {
    return toString.call(variable) == '[object Function]';
  }

  function _checkType(type, variable) {
    if (type === 'String') {
      return _isString(variable);
    } else if (type === 'Number') {
      return _isNumber(variable);
    } else if (type == 'Function') {
      return _isFunction(variable);
    } else {
      return false;
    }
  }

	var TypeFunction = {
		create: function(parameters, body) {
			return function() {
        var passed = true;
        console.log(arguments);

        for (var _i = 0; _i < arguments.length; _i++) {
          if (! _checkType(parameters[_i], arguments[_i])) {
            console.log('Error: bad argument: "' + arguments[_i] + '" should be ' +
              parameters[_i] + ', ' + toString.call(arguments[_i]) + ' given.');
            passed = false;
          }
        }

        var args = Array.prototype.slice(arguments);

        if (passed) {
          body.apply(this, arguments);
        } else {
          console.log('Bad arguments');
        }
      }
		}
	};

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = TypeFunction;
	} else if (typeof define === 'function' && define.amd) {
		define(function () { return TypeFunction });
	} else {
		global.TypeFunction = TypeFunction;
	}

}(typeof window !== "undefined" ? window : this));
