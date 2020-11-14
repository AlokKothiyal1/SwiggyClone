import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: ProximaNova, Arial, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    color: #171a29;
    font-family: sans-serif;
    border: 1px solid #d4d5d9;
    div {
        // border: 1px solid red;
    }
`;

const Image = styled.img`
    width: inherit;
    // height: 150px;
    // padding-left: 0px;
    // padding-right: 0px;
`;

const OrderCard = () => {
    return (
        <Wrapper className='container text-left mb-5'>
            <div className='row p-4'>
                <div className='col-3 pl-0'>
                    <Image
                        src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bm5pgfhvkdfxx7jwpjhb'
                        alt='Hotel'
                    />
                </div>
                <div className='col row-cols-1 pl-0'>
                    <div className='col'>
                        <div className='row justify-content-between'>
                            <div className='col-md-auto'>hotel name</div>
                            <div className='col-md-auto text-right'>
                                delivery
                            </div>
                        </div>
                    </div>
                    <div className='col'>area</div>
                    <div className='col'>order dets</div>
                    <div className='col'>view details</div>
                </div>
            </div>
        </Wrapper>
    );
};

export default OrderCard;
// img_url:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bm5pgfhvkdfxx7jwpjhb"
