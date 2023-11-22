import Card from './Flight';
import './App.css';
import { useState,useEffect } from 'react';
 import FlightBookingForm from './flightForm';
function App() {

  const [component,setComponent] = useState([])

useEffect(() => {
  fetch(`https://flights-api-512j.onrender.com/flights`)
    .then((response) => response.json())
    .then((flights) => setComponent(flights))
    .catch((error) => alert(error))
    
},[])
  return (
    <div className="App">
     
      <Card component={component}/>
      <FlightBookingForm />
    </div>
  );
}
{/* */}
export default App;
