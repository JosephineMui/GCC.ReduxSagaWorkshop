import { createReducer } from '../utils';
import {
  COLOR_SELECTED,
  GRADE_SELECTED,
  HANDLE_SELECTED,
} from '../actions';

export const selectedChoicesReducer = createReducer({}, {
  [COLOR_SELECTED](state, { colorId }) {
    return { ...state, colorId };
  },
  [GRADE_SELECTED](state, { gradeId }) {
    return { ...state, gradeId };
  },
  [HANDLE_SELECTED](state, { handleId }) {
    return { ...state, handleId };
  },
});

export default selectedChoicesReducer;
