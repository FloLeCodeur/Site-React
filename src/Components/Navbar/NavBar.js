import './NavBar.css'
import React, {useState} from 'react'

import { Link } from 'react-router-dom'

import PromoBanner from '../Banner/PromoBanner'


export default function NavBar() {

  const [menuToggle, setMenuToggle] = useState(false)

  const [remove, setRemove] = useState(true);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle)
  }

  const Remove = () => {
    setRemove(!remove)
  }

  return (
    <header>
      {remove && <PromoBanner/>}
      <span onClick={Remove} className="remove-banner">
        x
      </span>
      <nav>
        <div className="site-name">
          <Link to='/'>SneakersLife</Link>
        </div>
        <div className={menuToggle ? "nav-items-container active" : "nav-items-container"}>
          <Link to='/Nouveaute'>Nouveautées</Link>
          <Link to='/products'>Produits</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="right-items-nav">
          <Link to='/cart'><span className="material-symbols-outlined">shopping_cart</span></Link>
          <Link to='/register' className="login-inscription">
          <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
        <div className="btn-nav-toggle">
          <div onClick={handleMenuToggle} className="btn-menu">
            <span className={menuToggle ?"top-line line active" : "top-line line"}></span>
            <span className={menuToggle ?"center-line line active" : "center-line line"}></span>
            <span className={menuToggle ?"bottom-line line active" : "bottom-line line"}></span>
          </div>
        </div>
      </nav>
    </header>
  )
}


