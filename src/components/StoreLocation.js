import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThdSelect from '@gcc/pip-components/dist/ThdSelect';
import ChoiceSectionHeader from '@gcc/pip-components/dist/ChoiceSectionHeader';
// import { storesSelector, selectedStoreSelector } from '../selectors';

/* eslint-disable react/prop-types */
// const StoreRenderer = (props) => {
//   const option = props.value;
//   return (
//     <span>{option && option.name}</span>
//   );
// };

const StoreLocation = ({ stores, selectedStoreId }) => {

  // const selectedStore = stores.find(x => x.id === selectedStoreId);

  return (
    <div>
      <ChoiceSectionHeader>
        Choose Your Pick-Up Location
      </ChoiceSectionHeader>

      <h3>Choose Your Pick-Up Location</h3>
      {/* <ThdSelect>
        options={stores}
        keyBy={store => store.id}
        renderer={StoreRenderer}
        onChange={store => alert(`You selected ${store.id}`)}
      </ThdSelect> */}
    </div>
  );
}

StoreLocation.propTypes = {
  stores: PropTypes.array.isRequired,
  selectedStoreId: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
  // const stores = storesSelector(state);
  // const selectedStoreId = selectedStoreSelector(state);
  const stores = [{ id: 1, name: 'abc' }, { id: 2, name: 'ddd' }];
  const selectedStoreId = 2;
  // const stores = 
  return {
    stores,
    selectedStoreId,
  };
}

export default connect(mapStateToProps)(StoreLocation);