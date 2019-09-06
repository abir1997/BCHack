import React from "react";
import { Card, Button } from "flwww";
import SwitchNotify from "./Notify";
import "./App.css"
import { Icon } from "flwww";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

class ConfirmationCard extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.history.push(`./booking`);
  }

  render() {
    return (
      <div
        style={{
          width: "500px",
          height: "650px",
          margin: "0 auto",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Card
          style={{
            boxShadow: "0 10px 20px #0003",
            border: "none",
            width: "100%",
            height: "100%"
          }}
        >
          <div
            className="headerDiv"
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div className="logoDiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "250px",
                  height: "50px",
                  fill: "#006eff"
                }}
              >
                <path d="m36.5 21c-0.2-0.1-0.3-0.2-0.5-0.3 0 0-0.1 0-0.1-0.1-0.1-0.1-0.2-0.1-0.3-0.2l-0.2-0.1-14.8-9.7-7 7.2-0.1 0.1c-0.2 0.2-0.4 0.6-0.4 0.9 0 0.7 0.6 1.3 1.3 1.3 0.4 0 0.7-0.2 1-0.4l5.5-5.7 13.5 8.8c-1.8 7-8.2 12.2-15.8 12.2-8 0-14.6-5.7-16-13.2v-0.1s0 0 0-0.1c-0.2-0.7-0.8-1.1-1.5-1s-1.2 0.8-1.1 1.5v0.2c1.7 8.8 9.3 15.4 18.6 15.4 9.5 0 17.4-7 18.7-16.2-0.1-0.1-0.4-0.3-0.8-0.5zm-33.7 0.7zm32.8-1.4c-0.1 0-0.1 0 0 0l0.1 0.1c-0.1 0-0.1 0-0.1-0.1zm1.9-4.7v0 0c-1.6-8.9-9.3-15.6-18.6-15.6-9.5 0-17.3 7-18.7 16.2 0.3 0.2 0.7 0.4 1 0.6 0.1 0 0.1 0.1 0.2 0.1l15.6 10.2 7-7.2 0.1-0.1c0.2-0.2 0.4-0.6 0.4-0.9 0-0.7-0.6-1.3-1.3-1.3-0.4 0-0.7 0.2-1 0.4l-5.5 5.7-13.5-8.8c1.8-7 8.2-12.2 15.8-12.2 7.9 0 14.5 5.6 15.9 13v0.2c0.1 0.7 0.8 1.2 1.5 1.1 0.8 0 1.2-0.7 1.1-1.4zm6.8 9.9 1.8-2.5c1.3 1.4 3.3 2.5 5.8 2.5 2.7 0 3.7-1.3 3.7-2.5 0-3.9-10.8-1.5-10.8-8.3 0-3 2.7-5.4 6.7-5.4 2.9 0 5.2 0.9 6.9 2.6l-1.9 2.4c-1.4-1.4-3.4-2.1-5.3-2.1s-3.1 0.9-3.1 2.3c0 3.4 10.7 1.3 10.7 8.2 0 3.1-2.2 5.7-7.1 5.7-3.3 0-5.7-1.2-7.4-2.9zm26.6 2.6v-8.4c0-2.1-1.1-2.7-2.7-2.7-1.5 0-2.7 0.9-3.4 1.8v9.3h-2.9v-18.5h2.9v6.9c0.9-1.1 2.6-2.2 4.7-2.2 2.9 0 4.3 1.5 4.3 4.2v9.5h-2.9v0.1zm22.1 0v-13.4h2.9v2c1-1.3 2.6-2.3 4.3-2.3v2.9c-0.2-0.1-0.6-0.1-0.9-0.1-1.2 0-2.9 0.8-3.4 1.8v9.1h-2.9zm8.8-6.7c0-3.9 2.8-7 6.8-7s6.6 3.1 6.6 7.3v0.7h-10.3c0.2 2 1.7 3.7 4.3 3.7 1.3 0 2.9-0.5 3.8-1.5l1.3 1.9c-1.3 1.3-3.3 1.9-5.4 1.9-4.1 0-7.1-2.8-7.1-7zm6.8-4.6c-2.5 0-3.6 1.9-3.8 3.5h7.5c0-1.6-1.1-3.5-3.7-3.5zm22.1 11.6-4.1-6.9h-3.2v6.9h-3.2v-18.5h8.1c3.7 0 6 2.4 6 5.8 0 3.3-2.2 5.1-4.4 5.4l4.5 7.3h-3.7zm0.3-12.7c0-1.8-1.3-2.9-3.2-2.9h-4.4v5.9h4.4c1.9-0.1 3.2-1.2 3.2-3zm6.1-4.1c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8-1.8-0.8-1.8-1.8zm0.4 16.8v-13.4h2.9v13.4h-2.9zm15.6 0v-8.4c0-2.1-1.1-2.8-2.7-2.8-1.5 0-2.8 0.9-3.4 1.8v9.3h-2.9v-13.3h2.9v1.8c0.9-1.1 2.6-2.2 4.7-2.2 2.9 0 4.3 1.5 4.3 4.3v9.4h-2.9v0.1zm6.2 3.4 1.4-2.1c1.1 1.2 2.5 1.7 4.2 1.7 1.9 0 4-0.9 4-3.6v-1.6c-1 1.3-2.5 2.2-4.3 2.2-3.4 0-5.9-2.5-5.9-6.9 0-4.3 2.5-6.9 5.9-6.9 1.7 0 3.2 0.8 4.3 2.2v-1.8h2.9v12.7c0 4.8-3.6 6.1-6.9 6.1-2.2 0-3.9-0.5-5.6-2zm9.6-7.8v-5c-0.6-1-2.1-1.8-3.4-1.8-2.3 0-3.8 1.7-3.8 4.3s1.5 4.3 3.8 4.3c1.3 0 2.8-0.8 3.4-1.8zm-82.2-9.4v1.7c-0.4-0.6-0.9-1.1-1.6-1.5s-1.5-0.6-2.3-0.6c-1 0-1.9 0.2-2.7 0.6s-1.5 0.9-2 1.6-0.9 1.4-1.2 2.3-0.4 1.8-0.4 2.7 0.1 1.8 0.4 2.6 0.7 1.6 1.2 2.2c0.5 0.7 1.2 1.2 2 1.6s1.8 0.6 2.8 0.6c0.9 0 1.7-0.2 2.4-0.6s1.2-1 1.6-1.7v2h2.9v-13.5h-3.1zm-0.8 10.2c-0.6 0.9-1.6 1.3-2.8 1.3-1.3 0-2.3-0.4-2.9-1.3-0.7-0.9-1-2-1-3.4s0.3-2.6 1-3.4c0.6-0.9 1.6-1.3 2.9-1.3 1.2 0 2.2 0.4 2.8 1.3 0.4 0.5 0.6 1.1 0.8 1.8v3.2c-0.1 0.7-0.4 1.3-0.8 1.8z"></path>
              </svg>
            </div>
            <div
              style={{
                width: "250px",
                height: "50px"
              }}
            >
              
              <h2
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "20px",
                  verticalAlign: "middle",
                  textAlign: "right",
                  marginTop: "5px" /* need this to clear the default margin */,
                  marginBottom: "0px"
                }}
              >
                One step away
            </h2>
            </div>
            
          </div>
          <div
            className="flightDetails"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              className="takeoff"
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div className="traveldate">
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "20px",
                    padding: "10px",
                    marginRight: "75px",
                    marginTop: "50px"
                  }}
                >
                  27 Aug 2019
              </h4>
              </div>
              <div className="toandfrom">
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "20px",
                    padding: "10px",
                    marginLeft: "75px",
                    marginTop: "50px"
                  }}
                >
                  MEL <MdFlightTakeoff /> BALI
              </h4>
              </div>
            </div>
            <div
              className="landon"
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div className="traveldate">
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "20px",
                    padding: "10px",
                    marginRight: "75px"
                  }}
                >
                  04 Sep 2019
              </h4>
              </div>
              <div className="toandfrom">
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "20px",
                    padding: "10px",
                    marginLeft: "75px"
                  }}
                >
                  BALI <MdFlightLand /> MEL
              </h4>
              </div>
            </div>
          </div>
          <div
            className="detailDiv"
            style={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              width: "100%"
            }}
          >
            <div style={{ width: "100%" }}>
              <h4
                style={{
                  textAlign: "center",
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "100",
                  fontSize: "1em",
                  width: "100%",
                  height: "100%",
                  verticalAlign: "center"
                }}
              >
                You and 1 other traveller
            </h4>
            </div>
          </div>
          <div className="flex-container">
            <ul class="list-group list-group-horizontal-lg">
              <li class="list-group-item">Total Cost :$500</li>
              <li class="list-group-item"><small>You pay : $250</small></li>
            </ul>
          </div>
          
          <div className="stuff">
          <div
            style={{
              display: "flex",
  height: "300px",
  justifyContent: "center",
  alignItems: "center"
            }}
          >
            <Button round type="primary" onClick={this.handleChange}>
              Confirm
          </Button>
          </div>
      </div>

        </Card>
      </div>
    );
  }
}

export default ConfirmationCard;
