import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let var1='zeenath koiusar'
  function func1(){
     var1='chnaged names'
    alert(var1)
  }

  return (
    <>
    <h1>hello world</h1>
    <p>name is {var1}</p>
    <button onClick={func1}> Click me</button>
    </>
  )
}

export default App
