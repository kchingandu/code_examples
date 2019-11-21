import sinon from 'sinon';
import { assert } from 'chai';
import suggestionsReducer from '../reducer';

describe('Search reducer', () => {
  let action;
  let storeStub;

  it('should handle the store suggestion action type', () => {
    suggestionsReducer(storeStub, action);

    assert.isTrue(storeStub.set.calledWith('suggestions'));
    assert.deepEqual(storeStub.set.args[1][1].toJS(), action.suggestions);
  });

  it('should return the unchanged store when given action type it is not interested', () => {
    action.type = '';

    suggestionsReducer(storeStub, action);

    assert.isFalse(storeStub.set.called);
  });

  it('should handle the clear suggestion', () => {
    action.suggestions = [];
    action.type = 'qgo/search/CLEAR_SUGGESTIONS';

    suggestionsReducer(storeStub, action);

    assert.deepEqual(storeStub.set.args[0][1], false);
    assert.deepEqual(storeStub.set.args[1][1].toJS(), []);
    assert.isTrue(storeStub.set.calledWith('suggestions'));
    assert.isTrue(storeStub.set.calledWith('isApiResponse'));
  });

  beforeEach(() => {
    storeStub = sinon.stub({ set: Function.prototype });
    storeStub.set.returns(storeStub);
    action = { type: 'qgo/search/STORE_SUGGESTIONS', suggestions: [{ title: 'title 1' }] };
  });
});
