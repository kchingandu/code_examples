import fileNameFormatter from './support/utils';

export default (_componentName) => {
  const {kebabCased} = fileNameFormatter(_componentName);

  return `// @import '../../../styles/common/media-queries';
@import 'variables';

.${kebabCased} {

}

`
};