import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getYachtById } from '../api/api';
import { Link } from 'react-router-dom';

function YachtDetailsPage() {
  const { id } = useParams();
  const [yacht, setYacht] = useState(null);

  useEffect(() => {
    getYachtById(id).then(response => {
      setYacht(response.data);
    });
  }, [id]);

  if (!yacht) return <div>Loading...</div>;

  return (
    <div key={yacht.id}>
      <h1>{yacht.name}</h1>
      <img src={yacht.image} alt={yacht.name} />
      <p>{yacht.description}</p>
      <p>Capacity: {yacht.capacity}</p>
      <p>Price: {yacht.price}</p>
      <Link to="/book">Book this Yacht</Link>
    </div>
  );
}

export default YachtDetailsPage;
