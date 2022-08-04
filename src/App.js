import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Painting from './Painting';
import Exhibition from './Exhibition';
import Bio from './Bio';
import Contact from './Contact';
import Store from './Store';
import Home from './Home';



const App = () => {
  return (

    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/painting" element={<Painting />} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/bio' element={<Bio />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

    </Router>

  );
};

export default App;
