import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `const ${camelCased} = ({dispatch, action}) => {

};

export default ${camelCased} ;
`;
};