import React, { useState } from 'react'

function Sell({ setLaptops, API }) {

  const [form, setForm] = useState({
    sellerContact: null,
    sellerLocation: "",
    sellerStoreAddress: "",
    model: "",
    image: "",
    price: null,
    operatingSystem: "",
    ram: '',
    processor: '',
    graphicsCard: '',
    storageType: '',
    storageCapacity: '',
    displaySize: '',
    color: '',
    condition: ''
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value})

  function handleSubmit(e) {
    e.preventDefault()

    const updatedForm = {
      sellerContact: form.sellerContact,
      sellerLocation: form.sellerLocation,
      sellerStoreAddress: form.sellerStoreAddress,
      model: form.model,
      image: form.image,
      price: form.price,
      operatingSystem: form.operatingSystem,
      ram: form.ram,
      processor: form.processor,
      graphicsCard: form.graphicsCard,
      storageType: form.storageType,
      storageCapacity: form.storageCapacity,
      displaySize: form.displaySize,
      color: form.color,
      condition: form.condition
    }

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(updatedForm)
    })
    .then(res => res.json()).then(laptops => setLaptops(laptops))
    .catch(console.log)

    setForm({
      sellerContact: null,
      sellerLocation: "",
      sellerStoreAddress: "",
      model: "",
      image: "",
      price: null,
      operatingSystem: "",
      ram: '',
      processor: '',
      graphicsCard: '',
      storageType: '',
      storageCapacity: '',
      displaySize: '',
      color: '',
      condition: ''
    })
  }

  return (
    <div className='sell'>
      <h2>Fill the following details about your product and submit to post it. </h2>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <section>
            <h3>Your Details</h3>
              <label> 
                Contact : &nbsp; 
                <input 
                type='tel' 
                minLength='10'
                name='sellerContact' 
                required 
                placeholder='07123...'
                onChange={handleChange}
                />
              </label> <br />
              <label> 
                Location : &nbsp;
                <input 
                name='sellerLocation' 
                type='text' 
                required
                placeholder='county, city or town'
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Store Address : &nbsp;
                <textarea 
                  name='sellerStoreAddress' 
                  onChange={handleChange}
                  placeholder="store name and/or street address..."
                >
                </textarea>
              </label>
          </section>
          <section>
              <h3>Laptop Details</h3>
              <label> 
                Name / Model : &nbsp;
                <input 
                type='text' 
                name='model' 
                required 
                onChange={handleChange}
                />
              </label> <br />
              <label> 
                Upload Image Url : &nbsp; 
                <textarea 
                  name='image'
                  placeholder="https://website.com/image"
                  pattern ="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"
                  required
                  onChange={handleChange}
                >
                </textarea>
              </label> <br />
              <label>
                Price(Ksh) : &nbsp;
                <input 
                type='number' 
                name='price' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label>
                Operating System : &nbsp;
                <input 
                type='text'
                name='operatingSystem' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                RAM : &nbsp;
                <input 
                type='text'
                name='ram' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Processor : &nbsp;
                <input 
                type='text'
                name='processor' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Graphics Card : &nbsp;
                <input 
                type='text'
                name='graphicsCard' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Storage Type : &nbsp;
                <input 
                type='text'
                name='storageType' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Storage Capacity : &nbsp;
                <input 
                type='text'
                name='storageCapacity' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Display Size(inch) : &nbsp;
                <input 
                type='text'
                name='displaySize' 
                required 
                onChange={handleChange} 
                />
              </label> <br />
              <label> 
                Color : &nbsp;
                <input 
                type='text'
                name='color' 
                onChange={handleChange}
                 />
              </label> <br />
              <label> 
                Condition of Laptop: &nbsp;
                <input 
                type='text'
                name='condition' 
                required
                onChange={handleChange} 
                />
              </label>
          </section>
        </div>
          <input 
          id='submit' 
          type='submit' 
          value='submit'  
          />
      </form>
    </div>
  )
}

export default Sell