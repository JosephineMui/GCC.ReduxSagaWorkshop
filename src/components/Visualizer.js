import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MainImage } from './Visualizer.styled';

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
  const imageUrl = 'https://blinds.scene7.com/is/image/Blinds/01_200_Bronze_TSS'

  return {
    imageUrl,
  };
}

export default connect(mapStateToProps)(Visualizer);