import React from 'react';
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className='home'>
        <br /><br /><br />
        <main className='about'>
            <h2>About</h2>
            <h3>A platform designed primarily for college students around the country to give them an easier time when searching for suitable laptops for their academic studies at affordable prices based on their preferences. Apart from a wide variety of laptops, the students or other interested parties also get a chance to negotiate prices with sellers and also post their own laptops that they may want to sell. More details about a product can be seen when you press the details button at the bottom of each item.</h3>
        </main>
        <NavLink className='products' to="/laptops">
            View Laptops &nbsp;
            <i className="fa-solid fa-arrow-right"></i>
        </NavLink>
    </div>
  )
}

export default Home