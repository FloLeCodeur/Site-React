import React from 'react'
import './News.css'

export default function News() {
  return (
    <main className="main-news">
        <h1>Nouveautées</h1>
      <div className='news-container'>
        <div>
          <div className='img-container'>
            <img src={process.env.PUBLIC_URL + `ProductsImages/News/donald-martinez-EGWyfNEz6Ho-unsplash.jpg`} alt="" />
          </div>
          <div className="descrition-container">
            <div className="description-wrapper">
              <h2>Jordan 1 electro Orange</h2>
              <span>Un coloris parfait pour l'automne et la chasse aux bonbons.</span>
              <span>Un coloris noir et blanc ponctué de pièce d'un orange vif.</span>
              <span className='btn-disconnect'>Bientôt disponible</span>
            </div>
          </div>
        </div>
        <div>
          <div className='img-container'>
            <img src={process.env.PUBLIC_URL + `ProductsImages/News/junior-samson-BjhKc5QBzlg-unsplash.jpg`} alt="" />
          </div>
          <div className="descrition-container">
            <div className="description-wrapper">
              <h2>Jordan 1 Union Los Angeles Black Toe</h2>
              <span>Tout droit sortie de la collaboration entre le shop américain et la marque à la virgule.</span>
              <span>La jordan 1 Union Black Toe et l'une des paires les plus recherchée sur le marché.</span>
              <span className='btn-disconnect'>Bientôt disponible</span>
            </div>
          </div>
        </div>
        <div>
          <div className='img-container'>
            <img src={process.env.PUBLIC_URL + `ProductsImages/News/sacai-nike-vaporwaffle-black-white-cv1363-001-pic6.jpg`} alt="" />
          </div>
          <div className="descrition-container">
            <div className="description-wrapper">
              <h2>Nike VaporWaffle Sacai Black and White </h2>
              <span>Un ovni de la sneakers tout droit sortit des ateliers de Chitose Abe.</span>
              <span>La nike VaporWaffle Sacai est un mélange de Nike VaporFly et Pegasus.</span>
              <span className='btn-disconnect'>Bientôt disponible</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
