import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TileSelect from '@gcc/pip-components/dist/TileSelect';
import {
  gradesSelector,
  selectedChoicesSelector,
  ajaxStatusSelector,
} from '../selectors';
import { gradeSelected, gradeSelectionChanged } from '../actions';
import LoadSpinner from './LoadSpinner';

const GradeList = ({ grades, selectedGrade, gradeSelected, gradeLoading }) => {

  return (
    <React.Fragment>
      <h3>Select Paint Grade</h3>
      {gradeLoading && <LoadSpinner />}
      {!gradeLoading && <TileSelect
        options={grades}
        value={selectedGrade}
        renderer={({ value }) => value && value.name}
        keyBy={grade => grade.id}
        onChange={gradeSelected}
      />
      }
    </React.Fragment>
  );
};

GradeList.propTypes = {
  grades: PropTypes.array.isRequired,
  selectedGrade: PropTypes.object,
  gradeSelected: PropTypes.func.isRequired,
  gradeLoading: PropTypes.bool.isRequired,
}

GradeList.defaultProps = {
  selectedGrade: null,
}

const mapStateToProps = state => {
  const grades = gradesSelector(state);
  const { gradeId } = selectedChoicesSelector(state);
  const selectedGrade = grades[gradeId] || null;
  const { gradeLoading } = ajaxStatusSelector(state);

  return {
    grades: Object.values(grades) || [],
    selectedGrade,
    gradeLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  gradeSelected: grade => {
    dispatch(gradeSelected(grade.id));
    dispatch(gradeSelectionChanged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);
