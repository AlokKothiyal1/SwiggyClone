import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPg from '../Components/LandingPage/LandingPg';
import Home from '../Components/RestautantPage/Home';
import ShowMoreRestaurants from '../Components/RestautantPage/ShowMoreRestaurants';
import MenuPages from '../Components/MenuPage/MenuPages';
import CheckoutPage from '../Components/CheckoutPage/CheckoutPage';
import MyAccountPage from '../Components/MyAccount/MyAccountPage';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => <LandingPg />} />
                <Route path='/Restaurants' render={() => <Home />} />
                <Route path='/MenuPage' render={() => <MenuPages />} />
                <Route
                    path='/CheckoutPage'
                    render={(props) => <CheckoutPage {...props} />}
                />
                <Route
                    path='/ShowMoreRestaurants'
                    render={(props) => <ShowMoreRestaurants {...props} />}
                />
                <Route path='/my-account' render={() => <MyAccountPage />} />
                {/* <Route path='/' render={() => <MyAccountPage />} /> */}
            </Switch>
        </>
    );
};
