import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <div className="navbar">
            <h1 className="navh1">LapiEasy</h1>
            <div className="navlinks">
              <NavLink to='/home' >
                  Home
              </NavLink>
              <NavLink to='/itemslist' >
                  Laptops
              </NavLink>
              <NavLink to='/itemsdetails' >
                  Item Details
              </NavLink>
              <NavLink to='/itemslist' >
                  Saved
              </NavLink>
              <NavLink to='/' >
                  Sell
              </NavLink>
            </div>
        </div>
    )
}

export default NavBar