import React from 'react'
import './HomeGallery.css'

import inventory from '../../../data/inventory';
import { Link } from 'react-router-dom';

export default function HomeGallery() {

  return (
    <div className='home-gallery'>
      {inventory.map((item, index) => {

        const products = item.shoes.slice(0, 4).map((object) => {
          return (
            <Link to={{pathname : `/products/${item.brand.replace(/\s+/g, "")}/${object.title.replace(/\s+/g, "-").trim()}`}}
            key={object.id}>
              <img src={process.env.PUBLIC_URL + `ProductsImages/${object.img}.webp`} alt="" />
            </Link>
          )
        })
        
        return (
          <div key={index}>
            <h3 >{item.brand}</h3>
            <div>
              {products}
            </div>
            <span> 
              <Link to={'/products'}>
                Voir plus
              </Link>
            </span>
          </div>
        )
      })}
    </div>
  )
}
