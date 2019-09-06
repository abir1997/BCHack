import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import MemberListComponent from './MemberListComponent';

class CostComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            moreMembersClicked: false,
            shareReq: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendClicked = this.sendClicked.bind(this);
    }


    handleChange(event) {
        this.setState({ moreMembersClicked: true })
    }

    sendClicked(event) {
        this.props.history.push(`../confirmation`);
    }

    render() {
        return (
            <div class="container cc">
                
                <div className="card text-center">
                    <div class="card-header">
                        Flight ticket to Bali
                </div>
                    <div class="card-body">
                  
                        <h5 class="card-title">Trip details : MELB to BALI (27 Aug - 05 Sept)</h5>
                        <p class="card-text">Cost : $500</p>
                        <button className="btn btn-success" onClick={this.handleChange}>Add more members</button> <br></br> <br></br>
                        {this.state.moreMembersClicked && <div>Email: <input type="text" name="username" /></div>}


                    </div>
                    <div class="card-footer text-muted">
                        <button className="btn btn-primary" onClick={this.sendClicked}>Send Share Request</button> <br></br> <br></br>
                    </div>

                </div>

            </div>

        );
    }
}

export default CostComponent;