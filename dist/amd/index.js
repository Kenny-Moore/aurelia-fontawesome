define(['exports', './components/FontAwesomeIcon', '@fortawesome/fontawesome'], function (exports, _FontAwesomeIcon, _fontawesome) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FontAwesomeIcon = exports.fontawesome = undefined;
  Object.defineProperty(exports, 'FontAwesomeIcon', {
    enumerable: true,
    get: function () {
      return _FontAwesomeIcon.FontAwesomeIcon;
    }
  });

  var _fontawesome2 = _interopRequireDefault(_fontawesome);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _fontawesome2.default.noAuto();

  exports.fontawesome = _fontawesome2.default;
  exports.default = _FontAwesomeIcon.FontAwesomeIcon;
});