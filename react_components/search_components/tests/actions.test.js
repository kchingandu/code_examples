import { assert } from 'chai';
import { retrieveSuggestions, storeSuggestions, clearSuggestions } from '../actions';

describe('Search actions', () => {
  it('should create the retrieve action object', () => {
    const action = retrieveSuggestions('search term');

    assert.equal(action.searchTerm, 'search term');
    assert.equal(action.type, 'qgo/search/RETRIEVE_SUGGESTIONS');
  });

  it('should create the store action object', () => {
    const suggestions = [];
    const action = storeSuggestions(suggestions);

    assert.equal(action.suggestions, suggestions);
    assert.equal(action.type, 'qgo/search/STORE_SUGGESTIONS');
  });

  it('should create the clear action object', () => {
    const suggestions = [];
    const action = clearSuggestions(suggestions);

    assert.deepEqual(action.suggestions, suggestions);
    assert.equal(action.type, 'qgo/search/CLEAR_SUGGESTIONS');
  });
});
