import { combineReducers } from 'redux';
import { productReducer as product } from './productReducer';
import { colorsReducer as colors } from './colorsReducer';
import { gradesReducer as grades } from './gradesReducer';
import { handlesReducer as handles } from './handlesReducer';
import { selectedChoicesReducer as selectedChoices } from './selectedChoicesReducer';

export const rootReducer = combineReducers({
  product,
  colors,
  grades,
  handles,
  selectedChoices,
});

export default rootReducer;
