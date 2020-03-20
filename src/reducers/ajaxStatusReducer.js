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
} from '../actions';

const initialState = {
  gradeLoading: false,
  colorLoading: false,
  handleLoading: false,
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
  [INCREMENT_IMAGE_CALL](state) {
    return { ...state, imageCalls: state.imageCalls + 1 };
  },
  [DECREMENT_IMAGE_CALL](state) {
    return { ...state, imageCalls: state.imageCalls - 1 };
  },
});

export default ajaxStatusReducer;
