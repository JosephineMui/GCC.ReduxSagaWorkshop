import { call, take, put } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  updateProduct,
  getProductFinished,
} from '../../actions';

function* getProduct(productId) {
  try {
    const { data } = yield call(getProductById, productId);

    yield put(updateProduct(data));
  }
  catch {
    yield put(updateProduct({}));
  }
  yield put(getProductFinished());
}

export default function* productSaga() {
  console.log("productSaga starterd");

  const { productId } = yield take(GET_PRODUCT);
  yield call(getProduct, productId);
}