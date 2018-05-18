"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var faWarnIfIconHtmlMissing;
  return {
    setters: [],
    execute: function () {
      _export("faWarnIfIconHtmlMissing", faWarnIfIconHtmlMissing = function faWarnIfIconHtmlMissing(iconObj, iconSpec) {
        if (iconSpec && !iconObj) {
          console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
        }
      });

      _export("faWarnIfIconHtmlMissing", faWarnIfIconHtmlMissing);
    }
  };
});