import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <Link to='/contact'>Contact</Link>
        <Link to='/aide'>Aide</Link>
        <Link to='/faq'>FAQ</Link>
      </div>
      <div className="footer-logo-site">
        <span>SneakersLifeⒸ</span>
      </div>
      <div className="footer-right">
        <span>Based in France </span>
        <span className="french-flag">
          <span className="blue"></span>
          <span className="white"></span>
          <span className="red"></span>
        </span>
      </div>
    </footer>
  )
}
