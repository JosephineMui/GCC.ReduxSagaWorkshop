import { call, takeLatest, put, select, all } from 'redux-saga/effects';
import { getColors as getColorsApi } from '../../api';
import { productSelector } from '../../selectors';
import {
  GET_PRODUCT_FINISHED,
  safeSaga,
  updateColors,
  getColorsFinished,
  colorSelected,
} from '../../actions';

function* getColors() {
  const { colorChoices, defaultColorId } = yield select(productSelector);

  try {
    const { data } = yield call(getColorsApi, colorChoices);

    yield put(updateColors(data));

    yield all([
      put(colorSelected(defaultColorId)),
      put(getColorsFinished())
    ]);
  }
  catch (exception) {
    yield put(updateColors([]));
    console.log('getColors failed', exception);
  }
}

export default function* colorSaga() {
  console.log("colorSaga starterd");
  yield takeLatest(GET_PRODUCT_FINISHED, safeSaga(getColors));
}