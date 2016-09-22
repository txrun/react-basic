import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  
  getInitialState: function() {
    return {
      name: "tiper"
    }
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  render: function(){
    return(
        <div>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          <h2>{this.state.name}</h2>
        </div>
      )
  }
});

export default App;
