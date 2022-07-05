import React from 'react';

const LibrarySong = ({ song }) => { 
    return(
        <div className="library-song">
            <img src={song.cover} alt="album cover" />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    )
}

export default LibrarySong;