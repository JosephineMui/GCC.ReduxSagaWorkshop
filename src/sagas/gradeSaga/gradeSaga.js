import { call, take, put } from 'redux-saga/effects';
import { getGrades as getGradesApi } from '../../api';
import {
  // GET_GRADES,
  safeSaga,
  PAGE_LOADED,
  updateGrades,
  gradeSelected,
  gradeSelectionChanged,
  gradeApiStart,
  gradeApiEnd,

} from '../../actions';

function* getGrades() {
  try {
    yield put(gradeApiStart());
    const grades = yield call(getGradesApi);

    yield put(updateGrades(grades));

    if (grades.length > 0) {
      const selectedGradeId = grades[0].id;
      yield put(gradeSelected(selectedGradeId));
      yield put(gradeSelectionChanged());
    }
  }
  catch (exception) {
    console.log('getStores failed', exception);
  }

  yield put(gradeApiEnd());
}

export default function* gradeSaga() {
  console.log("gradeSaga starterd");

  yield take(PAGE_LOADED);
  yield call(safeSaga(getGrades));
}
