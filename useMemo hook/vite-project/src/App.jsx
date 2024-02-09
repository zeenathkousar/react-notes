import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  [add,setAdd]=useState(0);
  const [minus,setMinus]=useState(0);

  // function multiply(){
  //   console.log('*****')
  //   return add*10;
  // }
  const multiplication=useMemo(function multiply(){
    console.log('*****');
    return add*10
  },[add])

  return (
    <>
      <div>
        <h1>Use Memo hook </h1>
        {multiplication} <br/>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <span>{add}</span> <br/>
        <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
        <span>{minus}</span>


      </div>
    </>
  )
}

export default App
