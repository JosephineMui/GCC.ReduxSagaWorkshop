import { combineReducers } from 'redux';
import { product } from './product';
import { colors } from './colors';

export const rootReducer = combineReducers({
  product,
  colors,
});

export default rootReducer;
