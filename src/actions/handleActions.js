import { createAction } from '../utils/createAction';

export const GET_HANDLES = 'GET_HANDLES';
export const getHandles = createAction(GET_HANDLES);

export const UPDATE_HANDLES = 'UPDATE_HANDLES';
export const updateHandles = createAction(UPDATE_HANDLES, 'handles');

export const HANDLE_SELECTED = 'HANDLE_SELECTED';
export const handleSelected = createAction(HANDLE_SELECTED, 'handleId');

