import React from 'react'

function Sell() {
  return (
    <div className='sell'>
      <h2>Fill the following details about your product and submit to post it. </h2>
      <form>
        <div>
          <section>
            <h3>Your Details</h3>
              <label> 
                Contact : <input type='tel' required />
              </label> <br />
              <label> 
                Store Address : <input type='text' />
              </label>
          </section>
          <section>
              <h3>Laptop Details</h3>
              <label> 
                Picture : <input type='file' required />
              </label> <br />
              <label>
                Price : <input type='number' required />  <br />
              </label> 
              <label>
                Operating System : <input type='text' required />
              </label> <br />
              <label> 
                RAM : <input type='text' required />
              </label> <br />
              <label> 
                Processor : <input type='text' required />
              </label> <br />
              <label> 
                Graphics Card : <input type='text' required />
              </label> <br />
              <label> 
                Storage Type : <input type='text' required />
              </label> <br />
              <label> 
                Storage Capacity : <input type='text' required />
              </label> <br />
              <label> 
                Display Size(inch) : <input type='text' required />
              </label> <br />
              <label> 
                Color : <input type='text' />
              </label> <br />
              <label> 
                Condition : <input type='text' required />
              </label>
          </section>
          <input id='submit' type='submit' value='post' />
        </div>
      </form>
    </div>
  )
}

export default Sell