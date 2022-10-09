import React from 'react'
import { useNavigate } from 'react-router'

import './NotFound.css'


export default function NotFound() {

  const navigate = useNavigate()
  return (
    <main className='not-found-main'>
      <div className="not-found-container">
        <h1>Aïe... Cette page n'existe pas</h1>
        <span>Malheureusement cette page n'a pas encore était créer</span>
        <span>Vous pouvez revenir au menu avec le bouton ci-dessous</span>
        <button onClick={() => navigate('/')}>Retourner à l'accueil</button>
      </div>
    </main>
  )
}
