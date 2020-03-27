import { createAction } from '../utils/createAction';
import { getProductById } from '../api';
import { productApiStart, productApiEnd } from './ajaxActions';

export const getProduct = productId => (dispatch) => {

  dispatch(productApiStart());

  return getProductById(productId)
    .then(product => dispatch(updateProduct(product)))
    .catch(err => console.log('getProduct failed', err))
    .finally(() => dispatch(productApiEnd()));
};

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = createAction(UPDATE_PRODUCT, 'product');

// export const GET_PRODUCT_FINISHED = 'GET_PRODUCT_FINISHED';
// export const getProductFinished = createAction(GET_PRODUCT_FINISHED);

