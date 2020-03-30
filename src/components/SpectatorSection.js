// SpectatorSection.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as label from '../constants/label';

class SpectatorSection extends Component {
  render() {
    var nameList = "";
    var count = 0;
    if (this.props.spectators){
      Object.entries(this.props.spectators).map(([key, spectator]) => {
          nameList += spectator.username + ', '
          count ++;
          return true;
      });
    }
  
    return (
      <div className="fixed-bottom bg-info text-white">
        {label.spectator} ({count})： {nameList} 
      </div>
    );
  }
}

export default SpectatorSection;