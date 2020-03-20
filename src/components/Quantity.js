import { connect } from 'react-redux';
import Quantity from '@gcc/pip-components/dist/templates/Quantity';
import { updateQuantity } from '../actions';
import { selectedChoicesSelector } from '../selectors';

const mapStateToProp = (state) => {
  const { quantity } = selectedChoicesSelector(state);

  return {
    quantityRequested: quantity,
    quantityAvailable: 999,
  };
};

const mapDispatchToProps = dispatch => ({
  updateQuantity: quantity => dispatch(updateQuantity(quantity)),
});

export default connect(
  mapStateToProp,
  mapDispatchToProps,
)(Quantity);
