import { createReducer } from '../utils';
import {
  UPDATE_COLORS,
} from '../actions';

export const colors = createReducer({}, {
  [UPDATE_COLORS](state, { colors }) {
    return colors;
  },
});

export default colors;
