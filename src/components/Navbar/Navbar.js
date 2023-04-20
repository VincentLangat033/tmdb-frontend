import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div > 
<nav>
  <ul>
    <li>  
      <NavLink to='/'>
        <a href='#'> Home  </a>
        </NavLink>
        </li>
        <li>  
      <NavLink to='/'>
        <a href='#'> About </a>
        </NavLink>
        </li>
        <li>  
      <NavLink to='/login'>
        <a href='#'> Login  </a>
        </NavLink>
        </li>
        <li>  
      <NavLink to='/register'>
        <a href='#'> Register </a>
        </NavLink>
        </li>
        <li>  
      <NavLink to='/'>
        <a href='#'> Contact Us  </a>
        </NavLink>
        </li>
        <li> Welcome,</li>

  </ul>


</nav>
    </div>
  )
}

export default Navbar