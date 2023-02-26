import React, {useState, useEffect} from 'react';
import Home from './Home';
import LaptopCollection from './LaptopCollection';
import NavBar from './NavBar';
import Sell from './Sell';
import Footer from './Footer';
import NotFound from './NotFound';
import {Routes, Route} from "react-router-dom"

function App() {
  
  const [laptops, setLaptops] = useState([])

  const API = 'http://localhost:3000/laptops' // my deployed json-server is not functional anymore

  useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLaptops(data)).catch(console.log)
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/laptops' element={<LaptopCollection laptops={laptops} />} />
        <Route path='/sell' element={<Sell API={API} setLaptops={setLaptops} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
