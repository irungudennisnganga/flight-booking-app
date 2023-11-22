import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Flight from './Flight';
import Booking from './Booking';

function App() {
  const [flight, setFlight] = useState([]);
  const [delay,setDelay] = useState(false);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('https://flights-api-512j.onrender.com/flights')
      .then((response) => response.json())
      .then((data) => {setFlight(data)
        setDelay(true);
      })
      .catch((error) => alert(error));
  }, []);

  if (!delay) {
    return <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>
  }

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
          <Route path='/' element={<Flight flight={flight} />} />
          <Route path='/flight' element={<Flight flight={flight} />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </>
  );
}

export default App;