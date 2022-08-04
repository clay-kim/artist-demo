import React from "react";
import "./Header.css";
import logo from './images/newLogo.png';


function Header() {
    return (
        <div className="header">

            <div className="logo">
                <a href="Home">
                   
            <img src={logo} alt="logo" width="150" height="150" /></a> 
            </div>

            <ul className="navArea">
                <li><a href="Painting">Painting</a></li>
                <li><a href="Bio">Bio</a></li>
                <li><a href="Exhibition">Exhibition</a></li>
                <li><a href="Store">Store</a></li>
                <li><a href="Contact">Contact</a></li>

            </ul>
        </div>
    );
}

export default Header;
