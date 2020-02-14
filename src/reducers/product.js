import { createReducer } from '../utils';
import {
  UPDATE_PRODUCT,
} from '../actions';

export const product = createReducer({}, {
  [UPDATE_PRODUCT](state, { product }) {
    return product;
  },
});

export default product;
