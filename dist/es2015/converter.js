var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import humps from 'humps';

function styleToObject(style) {
  return style.split(';').map(s => s.trim()).filter(s => s).reduce((acc, pair) => {
    const i = pair.indexOf(':');
    const prop = humps.camelize(pair.slice(0, i));
    const value = pair.slice(i + 1).trim();

    acc[prop] = value;

    return acc;
  }, {});
}

function classToObject(cls) {
  return cls.split(/\s+/).reduce((acc, c) => {
    acc[c] = true;

    return acc;
  }, {});
}

function combineClassObjects(...objs) {
  return objs.reduce((acc, obj) => {
    if (Array.isArray(obj)) {
      acc = acc.concat(obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, []);
}

function convert(h, element, props = {}, data = {}) {
  const children = (element.children || []).map(convert.bind(null, h));

  const mixins = Object.keys(element.attributes || {}).reduce((acc, key) => {
    const val = element.attributes[key];

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val);
        break;
      case 'style':
        acc['style'] = styleToObject(val);
        break;
      default:
        acc.attrs[key] = val;
    }

    return acc;
  }, { 'class': {}, style: {}, attrs: {} });

  const { class: dClass = {}, style: dStyle = {}, attrs: dAttrs = {} } = data,
        remainingData = _objectWithoutProperties(data, ['class', 'style', 'attrs']);

  if (typeof element === 'string') {
    return element;
  } else {
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props
    }), children);
  }
}

export default convert;