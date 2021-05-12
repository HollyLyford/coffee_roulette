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
        <button type="button"><Link to="/match">Find your match!</Link></button>
      </div>
    );
  }
  
  export default Home;