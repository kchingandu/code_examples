import product from './product';

describe('product', () => {
  it('should set the default state', () => {
    const returnedState = productReducer(undefined, {type: '', payload: ''});

    expect(returnedState).toMatchSnapshot();
  });
});
