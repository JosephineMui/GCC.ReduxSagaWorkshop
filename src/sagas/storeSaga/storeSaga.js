import { call, take, put, all } from 'redux-saga/effects';
import { getStores as getStoresApi } from '../../api';
import {
  GET_STORES,
  updateStores,
  getStoresFinished,
  storeSelected,
} from '../../actions';

function* getStores() {
  let selectedStoreId = null;

  try {
    const { data } = yield call(getStoresApi);

    if (data.length > 0) selectedStoreId = data[0].id;
    yield put(updateStores(data));
  }
  catch (exception) {
    yield put(updateStores([]));
    console.log('getStores failed', exception);
  }

  yield all([
    put(storeSelected(selectedStoreId)),
    put(getStoresFinished()),
  ]);
}

export default function* storeSaga() {
  console.log("storeSaga starterd");

  yield take(GET_STORES);
  yield call(getStores);
}