import React from 'react'
import { useState, useEffect } from 'react';

import './PromoBanner.css'

export default function PromoBanner() {

  const [timer, setTimer] = useState(1);

  useEffect(() => {
    
    const intervalBanner = setInterval(() => {
      setTimer(timer => timer +1)
      
    }, 4000);

    return () => {
      clearInterval(intervalBanner)
    }

  },[])

  const [checkedWidth, setcheckedWidth] = useState(window.innerHeight)

  const widthFunc = () => {
    setcheckedWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', widthFunc)

    return () => {
      window.removeEventListener('resize', widthFunc)
    }
  })

  if (timer > 3) {
    setTimer(timer => timer = 1)
  }

  return (
    <div className= 'promo-banner'>
       <span className={timer === 1 ? 'active' : ''}>
        Payer en plusieurs fois
      </span>
      <span className={timer === 2 ? 'active' : ''}>
        {checkedWidth > 600 ? '10€ Offert sur ta première commande avec le code FIRST10' : '10€ Offert FIRST10'}
      </span>
      <span className={timer === 3 ? 'active' : ''}>
        Livraison ultra-rapide
      </span>
    </div>
  )
}
