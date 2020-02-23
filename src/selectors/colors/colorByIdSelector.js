import { createSelector } from 'reselect';

export const colorByIdSelector = colorId => createSelector(
  state => state.colors,
  colors => colors[colorId],
);