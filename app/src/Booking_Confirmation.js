import React, { Component } from "react";
import { Button } from "flwww";
import { Icon } from "flwww";
import { Card } from "flwww";
import { Table } from "flwww";
import BCtable from "./BC_table.js";

const MyComponent = () => (
    <div style={{ 
        width: "500px" ,
        margin: 0 ,
        position: "absolute" ,
        top: "12%" ,
        left: "33%"
        }}>

        <div >
            <Card style={{ boxShadow: "0 10px 20px #0003", border: "none" }} title="Hotel XYZ">
                <p>Booking Confirmed!</p>
                <Icon type="userCheck" size="140px" color="#01b875" />
                <BCtable />
                <p>Destination : Bali</p>
                <p>Total : 100$</p>
                <Button type="success" outlined round >OK</Button>
            </Card>
        </div>
    </div>
  
);

export default MyComponent