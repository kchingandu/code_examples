export default () => {
  return `import { produce } from 'immer';

const reducer = (draft, {type, payload}) => {
  switch (type) {
    case :
      return void (draft.value = payload.value);

    default:
      return draft;
  }
};

const defaultState = {

};

export default produce(reducer, defaultState);
`;
};