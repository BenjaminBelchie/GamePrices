import { useState } from 'react'
import GameInfoDialog from '../GameInfoDialog'
import './index.css'
import {Game} from '../../types/Game';

type Props  = { 
    game:Game
}

const GameCard: React.FC<Props> = (props) => {
    const [showInfoDialog, setShowInfoDialg] = useState(false);

    return(
        <>
        <div 
            className="card" 
            style={{
                backgroundPosition: "center center", 
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat", 
                backgroundImage:`url(${props.game.thumb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2))`, 
                backgroundBlendMode:"overlay"}}
            onClick={() => {setShowInfoDialg(true)}}>

        </div>
        <GameInfoDialog open={showInfoDialog} setOpen={setShowInfoDialg} game={props.game}/>
        </>
    )
}

export default GameCard;