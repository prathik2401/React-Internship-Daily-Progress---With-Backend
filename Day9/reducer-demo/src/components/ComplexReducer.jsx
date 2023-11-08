import { useReducer } from "react";
import React from 'react'

let initialValue = 0;

function reducer(state, action) {
    switch (action.type) {
        case "increment":
                return state+action.payload;    
        case "decrement":
                return state-action.payload;    
        case "clear":
                return action.payload;    
        default:    
                return state;
    }
}

function CommplexReducer() {
    const [count, dispatch] = useReducer(reducer, initialValue)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch({type : "increment", payload: 1})}}>Increment</button>
        <button onClick={()=>{dispatch({type : "decrement", payload: 1})}}>Decrement</button>
        <button onClick={()=>{dispatch({type : "clear", payload: 0})}}>Clear</button>
    </div>
  )
}

export default CommplexReducer