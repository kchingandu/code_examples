import { storeSuggestions, clearSuggestions } from '../actions';
import { put, take } from 'redux-saga/effects';
import { RETRIEVE_SUGGESTIONS } from '../constants';
import searchSuggestionService from '../services/searchSuggestionService';

function* retrieveSearchSuggestion() {
  // TODO: This should be a takeLatest.
  while (true) { // eslint-disable-line no-constant-condition
    const { searchTerm } = yield take(RETRIEVE_SUGGESTIONS);

    if (searchTerm) {
      const suggestions = yield searchSuggestionService.search(searchTerm);
      yield put(storeSuggestions(suggestions));
    } else {
      yield put(clearSuggestions());
    }
  }
}

export default retrieveSearchSuggestion;
