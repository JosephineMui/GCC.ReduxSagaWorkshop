import styled from 'styled-components';

/* The Modal (background) */
export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 99;
  padding-top: 180px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

/* Modal Content */
export const ModalContent = styled.div` 
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 600px;
  height: 150px;
`;

/* The Close Button */
export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

export const Message = styled.div`
  font-size: 20px;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
`;

export const ConfirmationNum = styled.div`
  font-size: 20px;
  color: blue;
  text-align: center;
`;