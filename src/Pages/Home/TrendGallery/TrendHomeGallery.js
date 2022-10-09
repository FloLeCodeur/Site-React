import React from 'react'
import './TrendHomeGallery.css'


import inventory from '../../../data/inventory';
import { Link } from 'react-router-dom';

export default function Carousel() {

  const newArr = []

  inventory.forEach(element => {
    element.shoes.forEach(el => {
        el['brand'] = element.brand
          newArr.push(el)
      })
  });
  
  newArr.sort(() => Math.random() - 0.5)

  const slicedArray = newArr.slice(0, 8)

  console.log(slicedArray);


  return (
    <div className="trend-gallery-container">
        {slicedArray.map((item, ) => (
          <div className="trend-gallery-item" key={item.id}>
            <Link to={{pathname : `/products/${item.brand.replace(/\s+/g, "")}/${item.title.replace(/\s+/g, "-").trim()}`}}>
              <div className="card-trend-item">
                <div className="products-visual-trend-item">
                  <img src={process.env.PUBLIC_URL + `ProductsImages/${item.img}.webp`} alt="" />
                </div>
                  <div className="product-title-trend-item">
                      <span>{item.title}</span>
                    </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
