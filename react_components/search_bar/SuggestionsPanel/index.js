import styles from './styles.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import SuggestionTitle from './SuggestionTitle';


class SuggestionsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { mouseOverDisabled: true };
  }

  componentWillReceiveProps(nextProps) {
    const mouseOverDisabled = nextProps.highlightedItemIndex !== this.props.highlightedItemIndex;
    this.setState({ mouseOverDisabled });
  }

  componentDidUpdate() {
    if (this.state.mouseOverDisabled) {
      const activeItem = this.panel.querySelector(`.${styles.highlighted}`);

      if (activeItem && activeItem.scrollIntoViewIfNeeded) {
        activeItem.scrollIntoViewIfNeeded(false);
      }
    }
  }

  getHighlight(index) {
    return classNames({
      [styles.highlighted]: index,
    });
  }

  render() {
    const { mouseOverDisabled } = this.state;
    const { onSelection, suggestions, searchTerm, onItemRollover } = this.props;

    return (
      <ul
        ref={(element) => {
          this.panel = element;
        }}
        className={styles.searchBarSuggestions}
        onMouseLeave={() => onItemRollover(-1)}
        onMouseDown={(e) => e.preventDefault()}
      >

        {suggestions.map((suggestion, index) =>

          <li
            key={index}
            onClick={() => onSelection(suggestion)}
            onMouseEnter={() => !mouseOverDisabled && onItemRollover(index)}
            onMouseMove={() => {
              if (mouseOverDisabled) {
                onItemRollover(index);
                this.setState({ mouseOverDisabled: false });
              }
            }}
            className={this.getHighlight(this.props.highlightedItemIndex === index)}
          >

            <SuggestionTitle
              title={suggestion.title}
              highlightedCharacters={searchTerm}
            />
          </li>
        )}
      </ul>
    );
  }
}

SuggestionsPanel.propTypes = {
  onSelection: React.PropTypes.func,
  searchTerm: React.PropTypes.string,
  onItemRollover: React.PropTypes.func,
  highlightedItemIndex: React.PropTypes.number,
  suggestions: React.PropTypes.array.isRequired,
};

export default SuggestionsPanel;
