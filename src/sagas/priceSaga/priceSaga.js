import { call, takeLatest, select, all, spawn, put } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import { getPrice } from '../../api';
import { colorsSelector, selectedGradeSelector } from '../../selectors';
import {
  GRADE_SELECTION_CHANGED,
  UPDATE_COLORS_FINISHED,
  updateColorPrice,
  safeSaga,
} from '../../actions';

const formatPrice = colorPrice => (colorPrice && colorPrice.price !== 0 ? `$${colorPrice.price.toFixed(2)}` : 'N/A');

function* getColorPrice(gradeId, colorId) {
  try {
    const colorPrice = yield call(getPrice, gradeId, colorId);

    const price = formatPrice(colorPrice);
    yield put(updateColorPrice(colorId, price))
  }
  catch (exception) {
    yield put(updateColorPrice(colorId, 'N/A'));
  }
}

function* getColorPrices() {

  const selectedGradeId = yield select(selectedGradeSelector);
  const colors = yield select(colorsSelector);

  if (selectedGradeId && !isEmpty(colors))
    yield all(Object.keys(colors).map(colorId => spawn(getColorPrice, selectedGradeId, colorId)));
}

export default function* priceSaga() {
  console.log("priceSaga starterd");
  // TODO: Josephine what if I passed data through action
  yield takeLatest([GRADE_SELECTION_CHANGED, UPDATE_COLORS_FINISHED], safeSaga(getColorPrices));
}