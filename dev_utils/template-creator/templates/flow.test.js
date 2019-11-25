import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `import ${camelCased} from './${camelCased}';

jest.mock('./commands/.../...');

describe('${camelCased}', () => {
  let getState;
  let dispatch;

  beforeEach(() => {
    getState = jest.fn();
    dispatch = jest.fn();
  });

  const callFlowAndAssertCommandWasCalled = (type, command) => {
    ${camelCased}({dispatch, getState})({type});

    expect(command).toHaveBeenCalled();
  };

  it('should ', () => {
    // callFlowAndAssertCommandWasCalled( , );
  });
});
  `
};