import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from '../ProductPage';

jest.mock('../product-page.scss', () => ({
  truncatedBEMSelectors: new Proxy({}, {get: (o, p) => o[p] = p})
}));

describe('ProductPage.render', () => {
  let productPage;

  let props = {
  };

  beforeEach(() => {
    productPage = shallow(<ProductPage {...props}/>);
  });

  it('should render correctly', () => {
    expect(productPage.html()).toMatchSnapshot();
  });
});
