// Player.js
import * as team from './Team';

export const ROLE_FOOL = "fool";
export const ROLE_HUNTER = "hunter";
export const ROLE_GUARD = "guard";
export const ROLE_PROPHET = "prophet";
export const ROLE_VILLAGER = "villager";
export const ROLE_WEREWOLF = "werewolf";
export const ROLE_WITCH = "witch";

export class Player {
  constructor(username) {
    // this.id = id;
    this.username = username;
    // this.isMe = false;
    this.role = ROLE_VILLAGER;
    this.roleName = '普通村民 Villager';
    this.description = {
      en: '',
      zh: '',

    };
    this.team = 'villager';
    this.maxNumber = 10;
    this.isAlive = true;
    this.select = null;
    this.selectedBy = null;
    this.votes = 0;
    this.confirmed = true;
    this.action = {};
  }
  Vote() {
    //TODO:
  }
  Die() {
    //TODO:
  }
  Sleep() {
    //TODO:
  }
}
export class Villager extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_VILLAGER;
    this.roleName = '普通村民 Villager';
    this.description = {
      en: '',
      zh: '',

    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 10;
    this.minNumber = 1;
  }
}

export class Werewolf extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_WEREWOLF;
    this.roleName = '狼人 Werewolf';
    this.description = {
      en: 'Each night, the werewolves pick 1 (this can change with the Personnages expansion pack) player to kill. The victim can be anyone except the Moderator, including other werewolves. The next day, they pretend to be a villager and try to seem unsuspicious. The number of werewolves in a game varies depending on the number of players.',
      zh: '每回合「黑夜」可吞噬一人。狼人可以選擇不吞噬人（空刀）或是吞噬狼人（自刀）。如果狼人團隊無法統一擊殺目標，則無人死亡，形成平安夜。「白天」則可直接暴露身份強制進入黑夜（自爆），或者暴露身份強制帶走任意玩家（明刀）進入下一白天，若該玩家為獵人以外神明則無法發動技能（意即女巫不能投毒、預言家無法查驗）。',

    };
    this.team = team.TEAM_WEREWOLF;
    this.maxNumber = 10;
    this.minNumber = 1;
  }
  //
  kill() {
    //TODO:
  }
}

export class Prophet extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_PROPHET;
    this.roleName = '預言家 Prophet';
    this.description = {
      en: 'Each night, they can discover the real identity of a  They must help the other villagers but discretely to not be found by werewolves.',
      zh: '每回合「黑夜」可以查看一位玩家身份（好人或狼人，但查不到准确身份，比如说女巫、猎人等）。',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
    this.minNumber = 0;
  }
  check() {
    //TODO:
  }
}

export class Guard extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_GUARD;
    this.roleName = '守衛 Guard';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
    this.minNumber = 0;
  }
  protect() {
    //TODO:
  }
}

export class Hunter extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_HUNTER;
    this.roleName = '獵人 Hunter';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
    this.minNumber = 0;
  }
  kill() {
    //TODO:
  }
}

export class Witch extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_WITCH;
    this.roleName = '女巫 Witch';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
    this.minNumber = 0;
    this.action = {
      poison: 1,
      medicine: 1,
    };
  }
  kill() {
    //TODO:
  }
  protect() {
    //TODO:
  }
}

export class Fool extends Player {
  constructor(id, username) {
    super(username);
    this.id = id;
    this.role = ROLE_FOOL;
    this.roleName = '白痴 Fool';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_SOLO;
    this.maxNumber = 1;
    this.minNumber = 0;
  }
}



export const ROLE_LIST = [
  new Villager(),
  new Werewolf(),
  new Prophet(),
  new Guard(),
  new Hunter(),
  new Witch(),
  new Fool(),
]

export default ROLE_LIST;

export const SUGGESTED_ROLE = {
    6: {
      [ROLE_WEREWOLF]: 2,
      [ROLE_VILLAGER]: 2,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 0,
      [ROLE_HUNTER]: 0,
      [ROLE_FOOL]: 0,
    },
    7: {
      [ROLE_WEREWOLF]: 2,
      [ROLE_VILLAGER]: 3,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 0,
      [ROLE_HUNTER]: 0,
      [ROLE_FOOL]: 0,
    },
    8: {
      [ROLE_WEREWOLF]: 2,
      [ROLE_VILLAGER]: 3,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 0,
      [ROLE_FOOL]: 0,
    },
    9: {
      [ROLE_WEREWOLF]: 3,
      [ROLE_VILLAGER]: 3,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 0,
      [ROLE_FOOL]: 0,
    },
    10: {
      [ROLE_WEREWOLF]: 3,
      [ROLE_VILLAGER]: 4,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 0,
      [ROLE_FOOL]: 0,
    },
    11: {
      [ROLE_WEREWOLF]: 3,
      [ROLE_VILLAGER]: 4,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 0,
    },
    12: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 4,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 0,
    },
    13: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 5,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 0,
    },
    14: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 5,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 1,
    },
    15: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 6,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 1,
    },
    16: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 7,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 1,
    },
    17: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 8,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 1,
    },
    18: {
      [ROLE_WEREWOLF]: 4,
      [ROLE_VILLAGER]: 9,
      [ROLE_PROPHET]: 1,
      [ROLE_GUARD]: 1,
      [ROLE_WITCH]: 1,
      [ROLE_HUNTER]: 1,
      [ROLE_FOOL]: 1,
    },
  
};
