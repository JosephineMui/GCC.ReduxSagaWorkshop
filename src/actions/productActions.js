import { createAction } from '../utils/createAction';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = createAction(GET_PRODUCTS);

export const GET_PRODUCT = 'GET_PRODUCT';
export const getProduct = createAction(GET_PRODUCT, 'productId');

export const UPDATE_PRODUCT = 'UPDATE_PRODUCTS';
export const updateProduct = createAction(UPDATE_PRODUCT, 'product');
