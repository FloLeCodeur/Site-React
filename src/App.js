import './App.css'
import React from "react";

import { Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import News from './Pages/News/News';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import Contact from './Pages/Contact/Contact';

import Login from './Pages/Account/Login/Login';
import Inscription from './Pages/Account/Inscription/Inscription';

import NotFound from './Pages/Notfound/NotFound';


function App() {
  return (   
    <>
      <NavBar />

      <Routes>

        <Route  path='/' element={<Home />} />
        <Route  path='/products' element={<Products />} />
        <Route  path='/Nouveaute' element={<News/>}/>
        <Route  path='/products/:brand/:id' element={<ProductShowcase />} />
        <Route  path='/contact' element={<Contact />} />

        <Route path='/register' element={<Login/>}/>
        <Route path='/inscription' element={<Inscription/>}/>

      
        <Route path='*' element={<NotFound/>}/>

      </Routes>

      <Footer />


    </>
  );
}

export default App;
