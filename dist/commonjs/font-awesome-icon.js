'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontAwesomeIcon = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

var _aureliaFramework = require('aurelia-framework');

var _aureliaValidation = require('aurelia-validation');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

var _fontawesome = require('@fortawesome/fontawesome');

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _normalizeIconSpec = require('./utils/normalize-icon-spec.util');

var _objectWithKeys = require('./utils/object-with-keys.util');

var _classlist = require('./utils/classlist.util');

var _warnIfIconHtmlMissing = require('./errors/warn-if-icon-html-missing');

var _warnIfIconSpecMissing = require('./errors/warn-if-icon-spec-missing');

var _notFoundIconHtml = require('./errors/not-found-icon-html');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var FontAwesomeIcon = exports.FontAwesomeIcon = (_dec = (0, _aureliaFramework.customElement)('font-awesome-icon'), _dec2 = (0, _aureliaFramework.inject)(_aureliaTemplatingResources.HTMLSanitizer, _aureliaFramework.ViewCompiler, _aureliaFramework.ViewSlot, _aureliaFramework.Container, _aureliaFramework.ViewResources), _dec3 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec4 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec5 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec6 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec7 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec8 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec9 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec10 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec11 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec12 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec13 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec14 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec15 = (0, _aureliaFramework.bindable)({ changeHandler: 'onChanges' }), _dec(_class = (0, _aureliaFramework.containerless)(_class = (0, _aureliaFramework.noView)(_class = _dec2(_class = (_class2 = function () {
  function FontAwesomeIcon(sanitizer, vc, vs, container, resources) {
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

    _initDefineProp(this, 'size', _descriptor10, this);

    _initDefineProp(this, 'spin', _descriptor11, this);

    _initDefineProp(this, 'transform', _descriptor12, this);

    _initDefineProp(this, 'symbol', _descriptor13, this);

    this.viewCompiler = vc;
    this.viewSlot = vs;
    this.container = container;
    this.resources = resources;

    this.sanitizer = sanitizer;
    this.iconHTML = "";
    this.params = null;
    this._icon = null;
    this.iconSpec = null;
  }

  FontAwesomeIcon.prototype.created = function created(parent, view) {
    this.view = view;
  };

  FontAwesomeIcon.prototype.bind = function bind(bindingContext, overrideContext) {
    this.bindingContext = bindingContext;
    this.updateIconSpec();
    this.updateParams();
    this.updateIcon();
    this.renderIcon();
  };

  FontAwesomeIcon.prototype.attached = function attached() {};

  FontAwesomeIcon.prototype.onChanges = function onChanges(oldValue, newValue) {
    if (newValue !== oldValue) {
      this.updateIconSpec();
      this.updateParams();
      this.updateIcon();
      this.renderIcon();
    }
  };

  FontAwesomeIcon.prototype.updateIconSpec = function updateIconSpec() {
    this.iconSpec = (0, _normalizeIconSpec.faNormalizeIconSpec)(this.icon);
  };

  FontAwesomeIcon.prototype.updateParams = function updateParams() {
    var classOpts = {
      flip: this.flip,
      spin: this.spin !== false,
      pulse: this.pulse !== false,
      border: this.border !== false,
      inverse: this.inverse,
      listItem: this.listItem !== false,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: this.fixedWidth !== false
    };

    var classes = (0, _objectWithKeys.objectWithKey)('classes', [].concat((0, _classlist.faClassList)(classOpts), this.classes));
    var mask = (0, _objectWithKeys.objectWithKey)('mask', (0, _normalizeIconSpec.faNormalizeIconSpec)(this.mask));
    var parsedTransform = typeof this.transform === 'string' ? _fontawesome2.default.parse.transform(this.transform) : this.transform;
    var transform = (0, _objectWithKeys.objectWithKey)('transform', parsedTransform);

    var title = this.title,
        styles = this.styles,
        symbol = this.symbol;

    this.params = Object.assign({}, { title: title }, { styles: styles }, { symbol: symbol }, classes, transform, mask);
  };

  FontAwesomeIcon.prototype.updateIcon = function updateIcon() {
    this._icon = _fontawesome2.default.icon(this.iconSpec, this.params);
  };

  FontAwesomeIcon.prototype.renderIcon = function renderIcon() {

    (0, _warnIfIconSpecMissing.faWarnIfIconSpecMissing)(this.iconSpec);
    (0, _warnIfIconHtmlMissing.faWarnIfIconHtmlMissing)(this._icon, this.iconSpec);

    this.iconHTML = this._icon ? this._icon.html.join('\n') : _notFoundIconHtml.faNotFoundIconHtml;

    var viewFactory = this.viewCompiler.compile('<template>' + this.iconHTML + '</template>', this.resources);
    var view = viewFactory.create(this.container, this.bindingContext);
    this.viewSlot.removeAll();
    this.viewSlot.add(view);
    this.viewSlot.attached();
  };

  return FontAwesomeIcon;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'border', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedWidth', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'flip', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'listItem', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pull', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'spin', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'transform', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'symbol', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class) || _class) || _class);

_aureliaValidation.ValidationRules.ensure('flip').satisfies(function (value) {
  return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
}).ensure('icon').required().ensure('pull').satisfies(function (value) {
  return ['right', 'left'].indexOf(value) > -1;
}).ensure('rotation').satisfies(function (value) {
  return [90, 180, 270].indexOf(value) > -1;
}).ensure('rotation').satisfies(function (value) {
  return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
}).on(FontAwesomeIcon);