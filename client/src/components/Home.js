import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    function handleClick(){
        console.log("click")
        //click to change the page to pairview
      }
  
    return (
      <div className="Home">
        <p>Are you missing those office water cooler moments whilst WFH? Get paired with a colleague for a chat!</p>
        <ul>
          <li>👋 Find a time to say hi</li>
          <li>☕ Grab a drink</li>
          <li>🤝 Get to know your colleagues</li>
          <li><Link to="/match" className="tealLinks">Find your partner here!</Link></li>
        </ul>
        <br />
        <em style={{ "font-size": "12px" }} >Contact an admin to get added to the list. Users will be updated & re-shuffled every Friday.</em>
      </div>
    );
  }
  
  export default Home;