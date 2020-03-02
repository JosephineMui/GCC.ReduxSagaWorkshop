import { connect } from 'react-redux';
import Quantity from '@gcc/pip-components/dist/templates/Quantity';
import { updateQuantity } from '../actions';
import { selectedQuantitySelector } from '../selectors';

const mapStateToProp = (state) => {
  const quantityRequested = selectedQuantitySelector(state);

  return {
    quantityRequested,
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
