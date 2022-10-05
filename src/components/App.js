import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';

function App() {
  
  const [laptops, setLaptops] = useState([])
  const API = 'https://patrick-ecommerce-server.herokuapp.com/laptops'

  useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLaptops(data)).catch(console.log)
  }, [])

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
