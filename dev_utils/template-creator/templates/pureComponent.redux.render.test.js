import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {pascalCased, kebabCased, camelCased} = fileNameFormatter(_componentName);

  return `import React from 'react';
import { shallow } from 'enzyme';
import {${pascalCased}} from '../${pascalCased}';

jest.mock('../${kebabCased}.scss', () => ({
  truncatedBEMSelectors: new Proxy({}, {get: (o, p) => o[p] = p})
}));

describe('${pascalCased}.render', () => {
  let ${camelCased};

  let props = {
  };

  beforeEach(() => {
    ${camelCased} = shallow(${'<' + pascalCased} {...props}/>);
  });

  it('should render correctly', () => {
    expect(${camelCased}.html()).toMatchSnapshot();
  });
});
`;
};