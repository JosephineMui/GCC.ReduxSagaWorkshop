import { call, takeLatest, put } from 'redux-saga/effects';
import { getProductById } from '../../api';
import {
  GET_PRODUCT,
  safeSaga,
  updateProduct,
} from '../../actions';

function* getProduct({ productId }) {
  const { data } = yield call(getProductById, productId);
  console.log('getProductById', data);

  yield put(updateProduct(data));
}

export default function* productSaga() {
  console.log("productSaga starterd");
  // TODO: Should use Take (Josephine) **********
  yield takeLatest(GET_PRODUCT, safeSaga(getProduct));
}