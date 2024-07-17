import React from 'react';

const YachtCard = ({ yacht }) => (
  <div className="card">
    <img src={yacht.image} alt={yacht.name} />
    <h3>{yacht.name}</h3>
    <p>{yacht.description}</p>
    <p>Price: {yacht.price}</p>
    <p>Capacity: {yacht.capacity}</p>
  </div>
);

export default YachtCard;
