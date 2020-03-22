// room.js

import React from 'react'
import * as constants from '../../constants/werewolf';
import { werewolf as werewolfSetting } from '../../constants/game';
import WerewolfCard from './card';
import WerewolfStatus from './status';
import Onlooker from './../onlooker';
import firebase from './../firebase/firebase';

class WerewolfRooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomId: this.props.match.params.roomId,
      userId: this.props.match.params.userId,
      myRole: null,
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
  // componentDidMount(){
  //   const roomRef = firebase.database().ref(this.state.roomId);
  //   roomRef.on('value', (snapshot) => {
  //     let room = snapshot.val();
  //     // console.log('['+__filename+']')
  //     // console.log(snapshot.val())
  //     this.setState({
  //       room : room
  //     })
  //   })
  // }

  getMyRole() {
    if (this.state.room.players.hasOwnProperty(this.state.userId)) {
      var myRole = this.state.room.players[this.state.userId].role;
      this.setState({
        myRole: myRole
      })
    }
    // TODO: return error if status != pending
    // else{
    //   window.alert("Invalid Room ID");
    //   this.props.history.push('/');
    // }

  }

  renderPlayer() {
    if (this.state.room == null) {
      return
    }
    var status = this.state.room.status;
    var players = this.state.room.players;
    var playerCards = [];

    if (players != null) {
      var playerIds = Object.keys(players);
      for (var i = 0; i < playerIds.length; i++) {
        let player = players[playerIds[i]];
        let isMe = this.state.userId == player.id;
        console.log("[room] userId: " + this.state.userId + " player.id: " + playerIds[i] + " isMe: " + isMe);
        playerCards.push(<WerewolfCard status={status} myRole={this.state.myRole} isMe={isMe} isAlive={player.isAlive} selectedBy={player.selectedBy} votes={player.votes} userName={player.name} userRole={player.role} ></WerewolfCard>);
      }
    };
    return playerCards
  }

  render() {
    // const { url } = this.props.match;

    var room = this.state.room;
    // console.log(this.state.room.players);
    // console.log(this.state.userId);

    console.log("room id: " + this.state.roomId + " user id: " + this.state.userId + " role: " + this.state.myRole);

    return (
      <div>
        <div class="row">
          <div class="card-columns col-8">
            {this.renderPlayer()}
          </div>
          <div class="text-center col-4">
            <WerewolfStatus roomId={this.state.roomId} userId={this.state.userId} room={room} myRole={this.state.myRole}></WerewolfStatus>
          </div>
        </div>
        <div><Onlooker></Onlooker></div>
      </div>
    )
  }
}
export default WerewolfRooms