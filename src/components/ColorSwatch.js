import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Styled from './ColorSwatch.styled';
import { colorByIdSelector } from '../selectors';
import { colorSelected } from '../actions';

const ColorSwatch = ({ id, name, imageUrl, isSelected, price, colorSelected }) => {

  return (
    <Styled.ColorSwatchLabel
      id={id}
      className={
        isSelected ? 'selected-swatch facet-swatch-label' : 'facet-swatch-label'
      }
      border={isSelected}
    >
      <Styled.ColorSwatchCheckbox
        type="radio"
        id={`ColorSwatch-${id}`}
        value={id}
        checked={isSelected}
        name="ColorSwatch"
        onChange={() => colorSelected(id)}
      />
      <Styled.SwatchImageContainer>
        <img
          src={imageUrl}
          alt={name}
        />
      </Styled.SwatchImageContainer>

      <Styled.SwatchContentContainer>
        <Styled.SwatchTitle>
          <b>{name}</b>
        </Styled.SwatchTitle>
        <h4>{price}</h4>
      </Styled.SwatchContentContainer>
    </Styled.ColorSwatchLabel>
  );
};

ColorSwatch.propTypes = {
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isSelected: PropTypes.bool,
  colorSelected: PropTypes.func.isRequired,
}

ColorSwatch.defaultProps = {
  price: 'N/A',
  imageUrl: '',
  isSelected: false,
}

const mapStateToProps = (state, ownProps) => {
  const { color: { id, name, imageUrl }, isSelected } = ownProps;
  const { price } = colorByIdSelector(id)(state);

  return {
    price,
    id,
    name,
    imageUrl,
    isSelected,
  };
}

const mapDispatchToProps = dispatch => ({
  colorSelected: colorId => dispatch(colorSelected(colorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwatch);
