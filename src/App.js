import React, {useState, useParams} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Exhibition from './pages/Exhibition';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Store from './pages/Store';

import Test from './pages/Test';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';


const App = () => {
  const [products, setProducts] = useState([]);
  
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Gallery products={products} setProducts={setProducts}/>} />
          <Route path="/gallery" element={<Gallery products={products} setProducts={setProducts}/>} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/store' element={<Store products={products} setProducts={setProducts}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<Test products={products} setProducts={setProducts}/>} /> 
          <Route path='/detail' element={<Detail products={products} setProducts={setProducts}/>} />
      
         
        </Routes>

  

    </Router>

  
  );
};

export default App;
