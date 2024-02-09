import React, { useState } from 'react'

export const HandleForm = () => {
  const [var1,setVar1]=useState('');
  const [var2,setVar2]=useState(false);
  const [var3,setVar3]=useState('');

  function getFormData(e){
    console.log(var1,var2,var3)
    e.preventDefault()
  }
  return (
    <div>
        <h1>Handle form in react</h1>
        <form action="" onSubmit={getFormData}>
            <input type="text"  placeholder='enter your name'  value={var1} onChange={(e)=>setVar1(e.target.value)}/> <br/>
            <select onChange={(e)=>setVar3(e.target.value)}>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
 
            </select> <br/> <br/>
            <input type="checkbox" onChange={(e)=>setVar2(e.target.checked)}/> <span>Accept terms and conditions</span> 
            <br /> <br />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
