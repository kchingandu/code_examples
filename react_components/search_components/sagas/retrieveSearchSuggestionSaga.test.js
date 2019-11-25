import sinon from 'sinon';
import { assert } from 'chai';
import { take, put } from 'redux-saga/effects';
import retrieveSearchSuggestion from './retrieveSearchSuggestionSaga';
import * as searchSuggestionServiceModuleExports from '../services/searchSuggestionService';

let searchSuggestionServiceStub;
let searchSuggestionServiceOriginal;
const mockSuggestion = [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }];


describe('RetrieveSearchSuggestionSaga', () => {
  let generator;

  it('should listen for the RETRIEVE_SUGGESTIONS event', () => {
    assert.deepEqual(generator.next().value, take('qgo/search/RETRIEVE_SUGGESTIONS'));
  });

  it('should call the search api with the provided search term', () => {
    generator.next();

    generator.next({ searchTerm: 'search' });

    assert.isTrue(searchSuggestionServiceStub.search.calledWithExactly('search'));
  });

  it('should dispatch the store suggestions', () => {
    generator.next();

    generator.next({ searchTerm: 'search' });

    assert.deepEqual(generator.next(mockSuggestion).value, put({
      type: 'qgo/search/STORE_SUGGESTIONS',
      suggestions: mockSuggestion,
    }));
  });

  it('should dispatch the clear suggestion when an empty search term is provided', () => {
    generator.next({ searchTerm: '' });

    assert.deepEqual(generator.next(mockSuggestion).value, put({
      type: 'qgo/search/CLEAR_SUGGESTIONS',
      suggestions: [],
    }));
  });

  beforeEach(() => {
    generator = retrieveSearchSuggestion();

    stubSearchSuggestionService();
  });

  afterEach(restoreStubs);
});

function stubSearchSuggestionService() {
  searchSuggestionServiceOriginal = searchSuggestionServiceModuleExports.default;
  searchSuggestionServiceStub = searchSuggestionServiceModuleExports.default = sinon.stub({ search: Function.prototype });
}

function restoreStubs() {
  searchSuggestionServiceModuleExports.default = searchSuggestionServiceOriginal;
}
