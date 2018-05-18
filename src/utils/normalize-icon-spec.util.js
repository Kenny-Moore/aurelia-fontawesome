import { isIconLookup } from './is-icon-lookup.util';

/**
 * Normalizing icon spec.
 * @returns IconLookup
 */
export const faNormalizeIconSpec = (iconSpec) => {
  const defaultPrefix = 'fas';

  if (typeof iconSpec === 'undefined' || iconSpec === null) {
    return null;
  }

  if (isIconLookup(iconSpec)) {
    return iconSpec;
  }

  if (Array.isArray(iconSpec) && (iconSpec).length === 2) {
    return { prefix: iconSpec[0], iconName: iconSpec[1] };
  }

  if (typeof iconSpec === 'string') {
    return { prefix: defaultPrefix, iconName: iconSpec };
  }
};
