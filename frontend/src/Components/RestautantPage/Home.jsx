import React from 'react';
import Navigator from './Navigator';
import HomeDummy from './HomeDummy';
import AllRestaurants from './AllRestaurants';
import MainFooter from '../LandingPage/MainFooter';

function Home() {
    return (
        <div>
            <Navigator />
            <HomeDummy />
            <AllRestaurants />
            <MainFooter />
        </div>
    );
}

export default Home;
