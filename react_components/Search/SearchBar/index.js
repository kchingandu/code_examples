import styles from './styles.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import SuggestionsPanel from './SuggestionsPanel';

const keyCodes = { UP: 38, DOWN: 40, ESCAPE: 27 };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.createState();

    this.bindFunctions();
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.focus();
    }
  }

  onKeyDown(e) {
    const key = e.which || e.keyCode;

    if (key === keyCodes.UP || key === keyCodes.DOWN) {
      e.preventDefault();
      this.scroll(key);
    } else if (key === keyCodes.ESCAPE) {
      this.input.blur();
    }
  }

  onChange(e) {
    clearTimeout(this.timer);

    const input = e.target.value;

    if (input) this.setState(this.initialState);

    this.setState({ inputValue: input });

    this.timer = setTimeout(() => this.autoSuggest(), this.props.delay);
  }

  onSelection(suggestion) {
    this.setState({ inputValue: suggestion.title });

    this.search(suggestion);
  }

  normalizeInputValue() {
    return this.state.inputValue.toLowerCase().trim();
  }

  autoSuggest() {
    const searchTerm = this.normalizeInputValue();

    this.props.onChange(searchTerm);

    this.setState({ highlightedItemIndex: -1 });
  }

  scroll(key) {
    const { highlightedItemIndex: itemIndex, suggestions = this.props.suggestions } = this.state;

    const lastItemIndex = suggestions.length - 1;

    let nextItemIndex;

    if (key === keyCodes.UP) {
      nextItemIndex = (itemIndex <= 0) ? lastItemIndex : itemIndex - 1;
    } else {
      nextItemIndex = (itemIndex === lastItemIndex) ? 0 : itemIndex + 1;
    }

    this.setState({ highlightedItemIndex: nextItemIndex, inputValue: suggestions[nextItemIndex].title || '' });
  }

  search(suggestion) {
    if (this.state.inputValue) {
      clearTimeout(this.timer);

      this.input.blur();

      const { highlightedItemIndex } = this.initialState;

      this.setState({ highlightedItemIndex });

      if (this.props.onSearch) this.props.onSearch(suggestion);
    }
  }

  bindFunctions() {
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSelection = this.onSelection.bind(this);
  }

  createState() {
    this.state = this.initialState = { inputValue: '', highlightedItemIndex: -1 };
  }

  shouldRenderSuggestion() {
    return this.state.isFocused && this.state.inputValue && this.props.suggestions.length > 0;
  }

  shouldRenderNoSuggestion() {
    return this.state.isFocused && this.state.inputValue && this.props.suggestions.length === 0 && this.props.enableNoSuggestionsPanel;
  }

  updateHighlightedItemIndex(highlightedItemIndex) {
    this.setState({ highlightedItemIndex });
  }

  render() {
    return (
      <div className={styles.searchBarWrapper}>
        <div className={styles.glass}>
          <div
            className={classNames(
              [styles.searchBarField],
              { [styles.hasSuggestions]: this.props.suggestions.length > 0 })}
          >

            <span
              className={styles.searchBarIcon}
            />

            <input
              type="text"
              maxLength="100"
              autoCorrect="off"
              autoComplete="off"
              ref={(element) => {
                this.input = element;
              }}
              autoCapitalize="none"
              onChange={this.onChange}
              name={this.props.inputName}
              className={styles.searchBarInput}
              value={this.state.inputValue}
              placeholder={this.props.placeholder}
              onFocus={() => this.setState({ isFocused: true })}
              onBlur={() => this.setState({ isFocused: false })}
              onKeyDown={this.props.suggestions && this.onKeyDown}
            />

            {this.state.inputValue &&
              <span
                className={styles.searchBarClear}
                onClick={() => {
                  this.input.focus();
                  this.setState(this.initialState);
                  this.setState({ isFocused: true });
                }}
              />}

          </div>

          { this.shouldRenderSuggestion() &&
            <SuggestionsPanel
              onSelection={this.onSelection}
              searchTerm={this.state.inputValue}
              suggestions={this.props.suggestions}
              highlightedItemIndex={this.state.highlightedItemIndex}
              onItemRollover={(index) => {
                this.updateHighlightedItemIndex(index);
              }}
            />
          }

          { this.shouldRenderNoSuggestion() &&
            <div className={styles.searchBarNoResults}>No search results found</div> }
        </div>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  delay: 200,
  suggestions: [],
  autoFocus: true,
};

SearchBar.propTypes = {
  delay: React.PropTypes.number,
  onSearch: React.PropTypes.func,
  autoFocus: React.PropTypes.bool,
  inputName: React.PropTypes.string,
  suggestions: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  enableNoSuggestionsPanel: React.PropTypes.bool,
};

export default SearchBar;
