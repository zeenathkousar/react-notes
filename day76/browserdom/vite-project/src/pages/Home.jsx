import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
    const var1=useNavigate()
    function func1(){
        var1("/about") 
    }
  return (
    <>
    <div>Home</div>
    {/* <Link to='/about'>About</Link> */}
    <button onClick={func1}>About</button>
    </>
  )
}
