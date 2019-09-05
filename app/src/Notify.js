import React, { Component } from "react";
import { Switch } from "flwww";

class SwitchNotify extends Component {
  state = {
    switchVal: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "35px",
          bottom: "45px"
        }}
      >
        <div style={{ display: "inline-block" }}>
          <Switch
            name="switchVal"
            onChange={this.handleChange}
            checked={this.state.switchVal}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            marginLeft: "10px",
            marginBottom: "16px",
            marginTop: "-16px"
          }}
        >
          <p style={{ fontFamily: "Montserrat,Helvetica,Arial,sans-serifs" }}>
            Notify me about trip changes
          </p>
        </div>
      </div>
    );
  }
}

export default SwitchNotify;
