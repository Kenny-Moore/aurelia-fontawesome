"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var objectWithKey;
  return {
    setters: [],
    execute: function () {
      _export("objectWithKey", objectWithKey = function objectWithKey(key, value) {
        var _ref;

        return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? (_ref = {}, _ref[key] = value, _ref) : {};
      });

      _export("objectWithKey", objectWithKey);
    }
  };
});