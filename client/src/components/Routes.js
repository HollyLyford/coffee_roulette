import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// import AboutView from '../components/AboutView';
import HomeView from './Home';
import PairView from './PairView';
import LogIn from './LogIn';
import AdminView from './AdminView'

import idPairs from './pairIdsData';

function Routes(props) {
    const[pairs, setPairs] = useState(idPairs)
    function shufflePairs(ids){
        setPairs([]);
        for (let i = 0; i < ids.length; i+=2){
            let newArr = []
              setPairs(newArr => [...newArr, {"a": ids[i], "b": ids[i+1]}])
        }
      }

    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            {/* pairs */}
            <Route path="/match">
                <PairView allPairs={pairs} />
            </Route>

            <Route path="/login">
                <LogIn />
            </Route>

            <Route path="/admin">
                <AdminView shuffleCb={(ids) => shufflePairs(ids)} />
            </Route>
        </Switch>
    );
}

export default Routes;