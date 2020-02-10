import { createAction } from '../utils/createAction';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const getProducts = createAction(GET_PRODUCTS);

export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const updateProducts = createAction(UPDATE_PRODUCTS, 'products');
