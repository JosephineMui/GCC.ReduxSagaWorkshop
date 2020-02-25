import { createSelector } from 'reselect';

export const selectedGradeSelector = createSelector(
  state => state.selectedChoices,
  selectedChoices => selectedChoices.gradeId,
);