import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiChevronDown} from "react-icons/bi"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <NavLink to="/">
    <img src="./images/logo.png" alt="logo" />
   </NavLink>
      <div className="navbar-toggler d-flex align-items-center" >
            <NavLink className="nav-link" to="#">ProfileName</NavLink>
            <BiChevronDown className='down-arrow'/>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item me-2">
            <NavLink className="nav-link"  to="#">My Assignment</NavLink>
          </li>
          <li className="nav-item me-2">
            <NavLink className="nav-link" to="#">Chat with Mentor</NavLink>
          </li>
          <li className="nav-item me-2 d-flex justify-content-center align-items-center">
            <img src="./images/account.svg" alt="account" />
            <NavLink className="nav-link" to="#">ProfileName</NavLink>
            <BiChevronDown className='down-arrow'/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;