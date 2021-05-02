import './App.css';
import Home from './components/Home'
import PairView from './components/PairView'

function App() {


  return (
    <div className="App">
      <nav>
        <button type="button">Home</button>
        <button type="button">How does it work?</button>
        <button type="button">Find your match!</button>
        <button type="button">Admin Login</button>
      </nav>
    
      <h1>🤝👋☕Coffee Roulette☕👋🤝</h1>
      <Home />
      <PairView />

    </div>
  );
}

export default App;
