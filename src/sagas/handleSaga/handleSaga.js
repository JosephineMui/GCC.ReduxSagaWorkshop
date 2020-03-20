import { call, take, put, all } from 'redux-saga/effects';
import { getHandles as getHandlesApi } from '../../api';
import {
  // GET_HANDLES,
  PAGE_LOADED,
  updateHandles,
  handleSelected,
  handleApiStart,
  handleApiEnd,
  safeSaga,
} from '../../actions';

function* getHandles() {
  let selectedHandleId = null;
  let handles = [];

  try {
    yield put(handleApiStart());
    handles = yield call(getHandlesApi);

    if (handles.length > 0) selectedHandleId = handles[0].id;
  }
  catch (exception) {
    console.log('getHandles failed', exception);
  }

  yield put(handleApiEnd());
  yield put(updateHandles(handles));

  yield all([
    put(updateHandles(handles)),
    put(handleSelected(selectedHandleId)),
  ]);
}

export default function* handleSaga() {
  console.log("handleSaga starterd");

  yield take(PAGE_LOADED);
  yield call(safeSaga(getHandles));
}