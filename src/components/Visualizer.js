import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MainImage } from './Visualizer.styled';
import { SCENE7_URL } from '../constants';
import { selectedChoicesSelector, ajaxStatusSelector } from '../selectors';
import LoadSpinner from './LoadSpinner';

const Visualizer = ({ imageUrl, imageLoading }) => {

  return (
    <MainImage>
      {imageLoading && <LoadSpinner />}
      {!imageLoading && <img alt="" src={imageUrl} />}
    </MainImage>
  );
};

Visualizer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { sku } = selectedChoicesSelector(state);
  const imageUrl = `${SCENE7_URL}/${sku}`;

  const { imageCalls } = ajaxStatusSelector(state);

  return {
    imageUrl,
    imageLoading: imageCalls > 0,
  };
}

export default connect(mapStateToProps)(Visualizer);