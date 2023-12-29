import React from "react";
import { NavLink } from 'react-router-dom';
import blackdiamond from "./blackdiamondlogo.png";

function NavBar ()  {
    return (
        <div className="navbar">
            <div className="navLogo">
               <img src={blackdiamond} className="siteLogo" alt="siteLogo"/>
            </div>
            <div>
                <NavLink to="/" className="tabs">
                    Home
                </NavLink>
                <NavLink to="/shop" className="tabs">
                    Shop
                </NavLink>                  
            </div>
            <div>
                <NavLink to="/cart" className="cart">
                     Cart🛒
                </NavLink>    
            </div> 
        </div>
    )
}

export default NavBar;