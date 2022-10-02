import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import SnkrsImg from './SnkrsImg.jpg'
import BCJ4 from './220901_ChroniclesHeader_Air-Jordan-4-Retro-SE-_BLACK-CANVAS“.jpg'

import inventory from '../../data/inventory'

export default function Home() {

  const trendItems = inventory.map((el) => {

    const itemBrand = el.brand

    const items = el.shoes.map((item) => {
      return (
        <Link to={{pathname : `/products/${itemBrand.replace(/\s+/g, "")}/${item.title.replace(/\s+/g, "-").trim()}`}} 
            key={item.id}
        >
          <div className="card-home">
                <div className="products-visual">
                  <img src={process.env.PUBLIC_URL + `ProductsImages/${item.img}.webp`} alt="" />
                </div>
                <div className="product-title">
                  <span>{item.title}</span>
                </div>
                <div className="product-description">
                  <div className="price">
                    A partir de : {item.price}€
                  </div>
                </div>
              </div>
        </Link>
      )
    })

    return (
      <div key={el.key}>
        {items}
      </div>

    )
  })

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
            <span><Link to='/products/Jordan4/Jordan-4-black-Canvas'>Air Jordan 4 Black Canvas</Link></span>
            <div className="news-img">
              <img src={BCJ4} alt="Nouveautées air jordan 4 black canvas" />
            </div>
          </div>
        </section>
        <section className="trend">
          <h2 className="trend-title">Tendances</h2>
          <div className="trend-caroussel-container">
            <div className="trend-caroussel">
              {trendItems}
            </div>
          </div>
        </section>
        <section>
          <div className="product-showcase-home">
            <div className="container-grid">
              <div className="img-container">
                <Link to='products/NewBalance/New-Balance-550-Au-Lait'>
                  <img src={process.env.PUBLIC_URL + `ProductsImages/Home/05_220506_NewBalance550_ChroniclesBanner.jpg`} alt="New balance 550 marron clair et beige" />
                </Link>
              </div>
              <div className="product-showcase-home-description">
                <div className="text-center">
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
          </div>
        </section>
        <section>
          <div className="product-showcase-home two">
            <div className="container-grid two">
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
        </section>      
      </div>
    </>
  )
}
