// roleDescription.js

import React, { Component } from 'react';
import * as label from '../../constants/label';
import 'bootstrap/dist/css/bootstrap.min.css';
import ROLE_LIST from './model/Player';
import TEAM_LIST from './model/Team';


class WerewolfRoleDescription extends Component {
  //TODO: highlight my role
  render() {
    var row = [];
    for (var i = 0; i < ROLE_LIST.length; i++) {
      row.push([
        <tr>
          <td >{ROLE_LIST[i].name}</td>
          <td>
            <p>{ROLE_LIST[i].description.zh}</p>
            <p>{ROLE_LIST[i].description.en}</p>
          </td>
          <td>{TEAM_LIST[ROLE_LIST[i].team].name}</td>
        </tr>
      ]);
    }

    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th>{label.role}</th>
            <th>{label.description}</th>
            <th>{label.team}</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}

export default WerewolfRoleDescription;


