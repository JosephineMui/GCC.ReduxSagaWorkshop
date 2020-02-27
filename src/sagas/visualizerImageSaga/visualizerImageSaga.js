import { call, takeLatest } from 'redux-saga/effects';
import { getSkuByColorId } from '../../api';
import {
  COLOR_SELECTED,
  safeSaga,
} from '../../actions';

function* getVisualizerImage({ colorId }) {

  try {
    console.log('*** here', colorId);
    const { sku } = yield call(getSkuByColorId, colorId);
    const imageUrl = `https://blinds.scene7.com/is/image/Blinds/${sku}`;

    console.log('***** Image', imageUrl);
  }
  catch (exception) {
    console.log('getVisualizerImage failed', exception);
  }
}

export default function* visualizerImageSaga() {
  console.log("visualizerImageSaga starterd");
  yield takeLatest(COLOR_SELECTED, safeSaga(getVisualizerImage));
}