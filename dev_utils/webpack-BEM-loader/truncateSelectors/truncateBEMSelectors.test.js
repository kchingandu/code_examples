import { truncateBEMSelectors } from './truncateBEMSelectors';

describe('truncateBEMSelectors', () => {
  it(`should convert a "BEM block" level selector value into a camel cased key 
    'with a value of the unmodified selector`, () => {
    const selectors = truncateBEMSelectors({
      key: 'block-named'
    });

    expect(selectors).toEqual({'blockNamed': 'block-named'});
  });

  it(`should strip out the block name from an element selector and return a camel cased key 
    with a value of the unmodified selector`, () => {
    const selectors = truncateBEMSelectors({
      key: 'block__element-cased'
    });

    expect(selectors).toEqual({'elementCased': 'block__element-cased'});
  });

  it(`should strip out the block name from the selector and return a camel cased key 
    with a value of the unmodified selector`, () => {
    const selectors = truncateBEMSelectors({
      key: 'block__element--modifier'
    });

    expect(selectors).toEqual({'elementModifier': 'block__element--modifier'});
  });
});