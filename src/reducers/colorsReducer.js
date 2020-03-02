import { createReducer } from '../utils';
import {
  UPDATE_COLORS,
  UPDATE_COLOR_PRICE,
} from '../actions';

export const colorsReducer = createReducer({}, {
  [UPDATE_COLORS](state, { colors }) {
    return colors.reduce((dict, color) => {
      dict[color.id] = { ...color, price: null };
      return dict;
    }, {});
  },
  [UPDATE_COLOR_PRICE](state, { colorId, price }) {
    const newPrice = { ...state[colorId], price };
    return { ...state, [colorId]: newPrice };
  },
});

export default colorsReducer;
