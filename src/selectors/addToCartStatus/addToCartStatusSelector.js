import { createSelector } from 'reselect';

export const addToCartStatusSelector = createSelector(
  state => state.addToCartStatus,
  addToCartStatus => addToCartStatus,
);