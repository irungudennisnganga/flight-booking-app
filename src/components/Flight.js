import React from 'react';
import { Link } from 'react-router-dom';
import './Flight.css'
import Footer from './Footer';

function Flight({ flight }) {
  function handleClick(id) {
    fetch(`https://flights-api-512j.onrender.com/flights/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        booked: true
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response if needed
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  return (
    <>
    <div className='card-holder'>
      {flight.map(flightItem => (
        <div className='card' key={flightItem.id}>
          <img className='image' src={flightItem.image} alt={flightItem.name} />
          <h3 className='card-title'>{flightItem.name}</h3>
          <p>
            <b className='card-text'>Depature</b>: {flightItem.depature}
          </p>
          <p>
            <b className='card-text'>Arrival</b>: {flightItem.arival}
          </p>
          <p>
            <b className='card-text'>Price</b>: {flightItem.price}
          </p>
          <p>
            <b className='card-text'>Aeroplane</b>: {flightItem.aeroplane}
          </p>
         <button onClick={() => handleClick(flightItem.id)} className='book-btn'>
         <Link to="/Booking" >Book Ticket</Link>
          </button>
        </div>
      ))}
      
    </div>
    <Footer />
    </>
  );
}

export default Flight;
