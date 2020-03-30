// role.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import './WerewolfCard.scss';

import * as playerConstant from './../model/Player';
import * as phaseConstant from './../model/Phase';


class WerewolfCard extends Component {

  render() {
    const { phase, isMe, myRole } = this.props;
    let player = Object.assign(new playerConstant.Player(), this.props.player)
    console.log(player);
    var cardStyle = "card mb-3 ";

    if (!player.isAlive) {
      //Dead
      cardStyle += "bg-dark text-white ";
    } else if (isMe) {
      //Me
      cardStyle += "bg-primary text-white ";
    } else if (myRole === playerConstant.ROLE_WEREWOLF && player.role === playerConstant.ROLE_WEREWOLF) {
      //werewolf
      cardStyle += "bg-secondary text-white ";
    } else {
      //villager
      cardStyle += "bg-light ";
    }

    switch (phase){
      case phaseConstant.PHASE_NIGHT:
        if (myRole === playerConstant.ROLE_WEREWOLF && player.selectedBy === playerConstant.ROLE_WEREWOLF){
          cardStyle += "border-danger ";
        }else if (myRole === playerConstant.ROLE_GUARD && player.selectedBy === playerConstant.ROLE_GUARD){
          cardStyle += "border-primary ";
        }else if (myRole === playerConstant.ROLE_PROPHET && player.selectedBy === playerConstant.ROLE_PROPHET){
          cardStyle += "border-primary ";
        }
        break;
      case phaseConstant.PHASE_WITCH:
        if (myRole === playerConstant.ROLE_WITCH && player.selectedBy === playerConstant.ROLE_WEREWOLF){
          cardStyle += "border-danger ";
        }
        break;
      case phaseConstant.PHASE_VOTING:
        if (myRole === playerConstant.ROLE_WITCH && player.selectedBy === playerConstant.ROLE_WEREWOLF){
          cardStyle += "border-warning ";
        }
        break;
      default:
        break;
    }

    // console.log("[card.js] username: " + username + " style: " + cardStyle);

    //TODO: replace border color
    return (
      <div>
        <Card className={cardStyle} onClick={() => console.log('click')}>
          <Card.Header>
            {player.roleName}
          </Card.Header>
          {/* <Card.Img src="" alt="Card image" /> */}
          <Card.Body>
            <Card.Title>{player.username}</Card.Title>
            <Card.Text>
              <b>{player.votes} </b>votes
                </Card.Text>
          </Card.Body>
          <Card.Footer>{player.select}</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default WerewolfCard;