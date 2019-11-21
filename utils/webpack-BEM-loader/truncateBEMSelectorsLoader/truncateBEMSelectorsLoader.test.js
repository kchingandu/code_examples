import truncateBEMSelectorsLoader from './truncateBEMSelectorsLoader';

jest.mock('../truncateSelectors/truncateBEMSelectors', () => {
  return { truncateBEMSelectors:jest.fn().mockReturnValue({key:'value'})};
});

describe('truncateBEMSelectorsLoader', () => {
  const cssLoaderOutput = `exports.locals = {
        "currencyListItem": "currency-list-item"
      };`;

  it('should add an export truncatedBEMSelector statement', () => {
    const resultString = truncateBEMSelectorsLoader(cssLoaderOutput);

    expect(resultString).toEqual( `exports.locals = {
        "currencyListItem": "currency-list-item"
      }; exports.truncatedBEMSelectors = {"key":"value"}`);
  });

  it('should return the unmodified string when export.locals are not present in the css loader out put', () => {
    const resultString = truncateBEMSelectorsLoader('no export locals');

    expect(resultString).toEqual('no export locals');
  });
});