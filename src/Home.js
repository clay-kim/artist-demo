import React from 'react'
import './Home.css'
import logo from './images/logoT.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-page'>

            <h1>
                Home
            </h1>

            <div className="main-image">
                <Link to="/img">
                    <img src={logo} alt="logo" width="380" height="580" />
                </Link>
            </div>


        </div>
    )
}

export default Home