import './App.css';
import React, { useState } from 'react';
import Home from './components/Home'
import PairView from './components/PairView'
import Navbar from './components/Navbar'
import idPairs from './components/pairIdsData'
import Routes from './components/Routes'

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <h1>🤝👋☕Coffee Roulette☕👋🤝</h1>
      <Routes />
    </div>
  );
  }

export default App;
