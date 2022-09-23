import React from 'react'
import './Contact.css'

import ContactSnkrs from './Contact-Snkrs.jpg'

export default function Contact() {
  return (
    <div className='contact-container'>
      <img src={ContactSnkrs} alt='Fond du formulaire de contact avec chaussure verte'/>
      <form action='' method='POST'>
        <div className="title">
          <h1>Contactez-nous !</h1>
          <h3>Pose nous la moindre petite question qui te tracasse.</h3>
        </div>
        <input type="text" name='firstname'placeholder='Prénom'/>
        <input type="text" name='lastname'placeholder='Nom'/>
        <input type="email" name='email'placeholder='Email'/>
        <textarea name="message" id="msg" cols="30" rows="10" placeholder='Votre message'></textarea>
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  )
}
