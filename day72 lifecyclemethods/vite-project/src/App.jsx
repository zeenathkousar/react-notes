import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

class App extends React.Component{
  constructor(){
    super();
      this.state={
        data: 'zeenath'
      }
      console.log('constructor')
  }
  render(){
    console.log('render method')
    return(
      <h1>hello world {this.state.data}</h1>
    )
  }
}
export default App
