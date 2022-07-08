import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({setCurrentSong, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs}) => {
    const playSongHandler = () => {
        console.log(audioRef.current.play())
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    };
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const moveInputHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
        console.log(e.target.value)
    }
    const skipTackHandler = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={moveInputHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon size='2x' className='skip-back' icon={faAngleLeft} onClick={() => skipTackHandler('skip-back')} />
                <FontAwesomeIcon onClick={playSongHandler} size='2x' className='play' icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon size='2x' className='skip-forward' icon={faAngleRight} onClick={() => skipTackHandler('skip-forward')} />
            </div>
        </div>
    )
};

export default Player;