import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import names from'./components/initialData';

function App(props) {

  let initialPairs = [
    { a: 1, b: 2 },
    { a: 3, b:4},]
  const[pairs, setPairs] = useState(initialPairs)
  const[nameList, setNameList] = useState(names)
  const [nextID, setNextID] = useState(names[names.length-1].id +1)

  function shufflePairs(){
    let currentIDs = []
    nameList.forEach((name => currentIDs.push(name.id)))
    shuffle(currentIDs)
    setPairs([]);
    if (currentIDs.length % 2 !== 0){
        let repeatID = currentIDs[0];
        currentIDs.push(repeatID);
    }
    for (let i = 0; i < currentIDs.length; i+=2){
        setPairs(newArr => [...newArr, {"a": currentIDs[i], "b": currentIDs[i+1]}])
    }
    window.alert("Names have been shuffled")
  }

  function shuffle(ids) {
      let m = ids.length, t, i;
      // While there remain elements to shuffle…
          while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = ids[m];
          ids[m] = ids[i];
          ids[i] = t;
          }
          //https://bost.ocks.org/mike/shuffle/
      return ids; 
  }

  function addPerson(p){
    p.id = nextID;
    setNextID(nextID => nextID + 1);
    setNameList(nameList => [...nameList, p]);
  }

  return (
    <div className="App">
      <Navbar /> 
      <div className="header">
        <h1>Coffee Roulette</h1>
        <h3>👋☕🤝</h3>
      </div>
      {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/000/091/124/small/free-business-meeting-tables-vector-icons.jpg" /> */}
      <Routes 
        shuffleCb={(ids) => shufflePairs(ids)}
        addPersonCb={(p) => addPerson(p)}
        pairs={pairs}
        nameList={nameList}
      />

    </div>
 
  );
  }

export default App;
