import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Routes from './components/Routes'

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <div className="header">
        <h1>Coffee Roulette</h1>
        <h3>👋☕🤝</h3>
      </div>
      {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/000/091/124/small/free-business-meeting-tables-vector-icons.jpg" /> */}
      <Routes />
    </div>
  );
  }

export default App;
