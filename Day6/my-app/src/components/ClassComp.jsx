import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state={name:"Class Component"}
    }


  render() {
    let changeName=()=>{
      this.setState({name:"HELLO"})
    }
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={changeName}>click</button>
      </div>
    )
  }
}