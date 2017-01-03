import URLBuilder from '../support/URLBuilder';
import resultParser from '../support/resultParser';
import resiliencyStrategyFactory from '../support/resiliencyFactory';
import resilientURLRequest from '@qgo/q-go-services/src/resiliency/httpRequest/resilientHttpRequest';

const model = {};

export default { search };

function search(searchTerm) {
  model.currentSearchTerm = searchTerm;

  return new Promise((resolve, reject) => {
    const url = URLBuilder.build(searchTerm);

    const resiliencyStrategy = resiliencyStrategyFactory.createStrategy();

    const searchTermDirtyCheck = createSearchTermDirtyCheck(searchTerm);

    resilientURLRequest(url, null, resiliencyStrategy).then((result) => {
      if (searchTermDirtyCheck()) {
        const results = JSON.parse(result.target.response);

        resolve(resultParser.parse(results));
      } else {
        reject([]);
      }
    });
  });
}

function createSearchTermDirtyCheck(originalSearchTerm) {
  return function didSearchTermChangeWhilstGettingSuggestions() {
    return originalSearchTerm === model.currentSearchTerm;
  };
}
