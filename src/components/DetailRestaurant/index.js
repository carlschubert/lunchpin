import React from 'react';
import {Link} from 'react-router-dom';

import SinglePanel from '../SinglePanel';

const SingleRestaurant = (props) => {
  const {place, setPlace} = props;

  console.log('place',place)

  return (
    <div className="list-group col-sm-8 col-lg-9">
      <span className="title">{place.name}</span>
      <span className="rating">{place.rating}</span>
      <span className="price">{place.price_level}</span>
      <span>
        <button
          className="btn btn-xs btn-primary detail btn-circle"
          onClick={() => setPlace({})}>^</button>
      </span>
    </div>
  );
};

export default SingleRestaurant;
