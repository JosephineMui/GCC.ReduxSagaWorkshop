import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import * as Styled from './Modal.styled';

const Modal = ({
  displayStatus,
  isProcessing,
  status,
  confirmationNumber,
  onCancel,
}) => {

  if (displayStatus) {
    return (
      <Styled.ModalContainer>
        <Styled.ModalContent>
          {!isProcessing 
            && <Styled.CloseButton onClick={() => onCancel()}>&times;</Styled.CloseButton>}
          <Styled.Message>
            {status}
          </Styled.Message>
          {!isEmpty(confirmationNumber) && <Styled.ConfirmationNum>{`Confirmation Number: ${confirmationNumber}`}</Styled.ConfirmationNum>}
        </Styled.ModalContent >
      </Styled.ModalContainer>
    );
  }
  else {
    return null;
  }
}

Modal.propTypes = {
  displayStatus: PropTypes.bool,
  isProcessing: PropTypes.bool,
  status: PropTypes.string,
  confirmationNumber: PropTypes.string,
  onCancel: PropTypes.func,
}

Modal.defaultProps = {
  displayStatus: false,
  isProcessing: false,
  status: '',
  confirmationNumber: '',
}

export default Modal;