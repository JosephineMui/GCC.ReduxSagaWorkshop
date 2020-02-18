import { createReducer } from '../utils';
import {
  UPDATE_STORES,
} from '../actions';

export const storesReducer = createReducer([], {
  [UPDATE_STORES](state, { stores }) {
    return stores.reduce((dict, store) => {
      dict[store.id] = store;
      return dict;
    }, {});
  },
});

export default storesReducer;
