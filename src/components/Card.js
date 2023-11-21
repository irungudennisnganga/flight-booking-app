import React from 'react'
import "./Card.css"
function Card({ component}) {
    console.log(component)
  return (
    <div className='card-holder'>
      {component.map( flight =>{
        return (
          <div className='card' key={flight.id}>
            <img className='image' src={flight.image} alt={flight.name} />
            <h3>{flight.name}</h3>
            <p>Depature : {flight.depature}</p>
            <p>Arrival : {flight.arival}</p>
            <p>Price : {flight.price}</p> 
          </div>
        )
      })}
    </div>
  )
}

export default Card
