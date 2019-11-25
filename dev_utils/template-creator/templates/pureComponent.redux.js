import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {pascalCased, kebabCased, camelCased} = fileNameFormatter(_componentName);

  return `import React, { PureComponent } from 'react';
import { connect as reduxConnect } from 'react-redux';
import { truncatedBEMSelectors } from './${kebabCased}.scss';

const {${camelCased}} = truncatedBEMSelectors;

export class ${pascalCased} extends PureComponent {
  render = () => ( 
     null
  );
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export const connect = (connect = reduxConnect) => {
  return connect(mapStateToProps,mapDispatchToProps)(${pascalCased});
};

export default connect();
`
};