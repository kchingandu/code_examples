import { produce } from 'immer';
import { ADD_ITEM_TO_BASKET, REMOVE_ITEM_FROM_BASKET } from '../../actions/actions';

const findInDraft = (draft, value) => draft.find((selectedItemId) => selectedItemId === value);

const reducer = (draft, {type, payload}) => {
  switch (type) {
    case ADD_ITEM_TO_BASKET:
      return void draft.push(payload);

    case REMOVE_ITEM_FROM_BASKET:
      draft.splice(draft.indexOf(findInDraft(draft, payload)), 1);
      return draft;

    default:
      return draft;
  }
};

export default produce(reducer, []);
