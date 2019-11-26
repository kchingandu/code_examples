import { produce } from 'immer';
import { products } from './products';

const reducer = (draft, {type, payload}) => {
  switch (type) {
    case 'Delete ':
      return void (draft.value = payload.value);

    default:
      return draft;
  }
};

export default produce(reducer, products);
