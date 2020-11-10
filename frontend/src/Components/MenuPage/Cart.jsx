import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  font-family: sans-serif;

  h4 {
    font-size: 25px;
    font-weight: bolder;
    text-align: left;
    padding-top: 20px;
    color: #282c3f;
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 2px;
  }

  .menubox {
    width: 300px;
    height: 200px;
    margin-top: 20px;
    border-bottom: 2px solid #cdcdcd;
  }

  .veg {
    border-radius: 50%;
    margin-top: 2px;
    width: 10px;
    height: 10px;
    background: green;
    margin-left: 2px;
  }

  .nonVeg {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: red;
    margin-top: 2px;
    margin-left: 2px;
  }

  small {
    font-weight: bold;
  }

  .buttoncart {
    margin-left: 0;
    margin-right: 0;
    border: none;
    background: white;
    padding: 5%;
    color: green;
  }
`;

function Cart() {
  const state = useSelector((state) => state);

  return (
    <Wrapper>
      <div className=" text-left">
        <h4>Cart</h4>
        <p className="text-muted">
          {state.cart.reduce((a, b) => a + b.qty, 0)} ITEMS
        </p>
        <div className="menubox">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-1">
                  <div
                    className="mt-3"
                    style={{
                      border: "1px solid green",
                      width: "15px",
                      height: "15px",
                      marginLeft: "11%",
                    }}
                  >
                    <div className="veg"></div>
                  </div>
                </div>
                <div className="col-9 mt-2">
                  <small className="mt-5 text-dark">Chicken Biryani</small>
                </div>
              </div>
            </div>
            <div className="col-4">
              {/* <div className="addCart">
                <button className="buttoncart">-</button>
                <button className="buttoncart">1</button>
                <button className="buttoncart">+</button>
              </div> */}
              <div className="mt-2">
                {" "}
                <small> ₹ {state.cart[0].qty * state.cart[0].price}</small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-6 text-left">
              <h6 className="mt-3 font-weight-bold mb-0">Subtotal</h6>
              <small className="text-muted font-weight-normal">
                Extra charges may apply
              </small>
            </div>
            <div className="col-4 mt-3 text-right mr-2">
              <b>₹1200</b>
            </div>
          </div>
        </div>
        <div className="pt-3 pr-5">
          <button
            className="btn btn-block btn-lg btn-success"
            style={{ borderRadius: "0px" }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cart;
