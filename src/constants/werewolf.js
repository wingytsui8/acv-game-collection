// werewolf.js
export const roleWerewolf = "werewolf";
export const roleProphet= "prophet";
export const roleGuard= "guard";
export const roleHunter = "hunter";
export const roleWitch= "witch";
export const roleVillager = "villager";
export const roleFool = "fool";

export const phasePending = "pending";
export const phaseNight= "night";
export const phaseWitch= "witch";
export const phaseDiscussion = "discussion";
export const phaseVoting= "voting";
export const phaseEnd = "end";


export const roles = {
  werewolf: {
    name: '狼人 Werewolf ',
    description: 'Each night, the werewolves pick 1 (this can change with the Personnages expansion pack) player to kill. The victim can be anyone except the Moderator, including other werewolves. The next day, they pretend to be a villager and try to seem unsuspicious. The number of werewolves in a game varies depending on the number of players.',
    description_zh: '每回合「黑夜」可吞噬一人。狼人可以選擇不吞噬人（空刀）或是吞噬狼人（自刀）。如果狼人團隊無法統一擊殺目標，則無人死亡，形成平安夜。「白天」則可直接暴露身份強制進入黑夜（自爆），或者暴露身份強制帶走任意玩家（明刀）進入下一白天，若該玩家為獵人以外神明則無法發動技能（意即女巫不能投毒、預言家無法查驗）。',
    team: 'werewolf',
  },
  prophet: {
    name: '預言家 prophet',
    description: 'Each night, they can discover the real identity of a player. They must help the other villagers but discretely to not be found by werewolves.',
    description_zh: '每回合「黑夜」可以查看一位玩家身份（好人或狼人，但查不到准确身份，比如说女巫、猎人等）。',
    team: 'villager',
  },
  guard: {
    name: '守衛 Guard',
    description: '',
    description_zh: '',
    team: 'villager',
  },
  hunter: {
    name: '獵人 Hunter',
    description: 'If they are killed by werewolves or eliminated by vote, they must immediately kill another player of their choice.',
    description_zh: '當被狼人吞噬或被村民投票杀死後，獵人可以反殺一位疑似狼人的玩家，兩人同歸於盡。',
    team: 'villager',
  },
  witch: {
    name: '女巫 Witch',
    description: '女巫擁有一瓶解藥和一瓶毒藥，同一晚不可以同时使用两瓶藥劑，不可以自救（第一晚除外。若被吞噬的玩家在晚上被守衛保護，女巫亦同时使用解药，该玩家仍然出局。若玩家被守衛保護卻被女巫投毒，則此玩家出局。',
    description_zh: '女巫擁有一瓶解藥和一瓶毒藥，同一晚不可以同时使用两瓶藥劑，不可以自救（第一晚除外。若被吞噬的玩家在晚上被守衛保護，女巫亦同时使用解药，该玩家仍然出局。若玩家被守衛保護卻被女巫投毒，則此玩家出局。',
    team: 'villager',
  },
  villager: {
    name: '普通村民 Villager',
    description: '沒有任何能力，只能通過白天投票將狼人處死。夜晚時被狼人吞噬前一直相伴。',
    description_zh: '沒有任何能力，只能通過白天投票將狼人處死。夜晚時被狼人吞噬前一直相伴。',
    team: 'villager',
  },
  fool: {
    name: '白痴 Fool',
    description: '沒有任何能力，只能通過白天投票將狼人處死。夜晚時被狼人吞噬前一直相伴。',
    description_zh: '沒有任何能力，只能通過白天投票將狼人處死。夜晚時被狼人吞噬前一直相伴。',
    team: 'solo',
  },
}

export const teams = {
  werewolf: {
    name: '狼人 Werewolf',
   
  },
  villager: {
    name: '普通村民 Villager',
  
  },
  solo: {
    name: '自己 Solo',
  
  }
}

export const phase = {
  pending: {
    name: '等待玩家 Waiting for player',
    description: {
      others : '等待玩家 Waiting for player'
    },
    time: 9999,
    next: 'night',
  },
  night: {
    name: '晚上 At night',
    description: {
      werewolf : '狼人開始殺害一個村民',
      prophet : '查看一位玩家的身份',
      graud : '守衛一位玩家',
      others : '訓教 Go to sleep'
    },
    time: 60,
    next: 'witch',
  },
  witch: {
    name: '女巫 Witch',
    description: {
      witch : '女巫可選擇是否使用魔法去救人或殺人',
      others : '女巫 Witch'
    },
    time: 60,
    next: 'discussion',
  },
  discussion: {
    name: '討論 Discussion',
    description: {
      others : '討論 Discussion'
    },
    time: 60,
    next: 'voting',
  },
  voting: {
    name: '投票 Voting',
    description: {
      others : '投票 Voting'
    },
    time: 60,
    next: 'night',
  },
  end: {
    name: '遊戲完結 End',
    description: {
      others : '遊戲完結 End'
    },
    time: 9999,
  }
}