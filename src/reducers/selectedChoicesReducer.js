import { createReducer } from '../utils';
import {
  COLOR_SELECTED,
  STORE_SELECTED,
  HANDLE_SELECTED,
} from '../actions';

export const selectedChoicesReducer = createReducer({}, {
  [COLOR_SELECTED](state, { colorId }) {
    return { ...state, colorId };
  },
  [STORE_SELECTED](state, { storeId }) {
    return { ...state, storeId };
  },
  [HANDLE_SELECTED](state, { handleId }) {
    return { ...state, handleId };
  },
});

export default selectedChoicesReducer;
