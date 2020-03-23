// spectator.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as label from './../constants/label';

class Spectator extends Component {
  render() {
    var nameList = "";
    var count = 0;
    if (this.props.spectators){
      Object.entries(this.props.spectators).map(([key, spectator]) => {
          nameList += spectator.name + ', '
          count ++;
      });
    }
  
    return (
      <div class="fixed-bottom bg-info text-white">
        {label.spectator} ({count})： {nameList} 
      </div>
    );
  }
}

export default Spectator;