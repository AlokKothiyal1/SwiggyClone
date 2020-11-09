import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
    width: 140px;
    height: 140px;
    border-radius: 15px;
  }

  .row {
    border-bottom: 2px solid #e9eaec;
  }
`;

function RestaurantCards() {
  const flag = true;
  return (
    <Wrapper>
      <h2 className="text-left ml-5">Recommended</h2>
      <small className="text-left ml-5">23 ITEMS</small>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 mt-5">
            <div
              className="p-1"
              style={{
                border: "1px solid green",
                width: "20px",
                marginLeft: "11%",
              }}
            >
              <div className="veg"></div>
            </div>
            <div style={{ marginLeft: "11%" }}>
              <h6 className="mt-2">Cold Coffee for two</h6>
              <small>
                <i className="fas fa-rupee-sign mr-1"></i>
                334
              </small>
              <br />
              <small className="mb-5">
                Basque Style Baked Cheese made with pure cream cheese.
              </small>
            </div>
          </div>
          <div className="col-lg-5 mt-4 mb-5">
            <img
              src="data:image/jpeg;base64,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"
              alt="coffee"
              className="p-2"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default RestaurantCards;
