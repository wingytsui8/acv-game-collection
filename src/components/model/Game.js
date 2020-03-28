// Game.js
import firebase from '../firebase/firebase';
import Spectator from './Spectator';

const PATH_ROOT = '/';
const PATH_PLAYERS = '/players';
const PATH_SPECTATORS = '/spectators';

const ROOM_ID_DIGIT = '6';
const PLAYER_ID_DIGIT = '10';

class Game {
  constructor(gameName) {
    this.game = {
      game : gameName, // werewolf
      players : {}, // the first player
      spectators : {},
      phase : '',
    }
  }

  generateId(digit) {
    let base = Math.pow(10, digit);
    let id = base/10 + Math.floor(Math.random() * (base * 0.9));
    return id;
  }

  //DB: write
  database = firebase.database();
  
  addGameToFirebase(){
    let roomId = this.generateId(ROOM_ID_DIGIT)
    this.game.roomId = roomId;
    //DB: write
    let roomRef = this.database.ref(PATH_ROOT);
    roomRef.child(this.game.roomId).set(this.game);
  }

  // Pending Phase
  addPlayerToFirebase(newPlayer){
    let playerId = this.generateId(PLAYER_ID_DIGIT);
    // console.log('[Game - addPlayerToFirebase] roomId: ' +this.game.roomId + ' | playerId: ' + playerId);
    newPlayer.id = playerId;
    //DB: write
    let roomRef = this.database.ref(PATH_ROOT + this.game.roomId + PATH_PLAYERS);
    roomRef.child(newPlayer.id).set(newPlayer);
    return playerId;
  }

  removePlayerFromFirebase(){

  }

  addSpectator(username){
    let id = this.generateId(PLAYER_ID_DIGIT);
    // console.log('[Game - addSpectator] roomId: ' +this.game.roomId + ' | id: ' + id);
    var spectator = new Spectator(id, username);
    let roomRef = this.database.ref(PATH_ROOT + this.game.roomId + PATH_SPECTATORS);
    roomRef.child(id).set(spectator);
    return id;
  }

  removeSpectator(){

  }
  
}

export default Game;