import { call, take, put } from 'redux-saga/effects';
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
  try {
    yield put(handleApiStart());
    const handles = yield call(getHandlesApi);

    yield put(updateHandles(handles));

    if (handles.length > 0) {
      const selectedHandleId = handles[0].id;
      yield put(handleSelected(selectedHandleId));
    }
  }
  catch (exception) {
    console.log('getHandles failed', exception);
  }

  yield put(handleApiEnd());
}

export default function* handleSaga() {
  console.log("handleSaga starterd");

  yield take(PAGE_LOADED);
  yield call(safeSaga(getHandles));
}