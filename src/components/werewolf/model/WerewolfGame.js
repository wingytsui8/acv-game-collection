// WerewolfGame.js
import React, { Component } from 'react';
import * as player from './Player';
import * as phase from './Phase';
import * as setting from './Setting';
import * as constants from './../../../constants/game';
import * as team from './Team';

import Game from './../../model/Game';
import firebase from './../../firebase/firebase';

class WerewolfGame extends Game{
  constructor() {
    super(constants.GAME_WEREWOLF);
    this.game.setting = setting.DEFAULT_SETTING; 
    this.game.phase = phase.PHASE_PENDING //pending
  }

  database = firebase.database();
  
  createGame(username){
    this.addGameToFirebase();
    return this.addPlayer(username);
  }

  // Pending Phase
  addPlayer(username){
    var newPlayer = new player.Player(username);
    return this.addPlayerToFirebase(newPlayer);
  }

  updateRoleConfiguration(){

  }

  updatePhaseConfiguration(){

  }

  updateOtherConfiguration(){

  }

  //Pending -> Night
  assignRole(){

  }

  //voting
  
}

export default WerewolfGame;


export const INIT_PHASE = phase.PHASE_PENDING;
export const werewolf = {
  setting: {
    config: {
      duration: {
        night: 20,
        witch: 30,
        discussion: 40,
        voting: 50
      },
      displayRole : false,
    },
    roles: {
      werewolf: 2,
      villager: 2,
      prophet: 1,
      guard: 1,
      witch: 0,
      hunter: 0,
      fool: 0,
      total: 6,
    },
    game: "werewolf",
    'players' : {
      "1024789492" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 1024789492,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "NaN",
        "votes" : 0
      },
      "1039064158" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 1039064158,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "test22",
        "votes" : 0
      },
      "1305237556" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 1305237556,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "test2",
        "votes" : 0
      },
      "2103230223" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 2103230223,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "NaN",
        "votes" : 0
      },
      "10778525503" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 10778525503,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "test21",
        "votes" : 0
      },
      "9182316870" : {
        "confirmed" : true,
        "description" : {
          "en" : "",
          "zh" : ""
        },
        "id" : 9182316870,
        "isAlive" : true,
        "maxNumber" : 10,
        "role" : "villager",
        "roleName" : "普通村民 Villager",
        "team" : "villager",
        "username" : "NaN",
        "votes" : 0
      }
    },
    spectators: {
      //MOCK: remove all spectators
      12345678 : {
        id : 12345678,
        username : "Testing 1",
      },
      987654321 : {
        id : 987654321,
        username : "Testing 2",
      },
      3456345 : {
        id : 3456345,
        username : "Testing 3",
      }
    },
    phase: INIT_PHASE
  }
}
