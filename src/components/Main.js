import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getProduct,
  addToCart,
  clearAddToCart,
} from '../actions';
// import { getColors } from '../actions/colorActionsThunk';
// import { getProduct } from '../actions/productActionsThunk';
import ColorSwatchList from './ColorSwatchList';
import HandleList from './HandleList';
import Visualizer from './Visualizer';
import GradeList from './GradeList';
import Quantity from './Quantity';
import Modal from './Modal';
import AddToCartButton from './AddToCartButton';
import Price from './Price';
import { addToCartStatusSelector, ajaxStatusSelector } from '../selectors';
import { MainContainer, LeftContainer, RightContainer } from './Main.styled';
import LoadSpinner from './LoadSpinner';

const Main = ({
  productId,
  getProduct,
  name,
  addToCartButtonClicked,
  clearAddToCart,
  addToCartStatus,
  productLoading,
}) => {

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  return (
    <div>
      <h1>Customize Your Storm Door</h1>
      {addToCartStatus.displayStatus && <Modal onCancel={clearAddToCart} {...addToCartStatus} />}
      <MainContainer>
        <LeftContainer>
          <GradeList />
          <ColorSwatchList />
          <HandleList />
        </LeftContainer>
        <RightContainer>
          <Visualizer />
          {productLoading && <LoadSpinner />}
          {!productLoading && <h3>{name}</h3>}
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
  productLoading: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  name: '',
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id || 100;
  const { name } = state.product;
  const addToCartStatus = addToCartStatusSelector(state);
  const { productLoading } = ajaxStatusSelector(state);

  return {
    productId,
    name,
    addToCartStatus,
    productLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getProduct(productId)),
  addToCartButtonClicked: () => dispatch(addToCart()),
  clearAddToCart: () => dispatch(clearAddToCart()),
})

// const mapDispatchToProps = dispatch => ({
//   getProduct: async (productId) => {
//     await dispatch(getProduct(productId));
//     await dispatch(getColors());
//   },
//   addToCartButtonClicked: () => dispatch(addToCart()),
//   clearAddToCart: () => dispatch(clearAddToCart()),
// })

// const mapDispatchToProps = dispatch => ({
//   getProduct: productId => {
//     dispatch(getProduct(productId))
//       .then(() => dispatch(getColors()));
//   },
//   addToCartButtonClicked: () => dispatch(addToCart()),
//   clearAddToCart: () => dispatch(clearAddToCart()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Main);