/**
 * TypeFunction
 * Create your function with arguments type check.
 *
 * @author   Patrik Gallik (<https://github.com/PatrikGallik>)
 * @version  0.1.0
 * @license  MIT
 */

;
(function (global) {
  'use strict';

  function _getType(variable) {
    var type = toString.call(variable);
    return type.substring(8, type.length - 1);
  }

  function _isInteger(variable) {
    return typeof variable === 'number' && (variable % 1) === 0
  }

  function _checkType(type, variable) {
    if (type === 'Integer') {
      return _isInteger(variable);
    } else {
      return type === _getType(variable);
    }
  }

  function InvalidArgumentsException(args) {
    this.invalidArguments = args;
  }

  function create(parameters, body) {
    return function () {
      var passed = true;
      var errors = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        if (!_checkType(parameters[_i], arguments[_i])) {
          var log = 'Argument: "' + arguments[_i] + '" should be ' +
            parameters[_i] + ', ' + _getType(arguments[_i]) + ' given. ';
          errors.push(log);
          passed = false;
        }
      }

      if (passed) {
        return body.apply(this, arguments);
      } else {
        throw new InvalidArgumentsException(errors);
      }
    }
  }

  var TypeFunction = {
    create: create
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = TypeFunction;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return TypeFunction
    });
  } else {
    global.TypeFunction = TypeFunction;
  }

}(typeof window !== "undefined" ? window : this));
