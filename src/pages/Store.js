import React, { useEffect } from 'react'
import './Store.css'
import axios from 'axios'
import Card from '../components/Card'

function Store({ products, setProducts }) {
  console.log('====STORE PAGE=====!');

  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  console.log("this is from Store page:", products);

  return (
    <div className="store-container">
      <h1>ART FOR SALE</h1>
      <div className="content">

        <div class="card-group">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {products.map((product) => {
              return <div class="col"> <Card 
                img={product.img}
                title={product.title}
                description={product.description}
              />
              </div>
            })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Store
