// action.js

import React, { Component } from 'react';
import * as constants from './constant';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCreateGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.suggested[this.props.player];
  }
  roles = constants.roles;
  disabled = true;
  suggested = {
    8: {
      werewolf: 2,
      villager: 3,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 0,
      total: 8,
    },
    9: {
      werewolf: 3,
      villager: 3,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 0,
      total: 9,
    },
    10: {
      werewolf: 3,
      villager: 4,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 0,
      fool: 10,
    },
    11: {
      werewolf: 3,
      villager: 3,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 11,
    },
    12: {
      werewolf: 4,
      villager: 4,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 12,
    },
    13: {
      werewolf: 4,
      villager: 5,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 0,
      total: 13,
    },
    14: {
      werewolf: 4,
      villager: 5,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 14,
    },
    15: {
      werewolf: 4,
      villager: 6,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 15,
    },
    16: {
      werewolf: 4,
      villager: 7,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 16,
    },
    17: {
      werewolf: 4,
      villager: 8,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 17,
    },
    18: {
      werewolf: 4,
      villager: 9,
      seer: 1,
      guard: 1,
      witch: 1,
      hunter: 1,
      fool: 1,
      total: 18,
    },
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    this.state[name] = value;
    this.state['total'] += 1;
    // this.setState({ [name]: parseInt(value) });
    // this.calculateTotal();
    console.log(value + " state:" + this.state);
    console.log(this.state);
  }
  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.calculateTotal();
    this.setState({ [name]: checked ? 1 : 0 });

  }
  handleSubmit = () => {
    this.calculateTotal();
    console.log('total:' + this.state.total);
    console.log(this.state);

  }

  calculateTotal() {
    var total = this.state.werewolf + this.state.villager + this.state.seer + this.state.guard + this.state.witch + this.state.hunter + this.state.fool
    this.setState({ total: total });
  }

  render() {
    if (this.props.player > 8) {
      this.disabled = false;
    }


    return (
      <form onSubmit={this.handleSubmit}>
        <div><h3>{this.props.player}玩家 Player</h3></div>

        <div class="form-group row">
          <label class="col-6" >{this.roles['werewolf']['name']}</label>
          <input class="col-2" type="checkbox" checked disabled></input>
          <input class="col-2" type="number" name="werewolf" value={this.state.werewolf} onChange={this.handleChange} min={1}></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['villager']['name']}</label>
          <input class="col-2" type="checkbox" checked disabled></input>
          <input class="col-2" type="number" name="villager" value={this.state.villager} onChange={this.handleChange} min={1}></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['seer']['name']}</label>
          <input class="col-2" type="checkbox" name="seer" checked={this.state.seer} onChange={this.handleCheckboxChange} ></input>
          <input class="col-2" type="number" value={this.state.seer} disabled></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['guard']['name']}</label>
          <input class="col-2" type="checkbox" name="guard" checked={this.state.guard} onChange={this.handleCheckboxChange} ></input>
          <input class="col-2" type="number" value={this.state.guard} disabled></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['witch']['name']}</label>
          <input class="col-2" type="checkbox" name="witch" checked={this.state.witch} onChange={this.handleCheckboxChange} ></input>
          <input class="col-2" type="number" value={this.state.witch} disabled></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['hunter']['name']}</label>
          <input class="col-2" type="checkbox" name="hunter" checked={this.state.hunter} onChange={this.handleCheckboxChange} ></input>
          <input class="col-2" type="number" value={this.state.hunter} disabled></input>
        </div>
        <div class="form-group row">
          <label class="col-6" >{this.roles['fool']['name']}</label>
          <input class="col-2" type="checkbox" name="fool" checked={this.state.fool} onChange={this.handleCheckboxChange} ></input>
          <input class="col-2" type="number" value={this.state.fool} disabled></input>
        </div>
        <div>
          <label class="col-6">合共 Total </label>
          <label class="col-6">{this.state.total}</label>
        </div>

        <button type="submit" class="btn btn-primary btn-lg btn-block" disabled={this.disabled}>Confirm</button>
      </form>

    );
  }
}

export default WerewolfCreateGameForm;