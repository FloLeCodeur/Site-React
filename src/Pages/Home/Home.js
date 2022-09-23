import React from 'react'
import './Home.css'
import SnkrsImg from './SnkrsImg.jpg'
import BCJ4 from './220901_ChroniclesHeader_Air-Jordan-4-Retro-SE-_BLACK-CANVAS“.jpg'

export default function Home() {
  return (
    <>
      <div className='home-hero'>
        <img src={SnkrsImg} alt="Jordan 1 rouge d'accueil" />
        <h1>Sneakerslife</h1>
      </div>
      <div className="home-container">
        <section className="news-container">
          <h2 className="news-title">Nouveautées</h2>
          <div className="news-img-container">
            <span>Air Jordan 4 Black Canvas</span>
            <div className="news-img">
              <img src={BCJ4} alt="Nouveautées air jordan 4 black canvas" />
            </div>
          </div>
        </section>
          <section className="trend">
            <h2 className="trend-title">Tendances</h2>
          </section>
      </div>
    </>
  )
}
