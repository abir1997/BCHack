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
                        <Icon type="userCheck" size="140px" color="#006eff" />
                        {/* <li class="list-group-item"><span>Destination :</span>Bali <br></br>
                            <span>From :</span> : Melbourne</li>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item"><span>Tom :</span> $250 &nbsp; <span>Larry :</span> $250</li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item"><span>Total :</span> $500</li>
                        </ul> */}

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">To</th>
                                    <td scope="col">Bali</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>From</th>
                                    <td>Melbourne</td>
                                </tr>
                                <tr>
                                    <td>Tom</td>
                                    <td>$250</td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>$250</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>$500</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* <Button type="success" outlined round >OK</Button> */}
                        <br></br>
                        {/* <Button outlined round colors={{ mainColor: "#006eff", secondColor: "#0000FF" }} onClick={this.handleChange}>OK</Button>*/}
                    </Card>
                </div>
            </div>

        );
    }
}
export default MyComponent;