import React, { useEffect } from 'react'
import {useState} from 'react'
function Counter() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    let incrementNumber = () => {
      setCount1(prev => prev+1);
    }

    let increment2 = () => {
      setCount2(prev => prev+1);
    }

    useEffect(() => {
      console.log("Clicked");
    }, [count2])
    

  return (
    <div>
        <h1>Count1 : {count1} Count2 : {count2}</h1>
        <button className='incrementButton' onClick={incrementNumber}>
            +
        </button>
        <button className='decrementButton' onClick={increment2}>
            +2
        </button>
    </div>
  )
}

export default Counter