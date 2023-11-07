import React from 'react'

export default function Sample2child({title,width,height}) {
    
  return (
    <div>
        Sample2child
       <h4>{title} </h4>
       <img src="https://images.unsplash.com/photo-1682685797818-c9dc151d241e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" width={width} height={height} alt="" /> 
       
    </div>
  )
}