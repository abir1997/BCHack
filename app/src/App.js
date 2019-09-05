import React from 'react';
import logo from './logo.svg';
import './App.css';
import CostComponent from './Components/CostComponent';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CostComponent />
    </div>
  );
}

export default App;
