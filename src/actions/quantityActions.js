import { createAction } from '../utils/createAction';

export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const updateQuantity = createAction(UPDATE_QUANTITY, 'quantity');
