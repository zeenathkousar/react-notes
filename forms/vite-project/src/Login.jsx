import React, { useState } from 'react'

export const Login = () => {
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');
    const [userErr,setUserErr]=useState(false)

    function LoginHandle(e){
        e.preventDefault()

    }
    function handleChange(e){
        let item=e.target.value;
        if(item.length<3){
            // console.log('invalid')
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        console.log(e.target.value)

    }
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={LoginHandle}>
                <input type="text"  placeholder='Enter user id' onChange={handleChange} /> {userErr ? <span>User not valid</span> : ""}
                <br/> <br/>
                <input type="text"  placeholder='Enter user password'/>
                <br /> <br />
                <button type='submit'>Login</button>

        </form>
    </div>
  )
}
