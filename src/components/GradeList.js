import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TileSelect from '@gcc/pip-components/dist/TileSelect';
import { gradesSelector, selectedGradeSelector } from '../selectors';
import { gradeSelected } from '../actions';

const GradeList = ({ grades, selectedGrade, gradeSelected }) => {

  return (
    <React.Fragment>
      <h3>Select Paint Grade</h3>
      <TileSelect
        options={grades}
        value={selectedGrade}
        renderer={({ value }) => value && value.name}
        keyBy={grade => grade.id}
        onChange={gradeSelected}
      />
    </React.Fragment>
  );
};

GradeList.propTypes = {
  grades: PropTypes.array.isRequired,
  selectedGrade: PropTypes.object,
  gradeSelected: PropTypes.func.isRequired,
}

GradeList.defaultProps = {
  selectedGrade: null,
}

const mapStateToProps = state => {
  const grades = gradesSelector(state);
  const selectedGradeId = selectedGradeSelector(state);
  const selectedGrade = grades[selectedGradeId] || null;

  return {
    grades: Object.values(grades) || [],
    selectedGrade,
  };
};

const mapDispatchToProps = dispatch => ({
  gradeSelected: grade => dispatch(gradeSelected(grade.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GradeList);
