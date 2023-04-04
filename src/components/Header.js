import React from 'react'
import {Link,NavLink }from "react-router-dom";
function Header() {
  const navLinkStyles=({isActive})=>{
    return{
      textDecoration: isActive?"none":"underline",
      color:isActive?"red":"white"
    }
  }
  return (
    // if we have to give a style then we have to make an object like below
    <div className='header' style={{textAlign:'center'}}>
  <NavLink style={navLinkStyles} to={'/'} >Home</NavLink>
  <NavLink  style={navLinkStyles} to={'/About'}>About</NavLink>
  <NavLink  style={navLinkStyles}  to={'/Contact'}>Contact</NavLink>

  
    </div>
  )
}

export default Header
