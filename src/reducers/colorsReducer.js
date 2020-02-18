import { createReducer } from '../utils';
import {
  UPDATE_COLORS,
} from '../actions';

export const colorsReducer = createReducer({}, {
  [UPDATE_COLORS](state, { colors }) {
    return colors.reduce((dict, color) => {
      dict[color.id] = color;
      return dict;
    }, {});
  },
});

export default colorsReducer;
