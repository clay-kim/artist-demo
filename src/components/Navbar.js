import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logoT.png';
import './Navbar.css';
import { Squeeze as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo" onClick={() => setOpen(false)}>
                <Link to="gallery">
                    <img src={logo} alt="logo" width="80" height="80" />
                </Link>
            </div>

            <ul className={isOpen ? "nav-links-mobile" : "nav-links"}
                onClick={() => setOpen(false)}>

                <Link to='/gallery' className="gallery">
                    <li>Gallery</li>
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

            <div className="hamburger-icon">
                <Hamburger
                    hideOutline={false}
                    color="black"
                    toggled={isOpen} toggle={setOpen} />
            </div>

        </nav>
    );
};

export default Navbar