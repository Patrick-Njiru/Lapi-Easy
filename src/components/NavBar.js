import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <nav className="navbar">
            <h1 className="navh1">LapiEasy</h1>
            <div className="navlinks">
              <NavLink to='/' >
                  Home
              </NavLink>
              <NavLink to='/laptops' >
                  Laptops
              </NavLink>
              <NavLink to='/sell' >
                  Sell
              </NavLink>
            </div>
        </nav>
    )
}

export default NavBar