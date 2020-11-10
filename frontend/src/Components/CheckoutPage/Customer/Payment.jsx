import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: sans-serif;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    padding-top: 35px;
    padding-bottom: 39px;
    div {
        // border: 1px solid red;
    }
`;

const Logo = styled.div`
    left: -35px;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    padding: 0px !important;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #282c3f;
`;

const Wallet = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const Payment = () => {
    return (
        <>
            <>
                <Wrapper className='container'>
                    <div className='row'>
                        <Logo className='col-1'>
                            <Wallet src='Icons/wallet.svg' alt='placeholder' />
                        </Logo>
                        <div className='col-11'>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <Title>Payment</Title>
                                </div>
                                <div className='col'>Block for adding</div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        </>
    );
};

export default Payment;
