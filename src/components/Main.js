import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct, addToCart, clearAddToCart } from '../actions';
import ColorSwatchList from './ColorSwatchList';
import HandleList from './HandleList';
import Visualizer from './Visualizer';
import GradeList from './GradeList';
import Quantity from './Quantity';
import Modal from './Modal';
import AddToCartButton from './AddToCartButton';
import Price from './Price';
import { addToCartStatusSelector } from '../selectors';
import { MainContainer, LeftContainer, RightContainer } from './Main.styled';

const Main = ({
  productId,
  getProduct,
  name,
  addToCartButtonClicked,
  clearAddToCart,
  addToCartStatus,
}) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  return (
    <div>
      <h1>Customize Your Storm Door</h1>
      <Modal onCancel={clearAddToCart} {...addToCartStatus} />
      <MainContainer>
        <LeftContainer>
          <GradeList />
          <ColorSwatchList />
          <HandleList />
        </LeftContainer>
        <RightContainer>
          <Visualizer />
          <h3>{name}</h3>
          <Price />
          <Quantity />
          <AddToCartButton clickHandler={addToCartButtonClicked} />
        </RightContainer>
      </MainContainer>
    </div>
  );
};

Main.propTypes = {
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  getProduct: PropTypes.func,
  addToCartButtonClicked: PropTypes.func,
  clearAddToCart: PropTypes.func,
  addToCartStatus: PropTypes.object.isRequired,
};

Main.defaultProps = {
  name: '',
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 100;
  const { name } = state.product;
  const addToCartStatus = addToCartStatusSelector(state);

  return {
    productId,
    name,
    addToCartStatus,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
  addToCartButtonClicked: () => dispatch(addToCart()),
  clearAddToCart: () => dispatch(clearAddToCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);