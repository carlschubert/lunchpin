import React from 'react';

import SinglePanel from '../SinglePanel';
import SingleRestaurant from '../SingleRestaurant';

const ListRestaurants = (props) => {
  const {handleSubmit} = props;
  return (
    <div>
      <SinglePanel title="Nearby Restaurants">
        <SingleRestaurant name="foo"/>
        <SingleRestaurant name="bar"/>
        <SingleRestaurant name="baz"/>
      </SinglePanel>
    </div>
  );
};

export default ListRestaurants;
