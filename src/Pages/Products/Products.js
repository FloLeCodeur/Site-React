import React from 'react'
import './Products.css'

import inventory from '../../data/inventory'
import { Link } from 'react-router-dom'

export default function Products() {

  const productsItem = inventory.map((el) => {

    const itemBrand = el.brand

    const itemProduct = el.shoes.map((item) => {
      return (
        <Link to={{pathname : `/products/${itemBrand.replace(/\s+/g, "")}/${item.title.replace(/\s+/g, "-").trim()}`}} 
            key={item.id}
        >
          <div className="card">
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
      <section key={el.key} className='products'>
        <h1>{itemBrand}</h1>
        <div className="products-container">
          {itemProduct}
        </div>
      </section>
    )
    
  })

  return (
   <main className='wrapper'>
    {productsItem}
   </main>
  );
}
