import React from 'react'
import './Card.css';


function Card(props) {

    return (

        <div className='card w-60 mb-3'>
            <div className='card_body text-center' >
                <img src={props.img} alt="image" />
                <h2 class='text-end' className="card_title">{props.title}</h2>
                <p class='text-end mb-2 text-muted' className='card_year'>{props.year}</p>
                <p class='text-end mb-2 text-muted' className='card_description'>{props.description}</p>
                <p class='text-end mb-2 text-muted' className='card_price'>$ {props.price}</p> 
                <p class='text-end mb-2 text-muted' className='card_available'>{props.available}</p>
            </div>
        </div>
    )
}

export default Card