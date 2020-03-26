import { call, take, put, all } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  updateProduct,
  getProductFinished,
  productApiEnd,
  productApiStart,
} from '../../actions';

function* getProduct(productId) {
  let product = {};

  try {
    yield put(productApiStart());
    product = yield call(getProductById, productId);
  }
  catch (exception) {
    console.log('getProduct failed', exception);
  }
  yield all([
    put(productApiEnd()),
    put(updateProduct(product)),
  ]);
  yield put(getProductFinished());
}

export default function* productSaga() {
  console.log("productSaga starterd");

  const { productId } = yield take(GET_PRODUCT);
  yield call(getProduct, productId);
}