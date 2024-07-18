import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const YachtDetails = () => {
  const { id } = useParams();
  const [yacht, setYacht] = useState(null);
  const [numTickets, setNumTickets] = useState(1);
  const [numDays, setNumDays] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchYacht = async () => {
      try {
        const response = await fetch('http://localhost:5000/yachts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const yacht = data.find((yacht) => yacht.id === parseInt(id));
        setYacht(yacht);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching yacht:', error);
        setLoading(false);
      }
    };

    fetchYacht();
  }, [id]);

  const handleBooking = async () => {
    const total_price = yacht.price * numTickets * numDays;

    try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          yacht_id: yacht.id,
          num_tickets: numTickets,
          num_days: numDays,
          total_price: total_price,
        }),
      });

      if (!response.ok) {
        throw new Error('Error making booking');
      }

      const data = await response.json();
      alert('Booking successful!');
      navigate('/');
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{yacht.first_name}</h1>
      <img src={yacht.image} alt={yacht.first_name} />
      <p>{yacht.description}</p>
      <p>Price: {yacht.price} per day</p>
      <div>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numTickets}
            onChange={(e) => setNumTickets(e.target.value)}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Number of Days:
          <input
            type="number"
            value={numDays}
            onChange={(e) => setNumDays(e.target.value)}
            min="1"
          />
        </label>
      </div>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default YachtDetails;
