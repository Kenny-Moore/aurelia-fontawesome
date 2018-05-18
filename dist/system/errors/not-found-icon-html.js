'use strict';

System.register(['@fortawesome/fontawesome'], function (_export, _context) {
  "use strict";

  var config, faNotFoundIconHtml;
  return {
    setters: [function (_fortawesomeFontawesome) {
      config = _fortawesomeFontawesome.config;
    }],
    execute: function () {
      _export('faNotFoundIconHtml', faNotFoundIconHtml = '<svg class="' + config.replacementClass + '" viewBox="0 0 448 512"></svg><!--icon not found-->');

      _export('faNotFoundIconHtml', faNotFoundIconHtml);
    }
  };
});