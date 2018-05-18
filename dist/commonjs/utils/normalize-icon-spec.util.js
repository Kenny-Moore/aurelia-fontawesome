'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.faNormalizeIconSpec = undefined;

var _isIconLookup = require('./is-icon-lookup.util');

var faNormalizeIconSpec = exports.faNormalizeIconSpec = function faNormalizeIconSpec(iconSpec) {
  var defaultPrefix = 'fas';

  if (typeof iconSpec === 'undefined' || iconSpec === null) {
    return null;
  }

  if ((0, _isIconLookup.isIconLookup)(iconSpec)) {
    return iconSpec;
  }

  if (Array.isArray(iconSpec) && iconSpec.length === 2) {
    return { prefix: iconSpec[0], iconName: iconSpec[1] };
  }

  if (typeof iconSpec === 'string') {
    return { prefix: defaultPrefix, iconName: iconSpec };
  }
};