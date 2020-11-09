import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    border-left: 2px solid #e9eaec;
    margin-left: -8%;
    h2 {
        font-size: 32px;
        letter-spacing: -0.3px;
        font-weight: bolder;
        color: #282c3f;
        line-height: 1.2;
        margin-bottom: 0px;
    }
    small {
        color: #686b78;
        margin-top: 0px;
        font-weight: bolder;
    }

    .veg {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background: green;
    }

    .nonVeg {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background: red;
    }

    h6 {
        color: #282c57;
        margint-top: 3px;
    }

    img {
        width: 150px;
        height: 130px;
        border-radius: 15px;
    }

    .row {
        border-bottom: 2px solid #e9eaec;
    }
`;

function RestaurantCards(props) {
    const { data } = props;
    console.log(data);
    const flag = true;
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-7 mt-5'>
                        {data.veg ? (
                            <div
                                className='p-1'
                                style={{
                                    border: '1px solid green',
                                    width: '20px',
                                    marginLeft: '11%',
                                }}
                            >
                                <div className='veg'></div>
                            </div>
                        ) : (
                            <div
                                className='p-1'
                                style={{
                                    border: '1px solid red',
                                    width: '20px',
                                    marginLeft: '11%',
                                }}
                            >
                                <div className='nonVeg'></div>
                            </div>
                        )}

                        <div style={{ marginLeft: '11%' }}>
                            <h6 className='mt-2'>{data.name}</h6>
                            <small>
                                <i className='fas fa-rupee-sign mr-1'></i>
                                {data.price}
                            </small>
                            <br />
                            <small className='mb-5'>{data.description}</small>
                        </div>
                    </div>
                    <div className='col-lg-5 mt-4 mb-5'>
                        <img
                            src={data.img_url}
                            alt='item photo'
                            className='p-2'
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default RestaurantCards;
