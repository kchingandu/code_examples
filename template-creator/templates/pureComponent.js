import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {pascalCased, kebabCased, camelCased} = fileNameFormatter(_componentName);

  return `import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { truncatedBEMSelectors } from './${kebabCased}.scss';

const {${camelCased}} = truncatedBEMSelectors;

export default class ${pascalCased} extends PureComponent {
  render = () => (
      null;
  );
};

${pascalCased}.propTypes = {

};

${pascalCased}.defaultProps ={

};`
};