import './App.css'
import React from "react";

import { Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import Contact from './Pages/Contact/Contact';

import Login from './Pages/Account/Login/Login';
import Inscription from './Pages/Account/Inscription/Inscription';


function App() {
  return (   
    <>
      <NavBar />

      <Routes>

        <Route  path='/' element={<Home />} />
        <Route  path='/products' element={<Products />} />
        <Route  path='/products/:brand/:id' element={<ProductShowcase />} />
        <Route  path='/contact' element={<Contact />} />

        <Route path='/register' element={<Login/>}/>
        <Route path='/inscription' element={<Inscription/>}/>

      </Routes>

      <Footer />

    </>
  );
}

export default App;
