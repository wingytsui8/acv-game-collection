// game.js
export const initStatus = "pending";

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
      seer: 1,
      guard: 1,
      witch: 0,
      hunter: 0,
      fool: 0,
      total: 6,
    },
    game: "werewolf",
    players: {
      userId : {
        id : "userId",
        name : "User Name",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
      },
      93853851792 : {
        id : 93853851792,
        name : "Testing 1",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
      },
      1234567890 : {
        id : 1234567890,
        name : "Test 2",
        role : "villager",
        isAlive : true,
        select : null,
        selectedBy : null,
        votes : 0,
      },
    },
    status: "pending"
  }
}

