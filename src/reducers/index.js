import { combineReducers } from 'redux';
import { productReducer as product } from './productReducer';
import { colorsReducer as colors } from './colorsReducer';
import { storesReducer as stores } from './storesReducer';
import { selectedChoicesReducer as selectedChoices } from './selectedChoicesReducer';

export const rootReducer = combineReducers({
  product,
  colors,
  stores,
  selectedChoices,
});

export default rootReducer;
