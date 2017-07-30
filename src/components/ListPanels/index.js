import React from 'react';

import SearchForm from '../SearchForm';
import ListRestaurants from '../ListRestaurants';

const ListPanels = (props) => {
  const {googleMap, venues, handleSubmit, currentMap, setPlace} = props;
  return (
    <div className="list-panels col-sm-4 col-lg-3">
      <div className="col-xs-6 col-sm-12">
        <div className="brand-header">
          <span className="glyphicon glyphicon-cutlery"></span>
          <span>Lunchpin</span>
        </div>
      </div>
      <SearchForm
        googleMap={googleMap}
        handleSubmit= {handleSubmit}
        currentMap={currentMap} />
      <ListRestaurants
        venues={venues}
        setPlace={setPlace} />
    </div>
  );
};

export default ListPanels;
