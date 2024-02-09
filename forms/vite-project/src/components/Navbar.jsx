import {Link, NavLink} from 'react-router-dom'

function Navbar(){
    return(
        <>
            <ul className="Navbar">
                <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/Product">Product</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar