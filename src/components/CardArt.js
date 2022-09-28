import React, { useState } from 'react'
import './CardArt.css';
import { Link, useParams } from 'react-router-dom';


function CardArt(props) {
  console.log('This is == CardArt ===');

    
  return (

    <div class="cardArt">
      <img src={props.img} alt="image" /> 
    </div>
  )
}

export default CardArt