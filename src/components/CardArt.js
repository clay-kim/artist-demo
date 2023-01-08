import React, { useState } from 'react'
import './CardArt.css';

function CardArt(props) {
  console.log('This is == CardArt ===');

  return (

    <div class="cardArt">
      <img src={props.img} alt="image" /> 
    </div>
  )
}

export default CardArt