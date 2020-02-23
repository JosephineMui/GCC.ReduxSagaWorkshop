import { createSelector } from 'reselect';

export const colorsSelector = createSelector(
  state => state.colors,
  colors => colors,
);