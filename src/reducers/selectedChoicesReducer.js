import { createReducer } from '../utils';
import {
  COLOR_SELECTED,
  GRADE_SELECTED,
  HANDLE_SELECTED,
  UPDATE_SKU,
  UPDATE_QUANTITY,
} from '../actions';

const initialState = {
  colorId: null,
  gradeId: null,
  handleId: null,
  sku: null,
  quantity: 1,
}

export const selectedChoicesReducer = createReducer(initialState, {
  [COLOR_SELECTED](state, { colorId }) {
    return { ...state, colorId };
  },
  [GRADE_SELECTED](state, { gradeId }) {
    return { ...state, gradeId };
  },
  [HANDLE_SELECTED](state, { handleId }) {
    return { ...state, handleId };
  },
  [UPDATE_SKU](state, { sku }) {
    return { ...state, sku };
  },
  [UPDATE_QUANTITY](state, { quantity }) {
    return { ...state, quantity };
  },
});

export default selectedChoicesReducer;
