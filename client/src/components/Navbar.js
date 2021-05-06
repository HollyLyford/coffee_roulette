import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){

    return(
        <nav className="Navbar">
          <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">How does it work?</NavLink></li>
                <li><NavLink to="/match">Find your match!</NavLink></li>
                <li><NavLink to="/login">Admin Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar