import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct, getHandles } from '../actions';
import ColorSwatchList from './ColorSwatchList';
import HandleList from './HandleList';

const Main = ({ productId, getProduct, getHandleChoices }) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  useEffect(() => {
    getHandleChoices();
  }, []);

  return (
    <div>
      <h1>Customize Your Storm Doors</h1>

      <h3>Product Id: {productId}</h3>
      <div>
        <ColorSwatchList />
      </div>
      <div>
        <HandleList />
      </div>
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  getProduct: PropTypes.func,
  getHandleChoices: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 100;

  return {
    productId,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
  getHandleChoices: () => dispatch(getHandles()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);