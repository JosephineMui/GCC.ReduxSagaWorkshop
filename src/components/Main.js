import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../actions';
import ColorSwatchList from './ColorSwatchList';
import HandleList from './HandleList';
import Visualizer from './Visualizer';
import GradeList from './GradeList';
import Quantity from './Quantity';
import Price from './Price';

const Main = ({ productId, getProduct, name }) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  return (
    <div>
      <h1>Customize Your Storm Doors</h1>
      <div>
        <GradeList />
      </div>
      <div>
        <ColorSwatchList />
      </div>
      <div>
        <HandleList />
      </div>
      <div>
        <Visualizer />
      </div>
      <h3>{name}</h3>
      <Price />
      <Quantity />
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  getProduct: PropTypes.func,
};

Main.defaultProps = {
  name: '',
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 100;
  const { name } = state.product;

  return {
    productId,
    name,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);