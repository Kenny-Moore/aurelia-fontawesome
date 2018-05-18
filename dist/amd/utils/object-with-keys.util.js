define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var objectWithKey = exports.objectWithKey = function objectWithKey(key, value) {
    var _ref;

    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? (_ref = {}, _ref[key] = value, _ref) : {};
  };
});