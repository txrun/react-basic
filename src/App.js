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

  handleNameClick: function(e) {
    this.setState({name: this.state.name + " plus 1 "});
  },

  render: function(){
    return(
        <div>
          <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          <h2 onClick={this.handleNameClick}>{this.state.name}</h2>
        </div>
      )
  }
});

export default App;
