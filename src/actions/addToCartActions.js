import { createAction } from '../utils/createAction';

export const CLEAR_ADD_TO_CART = 'CLEAR_ADD_TO_CART';
export const clearAddToCart = createAction(CLEAR_ADD_TO_CART);
export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = createAction(ADD_TO_CART);
export const ADD_TO_CART_STARTED = 'CADD_TO_CART_STARTED';
export const addToCartStarted = createAction(ADD_TO_CART_STARTED);
export const ADD_TO_CART_FINISHED = 'ADD_TO_CART_FINISHED';
export const addToCartFinished = createAction(ADD_TO_CART_FINISHED);
export const SET_ADD_TO_CART_STATUS = 'SET_ADD_TO_CART_STATUS';
export const setAddToCartStatus = createAction(SET_ADD_TO_CART_STATUS, 'status');
export const SET_CONFIRMATION_NUMBER = 'SET_CONFIRMATION_NUMBER';
export const setConfirmationNumber = createAction(SET_CONFIRMATION_NUMBER, 'confirmationNumber');
