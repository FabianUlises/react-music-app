import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
    const songSelectHandler = () => {
        // setCurrentSong(song)
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);
    };
    return(
        <div onClick={songSelectHandler} className="library-song">
            <img src={song.cover} alt="album cover" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;