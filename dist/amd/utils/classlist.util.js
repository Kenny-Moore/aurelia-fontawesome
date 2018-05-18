define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var faClassList = exports.faClassList = function faClassList(props) {
    var _classes;

    var classes = (_classes = {
      'fa-spin': props.spin,
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-inverse': props.inverse,
      'fa-layers-counter': props.counter,
      'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, _classes['fa-' + props.size] = props.size !== null, _classes['fa-rotate-' + props.rotate] = props.rotate !== null, _classes['fa-pull-' + props.pull] = props.pull !== null, _classes);

    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  };
});