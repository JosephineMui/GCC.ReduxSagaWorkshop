import { createAction } from '../utils/createAction';

export const GET_STORES = 'GET_STORES';
export const getStores = createAction(GET_STORES);

export const UPDATE_STORES = 'UPDATE_STORES';
export const updateStores = createAction(UPDATE_STORES, 'stores');

export const GET_STORES_FINISHED = 'GET_STORES_FINISHED';
export const getStoresFinished = createAction(GET_STORES_FINISHED);

export const STORE_SELECTED = 'STORE_SELECTED';
export const storeSelected = createAction(STORE_SELECTED, 'storeId');
