import React, { useState } from 'react';
import "./FlightForm.css"
import Booked from './Booked';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
  });
  const [inputData, setInput] = useState([ ])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        departureCity: formData.departureCity,
        destinationCity: formData.destinationCity,
        departureDate: formData.departureDate,
      })
    })
    .then(response => response.json())
    .then(data => setInput(data))
    
  };

  return (
    <div className='holder'>
      <h1 className='header'>Flight Booking Form</h1>
      <form className='input-data' onSubmit={handleSubmit}>
        <label className='label-description' htmlFor="name">Name:</label>
        <input
        className='input-data' 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className='label-description' htmlFor="email">Email:</label>
        <input
        className='input-data'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className='label-description' htmlFor="departureCity">Departure City:</label>
        <input
        className='input-data'
          type="text"
          id="departureCity"
          name="departureCity"
          value={formData.departureCity}
          onChange={handleChange}
          required
        />

        <label className='label-description' htmlFor="destinationCity">Destination City:</label>
        <input
        className='input-data'
          type="text"
          id="destinationCity"
          name="destinationCity"
          value={formData.destinationCity}
          onChange={handleChange}
          required
        />

        <labe className='label-description'l htmlFor="departureDate">Departure Date:</labe>
        <input
        className='input-data'
          type="date"
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />

        <button className='submit-btn' type="submit">Submit Booking</button>
      </form>
      <Booked />
    </div>
  );
};

export default Booking;
