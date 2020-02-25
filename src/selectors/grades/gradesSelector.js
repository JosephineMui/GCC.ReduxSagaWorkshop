import { createSelector } from 'reselect';

export const gradesSelector = createSelector(
  state => state.grades,
  grades => grades,
);