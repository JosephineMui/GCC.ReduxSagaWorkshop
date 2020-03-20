import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  position: relative;
  display: block;
  text-align: center;
`;

export const Spinner = styled.span`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: inline-block;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #f96302;
  width: 56px;
  height: 56px;
  animation: spin 2s linear infinite;
`;
