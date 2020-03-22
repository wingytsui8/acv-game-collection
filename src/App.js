import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from './components/firebase/firebase';
import * as constants from './constants/game';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
  }

  database = firebase.database();

  // FIXME: Connect database
  componentDidMount(){
    const roomsRef = firebase.database().ref('/');
    roomsRef.on('value', (snapshot) => {
      let rooms = snapshot.val();
      this.setState ({
        rooms : rooms
      })
    })
  }

  generateUserId() {
    var userId = 10000000000 + Math.floor(Math.random() * (100000000000));
    return userId;
  }

  joinExistingGame = (event) => {
    // console.log("[joinExistingGame] Room id: " + event.target.roomId.value + " User Name: " + event.target.userName.value)
    let roomId = event.target.roomId.value;
    let userId = this.generateUserId()
    let userName = event.target.userName.value;
    // TODO: add database records : new player
    // TODO: player / onlooker logic
    if (this.state.rooms.hasOwnProperty(roomId)){
         this.createNewPlayerToFirebase(roomId, userId, userName, "villager");
      this.props.history.push('/werewolf/room/' + roomId + '/' + userId);
    }else{
      window.alert("Invalid Room ID");
    }
  }
  
  createNewGame = (event) => {
    let roomId = 100000 + Math.floor(Math.random() * (1000000));
    let userId = this.generateUserId();
    let userName = event.target.userName.value;
    this.createNewRoomToFirebase(roomId, userId, userName, "villager");
    this.props.history.push('/werewolf/room/' + roomId + '/' + userId);
  }

  // Call firebase database
  createNewRoomToFirebase(roomId, userId, userName, role){
    let roomRef = this.database.ref('/' + roomId);
    roomRef.child('game').set(constants.werewolf.setting.game);
    roomRef.child('config').set(constants.werewolf.setting.config);
    roomRef.child('status').set(constants.werewolf.setting.status);
    this.createNewPlayerToFirebase(roomId, userId, userName, role);
  }

  createNewPlayerToFirebase(roomId, userId, userName, role){
    let roomRef = this.database.ref('/' + roomId + '/players');
    var player = {
      id : userId,
      name : userName,
      role : role,
      isAlive : true,
      select : null,
      selectedBy : null,
      votes : 0,
    };
    roomRef.child(userId).set(player);
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
        <h1 class="text-center p-5">Welcome</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <form onSubmit={this.joinExistingGame}>
                <div class="form-group row">
                  <label for="roomId" class="col-sm-4 col-form-label col-form-label-lg">Room ID</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="roomId" placeholder="Room ID" required={true} />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userName" class="col-sm-4 col-form-label col-form-label-lg">User Name</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="userName" placeholder="User Name" required={true} />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Join as a player</button>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Join as an onlooker</button>
              </form>
            </div>
            <div class="col">
              <form onSubmit={this.createNewGame}>
                <div class="form-group row">
                  <label for="userName" class="col-sm-4 col-form-label col-form-label-lg">Game</label>
                  <select class="custom-select col-sm-8" id="gameSelect">
                    {this.getGameOptionList()}
                  </select>
                </div>
                <div class="form-group row">
                  <label for="userName" class="col-sm-4 col-form-label col-form-label-lg">User Name</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="userName" placeholder="User Name" required={true} />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Create a new game</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
