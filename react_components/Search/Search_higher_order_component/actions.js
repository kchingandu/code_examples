import { STORE_SUGGESTIONS, RETRIEVE_SUGGESTIONS, CLEAR_SUGGESTIONS, RETRIEVE_SEARCH_RESULTS } from './constants';

export const retrieveSuggestions = (searchTerm) => ({
  searchTerm,
  type: RETRIEVE_SUGGESTIONS,
});

export const storeSuggestions = (suggestions) => ({
  suggestions,
  type: STORE_SUGGESTIONS,
});

export const retrieveSearchResults = (suggestion) => ({
  suggestion,
  type: RETRIEVE_SEARCH_RESULTS,
});
// TODO : refactor this to use constants from nav - is it good for actions in this package to depend on external packages
export const navigateToSearchResults = () => ({
  pageId: 'searchResults',
  type: 'qgo/nav/NAVIGATE_TO_PAGE',
});

export const clearSuggestions = () => ({
  suggestions: [],
  type: CLEAR_SUGGESTIONS,
});
