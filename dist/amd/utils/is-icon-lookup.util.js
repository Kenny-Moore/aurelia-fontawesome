define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var isIconLookup = exports.isIconLookup = function isIconLookup(i) {
    return i.prefix !== undefined && i.iconName !== undefined;
  };
});