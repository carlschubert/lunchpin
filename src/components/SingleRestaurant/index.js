import React from 'react';

const SingleRestaurant = (props) => {
  const {place, setPlace} = props;
  return (
    <tr
      className="list-group"
      onClick={() => setPlace(place)}>
      <td className="title">{place.name}</td>
      <td className="rating">{place.rating}</td>
      <td className="price">{place.price_level}</td>
    </tr>
  );
};

export default SingleRestaurant;
