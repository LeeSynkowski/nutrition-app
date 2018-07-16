import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/*         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1> Log </h1>
        <p/> Date: (date picker)
        <div class="input-group date" data-provide="datepicker">
          <input type="text" class="form-control"/>
          <div class="input-group-addon">
              <span class="glyphicon glyphicon-th"></span>
          </div>
        </div>
        <p/> Workout (checkbox)
        <p/> Food Consumed (list header)
        <p/> Item       Amount    (edit)/(delete)
        <p/> Apple      100g       (button)
        <p/> Add (Name) (Amount) (+)

        <p/> Current Score       Day
        
      </div>
    );
  }
}

export default App;
