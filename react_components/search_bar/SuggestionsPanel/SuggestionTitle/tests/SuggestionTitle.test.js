import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import SuggestionTitle from '../index';

describe('SuggestionTitle', () => {
  it('should wrap the highlighted characters of a string with a span tag', () => {
    const suggestionTitle = shallow(<SuggestionTitle title="Title" highlightedCharacters="le" />);

    assert.include(suggestionTitle.html(), '<span class="SuggestionTitle__strong">le</span>');
  });

  it('should not render wrapped characters if the component can not find matching characters in the title', () => {
    const suggestionTitle = shallow(<SuggestionTitle title="Title" highlightedCharacters="xyz" />);

    assert.notInclude(suggestionTitle.html(), '<span class="SuggestionTitle__strong">');
    assert.include(suggestionTitle.html(), 'Title');
  });
});
