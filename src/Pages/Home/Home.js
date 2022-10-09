import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import SnkrsImg from './SnkrsImg.jpg'
import TrendGallery from './TrendGallery/TrendHomeGallery'
import HomeGallery from './HomeGallery/HomeGallery'


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
            <span><Link to='/products/Jordan1/Jordan-1-Low-OG-Bleached-Choral'>Air Jordan 1 Low Og Choral</Link></span>
            <div className="news-img">
              <img src={process.env.PUBLIC_URL + `ProductsImages/Home/air-jordan-1-low-og-bleached-coral-cz0790-061-1.webp`} alt="Nouveautées air jordan 4 black canvas" />
            </div>
          </div>
        </section>
        <section className="trend">
          <h2 className="trend-title">Tendances</h2>
            <TrendGallery/>
        </section>
        <section>
          <div className="showcase-home">
            <div className="home-showcase-wrapper">
              <div className="home-showcase-img-container">
                <Link to='products/NewBalance/New-Balance-550-Au-Lait'>
                  <img src={process.env.PUBLIC_URL + `ProductsImages/Home/05_220506_NewBalance550_ChroniclesBanner.jpg`} alt="" />
                </Link>
              </div>
              <div className="showcase-home-description">
                <div className="showcase-home-description-wrapper">
                  <Link to='products/NewBalance/New-Balance-550-Au-Lait'>
                    <h2 className='title-product-home-showcase'>New Balance 550 Au Lait</h2>
                  </Link>
                  <span>Laissez vous tenter pas notre nouvelle pépite tout droit venue des entrepôts américains de New Balance!</span>
                  <span>Des coloris chaud prêt à affrontées les temps plus frais.</span>
                  <Link className="btn" to='products/NewBalance/New-Balance-550-Au-Lait'>
                    <span>Découvrir</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home-showcase-wrapper">
              <div className="home-showcase-img-container">
              <Link to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                  <img src={process.env.PUBLIC_URL + `ProductsImages/Home/IG_1051645-Dunk-Low-white-archaeo-pink-2.jpg`} alt="New balance 550 marron clair et beige" />
                </Link>
              </div>
              <div className="showcase-home-description">
                <div className="showcase-home-description-wrapper">
                <Link to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                    <h2 className='title-product-home-showcase'>Nike Dunk Low Archeo Pink</h2>
                  </Link>
                  <span>Une silouhette iconique, un rose doux. Une petite douceur pour rester en été</span>
                  <span>Prêts à illuminer durant cette saison.</span>
                  <Link className="btn" to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                    <span>Découvrir</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="product-showcase-home two">
            <div className="container-wrapper two">
              <div className="img-container two">
                <Link to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                  <img src={process.env.PUBLIC_URL + `ProductsImages/Home/IG_1051645-Dunk-Low-white-archaeo-pink-2.jpg`} alt="New balance 550 marron clair et beige" />
                </Link>
              </div>
              <div className="product-showcase-home-description two">
                <div className="text-center two">
                  <Link to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                    <h2 className='title-product-home-showcase'>Nike Dunk Low Archeo Pink</h2>
                  </Link>
                  <span>Une silouhette iconique, un rose doux. Une petite douceur pour rester en été</span>
                  <span>Prêts à illuminer durant cette saison.</span>
                  <Link className="btn" to='products/Nike/Nike-Dunk-Low-Archeo-Pink'>
                    <span>Découvrir</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section>
          <HomeGallery/>
        </section>
      </div>
    </>
  )
}
