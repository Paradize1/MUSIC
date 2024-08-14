import React from 'react';

const SongList = ({ songs, setCurrentSong }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <div 
          key={index} 
          className="song" 
          onDoubleClick={() => setCurrentSong(song)}
        >
          {song.title}
        </div>
      ))}
    </div>
  );
};

export default SongList;
