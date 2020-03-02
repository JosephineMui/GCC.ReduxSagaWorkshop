import { createSelector } from 'reselect';

export const selectedSkuSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.sku,
);