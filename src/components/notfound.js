// notfound.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Notfound extends Component {
  render() {
    return (
      <div class="App">
        <h1>Page Not Found</h1>
        <p>Return to <a  href="/">Home</a> Page</p>
      </div>
    );
  }
}

export default Notfound;