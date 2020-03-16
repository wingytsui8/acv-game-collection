// room.js

import React from 'react'
import WerewolfCard from './card';
import WerewolfStatus from './status';

const WerewolfRoom = ({ match }) => <p>{match.params.id}</p>
class WerewolfRooms extends React.Component {
  render() {
    const { url } = this.props.match
    return (
      <div class="row">
        
        <div class="card-columns col-8">
        <WerewolfCard isAlive={true}  selectedBy="seer" votes="0" userName="Winnie" userRole="werewolf" ></WerewolfCard>
        <WerewolfCard isAlive={false} selectedBy="werewolf" votes="0" userName="Sam" userRole="seer" ></WerewolfCard>
        <WerewolfCard isAlive={true}  selectedBy="voting" votes="3" userName="Sky" userRole="witch" ></WerewolfCard>
        <WerewolfCard isAlive={false} selectedBy="voting" votes="0" userName="Amiee" userRole="werewolf" ></WerewolfCard>
        </div>
        <div class="text-center col-4">
          <WerewolfStatus status="pending"></WerewolfStatus></div>
      </div>
    )
  }
}
export default WerewolfRooms