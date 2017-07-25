import React from 'react';

import SearchForm from '../SearchForm';
import ListRestaurants from '../ListRestaurants';

const ListPanels = (props) => {
  return (
    <div className="list-panels col-sm-4 col-lg-3">
      <SearchForm />
      <ListRestaurants />
    </div>
  );
};

export default ListPanels;
