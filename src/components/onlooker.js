// onlooker.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Onlooker extends Component {
  //TODO: display the name and count
  render() {
    return (
      <div class="fixed-bottom bg-info text-white">
        觀看者 onlooker (no.)： 
      </div>
    );
  }
}

export default Onlooker;