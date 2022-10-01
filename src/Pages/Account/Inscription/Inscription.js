import React from 'react'
import { Link } from 'react-router-dom'

import './Inscription.css'

export default function Inscription() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="register-inscription-container">
          <h1>Inscription</h1>
        </div>
        <div className="form-container">
          <form method='POST' className='form-register-inscription'>
          <div className="form-inputs-inscription">
            <div className="form-inputs-first">
              <div className="form-items firstname">
                <label htmlFor="name">Votre prénom</label>
                <input type="text" name='firstname'/>
              </div>
              <div className="form-items lastname">
                <label htmlFor="name">Votre nom</label>
                <input type="text" name='lastname'/>
              </div>
              <div className="form-items email-container">
                <label htmlFor="email">Votre E-mail</label>
                <input type="email" name='email'/>
              </div>
            </div>
            <div className="form-inputs-password">
              <div className="form-items email-container">
                <label htmlFor="birthday">Votre date d'anniversaire</label>
                <input type="date" name='birthday'/>
              </div>
              <div className="form-items password-container">
                <label htmlFor="password">Votre Mot de passe</label>
                <input type="password" name='password'/>
              </div>
              <div className="form-items password-container">
                <label htmlFor="validated-password">Validez votre mot de passe</label>
                <input type="password" name='validated-password'/>
              </div>
            </div>
          </div>
            <div className="form-items submit">
                <button type='submit'>S'inscrire</button>
                <span className="register-inscription"> Déjà inscrit ?
                </span>
                  <u><Link to='/register'> Connectez-vous !</Link></u>
              </div>
          </form>
        </div>
      </div>
    </main>
  )
}
