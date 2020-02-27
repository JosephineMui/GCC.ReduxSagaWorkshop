import { createAction } from '../utils/createAction';

export const GET_COLORS = 'GET_COLORS';
export const getColors = createAction(GET_COLORS);

export const UPDATE_COLORS = 'UPDATE_COLORS';
export const updateColors = createAction(UPDATE_COLORS, 'colors');

export const UPDATE_COLORS_FINISHED = 'UPDATE_COLORS_FINISHED';
export const updateColorsFinished = createAction(UPDATE_COLORS_FINISHED);

export const GET_COLORS_FINISHED = 'GET_COLORS_FINISHED';
export const getColorsFinished = createAction(GET_COLORS_FINISHED);

export const COLOR_SELECTED = 'COLOR_SELECTED';
export const colorSelected = createAction(COLOR_SELECTED, 'colorId');

export const UPDATE_COLOR_PRICE = 'UPDATE_COLOR_PRICE';
export const updateColorPrice = createAction(UPDATE_COLOR_PRICE, 'colorId', 'price');

