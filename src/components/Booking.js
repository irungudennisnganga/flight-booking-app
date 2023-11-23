import React, { useState, useEffect } from 'react';
import './FlightForm.css';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
   
    fetch('https://booked-fiwq.onrender.com/booked') 
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('https://booked-fiwq.onrender.com/booked', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Update state with the new booking
        setBookings([...bookings, data]);
      });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      departureCity: '',
      destinationCity: '',
      departureDate: '',
    });
  };

  return (
    <div id='booking'>
      <h1>Flight Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="departureCity">Departure City:</label>
        <input
          type="text"
          id="departureCity"
          name="departureCity"
          value={formData.departureCity}
          onChange={handleChange}
          required
        />

        <label htmlFor="destinationCity">Destination City:</label>
        <input
          type="text"
          id="destinationCity"
          name="destinationCity"
          value={formData.destinationCity}
          onChange={handleChange}
          required
        />

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Booking</button>
      </form>

      <div>
        <h2>Bookings</h2>
        <ul>
  {bookings.map((booking, index) => (
    <li key={index}>
      <div>
        <strong>Name:</strong> {booking.name}
      </div>
      <div>
        <strong>Email:</strong> {booking.email}
      </div>
      <div>
        <strong>Departure City:</strong> {booking.departureCity}
      </div>
      <div>
        <strong>Destination City:</strong> {booking.destinationCity}
      </div>
      <div>
        <strong>Departure Date:</strong> {booking.departureDate}
      </div>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default Booking;
