import { createReducer } from '../utils';
import {
  GRADE_API_START,
  GRADE_API_END,
  COLOR_API_START,
  COLOR_API_END,
  HANDLE_API_START,
  HANDLE_API_END,
  INCREMENT_IMAGE_CALL,
  DECREMENT_IMAGE_CALL,
  PRODUCT_API_START,
  PRODUCT_API_END,
  SKU_API_START,
  SKU_API_END,
} from '../actions';

const initialState = {
  gradeLoading: false,
  colorLoading: false,
  handleLoading: false,
  productLoading: false,
  imageLoading: false,
  imageCalls: 0,
}

export const ajaxStatusReducer = createReducer(initialState, {
  [GRADE_API_START](state) {
    return { ...state, gradeLoading: true };
  },
  [GRADE_API_END](state) {
    return { ...state, gradeLoading: false };
  },
  [COLOR_API_START](state) {
    return { ...state, colorLoading: true };
  },
  [COLOR_API_END](state) {
    return { ...state, colorLoading: false };
  },
  [HANDLE_API_START](state) {
    return { ...state, handleLoading: true };
  },
  [HANDLE_API_END](state) {
    return { ...state, handleLoading: false };
  },
  [PRODUCT_API_START](state) {
    return { ...state, productLoading: true };
  },
  [PRODUCT_API_END](state) {
    return { ...state, productLoading: false };
  },
  [SKU_API_START](state) {
    return { ...state, imageLoading: true };
  },
  [SKU_API_END](state) {
    return { ...state, imageLoading: false };
  },
  [INCREMENT_IMAGE_CALL](state) {
    return { ...state, imageCalls: state.imageCalls + 1 };
  },
  [DECREMENT_IMAGE_CALL](state) {
    return { ...state, imageCalls: state.imageCalls - 1 };
  },
});

export default ajaxStatusReducer;
