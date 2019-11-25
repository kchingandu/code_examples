import { createSelector } from 'reselect';

const selectSuggestionData = () => state => state.get('suggestionsData');

const selectSuggestions = () => createSelector(
  selectSuggestionData(),
  state => state.get('suggestions').toJS()
);

const selectIsApiResponse = () => createSelector(
  selectSuggestionData(),
  state => state.get('isApiResponse')
);

export {
  selectSuggestions,
  selectIsApiResponse,
};
