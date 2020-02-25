import { createSelector } from 'reselect';

export const selectedHandleSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.handleId,
);