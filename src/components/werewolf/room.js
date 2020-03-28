// room.js

import React from 'react'
import { werewolf as werewolfSetting } from './model/WerewolfGame';
import WerewolfInfo from './Info';
import WerewolfCard from './GameCard/WerewolfCard';
import Spectator from './../model/Spectator';
import SpectatorSection from '../SpectatorSection';
import firebase from '../firebase/firebase';
import * as player from './model/Player';

import WerewolfGame from './model/WerewolfGame';
import './Room.scss';

// require('./model/player');

class WerewolfRooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: this.props.match.params.roomId,
      playerId: this.props.match.params.playerId,
      me: null,
      room: {
        game: werewolfSetting.setting // default setting
      }
    }
  }
  // TODO: ask before exit + delete user records
  // onUnload = e => { // the method that will be used for both add and remove event
  //   e.preventDefault();
  //   e.returnValue = 'Are you sure to exit?';
  // }
  // componentDidMount() {
  //   window.addEventListener("beforeunload", this.onUnload);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("beforeunload", this.onUnload);
  // }




  componentDidMount() {
    // window.addEventListener("beforeunload", this.onUnload);
    // DB: connect to Database
    //     const roomRef = firebase.database().ref(this.state.roomId);
    //     roomRef.on('value', (snapshot) => {
    //       let room = snapshot.val();
    //       this.setState({
    //         room : Object.assign(new WerewolfGame, { game: room }),
    //       })
    //     })
    //   this.getMyRole();
  }

  getMyRole() {
    console.log(this.state);
    let game = this.state.room.game;
    if (game.players.hasOwnProperty(this.state.playerId)) {
      this.setState({
        me: {
          player: true,
          role: Object.assign(new player.Player, game.players[this.state.playerId]),
        }
      })
    } else if (game.spectators.hasOwnProperty(this.state.playerId)) {
      this.setState({
        me: {
          player: false,
          role: Object.assign(new Spectator, game.spectators[this.state.playerId]),
        }
      })
    }
  }

  renderPlayer() {
    if (this.state.room.game == null) {
      return
    }
    var phase = this.state.room.game.phase;
    var players = this.state.room.game.players;
    var playerCards = [];

    if (players != null) {
      var playerIds = Object.keys(players);
      for (var i = 0; i < playerIds.length; i++) {
        let player = players[playerIds[i]];
        let isMe = this.state.playerId == player.id;
        console.log("[room] playerId: " + this.state.playerId + " player.id: " + playerIds[i] + " isMe: " + isMe);
        playerCards.push(<WerewolfCard key={player.id} phase={phase} isMe={isMe} player={player}></WerewolfCard>);
      }
    };
    return playerCards
  }

  renderSpectator() {
    if (this.state.room.game.spectators) {
      return <SpectatorSection spectators={this.state.room.game.spectators}></SpectatorSection>
    } else {
      return <div></div>;
    }
  }

  render() {
    // console.log(this.state);
    console.log("room id: " + this.state.roomId + " user id: " + this.state.playerId + " me: " + this.state.me);

    return (
      //TODO: add a small button at the top left corner to display role desc 
      //TODO: add a small button at the top left corner to exit 
      <div>
        <div className="game-room">
          <div className="card-section card-columns">
            {this.renderPlayer()}
          </div>
          <div className="panel-section text-center">
            <WerewolfInfo roomId={this.state.roomId} playerId={this.state.playerId} room={this.state.room} me={this.state.me}></WerewolfInfo>
          </div>
        </div>
        <div>{this.renderSpectator()}</div>
      </div>
    )
  }
}
export default WerewolfRooms