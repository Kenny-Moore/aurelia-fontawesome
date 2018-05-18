'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var faWarnIfIconSpecMissing;
  return {
    setters: [],
    execute: function () {
      _export('faWarnIfIconSpecMissing', faWarnIfIconSpecMissing = function faWarnIfIconSpecMissing(iconSpec) {
        if (!iconSpec) {
          console.error('FontAwesome: Could not find icon. ' + 'It looks like you\'ve provided a null or undefined icon object to this component.');
        }
      });

      _export('faWarnIfIconSpecMissing', faWarnIfIconSpecMissing);
    }
  };
});