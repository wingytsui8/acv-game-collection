// role.js

import React, { Component } from 'react';
import * as constants from './constant';
// import * as role from './role';
import 'bootstrap/dist/css/bootstrap.min.css';


class WerewolfCard extends Component {
  
  render() {
    const { userName, userRole, isAlive , selectedBy} = this.props;
    var cardStyle = "card mb-3 ";
    if (isAlive){
       cardStyle += "bg-light ";
    }else{
       cardStyle += "text-white bg-dark ";
      
    }
    switch (selectedBy){
      case "werewolf": 
        cardStyle += "border-danger ";
        break;
      case "seer":
        cardStyle += "border-primary ";
        break;
      case "voting":
        cardStyle += "border-warning ";
        break; 
} 

console.log("userName: " + userName + " style: " + cardStyle);
 
    return (
      <button class={cardStyle}>
        <div class="card-header">{constants.roles[userRole]['name']}</div>
        <div class="card-body">
          <h3 class="card-title">{userName}</h3>
            <p class="card-text"><b>{this.props.votes} </b>votes</p>
        </div>
        
      </button>
    );
  }
}

export default WerewolfCard;