import { combineReducers } from 'redux';
import { ajaxStatusReducer as ajaxStatus } from './ajaxStatusReducer';
import { productReducer as product } from './productReducer';
import { colorsReducer as colors } from './colorsReducer';
import { gradesReducer as grades } from './gradesReducer';
import { handlesReducer as handles } from './handlesReducer';
import { selectedChoicesReducer as selectedChoices } from './selectedChoicesReducer';
import { addToCartStatusReducer as addToCartStatus } from './addToCartStatusReducer';


export const rootReducer = combineReducers({
  product,
  colors,
  grades,
  handles,
  selectedChoices,
  ajaxStatus,
  addToCartStatus,
});

export default rootReducer;
