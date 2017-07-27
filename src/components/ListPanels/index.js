import React from 'react';

import SearchForm from '../SearchForm';
import ListRestaurants from '../ListRestaurants';

const ListPanels = (props) => {
  const {googleMap, venues, handleSubmit} = props;
  return (
    <div className="list-panels col-sm-4 col-lg-3">
      <div className="brand-header">
        <span className="glyphicon glyphicon-cutlery"></span>
        <span>Lunchpin</span>
      </div>
      <SearchForm
        googleMap={googleMap}
        handleSubmit= {handleSubmit} />
      <ListRestaurants
        venues={venues} />
    </div>
  );
};

export default ListPanels;
