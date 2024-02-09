import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const refVariable=useRef();
  const [name,setName]=useState('zeenath');
  console.log(refVariable)

  function reset(){
    setName(' ');
    refVariable.current.focus()
  }
  function handleInput(){
    refVariable.current.style.color="blues"
  }

  return (
    <>
     <h1>Learning useRef hook.</h1>
     <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
     <button ref={refVariable} onClick={reset}>reset</button>
     <button onClick={handleInput}>handle input</button>


    </>
  )
}

export default App
