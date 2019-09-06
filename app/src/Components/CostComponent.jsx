import React, { Component } from 'react';
import '../bootstrap.css';
import '../App.css';
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
            <div class="container">
                <div class="txt-holder">
                    <h2>Hi Tom, you can now split the cost with your mates</h2>
                </div>
                <div className="card text-center">
                    <div class="card-header">
                        Hotel : Watercrest
                </div>
                    <div class="card-body">
                        <h5 class="card-title">Trip date : 25th August 2019</h5>
                        <p class="card-text">Location : 55 William St, Perth</p>
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