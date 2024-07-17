import React, { useEffect, useState } from 'react';
import { getBookings } from '../api/api';
function BookingManagementPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
   const fetchBookingList = async ( )=>{
     try {
       const response = await getBookings();
       setBookings(response.data);
     } catch (error) {
       console.error('Error fetching bookings:', error);
       setBookings (null);
     }
   }
    fetchBookingList();
  }, []);

  return (
    <div>
      <h1>Manage Bookings</h1>
      <div className="booking-list">
        {bookings.map(booking => (
          <div key={booking.id} className="booking-item">
            <p>Yacht ID: {booking.yacht_id}</p>
            <p>Start Date: {booking.start_date}</p>
            <p>End Date: {booking.end_date}</p>
            <p>Status: {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingManagementPage;
