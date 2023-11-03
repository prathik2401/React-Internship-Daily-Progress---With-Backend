import React from 'react'

function Events() {
    let handler=()=>{
        alert("HELLO");

    }
        
  return (
    <div>
        <button onClick={()=>alert("Hello world") } >CLick me </button>
        <button onMouseOver={()=>(handler())}> Button 2 </button>
        </div>
  )
}

export default Events