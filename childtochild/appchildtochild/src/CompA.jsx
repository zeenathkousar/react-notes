import React, { useState } from 'react'

export const CompA = (props) => {
    // const [name,setName]=useState('zee');
    // function handleclick(){
    //     if(name== 'zee'){
    //         setName('kou')
    //     }
    //     else {
    //         setName('zee')
    //     }
    // }
  
  return (
    <div>
        <h2>CompA</h2>
        <p>name is {props.name}</p>
        <button onClick={()=>props.handleclick()}>update name</button>
    </div>

  )
}
