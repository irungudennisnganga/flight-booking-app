import React, { useState } from 'react';
// import './flightForm.css';
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
    <div>
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
    </div>
  );
};

export default Booking;
