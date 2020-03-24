// game.js
export const initPhase = "pending";

export const games = {
  "werewolf": "狼人 Werewolf"
};

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
    players: {
         //MOCK: remove all players
      999 : {
        id : 999,
        name : "9",
        role : "werewolf",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },
      
      111 : {
        id : 111,
        name : "1",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : false,
        action :{}
      },
      222 : {
        id : 222,
        name : "2",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },

      333 : {
        id : 333,
        name : "3",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },
      444 : {
        id : 444,
        name : "4",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },

      555 : {
        id : 555,
        name : "5",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },
      666 : {
        id : 666,
        name : "6",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },

      777 : {
        id : 777,
        name : "7",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },
      888 : {
        id : 888,
        name : "8",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
        confirmed : true,
        action :{}
      },
    },
    spectators: {
      //MOCK: remove all spectators
      12345678 : {
        id : 12345678,
        name : "Testing 1",
      },
      987654321 : {
        id : 987654321,
        name : "Testing 2",
      },
      3456345 : {
        id : 3456345,
        name : "Testing 3",
      }
    },
    phase: initPhase
  }
}

