import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './Child';

function App() {
  function getData(data){
    console.log(data);

  }

  return (
    <>
      <Child prop1={getData} />
    </>
  )
}

export default App
