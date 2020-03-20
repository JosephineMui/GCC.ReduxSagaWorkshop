import { takeLatest, put, select, call, all } from 'redux-saga/effects';
import {
  executeRules as executeRulesApi,
  createConfiguration,
  getSkuMap,
  sendToThdCart,
} from '../../api';
import { selectedChoicesSelector } from '../../selectors';
import {
  safeSaga,
  ADD_TO_CART,
  addToCartStarted,
  addToCartFinished,
  setAddToCartStatus,
  setConfirmationNumber,
} from '../../actions';

import {
  STATUS_EXECUTE_RULES,
  STATUS_CREATE_CONFIGURATION,
  STATUS_GET_SKUMAP,
  STATUS_SEND_TO_THD,
  STATUS_COMPLETED,
  STATUS_FAILED,
} from '../../constants';

// function* executeRules(selectedChoices) {
//   try {
//     yield put(setCheckoutStatus(STATUS_EXECUTE_RULES));
//     return yield call(executeRulesApi, selectedChoices);
//   }
//   catch (err) {
//     throw err;
//   }
// }

function* addToCart() {

  try {
    yield put(addToCartStarted());

    const selectedChoices = yield select(selectedChoicesSelector);

    yield put(setAddToCartStatus(STATUS_EXECUTE_RULES));
    yield call(executeRulesApi, selectedChoices);

    yield put(setAddToCartStatus(`${STATUS_CREATE_CONFIGURATION} and ${STATUS_GET_SKUMAP}`));
    const [configurationGuid, skuMap] = yield all([
      call(createConfiguration, selectedChoices),
      call(getSkuMap, selectedChoices),
    ]);

    yield put(setAddToCartStatus(STATUS_SEND_TO_THD));
    const confirmationNumber = yield call(sendToThdCart, configurationGuid, skuMap.sku);

    yield all([
      put(setAddToCartStatus(STATUS_COMPLETED)),
      put(setConfirmationNumber(confirmationNumber)),
    ]);
  }
  catch (err) {
    console.log('*** Add to Cart failed', err);
    yield put(setAddToCartStatus(STATUS_FAILED));
  }
  yield put(addToCartFinished());
}

export default function* checkoutSaga() {
  console.log("checkoutSaga starterd");
  yield takeLatest(ADD_TO_CART, safeSaga(addToCart));
}