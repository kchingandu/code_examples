const truncateBEMSelectors = (selectorObject) => {
  if(!!selectorObject.process || !!selectorObject.truncatedBEMSelectors){
    return selectorObject;
  }
  return Object.values(selectorObject.locals || selectorObject).reduce(createSelectorFromValue, {});
};

function createSelectorFromValue(selectorValuePairs, selector) {
  let key = isExplicitlyBlockSelector(selector) ? selector : removeBEMBlockSuffix(selector);

  key = toCamelCase(key);

  selectorValuePairs[key] = selector;

  return selectorValuePairs;
}

function isExplicitlyBlockSelector(selector) {
  return selector.indexOf('__') === -1;
}

function removeBEMBlockSuffix(txt) {
  return (/__[^]+/g).exec(txt)[0].replace('__', '');
}

function toCamelCase(str) {
  return str.toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/ (.)/g, ($1) => $1.toUpperCase())
    .replace(/ /g, '');
}

exports.truncateBEMSelectors = truncateBEMSelectors;