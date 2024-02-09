import React, { useContext } from 'react'
import {data,data1} from './App.jsx'


export const ChildC = () => {
    const Firstname=useContext(data);
    const  gender =useContext(data1)
  return (
    <div>
        <h1>Hi!! my name is {Firstname}  and my gender is {gender}</h1>

    </div>
  )
}
