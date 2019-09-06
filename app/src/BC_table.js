import React, { Component } from "react";
import { Table } from "flwww";

class BCtable extends Component {

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
    this.props.history.push(`./finish`);
    }

    render(){
        // Here is the data for the table columns
        const columns = [ "People", "Share(AUD)"];

        // Here is the data for the table rows. Pay attention to have the same key name as the one in your columns array!
        const products = [{
            People: "Adam",
            "Share(AUD)": "70$",
        },
        {
            People: "Darwin",
            "Share(AUD)": "30$",
        }];

        return (
            <div>
                <Table
                columns={ columns }
                rows={ products } />
            </div>
        )
    }
}

export default BCtable;