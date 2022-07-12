import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Player = ({setCurrentSong, currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setSongs}) => {
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                }
            }else {
                return {
                    ...song,
                    active: false
                }
            }
        });
        setSongs(newSongs)
    }
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
    };
    const moveInputHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
        console.log(e.target.value)
    };
    const skipTackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if(direction === 'skip-back') {
            if((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if(isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if(isPlaying) audioRef.current.play();
    };

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                {/* backgroundL `linear-gradient(to right, ${currentSong.color[0], ${currentSong.color[1]}}) */}
                <div className="track">
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={moveInputHandler} type="range" />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ?  getTime(songInfo.duration) : "0:00"}</p>
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