import React from 'react';
import CheckoutNavigator from './CheckoutNavigator';
import styled from 'styled-components';
import Login from './Customer/Login';
import Address from './Customer/Address';
import Payment from './Customer/Payment';
import MainFooter from '../LandingPage/MainFooter';

const Wrapper = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    min-height: 100%;
    background: #e9ecee;
    margin-top: 5.2%;
    padding-bottom: 10%;
    font-size: 14px;
    line-height: 1.2;
    min-height: 100%;
    div {
        // border: 1px solid red;
    }
`;

const CheckoutPage = () => {
    return (
        <>
            <CheckoutNavigator />
            <Wrapper className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='row row-cols-1 text-left'>
                                <div className='col'>
                                    <Login />
                                </div>
                                <div className='col'>
                                    <Address />
                                </div>
                                <div className='col'>
                                    <Payment />
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>orders</div>
                    </div>
                </div>
            </Wrapper>
            <MainFooter />
        </>
    );
};

export default CheckoutPage;
