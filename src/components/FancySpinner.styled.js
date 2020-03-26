import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  height: 40px;
  text-align: center;
  font-size: 10px;

  & > div {
    background-color: blue;
    height: 100%;
    width: 11px;
    display: inline-block;
    margin-left: 2px;
    
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
    20% { -webkit-transform: scaleY(1.0) }
  }
  
  @keyframes sk-stretchdelay {
    0%, 40%, 100% { 
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% { 
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
`;
// export const Rect1 = styled.div`
//   -webkit-animation-delay: -1.1s !important;
//   animation-delay: -1.1s !important;
//   background-color: linen;
// `;

export const Rect2 = styled.div`
  -webkit-animation-delay: -1.1s !important;
  animation-delay: -1.1s !important;
  background-color: linen;
`;

export const Rect3 = styled.div`
  -webkit-animation-delay: -1.0s !important;
  animation-delay: -1.0s !important;
`;

export const Rect4 = styled.div`
  -webkit-animation-delay: -0.9s !important;
  animation-delay: -0.9s !important;
`;

export const Rect5 = styled.div`
  -webkit-animation-delay: -0.8s !important;
  animation-delay: -0.8s !important;
`;

