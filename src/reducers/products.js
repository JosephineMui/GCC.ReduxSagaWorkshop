import { createReducer } from '../utils';
import {
  UPDATE_PRODUCTS,
} from '../actions';

export const products = createReducer([], {
  [UPDATE_PRODUCTS](state, { products }) {
    return products;
  },
});

export default products;
