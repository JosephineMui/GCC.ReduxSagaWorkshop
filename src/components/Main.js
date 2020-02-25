import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../actions';
import ColorSwatchList from './ColorSwatchList';
import HandleList from './HandleList';
import Visualizer from './Visualizer';
import GradeList from './GradeList';

const Main = ({ productId, getProduct }) => {

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
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  getProduct: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 100;

  return {
    productId,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);