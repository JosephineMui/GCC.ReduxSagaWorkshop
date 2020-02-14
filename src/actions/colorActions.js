import { createAction } from '../utils/createAction';

export const GET_COLORS = 'GET_GET_COLORS';
export const getColors = createAction(GET_COLORS);

export const UPDATE_COLORS = 'UPDATE_COLORS';
export const updateColors = createAction(UPDATE_COLORS, 'colors');

export const GET_COLORS_FINISHED = 'GET_COLORS_FINISHED';
export const getColorsFinished = createAction(GET_COLORS_FINISHED);
