import React from 'react'

function LaptopDetails({ laptop }) {
  return (
    <div>
        <h3 style={{textAlign: 'center'}}>Specs</h3>
        <div className='specs'>
            <section>
              <p className='firstP'>{laptop.operatingSystem}</p>
              <p className="secondP">Operating System</p>
            </section>
            <section>
              <p className='firstP'>{laptop.graphicsCard}</p>
              <p className="secondP">Graphics Card</p>
            </section>
            <section>
              <p className='firstP'>{laptop.processor}</p>
              <p className="secondP">Processor</p>
            </section>
            <section>
              <p className='firstP'>{laptop.storageType}</p>
              <p className="secondP">Storage Type</p>
            </section>
            <section>
              <p className='firstP'>{laptop.storageCapacity}</p>
              <p className="secondP">Storage Capacity</p>
            </section>
            <section>
              <p className='firstP'>{laptop.ram}</p>
              <p className="secondP">Ram</p>
            </section>
            <section>
              <p className='firstP'>{laptop.displaySize}</p>
              <p className="secondP">Display Size (inch)</p>
            </section>
            <section>
              <p className='firstP'>{laptop.color}</p>
              <p className="secondP">Color</p>
            </section>
        </div>
        <section>
            <p className="secondP">Seller Address</p>
            <p className='firstP'>{laptop.sellerStoreAddress}</p>
        </section>    </div>
  )
}

export default LaptopDetails