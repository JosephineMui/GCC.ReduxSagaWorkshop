import { createSelector } from 'reselect';

export const selectedQuantitySelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.quantity,
);