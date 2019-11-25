import * as actions from './actions';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { selectSuggestions, selectIsApiResponse } from './selectors';

export function searchFactory(PlatformSpecificComponent) {
  const factory = (props) => <PlatformSpecificComponent {...props} />;

  factory.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    suggestions: PropTypes.array.isRequired,
    isApiResponse: PropTypes.bool.isRequired,
  };
  return factory;
}

export default (PlatformSpecificComponent) => {
  const mapStateToProps = createStructuredSelector({
    suggestions: selectSuggestions(),
    isApiResponse: selectIsApiResponse(),
  });

  function mapDispatchToProps(dispatch) {
    return {
      onChange(searchTerm) {
        dispatch(actions.retrieveSuggestions(searchTerm));
      },
      onSearch(suggestion) {
        dispatch(actions.retrieveSearchResults(suggestion));
        dispatch(actions.navigateToSearchResults());
      },
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(searchFactory(PlatformSpecificComponent));
};
