import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as Styled from './Modal.styled';
import FancySpinner from './FancySpinner';

const Modal = ({
  isProcessing,
  status,
  confirmationNumber,
  onCancel,
}) => (
    <Styled.ModalContainer>
      <Styled.ModalContent>
        {!isProcessing
          && <Styled.CloseButton onClick={() => onCancel()}>&times;</Styled.CloseButton>}
        <Styled.Message>
          {status}
        </Styled.Message>
        {isProcessing && <FancySpinner />}
        {!isEmpty(confirmationNumber) && <Styled.ConfirmationNum>{`Confirmation Number: ${confirmationNumber}`}</Styled.ConfirmationNum>}
      </Styled.ModalContent >
    </Styled.ModalContainer>
  );

Modal.propTypes = {
  isProcessing: PropTypes.bool,
  status: PropTypes.string,
  confirmationNumber: PropTypes.string,
  onCancel: PropTypes.func,
}

Modal.defaultProps = {
  isProcessing: false,
  status: '',
  confirmationNumber: '',
}

export default Modal;