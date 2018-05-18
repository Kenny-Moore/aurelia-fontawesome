"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var faWarnIfParentNotExist;
  return {
    setters: [],
    execute: function () {
      _export("faWarnIfParentNotExist", faWarnIfParentNotExist = function faWarnIfParentNotExist(parent, parentName, childName) {
        if (!parent) {
          console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
        }
      });

      _export("faWarnIfParentNotExist", faWarnIfParentNotExist);
    }
  };
});