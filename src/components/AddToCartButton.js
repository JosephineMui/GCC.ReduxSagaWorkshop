import React from 'react';
import PropTypes from 'prop-types';
import { CartButton } from '@gcc/pip-components/dist/Button';
import styled from 'styled-components';

const AddToCartButton = ({ clickHandler }) => {
  return (
    <CartButtonStyled onClick={() => clickHandler()}>
      Add to Cart
    </CartButtonStyled>
  );
}

const CartButtonStyled = styled(CartButton)`
  background-color: rgb(249, 99, 2) !important;
  color: rgb(255, 255, 255) !important;
  margin: 25px 5px;
  padding: 10px 100px;
  font-size: 20px;

  &:disabled {
    box-shadow: 0 3px 0 #999;
    color: #999;
    .bttn__content {
      background-color: #ccc;
    }
  }
`;

AddToCartButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
}

export default AddToCartButton;