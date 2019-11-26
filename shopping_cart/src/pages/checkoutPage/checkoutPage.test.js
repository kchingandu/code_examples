import React from 'react';
import { shallow } from 'enzyme';
import CheckoutPage from '../CheckoutPage';

describe('CheckoutPage.render', () => {
  let checkoutPage;

  let props = {
  };

  beforeEach(() => {
    checkoutPage = shallow(<CheckoutPage {...props}/>);
  });

  it('should render correctly', () => {
    expect(checkoutPage.html()).toMatchSnapshot();
  });
});
