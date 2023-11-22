import Flight from './Flight'
import './App.css';
import { useState,useEffect } from 'react';
import Booking from './Booking';
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
     
      <Flight component={component}/>
      <Booking />
    </div>
  );
}
{/* */}
export default App;
