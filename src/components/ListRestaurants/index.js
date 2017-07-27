import React from 'react';

import SinglePanel from '../SinglePanel';
import SingleRestaurant from '../SingleRestaurant';

const ListRestaurants = (props) => {
  const {venues} = props;
  return (
    <div>
      <SinglePanel title="Nearby Restaurants">
        <ul>
          {venues.map(venue => {
            return <li key={venue.id}><SingleRestaurant place={venue} /></li>;
          })}
        </ul>
      </SinglePanel>
    </div>
  );
};

export default ListRestaurants;
