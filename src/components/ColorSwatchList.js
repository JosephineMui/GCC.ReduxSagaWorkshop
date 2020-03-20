import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColorSwatch from './ColorSwatch';
import {
  productColorsSelector,
  selectedChoicesSelector,
  ajaxStatusSelector,
} from '../selectors';
import * as Styled from './ColorSwatchList.styled';
import LoadSpinner from './LoadSpinner';

const ColorSwatchList = ({ colors, selectedColorId, colorLoading }) => {

  return (
    <Styled.ColorListContainer
      id="SwatchList"
      swatchRowHeigh={'200px'}
    >
      <h3>Select Color</h3>
      {colorLoading && <LoadSpinner />}
      {!colorLoading && <Styled.SwatchList>
        {colors.map(color => (
          <Styled.SwatchListItem key={color.id}>
            <ColorSwatch
              color={color}
              isSelected={color.id === selectedColorId}
            />
          </Styled.SwatchListItem>
        ))}
      </Styled.SwatchList>
      }
    </Styled.ColorListContainer>
  );
}

ColorSwatchList.propTypes = {
  colors: PropTypes.array.isRequired,
  selectedColorId: PropTypes.number,
  colorLoading: PropTypes.bool.isRequired,
}

ColorSwatchList.defaultProps = {
  colors: [],
  selectedColorId: 0,
}

const mapStateToProps = (state) => {
  const colors = productColorsSelector(state);
  const { colorId } = selectedChoicesSelector(state);
  const { colorLoading } = ajaxStatusSelector(state);

  return {
    colors,
    selectedColorId: colorId,
    colorLoading,
  };
}

export default connect(mapStateToProps)(ColorSwatchList);
