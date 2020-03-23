// room.js

import React from 'react'
import * as constants from '../../constants/werewolf';
import { werewolf as werewolfSetting } from '../../constants/game';
import WerewolfCard from './card';
import WerewolfPhase from './phase';
import Spectator from '../spectator';
import firebase from './../firebase/firebase';

class WerewolfRooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: this.props.match.params.roomId,
      userId: this.props.match.params.userId,
      myRole: null,
      me: null,
      room: werewolfSetting.setting // default setting
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


  // FIXME: connect to Database
  // componentDidMount() {
  //     const roomRef = firebase.database().ref(this.state.roomId);
  //     roomRef.on('value', (snapshot) => {
  //       let room = snapshot.val();
  //       // console.log('['+__filename+']')
  //       // console.log(snapshot.val())
  //       this.setState({
  //         room : room
  //       })
  //     })
  //   this.getMyRole();
  // }

  getMyRole() {
    if (this.state.room.players.hasOwnProperty(this.state.userId)) {
      console.log('is Player');
      this.setState({
        me: {
          player: true,
          role: this.state.room.players[this.state.userId]
        }
      })

    } else if (this.state.room.spectators.hasOwnProperty(this.state.userId)) {
      console.log('is Spectator');
      this.setState({
        me: {
          player: false,
          role: {}
        }
      })

    }
    // TODO: return error if phase != pending
    // else{
    //   window.alert("Invalid Room ID");
    //   this.props.history.push('/');
    // }

  }

  renderPlayer() {
    if (this.state.room == null) {
      return
    }
    var phase = this.state.room.phase;
    var players = this.state.room.players;
    var playerCards = [];

    if (players != null) {
      var playerIds = Object.keys(players);
      for (var i = 0; i < playerIds.length; i++) {
        let player = players[playerIds[i]];
        let isMe = this.state.userId == player.id;
        console.log("[room] userId: " + this.state.userId + " player.id: " + playerIds[i] + " isMe: " + isMe);
        playerCards.push(<WerewolfCard phase={phase} myRole={this.state.myRole} isMe={isMe} isAlive={player.isAlive} selectedBy={player.selectedBy} votes={player.votes} username={player.name} userRole={player.role} ></WerewolfCard>);
      }
    };
    return playerCards
  }

  renderSpectator() {

    if (this.state.room.spectators){
      return <Spectator spectators={this.state.room.spectators}></Spectator>
    }else{
      return <div></div>;
    }
  }

  render() {
    // const { url } = this.props.match;

    var room = this.state.room;
    // console.log(this.state.room.players);
    console.log(this.state);

    console.log("room id: " + this.state.roomId + " user id: " + this.state.userId + " role: " + this.state.myRole);

    return (
      <div>
        <div className="row">
          <div className="card-columns col-8">
            {this.renderPlayer()}
          </div>
          <div className="text-center col-4">
            <WerewolfPhase roomId={this.state.roomId} userId={this.state.userId} room={room} myRole={this.state.myRole}></WerewolfPhase>
          </div>
        </div>
    <div>{this.renderSpectator()}</div>
      </div>
    )
  }
}
export default WerewolfRooms