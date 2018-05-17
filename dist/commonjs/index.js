'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontAwesomeIcon = exports.fontawesome = undefined;

var _FontAwesomeIcon = require('./components/FontAwesomeIcon');

Object.defineProperty(exports, 'FontAwesomeIcon', {
  enumerable: true,
  get: function get() {
    return _FontAwesomeIcon.FontAwesomeIcon;
  }
});

var _fontawesome = require('@fortawesome/fontawesome');

var _fontawesome2 = _interopRequireDefault(_fontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fontawesome2.default.noAuto();

exports.fontawesome = _fontawesome2.default;
exports.default = _FontAwesomeIcon.FontAwesomeIcon;