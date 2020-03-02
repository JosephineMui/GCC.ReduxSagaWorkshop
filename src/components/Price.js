import { connect } from 'react-redux';
import Price from '@gcc/pip-components/dist/templates/Price';
import { totalPriceSelector } from '../selectors';

const mapStateToProps = (state) => {
  const price = totalPriceSelector(state);

  return {
    price,
    oldPrice: price,
    each: true,
    isSpecialBuy: false,
    isLowerPrice: false,
    configurationError: null,
    showNotAvailableWhenZero: true,
  };
};

export default connect(mapStateToProps)(Price);
