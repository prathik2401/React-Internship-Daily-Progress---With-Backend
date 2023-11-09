import React, { useContext } from 'react'
import { name } from './Context';

function CompB() {
    let customText = useContext(name);
  return (
    <div>
        <h1>

        {customText}
        </h1>
    </div>
  )
}

export default CompB