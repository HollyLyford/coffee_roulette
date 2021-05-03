import React, { useState } from 'react';

function Navbar(){

    return(
        <div className="Navbar">
            <nav>
                <button type="button">Home</button>
                <button type="button">How does it work?</button>
                <button type="button">Find your match!</button>
                <button type="button">Admin Login</button>
            </nav>
        </div>
    )
}

export default Navbar