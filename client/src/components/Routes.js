import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import AboutView from '../components/AboutView';
import HomeView from './Home';
import PairView from './PairView';
import LogIn from './LogIn';
import AdminView from './AdminView'

function Routes(props) {

    let pairs = props.pairs
    let nameList = props.nameList

    return (
        <Switch>
            <Route path="/" exact>
                <HomeView />
            </Route>
    
            <Route path="/match">
                <PairView allPairs={pairs} names={nameList}/>
            </Route>

            <Route path="/login">
                <LogIn />
            </Route>

            <Route path="/admin">
                <AdminView 
                    names={nameList} 
                    shuffleCb={(ids) => props.shuffleCb(ids)}
                    submitCb={(p) => props.addPersonCb(p)}
                />
            </Route>
        </Switch>
    );
}

export default Routes;