import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const{state:{title,description,price,brand,thumbnail}}=useLocation();
    console.log(title);
  return (
    <div className='pro_container'>
        <img src={thumbnail} alt=""/>
        <div className='pro1_details'>
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <h3>$.{price}</h3>
      <h3>{description}</h3>
      </div>
    </div>
  )
}

export default Product
