// action.js

import React, { Component } from 'react';
import * as constants from './constant';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCreateGameForm extends Component {
  handleSubmit = () => {
    
  }

  render() {
    if (this.props.player > 8) {
      this.disabled = false;
    }


    return (
      <form onSubmit={this.handleSubmit}>
        <div><h4>{this.props.player}玩家 Player</h4></div>
        <div>You selected {Player}</div>
        
        <button type="submit" class="btn btn-primary btn-lg btn-block" disabled={this.disabled}>Confirm</button>
      </form>

    );
  }
}

export default WerewolfCreateGameForm;