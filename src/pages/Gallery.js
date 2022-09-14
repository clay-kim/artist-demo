import React, { useState, useEffect } from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardArt from '../components/CardArt';




function Gallery({ products, setProducts }) {

    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProducts(data.data.products);
        
        });
    }, [setProducts]);
    console.log("Gallery Page!!:", products);
   

    return (

        <div className='gallery-container'>
            <h1>Gallery</h1>
            <div className="content">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">


                    {products.map((product) => {
                        return <div class="col">
                            <CardArt key={`key-${products.id}`}
                                img={product.img}

                            />
                        </div>
                    })}

                </div>


            </div>
        </div>
    )

}

export default Gallery