// Teams.js
export const TEAM_SOLO = "solo";
export const TEAM_VILLAGER = "villager";
export const TEAM_WEREWOLF = "werewolf";

export const TEAM_LIST = {
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
export class TEAM {
  constructor(team) {
    this.name = TEAM_LIST[team].name;
    this.memberNumber = 0;
    this.end = false;
  }
  addMember (){
    this.memberNumber +=1;
  }
  minusMember (){
    if (this.memberNumber > 0){
      this.memberNumber -=1;
    }else{
      this.end = true;
    }
  }
}


export default TEAM_LIST;