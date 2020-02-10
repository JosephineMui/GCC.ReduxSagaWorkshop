import { call, takeLatest, put } from 'redux-saga/effects';
import { getProducts as getProductsApi } from '../../api';
import {
  GET_PRODUCTS,
  safeSaga,
  updateProducts,
} from '../../actions';

function* getProducts() {
  const { data } = yield call(getProductsApi);
  console.log('getProducts', data);

  yield put(updateProducts(data));
}

export default function* productsSaga() {
  console.log("productsSaga starterd");
  // TODO: Should use Take (Josephine) **********
  yield takeLatest(GET_PRODUCTS, safeSaga(getProducts));
}