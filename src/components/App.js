import React, {useState, useEffect} from 'react';
import Home from './Home';
import Laptops from './Laptops';
import NavBar from './NavBar';
import Saved from './Saved';
import Sell from './Sell';
import Footer from './Footer';
import NotFound from './NotFound';
import {Routes, Route} from "react-router-dom"

function App() {
  
  const [laptops, setLaptops] = useState([])
  const API = 'https://patrick-ecommerce-server.herokuapp.com/laptops'

  useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLaptops(data)).catch(console.log)
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/laptops' element={<Laptops laptops={laptops} />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
