import Flight from './Flight'
import './App.css';
import {Routes, Route} from "react-router-dom"
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Booking from './Booking'



function App() {

   const [flight,setFlight] = useState([])
  const [load, setLoad]=useState(false)

useEffect(() => {
  fetch(`https://flights-api-512j.onrender.com/flights`)
    .then((response) => response.json())
    .then((data) =>{ setFlight(data)
      setLoad(true)
    })

    .catch((error) => alert(error))
    
    
},[])
if(!load) {
  return <div>
    <div className="container">
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
    </div>
}
  return (
    <>
     
     <Navbar />
      <Routes>
        <Route path='/' element={<Flight  flight={flight} />} />
        <Route path='/flights' element={<Flight flights={flight} />} />
        <Route path='/bookings' element={<Booking />} />
      </Routes>
    
    </>
  );
}

export default App;
