// info.js

import React, { Component } from 'react';
import * as phase from './model/phase';
import Timer from '../timer';
import WerewolfCreateGameForm from './createGameForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class WerewolfInfo extends Component {
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
    switch (this.state.room.phase){
      case phase.PHASE_PENDING:
        let playerNumber = Object.keys(this.state.room.players).length;
        form.push(<WerewolfCreateGameForm player={playerNumber} config={this.state.room.config} roles={this.state.room.roles}></WerewolfCreateGameForm>);
        break;
      case phase.PHASE_NIGHT:
        break;
      case phase.PHASE_WITCH:
        break;
      case phase.PHASE_DISCUSSION:
        break;
      case phase.PHASE_VOTING:
        break;
      case phase.PHASE_END:
        break;
    }


return form;
  }

  render() {
    console.log(this.state.room);
    console.log('phase: ' + this.state.room.phase);
    // const { phase, myRole } = this.props;

    var description = '';
    // let phaseDescription = constants.phase[this.state.room.phase];
    // if (phaseDescription.description.hasOwnProperty(myRole)){
    //   description = phaseDescription.description[myRole];
    // }else{
    //   description = phaseDescription.description['others'];
    // }

    var additionalInfo = '';
    console.log(phase);
    if (this.state.room.phase === phase.PHASE_PENDING){
      //TODO: add copy button
      additionalInfo = <h3>Room ID: {this.state.roomId}</h3>;
    }else{
      additionalInfo = <Timer seconds={this.state.room.config.duration[this.state.room.phase]}></Timer>;
    }

    return (
      <div class="border vh-100" >
        {/* <h2>{phaseDescription['name']}</h2> */}
        <h3>{description}</h3>
        {additionalInfo}
        {this.renderForm()}
        <div></div>
      </div>
    );
  }
}

export default WerewolfInfo;