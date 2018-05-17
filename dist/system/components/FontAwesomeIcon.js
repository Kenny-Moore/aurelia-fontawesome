'use strict';

System.register(['aurelia-framework', 'aurelia-pal', 'aurelia-validation', '@fortawesome/fontawesome', '../converter', '../logger', '../utils'], function (_export, _context) {
  "use strict";

  var containerless, customElement, bindable, bindingMode, inlineView, inject, observable, DOM, ValidationRules, fontawesome, convert, log, objectWithKey, classList, _extends, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _typeof, FontAwesomeIcon;

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

  return {
    setters: [function (_aureliaFramework) {
      containerless = _aureliaFramework.containerless;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inlineView = _aureliaFramework.inlineView;
      inject = _aureliaFramework.inject;
      observable = _aureliaFramework.observable;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaValidation) {
      ValidationRules = _aureliaValidation.ValidationRules;
    }, function (_fortawesomeFontawesome) {
      fontawesome = _fortawesomeFontawesome.default;
    }, function (_converter) {
      convert = _converter.default;
    }, function (_logger) {
      log = _logger.default;
    }, function (_utils) {
      objectWithKey = _utils.objectWithKey;
      classList = _utils.classList;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
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

      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('FontAwesomeIcon', FontAwesomeIcon = (_dec = customElement('font-awesome-icon'), _dec2 = observable({ changeHandler: 'iconChanged' }), _dec(_class = containerless(_class = (_class2 = function () {
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
          var classes = objectWithKey('classes', classList(props));
          var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesome.parse.transform(props.transform) : props.transform);
          var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

          var renderedIcon = fontawesome.icon(icon, _extends({}, classes, transform, mask, { symbol: symbol }));

          if (!renderedIcon) {
            return log('Could not find one or more icon(s)', icon, mask);
          }

          var abstract = renderedIcon.abstract;

          var convertCurry = convert.bind(null, createElement);

          return convertCurry(abstract[0], {}, context.data);
        };

        return FontAwesomeIcon;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'border', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedWidth', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'flip', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'listItem', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pull', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'spin', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'transform', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'symbol', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('FontAwesomeIcon', FontAwesomeIcon);

      ValidationRules.ensure('flip').satisfies(function (value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }).ensure('icon').required().ensure('pull').satisfies(function (value) {
        return ['right', 'left'].indexOf(value) > -1;
      }).ensure('rotation').satisfies(function (value) {
        return [90, 180, 270].indexOf(value) > -1;
      }).ensure('rotation').satisfies(function (value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }).on(FontAwesomeIcon);
    }
  };
});