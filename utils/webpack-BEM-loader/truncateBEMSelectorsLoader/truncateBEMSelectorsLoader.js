const createTruncateBEMSelectors = require('../truncateSelectors/truncateBEMSelectors').truncateBEMSelectors;

module.exports = (source) => {
  let stringifiedSelectorRegEx = (/(exports.locals =)+(?:\r|\n|.)+(})/g).exec(source);

  if (stringifiedSelectorRegEx) {
    let selectorsStringified = stringifiedSelectorRegEx[0].replace('exports.locals =', '');

    const selectorObject = JSON.parse(selectorsStringified);

    return `${source} exports.truncatedBEMSelectors = ${JSON.stringify(createTruncateBEMSelectors(selectorObject))}`;

  } else {
    return source;
  }
};