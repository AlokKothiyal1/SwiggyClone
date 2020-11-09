import React, { Component } from "react";
import Navigator from "../RestautantPage/Navigator";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
  margin-top: 5%;
  font-size: 14px;
  line-height: 1.2;
  color: #babbbf;

  .thin {
    background: #fafafb;
  }
  .middlePart {
    background: #171a29;
    position: sticky;
    top: 0;
    z-index: 1;
    height: 245px;
    pointer-events: none;
  }
  p {
    margin-bottom: 1px;
    font-weight: bolder;
  }

  img {
    height: 165px;
    margin: 30px 0px 0px 200px;
  }

  h1 {
    margin-top: 12%;
    color: white;
    font-size: 32px;
    font-weight: 300;
  }

  .offers {
    padding: 31px 40px 25px 25px;
  }

  .newOffer {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background: #171a29;
    z-index: 8;
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    position: absolute;
    top: 34px;
    left: 19px;
  }
`;

export class MenuPages extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Wrapper>
          <div className="container-fluid thin">
            <div className="row">
              <div className="col-12 my-1 text-left">
                <small className="text-muted" style={{ marginLeft: "15%" }}>
                  Home / Bangalore / Kormangala / Burger King
                </small>
              </div>
            </div>
          </div>
          <div className="container-fluid middlePart">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/iivcfugg5rqdwdkydimu"
                  alt="restaurantImage"
                />
              </div>
              <div className="col-4 text-left">
                <h1>Burger King</h1>
                <div>American,Fast Food</div>
                <div className="my-2">
                  Phoenix Market City Mall, Mahadevpura
                </div>
                <div className="row mt-3">
                  <div
                    className="col-3"
                    style={{ borderRight: "1px solid #babbbf" }}
                  >
                    <p>
                      <i class="fas fa-star mr-1"></i>4.0
                    </p>
                    <small>1000+ Ratings</small>
                  </div>
                  <div
                    className="col-3"
                    style={{ borderRight: "1px solid #babbbf" }}
                  >
                    <p>49 mins</p>
                    <small>Delivery Time</small>
                  </div>
                  <div
                    className="col-3"
                    style={{ borderRight: "1px solid #babbbf" }}
                  >
                    <p>
                      <i class="fas fa-rupee-sign mr-1"></i>340
                    </p>
                    <small>Cost for Two</small>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="row">
                  <div className="newOffer">OFFER</div>
                  <div
                    className="col-lg-7 ml-4 mt-5 offers"
                    style={{
                      border: "1px solid white",
                      height: "150px",
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <p
                          className="text-left ml-2 mt-2"
                          style={{
                            fontSize: "13px",
                            opacity: 0.9,
                            lineHeight: 1.2,
                            fontWeight: 550,
                            color: "#ffffff",
                          }}
                        >
                          50% off up to ₹100 on select items | Use code SPECIALS
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <p
                          className="text-left ml-2 mt-2"
                          style={{
                            fontSize: "13px",
                            opacity: 0.9,
                            lineHeight: 1.2,
                            fontWeight: 550,
                            color: "#ffffff",
                          }}
                        >
                          40% off up to ₹80 + ₹30 PhonePe cashback | Use code
                          SWIGGYIT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default MenuPages;
