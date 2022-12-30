import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exhibition from './pages/Exhibition';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';

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
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
