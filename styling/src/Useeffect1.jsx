import React, { useEffect, useState } from 'react'

export const Useeffect1 = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('useeffect method')
    })

    useEffect(()=>{
        console.log('useeffect method2')
    })


  return (
    <div>
        <h2>useeffect tut {count}</h2>
        <button onClick={()=>setCount(count+1)}>update count</button>
    </div>
  )
}
