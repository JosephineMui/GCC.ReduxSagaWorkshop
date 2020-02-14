import { call, takeLatest, put, select } from 'redux-saga/effects';
import { getColors as getColorsApi } from '../../api';
import { productSelector } from '../../selectors';
import {
  GET_PRODUCT_FINISHED,
  safeSaga,
  updateColors,
  getColorsFinished,
} from '../../actions';

function* getColors() {
  try {
    const { colorChoices } = yield select(productSelector);
    const { data } = yield call(getColorsApi, colorChoices);

    yield put(updateColors(data));
  }
  catch {
    yield put(updateColors([]));
  }
  yield put(getColorsFinished());
}

export default function* colorSaga() {
  console.log("colorSaga starterd");
  yield takeLatest(GET_PRODUCT_FINISHED, safeSaga(getColors));
}