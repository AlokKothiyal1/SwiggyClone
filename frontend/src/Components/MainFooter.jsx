import React from "react";
import styled from "styled-components";

const Header = styled.header`
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: 15px;
    text-align: left;
    color: white;
  }
`;

function MainFooter() {
  return (
    <Header>
      <div
        className="container-fluid"
        style={{
          background: "black",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "35%" }}>
                    <b className="text-muted">COMPANY</b>
                  </li>
                  <li>About Us</li>
                  <li>Team</li>
                  <li>Careers</li>
                  <li>Swiggy Blog</li>
                  <li>Bug Bounty</li>
                  <li>Swiggy Pop</li>
                  <li>Swiggy Super</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{ listStyle: "none", padding: "10px", color: "white" }}
                >
                  <li style={{ marginTop: "28%" }}>
                    <b className="text-muted">CONTACT</b>
                  </li>
                  <li>Help & Support</li>
                  <li>Partner with Us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{ listStyle: "none", padding: "10px", color: "white" }}
                >
                  <li style={{ marginTop: "28%" }}>
                    <b className="text-muted">LEGAL</b>
                  </li>
                  <li>Terms & Conditions</li>
                  <li>Refund & Cancellation</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Offer Terms</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mt-5">
                <ul style={{ listStyle: "none" }}>
                  <li style={{ marginTop: "30%" }}>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                      alt="apple"
                      className="img-fluid"
                      style={{
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  </li>
                  <li style={{ marginTop: "30px" }}></li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                      alt="googleplay"
                      className="img-fluid"
                      style={{
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid grey",
                width: "100%",
                marginLeft: "3%",
                marginTop: "3%",
              }}
            ></div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "15px", marginLeft: "8px" }}>
            <div className="col">
              <b className="text-muted" style={{ marginLeft: "33px" }}>
                WE DELIVER TO
              </b>
              <ul>
                <li style={{ marginTop: "10px" }}>Abohar</li>
                <li>Achalpur</li>
                <li>Adilabad</li>
                <li>Adityapur</li>
                <li>Adoni</li>
                <li>Agartala</li>
                <li>Agara</li>
                <li>Ahmedabad</li>
                <li>Ahmednagar</li>
                <li>Ajmer</li>
                <li>Akola</li>
                <li>Akot</li>
                <li>Aligarh</li>
                <li>Alwar</li>
                <li>Ambala</li>
                <li>Ambikapur</li>
                <li>Ambur</li>
                <li>Amreli</li>
                <li>Arrah</li>
                <li>Anantpur</li>
              </ul>
            </div>
            <div className="col">
              <b style={{ color: "black" }}>WE DELIVER TO</b>
              <ul>
                <li style={{ marginTop: "10px" }}>Dahod</li>
                <li>Damoh</li>
                <li>Darbhanga</li>
                <li>Darjeeling</li>
                <li>Datia</li>
                <li>Dausa</li>
                <li>Devnagere</li>
                <li>Dehri</li>
                <li>Delhi</li>
                <li>Deoghar</li>
                <li>Dewas</li>
                <li>Dhamtari</li>
                <li>Dhanbad</li>
                <li>Dhar</li>
                <li>Dharmshala</li>
                <li>Eluru</li>
                <li>Etewah</li>
                <li>Erode</li>
                <li>Faridabad</li>
                <li>Faridkot</li>
              </ul>
            </div>
            <div className="col">
              <b style={{ color: "black" }}>WE DELIVER TO</b>
              <ul>
                <li style={{ marginTop: "10px" }}>Kayamk</li>
                <li>Kayamkulam</li>
                <li>Khammam</li>
                <li>Khandwa</li>
                <li>Khanna</li>
                <li>Kharagpur</li>
                <li>Kharogone</li>
                <li>Kishanganz</li>
                <li>Kochi</li>
                <li>Kolar</li>
                <li>Kolhapur</li>
                <li>Kolkata</li>
                <li>Kollam</li>
                <li>Korbe</li>
                <li>Kota</li>
                <li>Eluru</li>
                <li>Etewah</li>
                <li>Erode</li>
                <li>Faridabad</li>
                <li>Faridkot</li>
              </ul>
            </div>
            <div className="col">
              <b style={{ color: "black" }}>WE DELIVER TO</b>
              <ul>
                <li style={{ marginTop: "10px" }}>Puri</li>
                <li>Purnia</li>
                <li>Purulia</li>
                <li>Pushkar</li>
                <li>Puttur</li>
                <li>Rae-Barely</li>
                <li>Raipur</li>
                <li>Rajaplayam</li>
                <li>Rajkot</li>
                <li>Ranchi</li>
                <li>Ramgadh</li>
                <li>Rampur</li>
                <li>Raniganj</li>
                <li>Dhar</li>
                <li>Dharmshala</li>
                <li>Eluru</li>
                <li>Etewah</li>
                <li>Erode</li>
                <li>Faridabad</li>
                <li>Faridkot</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid grey",
              width: "100%",
              marginLeft: "3%",
              marginTop: "3%",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mt-5">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                alt="Swaggy"
                className="img-fluid ml-5 mb-5"
              />
            </div>
            <div className="col-lg-5 text-right mt-5 text-white">
              <h5 className="mt-2">
                <span>&#169;</span> 2020 Swiggy{" "}
              </h5>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div
                  className="col-lg-12 mt-5"
                  style={{ float: "right", marginLeft: "70%" }}
                >
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                    alt="facebook"
                    style={{
                      width: "25px",
                      marginRight: "18px",
                    }}
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                    alt="Instagram"
                    style={{
                      width: "25px",

                      marginRight: "18px",
                    }}
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                    alt="pinterest"
                    style={{
                      width: "25px",
                      marginRight: "18px",
                    }}
                  />
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                    alt="twitter"
                    style={{
                      width: "25px",
                      marginRight: "18px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default MainFooter;
