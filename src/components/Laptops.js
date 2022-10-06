import React from 'react'
import LaptopDetails from './LaptopDetails'

function Laptops({ laptops }) {
    
    const laptop = laptops.map(laptop => (
        <main key={laptop.id}>
            <img src={laptop.image} alt={laptop.name} />
            <h4> 
                <span>{laptop.name}</span>
                <span>Ksh. {laptop.price}</span>
                <span>{laptop.specifications.condition}</span>
            </h4>
            <div className='buttons'>
            <button>save / unsave</button>
            <button>More details</button>
            </div>
        </main>
     ))

  return (
    <div className='laptops'>
        {/* <LaptopDetails /> */}
        <h1>Available products</h1>
        <div className='generalDetails'>{laptop}</div>
    </div>
  )
}

export default Laptops