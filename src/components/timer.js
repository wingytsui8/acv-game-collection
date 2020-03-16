// timer.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Timer extends Component {

  state = {
    seconds: this.props.seconds,
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state
      if (seconds > 999) {
        return;
      }
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div class="p-5">
        {this.state.seconds > 999 ? <h1 class="text-monospace"> no countdown</h1> :<h1 class="text-danger font-weight-bold display-1 text-monospace"> {this.state.seconds}s</h1>}

      </div>
    )
  }
}

export default Timer;