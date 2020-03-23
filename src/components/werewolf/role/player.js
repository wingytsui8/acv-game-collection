// player.js
import * as constants from './../../../constants/werewolf';

class Player  {
  constructor(){
    this.name= '狼人 Werewolf ',
    this.description = {
      en: '',
      zh: '',
      
    };
     this.team= '';
     this.role = "villager",
     this.isAlive = true,
     this.select = null,
     this.selectedBy = null,
     this.votes = 0,
     this.confirmed = true,
     this.action = {}
  }
}

class Werewolf extends Player {
  constructor(){
    super(); 
    this.name= '狼人 Werewolf',
    this.description = {
      en: 'Each night, the werewolves pick 1 (this can change with the Personnages expansion pack) player to kill. The victim can be anyone except the Moderator, including other werewolves. The next day, they pretend to be a villager and try to seem unsuspicious. The number of werewolves in a game varies depending on the number of players.',
      zh: '每回合「黑夜」可吞噬一人。狼人可以選擇不吞噬人（空刀）或是吞噬狼人（自刀）。如果狼人團隊無法統一擊殺目標，則無人死亡，形成平安夜。「白天」則可直接暴露身份強制進入黑夜（自爆），或者暴露身份強制帶走任意玩家（明刀）進入下一白天，若該玩家為獵人以外神明則無法發動技能（意即女巫不能投毒、預言家無法查驗）。',
      
    };
     this.team= 'werewolf';

}
}
