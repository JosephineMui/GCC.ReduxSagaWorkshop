import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MainImage } from './Visualizer.styled';
import { SCENE7_URL } from '../constants';
import { selectedSkuSelector } from '../selectors';

const Visualizer = ({ imageUrl }) => {

  return (
    <MainImage>
      <img alt="" src={imageUrl} />
    </MainImage>
  );
};

Visualizer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const sku = selectedSkuSelector(state);
  const imageUrl = `${SCENE7_URL}/${sku}`;

  return {
    imageUrl,
  };
}

export default connect(mapStateToProps)(Visualizer);