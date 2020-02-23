import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorSwatch from './ColorSwatch';
import { productColorsSelector, selectedColorSelector } from '../selectors';
import * as Styled from './ColorSwatchList.styled';

const ColorSwatchList = ({ colors, selectedColorId }) => {

  return (
    <Styled.ColorListContainer
      id="SwatchList"
      swatchRowHeigh={'200px'}
    >
      <Styled.SwatchList>
        {colors.map(color => (
          <Styled.SwatchListItem key={color.id}>
            <ColorSwatch
              color={color}
              isSelected={color.id === selectedColorId}
            />
          </Styled.SwatchListItem>
        ))}
      </Styled.SwatchList>
    </Styled.ColorListContainer>
  );
}

ColorSwatchList.propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColorId: PropTypes.number.isRequired,
}

ColorSwatchList.defaultProps = {
  colors: [],
  selectedColorId: 0,
}

const mapStateToProps = (state) => {
  const colors = productColorsSelector(state);
  const selectedColorId = selectedColorSelector(state);

  return {
    colors,
    selectedColorId,
  };
}

export default connect(mapStateToProps)(ColorSwatchList);
