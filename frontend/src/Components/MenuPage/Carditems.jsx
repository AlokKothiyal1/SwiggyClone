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
    padding: 7%;
    color: green;
  }
`;

function Carditems(props) {
  const state = useSelector((state) => state);
  const { data } = props;

  return (
    <Wrapper>
      <div className="row">
        <div className="col-9 justify-content-between">
          <div className="row">
            <div className="col-1">
              {data.veg ? (
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
              ) : (
                <div
                  className="mt-3"
                  style={{
                    border: "1px solid red",
                    width: "15px",
                    height: "15px",
                    marginLeft: "11%",
                  }}
                >
                  <div className="nonVeg"></div>
                </div>
              )}
            </div>
            <div className="col-6 mt-2">
              <small className="mt-5 text-dark">{data.name}</small>
            </div>

            <div className="col-4 mt-2 pr-0 pl-0">
              <div className="border">
                <button className="buttoncart ml-2">-</button>
                <button className="buttoncart">1</button>
                <button className="buttoncart">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="mt-2">
            {" "}
            <small> ₹ {data.qty * data.price}</small>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Carditems;
