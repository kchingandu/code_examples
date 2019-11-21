import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `import ${camelCased} from './${camelCased}';

describe('${camelCased}', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    store = {dispatch};
  });

  it('should dispatch an action ', () => {
    ${camelCased}(store);

    expect(dispatch).toHaveBeenCalledWith({type: ''});
  });
});
`;
};