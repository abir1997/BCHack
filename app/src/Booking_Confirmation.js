import React, { Component } from "react";
import { Button } from "flwww";
import { Icon } from "flwww";
import { Card } from "flwww";
import { Table } from "flwww";
import BCtable from "./BC_table.js";

class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.history.push(`./finish`);
    }
    render() {

        return (
            <div style={{
                width: "500px",
                margin: 0,
                position: "absolute",
                top: "12%",
                left: "33%"
            }}>
                <div >
                    <Card style={{ boxShadow: "0 10px 20px #0003", border: "none" }} title="FlyAway Internationals">

                        <p>Booking Confirmed!</p>
                        <Icon type="userCheck" size="140px" color="#0000FF" />
                        <BCtable />
                        <p>Destination : Bali &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From : MEL</p>
                        <p>Total : 480$</p>
                        {/* <Button type="success" outlined round >OK</Button> */}
                        <Button outlined round colors={{ mainColor: "#0000FF", secondColor: "#0000FF" }} onClick={this.handleChange}>OK</Button>
                    </Card>
                </div>
            </div>

        );
    }
}
export default MyComponent;