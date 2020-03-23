// action.js

import React, { Component } from 'react';
import * as constants from '../../constants/werewolf';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCreateGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //roles
      werewolf: this.props.roles.werewolf,
      villager: this.props.roles.villager,
      prophet: this.props.roles.prophet,
      guard: this.props.roles.guard,
      witch: this.props.roles.witch,
      hunter: this.props.roles.hunter,
      fool: this.props.roles.fool,
      total: 0,
      //duration
      nightDuration : this.props.config.duration.night,
      witchDuration : this.props.config.duration.witch,
      discussionDuration : this.props.config.duration.discussion,
      votingDuration : this.props.config.duration.voting,
      //other settings
      displayRole : this.props.config.displayRole,
    
    }
    // this.handleChange = this.handleChange.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  }
  
  roles = constants.roles;
  disabled = true;
  suggested = {
    6: {
      werewolf: 2,
      villager: 2,
      prophet: 1,
      guard: 1,
      witch: 0,
      hunter: 0,
      fool: 0,
      total: 6,
    },
    7: {
      werewolf: 2,
      villager: 3,
      prophet: 1,
      guard: 1,
      witch: 0,
      hunter: 0,
      fool: 0,
      total: 7,
    },
    8: {
      werewolf: 2,
      villager: 3,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 0,
      total: 8,
    },
    9: {
      werewolf: 3,
      villager: 3,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 0,
      total: 9,
    },
    10: {
      werewolf: 3,
      villager: 4,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 10,
    },
    11: {
      werewolf: 3,
      villager: 3,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 11,
    },
    12: {
      werewolf: 4,
      villager: 4,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 12,
    },
    13: {
      werewolf: 4,
      villager: 5,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 13,
    },
    14: {
      werewolf: 4,
      villager: 5,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 14,
    },
    15: {
      werewolf: 4,
      villager: 6,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 15,
    },
    16: {
      werewolf: 4,
      villager: 7,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 16,
    },
    17: {
      werewolf: 4,
      villager: 8,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 17,
    },
    18: {
      werewolf: 4,
      villager: 9,
      prophet: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 18,
    },
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // this.calculateTotal();
    console.log("[" + __filename + "]");
    console.log(value );
    console.log(this.state);
  }
  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.calculateTotal();
    this.setState({ [name]: checked ? 1 : 0 });

  }
  //TODO: assign role and start game
  onSubmit = () => {
    this.calculateTotal();
    console.log('['+__filename+']total:' + this.state.total);
    console.log(this.state);
  }

  // FIXME: there is time delay
  // calculateTotal() {
  //   var total = parseInt(this.state.werewolf) + parseInt(this.state.villager) + parseInt(this.state.prophet) + parseInt(this.state.guard) + parseInt(this.state.witch) + parseInt(this.state.hunter) + parseInt(this.state.fool)
  //   this.setState({ total: total });
  // }

  render() {
    if (this.props.player > 8) {
      //TODO: update default setting if player number change
      this.disabled = false;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <div><h4>{this.props.player}玩家 Player</h4></div>
        <div className="form-group row">
          <label className="col-4" >{this.roles[constants.roleWerewolf]['name']}</label>
          <input className="col-2" type="number" name={constants.roleWerewolf} value={this.state.werewolf} onChange={this.handleChange} min={1}></input>
          <label className="col-4" >{this.roles[constants.roleVillager]['name']}</label>
          <input className="col-2" type="number" name={constants.roleVillager} value={this.state.villager} onChange={this.handleChange} min={1}></input>
        </div>
        <div className="form-group row">
          <label className="col-4" >{this.roles[constants.roleProphet]['name']}</label>
          <input className="col-2" type="checkbox" name={constants.roleProphet} checked={this.state.prophet} onChange={this.handleCheckboxChange} ></input>
          <label className="col-4" >{this.roles[constants.roleGuard]['name']}</label>
          <input className="col-2" type="checkbox" name={constants.roleGuard} checked={this.state.guard} onChange={this.handleCheckboxChange} ></input>
        </div>
        <div className="form-group row">
          <label className="col-4" >{this.roles[constants.roleWitch]['name']}</label>
          <input className="col-2" type="checkbox" name={constants.roleWitch} checked={this.state.witch} onChange={this.handleCheckboxChange} ></input>
          <label className="col-4" >{this.roles[constants.roleHunter]['name']}</label>
          <input className="col-2" type="checkbox" name={constants.roleHunter} checked={this.state.hunter} onChange={this.handleCheckboxChange} ></input>
        </div>
        <div className="form-group row">
          <label className="col-4" >{this.roles[constants.roleFool]['name']}</label>
          <input className="col-2" type="checkbox" name={constants.roleFool} checked={this.state.fool} onChange={this.handleCheckboxChange} ></input>
        </div>
        <div>
          <label className="col-6">合共 Total </label>
          <label className="col-6">{this.state.total}</label>
        </div>
        <div><h4>Duration of each session (s)</h4></div>
        <div className="form-group row">
        <label className="col-4" >{constants.phase.night.name}</label>
          <input className="col-2" type="number" name="nightDuration" value={this.state.nightDuration} onChange={this.handleChange}></input>
        <label className="col-4" >{constants.phase.witch.name}</label>
          <input className="col-2" type="number" name="witchDuration" value={this.state.witchDuration} onChange={this.handleChange}></input>
        </div>
        <div className="form-group row">
        <label className="col-4" >{constants.phase.discussion.name}</label>
          <input className="col-2" type="number" name="discussionDuration" value={this.state.discussionDuration} onChange={this.handleChange}></input>
        <label className="col-4" >{constants.phase.voting.name}</label>
          <input className="col-2" type="number" name="votingDuration" value={this.state.votingDuration} onChange={this.handleChange}></input>
        </div>
        <div><h4>Other Setting</h4></div>
        <div className="form-group row">
        <label className="col-8" >Display player Role after he/she died</label>
        <input className="col-2" type="checkbox" name="displayRole" checked={this.state.displayRole} onChange={this.handleCheckboxChange}></input>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={this.disabled}>Confirm</button>
      </form>

    );
  }
}

export default WerewolfCreateGameForm;