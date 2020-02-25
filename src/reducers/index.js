import { combineReducers } from 'redux';
import { productReducer as product } from './productReducer';
import { colorsReducer as colors } from './colorsReducer';
import { storesReducer as stores } from './storesReducer';
import { handlesReducer as handles } from './handlesReducer';
import { selectedChoicesReducer as selectedChoices } from './selectedChoicesReducer';

export const rootReducer = combineReducers({
  product,
  colors,
  stores,
  handles,
  selectedChoices,
});

export default rootReducer;
