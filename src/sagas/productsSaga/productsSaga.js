import { call, takeLatest } from 'redux-saga/effects';
import { getProducts as getProductsApi } from '../../api';
import {
  GET_PRODUCTS,
  safeSaga,
} from '../../actions';

function* getProducts() {
  const response = yield call(getProductsApi);
  console.log('getProducts', response);
}

export default function* productsSaga() {
  console.log("productsSaga starterd");
  // TODO: Should use Take (Josephine) **********
  yield takeLatest(GET_PRODUCTS, safeSaga(getProducts));
}