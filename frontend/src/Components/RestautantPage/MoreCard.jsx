import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // width: 10rem !important;
    height: 250px;
    // border: 1px solid red;
    margin: 22px 0;
`;

const Button = styled.button`
    width: 80%;
    height: 90%;
    border-radius: 0px;
    font-size: 24px;
    line-height: 1.2;
    border: 2px solid #e46d47;
    font-weight: 600;
    color: #e46d47 !important;
    &:hover {
        box-shadow: 0 4px 14px #d4d5d9;
    }
`;

const MoreCard = (props) => {
    const { more } = props;
    console.log(more);
    return (
        <>
            <Wrapper className='justify-content-center'>
                <Button type='button' className='btn'>
                    +{more} MORE
                </Button>
            </Wrapper>
        </>
    );
};

export default MoreCard;
