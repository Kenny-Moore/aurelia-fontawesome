"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var faWarnIfIconHtmlMissing = exports.faWarnIfIconHtmlMissing = function faWarnIfIconHtmlMissing(iconObj, iconSpec) {
  if (iconSpec && !iconObj) {
    console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
  }
};