// role.js

import React, { Component } from 'react';
import * as constants from '../../constants/werewolf';
// import * as role from './role';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCard extends Component {
  
  render() {
    const { phase, username, isMe, userRole, isAlive , selectedBy, myRole} = this.props;
    var cardStyle = "card mb-3 ";

    if (!isAlive){
      //Dead
      cardStyle += "bg-dark text-white ";
    }else if (isMe){
      //Me
      cardStyle += "bg-primary text-white ";
    }else if (myRole === constants.roleWerewolf && userRole === constants.roleWerewolf){
      //werewolf
      cardStyle += "bg-secondary text-white ";
    }else{
      //villager
       cardStyle += "bg-light ";
    }

    switch (phase){
      case constants.phaseNight:
        if (myRole === constants.roleWerewolf && selectedBy === constants.roleWerewolf){
          cardStyle += "border-danger ";
        }else if (myRole === constants.roleGuard && selectedBy === constants.roleGuard){
          cardStyle += "border-primary ";
        }else if (myRole === constants.roleProphet && selectedBy === constants.roleProphet){
          cardStyle += "border-primary ";
        }
        break;
      case constants.phaseWitch:
        if (myRole === constants.roleWitch && selectedBy === constants.roleWerewolf){
          cardStyle += "border-danger ";
        }
        break;
      case constants.phaseVoting:
        if (myRole === constants.roleWitch && selectedBy === constants.roleWerewolf){
          cardStyle += "border-warning ";
        }
        break;
    }

console.log("[card.js] username: " + username + " style: " + cardStyle);
    return (
      <button class={cardStyle}>
        <div class="card-header p-2">{constants.roles[userRole]['name']}</div>
        <div class="card-body p-2">
          <div class="card-title"><h4>{username}</h4></div>
            <p class="card-text"><b>{this.props.votes} </b>votes</p>
        </div>
        <div class="card-footer text-muted p-1">ABCD</div>
      </button>
    );
  }
}

export default WerewolfCard;