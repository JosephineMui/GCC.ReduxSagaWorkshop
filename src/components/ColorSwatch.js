import React from 'react';
import styled from 'styled-components';

const ColorSwatch = () => {

  const SwatchSelected = () => {
    alert('Selected');
  };
  const isSelected = false;
  const choiceId = 1;
  const price = 123.32

  return (
    <ColorSwatchLabel
      id={1}
      className={
        isSelected ? 'selected-swatch facet-swatch-label' : 'facet-swatch-label'
      }
      border={isSelected}
    >
      <ColorSwatchCheckbox
        type="radio"
        id={`CompositeFacetedColorSwatch-${choiceId}`}
        value={choiceId}
        checked={isSelected}
        name="CompositeFacetedColorSwatches"
        onChange={() => {
          SwatchSelected();
        }}
      />
      <SwatchImageContainer>
        <img
          src={'https://qa-blinds.hd-qa71.homedepotdev.com/product-images/8d5ceb6b-aa70-e811-946d-0a986990730e.jpg'}
          alt={'color abc'}
        />
      </SwatchImageContainer>

      <SwatchContentContainer>
        <SwatchTitle>
          <b>brand</b> more info here
        </SwatchTitle>
        <h4>{price}</h4>
      </SwatchContentContainer>
    </ColorSwatchLabel>
  );
};

const ColorSwatchLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  height: 100%;
  align-content: flex-start;

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

const ColorSwatchCheckbox = styled.input`
  height: 0;
`;

const SwatchImageContainer = styled.div`
  flex: 1 100%;
  display: block;
  width: 100%;
  max-height: 104px;
  min-height: 104px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: inline-block;
  }
`;

const SwatchContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 100%;
  flex-wrap: wrap;
  padding: 4px 7px 7px;
  color: #333;
  .WoodChoicePrice {
    display: flex;
    align-items: center;
  }

  .WoodChoicePriceDollars {
    font-size: 14px;
  }

  .PriceContainer {
    display: flex;
    align-items: center;
  }

  .PriceDisplayLifted {
    font-size: 10px;
    padding-bottom: 3px;
  }

  .WoodChoicePrice-cents {
    font-size: 10px;
    padding-bottom: 3px;
  }

  .WoodChoicePriceDivider {
    margin: 0 2px;
  }

  .WoodChoicePriceDivider,
  .WoodChoicePrice-units {
    font-size: 12px;
    padding-top: 2px;
  }
`;

const SwatchTitle = styled.h3`
  flex: 1 100%;
  font-size: 12px;
  padding-bottom: 6px;

  b {
    font-weight: bold;
  }
`;

export default ColorSwatch;