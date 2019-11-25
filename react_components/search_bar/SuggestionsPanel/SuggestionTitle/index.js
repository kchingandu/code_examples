import styles from './styles.css';
import React, { PropTypes } from 'react';
import caseSensitiveStringSearch from './utils/CaseSensitiveStringSearch';

function SuggestionTitle(props) {
  const { caseModifiedSearchString, indexOfModifiedSearchString } =
    caseSensitiveStringSearch(props.highlightedCharacters, props.title);

  const childProps = {
    title: props.title,
    highlightIndex: indexOfModifiedSearchString,
    highlightedCharacters: caseModifiedSearchString,
  };

  return <span>{(indexOfModifiedSearchString !== -1) ? createHighlightedElement(childProps) : props.title }</span>;
}

function createHighlightedElement(props) {
  return [getStart(props), getMiddle(props.highlightedCharacters), getEnd(props)];
}

function getStart({ title, highlightIndex }) {
  return title.substr(0, highlightIndex);
}

function getMiddle(highlightedCharacters) {
  return <span className={styles.strong} key={highlightedCharacters}>{highlightedCharacters}</span>;
}

function getEnd({ title, highlightIndex, highlightedCharacters }) {
  return title.substr(highlightIndex + highlightedCharacters.length, title.length);
}

SuggestionTitle.propTypes = {
  title: PropTypes.string,
  highlightedCharacters: PropTypes.string,
};

export default SuggestionTitle;
