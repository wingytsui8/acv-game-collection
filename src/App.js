import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import firebase from './components/firebase/firebase';
import * as constants from './constants/game';
import * as label from './constants/label';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
  }

  database = firebase.database();

  // DB: Connect database
  // componentDidMount() {
  //   const roomsRef = firebase.database().ref('/');
  //   roomsRef.on('value', (snapshot) => {
  //     let rooms = snapshot.val();
  //     this.setState({
  //       rooms: rooms
  //     })
  //   })
  // }

  generateUserId() {
    var userId = 10000000000 + Math.floor(Math.random() * (100000000000));
    return userId;
  }

  //TODO: username checking -> no special char && do not longer than 10 char
  createNewGame = (event) => {
    let roomId = 100000 + Math.floor(Math.random() * (1000000));
    let userId = this.generateUserId();
    let username = event.target.username.value;
   //DB:
    // this.createNewRoomToFirebase(roomId, userId, username, "villager"); 
    this.props.history.push('/werewolf/room/' + roomId + '/' + userId);
  }

  joinExistingGame = (event) => {
    // console.log("[joinExistingGame] Room id: " + event.target.roomId.value + " User Name: " + event.target.username.value)
    let roomId = event.target.roomId.value;
    let userId = this.generateUserId()
    let username = event.target.username.value;
    var spectator = event.target.spectator.checked;
    if (this.state.rooms.hasOwnProperty(roomId)) {
      if (this.checkAvailableusername(roomId, username)) {
        if (!spectator) { //player
          if (this.state.rooms[roomId].phase != constants.initPhase) {
            if (!window.confirm("Game started. Join as an spectator?")) {
              return;
            }
          }else{
            // window.alert("create a new player. userId: " + userId + ' username: ' + username);
            //DB:
            // this.createNewPlayerToFirebase(roomId, userId, username, "villager");
            this.props.history.push('/werewolf/room/' + roomId + '/' + userId);
            return
          }
        }
        // window.alert("create a new spectator. userId: " + userId + ' username: ' + username);
        //DB:
        // this.createNewSpectatorToFirebase(roomId, userId, username);
        this.props.history.push('/werewolf/room/' + roomId + '/' + userId);
      }else{
        window.alert("User name '" + username + "' has been used. Please use another one. ");
      }
    } else {
      window.alert("Invalid Room ID");
    }
  }

  checkAvailableusername(roomId, username) {
    var available = true;
    Object.entries(this.state.rooms[roomId].players).map(([key, player]) => {
      // window.alert("checkAvailableusername | player name: " +player.name);
      if (username === player.name) {
        available = false;
      }
    })
    if (this.state.rooms[roomId].hasOwnProperty("spectators")){
      Object.entries(this.state.rooms[roomId].spectators).map(([key, player]) => {
        // window.alert("checkAvailableusername | spectator name: " +player.name);
        if (username === player.name) {
          available = false;
        }
      })
    }
    return available;
  }

  // Call firebase database
  createNewRoomToFirebase(roomId, userId, username, role) {
    let roomRef = this.database.ref('/' + roomId);
    roomRef.child('game').set(constants.werewolf.setting.game);
    roomRef.child('config').set(constants.werewolf.setting.config);
    roomRef.child('phase').set(constants.werewolf.setting.phase);
    this.createNewPlayerToFirebase(roomId, userId, username, role);
  }

  createNewPlayerToFirebase(roomId, userId, username, role) {
    let roomRef = this.database.ref('/' + roomId + '/players');
    var player = {
      id: userId,
      name: username,
      role: role,
      isAlive: true,
      select: null,
      selectedBy: null,
      votes: 0,
    };
    roomRef.child(userId).set(player);
  }

  createNewSpectatorToFirebase(roomId, userId, username) {
    window.alert('createNewSpectator');
      let roomRef = this.database.ref('/' + roomId + '/spectators');
      var spectator = {
        id: userId,
        name: username,
      };
      roomRef.child(userId).set(spectator);
  }

  //
  getGameOptionList() {
    var optionList = []
    for (const game in constants.games) {
      optionList.push(<option value={game} selected>{constants.games[game]}</option>)
    }
    return optionList;
  }

  render() {
    return (
      <div>
        <h1 className="text-center p-5">Welcome</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.joinExistingGame}>
                <div className="form-group row">
    <label for="roomId" className="col-sm-4 col-form-label col-form-label-lg">{label.roomId}</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control form-control-lg" id="roomId" placeholder="Room ID" required={true} />
                  </div>
                </div>
                <div className="form-group row">
    <label for="username" className="col-sm-4 col-form-label col-form-label-lg">{label.username}</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control form-control-lg" id="username" placeholder="User Name" required={true} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label col-form-label-lg" for="spectator">{label.spectator}?</label>
                  <div className="col-sm-8">
                    <input className="form-control form-control-lg" type="checkbox" id="spectator"></input>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">{label.button.join}</button>
              </form>
            </div>
            <div className="col">
              <form onSubmit={this.createNewGame}>
                <div className="form-group row">
    <label for="username" className="col-sm-4 col-form-label col-form-label-lg">{label.game}</label>
                  <select className="custom-select col-sm-8" id="gameSelect">
                    {this.getGameOptionList()}
                  </select>
                </div>
                <div className="form-group row">
                  <label for="username" className="col-sm-4 col-form-label col-form-label-lg">{label.username}</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control form-control-lg" id="username" placeholder="User Name" required={true} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">{label.button.createGame}</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
