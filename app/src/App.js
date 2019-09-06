import React, { Component } from "react";
import ReactDOM from "react-dom";
import CostComponent from "./Components/CostComponent";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyComponent from "./Booking_Confirmation";
import ConfirmationCard from './Confirmation';
import BCtable from "./BC_table";

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
      <Switch>
        <Route exact path = '/' component = {CostComponent} />
        <Route path = '/confirmation' component = {ConfirmationCard} />
        <Route path = '/booking' component = {MyComponent} />
        <Route path = '/finish' component = {BCtable} />


      
      </Switch>
    </div>
    </BrowserRouter>

  );
}


export default App;
