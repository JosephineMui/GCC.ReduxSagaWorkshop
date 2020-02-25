import { call, take, put } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  updateProduct,
  getProductFinished,
} from '../../actions';

function* getProduct(productId) {
  let product = {};

  try {
    product = yield call(getProductById, productId);
  }
  catch (exception) {
    console.log('getProduct failed', exception);
  }
  yield put(updateProduct(product));
  yield put(getProductFinished());
}

export default function* productSaga() {
  console.log("productSaga starterd");

  const { productId } = yield take(GET_PRODUCT);
  yield call(getProduct, productId);
}