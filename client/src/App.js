import './App.css';
import React, { useState } from 'react';
import Home from './components/Home'
import PairView from './components/PairView'
import Navbar from './components/Navbar'
import idPairs from './components/pairIdsData'

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <h1>🤝👋☕Coffee Roulette☕👋🤝</h1>
      <Home />
      <PairView  allPairs ={idPairs}/>

    </div>
  );
  }

export default App;
