import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/bookings?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: { 
                'Content-Type':'application/json', 
                Authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [loggedInUser.email])


    return (
        <div>
            <h3>You Have: {bookings.length} Bookings</h3>
            {
                bookings.map(booking =>   <li key={booking._id}>Name: {booking.name}, From: {(new Date(booking.CheckIn).toDateString('dd/mm/yyyy'))} To: {(new Date(booking.CheckOut).toDateString('dd/mm/yyyy'))}</li> )
            }
        </div>
    );
};

export default Bookings;