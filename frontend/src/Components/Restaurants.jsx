import React, { Component } from 'react';
import Navigator from './Navigator';
import Promotions from './Promotions';

export class Restaurants extends Component {
    render() {
        return (
            <div>
                <Navigator />
                <Promotions />
            </div>
        );
    }
}

export default Restaurants;
