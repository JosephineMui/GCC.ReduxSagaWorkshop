import { createReducer } from '../utils';
import {
  UPDATE_PRODUCT,
} from '../actions';

export const productReducer = createReducer({}, {
  [UPDATE_PRODUCT](state, { product }) {
    return product;
  },
});

export default productReducer;
