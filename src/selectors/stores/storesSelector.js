import { createSelector } from 'reselect';

export const storesSelector = createSelector(
  state => state.stores,
  stores => stores,
);