import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `const ${camelCased} = ({dispatch, getState}) => (next) => (action) => {
  next(action);
  
  const {type} = action;
  
  const getStateAndDispatch = {getState, dispatch};
  
  switch (type) {
    case : 
      on(getStateAndDispatch);
    break;
  }
};

const on = ({getState, dispatch}) => {

};

export default ${camelCased};
`
};