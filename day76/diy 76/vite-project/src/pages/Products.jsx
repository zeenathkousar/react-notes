import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <div> 
        <h2>Products Page</h2>
        {/* <button><NavLink to='comp1' >call or mail us </NavLink></button>
        <button><NavLink to='address' >drop a letter</NavLink></button>
        <Outlet /> */}
        <Link  to='
        ' style={{marginRight: '10px'}}>product 1</Link>
        <Link  to ='456' style={{marginRight: '10px'}}>product 2</Link>
        <Link to='789' style={{marginRight: '10px'}}>product 3</Link>
        <Outlet />

        
    </div>
  )
}
