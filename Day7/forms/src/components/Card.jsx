import React from 'react'

function Card({place}) {
  return (
    <div>   
        <h1>{place.name}</h1>
        <h1>{place.city}</h1>
        <img src={place.url} alt="" />
    </div>
  )
}

export default Card