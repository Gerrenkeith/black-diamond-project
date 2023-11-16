import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar ()  {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li>
                    <NavLink to="/" activeStyle={{color: "violet",}}  className="tabs">
                        Home
                    </NavLink>
                    <NavLink to="/shop" activeStyle={{color: "violet",}} className="tabs">
                        Shop
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;