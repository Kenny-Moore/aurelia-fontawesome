var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { containerless, customElement, bindable, bindingMode, inject, inlineView, noView, ViewCompiler, ViewSlot, Container, ViewResources } from 'aurelia-framework';
import { ValidationRules } from 'aurelia-validation';
import { HTMLSanitizer } from 'aurelia-templating-resources';

import fontawesome from '@fortawesome/fontawesome';

import { faNormalizeIconSpec } from './utils/normalize-icon-spec.util';
import { objectWithKey } from './utils/object-with-keys.util';
import { faClassList } from './utils/classlist.util';

import { faWarnIfIconHtmlMissing } from './errors/warn-if-icon-html-missing';
import { faWarnIfIconSpecMissing } from './errors/warn-if-icon-spec-missing';
import { faNotFoundIconHtml } from './errors/not-found-icon-html';

export let FontAwesomeIcon = (_dec = customElement('font-awesome-icon'), _dec2 = inject(HTMLSanitizer, ViewCompiler, ViewSlot, Container, ViewResources), _dec3 = bindable({ changeHandler: 'onChanges' }), _dec4 = bindable({ changeHandler: 'onChanges' }), _dec5 = bindable({ changeHandler: 'onChanges' }), _dec6 = bindable({ changeHandler: 'onChanges' }), _dec7 = bindable({ changeHandler: 'onChanges' }), _dec8 = bindable({ changeHandler: 'onChanges' }), _dec9 = bindable({ changeHandler: 'onChanges' }), _dec10 = bindable({ changeHandler: 'onChanges' }), _dec11 = bindable({ changeHandler: 'onChanges' }), _dec12 = bindable({ changeHandler: 'onChanges' }), _dec13 = bindable({ changeHandler: 'onChanges' }), _dec14 = bindable({ changeHandler: 'onChanges' }), _dec15 = bindable({ changeHandler: 'onChanges' }), _dec(_class = containerless(_class = noView(_class = _dec2(_class = (_class2 = class FontAwesomeIcon {

  constructor(sanitizer, vc, vs, container, resources) {
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

  created(parent, view) {
    this.view = view;
  }

  bind(bindingContext, overrideContext) {
    this.bindingContext = bindingContext;
    this.updateIconSpec();
    this.updateParams();
    this.updateIcon();
    this.renderIcon();
  }

  attached() {}

  onChanges(oldValue, newValue) {
    if (newValue !== oldValue) {
      this.updateIconSpec();
      this.updateParams();
      this.updateIcon();
      this.renderIcon();
    }
  }

  updateIconSpec() {
    this.iconSpec = faNormalizeIconSpec(this.icon);
  }

  updateParams() {
    const classOpts = {
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

    const classes = objectWithKey('classes', [...faClassList(classOpts), ...this.classes]);
    const mask = objectWithKey('mask', faNormalizeIconSpec(this.mask));
    const parsedTransform = typeof this.transform === 'string' ? fontawesome.parse.transform(this.transform) : this.transform;
    const transform = objectWithKey('transform', parsedTransform);

    const { title, styles, symbol } = this;
    this.params = Object.assign({}, { title }, { styles }, { symbol }, classes, transform, mask);
  }

  updateIcon() {
    this._icon = fontawesome.icon(this.iconSpec, this.params);
  }

  renderIcon() {

    faWarnIfIconSpecMissing(this.iconSpec);
    faWarnIfIconHtmlMissing(this._icon, this.iconSpec);

    this.iconHTML = this._icon ? this._icon.html.join('\n') : faNotFoundIconHtml;

    var viewFactory = this.viewCompiler.compile('<template>' + this.iconHTML + '</template>', this.resources);
    var view = viewFactory.create(this.container, this.bindingContext);
    this.viewSlot.removeAll();
    this.viewSlot.add(view);
    this.viewSlot.attached();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'border', [_dec3], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedWidth', [_dec4], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'flip', [_dec5], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec6], {
  enumerable: true,
  initializer: function () {
    return "";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [_dec7], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'listItem', [_dec8], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pull', [_dec9], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pulse', [_dec10], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'rotation', [_dec11], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec12], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'spin', [_dec13], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'transform', [_dec14], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'symbol', [_dec15], {
  enumerable: true,
  initializer: function () {
    return false;
  }
})), _class2)) || _class) || _class) || _class) || _class);
ValidationRules.ensure('flip').satisfies(value => ['horizontal', 'vertical', 'both'].indexOf(value) > -1).ensure('icon').required().ensure('pull').satisfies(value => ['right', 'left'].indexOf(value) > -1).ensure('rotation').satisfies(value => [90, 180, 270].indexOf(value) > -1).ensure('rotation').satisfies(value => ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1).on(FontAwesomeIcon);