import React,{useEffect} from 'react'

export const Propuseffect = (props) => {
    useEffect(()=>{
        console.log('useeffect method running')

    },[props.count,props.data])
  return (
    <div>
        <h1>useeffect with props . </h1>
        <h2>Count Props: {props.count}</h2>
        <h2>data Props: {props.data}</h2>

    </div>
  )
}
