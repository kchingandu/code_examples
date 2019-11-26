import basket from './basket';

describe('basket', () => {
  it('should set the default state', () => {
    const returnedState = basketReducer(undefined, {type: '', payload: ''});

    expect(returnedState).toMatchSnapshot();
  });
});
