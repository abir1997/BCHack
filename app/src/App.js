import React, { Component } from "react";
import ReactDOM from "react-dom";
import CostComponent from "./Components/CostComponent";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MyComponent from "./Booking_Confirmation";
import ConfirmationCard from './Confirmation';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {CostComponent} />
        <Route exact path = '/confirmation' component = {ConfirmationCard} />
        <Route exact path = '/booking' component = {MyComponent} />

      
      </Switch>
    </div>
    </BrowserRouter>

  );
}


export default App;
