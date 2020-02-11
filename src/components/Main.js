import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Main = ({ productId }) => (
  <div>
    <h1>Customize Your Storm Doors</h1>

    <h3>Product Id: {productId}</h3>
  </div>
);

Main.propTypes = {
  productId: PropTypes.number.isRequired,
};

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.id || 1;

  return {
    productId,
  };
}

export default connect(mapStateToProps)(Main);