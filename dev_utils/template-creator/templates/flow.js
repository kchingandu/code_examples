import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {camelCased} = fileNameFormatter(_componentName);

  return `import { wrapCommandInsideActionTypeCheck } from '../support/wrapCommandInsideActionTypeCheck';
import associateCommandsToFlow from '../support/associateCommandsWithFlow';

const commands = [
  wrapCommandInsideActionTypeCheck(/* initiator action type */)(/* command */),
];

const interceptor = (payload) => {
  return payload;
};

const ${camelCased} = associateCommandsToFlow(interceptor, commands);

export default ${camelCased};`
};