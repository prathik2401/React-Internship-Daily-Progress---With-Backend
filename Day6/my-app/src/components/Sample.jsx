import React from 'react'
import customStyle from './style.module.css'

function Sample() {
  return (
    <div>
        <h1 style={{color:"red"}} className={customStyle.sample}>
            Welcome
        </h1>
    </div>
  )
}

export default Sample