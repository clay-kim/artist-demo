import React from 'react'
import './Home.css'
import main_painting from './images/main_painting.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-page'>

            <h1>
                Home
            </h1>

            <div className="main-image">
                <Link to="/">
                    <img src={main_painting} alt="logo" width="380" height="580" />
                </Link>
            </div>


        </div>
    )
}

export default Home