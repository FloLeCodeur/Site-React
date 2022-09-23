import React from 'react'
import './Products.css'

import inventory from '../../data/inventory'
import { Link } from 'react-router-dom'

export default function Products() {

  const pl = inventory.map((item) => {

    const br = item.brand

    const it = item.shoes.map((el) => {
      return (
        <Link to={{pathname : `/products/${br.replace(/\s+/g, "")}/${el.title.replace(/\s+/g, "-").trim()}`}} 
            key={el.id}
        >
          <div className="card">
                <div className="products-visual">
                  <img src={process.env.PUBLIC_URL + `ProductsImages/${el.img}.webp`} alt="" />
                </div>
                <div className="product-title">
                  <span>{el.title}</span>
                </div>
                <div className="product-description">
                  <div className="price">
                    A partir de : {el.price}€
                  </div>
                </div>
              </div>
        </Link>
      )
    })
    
    return (
      <section key={item.key} className='products'>
        <h1>{br}</h1>
        <div className="products-container">
          {it}
        </div>
      </section>
    )
    
  })

  return (
   <main className='wrapper'>
    {pl}
   </main>
  );
}
