import { call, take, put } from 'redux-saga/effects';
import { getGrades as getGradesApi } from '../../api';
import {
  GET_GRADES,
  updateGrades,
  gradeSelected,
  gradeSelectionChanged,
} from '../../actions';

function* getGrades() {
  let selectedGradeId = null;

  try {
    const data = yield call(getGradesApi);

    if (data.length > 0) selectedGradeId = data[0].id;
    yield put(updateGrades(data));
  }
  catch (exception) {
    console.log('getStores failed', exception);
  }

  yield put(gradeSelected(selectedGradeId));
  yield put(gradeSelectionChanged());
}

export default function* gradeSaga() {
  console.log("gradeSaga starterd");

  yield take(GET_GRADES);
  yield call(getGrades);
}