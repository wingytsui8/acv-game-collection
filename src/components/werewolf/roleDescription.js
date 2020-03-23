// role.js

import React, { Component } from 'react';
import * as constants from '../../constants/werewolf';
import 'bootstrap/dist/css/bootstrap.min.css';

class WerewolfRole extends Component {

  roles = constants.roles;  
  render() {
    var roleRow = [];
    for (var key in this.roles) {
      var role = this.roles[key];
      roleRow.push([
        <tr>
          <td >{role['name']}</td>
          <td>
            <p>{role['description_zh']}</p>
            <p>{role['description']}</p>
            </td>
          <td>{constants.teams[role['team']]['name']}</td>
        </tr>
        ]);
    }

    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th>角色 Role</th>
            <th>簡介 Description</th>
            <th>隊伍 Team</th>
          </tr>
        </thead>
        <tbody>{roleRow}</tbody>
      </table>
    );
  }
}

export default WerewolfRole;


