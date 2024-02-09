import React, { useCallback, useState } from 'react'
import  ChildA  from './ChildA';

export const Usecallbackhook = () => {
    const [add,setAdd]=useState(0);
    const [count,setCount]=useState(0)

    const Learning=useCallback(()=>{
      //some operation
    },[count])
  return (
    <div>
        <h1> usecallback hook practical</h1>
        <ChildA Learning={Learning} count={count}/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add+1)}> Addition</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+2)}> count</button>
    </div>
  )
}
