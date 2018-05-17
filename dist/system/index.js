'use strict';

System.register(['@fortawesome/fontawesome', './components/FontAwesomeIcon'], function (_export, _context) {
  "use strict";

  var fontawesome, FontAwesomeIcon;
  return {
    setters: [function (_fortawesomeFontawesome) {
      fontawesome = _fortawesomeFontawesome.default;
    }, function (_componentsFontAwesomeIcon) {
      FontAwesomeIcon = _componentsFontAwesomeIcon.FontAwesomeIcon;
      var _exportObj = {};
      _exportObj.FontAwesomeIcon = _componentsFontAwesomeIcon.FontAwesomeIcon;

      _export(_exportObj);
    }],
    execute: function () {

      fontawesome.noAuto();

      _export('fontawesome', fontawesome);

      _export('default', FontAwesomeIcon);
    }
  };
});