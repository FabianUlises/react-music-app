import React, { useRef, useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './util';

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState()
  const [songInfo, setSongInfo] = useState({  
    currentTime: 0,
    duration: 0
})
const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
}
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo}/>
      <Library songs={songs} setCurrentSong={setCurrentSong} />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} audioRef={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
