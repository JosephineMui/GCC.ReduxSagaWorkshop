import { call, takeLatest, put, select, all } from 'redux-saga/effects';
import { getColors as getColorsApi } from '../../api';
import { productSelector } from '../../selectors';
import {
  GET_PRODUCT_FINISHED,
  safeSaga,
  updateColors,
  colorSelected,
  updateColorsFinished,
  colorApiStart,
  colorApiEnd,
} from '../../actions';

function* getColors() {
  const { colorChoices, defaultColorId } = yield select(productSelector);
  let colors = [];
  let selectedColorId = null;

  try {
    yield put(colorApiStart());
    colors = yield call(getColorsApi, colorChoices);
    selectedColorId = defaultColorId;
  }
  catch (exception) {
    console.log('getColors failed', exception);
  }
  yield put(colorApiEnd());
  yield put(updateColors(colors));

  yield all([
    put(updateColorsFinished()),
    put(colorSelected(selectedColorId)),
  ]);
}

export default function* colorSaga() {
  console.log("colorSaga starterd");
  yield takeLatest(GET_PRODUCT_FINISHED, safeSaga(getColors));
}