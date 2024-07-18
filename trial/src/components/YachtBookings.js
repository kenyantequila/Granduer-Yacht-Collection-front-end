import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const YachtBookings = () => {
    const { yachtId } = useParams();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (yachtId) {
            fetchBookings();
        }
    }, [yachtId]);

    const fetchBookings = async () => {
        try {
            const response = await fetch(`http://localhost:5000/yachts/${yachtId}/bookings`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBookings(data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <div className="yacht-bookings">
            <h3>Bookings for Yacht ID: {yachtId}</h3>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        <p>Number of Tickets: {booking.num_tickets}</p>
                        <p>Number of Days: {booking.num_days}</p>
                        <p>Total Price: ${booking.total_price}</p>
                        <p>Booking Date: {new Date(booking.booking_date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YachtBookings;
