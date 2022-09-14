import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios"
import './Detail.css'
import { useParams } from "react-router-dom"


function Detail() {


console.log("DETAIL Page:");

//data//
const {idid} = useParams();

console.log("IDIDID:", idid);


  return (
    <div className="Detail-container">

      <h1>HEllo</h1>
      <div>
        <h1>productsID={idid} </h1>
        <h2>Image Tite:</h2>
        <h2>Image Year:</h2>
        <h2>Image Info:</h2>
      
     
      </div>

    </div>
  )
}

export default Detail