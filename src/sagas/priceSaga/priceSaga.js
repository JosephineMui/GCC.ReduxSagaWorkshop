import { call, takeLatest, select, all, spawn, put } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import { getPrice } from '../../api';
import { colorsSelector, selectedChoicesSelector } from '../../selectors';
import {
  GRADE_SELECTION_CHANGED,
  UPDATE_COLORS_FINISHED,
  updateColorPrice,
  safeSaga,
} from '../../actions';

function* getColorPrice(gradeId, colorId) {
  try {
    const { price } = yield call(getPrice, gradeId, colorId);

    yield put(updateColorPrice(colorId, price))
  }
  catch (exception) {
    yield put(updateColorPrice(colorId, null));
  }
}

function* getColorPrices() {

  const { gradeId } = yield select(selectedChoicesSelector);
  const colors = yield select(colorsSelector);

  if (gradeId && !isEmpty(colors))
    yield all(Object.keys(colors).map(colorId => spawn(getColorPrice, gradeId, colorId)));
}

export default function* priceSaga() {
  console.log("priceSaga starterd");
  // TODO: Josephine what if I passed data through action
  yield takeLatest([GRADE_SELECTION_CHANGED, UPDATE_COLORS_FINISHED], safeSaga(getColorPrices));
}