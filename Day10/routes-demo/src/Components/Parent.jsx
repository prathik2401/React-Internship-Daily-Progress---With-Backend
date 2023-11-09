import React from 'react'
import CompA from './CompA'
import Context from './Context'

function Parent() {
  return (
    <div>
        <Context>
            <CompA/>
        </Context>
    </div>
  )
}

export default Parent