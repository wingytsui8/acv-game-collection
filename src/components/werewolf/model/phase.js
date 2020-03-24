// phase.js
import * as player from './player';

export const PHASE_PENDING = "pending";
export const PHASE_NIGHT = "night";
export const PHASE_WITCH = "witch";
export const PHASE_DISCUSSION = "discussion";
export const PHASE_VOTING = "voting";
export const PHASE_END = "end";

class Phase {
  constructor() {
    this.name = '';
    this.description = {
      others : ''
    };
    this.duration = 60;
  }
}

class Pending {
  constructor() {
    this.name = '等待玩家 Waiting for player';
    this.description = {
      others : '等待玩家 Waiting for player'
    };
    this.duration = 9999;
    this.next = PHASE_NIGHT;
  }
}

class Night {
  constructor(duration) {
    this.name = '晚上 At night';
    this.description = {
      [player.ROLE_WEREWOLF] : '狼人開始殺害一個村民',
      [player.ROLE_PROPHET] : '查看一位玩家的身份',
      [player.ROLE_GUARD] : '守衛一位玩家',
      others : '訓教 Go to sleep'
    };
    this.duration = duration;
    this.next = PHASE_WITCH;
  }
}

class Witch {
  constructor(duration) {
    this.name = '女巫 Witch';
    this.description = {
      [player.ROLE_WITCH] : '女巫可選擇是否使用魔法去救人或殺人',
      others : '訓教 Go to sleep'
    };
    this.duration = duration;
    this.next = PHASE_DISCUSSION;
  }
}
class Discussion {
  constructor(duration) {
    this.name = '討論 Discussion';
    this.description = {
      others : '討論 Discussion'
    };
    this.duration = duration;
    this.next = PHASE_VOTING;
  }
}

class Voting {
  constructor(duration) {
    this.name = '投票 Voting';
    this.description = {
      others : '投票 Voting'
    };
    this.duration = duration;
    this.next = PHASE_NIGHT;
  }
}

class End {
  constructor() {
    this.name = '遊戲完結 End';
    this.description = {
      others : '遊戲完結 End'
    };
    this.duration = 9999;
    this.next = PHASE_PENDING;
  }
}


export default Phase;