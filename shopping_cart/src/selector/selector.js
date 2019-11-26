import { createSelector } from 'reselect';

const getProducts = (state) => state.products;

const getSelectedItemIds = (state) => state.basket;

export const selectBasketItems = createSelector(
  getProducts,
  getSelectedItemIds,
  (products, ids) => ids.map((id) => products.filter((product) => product.id === id)[0])
);