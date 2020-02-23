import { call, takeLatest, select, all, spawn, put } from 'redux-saga/effects';
import { getPrice } from '../../api';
import { colorsSelector, selectedStoreSelector } from '../../selectors';
import {
  GET_COLORS_FINISHED,
  updateColorPrice,
  safeSaga,
} from '../../actions';

const formatPrice = colorPrice => (colorPrice && colorPrice.price !== 0 ? `$${colorPrice.price.toFixed(2)}` : 'N/A');

function* getColorPrice(storeId, colorId) {
  try {
    const colorPrice = yield call(getPrice, storeId, colorId);

    const price = formatPrice(colorPrice);
    yield put(updateColorPrice(colorId, price))
  }
  catch (exception) {
    yield put(updateColorPrice(colorId, 'N/A'));
  }
}

function* getColorPrices() {

  const selectedStoreId = yield select(selectedStoreSelector);
  const colors = yield select(colorsSelector);

  yield all(Object.keys(colors).map(colorId => spawn(getColorPrice, selectedStoreId, colorId)));
}

export default function* priceSaga() {
  console.log("priceSaga starterd");
  yield takeLatest(GET_COLORS_FINISHED, safeSaga(getColorPrices));
}