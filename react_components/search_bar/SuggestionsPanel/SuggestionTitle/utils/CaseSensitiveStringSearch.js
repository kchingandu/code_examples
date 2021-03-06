const searchPatterns = [
  searchForEachWordOfSearchStringInUpperCase,
  searchForEachWordOfSearchStringInLowerCase,
  searchForSearchStringAsIs,
];

export default function (searchString, targetString) {
  const searchData = { searchString, targetString, indexOfModifiedSearchString: -1, caseModifiedSearchString: '' };

  for (const pattern of searchPatterns) {
    pattern(searchData);

    if (searchData.indexOfModifiedSearchString !== -1) {
      break;
    }
  }

  return searchData;
}

function searchForEachWordOfSearchStringInUpperCase(_data) {
  const data = _data;
  data.caseModifiedSearchString = upperCaseTheFirstLetterOfEachWord(data.searchString);
  data.indexOfModifiedSearchString = data.targetString.indexOf(data.caseModifiedSearchString);
}

function upperCaseTheFirstLetterOfEachWord(string = '') {
  return string.toLowerCase().split(' ').map(uppercase).join(' ');
}

function uppercase(str) {
  return str[0] && str[0].toUpperCase() + str.substr(1);
}

function searchForEachWordOfSearchStringInLowerCase(_data) {
  const data = _data;
  data.caseModifiedSearchString = data.searchString.toLowerCase();
  data.indexOfModifiedSearchString = data.targetString.indexOf(data.caseModifiedSearchString);
}

function searchForSearchStringAsIs(_data) {
  const data = _data;
  data.caseModifiedSearchString = data.searchString;
  data.indexOfModifiedSearchString = data.targetString.indexOf(data.searchString);
}
