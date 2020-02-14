import { call, takeLatest, put } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  safeSaga,
  updateProduct,
  getProductFinished,
} from '../../actions';

function* getProduct({ productId }) {
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
  // TODO: Should use Take (Josephine) **********
  yield takeLatest(GET_PRODUCT, safeSaga(getProduct));
}