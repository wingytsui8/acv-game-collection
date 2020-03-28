// Setting.js
import * as phase from './Phase';
import * as player from './Player';

export const MIN_PLAYERS = 6;
export const MAX_PLAYERS = 18;
export const DISPLAY_ROLE = false;

export const DEFAULT_SETTING = {
  role : player.SUGGESTED_ROLE[MIN_PLAYERS],
  phase : {
    [phase.PHASE_NIGHT] : phase.PHASE[phase.PHASE_NIGHT].duration,
    [phase.PHASE_WITCH] : phase.PHASE[phase.PHASE_WITCH].duration,
    [phase.PHASE_DISCUSSION] : phase.PHASE[phase.PHASE_DISCUSSION].duration,
    [phase.PHASE_VOTING] : phase.PHASE[phase.PHASE_VOTING].duration,
  },
  others :{
    minimumPlayers :  MIN_PLAYERS,
    maximumPlayers :  MAX_PLAYERS,
    displayRole: DISPLAY_ROLE
  }
}

export default DEFAULT_SETTING;