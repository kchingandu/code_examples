import React from 'react';
import { shallow } from 'enzyme';
import ProductTile from '../ProductTile';

jest.mock('../product-tile.scss', () => ({
  truncatedBEMSelectors: new Proxy({}, {get: (o, p) => o[p] = p})
}));

describe('ProductTile.render', () => {
  let productTile;

  let props = {
  };

  beforeEach(() => {
    productTile = shallow(<ProductTile {...props}/>);
  });

  it('should render correctly', () => {
    expect(productTile.html()).toMatchSnapshot();
  });
});
