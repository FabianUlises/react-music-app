import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size='2x' className='skip-back' icon={faAngleLeft} />
                <FontAwesomeIcon size='2x' className='play' icon={faPlay} />
                <FontAwesomeIcon size='2x' className='skip-forward' icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player;