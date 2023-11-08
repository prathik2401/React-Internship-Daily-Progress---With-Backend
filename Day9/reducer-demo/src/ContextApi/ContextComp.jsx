import React from 'react'

function ContextComp() {
  return (
    <div>
        <Form/>
    </div>
  )
}

export default ContextComp

function Form() {
    return(
        <div>
            <button>Click 1</button>
            <button>Click 2</button>
        </div>
    )
}