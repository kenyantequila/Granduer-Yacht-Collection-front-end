// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getYachts } from '../api/api';
import './HomePage.css';
import YachtDetailsPage from './YachtDetailsPage';

function HomePage() {
  const [yachts, setYachts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: Loading state

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const response = await getYachts();
        setYachts(response); // Assuming response is an array of yachts
        setLoading(false); // Optional: Set loading to false after fetching
      } catch (error) {
        console.error('Error fetching yachts:', error);
        // Handle error state or show error message
        setLoading(false); // Optional: Set loading to false on error
      }
    };

    fetchYachts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 
  }

  return (
    <div>
      <Link to="/book">Book a Yacht</Link>
      <YachtDetailsPage/>
      <h1>Granduer Yachts Collection</h1>
      <div className="yacht-list">
        {yachts.map(yacht => (
          <div key={yacht.id} className="yacht-item">
            <img src={yacht.image} alt={yacht.name} />
            <h2>{yacht.name}</h2>
            <p>{yacht.description}</p>
            <p>Price: {yacht.price}</p>
            <Link to={`./YachtDetailsPage/${yacht.id}`}>View Details</Link> {YachtDetailsPage}
            <YachtDetailsPage/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
