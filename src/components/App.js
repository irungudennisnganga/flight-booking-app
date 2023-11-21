import Card from './Card';
import './App.css';
import { useState,useEffect } from 'react';
function App() {

  const [component,setComponent] = useState([])

useEffect(() => {
  fetch(`https://flights-api-512j.onrender.com/flights`)
    .then((response) => response.json())
    .then((flights) => setComponent(flights))
},[])
  return (
    <div className="App">
      <Card component={component}/>
    </div>
  );
}

export default App;
