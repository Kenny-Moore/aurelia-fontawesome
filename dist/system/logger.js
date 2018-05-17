'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var PRODUCTION;

  _export('default', function () {
    if (!PRODUCTION && console && typeof console.error === 'function') {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  });

  return {
    setters: [],
    execute: function () {
      PRODUCTION = false;


      try {
        PRODUCTION = process.env.NODE_ENV === 'production';
      } catch (e) {}
    }
  };
});