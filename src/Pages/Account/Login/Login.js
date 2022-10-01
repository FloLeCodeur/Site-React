import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

export default function Login() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="register-inscription-container">
          <h1>Esapce client</h1>
        </div>
        <div className="form-container">
          <form method='POST' className='form-register-inscription'>
            <div className="form-items email-container">
              <label htmlFor="name">Votre E-mail</label>
              <input type="email" name="email"/>
            </div>
            <div className="form-items password-container">
              <label htmlFor="password">Votre mot de passe</label>
              <input type="password" name="password"/>
            </div>
            <div className="form-items submit">
              <button type='submit'>Se connecter</button>
              <span className="register-inscription"> Pas encore inscrit ?
              </span>
                <u><Link to='/inscription'> Inscrivez-vous !</Link></u>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
