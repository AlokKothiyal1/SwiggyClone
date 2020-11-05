import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Div = styled.div`
  font-family: sans-serif;
`;

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
});

export default function RegisterDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      style={{ right: 0 }}
      role="presentation"
    >
      <Div className="container" style={{ width: "90%" }}>
        <Div className="row">
          <Div className="col text-left">
            <button
              type="button"
              className="btn btn-sm"
              onClick={toggleDrawer(anchor, false)}
            >
              X
            </button>
            <div className="container mt-2">
              <div className="row">
                <div className="col-lg-5 ml-3">
                  <h3>Sign up</h3>
                  <small>
                    or <b style={{ color: "#fc8019" }}>create an account</b>
                  </small>
                </div>
                <div className="col-lg-5 ml-5">
                  <img
                    className="img-fluid"
                    style={{
                      width: "105px",
                      height: "100px",
                      borderRadius: "50%",
                      fload: "right",
                    }}
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="logo of wrap"
                  />
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <TextField
                      id="outlined-textarea"
                      label="Phone Number"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{ marginLeft: "0px", borderRadius: "0px" }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      id="outlined-textarea"
                      label="Name"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{ marginLeft: "0px", borderRadius: "0px" }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      id="outlined-textarea"
                      label="Email"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{ marginLeft: "0px", borderRadius: "0px" }}
                    />
                  </div>
                  <div className="col-lg-12">
                    <TextField
                      id="outlined-textarea"
                      label="Password"
                      placeholder=""
                      fullWidth
                      variant="outlined"
                      style={{ marginLeft: "0px", borderRadius: "0px" }}
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <small
                      style={{
                        color: "#5d8ed5",
                        marginLeft: "1%",
                        fontWeight: "bold",
                      }}
                    >
                      Have a referral code
                    </small>
                  </div>

                  <div className="col-lg-12 text-center">
                    <button
                      style={{
                        background: "#fc8019",
                        border: "1px solid #fc8019",
                        color: "white",
                        marginTop: "15px",
                        width: "345px",
                        borderRadius: "2%",
                      }}
                    >
                      <p style={{ fontWeight: "bold", marginTop: "9px" }}>
                        CONTINUE
                      </p>
                    </button>
                  </div>
                  <div>
                    <small
                      style={{ fontSize: "9px", fontWeight: "bold" }}
                      className="text-muted mx-2"
                    >
                      By creating an account, I accept the{" "}
                      <small
                        style={{
                          color: "#5d8ed5",
                          fontSize: "9px",
                          fontWeight: "bold",
                        }}
                      >
                        Terms & Conditions
                      </small>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            type="button"
            className=" btn btn-lg align-self-center font-weight-bold"
            onClick={toggleDrawer(anchor, true)}
            style={{
              borderRadius: "0px",
              color: "white",
              backgroundColor: "black",
            }}
          >
            {"Sign up"}
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
