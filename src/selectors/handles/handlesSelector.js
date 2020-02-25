import { createSelector } from 'reselect';

export const handlesSelector = createSelector(
  state => state.handles,
  handles => handles,
);