import React from 'react';

import SinglePanel from '../SinglePanel';
import SingleRestaurant from '../SingleRestaurant';

const ListRestaurants = (props) => {
  const {venues, setPlace} = props;
  return (
    <div>
      <SinglePanel title="Nearby Restaurants">
        <div className="table-responsive">
          <table className="table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {venues.map(venue => {
                return <SingleRestaurant key={venue.id} place={venue} setPlace={setPlace} />;
              })}
            </tbody>
          </table>
        </div>
      </SinglePanel>
    </div>
  );
};

export default ListRestaurants;
