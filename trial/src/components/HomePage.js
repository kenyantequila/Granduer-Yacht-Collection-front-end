import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [yachts, setYachts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const response = await fetch('http://localhost:5000/yachts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setYachts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching yachts:', error);
        setLoading(false);
      }
    };

    fetchYachts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Grandeur Yachts Collection</h1>
      <div className="yacht-list">
        {yachts.map((yacht) => (
          <div key={yacht.id} className="yacht-item">
            <img src={yacht.image} alt={yacht.name} />
            <h2>{yacht.name}</h2>
            <p>{yacht.description}</p>
            <p>Price: {yacht.price}</p>
            <Link to={`/yacht/${yacht.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
