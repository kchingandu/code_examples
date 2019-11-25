import { fromJS } from 'immutable';
import { STORE_SUGGESTIONS, CLEAR_SUGGESTIONS } from './constants';

const initialState = fromJS({
  suggestions: [],
  isApiResponse: true,
});

function suggestionsReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_SUGGESTIONS:
      return state
        .set('isApiResponse', true)
        .set('suggestions', fromJS(action.suggestions));

    case CLEAR_SUGGESTIONS:
      return state
        .set('isApiResponse', false)
        .set('suggestions', fromJS(action.suggestions));

    default:
      return state;
  }
}

export default suggestionsReducer;
