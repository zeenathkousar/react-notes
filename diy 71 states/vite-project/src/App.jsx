import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count : 0 //setting initialvalue as 0
    }}
  
  inc(){
    this.setState({
      count:this.state.count+1
    })
  }
  dec(){
    this.setState({
      count:this.state.count-1
    })
  }
  reset(){
    this.setState({
      count:0
    })

  }
  

  render(){
  return (
    <>
      <h2>counter</h2>
      <p>{this.state.count}</p>
      <button onClick={()=> this.inc()}>Increment</button>
      <button onClick={()=> this.dec()}>Decrement</button>
      <button onClick={()=> this.reset()}>Reset</button>
    </>
  )
  }
}


export default App
