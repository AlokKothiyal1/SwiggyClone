import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SortRestaurants from './SortRestaurants';
import Navigator from './Navigator';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    background: #67a9c4;
    min-height: calc(100vh - 368px);
    // overflow-x: hidden;
    // overflow-y: auto;
    position: relative;
    z-index: 2;
    padding-bottom: 60px;
`;

const Title = styled.div`
    height: 190px;
    background: inherit;
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    margin: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    contain: strict;
`;

const ShowMoreRestaurants = (props) => {
    const [filter, setFilter] = useState('');
    // const { filter } = props.location.filter;
    useEffect(() => {
        if (props.location.filter !== undefined) {
            setFilter(props.location.filter);
        } else {
            setFilter('all');
        }
    }, []);
    // setFilter(props.location.filter);

    // console.log('props.location.filter', props.location.filter, filter);
    return (
        <>
            <Navigator />
            <Wrapper>
                <div className='container-fluid' style={{ width: '90%' }}>
                    <div className='row row-cols-1'>
                        <Title className='col '>
                            <img
                                src='Icons/downArrow.svg'
                                alt='downArrow'
                                style={{
                                    marginRight: '15px',
                                    height: '32px',
                                }}
                            />
                            All Restaurants
                        </Title>
                        <div
                            className='col'
                            style={{
                                backgroundColor: 'white',
                            }}
                        >
                            {' '}
                            <SortRestaurants filter={props.location.filter} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default ShowMoreRestaurants;
