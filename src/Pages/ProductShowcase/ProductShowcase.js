import React from 'react'
import './ProductShowcase.css'
 import { useParams } from "react-router-dom";
import inventory from '../../data/inventory'

export default function ProductShowcase() {

  const {brand, id} = useParams();
  
  const brandClicked = inventory.findIndex(
    (el) => el.brand.replace(/\s+/g, "").trim() === brand
  )
    
  const productClicked = inventory[brandClicked].shoes.findIndex(
    (obj) => obj.title.replace(/\s+/g, "-").trim() === id
  );
      
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
  
  const shoesClicked = inventory[brandClicked].shoes[productClicked]

  function si () {
    if (shoesClicked.hasOwnProperty('size') === true) {
      return (
        shoesClicked.size.map(size => {
          return (
            <li key={size}>{size}</li>
          )
        })
      )
    } 
    return (
        sizes.map(size => {
          return (
          <li key={size}>{size}</li>
        )
      })
    )
  }
  
  const size = si()

  return (
    <main className='product-showcase-wrapper'>
      <div className="product-showcase">
        <h1>{shoesClicked.title}</h1>
        <div className="shoes-show">
          <img src={process.env.PUBLIC_URL + `/ProductsImages/${shoesClicked.img}.webp`} alt="paire de chaussure nike dunk off-white" />
          <div className="shoes-infos">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laboriosam earum magnam magni amet tempore nesciunt minima sint ex itaque nihil dolores eligendi sapiente nulla illo aliquid adipisci, ut delectus! Illo tempora nesciunt, velit odit, iste, et saepe facilis adipisci est id doloribus pariatur? Corrupti dolorum repudiandae debitis nisi natus.
            </p>
            <div className="size">
              <span>Tailles :</span>
              { <ul className='sizes'>
                {size}
              </ul> }
            </div>
            <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia reprehenderit esse hic molestiae ipsum excepturi repellendus voluptatum quo? Rem, quas nihil ex praesentium corporis iste repellat ut cum omnis veritatis?</p>
          </div>
        </div>
      </div>
    </main>
  )
}
