import React, {useState, useEffect} from 'react';
import Home from './Home';
import LaptopCollection from './LaptopCollection';
import NavBar from './NavBar';
import Saved from './Saved';
import Sell from './Sell';
import Footer from './Footer';
import NotFound from './NotFound';
import {Routes, Route} from "react-router-dom"

function App() {
  
  const [laptops, setLaptops] = useState([])
  const [savedLaptops, setSavedLaptops] = useState([])


  const API = 'https://patrick-ecommerce-server.herokuapp.com/laptops' // my deployed json-server

  useEffect(() => {
    console.log("UseEffect called");
    fetch(API).then(console.log("Loading ...")).then(res=> res.json()).then(data => setLaptops(data)).catch(console.log)
  }, [])

  const saveLaptop = id => setSavedLaptops(laptops.map(laptop => id === laptop.id ? {...laptop, isSaved: true}: laptop ))
  const removeSavedLaptop = id => setSavedLaptops(laptops.filter(laptop => id === laptop.id ))

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route 
          path='/laptops' 
          element={<LaptopCollection handleClick={saveLaptop} laptops={laptops} />} 
        />
        <Route 
          path='/saved' 
          element={
            <Saved 
              handleClick={removeSavedLaptop} 
              laptops={laptops.filter(laptop => laptop.saved)} 
            />
          } 
        />
        <Route path='/sell' element={<Sell API={API} setLaptops={setLaptops} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
