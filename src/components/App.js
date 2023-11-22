import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar.js';
import Flights from './Flight';
import Bookings from './Booking';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('https://flights-api-512j.onrender.com/flights')
      .then((response) => response.json())
      .then((data) => setFlights(data))
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Flights flights={flights} />} />
        <Route path='/flights' element={<Flights flights={flights} />} />
        <Route path='/bookings' element={<Bookings />} />
      </Routes>
    </>
  );
}

export default App;