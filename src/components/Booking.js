import React, { useState } from 'react';
import "./FlightForm.css"
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //setFormData('')
    // You can handle the form submission logic here or send the data to a backend
    console.log('Form submitted:', formData);
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
    </div>
  );
};

export default Booking;
