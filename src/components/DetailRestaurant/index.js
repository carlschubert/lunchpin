import React from 'react';

import ScatterPlot from '../ScatterPlot';

const HEIGHT = 500;
const WIDTH = 500;

const SingleRestaurant = (props) => {
  const {place, setPlace, venues} = props;

  console.log('place',place)

  return (
    <div className="list-group col-sm-8 col-lg-9">
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading row">
            <span className="back-arrow col-xs-3" onClick={() => setPlace({})}></span>
            <img className="place-icon col-xs-3" src={place.icon}></img>
            <span className="detail-title col-xs-6">{place.name}</span>
          </div>
          <div className="panel-body">
            <span className="rating">Rating: {place.rating}</span>
            <span className="price">Price Level: {place.price_level}</span>
          </div>
        </div>
        <ScatterPlot
          place={place}
          venues={venues}
          height={HEIGHT}
          width={WIDTH} />
      </div>
    </div>
  );
};

export default SingleRestaurant;
