import React from 'react'
import {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(10);
    console.log(count);

  return (
    <div>
        <h1>{count}</h1>
        <button className='incrementButton' onClick={()=> setCount(count+1)}>
            +
        </button>
        <button className='decrementButton' onClick={()=> setCount(count-1)}>
            -
        </button>
    </div>
  )
}

export default Counter