import { call, put, select, all } from 'redux-saga/effects';
import { getColors as getColorsApi } from '../../api';
import { productSelector } from '../../selectors';
import {
  updateColors,
  colorSelected,
  updateColorsFinished,
  colorApiStart,
  colorApiEnd,
  safeSaga,
} from '../../actions';

function* getColors() {

  try {
    const { colorChoices, defaultColorId } = yield select(productSelector);

    yield put(colorApiStart());
    const colors = yield call(getColorsApi, colorChoices);
    const selectedColorId = defaultColorId;

    yield put(updateColors(colors));

    yield all([
      put(updateColorsFinished()),
      put(colorSelected(selectedColorId)),
    ]);
  }
  catch (exception) {
    console.log('getColors failed', exception);
  }
  finally {
    yield put(colorApiEnd());
  }
}

export default safeSaga(getColors);