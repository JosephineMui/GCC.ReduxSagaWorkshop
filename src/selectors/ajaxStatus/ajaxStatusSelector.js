import { createSelector } from 'reselect';

export const ajaxStatusSelector = createSelector(
  state => state.ajaxStatus,
  ajaxStatus => ajaxStatus,
);