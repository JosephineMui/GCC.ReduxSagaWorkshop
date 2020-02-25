import { createReducer } from '../utils';
import {
  UPDATE_GRADES,
} from '../actions';

export const gradesReducer = createReducer({}, {
  [UPDATE_GRADES](state, { grades }) {
    return grades.reduce((dict, grade) => {
      dict[grade.id] = grade;
      return dict;
    }, {});
  },
});

export default gradesReducer;
