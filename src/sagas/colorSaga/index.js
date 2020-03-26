import { call, take } from 'redux-saga/effects';
import { GET_PRODUCT_FINISHED } from '../../actions';
import getColors from './getColors';

export default function* colorSaga() {
  console.log("colorSaga starterd");

  yield take(GET_PRODUCT_FINISHED);
  yield call(getColors);
}