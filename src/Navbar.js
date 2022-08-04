import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logoT.png';
import './Navbar.css';
import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/home">
                    <img src={logo} alt="logo" width="80" height="80"
                    onClick={() => setIsMobile(false)} />
                </Link>
            </div>

        
                <ul className={isMobile ? "nav-links-mobile" :"nav-links"}
                onClick={() => setIsMobile(false)}>
                    <Link to='/painting' className="painting">
                        <li>Painting</li>
                    </Link>
                    <Link to='/exhibition' className="exhibition">
                        <li>Exhibition</li>
                    </Link>
                    <Link to='/bio' className="bio">
                        <li>Bio</li>
                    </Link>
                    <Link to='/store' className="store">
                        <li>Store</li>
                    </Link>
                    <Link to='/contact' className="contact">
                        <li>Contact</li>
                    </Link>
                </ul>
    
                <div className= "hamburger-icon">
                    <Hamburger 
                   
                    color="black"
                    toggled={isMobile} toggle={setIsMobile} />
                </div>
               



        </nav>
    );
};

export default Navbar