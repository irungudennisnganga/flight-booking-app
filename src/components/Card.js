import React from 'react'
import "./Card.css"
function Card({ component}) {
    //console.log(component)
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
          </div>
        )
      })}
    </div>
  )
}

export default Card
