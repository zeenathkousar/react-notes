import React from 'react'
import {Link} from 'react-router-dom'

export const Navabar = () => {
  return (
    <div>
        <ul>

            <li>
                
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/about'>about</Link>
            </li>
        </ul>
    </div>
  )
}
