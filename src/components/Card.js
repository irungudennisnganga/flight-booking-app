import React from 'react'
import "./Card.css"
function Card({ component}) {
    console.log(component)
    function handleClick(id,booked) {
        
        // if(!booked){
        //    return 
        // } else{
        //   return alert(false);
        // }

        fetch(`https://flights-api-512j.onrender.com/flights/${id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    booked: true
                })
            })

    }
    //if(!component) return <p>Loading....</p> 
  return (
    <div className='card-holder'>
      {component.map( flight =>{
        return (
          <div className='card' key={flight.id}>
            <img className='image' src={flight.image} alt={flight.name} />
            <h3 className='card-title'>{flight.name}</h3>
            <p> <b className='card-text'>Depature </b> : {flight.depature}</p>
            <p> <b className='card-text'>Arrival</b>   : {flight.arival}</p>
            <p> <b className='card-text'>Price</b>     : {flight.price}</p> 
            <p> <b className='card-text'>Aeroplane </b>: {flight.aeroplane}</p>
            <button onClick={ () => handleClick(flight.id,flight.booked)} className='book-btn'>Book Ticket</button>
          </div>
        )
      })}
    </div>
  )
}

export default Card
