import React, { useState } from 'react'

export const Toggle = () => {
    const [status,setStatus]=useState(true)
  return (
    <div>
        { status ?  <h1>Hello World! </h1>: ""}
        <button onClick={()=> setStatus(false)}> Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}
