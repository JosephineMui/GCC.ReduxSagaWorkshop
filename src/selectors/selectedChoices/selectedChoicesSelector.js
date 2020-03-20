import { createSelector } from 'reselect';

export const selectedChoicesSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices,
);