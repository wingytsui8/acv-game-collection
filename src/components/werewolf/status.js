// status.js

import React, { Component } from 'react';
import * as constants from './constant';
import Timer from './../timer';
import WerewolfCreateGameForm from './createGameForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfStatus extends Component {

  status = constants.status[this.props.status];


  render() {
    console.log('status: ' + this.status);
    const { status, userRole, selectedBy } = this.props;

    var description = '';
    if (this.status['description'].hasOwnProperty(userRole)){
      description = this.status['description'][userRole];
    }else{
      description = this.status['description']['others'];
    }
    


    return (
      <div class="border vh-100" >
        <h2>{this.status['name']}</h2>
        <h3>{description}</h3>
        <Timer seconds={this.status.time}></Timer>
        <WerewolfCreateGameForm player={12}></WerewolfCreateGameForm>
        <div></div>
      </div>

    );
  }
}

export default WerewolfStatus;