import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: sans-serif;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    padding-top: 35px;
    // padding-right: 40px;
    padding-bottom: 39px;
    // padding-left: 40px;
    div {
        // border: 1px solid red;
    }
`;

const Logo = styled.div`
    left: -35px;
    // top: 10px;
    // position: absolute;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    // left: -30px;
    padding: 0px !important;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #282c3f;
`;

const Location = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const AddAddressTitle = styled.p`
    margin-bottom: 4px;
    font-size: 17px;
    font-weight: 600 !important;
    color: #282c3f;
    line-height: 1.18;
`;

const AddressText = styled.p`
    font-size: 13px;
    color: #93959f;
    margin-bottom: 8px;
    font-weight: 300;
    line-height: 16px;
    overflow: hidden;
`;

const AddressContainer = styled.button`
    border: 1px dashed #e9e9eb;
    padding: 0px;
    background: white;
    &:hover {
        box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    }
`;

const AddLocation = styled.img`
    height: 25px;
    width: 25px;
    vertical-align: inherit;
    margin-radius: 0px;
    // box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const Address = () => {
    return (
        <>
            <>
                <Wrapper className='container'>
                    <div className='row'>
                        <Logo className='col-1'>
                            <Location
                                src='Icons/placeholder.svg'
                                alt='placeholder'
                            />
                        </Logo>
                        <div className='col-11'>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <Title>Delivery Address</Title>
                                </div>
                                <div className='col-6'>
                                    <div className='container'>
                                        <AddressContainer className='row py-3'>
                                            <div className='col-1'>
                                                <AddLocation
                                                    src='Icons/location.svg'
                                                    alt='placeholder'
                                                />
                                            </div>
                                            <div className='col col-offset-6'>
                                                <div className=' row row-cols-1'>
                                                    <AddAddressTitle className='col text-left'>
                                                        Add Your Address
                                                    </AddAddressTitle>
                                                    <AddressText>
                                                        <div className='col text-left'>
                                                            Kormangala,
                                                            Bengaluru,
                                                            Karnataka, India
                                                        </div>
                                                        <div className='col mb-3 text-left'>
                                                            Home
                                                        </div>
                                                    </AddressText>
                                                    <button
                                                        type='button'
                                                        className='col-5 btn btn-outline-success text-uppercase mt-2'
                                                        style={{
                                                            borderRadius: '0px',
                                                            marginLeft: '15px',
                                                        }}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </AddressContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        </>
    );
};

export default Address;
