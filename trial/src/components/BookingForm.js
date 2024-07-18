/* import React, { useState , useEffect} from 'react';
import { createBooking } from '../api/api';
import './BookingForm.css';

function BookingForm() {
  const [yachtId, setYachtId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    
    const fetchBookings = async () =>{
      // Fetch yachts from API
      try {
        const response = await createBooking();
        setYachtId(response); // Assuming response is an array of yachts
        setStartDate(false); // Optional: Set loading to false after fetching
        setEndDate(false); // Optional: Set loading to false after fetching

      } catch (error) {
        console.error('Error fetching yachts:', error);
        // Handle error state or show error message
        setStartDate(false); // Optional: Set loading to false on error
      }
      // Update yachts state with fetched data
    }
    fetchBookings();
  }, []);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = { yacht_id: yachtId, start_date: startDate, end_date: endDate };
    createBooking(bookingData).then(response => {
      alert('Booking created successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Yacht ID:
        <input type="number" value={yachtId} onChange={(e) => setYachtId(e.target.value)} required />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
 */