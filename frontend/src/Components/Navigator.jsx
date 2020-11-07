import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0;
  background: #fff;
  box-shadow: 2px 0px 5px #e3e3e3;
  margin: 0;
  box-sizzing: border-box;
  font-family: sans-serif;

  .logo-container {
    padding: 10px;
  }

  .nav-item {
    padding: 10px 10px;
    .nav-link {
      text-decoration: none;
      color: #333;
      font-size: 1.1rem;
      font-weight: 500;
      &:hover {
        color: #fc8019;
      }
    }
  }
`;

function Navigator() {
  return (
    <Wrapper className="container-fluid shadow">
      <div className="row">
        <div className="col-lg-6">
          <div className="logo-container">
            <img
              src="https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png"
              alt="logo"
              style={{ width: 100 }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="container">
            <nav className="d-flex">
              <div className="nav-item ">
                <Link to="" className="nav-link">
                  <i className="fa fa-search"></i> Search
                </Link>
              </div>
              <div className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-percent"></i> Offer
                </Link>
              </div>
              <div className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-support"></i> Help
                </Link>
              </div>
              <div className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-user"></i> Sign in
                </Link>
              </div>
              <div className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-shopping-cart"></i> Cart
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navigator;
