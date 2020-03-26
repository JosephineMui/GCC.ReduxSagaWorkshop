import { call, take, put } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  updateProduct,
  getProductFinished,
  productApiEnd,
  productApiStart,
  safeSaga,
} from '../../actions';

function* getProduct(productId) {

  try {
    yield put(productApiStart());
    const product = yield call(getProductById, productId);
    yield put(updateProduct(product));
    yield put(getProductFinished());
  }
  catch (exception) {
    console.log('getProduct failed', exception);
  }
  finally {
    yield put(productApiEnd());
  }
}

export default function* productSaga() {
  console.log("productSaga starterd");

  const { productId } = yield take(GET_PRODUCT);
  yield call(safeSaga(getProduct), productId);
}