import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct, getStores } from '../actions';
import StoreLocation from './StoreLocation';
import ColorSwatchList from './ColorSwatchList';


const Main = ({ productId, getProduct, getStoreLocations }) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  useEffect(() => {
    getStoreLocations();
  }, []);

  return (
    <div>
      <h1>Customize Your Storm Doors</h1>

      <h3>Product Id: {productId}</h3>
      <StoreLocation />
      <div>
        <ColorSwatchList />
      </div>
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  getProduct: PropTypes.func,
  getStoreLocations: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 200;

  return {
    productId,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
  getStoreLocations: () => dispatch(getStores()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);