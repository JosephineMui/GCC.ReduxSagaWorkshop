import { createAction } from '../utils/createAction';

export const GET_GRADES = 'GET_GRADES';
export const getGrades = createAction(GET_GRADES);

export const UPDATE_GRADES = 'UPDATE_GRADES';
export const updateGrades = createAction(UPDATE_GRADES, 'grades');

export const GRADE_SELECTED = 'GRADE_SELECTED';
export const gradeSelected = createAction(GRADE_SELECTED, 'gradeId');
