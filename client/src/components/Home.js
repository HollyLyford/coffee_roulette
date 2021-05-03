import React, { useState } from 'react';

function Home() {
    function handleClick(){
        console.log("click")
        //click to change the page to pairview
      }
  
    return (
      <div className="Home">
        <p>Are you missing those office water cooler moments whilst WFH? Get paired with a colleague for a chat!</p>
        <button type="button" onClick={handleClick}>Find your match!</button>
      </div>
    );
  }
  
  export default Home;