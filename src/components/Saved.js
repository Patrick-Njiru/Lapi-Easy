import React from 'react'
import LaptopCard from './LaptopCard'

function Saved({savedLaptops, handleClick}) {

  const allSavedLaptops = savedLaptops.map(laptop => (<LaptopCard key={laptop.id} handleClick={handleClick} laptop={laptop} />))
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            Available products
        </h1>
        <div className='laptops'>
            {allSavedLaptops}
        </div>
    </div>
  )
}

export default Saved