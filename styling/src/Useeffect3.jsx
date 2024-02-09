import React,{useState} from 'react'
import { Propuseffect } from './propuseffect';

export const Useeffect3 = () => {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(0);

  return (
    <div>
        <h2>useeffect tut with props</h2>
        <Propuseffect count={count}  data={data} />
        <button onClick={()=>setCount(count+1)}>update count</button>

        <button onClick={()=>setData(data+1)}> update data</button>
    </div>
  )
}
