// CreateGameForm.js

import React, { Component } from 'react';
import * as label from '../../constants/label';
import SETTING from './model/Setting';
import * as player from './model/Player';
import * as phase from './model/Phase';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCreateGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //roles
      //TODO: customization of role number
      // [ROLE_WEREWOLF]: this.props.role.werewolf,
      // [ROLE_VILLAGER]: this.props.role.werewolf,
      // [ROLE_PROPHET]: this.props.role.werewolf,
      // [ROLE_GUARD]: this.props.role.werewolf,
      // [ROLE_WITCH]: this.props.role.werewolf,
      // [ROLE_HUNTER]: this.props.role.werewolf,
      // [ROLE_FOOL]: this.props.role.werewolf,
      //duration
      //TODO: customization of duration
      // nightDuration : this.props.config.duration.night,
      // witchDuration : this.props.config.duration.witch,
      // discussionDuration : this.props.config.duration.discussion,
      // votingDuration : this.props.config.duration.voting,
      //other settings
      //TODO: customization of duration
      // displayRole : this.props.config.displayRole,

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // this.calculateTotal();
    console.log("[" + __filename + "]");
    console.log(value);
    console.log(this.state);
  }
  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.calculateTotal();
    this.setState({ [name]: checked ? 1 : 0 });

  }
  //TODO: assign role and start game
  onSubmit = () => {
    // this.calculateTotal();
    console.log('[' + __filename + ']total:' + this.state.total);
    console.log(this.state);
  }

  // FIXME: there is time delay
  // calculateTotal() {
  //   var total = parseInt(this.state.werewolf) + parseInt(this.state.villager) + parseInt(this.state.prophet) + parseInt(this.state.guard) + parseInt(this.state.witch) + parseInt(this.state.hunter) + parseInt(this.state.fool)
  //   this.setState({ total: total });
  // }

  renderRole(playerNumber) {
    var role = []
    if (playerNumber < 6) {
      playerNumber = 6;
    }
    for (var i = 0; i < player.ROLE_LIST.length; i++) {
      role.push(<label className="col-4" >{player.ROLE_LIST[i].roleName}</label>);
      role.push(<input className="col-2" type="number" name={player.ROLE_LIST[i].role} value={player.SUGGESTED_ROLE[playerNumber][player.ROLE_LIST[i].role]} onChange={this.handleChange} max={player.ROLE_LIST[i].maxNumber} min={player.ROLE_LIST[i].minNumber}></input>);
    }
    return role;
  }

  renderDuration() {
    var duration = []
    for (var i = 0; i < phase.ROUND_LIST.length; i++) {
      duration.push(<label className="col-4" >{phase.PHASE[phase.ROUND_LIST[i]].name}</label>);
      duration.push(<input className="col-2" type="number" name={phase.ROUND_LIST[i]} value={phase.PHASE[phase.ROUND_LIST[i]].duration} onChange={this.handleChange}></input>);
    }
    return duration;
  }

  render() {

    if (this.props.playerNumber >= SETTING.minimumPlayers) {
      //TODO: update default setting if player number change
      this.disabled = false;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <div><h4>{this.props.playerNumber} {label.player}</h4></div>
          {this.renderRole(this.props.playerNumber)}
        <div><h4>Duration of each session (s)</h4></div>
        <div className="form-group row">
          {this.renderDuration()}
        </div>
        <div><h4>Other Setting</h4></div>
        <div className="form-group row">
          <label className="col-8" >Display player Role after he/she died</label>
          <input className="col-2" type="checkbox" name="displayRole" checked={SETTING.displayRole} onChange={this.handleCheckboxChange}></input>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={this.disabled}>Confirm</button>
      </form>
    );
  }
}

export default WerewolfCreateGameForm;