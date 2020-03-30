// info.js

import React, { Component } from 'react';
import * as phaseModel from './model/Phase';
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

  renderForm(game) {
    var form = [];
    switch (game.phase) {
      case phaseModel.PHASE_PENDING:
        let playerNumber = Object.keys(game.players).length;
        form.push(<WerewolfCreateGameForm playerNumber={playerNumber} config={game.config} roles={game.roles} room={this.state.room}></WerewolfCreateGameForm>);
        break;
      case phaseModel.PHASE_NIGHT:
        break;
      case phaseModel.PHASE_WITCH:
        break;
      case phaseModel.PHASE_DISCUSSION:
        break;
      case phaseModel.PHASE_VOTING:
        break;
      case phaseModel.PHASE_END:
        break;
      default:
        break;
    }

    return form;
  }

  renderPhaseDescription(phase, phaseDuration, me) {
    var description = [];
    description.push(phaseModel.PHASE[phase].name);
    if (me) {
      if (phaseModel.PHASE[phase].description.hasOwnProperty(me.role)) {
        description.push(phaseModel.PHASE[phase].description[me.role]);
      } else {
        description.push(phaseModel.PHASE[phase].description['others']);
      }
    }

    var additionalInfo = '';
    switch (phase) {
      case phaseModel.PHASE_PENDING:
        //TODO: add copy button
        additionalInfo = <h3>Room ID: {this.state.roomId}</h3>;
        break;
      case phaseModel.PHASE_NIGHT:
      case phaseModel.PHASE_WITCH:
      case phaseModel.PHASE_DISCUSSION:
      case phaseModel.PHASE_VOTING:
        additionalInfo = <Timer seconds={phaseDuration[phase]}></Timer>;
        break
      case phaseModel.PHASE_END:
        additionalInfo = '';
        break;
      default:
        additionalInfo = '';
        break;
    }
    description.push(additionalInfo);

    return description;
  }

  render() {

    var game = this.state.room.game;
    console.log(game);
    console.log('[Info - render] phase: ' + game.phase);

    return (
      <div className="border vh-100" >
        <h3>{this.renderPhaseDescription(game.phase, game.phaseDuration, game.players[this.state.playerId])}</h3>
        {this.renderForm(game)}
        <div></div>
      </div>
    );
  }
}

export default WerewolfInfo;