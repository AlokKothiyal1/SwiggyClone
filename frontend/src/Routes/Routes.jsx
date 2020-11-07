import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LandingPg from '../Components/LandingPg';
// import Restaurants from '../Components/Restaurants';
import Home from '../Components/Home';

export const Routes = () => {
    return (
        <>
            <Switch>
                {/* <Route path='/' exact render={() => <LandingPg />} /> */}
                {/* <Route path='/Restaurants' render={() => <Restaurants />} /> */}
                <Route path='/' render={() => <Home />} />
            </Switch>
        </>
    );
};
