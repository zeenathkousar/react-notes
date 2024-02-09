import React, { useEffect, useState } from 'react'
// import { Useeffect } from './Useeffect1'

export const Useeffect2 = () => {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('useeffect method running')

    },[count])
  return (
    <div>
        <h2>useeffect with condition . count : {count}</h2>
        <h2>data: {data}</h2>
        <button onClick={()=>setCount(count+1)}> update count</button>
        <button onClick={()=>setData(data+1)}> update data</button>

    </div>
  )
}
