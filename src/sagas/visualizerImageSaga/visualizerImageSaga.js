import {
  call,
  takeEvery,
  // takeLatest,
  put,
} from 'redux-saga/effects';
import { getSkuByColorId } from '../../api';
import {
  COLOR_SELECTED,
  safeSaga,
  updateSku,
  incrementImageCall,
  decrementImageCall,
  // skuApiStart,
  // skuApiEnd,
} from '../../actions';

function* getVisualizerImage({ colorId }) {

  let sku = '';
  try {
    yield put(incrementImageCall());
    // yield put(skuApiStart());
    const colorSku = yield call(getSkuByColorId, colorId);
    sku = colorSku.sku;
  }
  catch (exception) {
    console.log('getVisualizerImage failed', exception);
  }
  yield put(decrementImageCall());
  // yield put(skuApiEnd());
  yield put(updateSku(sku))
}

export default function* visualizerImageSaga() {
  console.log("visualizerImageSaga starterd");

  yield takeEvery(COLOR_SELECTED, safeSaga(getVisualizerImage));
  // yield takeLatest(COLOR_SELECTED, safeSaga(getVisualizerImage));
}