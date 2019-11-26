export const ADD_ITEM_TO_BASKET = 'ADD ITEM TO BASKET';

export const REMOVE_ITEM_FROM_BASKET = 'REMOVE ITEM FROM BASKET';

export const addItemToBasket = (itemId) => ({
  payload: itemId,
  type: ADD_ITEM_TO_BASKET
});

export const removeItemFromBasket = (itemId) => ({
  payload: itemId,
  type: REMOVE_ITEM_FROM_BASKET
});