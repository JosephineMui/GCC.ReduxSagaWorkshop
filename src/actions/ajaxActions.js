import { createAction } from '../utils/createAction';

export const GRADE_API_START = 'GRADE_API_START';
export const gradeApiStart = createAction(GRADE_API_START);
export const GRADE_API_END = 'GRADE_API_END';
export const gradeApiEnd = createAction(GRADE_API_END);

export const COLOR_API_START = 'COLOR_API_START';
export const colorApiStart = createAction(COLOR_API_START);
export const COLOR_API_END = 'COLOR_API_END';
export const colorApiEnd = createAction(COLOR_API_END);

export const HANDLE_API_START = 'HANDLE_API_START';
export const handleApiStart = createAction(HANDLE_API_START);
export const HANDLE_API_END = 'HANDLE_API_END';
export const handleApiEnd = createAction(HANDLE_API_END);

export const PRODUCT_API_START = 'PRODUCT_API_START';
export const productApiStart = createAction(PRODUCT_API_START);
export const PRODUCT_API_END = 'PRODUCT_API_END';
export const productApiEnd = createAction(PRODUCT_API_END);

export const INCREMENT_IMAGE_CALL = 'INCREMENT_IMAGE_CALL';
export const incrementImageCall = createAction(INCREMENT_IMAGE_CALL);
export const DECREMENT_IMAGE_CALL = 'DECREMENT_IMAGE_CALL';
export const decrementImageCall = createAction(DECREMENT_IMAGE_CALL);

export const SKU_API_START = 'SKU_API_START';
export const skuApiStart = createAction(SKU_API_START);
export const SKU_API_END = 'SKU_API_END';
export const skuApiEnd = createAction(SKU_API_END);

