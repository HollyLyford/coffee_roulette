import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// import AboutView from '../components/AboutView';
import HomeView from './Home';
import PairView from './PairView';
import LogIn from './LogIn';
import AdminView from './AdminView'
import names from'./dummyData';

function Routes(props) {

    let initialPairs = [
        { a: 1, b: 2 },
        { a: 3, b:4},]
    const[pairs, setPairs] = useState(initialPairs)
    const[nameList, setNameList] = useState(names)
    const [nextID, setNextID] = useState(names.length)

    console.log(nameList)

    function shufflePairs(ids){
        setPairs([]);
        for (let i = 0; i < ids.length; i+=2){
              setPairs(newArr => [...newArr, {"a": ids[i], "b": ids[i+1]}])
        }
      }
    
      function addPerson(p){
          p.id = nextID;
          setNextID(nextID => nextID + 1);
          setNameList(nameList => [...nameList, p]);
      }

    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
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