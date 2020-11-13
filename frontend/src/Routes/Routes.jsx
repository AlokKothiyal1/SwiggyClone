import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPg from '../Components/LandingPage/LandingPg';
import Home from '../Components/RestautantPage/Home';
import ShowMoreRestaurants from '../Components/RestautantPage/ShowMoreRestaurants';
import MenuPages from '../Components/MenuPage/MenuPages';
import CheckoutPage from '../Components/CheckoutPage/CheckoutPage';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => <LandingPg />} />
                {/* <Route path='/' exact render={() => <Home />} /> */}
                <Route path='/Restaurants' render={() => <Home />} />
                {/* <Route path='/' exact render={() => <MenuPages />} /> */}
                <Route path='/MenuPage' render={() => <MenuPages />} />
                <Route
                    path='/CheckoutPage'
                    render={(props) => <CheckoutPage {...props} />}
                />
                {/* <Route path='/' render={() => <CheckoutPage />} /> */}
                <Route
                    path='/ShowMoreRestaurants'
                    render={(props) => <ShowMoreRestaurants {...props} />}
                />
            </Switch>
        </>
    );
};
