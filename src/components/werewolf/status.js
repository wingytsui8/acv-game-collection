// status.js

import React, { Component } from 'react';
import * as constants from '../../constants/werewolf';
import Timer from './../timer';
import WerewolfCreateGameForm from './createGameForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class WerewolfStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: this.props.roomId,
      userId: this.props.userId,
      myRole: this.props.myRole,
      room: this.props.room,
    }
  }

  renderForm(){
    var form = [];
    switch (this.state.room.status){
      case constants.statusPending:
        let playerNumber = Object.keys(this.state.room.players).length;
        form.push(<WerewolfCreateGameForm player={playerNumber} config={this.state.room.config} roles={this.state.room.roles}></WerewolfCreateGameForm>);
        break;
      case constants.statusNight:
        break;
      case constants.statusWitch:
        break;
      case constants.statusDiscussion:
        break;
      case constants.statusVoting:
        break;
      case constants.statusEnd:
        break;
    }


return form;
  }

  render() {
    console.log(this.state.room);
    console.log('status: ' + this.state.room.status);
    const { status, myRole } = this.props;

    var description = '';
    let statusDescription = constants.status[this.state.room.status];
    if (statusDescription.description.hasOwnProperty(myRole)){
      description = statusDescription.description[myRole];
    }else{
      description = statusDescription.description['others'];
    }

    var additionalInfo = '';
    if (this.state.room.status === constants.statusPending){
      //TODO: add copy button
      additionalInfo = <h3>Room ID: {this.state.roomId}</h3>;
    }else{
      additionalInfo = <Timer seconds={this.state.room.config.duration[this.state.room.status]}></Timer>;
    }

    return (
      <div class="border vh-100" >
        <h2>{statusDescription['name']}</h2>
        <h3>{description}</h3>
        {additionalInfo}
        {this.renderForm()}
        <div></div>
      </div>
    );
  }
}

export default WerewolfStatus;