// Phase.js
import * as player from './Player';

export const PHASE_PENDING = "pending";
export const PHASE_NIGHT = "night";
export const PHASE_WITCH = "witch";
export const PHASE_DISCUSSION = "discussion";
export const PHASE_VOTING = "voting";
export const PHASE_END = "end";
export const ROUND_LIST = [PHASE_NIGHT, PHASE_WITCH, PHASE_DISCUSSION, PHASE_VOTING];
export const PHASE_LIST = [PHASE_PENDING, PHASE_NIGHT, PHASE_WITCH, PHASE_DISCUSSION, PHASE_VOTING, PHASE_END];

export const PHASE = {
  [PHASE_PENDING] : {
    name : '等待玩家 Waiting for player',
    description : {
      others : '等待玩家 Waiting for player'
    }, 
    duration : 9999,
    nextPhase : PHASE_NIGHT
  },
  [PHASE_NIGHT] : {
    name : '晚上 At night',
    description : {
      [player.ROLE_WEREWOLF] : '狼人開始殺害一個村民',
      [player.ROLE_PROPHET] : '查看一位玩家的身份',
      [player.ROLE_GUARD] : '守衛一位玩家',
      others : '訓教 Go to sleep'
    }, 
    duration : 60,
    nextPhase : PHASE_WITCH
  },
  [PHASE_WITCH] : {
    name : '女巫 Witch',
    description : {
      [player.ROLE_WITCH] : '女巫可選擇是否使用魔法去救人或殺人',
      others : '訓教 Go to sleep'
    }, 
    duration : 60,
    nextPhase : PHASE_DISCUSSION
  },
  [PHASE_DISCUSSION] : {
    name :  '討論 Discussion',
    description : {
      others :  '討論 Discussion'
    }, 
    duration : 60,
    nextPhase : PHASE_VOTING
  },
  [PHASE_VOTING] : {
    name : '投票 Voting',
    description : {
      others : '投票 Voting'
    }, 
    duration : 60,
    nextPhase : PHASE_END
  },
  [PHASE_END] : {
    name : '遊戲完結 End',
    description : {
      others : '遊戲完結 End'
    }, 
    duration : 9999,
    nextPhase : PHASE_PENDING
  }
}

class Phase {
  constructor(phase, duration) {
    this.phase = phase
    this.name = PHASE[phase].name;
    this.description = PHASE[phase].description;
    this.duration = duration? duration: PHASE[phase].duration;
    this.nextPhase = PHASE[phase].nextPhase;
  }
}

// export const PHASE_LIST = [
//   new Pending(),
//   new Night(),
//   new Witch(),
//   new Discussion(),
//   new Voting(),
//   new End(),
// ];

// export const ROUND_LIST = [
//   new Night(),
//   new Witch(),
//   new Discussion(),
//   new Voting(),
// ];
 
// export default PHASE_LIST;