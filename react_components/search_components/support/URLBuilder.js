import config from '@qgo/q-go-feature-config';
import pathFactory from '@qgo/q-go-feature-tvservices/src/search/paths';

const userId = 1;
const section = 'home';
const { client, ...endpoints } = config.get('search');
const region = config.get('region');

const paths = pathFactory(client, endpoints, region);

function build(searchTerm) {
  return paths.searchSuggestPath(section, userId, searchTerm);
}

export default { build };
