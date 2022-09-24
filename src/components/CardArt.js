import React, { useState } from 'react'
import './CardArt.css';
import { Link, useParams } from 'react-router-dom';


function CardArt(props) {
  console.log('This is == CardArt ===');

  const testing = () =>{
    console.log('you Clicked button from CardArt ===');
  }
    
    //------testing-----
 
  


  return (

    <div class="cardArt">
   
      <img src={props.img} alt="image" /> 
    </div>
  )
}

export default CardArt