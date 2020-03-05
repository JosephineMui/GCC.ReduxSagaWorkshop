import styled from 'styled-components';

export const ColorSwatchLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  align-content: flex-start;
  width: 150px;
  height: 185px;
  cursor: pointer;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: ${props =>
    (props.border ? '3px solid #f96302' : '1px solid #cccccc')};
    box-sizing: border-box;
  }
`;

export const ColorSwatchCheckbox = styled.input`
  height: 0;
`;

export const SwatchImageContainer = styled.div`
  flex: 1 100%;
  display: block;
  width: 100%;
  max-height: 90px;
  min-height: 90px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: inline-block;
  }
`;

export const SwatchContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 100%;
  flex-wrap: wrap;
  padding: 0px 7px 2px;
  color: #333;
`;

export const SwatchTitle = styled.h3`
  flex: 1 100%;
  font-size: 17px;
  padding-bottom: 0px;
  margin-bottom: 0px;

  b {
    font-weight: bold;
  }
`;