import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './Child'

function App() {

  return (
    <>
      <h2>parent element</h2>
      <Child text='helloworld'/>
    </>
  )
}

export default App
