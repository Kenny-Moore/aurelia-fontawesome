define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-validation', '@fortawesome/fontawesome', '../converter', '../logger', '../utils'], function (exports, _aureliaFramework, _aureliaPal, _aureliaValidation, _fontawesome, _converter, _logger, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FontAwesomeIcon = undefined;

  var _fontawesome2 = _interopRequireDefault(_fontawesome);

  var _converter2 = _interopRequireDefault(_converter);

  var _logger2 = _interopRequireDefault(_logger);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function normalizeIconArgs(icon) {
    if (icon === null) {
      return null;
    }

    if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
      return icon;
    }

    if (Array.isArray(icon) && icon.length === 2) {
      return { prefix: icon[0], iconName: icon[1] };
    }

    if (typeof icon === 'string') {
      return { prefix: 'fas', iconName: icon };
    }
  }

  var FontAwesomeIcon = exports.FontAwesomeIcon = (_dec = (0, _aureliaFramework.customElement)('font-awesome-icon'), _dec2 = (0, _aureliaFramework.observable)({ changeHandler: 'iconChanged' }), _dec(_class = (0, _aureliaFramework.containerless)(_class = (_class2 = function () {
    function FontAwesomeIcon(element) {
      _classCallCheck(this, FontAwesomeIcon);

      _initDefineProp(this, 'border', _descriptor, this);

      _initDefineProp(this, 'fixedWidth', _descriptor2, this);

      _initDefineProp(this, 'flip', _descriptor3, this);

      _initDefineProp(this, 'icon', _descriptor4, this);

      _initDefineProp(this, 'mask', _descriptor5, this);

      _initDefineProp(this, 'listItem', _descriptor6, this);

      _initDefineProp(this, 'pull', _descriptor7, this);

      _initDefineProp(this, 'pulse', _descriptor8, this);

      _initDefineProp(this, 'rotation', _descriptor9, this);

      _initDefineProp(this, 'rotation', _descriptor10, this);

      _initDefineProp(this, 'spin', _descriptor11, this);

      _initDefineProp(this, 'transform', _descriptor12, this);

      _initDefineProp(this, 'symbol', _descriptor13, this);

      this.element = element;
      debugger;
    }

    FontAwesomeIcon.prototype.iconChanged = function iconChanged(newValue, oldValue) {
      debugger;
    };

    FontAwesomeIcon.prototype.attached = function attached() {
      debugger;
      this.render(this.element, this);
    };

    FontAwesomeIcon.prototype.render = function render(createElement, context) {
      debugger;
      var props = context.props;
      var iconArgs = props.icon,
          maskArgs = props.mask,
          symbol = props.symbol;

      var icon = normalizeIconArgs(iconArgs);
      var classes = (0, _utils.objectWithKey)('classes', (0, _utils.classList)(props));
      var transform = (0, _utils.objectWithKey)('transform', typeof props.transform === 'string' ? _fontawesome2.default.parse.transform(props.transform) : props.transform);
      var mask = (0, _utils.objectWithKey)('mask', normalizeIconArgs(maskArgs));

      var renderedIcon = _fontawesome2.default.icon(icon, _extends({}, classes, transform, mask, { symbol: symbol }));

      if (!renderedIcon) {
        return (0, _logger2.default)('Could not find one or more icon(s)', icon, mask);
      }

      var abstract = renderedIcon.abstract;

      var convertCurry = _converter2.default.bind(null, createElement);

      return convertCurry(abstract[0], {}, context.data);
    };

    return FontAwesomeIcon;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'border', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedWidth', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'flip', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
      return "";
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'listItem', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pull', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'spin', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'transform', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'symbol', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);

  _aureliaValidation.ValidationRules.ensure('flip').satisfies(function (value) {
    return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
  }).ensure('icon').required().ensure('pull').satisfies(function (value) {
    return ['right', 'left'].indexOf(value) > -1;
  }).ensure('rotation').satisfies(function (value) {
    return [90, 180, 270].indexOf(value) > -1;
  }).ensure('rotation').satisfies(function (value) {
    return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
  }).on(FontAwesomeIcon);
});