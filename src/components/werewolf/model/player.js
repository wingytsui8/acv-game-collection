// player.js
import * as team from './team';

export const ROLE_FOOL = "fool";
export const ROLE_HUNTER = "hunter";
export const ROLE_GUARD = "guard";
export const ROLE_PROPHET = "prophet";
export const ROLE_VILLAGER = "villager";
export const ROLE_WEREWOLF = "werewolf";
export const ROLE_WITCH = "witch";


class Role {
  constructor() {
    this.role = ROLE_VILLAGER;
    this.name = '普通村民 Villager';
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
class Villager extends Role {
  constructor() {
    super();
    this.role = ROLE_VILLAGER;
    this.name = '普通村民 Villager';
    this.description = {
      en: '',
      zh: '',

    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 10;
  }
}

class Werewolf extends Role {
  constructor() {
    super();
    this.role = ROLE_WEREWOLF;
    this.name = '狼人 Werewolf';
    this.description = {
      en: 'Each night, the werewolves pick 1 (this can change with the Personnages expansion pack) player to kill. The victim can be anyone except the Moderator, including other werewolves. The next day, they pretend to be a villager and try to seem unsuspicious. The number of werewolves in a game varies depending on the number of players.',
      zh: '每回合「黑夜」可吞噬一人。狼人可以選擇不吞噬人（空刀）或是吞噬狼人（自刀）。如果狼人團隊無法統一擊殺目標，則無人死亡，形成平安夜。「白天」則可直接暴露身份強制進入黑夜（自爆），或者暴露身份強制帶走任意玩家（明刀）進入下一白天，若該玩家為獵人以外神明則無法發動技能（意即女巫不能投毒、預言家無法查驗）。',

    };
    this.team = team.TEAM_WEREWOLF;
    this.maxNumber = 10;
  }
  //
  kill() {
    //TODO:
  }
}

class Prophet extends Role {
  constructor() {
    super();
    this.role = ROLE_PROPHET;
    this.name = '預言家 Prophet';
    this.description = {
      en: 'Each night, they can discover the real identity of a player. They must help the other villagers but discretely to not be found by werewolves.',
      zh: '每回合「黑夜」可以查看一位玩家身份（好人或狼人，但查不到准确身份，比如说女巫、猎人等）。',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
  }
  check() {
    //TODO:
  }
}

class Guard extends Role {
  constructor() {
    super();
    this.role = ROLE_GUARD;
    this.name = '守衛 Guard';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
  }
  protect() {
    //TODO:
  }
}

class Hunter extends Role {
  constructor() {
    super();
    this.role = ROLE_HUNTER;
    this.name = '獵人 Hunter';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
  }
  kill() {
    //TODO:
  }
}

class Witch extends Role {
  constructor() {
    super();
    this.role = ROLE_WITCH;
    this.name = '女巫 Witch';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_VILLAGER;
    this.maxNumber = 1;
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

class Fool extends Role {
  constructor() {
    super();
    this.role = ROLE_FOOL;
    this.name = '白痴 Fool';
    this.description = {
      en: '',
      zh: '',
    };
    this.team = team.TEAM_SOLO;
    this.maxNumber = 1;
  }
}

// class Player {
//   constructor(id, username, role) {
//     this.id = id;
//     this.username = username;
//     switch (role) {
//       case ROLE_FOOL:
//         this.role = new Fool();
//         break;
//       case ROLE_HUNTER:
//         this.role = new Hunter();
//         break;
//       case ROLE_GUARD:
//         this.role = new Guard();
//         break;
//       case ROLE_PROPHET:
//         this.role = new Prophet();
//         break;
//       case ROLE_VILLAGER:
//         this.role = new Villager();
//         break;
//       case ROLE_WEREWOLF:
//         this.role = new Werewolf();
//         break;
//       case ROLE_WITCH:
//         this.role = new Witch();
//         break;
//     }
//   }
// }

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