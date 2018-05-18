'use strict';

System.register(['./is-icon-lookup.util'], function (_export, _context) {
  "use strict";

  var isIconLookup, faNormalizeIconSpec;
  return {
    setters: [function (_isIconLookupUtil) {
      isIconLookup = _isIconLookupUtil.isIconLookup;
    }],
    execute: function () {
      _export('faNormalizeIconSpec', faNormalizeIconSpec = function faNormalizeIconSpec(iconSpec) {
        var defaultPrefix = 'fas';

        if (typeof iconSpec === 'undefined' || iconSpec === null) {
          return null;
        }

        if (isIconLookup(iconSpec)) {
          return iconSpec;
        }

        if (Array.isArray(iconSpec) && iconSpec.length === 2) {
          return { prefix: iconSpec[0], iconName: iconSpec[1] };
        }

        if (typeof iconSpec === 'string') {
          return { prefix: defaultPrefix, iconName: iconSpec };
        }
      });

      _export('faNormalizeIconSpec', faNormalizeIconSpec);
    }
  };
});