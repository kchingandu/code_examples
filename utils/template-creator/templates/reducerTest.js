import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `import ${camelCased} from './${camelCased}';

describe('${camelCased}', () => {
  it('should set the default state', () => {
    const returnedState = ${camelCased}Reducer(undefined, {type: '', payload: ''});

    expect(returnedState).toMatchSnapshot();
  });
});
`;
};