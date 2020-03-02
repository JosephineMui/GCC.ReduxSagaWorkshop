import { call, takeLatest, put } from 'redux-saga/effects';
import { getSkuByColorId } from '../../api';
import {
  COLOR_SELECTED,
  safeSaga,
  updateSku,
} from '../../actions';

function* getVisualizerImage({ colorId }) {

  let sku = '';
  try {
    const colorSku = yield call(getSkuByColorId, colorId);
    sku = colorSku.sku;
  }
  catch (exception) {
    console.log('getVisualizerImage failed', exception);
  }

  yield put(updateSku(sku))
}

export default function* visualizerImageSaga() {
  console.log("visualizerImageSaga starterd");
  yield takeLatest(COLOR_SELECTED, safeSaga(getVisualizerImage));
}