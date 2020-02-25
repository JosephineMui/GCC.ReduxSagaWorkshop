import { createReducer } from '../utils';
import {
  UPDATE_HANDLES,
} from '../actions';

export const handlesReducer = createReducer({}, {
  [UPDATE_HANDLES](state, { handles }) {
    return handles.reduce((dict, handle) => {
      dict[handle.id] = handle;
      return dict;
    }, {});
  },
});

export default handlesReducer;
