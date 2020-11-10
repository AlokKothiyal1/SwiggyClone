import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LandingPg from '../Components/LandingPage/LandingPg';
// import Home from '../Components/RestautantPage/Home';
// import Restaurants from '../Components/Restaurants';
// import MenuPages from '../Components/MenuPage/MenuPages';
import CheckoutPage from '../Components/CheckoutPage/CheckoutPage';

export const Routes = () => {
    return (
        <>
            <Switch>
                {/* <Route path='/' exact render={() => <LandingPg />} /> */}
                {/* <Route path='/' exact render={() => <Home />} /> */}
                {/* <Route path='/Restaurants' render={() => <Home />} /> */}
                {/* <Route path='/Restaurants' render={() => <Restaurants />} /> */}
                {/* <Route path='/' exact render={() => <MenuPages />} /> */}
                {/* <Route path='/MenuPage' render={() => <MenuPages />} /> */}
                {/* <Route path='/CheckoutPage' render={() => <CheckoutPage />} /> */}
                <Route path='/' render={() => <CheckoutPage />} />
            </Switch>
        </>
    );
};
