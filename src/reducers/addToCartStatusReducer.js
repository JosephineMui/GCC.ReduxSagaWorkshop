import { createReducer } from '../utils';
import {
  ADD_TO_CART_STARTED,
  ADD_TO_CART_FINISHED,
  SET_ADD_TO_CART_STATUS,
  CLEAR_ADD_TO_CART,
  SET_CONFIRMATION_NUMBER,
} from '../actions';

const initialState = {
  isProcessing: false,
  status: '',
  confirmationNumber: '',
  displayStatus: false,
}

export const addToCartStatusReducer = createReducer(initialState, {
  [CLEAR_ADD_TO_CART]() {
    return initialState;
  },
  [ADD_TO_CART_STARTED](state) {
    return { ...state, isProcessing: true, displayStatus: true };
  },
  [ADD_TO_CART_FINISHED](state) {
    return { ...state, isProcessing: false };
  },
  [SET_ADD_TO_CART_STATUS](state, { status }) {
    return { ...state, status };
  },
  [SET_CONFIRMATION_NUMBER](state, { confirmationNumber }) {
    return { ...state, confirmationNumber };
  },
});

export default addToCartStatusReducer;
