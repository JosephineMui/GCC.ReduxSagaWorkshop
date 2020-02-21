import { createSelector } from 'reselect';

export const selectedColorSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.colorId,
);