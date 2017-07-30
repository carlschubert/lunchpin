import React from 'react';

import ScatterPlot from '../ScatterPlot';

const HEIGHT = 300;
const WIDTH = 300;

const SingleRestaurant = (props) => {
  const {place, setPlace, venues} = props;

  console.log('place',place)

  return (
    <div className="list-panels col-sm-8 col-lg-9">
      <div className="restaurant-detail col-sm-6">
        <div className=" panel panel-default">
          <div className="panel-heading">
            <span className="back-arrow" onClick={() => setPlace({})}></span>
            <span><img className="place-icon" src={place.icon}></img></span>
            <h3 className="detail-title">{place.name}</h3>
          </div>
          <div className="panel-body">
            <div>
              <span className="restaurant-property">Rating: </span>
              <span>{place.rating}</span>
            </div>
            <div>
              <span className="restaurant-property">Price Level: </span>
              <span>{place.price_level}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
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
