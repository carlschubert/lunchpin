import React from 'react';

const SingleRestaurant = (props) => {
  const {name} = props;
  return (
    <div>
      <ul className="list-group">
        <div className="restaurant-item">
          <span className="title">{name}</span>
          <button className="btn btn-xs btn-primary detail btn-circle">^</button>
        </div>
      </ul>
    </div>
  );
};

export default SingleRestaurant;
