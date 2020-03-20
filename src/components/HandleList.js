import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChoiceBoxSelect from '@gcc/pip-components/dist/ChoiceBoxSelect';
import {
  handlesSelector,
  selectedChoicesSelector,
  ajaxStatusSelector,
} from '../selectors';
import { handleSelected } from '../actions';
import LoadSpinner from './LoadSpinner';

const HandleList = ({ handles, selectedHandle, handleSelected, handleLoading }) => {

  return (
    <React.Fragment>
      <h3>Select Handle</h3>
      {handleLoading && <LoadSpinner />}
      {!handleLoading && <ChoiceBoxSelect
        value={selectedHandle}
        options={handles}
        keyBy={handle => handle.id}
        labelBy={handle => handle.name}
        imageBy={handle => handle.imageUrl}
        onChange={handleSelected}
      />
      }
    </React.Fragment>
  );
};

HandleList.propTypes = {
  handles: PropTypes.array.isRequired,
  selectedHandle: PropTypes.object,
  handleSelected: PropTypes.func.isRequired,
  handleLoading: PropTypes.bool.isRequired,
}

HandleList.defaultProps = {
  selectedHandle: null,
}

const mapStateToProps = state => {
  const handles = handlesSelector(state);
  const { handleId } = selectedChoicesSelector(state);
  const selectedHandle = handles[handleId] || null;
  const { handleLoading } = ajaxStatusSelector(state);

  return {
    handles: Object.values(handles) || [],
    selectedHandle,
    handleLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSelected: handle => dispatch(handleSelected(handle.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HandleList);
