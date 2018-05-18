"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var faWarnIfParentNotExist = exports.faWarnIfParentNotExist = function faWarnIfParentNotExist(parent, parentName, childName) {
  if (!parent) {
    console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
  }
};