import React, {useState, useEffect} from 'react';

function App() {
  
  const [laptops, setLaptops] = useState([])
  const API = 'https://patrick-ecommerce-server.herokuapp.com/laptops'

  useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLaptops(data)).catch(console.log)
  }, [])

  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}

export default App;
