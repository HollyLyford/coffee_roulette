import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import AboutView from '../components/AboutView';
import HomeView from './Home';
import PairView from './PairView';

import idPairs from './pairIdsData';

function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            {/* pairs */}
            <Route path="/match">
                <PairView allPairs={idPairs} />
            </Route>
        </Switch>
    );
}

export default Routes;