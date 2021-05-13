import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminView from './AdminView';

function LogIn(props) {
  
    return (
      <div className="LogIn">
        <h2>Click to Log In:</h2>
        <NavLink to="/admin" className="tealLinks">LOG IN</NavLink>
        
      </div>
    );

    
  }
  
  export default LogIn;