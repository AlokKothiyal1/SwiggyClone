import React from 'react';
import {
    Div,
    InnerDiv,
    MainImg,
    Logo,
    Search,
    City,
    CardContainer,
    Card,
    CardImg,
} from './LandingStyledComponents';

const NewLanding = () => {
    return (
        <>
            <Div className='container-fluid'>
                <div className='row'>
                    <div className='col-6  ml-auto'>
                        {/* LOGO */}
                        <InnerDiv className='container'>
                            <div className='row '>
                                <div className='col-1 mr-auto align-self-start'>
                                    <Logo
                                        src='https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png'
                                        alt='logo'
                                    />
                                </div>
                                <button
                                    type='button'
                                    className='col-2 btn btn-lg align-self-center font-weight-bold'
                                >
                                    Login
                                </button>
                                <button
                                    type='button'
                                    className='col-2 btn btn-lg align-self-center p-2 font-weight-bold'
                                    style={{
                                        borderRadius: '0px',
                                        color: 'white',
                                        backgroundColor: 'black',
                                    }}
                                >
                                    Sign up
                                </button>
                            </div>
                        </InnerDiv>

                        {/* SOME TEXT & TAG LINE */}
                        <InnerDiv className='container'>
                            <div className='row align-self-start row-cols-1'>
                                <div className='col text-left text-wrap  mb-1'>
                                    <p className='h2 font-weight-bold'>
                                        {' '}
                                        Cooking gone wrong ?{' '}
                                    </p>
                                </div>
                                <div className='col text-left text-wrap'>
                                    <p className='h4 text-muted'>
                                        Order food from favourite restaurants
                                        near you.
                                    </p>
                                </div>
                            </div>
                        </InnerDiv>

                        {/* SEARCH BAR */}
                        <div className='container'>
                            <Search className='row '>
                                <div className='col-10 text-left align-self-center'>
                                    <div className='row'>
                                        <input
                                            className='col-9 col-sm-8 col-md-9 text-left form-control-plaintext form-control-lg ml-2  text-muted text-monospace'
                                            type='text'
                                            placeholder='Enter Your delivery location'
                                        />
                                        <button
                                            type='button'
                                            className='col-2 btn btn-sm align-self-center text-right ml-4'
                                        >
                                            Locate Me
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type='button'
                                    className='col-2 btn btn-lg '
                                    style={{
                                        height: '100%',
                                        color: 'white',
                                        backgroundColor: '#fc8019',
                                        borderRadius: '0px',
                                    }}
                                >
                                    <h6 className='font-weight-bold'>
                                        FIND FOOD
                                    </h6>
                                </button>
                            </Search>
                        </div>

                        {/* POPULAR CITIES */}
                        <City className='container'>
                            <div className='row row-cols-1'>
                                <div className='col text-left text-wrap mb-1 text-uppercase h6 text-muted '>
                                    Popular cities in India
                                </div>
                                <div className='col text-left text-wrap'>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold'
                                    >
                                        Ahmedabad
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold text-muted'
                                    >
                                        Bangalore
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold'
                                    >
                                        Chennai
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold text-muted'
                                    >
                                        Delhi
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold'
                                    >
                                        Gurgaon
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold text-muted'
                                    >
                                        Hyderabad
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold'
                                    >
                                        Kolkata
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold text-muted'
                                    >
                                        Mumbai
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold'
                                    >
                                        Pune
                                    </button>
                                    <button
                                        type='button'
                                        className='btn font-weight-bold text-muted'
                                    >
                                        &more.
                                    </button>
                                </div>
                            </div>
                        </City>
                    </div>
                    {/* MAIN IMAGE */}
                    <div className='col-5'>
                        <MainImg
                            src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Dinner1-new_s93yyf'
                            alt='swiggy main'
                        />
                    </div>
                </div>

                {/* MIDDLE PART */}
                <CardContainer className='row justify-content-around pb-2'>
                    <div className='col-3 ml-2 mt-3 pb-5'>
                        <Card className='card'>
                            <CardImg
                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'
                                className='card-img-top align-self-center'
                                alt='No Minimum Order'
                            />
                            <div
                                className='card-body'
                                style={{ color: 'white' }}
                            >
                                <p className='card-title h4 font-weight-bold mt-2'>
                                    No Minimum Order
                                </p>
                                <p className='card-text'>
                                    Order in for yourself or for the group, with
                                    no restrictions on order value
                                </p>
                            </div>
                        </Card>
                    </div>
                    <div className='col-3 mt-3'>
                        <Card className='card'>
                            <CardImg
                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'
                                className='card-img-top align-self-center'
                                alt='Live Order Tracking'
                            />
                            <div
                                className='card-body'
                                style={{ color: 'white' }}
                            >
                                <h5 className='card-title h4 font-weight-bold mt-2'>
                                    Live Order Tracking
                                </h5>
                                <p className='card-text'>
                                    Know where your order is at all times, from
                                    the restaurant to your doorstep
                                </p>
                            </div>
                        </Card>
                    </div>
                    <div className='col-3 mr-2 mt-3'>
                        <Card className='card'>
                            <CardImg
                                src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn'
                                className='card-img-top align-self-center'
                                alt='Lightning-Fast Delivery'
                            />
                            <div
                                className='card-body'
                                style={{ color: 'white' }}
                            >
                                <h5 className='card-title h4 font-weight-bold mt-2'>
                                    Lightning-Fast Delivery
                                </h5>
                                <p className='card-text'>
                                    Experience Swiggy's superfast delivery for
                                    food delivered fresh & on time
                                </p>
                            </div>
                        </Card>
                    </div>
                </CardContainer>
            </Div>
        </>
    );
};

export default NewLanding;
