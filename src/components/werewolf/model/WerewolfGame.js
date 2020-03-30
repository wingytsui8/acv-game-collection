// WerewolfGame.js
import React, { Component } from 'react';
import * as playerModel from './Player';
import * as phaseModel from './Phase';
import * as setting from './Setting';
import * as constants from './../../../constants/game';
import * as team from './Team';

import Game from './../../model/Game';
import firebase from './../../firebase/firebase';

class WerewolfGame extends Game {
  constructor() {
    super(constants.GAME_WEREWOLF);
    this.game.roles = playerModel.SUGGESTED_ROLE[setting.MIN_PLAYERS];
    this.game.phaseDuration = phaseModel.DEFAULT_DURATION;
    this.game.setting = setting.DEFAULT_SETTING;
    this.game.phase = phaseModel.PHASE_PENDING; //pending
  }

  database = firebase.database();

  createGame(username) {
    this.addGameToFirebase();
    return this.addPlayer(username);
  }

  // Pending Phase
  addPlayer(username) {
    var newPlayer = new playerModel.Player(username);
    return this.addPlayerToFirebase(newPlayer);
  }

  updateRoleConfiguration() {

  }

  updatePhaseConfiguration() {

  }

  updateOtherConfiguration() {

  }

  //Pending -> Night
  assignRole() {
    console.log('[WerewolfGame - assignRole]')
    console.log(this.game.roles);
    var roleList = [];
    Object.entries(this.game.roles).map(([key, number]) => {
      // window.alert("[WerewolfGame - assignRole] | key: " + key + " | num: " + number);
      for (var i = 0; i < number; i++) {
        roleList.push(key);
      }
      return true;
    })

    console.log(roleList);

    var id = Object.keys(this.game.players);
    for (var i = 0; i < id.length; i++) {
      var player = this.game.players[id[i]];
      let rand = Math.floor(Math.random() * roleList.length);
      var role = roleList[rand];
      roleList.splice(rand,1);
      console.log('rand: ' + rand + ' | roleList: ' + roleList);
      switch (role) {
        case playerModel.ROLE_WEREWOLF:
          player = new playerModel.Werewolf(player.id, player.username);
          break;
        case playerModel.ROLE_WITCH:
          player = new playerModel.Witch(player.id, player.username);
          break;
        case playerModel.ROLE_PROPHET:
          player = new playerModel.Prophet(player.id, player.username);
          break;
        case playerModel.ROLE_GUARD:
          player = new playerModel.Guard(player.id, player.username);
          break;
        case playerModel.ROLE_HUNTER:
          player = new playerModel.Hunter(player.id, player.username);
          break;
        case playerModel.ROLE_FOOL:
          player = new playerModel.Fool(player.id, player.username);
          break;
        default:
          player = new playerModel.Villager(player.id, player.username);
          break;

      }
      console.log(player);
      this.updatePlayer(player);
    }

  }

  //voting

}

export default WerewolfGame;


export const INIT_PHASE = phaseModel.PHASE_PENDING;
export const werewolf = {
  setting: {
    phaseDuration: {
      night: 20,
      witch: 30,
      discussion: 40,
      voting: 50,
    },
    setting: {
      displayRole: false,
    },
    roles: {
      werewolf: 2,
      villager: 2,
      prophet: 1,
      guard: 1,
      witch: 0,
      hunter: 0,
      fool: 0,
    },
    roomId: 504645,
    game: "werewolf",
    'players': {
      "1024789492": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 1024789492,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "NaN",
        "votes": 0
      },
      "1039064158": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 1039064158,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "test22",
        "votes": 0
      },
      "1305237556": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 1305237556,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "test2",
        "votes": 0
      },
      "2103230223": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 2103230223,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "NaN",
        "votes": 0
      },
      "10778525503": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 10778525503,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "test21",
        "votes": 0
      },
      "9182316870": {
        "confirmed": true,
        "description": {
          "en": "",
          "zh": ""
        },
        "id": 9182316870,
        "isAlive": true,
        "maxNumber": 10,
        "role": "villager",
        "roleName": "普通村民 Villager",
        "team": "villager",
        "username": "NaN",
        "votes": 0
      }
    },
    spectators: {
      //MOCK: remove all spectators
      12345678: {
        id: 12345678,
        username: "Testing 1",
      },
      987654321: {
        id: 987654321,
        username: "Testing 2",
      },
      3456345: {
        id: 3456345,
        username: "Testing 3",
      }
    },
    phase: INIT_PHASE
  }
}
