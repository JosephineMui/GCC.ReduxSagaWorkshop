import { createSelector } from 'reselect';

export const selectedStoreSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.storeId,
);