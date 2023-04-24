import React from 'react'
import './navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  function handleLogoutClick(e) {
    e.preventDefault();
    fetch("https://buk-a-meal.herokuapp.com/logout", 
    { method: "DELETE" }
    ).then((r) => {
      if (r.ok) {
        
        navigate("/login");
      }else {
        alert("This session has not been stored!");
      }
    });
  }
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
        
        <a href='#' onClick={handleLogoutClick}> Log Out </a>
    
        </li>
        <li> Welcome,</li>

  </ul>


</nav>
    </div>
  )
}

export default Navbar