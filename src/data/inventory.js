import {v4 as uuidv4} from "uuid"

const inventory = [
  {
    brand: 'Jordan 1',
    key: uuidv4(),
    shoes: 
      [
        {
          title : 'Jordan 1 Dark Mocha',
          price: 159.99,
          img: 'AJ1-Dark-Mocha',
          id: uuidv4(),
          size: [40, 41, 42]
        },
        {
          title : 'Jordan 1 Pine Green',
          price: 159.99,
          img: 'AJ1-Pine-Green', 
          id: uuidv4(),
          size: [40, 41, 42]
        },
        {
          title : 'Jordan 1 Satin Snake',
          price: 159.99,
          img: 'AJ1-Satin-Snake', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Seafom',
          price: 159.99,
          img: 'AJ1-Seafom', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Bordeaux',
          price: 159.99,
          img: 'AJ1-Bordeaux', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Dark Marina Blue',
          price: 159.99,
          img: 'AJ1-Dark-Marina', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Brotherhood',
          price: 169.99,
          img: 'AJ1-Brotherhood', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Gore-Tex',
          price: 179.99,
          img: 'AJ1-Goretex', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Low OG Bleached Choral',
          price: 159.99,
          img: 'AJ1-Low-OG-Bleached-Choral', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Low OG EX Dark Smoke Grey',
          price: 159.99,
          img: 'AJ1-Low-OG-EX-Dark-Smoke-Grey', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 OG Mystic Navy',
          price: 159.99,
          img: 'AJ1-Low-OG-Mystic-Navy', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Low OG Unc',
          price: 159.99,
          img: 'AJ1-Low-OG-Unc', 
          id: uuidv4(),
        },
        {
          title : 'Jordan 1 Retro Low Golf Shadow ',
          price: 159.99,
          img: 'AJ1-Retro-Low-Golf-Shadow', 
          id: uuidv4(),
        },
        
      ]
  },
  {
    brand: 'Jordan 4',
    key: uuidv4(),
    shoes: 
    [
      {
          title : 'Jordan 4 black Canvas',
          price: 219.99,
          img: 'AJ4-Black-Canvas', 
          id: uuidv4(),
        },
    ]
  },
  {
    brand: 'Nike',
    key: uuidv4(),
    shoes:
      [
        {
        title : 'Dunk Off White 22-50',
        price: 179.99,
        img: 'Dunk-Low-Off-White-2250', 
        id: uuidv4(),
        },
        {
        title : 'Nike Ld Waffle Sacai Undercover Red',
        price: 159.99,
        img: 'Ld-Waffle-Sacai-Undercover-Red', 
        id: uuidv4(),
        },
        {
          title : 'Nike Ld Waffle Sacai Clot Net Orange',
          price: 159.99,
          img: 'Ld-Waffle-Sacai-Clot-Orange', 
          id: uuidv4(),
        },
        {
          title : 'Nike Dunk Low Archeo Pink',
          price: 109.99,
          img: 'Dunk-Low-Archeo-Pink', 
          id: uuidv4(),
        },
        {
          title : 'Nike Dunk Low Venice',
          price: 109.99,
          img: 'Dunk-Low-Venice', 
          id: uuidv4(),
          size: [40, 41]
        },
      ]
  },
  {
    brand: 'New Balance',
    key: uuidv4(),
    shoes:
      [
        {
        title : 'New Balance 550 Au Lait',
        price: 169.99,
        img: 'NB-550-Au-Lait', 
        id: uuidv4(),
        size: [42, 44]
        },
        {
        title : 'New Balance XC 72 Casablanca',
        price: 159.99,
        img: 'NB-XC-72-Casablanca', 
        id: uuidv4(),
        },
      ]
  }
]

export default inventory;