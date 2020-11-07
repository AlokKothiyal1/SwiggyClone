import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: 171a29;
    font-family: sans-serif;
    h3 {
        margin: 0px 0px 10px 0px;
        font-weight: bolder;
    }
    .big-box {
        padding: 35px 10px 100px 10px;
    }
    .items {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        color: #686b78;
        margin-left: 35px;
        cursor: pointer;
        position: relative;
        margin-bottom: 10px;
    }
`;

export class SideMenu extends Component {
    render() {
        return (
            <Wrapper>
                <div className='container'>
                    <div className='big-box'>
                        <div
                            className='row'
                            style={{ borderBottom: '3px solid whitesmoke' }}
                        >
                            <div className='col-md-6'>
                                <h3 className='text-left'>12 restaurants</h3>
                            </div>
                            <div className='items'>Relevance</div>
                            <div className='items'>Cost for Two</div>
                            <div className='items'>Delivery Time</div>
                            <div className='items'>Rating</div>
                            <div className='items'>
                                Filters
                                <i
                                    className='fa fa-filter'
                                    style={{ color: '#fc8019' }}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default SideMenu;
