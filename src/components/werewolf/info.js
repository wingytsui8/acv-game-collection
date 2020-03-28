// info.js

import React, { Component } from 'react';
import * as phase from './model/Phase';
import Timer from '../timer';
import WerewolfCreateGameForm from './CreateGameForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class WerewolfInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: this.props.roomId,
      playerId: this.props.playerId,
      me: this.props.me,
      room: this.props.room,
    }
  }

  renderForm(game){
    var form = [];
    switch (game.phase){
      case phase.PHASE_PENDING:
        let playerNumber = Object.keys(game.players).length;
        form.push(<WerewolfCreateGameForm playerNumber={playerNumber} config={game.config} roles={game.roles}></WerewolfCreateGameForm>);
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
    var game = this.state.room.game;

    var description = '';
    // let phaseDescription = constants.phase[this.state.room.phase];
    // if (phaseDescription.description.hasOwnProperty(myRole)){
    //   description = phaseDescription.description[myRole];
    // }else{
    //   description = phaseDescription.description['others'];
    // }

    var additionalInfo = '';
    if (game.phase === phase.PHASE_PENDING){
      //TODO: add copy button
      additionalInfo = <h3>Room ID: {this.state.roomId}</h3>;
    }else{
      additionalInfo = <Timer seconds={game.config.duration[game.phase]}></Timer>;
    }

    return (
      <div className="border vh-100" >
        {/* <h2>{phaseDescription['name']}</h2> */}
        <h3>{description}</h3>
        {additionalInfo}
        {this.renderForm(game)}
        <div></div>
      </div>
    );
  }
}

export default WerewolfInfo;