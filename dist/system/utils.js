'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function objectWithKey(key, value) {
    var _ref;

    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? (_ref = {}, _ref[key] = value, _ref) : {};
  }

  _export('objectWithKey', objectWithKey);

  function classList(props) {
    var _classes;

    var classes = (_classes = {
      'fa-spin': props.spin,
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, _classes['fa-' + props.size] = props.size !== null, _classes['fa-rotate-' + props.rotation] = props.rotation !== null, _classes['fa-pull-' + props.pull] = props.pull !== null, _classes);

    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }

  _export('classList', classList);

  function addStaticClass(to, what) {
    var val = (to || '').length === 0 ? [] : [to];

    return val.concat(what).join(' ');
  }

  _export('addStaticClass', addStaticClass);

  return {
    setters: [],
    execute: function () {}
  };
});