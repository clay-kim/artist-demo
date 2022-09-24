import { useState, useEffect } from "react"
import React from 'react'
import './Detail.css'
import img1 from '../images/gc_painting13.jpeg'
import img2 from '../images/main_painting.jpg';
import img3 from '../images/creation.jpg';
import axios from 'axios';

function Detail({ products, setProducts }) {


    useEffect(() => {
        axios.get("/data/pieces.json").then((data) => {
            setProducts(data.data.pieces);
        
        });
    }, [setProducts]);


  console.log("DETAIL Page:", products);



  return (

    <div className="detail-window">
    <h1>HAHAHAH</h1>
      {
        products.map(products => (
          <div className="detail">
            <div className="big-img">
              <img src={products.src[2]} alt={products.title} />
            </div>

            <div className="box">
              <div className="row">
                <h1>{products.title}</h1>
                <span>${products.price}</span>
              </div>

              <p>{products.year}</p>
              <p>{products.description}</p>

              <div className="thumb">
                {
                  products.src.map(img => (
                    <img src={img} alt="pic"/>
                    
                  ))
                }
                </div>
                <button className="btn btn-primary">Button</button>
          
              
            </div>
          </div>
        ))
      }


    </div>
  )

}
export default Detail