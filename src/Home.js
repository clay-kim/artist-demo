import React from 'react'
import './Home.css'
import main_painting from './images/main_painting.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-container'>
            <div className="content">
                <Link to="/">
                    <img src={main_painting} alt="logo" width="380" height="580" />
                </Link>
                <div className="text">
                <h1> 'Just a thought'</h1> <h3> 36" x 48", Oil on canvas, 2021</h3>
                </div>
            </div>
        </div>
    )
}

export default Home