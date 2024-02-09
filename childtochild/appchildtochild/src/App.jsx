import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CompA } from './CompA'
import { CompB } from './CompB'

function App() {
  const [name,setName]=useState('zee');
  function handleclick(){
      if(name== 'zee'){
          setName('kou')
      }
      else {
          setName('zee')
      }
  }


  return (
    <>
      <h2>App or parent compoenent</h2>
      <CompA name={name} handleclick={handleclick}/>
      <CompB name={name} handleclick={handleclick}/>
    </>
  )
}

export default App
