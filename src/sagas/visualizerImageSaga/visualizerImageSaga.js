import { call, takeEvery, put } from 'redux-saga/effects';
import { getSkuByColorId } from '../../api';
import {
  COLOR_SELECTED,
  safeSaga,
  updateSku,
  incrementImageCall,
  decrementImageCall,
} from '../../actions';

function* getVisualizerImage({ colorId }) {

  let sku = '';
  try {
    yield put(incrementImageCall());
    const colorSku = yield call(getSkuByColorId, colorId);
    sku = colorSku.sku;
  }
  catch (exception) {
    console.log('getVisualizerImage failed', exception);
  }
  yield put(decrementImageCall());
  yield put(updateSku(sku))
}

export default function* visualizerImageSaga() {
  console.log("visualizerImageSaga starterd");
  // TODO: Demo using TakeLatest (Josephine)
  yield takeEvery(COLOR_SELECTED, safeSaga(getVisualizerImage));
}