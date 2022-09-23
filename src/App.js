import './App.css'
import React from "react";

import { Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import Contact from './Pages/Contact/Contact';

function App() {
  return (   
    <>
      <NavBar />

      <Routes>

        <Route  path='/' element={<Home />} />
        <Route  path='/products' element={<Products />} />
        <Route  path='/products/:brand/:id' element={<ProductShowcase />} />
        <Route  path='/contact' element={<Contact />} />
      

      </Routes>

      <Footer />

    </>
  );
}

export default App;
