"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var isIconLookup;
  return {
    setters: [],
    execute: function () {
      _export("isIconLookup", isIconLookup = function isIconLookup(i) {
        return i.prefix !== undefined && i.iconName !== undefined;
      });

      _export("isIconLookup", isIconLookup);
    }
  };
});