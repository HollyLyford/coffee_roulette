import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// import AboutView from '../components/AboutView';
import HomeView from './Home';
import PairView from './PairView';
import LogIn from './LogIn';
import AdminView from './AdminView'
import names from'./initialData';

function Routes(props) {

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
        <Switch>
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            {/* pairs */}
            <Route path="/match">
                <PairView allPairs={pairs} names={nameList}/>
            </Route>

            <Route path="/login">
                <LogIn />
            </Route>

            <Route path="/admin">
                <AdminView 
                    names={nameList} 
                    shuffleCb={(ids) => shufflePairs(ids)}
                    submitCb={(p) => addPerson(p)}
                />
            </Route>
        </Switch>
    );
}

export default Routes;