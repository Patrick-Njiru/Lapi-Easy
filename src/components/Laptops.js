import React from 'react'
import LaptopDetails from './LaptopDetails'

function Laptops({ laptops }) {

    const laptop = laptops.map(laptop => (
        <div id='laptop_sections'>
            <main key={laptop.id}>
                <img src={laptop.image} alt={laptop.name} />
                <h4> 
                    <span>{laptop.model}</span>
                    <span>Ksh. {laptop.price}</span>
                    <span>{laptop.condition}</span>
                </h4>
                <div className='buttons'>
                <button>save / unsave</button>
                <button>Details</button>
                </div>
            </main>
            <LaptopDetails key={laptop.id} laptop={laptop} />
        </div>   
     ))

  return (
    <div className='laptops'>
        <h1>Available products</h1>
        {laptop}
    </div>
  )
}

export default Laptops