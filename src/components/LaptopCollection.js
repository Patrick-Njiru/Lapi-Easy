import React from 'react'

function LaptopCollection({ laptops, handleClick }) {

    const allLaptops = laptops.map(laptop => (
        <div id='laptop_sections'>
        <main>
            <img src={laptop.image} alt={laptop.model} />
            <h4> 
                <span>{laptop.model}</span>
                <span>Ksh. {laptop.price}</span>
                <span>{laptop.condition}</span>
            </h4>
            <h4> Contact Seller : {laptop.sellerContact} </h4>
            <button 
              className='button' 
              key={laptop.id} 
              onClick={() => handleClick(laptop.id)}
            >
                save/unsave
            </button> 
            <details >
                    <p>
                        {/* fhhisis */}
                    </p>
            </details>
        </main>
    </div>
    ))

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Available products
            </h1>
            <div className='laptops'>
                {allLaptops}
            </div>
        </div>
  )
}

export default LaptopCollection