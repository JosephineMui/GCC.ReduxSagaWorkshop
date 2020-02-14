import { createAction } from '../utils/createAction';

export const GET_PRODUCT = 'GET_PRODUCT';
export const getProduct = createAction(GET_PRODUCT, 'productId');

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = createAction(UPDATE_PRODUCT, 'product');

export const GET_PRODUCT_FINISHED = 'GET_PRODUCT_FINISHED';
export const getProductFinished = createAction(GET_PRODUCT_FINISHED);
