import React, { useEffect, useState } from 'react'

export const Api = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('');
    console.log(search)

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users/').then((result)=>{
            result.json().then((resp)=>{
                // console.log('result',resp)
                setData(resp)
            })
        })
    },[])
    console.log(data)
  return (
    <div>
        <h2>GET api call</h2>
        <input type="text" placeholder='search here' onChange={(e)=> setSearch(e.target.value)}/>
        <table border="1" borderCollapse="collapse">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
            </tr>
            {
                data.filter((item)=>{
                    return search.toString() === '' ? item : item.id.toString().includes(search)
                }).map((item)=> 
                
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                
                )
            }
        </table>
    </div>
  )
}
