import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import firebase from './components/firebase/firebase';
import * as constants from './constants/game';
import {JOIN_EXISTING_GAME} from './constants/message';
import * as label from './constants/label';

import WerewolfGame from './components/werewolf/model/WerewolfGame';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
  }

  // DB: Connect database - Read
  // componentDidMount() {
  //   const roomsRef = firebase.database().ref('/');
  //   roomsRef.on('value', (snapshot) => {
  //     let rooms = snapshot.val();
  //     this.setState({
  //       rooms: rooms
  //     })
  //   })
  // }

  createNewGame = (event) => {
    let username = event.target.username.value;
    //TODO: username checking -> no special char && do not longer than 10 char
    var werewolfGame = new WerewolfGame();
    let playerId = werewolfGame.createGame(username);

    this.props.history.push('/werewolf/room/' + werewolfGame.game.roomId + '/' + playerId);
  }

  joinExistingGame = (event) => {
    let roomId = event.target.roomId.value;
    let username = event.target.username.value;
    var spectator = event.target.spectator.checked;
    // console.log("[joinExistingGame] Room id: " + roomId + " User Name: " + username)

    if (this.state.rooms.hasOwnProperty(roomId)) {
      if (this.checkAvailableUsername(roomId, username)) {
        if (!spectator) { //player
          if (this.state.rooms[roomId].phase != constants.initPhase) {
            if (!window.confirm(JOIN_EXISTING_GAME.PHASE.INVALID)) {
              return;
            }
          } else {
            var werewolfGame = Object.assign(new WerewolfGame, { game: this.state.rooms[roomId] });
            let playerId = werewolfGame.addPlayer(username);
            this.props.history.push('/werewolf/room/' + roomId + '/' + playerId);
            return
          }
        }
        var werewolfGame = Object.assign(new WerewolfGame, { game: this.state.rooms[roomId] });
        let playerId = werewolfGame.addSpectator(username);
        this.props.history.push('/werewolf/room/' + roomId + '/' + playerId);
      } else {
        window.alert(JOIN_EXISTING_GAME.USERNAME.DUPLICATED);
      }
    } else {
      window.alert(JOIN_EXISTING_GAME.ROOM_ID.INVALID);
    }
  }

  checkAvailableUsername(roomId, username) {
    var available = true;
    Object.entries(this.state.rooms[roomId].players).map(([key, player]) => {
      // window.alert("checkAvailableUsername | player name: " + player.username);
      if (username === player.username) {
        available = false;
      }
    })
    if (this.state.rooms[roomId].hasOwnProperty("spectators")) {
      Object.entries(this.state.rooms[roomId].spectators).map(([key, player]) => {
        // window.alert("checkAvailableUsername | spectator name: " + player.username);
        if (username === player.username) {
          available = false;
        }
      })
    }
    return available;
  }

  getGameOptionList() {
    var optionList = []
    for (const game in constants.GAME_LIST) {
      optionList.push(<option value={game} selected>{constants.GAME_LIST[game]}</option>)
    }
    return optionList;
  }

  render() {
    return (
      <div>
        <h1 className="text-center p-5">{label.appName}</h1>
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
