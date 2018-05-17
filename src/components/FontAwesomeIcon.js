import {containerless, customElement, bindable, bindingMode, inlineView, inject, observable} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {ValidationRules} from 'aurelia-validation';
import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'
import log from '../logger'
import { objectWithKey, classList } from '../utils'

function normalizeIconArgs (icon) {
  if (icon === null) {
    return null
  }

  if (typeof icon === 'object' && icon.prefix && icon.iconName) {
    return icon
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }
}

@customElement('font-awesome-icon')
@containerless
export class FontAwesomeIcon {
	@bindable border = false;
	@bindable fixedWidth = false;
	@bindable flip = null;
	@observable({changeHandler: 'iconChanged'}) icon = "";
	@bindable mask = null;
	@bindable listItem = false;
	@bindable pull = null;
	@bindable pulse = false;
	@bindable rotation = null;
	@bindable rotation = null;
	@bindable spin = false;
	@bindable transform = null;
	@bindable symbol = false;
	
  constructor(element) {
    this.element = element;
	  debugger;
  }

  iconChanged(newValue, oldValue) {
	  debugger;
  }

  attached() {
	  debugger;
    this.render(this.element, this)
  }

  render (createElement, context) {
	  debugger;
    const { props } = context

    const { icon: iconArgs, mask: maskArgs, symbol } = props
    const icon = normalizeIconArgs(iconArgs)
    const classes = objectWithKey('classes', classList(props))
    const transform = objectWithKey('transform', (typeof props.transform === 'string') ? fontawesome.parse.transform(props.transform) : props.transform)
    const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

    const renderedIcon = fontawesome.icon(
      icon,
      { ...classes, ...transform, ...mask, symbol }
    )

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon, mask)
    }

    const { abstract } = renderedIcon
    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0], {}, context.data)
  }
}
ValidationRules
	.ensure('flip')
		.satisfies(value => ['horizontal', 'vertical', 'both'].indexOf(value) > -1)
	.ensure('icon')
		.required()
	.ensure('pull')
		.satisfies(value => ['right', 'left'].indexOf(value) > -1)
	.ensure('rotation')
		.satisfies(value => [90, 180, 270].indexOf(value) > -1)
	.ensure('rotation')
		.satisfies(value => ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1)
	.on(FontAwesomeIcon);
