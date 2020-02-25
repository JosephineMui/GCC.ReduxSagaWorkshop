import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChoiceBoxSelect from '@gcc/pip-components/dist/ChoiceBoxSelect';
import { handlesSelector, selectedHandleSelector } from '../selectors';
import { handleSelected } from '../actions';

const HandleList = ({ handles, selectedHandle, handleSelected }) => {

  return (
    <React.Fragment>
      <h3>Select Handle</h3>
      <ChoiceBoxSelect
        value={selectedHandle}
        options={handles}
        keyBy={handle => handle.id}
        labelBy={handle => handle.name}
        imageBy={handle => handle.imageUrl}
        onChange={handleSelected}
      />
    </React.Fragment>
  );
};

HandleList.propTypes = {
  handles: PropTypes.array.isRequired,
  selectedHandle: PropTypes.object,
  handleSelected: PropTypes.func.isRequired,
}

HandleList.defaultProps = {
  selectedHandle: null,
}

const mapStateToProps = state => {
  const handles = handlesSelector(state);
  const selectedHandleId = selectedHandleSelector(state);
  const selectedHandle = handles[selectedHandleId] || null;

  return {
    handles: Object.values(handles) || [],
    selectedHandle,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelected: handle => dispatch(handleSelected(handle.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HandleList);
