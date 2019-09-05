import React, { Component } from 'react';
import '../bootstrap.css';

class CostComponent extends Component {


    constructor(props){
        super(props);

        this.state = {
            moreMembersClicked : false
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event){
        this.setState({moreMembersClicked : true})
    }

    render() {
        return (
            <div class = "container">
            <div className="card text-center">
                <div class="card-header">
                    Hotel : Watercrest
                </div>
                <div class="card-body">
                    <h5 class="card-title">Trip date : 25th August 2019</h5>
                    <p class="card-text">Location : 55 William St, Perth</p>
                    <p class="card-text">Cost : $500</p>
                    <button className="btn btn-success" onClick={this.handleChange}>Add more members</button> <br></br> <br></br>
                    {this.state.moreMembersClicked && <div><p>  User Name: <input type="text" name="username" /> </p></div>}             
                  
                    
                </div>
                <div class="card-footer text-muted">
                    2 days ago
            </div>
                </div>
                </div>
        );
    }
}

export default CostComponent;