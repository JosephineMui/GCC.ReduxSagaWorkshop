import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../actions';


const Main = ({ productId, getProduct }) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  return (
    <div>
      <h1>Customize Your Storm Doors</h1>

      <h3>Product Id: {productId}</h3>
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  getProduct: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 200;

  return {
    productId,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);