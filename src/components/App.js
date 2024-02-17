import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Flight from './Flight';
import Booking from './Booking';
import TermsAndCondition from './TermsAndCondition';
import Footer from './Footer';
import './App.css'

function App() {
  const [flight, setFlight] = useState([]);
  const [delay,setDelay] = useState(false);

  useEffect(() => {
    fetch('https://flights-api-512j.onrender.com/flights')
      .then((response) => response.json())
      .then((data) => {setFlight(data)
        setDelay(true);
      })
      .catch((error) => alert(error));
  }, []);

  if (!delay) {
    return <div className="container">
    <div className="cloud front">
      <span className="left-front"></span>
      <span className="right-front"></span>
    </div>
    <span className="sun sunshine"></span>
    <span className="sun"></span>
    <div className="cloud back">
      <span className="left-back"></span>
      <span className="right-back"></span>
    </div>
  </div>
  }

  return (
    
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Flight flight={flight} />} />
          <Route path='/flight' element={<Flight flight={flight} />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/TermsAndCondition' element={<TermsAndCondition />} />
        </Routes>
       
      </>
   
  );
}

export default App;