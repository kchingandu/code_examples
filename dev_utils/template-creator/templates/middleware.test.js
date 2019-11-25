import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `import ${camelCased} from './${camelCased}}';

describe('${camelCased}Middleware', () => {
  let next;
  let store;
  let action;
  let dispatch;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    store = {dispatch};
    action = {type: '...'};
  });

  describe('handling an action type of interest : ', () => {
    it('should dispatch an action to ', () => {
      ${camelCased}(store)(next)(action);

      // expect(dispatch).toHaveBeenCalledWith({type: ''});
    });
  });

  describe('handling an action not of interest : NOT OF INTEREST', () => {
    action = {type: 'NOT OF INTEREST'};

    it('should not dispatch an action ', () => {
      ${camelCased}(store)(next)(action);

      // expect(dispatch).not.toHaveBeenCalledWith();
    });
  });
});
  `
};