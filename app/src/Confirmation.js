import React from "react";
import { Card, Button } from "flwww";
import SwitchNotify from "./Notify";
import { Icon } from "flwww";
import { MdFlightTakeoff } from "react-icons/md";

const ConfirmationCard = props => {
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
        <h2
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            fontFamily: "Montserrat,Helvetica,Arial,sans-serifs"
          }}
        >
          CONFIRM TRIP
        </h2>
        <div>
          <span>
            <h4 style={{ textAlign: "center" }}>
              MEL <MdFlightTakeoff /> BALI
            </h4>
            <p></p>
          </span>
        </div>
        <SwitchNotify />
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "35px",
            bottom: "70px"
          }}
        >
          <Button round type="primary">
            Confirm
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ConfirmationCard;
